/**
 * Wybieram Finanse - Kiedy przelew?
 * Kalkulator działa lokalnie w przeglądarce i nie wysyła numerów kont na serwer.
 */
(function () {
  const MS_MIN = 60 * 1000;
  const MS_HOUR = 60 * MS_MIN;
  const MS_DAY = 24 * MS_HOUR;

  function parseTimeToMinutes(time) {
    const [h, m] = String(time || "00:00").split(":").map(Number);
    return h * 60 + m;
  }

  function setDateTime(date, time) {
    const d = new Date(date);
    const [h, m] = String(time || "00:00").split(":").map(Number);
    d.setHours(h || 0, m || 0, 0, 0);
    return d;
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function formatInputDate(date) {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function formatInputTime(date) {
    return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }

  function parseLocalDateTime(dateValue, timeValue) {
    const [year, month, day] = String(dateValue || formatInputDate(new Date())).split("-").map(Number);
    const [hour, minute] = String(timeValue || "00:00").split(":").map(Number);
    return new Date(year, month - 1, day, hour || 0, minute || 0, 0, 0);
  }

  function formatDateTimePL(date) {
    if (!date) return "-";
    return new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  }

  function formatClock(date) {
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  }

  function isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  function isPolishHoliday(date) {
    const fixed = new Set(["1-1", "1-6", "5-1", "5-3", "8-15", "11-1", "11-11", "12-25", "12-26"]);
    return fixed.has(`${date.getMonth() + 1}-${date.getDate()}`);
  }

  function isBusinessDay(date) {
    return !isWeekend(date) && !isPolishHoliday(date);
  }

  function nextBusinessDay(date) {
    const d = new Date(date);
    d.setDate(d.getDate() + 1);
    d.setHours(0, 0, 0, 0);
    while (!isBusinessDay(d)) d.setDate(d.getDate() + 1);
    return d;
  }

  function sameBusinessDayOrNext(date) {
    const d = new Date(date);
    if (isBusinessDay(d)) return d;
    d.setHours(0, 0, 0, 0);
    while (!isBusinessDay(d)) d.setDate(d.getDate() + 1);
    return d;
  }

  function findOutgoingSession(sender, sentAt) {
    let workingDate = sameBusinessDayOrNext(sentAt);
    const sameDay = workingDate.toDateString() === sentAt.toDateString();
    const currentMinutes = sameDay ? sentAt.getHours() * 60 + sentAt.getMinutes() : -1;

    if (sender.outgoingMode === "same-day-cutoff") {
      const cutoff = sender.outgoing[0];
      if (isBusinessDay(sentAt) && currentMinutes <= parseTimeToMinutes(cutoff)) {
        return { date: workingDate, index: 2, time: cutoff, shifted: !sameDay };
      }
      workingDate = nextBusinessDay(sentAt);
      return { date: workingDate, index: 0, time: cutoff, shifted: true };
    }

    for (let i = 0; i < sender.outgoing.length; i += 1) {
      const time = sender.outgoing[i];
      if (currentMinutes <= parseTimeToMinutes(time)) {
        return { date: workingDate, index: i, time, shifted: !sameDay };
      }
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
    return {
      date: outgoingSession.date,
      index,
      time,
      displayTime,
      estimatedAt: setDateTime(outgoingSession.date, time)
    };
  }

  function getVisualStatus(result, sentAt, now = new Date()) {
    if (result.type === "internal") return "internal";
    if (result.type === "special") return "dependent";
    if (!result.estimatedAt) return "unknown";
    if (result.estimatedAt < now) return "check-next-session";
    if (!isBusinessDay(sentAt)) return "after-weekend-or-holiday";
    if (result.estimatedAt.toDateString() === sentAt.toDateString()) return "today";
    const sentDay = new Date(sentAt);
    sentDay.setHours(0, 0, 0, 0);
    const estDay = new Date(result.estimatedAt);
    estDay.setHours(0, 0, 0, 0);
    const diffDays = Math.floor((estDay - sentDay) / MS_DAY);
    return diffDays >= 2 ? "after-weekend-or-holiday" : "next-business-day";
  }

  function calculate({ senderId, receiverId, sentAt = new Date(), now = new Date() }) {
    const banks = window.WF_BANK_SESSIONS || {};
    const sender = banks[senderId];
    const receiver = banks[receiverId];

    if (!sender || !receiver) {
      return { ok: false, type: "unknown", sender, receiver, visualStatus: "unknown", message: "Nie udało się rozpoznać banku nadawcy albo odbiorcy." };
    }

    if (senderId === receiverId) {
      return {
        ok: true,
        type: "internal",
        sender,
        receiver,
        sentAt,
        estimatedAt: null,
        estimatedDisplay: "zwykle od razu albo w ciągu kilku minut",
        sessionDisplay: "nie dotyczy",
        visualStatus: "internal",
        message: "To wygląda na przelew w tym samym banku. Takie przelewy zwykle są księgowane szybciej niż standardowy Elixir, często od razu albo w ciągu kilku minut. Dokładny czas zależy od banku."
      };
    }

    if (sender.special || receiver.special) {
      return {
        ok: true,
        type: "special",
        sender,
        receiver,
        sentAt,
        estimatedAt: null,
        estimatedDisplay: "zależne od typu przelewu",
        sessionDisplay: "nie dotyczy",
        visualStatus: "dependent",
        message: "Czas przelewu zależy od typu rachunku, waluty, danych przelewu i operatora płatności. Revolut i ZEN nie zawsze działają jak klasyczny bank z trzema sesjami Elixir."
      };
    }

    if (!sender.outgoing?.length || !receiver.incoming?.length) {
      return {
        ok: false,
        type: "unknown",
        sender,
        receiver,
        sentAt,
        visualStatus: "unknown",
        message: "Bank został rozpoznany, ale nie ma jeszcze kompletnych danych sesji w kalkulatorze. Wynik wymaga ręcznej weryfikacji."
      };
    }

    const outgoingSession = findOutgoingSession(sender, sentAt);
    const incomingSession = findIncomingSession(receiver, outgoingSession);
    if (!incomingSession) {
      return {
        ok: false,
        type: "unknown",
        sender,
        receiver,
        sentAt,
        visualStatus: "unknown",
        message: "Brakuje sesji przychodzących dla banku odbiorcy. Wynik wymaga ręcznej weryfikacji."
      };
    }

    const result = {
      ok: true,
      type: "elixir",
      sender,
      receiver,
      sentAt,
      outgoingSession,
      incomingSession,
      estimatedAt: incomingSession.estimatedAt,
      estimatedDisplay: `${formatDateTimePL(incomingSession.estimatedAt)} (około ${incomingSession.displayTime})`,
      sessionDisplay: `${sender.name}: wychodząca ${outgoingSession.time}; ${receiver.name}: przychodząca około ${incomingSession.displayTime}`,
      message: "Wynik jest orientacyjny i dotyczy standardowego przelewu Elixir w PLN."
    };
    result.visualStatus = getVisualStatus(result, sentAt, now);
    return result;
  }

  function getCountdownParts(target, now = new Date()) {
    if (!target || target < now) return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
    let diff = target.getTime() - now.getTime();
    const days = Math.floor(diff / MS_DAY);
    diff -= days * MS_DAY;
    const hours = Math.floor(diff / MS_HOUR);
    diff -= hours * MS_HOUR;
    const minutes = Math.floor(diff / MS_MIN);
    diff -= minutes * MS_MIN;
    const seconds = Math.floor(diff / 1000);
    return { expired: false, days, hours, minutes, seconds };
  }

  function formatCountdown(parts) {
    if (parts.expired) {
      return "Szacowany czas księgowania już minął. Sprawdź saldo lub historię rachunku. Jeśli przelewu nie ma, może zostać zaksięgowany w kolejnej sesji albo następnego dnia roboczego.";
    }
    const dayPart = parts.days > 0 ? `${parts.days} dni ` : "";
    return `${dayPart}${pad(parts.hours)} godz. ${pad(parts.minutes)} min ${pad(parts.seconds)} sek.`;
  }

  const STATUS_LABELS = {
    today: "Możliwy dziś",
    "next-business-day": "Następny dzień roboczy",
    "after-weekend-or-holiday": "Po weekendzie lub dniu wolnym",
    internal: "Przelew wewnętrzny",
    dependent: "Zależne od typu przelewu",
    "check-next-session": "Sprawdź kolejną sesję",
    unknown: "Do ręcznej weryfikacji"
  };

  window.WF_TRANSFER_CALCULATOR = {
    calculate,
    getCountdownParts,
    formatCountdown,
    STATUS_LABELS,
    isBusinessDay,
    isPolishHoliday,
    formatDateTimePL
  };

  function initTransferTool() {
    const root = document.getElementById("kalkulator");
    if (!root) return;

    const banks = window.WF_BANK_SESSIONS || {};
    const nrbUtils = window.WF_NRB_UTILS;
    const bankForm = document.getElementById("bank-form");
    const accountForm = document.getElementById("account-form");
    const senderBank = document.getElementById("sender-bank");
    const receiverBank = document.getElementById("receiver-bank");
    const resultBox = document.getElementById("result-box");
    const statusClassMap = {
      today: "status-today",
      "next-business-day": "status-next",
      "after-weekend-or-holiday": "status-holiday",
      internal: "status-internal",
      dependent: "status-dependent",
      "check-next-session": "status-check",
      unknown: "status-unknown"
    };

    let lastEstimatedAt = null;
    let countdownTimer = null;

    function supportedBankEntries() {
      return Object.entries(banks)
        .filter(([, bank]) => bank.supportedInCalculator !== false && (bank.special || bank.outgoing?.length || bank.incoming?.length))
        .sort((a, b) => a[1].name.localeCompare(b[1].name, "pl"));
    }

    function fillSelect(select) {
      if (!select) return;
      select.innerHTML = "";
      supportedBankEntries().forEach(([id, bank]) => {
        const option = document.createElement("option");
        option.value = id;
        option.textContent = bank.name;
        select.appendChild(option);
      });
    }

    function setDefaultDateTime() {
      const now = new Date();
      ["bank-date", "account-date"].forEach((id) => {
        const input = document.getElementById(id);
        if (input) input.value = formatInputDate(now);
      });
      ["bank-time", "account-time"].forEach((id) => {
        const input = document.getElementById(id);
        if (input) input.value = formatInputTime(now);
      });
    }

    function setMode(mode) {
      document.querySelectorAll("[data-transfer-mode]").forEach((button) => {
        const active = button.dataset.transferMode === mode;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
      });
      document.querySelectorAll("[data-transfer-panel]").forEach((panel) => {
        panel.hidden = panel.dataset.transferPanel !== mode;
      });
    }

    function renderClock() {
      const now = new Date();
      const currentTime = document.getElementById("current-time");
      const resultCurrentTime = document.getElementById("result-current-time");
      if (currentTime) currentTime.textContent = formatClock(now);
      if (resultCurrentTime) resultCurrentTime.textContent = formatClock(now);
    }

    function updateCountdown() {
      const countdown = document.getElementById("result-countdown");
      const status = document.getElementById("result-status");
      if (!countdown) return;
      if (!lastEstimatedAt) {
        countdown.textContent = "nie dotyczy";
        return;
      }
      const parts = getCountdownParts(lastEstimatedAt, new Date());
      countdown.textContent = formatCountdown(parts);
      if (parts.expired && status) {
        status.textContent = STATUS_LABELS["check-next-session"];
        status.className = "status-badge status-check";
      }
    }

    function renderManualResult(sender, receiver, sentAt, message) {
      lastEstimatedAt = null;
      if (countdownTimer) window.clearInterval(countdownTimer);
      resultBox.hidden = false;
      document.getElementById("result-status").textContent = STATUS_LABELS.unknown;
      document.getElementById("result-status").className = "status-badge status-unknown";
      document.getElementById("result-sender").textContent = sender ? sender.name : "-";
      document.getElementById("result-receiver").textContent = receiver ? receiver.name : "-";
      document.getElementById("result-sent-at").textContent = formatDateTimePL(sentAt);
      document.getElementById("result-estimated").textContent = "wymaga ręcznej weryfikacji";
      document.getElementById("result-session").textContent = "do uzupełnienia / do weryfikacji";
      document.getElementById("result-countdown").textContent = "nie dotyczy";
      document.getElementById("result-description").textContent = message;
      renderClock();
    }

    function renderResult(result, sentAt) {
      const statusKey = result.visualStatus || "unknown";
      const status = document.getElementById("result-status");
      lastEstimatedAt = result.type === "elixir" ? (result.estimatedAt || null) : null;
      if (countdownTimer) window.clearInterval(countdownTimer);

      resultBox.hidden = false;
      status.textContent = STATUS_LABELS[statusKey] || STATUS_LABELS.unknown;
      status.className = `status-badge ${statusClassMap[statusKey] || "status-unknown"}`;
      document.getElementById("result-sender").textContent = result.sender ? result.sender.name : "-";
      document.getElementById("result-receiver").textContent = result.receiver ? result.receiver.name : "-";
      document.getElementById("result-sent-at").textContent = formatDateTimePL(sentAt);
      document.getElementById("result-estimated").textContent = result.estimatedDisplay || "wymaga ręcznej weryfikacji";
      document.getElementById("result-session").textContent = result.sessionDisplay || "nie dotyczy";
      document.getElementById("result-description").textContent = result.message || "Wynik jest orientacyjny.";
      renderClock();
      updateCountdown();
      countdownTimer = window.setInterval(updateCountdown, 1000);
      resultBox.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function calculateByIds(senderId, receiverId, sentAt) {
      const result = calculate({ senderId, receiverId, sentAt, now: new Date() });
      if (!result.ok) {
        renderManualResult(result.sender, result.receiver, sentAt, result.message || "Wynik wymaga ręcznej weryfikacji.");
        return;
      }
      renderResult(result, sentAt);
    }

    function describeAccount(input, label) {
      if (!nrbUtils) {
        return { ok: false, message: "Nie udało się załadować modułu rozpoznawania banku po numerze konta." };
      }
      const cleaned = nrbUtils.normalizeAccountNumber(input);
      if (!cleaned || (cleaned.length < 26 && !cleaned.startsWith("PL"))) {
        return { ok: false, message: "Wpisz pełny numer konta w formacie NRB albo IBAN PL." };
      }
      const info = nrbUtils.identifyBank(input);
      if (!info.normalizedNrb || !/^\d{26}$/.test(info.normalizedNrb) || !info.isValid) {
        return { ok: false, message: "Numer konta wygląda na niepoprawny. Sprawdź, czy ma 26 cyfr albo format PL + 26 cyfr." };
      }
      if (!info.bankId || !banks[info.bankId]) {
        return { ok: false, message: "Numer konta wygląda poprawnie, ale nie rozpoznaliśmy banku albo nie ma go jeszcze w kalkulatorze." };
      }
      return { ok: true, bankId: info.bankId, message: `Rozpoznany bank ${label}: ${banks[info.bankId].name}` };
    }

    fillSelect(senderBank);
    fillSelect(receiverBank);
    setDefaultDateTime();
    setMode("bank");
    renderClock();
    window.setInterval(renderClock, 1000);

    if (senderBank && banks.mbank) senderBank.value = "mbank";
    if (receiverBank && banks["pko-bp"]) receiverBank.value = "pko-bp";

    document.querySelectorAll("[data-transfer-mode]").forEach((button) => {
      button.addEventListener("click", () => setMode(button.dataset.transferMode));
    });

    if (bankForm) {
      bankForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const sentAt = parseLocalDateTime(document.getElementById("bank-date").value, document.getElementById("bank-time").value);
        calculateByIds(senderBank.value, receiverBank.value, sentAt);
      });
    }

    if (accountForm) {
      accountForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const sender = describeAccount(document.getElementById("sender-account").value, "nadawcy");
        const receiver = describeAccount(document.getElementById("receiver-account").value, "odbiorcy");
        const recognition = document.getElementById("account-recognition");
        recognition.innerHTML = "";
        [sender, receiver].forEach((item) => {
          const p = document.createElement("p");
          p.textContent = item.message;
          recognition.appendChild(p);
        });
        if (!sender.ok || !receiver.ok) return;
        const sentAt = parseLocalDateTime(document.getElementById("account-date").value, document.getElementById("account-time").value);
        calculateByIds(sender.bankId, receiver.bankId, sentAt);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTransferTool);
  } else {
    initTransferTool();
  }
})();
