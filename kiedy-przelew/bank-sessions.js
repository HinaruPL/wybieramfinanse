/**
 * Wybieram Finanse — Kiedy przelew?
 * Plik startowy MVP: sesje bankowe dla standardowych przelewów Elixir w PLN.
 * Dane są bazą startową do ręcznej weryfikacji przed publikacją.
 */
window.WF_BANK_SESSIONS = {
  "pko-bp": { name: "PKO BP", type: "bank", outgoing: ["08:00", "11:45", "14:30"], incoming: ["11:30", "15:10", "17:30"], incomingDisplay: ["11:30", "15:10", "17:30"], prefixes: ["1020"], verification: "high", notes: "PKO BP / Inteligo. Sesje Elixir wyłącznie w dni robocze." },
  "inteligo": { name: "Inteligo", type: "bank", parentBank: "pko-bp", outgoing: ["06:00", "11:45", "14:30"], incoming: ["11:30", "15:10", "17:30"], incomingDisplay: ["11:30", "15:10", "17:30"], prefixes: ["1020"], verification: "medium", notes: "Inteligo korzysta z infrastruktury PKO BP; prefiks może pokrywać się z PKO BP." },
  "pekao": { name: "Bank Pekao", type: "bank", outgoing: ["08:30", "12:30", "15:00"], incoming: ["11:00", "15:00", "17:30"], incomingDisplay: ["11:00", "15:00", "17:30"], prefixes: ["1240"], verification: "medium", notes: "Do ręcznej weryfikacji przed publikacją." },
  "santander": { name: "Santander Bank Polska / Erste", type: "bank", outgoing: ["08:15", "12:15", "14:45"], incoming: ["10:30", "14:30", "17:00"], incomingDisplay: ["10:30", "14:30", "17:00"], prefixes: ["1090"], verification: "medium", notes: "Do ręcznej weryfikacji nazwy i sesji." },
  "ing": { name: "ING Bank Śląski", type: "bank", outgoing: ["08:10", "11:30", "14:30"], incoming: ["11:00", "15:00", "17:30"], incomingDisplay: ["11:00", "15:00", "17:30"], prefixes: ["1050"], verification: "medium", notes: "Do ręcznej weryfikacji przed publikacją." },
  "mbank": { name: "mBank", type: "bank", outgoing: ["05:55", "09:55", "13:25"], incoming: ["10:30", "15:00", "18:05"], incomingDisplay: ["10:30", "15:00", "18:05"], prefixes: ["1140"], verification: "high", notes: "Dane zgodne ze stroną mBank w momencie przygotowania bazy." },
  "millennium": { name: "Bank Millennium", type: "bank", outgoing: ["08:10", "12:10", "14:30"], incoming: ["12:00", "15:20", "17:15"], incomingDisplay: ["12:00", "15:20", "17:15"], prefixes: ["1160"], verification: "medium", notes: "Do ręcznej weryfikacji przed publikacją." },
  "alior": { name: "Alior Bank", type: "bank", outgoing: ["08:20", "12:20", "15:20"], incoming: ["10:30", "14:30", "16:45"], incomingDisplay: ["10:30", "14:30", "16:45"], prefixes: ["2490"], verification: "medium", notes: "Do ręcznej weryfikacji przed publikacją." },
  "bnpparibas": { name: "BNP Paribas", type: "bank", outgoing: ["08:00", "11:45", "14:15"], incoming: ["12:00", "15:00", "17:00"], incomingDisplay: ["11:00–12:00", "14:30–15:00", "17:00"], prefixes: ["2030"], verification: "medium", notes: "Dla zakresów godzin przyjęto konserwatywnie koniec zakresu." },
  "credit-agricole": { name: "Credit Agricole", type: "bank", outgoing: ["14:30"], outgoingMode: "same-day-cutoff", incoming: ["11:00", "15:00", "17:00"], incomingDisplay: ["11:00", "15:00", "17:00"], prefixes: ["1940"], verification: "low", notes: "W źródłach pojawia się jedna godzina graniczna 14:30. Wymaga ręcznej weryfikacji." },
  "nest": { name: "Nest Bank", type: "bank", outgoing: ["08:00", "12:00", "14:30"], incoming: ["10:30", "14:15", "17:00"], incomingDisplay: ["10:30", "14:15", "17:00"], prefixes: ["1870"], verification: "medium", notes: "Do ręcznej weryfikacji przed publikacją." },
  "velobank": { name: "VeloBank", type: "bank", outgoing: ["08:15", "12:15", "14:30"], incoming: ["10:00", "14:00", "17:00"], incomingDisplay: ["10:00", "14:00", "17:00"], prefixes: ["2930"], verification: "medium", notes: "Do ręcznej weryfikacji przed publikacją." },
  "citi": { name: "Citi Handlowy", type: "bank", outgoing: ["08:00", "12:00", "15:00"], incoming: ["08:00", "12:00", "15:00"], incomingDisplay: ["08:00", "12:00", "15:00"], prefixes: ["1030"], verification: "low", notes: "Godziny wymagają szczególnej weryfikacji." },
  "bos": { name: "BOŚ Bank", type: "bank", outgoing: ["08:30", "12:30", "15:00"], incoming: ["11:00", "15:00", "17:30"], incomingDisplay: ["11:00", "15:00", "17:30"], prefixes: ["1540"], verification: "medium", notes: "Do ręcznej weryfikacji przed publikacją." },
  "bank-pocztowy": { name: "Bank Pocztowy", type: "bank", outgoing: ["09:00", "13:00", "15:00"], incoming: ["11:00", "15:00", "17:30"], incomingDisplay: ["11:00", "15:00", "17:30"], prefixes: ["1320"], verification: "medium", notes: "Do ręcznej weryfikacji przed publikacją." },
  "plus-bank": { name: "Plus Bank", type: "bank", outgoing: ["07:30", "11:30", "14:00"], incoming: ["12:00", "15:30", "18:00"], incomingDisplay: ["11:00–12:00", "14:30–15:30", "17:00–18:00"], prefixes: ["1680"], verification: "medium", notes: "Dla zakresów godzin przyjęto konserwatywnie koniec zakresu." },
  "toyota-bank": { name: "Toyota Bank", type: "bank", outgoing: ["08:10", "12:10", "14:30"], incoming: ["10:30", "14:30", "16:30"], incomingDisplay: ["10:30", "14:30", "16:30"], prefixes: ["2160"], verification: "low", notes: "Do ręcznej weryfikacji przed publikacją." },
  "volkswagen-bank": { name: "Volkswagen Bank", type: "bank", outgoing: ["08:00", "11:50", "14:20"], incoming: ["11:30", "15:30", "18:00"], incomingDisplay: ["11:30", "15:30", "18:00"], prefixes: ["2770"], verification: "low", notes: "Do ręcznej weryfikacji przed publikacją." },
  "sgb": { name: "SGB Bank", type: "bank-group", outgoing: ["08:00", "12:30", "15:30"], incoming: ["11:30", "15:30", "17:30"], incomingDisplay: ["11:30", "15:30", "17:30"], prefixes: ["1610"], verification: "low", notes: "Grupa banków spółdzielczych. Godziny mogą zależeć od konkretnego banku." },
  "bps": { name: "Bank BPS", type: "bank-group", outgoing: ["12:00", "16:00"], incoming: ["18:00"], incomingDisplay: ["18:00"], prefixes: ["1930"], verification: "low", notes: "Grupa banków spółdzielczych. Uproszczone dane MVP." },
  "bank-nowy": { name: "Bank Nowy", type: "bank", outgoing: [], incoming: [], incomingDisplay: [], prefixes: ["2870"], verification: "prefix-only", notes: "Dodany do rozpoznawania po numerze konta. Sesje do uzupełnienia." },
  "revolut": { name: "Revolut / Revolut Business", type: "fintech", special: true, outgoing: [], incoming: [], incomingDisplay: [], prefixes: [], verification: "special", status: "dependent", notes: "Specjalna obsługa. Czas zależy od typu przelewu, waluty i danych rachunku." },
  "zen": { name: "ZEN", type: "fintech", special: true, outgoing: [], incoming: [], incomingDisplay: [], prefixes: [], verification: "special", status: "dependent", notes: "Specjalna obsługa. Czas zależy od typu przelewu, waluty i operatora płatności." }
};

window.WF_KIR_SESSIONS = [
  { index: 0, close: "09:30", settlementWindow: "10:30–11:00" },
  { index: 1, close: "13:30", settlementWindow: "14:30–15:00" },
  { index: 2, close: "16:00", settlementWindow: "17:00–17:30" }
];
