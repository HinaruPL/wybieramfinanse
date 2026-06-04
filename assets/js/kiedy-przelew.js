/**
 * Wybieram Finanse — Kiedy przelew?
 * Logika startowa MVP.
 */
window.WF_TRANSFER_CALCULATOR = (() => {
  const MS_MIN = 60 * 1000;
  const MS_HOUR = 60 * MS_MIN;
  const MS_DAY = 24 * MS_HOUR;

  function parseTimeToMinutes(time) {
    const [h, m] = String(time).split(":").map(Number);
    return h * 60 + m;
  }
  function setDateTime(date, time) {
    const d = new Date(date);
    const [h, m] = String(time).split(":").map(Number);
    d.setHours(h, m, 0, 0);
    return d;
  }
  function formatDateTimePL(date) {
    return new Intl.DateTimeFormat("pl-PL", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(date);
  }
  function isWeekend(date) { return date.getDay() === 0 || date.getDay() === 6; }
  function isPolishHoliday(date) {
    const fixed = new Set(["1-1", "1-6", "5-1", "5-3", "8-15", "11-1", "11-11", "12-25", "12-26"]);
    return fixed.has(`${date.getMonth() + 1}-${date.getDate()}`);
  }
  function isBusinessDay(date) { return !isWeekend(date) && !isPolishHoliday(date); }
  function nextBusinessDay(date) {
    const d = new Date(date); d.setDate(d.getDate() + 1); d.setHours(0,0,0,0);
    while (!isBusinessDay(d)) d.setDate(d.getDate() + 1);
    return d;
  }
  function sameBusinessDayOrNext(date) {
    const d = new Date(date);
    if (isBusinessDay(d)) return d;
    const shifted = new Date(d); shifted.setHours(0,0,0,0);
    while (!isBusinessDay(shifted)) shifted.setDate(shifted.getDate() + 1);
    return shifted;
  }
  function findOutgoingSession(sender, sentAt) {
    let workingDate = sameBusinessDayOrNext(sentAt);
    const sameDay = workingDate.toDateString() === sentAt.toDateString();
    const currentMinutes = sameDay ? sentAt.getHours() * 60 + sentAt.getMinutes() : -1;
    if (sender.outgoingMode === "same-day-cutoff") {
      const cutoff = sender.outgoing[0];
      if (currentMinutes <= parseTimeToMinutes(cutoff) && isBusinessDay(sentAt)) return { date: workingDate, index: 2, time: cutoff, shifted: !sameDay };
      workingDate = nextBusinessDay(sentAt);
      return { date: workingDate, index: 0, time: cutoff, shifted: true };
    }
    for (let i = 0; i < sender.outgoing.length; i++) {
      const time = sender.outgoing[i];
      if (currentMinutes <= parseTimeToMinutes(time)) return { date: workingDate, index: i, time, shifted: !sameDay };
    }
    workingDate = nextBusinessDay(workingDate);
    return { date: workingDate, index: 0, time: sender.outgoing[0], shifted: true };
  }
  function findIncomingSession(receiver, outgoingSession) {
    const incoming = receiver.incoming || [];
    if (!incoming.length) return null;
    const index = Math.min(outgoingSession.index, incoming.length - 1);
    const time = incoming[index];
    const displayTime = receiver.incomingDisplay?.[index] || time;
    return { date: outgoingSession.date, index, time, displayTime, estimatedAt: setDateTime(outgoingSession.date, time) };
  }
  function getVisualStatus(result, now = new Date()) {
    if (result.type === "internal") return "internal";
    if (result.type === "special") return "dependent";
    if (!result.estimatedAt) return "unknown";
    if (result.estimatedAt < now) return "check-next-session";
    if (result.estimatedAt.toDateString() === now.toDateString()) return "today";
    const today = new Date(now); today.setHours(0,0,0,0);
    const estDay = new Date(result.estimatedAt); estDay.setHours(0,0,0,0);
    const diffDays = Math.floor((estDay - today) / MS_DAY);
    if (diffDays >= 2 || isWeekend(now)) return "after-weekend-or-holiday";
    return "next-business-day";
  }
  function calculate({ senderId, receiverId, sentAt = new Date(), now = new Date() }) {
    const banks = window.WF_BANK_SESSIONS || {};
    const sender = banks[senderId];
    const receiver = banks[receiverId];
    if (!sender || !receiver) return { ok: false, type: "error", message: "Nie udało się rozpoznać banku nadawcy albo odbiorcy." };
    if (senderId === receiverId) {
      const result = { ok: true, type: "internal", sender, receiver, estimatedAt: new Date(sentAt), estimatedDisplay: "zwykle od razu lub w ciągu kilku minut", message: "To wygląda na przelew wewnętrzny w tym samym banku. Takie przelewy zwykle nie czekają na sesje Elixir, ale wynik nadal traktuj orientacyjnie." };
      result.visualStatus = getVisualStatus(result, now); return result;
    }
    if (sender.special || receiver.special) {
      const result = { ok: true, type: "special", sender, receiver, estimatedAt: null, estimatedDisplay: "zależne od typu przelewu", message: "Jedna ze stron to fintech albo instytucja wymagająca specjalnej obsługi. Czas zależy od typu przelewu, waluty, danych rachunku i operatora płatności." };
      result.visualStatus = getVisualStatus(result, now); return result;
    }
    const outgoingSession = findOutgoingSession(sender, sentAt);
    const incomingSession = findIncomingSession(receiver, outgoingSession);
    if (!incomingSession) return { ok: false, type: "unknown", sender, receiver, message: "Brakuje sesji przychodzących dla banku odbiorcy. Wynik wymaga ręcznej weryfikacji." };
    const result = { ok: true, type: "elixir", sender, receiver, sentAt, outgoingSession, incomingSession, estimatedAt: incomingSession.estimatedAt, estimatedDisplay: `${formatDateTimePL(incomingSession.estimatedAt)} (około ${incomingSession.displayTime})`, message: "Wynik jest orientacyjny i dotyczy standardowego przelewu Elixir w PLN." };
    result.visualStatus = getVisualStatus(result, now); return result;
  }
  function getCountdownParts(target, now = new Date()) {
    if (!target || target < now) return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
    let diff = target.getTime() - now.getTime();
    const days = Math.floor(diff / MS_DAY); diff -= days * MS_DAY;
    const hours = Math.floor(diff / MS_HOUR); diff -= hours * MS_HOUR;
    const minutes = Math.floor(diff / MS_MIN); diff -= minutes * MS_MIN;
    const seconds = Math.floor(diff / 1000);
    return { expired: false, days, hours, minutes, seconds };
  }
  function formatCountdown(parts) {
    if (parts.expired) return "Szacowany czas już minął";
    const d = parts.days > 0 ? `${parts.days} dni ` : "";
    return `${d}${String(parts.hours).padStart(2, "0")} godz. ${String(parts.minutes).padStart(2, "0")} min ${String(parts.seconds).padStart(2, "0")} sek.`;
  }
  const STATUS_LABELS = {
    "today": "Możliwy dziś",
    "next-business-day": "Następny dzień roboczy",
    "after-weekend-or-holiday": "Po weekendzie lub dniu wolnym",
    "internal": "Przelew wewnętrzny",
    "dependent": "Zależne od typu przelewu",
    "check-next-session": "Sprawdź kolejną sesję",
    "unknown": "Do ręcznej weryfikacji"
  };
  return { calculate, getCountdownParts, formatCountdown, STATUS_LABELS, isBusinessDay, isPolishHoliday, formatDateTimePL };
})();
