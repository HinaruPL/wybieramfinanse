(function () {
  function getNumber(id) {
    var field = document.getElementById(id);
    var value = field ? Number(field.value) : 0;
    if (!Number.isFinite(value) || value < 0) return 0;
    return value;
  }

  function getText(id) {
    var field = document.getElementById(id);
    return field ? field.value.trim() : "";
  }

  function isChecked(id) {
    var field = document.getElementById(id);
    return Boolean(field && field.checked);
  }

  function setText(id, value) {
    var field = document.getElementById(id);
    if (field) field.textContent = value;
  }

  function formatMoney(value) {
    var sign = value > 0 ? "+" : value < 0 ? "-" : "";
    return sign + Math.abs(value).toLocaleString("pl-PL", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + " zł";
  }

  function formatCost(value) {
    return value.toLocaleString("pl-PL", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + " zł";
  }

  function getCostStatus(monthlyCost) {
    if (monthlyCost === 0) return { label: "Konto prawie darmowe", className: "status-today" };
    if (monthlyCost <= 10) return { label: "Niski koszt", className: "status-next" };
    if (monthlyCost <= 25) return { label: "Średni koszt", className: "status-dependent" };
    return { label: "Wysoki koszt", className: "status-check" };
  }

  function getBalanceStatus(balance) {
    if (balance > 100) return { label: "Na plus po premii", className: "status-today" };
    if (balance >= 0) return { label: "Niewielki plus", className: "status-next" };
    return { label: "Na minus po kosztach", className: "status-check" };
  }

  function addItem(list, text) {
    var item = document.createElement("li");
    item.textContent = text;
    list.appendChild(item);
  }

  function calculate(event) {
    event.preventDefault();

    var accountName = getText("account-name") || "Konto osobiste";
    var months = Math.max(0, Math.floor(getNumber("analysis-period")));
    var bonus = getNumber("bonus-value");
    var voucher = getNumber("voucher-value");
    var accountFee = getNumber("account-fee");
    var cardFee = getNumber("card-fee");
    var packageFee = getNumber("package-fee");
    var otherMonthlyCosts = getNumber("other-monthly-costs");
    var atmWithdrawals = Math.floor(getNumber("atm-withdrawals"));
    var atmFee = getNumber("atm-fee");
    var freeAtmWithdrawals = Math.floor(getNumber("free-atm-withdrawals"));
    var paidTransfers = Math.floor(getNumber("paid-transfers"));
    var transferFee = getNumber("transfer-fee");
    var otherOperations = Math.floor(getNumber("other-operations"));
    var operationFee = getNumber("operation-fee");
    var cardIssueFee = getNumber("card-issue-fee");
    var oneTimeCosts = getNumber("one-time-costs");

    var paidAtmWithdrawals = Math.max(0, atmWithdrawals - freeAtmWithdrawals);
    var atmCost = paidAtmWithdrawals * atmFee;
    var transferCost = paidTransfers * transferFee;
    var operationCost = otherOperations * operationFee;
    var monthlyCost = accountFee + cardFee + packageFee + otherMonthlyCosts + atmCost + transferCost + operationCost;
    var totalCost = monthlyCost * months + cardIssueFee + oneTimeCosts;
    var rewardValue = bonus + voucher;
    var balance = rewardValue - totalCost;
    var annualCost = monthlyCost * 12 + cardIssueFee + oneTimeCosts;
    var costStatus = getCostStatus(monthlyCost);
    var balanceStatus = getBalanceStatus(balance);

    var result = document.getElementById("account-cost-result");
    var costBadge = document.getElementById("cost-status-badge");
    var balanceBadge = document.getElementById("balance-status-badge");
    var warningsList = document.getElementById("account-cost-warnings");

    result.hidden = false;
    costBadge.textContent = costStatus.label;
    costBadge.className = "status-badge " + costStatus.className;
    balanceBadge.textContent = balanceStatus.label;
    balanceBadge.className = "status-badge " + balanceStatus.className;

    setText("result-account-name", accountName);
    setText("result-months", months + " mies.");
    setText("result-monthly-cost", formatCost(monthlyCost));
    setText("result-annual-cost", formatCost(annualCost));
    setText("result-total-cost", formatCost(totalCost));
    setText("result-reward", formatCost(rewardValue));
    setText("result-balance", formatMoney(balance));
    setText("result-atm-cost", formatCost(atmCost));
    setText("result-transfer-cost", formatCost(transferCost));
    setText("result-operation-cost", formatCost(operationCost));
    setText("result-message", "Status jest orientacyjny i zależy od założeń wpisanych w kalkulatorze. Premia poprawia bilans tylko po spełnieniu warunków promocji.");

    warningsList.innerHTML = "";
    if (isChecked("unsure-free-conditions")) addItem(warningsList, "Jeśli nie spełnisz warunków darmowości, rzeczywisty koszt konta może być wyższy.");
    if (cardFee > 0) addItem(warningsList, "Sprawdź, czy możesz uniknąć opłaty za kartę po wykonaniu płatności.");
    if (atmCost > 0) addItem(warningsList, "Wypłaty z obcych bankomatów mogą mocno podnieść koszt konta.");
    if (bonus > 0 || voucher > 0) addItem(warningsList, "Premia może poprawić bilans, ale tylko po spełnieniu warunków promocji.");
    if (balance < 0) addItem(warningsList, "Po uwzględnieniu kosztów konto może nie być opłacalne w podanym okresie.");
    if (isChecked("salary-free")) addItem(warningsList, "Sprawdź, czy wpływ wynagrodzenia musi mieć konkretny tytuł albo minimalną kwotę.");
    if (isChecked("card-free")) addItem(warningsList, "Zapisz wymaganą liczbę lub kwotę płatności kartą, jeśli karta ma być darmowa.");
    if (!warningsList.children.length) addItem(warningsList, "Porównaj wynik z aktualną tabelą opłat banku i regulaminem promocji.");

    result.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("account-cost-form");
    if (form) form.addEventListener("submit", calculate);
  });
})();
