/**
 * Wybieram Finanse — Kiedy przelew?
 * Plik startowy MVP: rozpoznawanie banku po numerze rachunku NRB/IBAN.
 */
window.WF_BANK_PREFIXES = {
  "1010": { bankId: "nbp", name: "Narodowy Bank Polski", supportedInCalculator: false },
  "1020": { bankId: "pko-bp", name: "PKO BP / Inteligo", supportedInCalculator: true },
  "1030": { bankId: "citi", name: "Citi Handlowy", supportedInCalculator: true },
  "1050": { bankId: "ing", name: "ING Bank Śląski", supportedInCalculator: true },
  "1090": { bankId: "santander", name: "Santander Bank Polska / Erste", supportedInCalculator: true },
  "1130": { bankId: "bgk", name: "Bank Gospodarstwa Krajowego", supportedInCalculator: false },
  "1140": { bankId: "mbank", name: "mBank", supportedInCalculator: true },
  "1160": { bankId: "millennium", name: "Bank Millennium", supportedInCalculator: true },
  "1240": { bankId: "pekao", name: "Bank Pekao", supportedInCalculator: true },
  "1320": { bankId: "bank-pocztowy", name: "Bank Pocztowy", supportedInCalculator: true },
  "1540": { bankId: "bos", name: "BOŚ Bank", supportedInCalculator: true },
  "1580": { bankId: "mercedes-bank", name: "Mercedes-Benz Bank Polska", supportedInCalculator: false },
  "1610": { bankId: "sgb", name: "SGB Bank / zrzeszenie SGB", supportedInCalculator: true },
  "1680": { bankId: "plus-bank", name: "Plus Bank", supportedInCalculator: true },
  "1840": { bankId: "societe-generale", name: "Societe Generale", supportedInCalculator: false },
  "1870": { bankId: "nest", name: "Nest Bank", supportedInCalculator: true },
  "1930": { bankId: "bps", name: "Bank BPS / zrzeszenie BPS", supportedInCalculator: true },
  "1940": { bankId: "credit-agricole", name: "Credit Agricole", supportedInCalculator: true },
  "2030": { bankId: "bnpparibas", name: "BNP Paribas", supportedInCalculator: true },
  "2120": { bankId: "santander-consumer", name: "Santander Consumer Bank", supportedInCalculator: false },
  "2160": { bankId: "toyota-bank", name: "Toyota Bank", supportedInCalculator: true },
  "2190": { bankId: "dnb", name: "DNB Bank Polska", supportedInCalculator: false },
  "2490": { bankId: "alior", name: "Alior Bank", supportedInCalculator: true },
  "2710": { bankId: "fce-bank", name: "FCE Bank Polska", supportedInCalculator: false },
  "2720": { bankId: "inbank", name: "Inbank", supportedInCalculator: false },
  "2770": { bankId: "volkswagen-bank", name: "Volkswagen Bank", supportedInCalculator: true },
  "2790": { bankId: "raiffeisen-digital", name: "Raiffeisen Digital Bank", supportedInCalculator: false },
  "2850": { bankId: "bff-bank", name: "BFF Bank", supportedInCalculator: false },
  "2870": { bankId: "bank-nowy", name: "Bank Nowy", supportedInCalculator: true },
  "2910": { bankId: "aion-bank", name: "Aion Bank", supportedInCalculator: false },
  "2930": { bankId: "velobank", name: "VeloBank", supportedInCalculator: true }
};

window.WF_NRB_UTILS = {
  normalizeAccountNumber(input) {
    return String(input || "").toUpperCase().replace(/\s+/g, "").replace(/-/g, "");
  },
  extractPolishNrb(input) {
    const value = this.normalizeAccountNumber(input);
    if (value.startsWith("PL")) return value.slice(2);
    return value;
  },
  isValidPolishNrb(input) {
    const nrb = this.extractPolishNrb(input);
    if (!/^\d{26}$/.test(nrb)) return false;
    const rearranged = nrb.slice(2) + "2521" + nrb.slice(0, 2);
    let remainder = 0;
    for (const char of rearranged) remainder = (remainder * 10 + Number(char)) % 97;
    return remainder === 1;
  },
  getClearingNumber(input) {
    const nrb = this.extractPolishNrb(input);
    if (!/^\d{26}$/.test(nrb)) return null;
    return nrb.slice(2, 10);
  },
  getBankPrefix(input) {
    const clearingNumber = this.getClearingNumber(input);
    if (!clearingNumber) return null;
    return clearingNumber.slice(0, 4);
  },
  identifyBank(input) {
    const nrb = this.extractPolishNrb(input);
    const isValid = this.isValidPolishNrb(input);
    const clearingNumber = this.getClearingNumber(input);
    const prefix = this.getBankPrefix(input);
    const bank = prefix ? window.WF_BANK_PREFIXES[prefix] : null;
    return {
      normalizedNrb: /^\d{26}$/.test(nrb) ? nrb : null,
      isValid,
      clearingNumber,
      prefix,
      bankId: bank ? bank.bankId : null,
      bankName: bank ? bank.name : null,
      supportedInCalculator: bank ? bank.supportedInCalculator : false
    };
  }
};
