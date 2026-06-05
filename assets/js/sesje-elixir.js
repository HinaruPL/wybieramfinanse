/**
 * Wybieram Finanse - tabela sesji Elixir.
 * Dane są renderowane lokalnie z window.WF_BANK_SESSIONS.
 */
(function () {
  const VERIFICATION_LABELS = {
    high: "zweryfikowane wstępnie",
    medium: "do okresowej kontroli",
    low: "wymaga ręcznej weryfikacji",
    "prefix-only": "tylko rozpoznawanie po numerze konta",
    special: "specjalna obsługa"
  };

  function formatSessions(bank, type) {
    if (bank.special) return "Zależne od typu przelewu";
    const values = type === "incoming" ? (bank.incomingDisplay?.length ? bank.incomingDisplay : bank.incoming) : bank.outgoing;
    if (!values || !values.length) return "Do uzupełnienia / do weryfikacji";
    return values.join(", ");
  }

  function renderRows() {
    const body = document.getElementById("sessions-table-body");
    if (!body) return [];

    const banks = Object.entries(window.WF_BANK_SESSIONS || {})
      .sort((a, b) => a[1].name.localeCompare(b[1].name, "pl"));

    body.innerHTML = "";
    return banks.map(([id, bank]) => {
      const row = document.createElement("tr");
      row.dataset.bankName = bank.name.toLowerCase();
      const note = bank.special ? "Nie działa jak klasyczny bank z trzema sesjami Elixir." : (bank.notes || "Godziny mogą wymagać okresowej weryfikacji.");
      row.innerHTML = `
        <td data-label="Bank"><strong>${bank.name}</strong></td>
        <td data-label="Sesje wychodzące">${formatSessions(bank, "outgoing")}</td>
        <td data-label="Sesje przychodzące">${formatSessions(bank, "incoming")}</td>
        <td data-label="Uwagi">${note}</td>
        <td data-label="Status weryfikacji"><span class="verification-badge">${VERIFICATION_LABELS[bank.verification] || "do okresowej kontroli"}</span></td>
      `;
      body.appendChild(row);
      return row;
    });
  }

  function initFilter(rows) {
    const filter = document.getElementById("session-bank-filter");
    const noResults = document.getElementById("sessions-no-results");
    if (!filter) return;

    filter.addEventListener("input", () => {
      const query = filter.value.trim().toLowerCase();
      let visible = 0;
      rows.forEach((row) => {
        const matches = row.dataset.bankName.includes(query);
        row.hidden = !matches;
        if (matches) visible += 1;
      });
      if (noResults) noResults.hidden = visible !== 0;
    });
  }

  function initSessionsPage() {
    const rows = renderRows();
    initFilter(rows);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSessionsPage);
  } else {
    initSessionsPage();
  }
})();
