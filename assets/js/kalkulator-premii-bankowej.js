(function () {
  var conditionPoints = {
    newClient: 2,
    inflow: 2,
    cardPayments: 1,
    blikPayments: 1,
    zusTaxTransfer: 2,
    keepAccount: 1,
    cardRequired: 1,
    marketingConsent: 1,
    severalMonths: 2,
    severalStages: 2,
    mobileApp: 1,
    specificPath: 2,
    currentClientExclusions: 2
  };

  var conditionLabels = {
    newClient: "trzeba być nowym klientem",
    inflow: "trzeba zapewnić wpływ na konto",
    cardPayments: "trzeba wykonać płatności kartą",
    blikPayments: "trzeba wykonać płatności BLIK",
    zusTaxTransfer: "trzeba zrobić przelew do ZUS/US",
    keepAccount: "trzeba utrzymać konto przez określony czas",
    cardRequired: "trzeba założyć kartę",
    marketingConsent: "trzeba zgodzić się na marketing",
    severalMonths: "trzeba spełnić warunki w kilku miesiącach",
    severalStages: "warunki są rozbite na kilka etapów",
    mobileApp: "trzeba używać aplikacji mobilnej",
    specificPath: "trzeba podpisać umowę przez konkretną ścieżkę",
    currentClientExclusions: "są wykluczenia dla obecnych klientów"
  };

  function getNumber(id) {
    var value = Number(document.getElementById(id).value);
    if (!Number.isFinite(value) || value < 0) return 0;
    return value;
  }

  function formatMoney(value) {
    var sign = value > 0 ? "+" : value < 0 ? "-" : "";
    return sign + Math.abs(value).toLocaleString("pl-PL", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + " zł";
  }

  function setText(id, value) {
    document.getElementById(id).textContent = value;
  }

  function getCheckedConditions() {
    return Object.keys(conditionPoints).filter(function (key) {
      var field = document.querySelector('[name="condition"][value="' + key + '"]');
      return field && field.checked;
    });
  }

  function getDifficulty(points) {
    if (points <= 4) return { label: "Łatwa promocja", className: "status-today", description: "Warunki wyglądają na proste, ale nadal trzeba sprawdzić regulamin promocji." };
    if (points <= 9) return { label: "Średnia promocja", className: "status-next", description: "Promocja wymaga pilnowania kilku warunków i terminów." };
    return { label: "Trudna promocja", className: "status-dependent", description: "Promocja ma wiele warunków albo etapów, więc łatwiej coś przeoczyć." };
  }

  function getProfitability(balance) {
    if (balance > 100) return { label: "Opłacalna", className: "status-today", message: "Promocja może być opłacalna, jeśli spełnisz wszystkie warunki i unikniesz dodatkowych opłat." };
    if (balance >= 0) return { label: "Na granicy opłacalności", className: "status-next", message: "Promocja może być opłacalna, ale niewielkie opłaty lub niespełnienie warunków mogą mocno obniżyć zysk." };
    return { label: "Może się nie opłacać", className: "status-check", message: "Po uwzględnieniu kosztów promocja może nie być opłacalna. Sprawdź dokładnie regulamin i opłaty." };
  }

  function renderWarnings(conditions, balance, difficultyPoints) {
    var warnings = [];
    if (conditions.indexOf("newClient") !== -1) warnings.push("Sprawdź definicję nowego klienta i okres karencji.");
    if (conditions.indexOf("specificPath") !== -1) warnings.push("Upewnij się, że składasz wniosek właściwą ścieżką promocji.");
    if (conditions.indexOf("marketingConsent") !== -1) warnings.push("Sprawdź, czy zgody marketingowe trzeba utrzymać do wypłaty premii.");
    if (conditions.indexOf("severalStages") !== -1 || conditions.indexOf("severalMonths") !== -1) warnings.push("Zapisz terminy, bo warunki rozłożone w czasie łatwo przeoczyć.");
    if (balance < 100) warnings.push("Bilans jest niski, więc dodatkowe opłaty mogą szybko obniżyć możliwy zysk.");
    if (difficultyPoints >= 10) warnings.push("Warunki są trudne, dlatego szczególnie dokładnie przeczytaj regulamin.");
    return warnings;
  }

  function calculate(event) {
    event.preventDefault();

    var name = document.getElementById("promo-name").value.trim();
    var promoType = document.getElementById("promo-type").value;
    var bonus = getNumber("bonus-value");
    var months = Math.max(0, Math.floor(getNumber("promo-months")));
    var nonCashReward = getNumber("non-cash-reward");
    var accountFee = getNumber("account-fee");
    var cardFee = getNumber("card-fee");
    var otherMonthlyCosts = getNumber("other-monthly-costs");
    var oneTimeCosts = getNumber("one-time-costs");
    var requiredInflow = getNumber("required-inflow");
    var paymentCount = Math.floor(getNumber("payment-count"));
    var paymentAmount = getNumber("payment-amount");
    var activeMonths = Math.floor(getNumber("active-months"));

    var monthlyCosts = accountFee + cardFee + otherMonthlyCosts;
    var totalCosts = monthlyCosts * months + oneTimeCosts;
    var balance = bonus + nonCashReward - totalCosts;
    var conditions = getCheckedConditions();
    var difficultyPoints = conditions.reduce(function (sum, key) { return sum + conditionPoints[key]; }, 0);
    var difficulty = getDifficulty(difficultyPoints);
    var profitability = getProfitability(balance);
    var warnings = renderWarnings(conditions, balance, difficultyPoints);

    var result = document.getElementById("bonus-result");
    var profitBadge = document.getElementById("profitability-badge");
    var difficultyBadge = document.getElementById("difficulty-badge");
    var conditionsList = document.getElementById("conditions-list");
    var warningsList = document.getElementById("warnings-list");

    result.hidden = false;
    profitBadge.textContent = profitability.label;
    profitBadge.className = "status-badge " + profitability.className;
    difficultyBadge.textContent = difficulty.label;
    difficultyBadge.className = "status-badge " + difficulty.className;

    setText("result-name", name || "Promocja bankowa");
    setText("result-type", promoType);
    setText("result-bonus", formatMoney(bonus));
    setText("result-noncash", formatMoney(nonCashReward));
    setText("result-costs", formatMoney(totalCosts));
    setText("result-balance", formatMoney(balance));
    setText("result-difficulty", difficulty.label + " (" + difficultyPoints + " pkt)");
    setText("result-message", profitability.message + " Ocena trudności jest orientacyjna i opiera się na liczbie oraz rodzaju warunków promocji.");

    conditionsList.innerHTML = "";
    if (conditions.length) {
      conditions.forEach(function (key) {
        var li = document.createElement("li");
        li.textContent = conditionLabels[key];
        conditionsList.appendChild(li);
      });
    } else {
      var li = document.createElement("li");
      li.textContent = "Nie zaznaczono dodatkowych warunków aktywności.";
      conditionsList.appendChild(li);
    }

    var helperItems = [];
    if (requiredInflow > 0) helperItems.push("wymagany miesięczny wpływ: " + formatMoney(requiredInflow));
    if (paymentCount > 0) helperItems.push("wymagane płatności miesięcznie: " + paymentCount);
    if (paymentAmount > 0) helperItems.push("minimalna kwota płatności miesięcznie: " + formatMoney(paymentAmount));
    if (activeMonths > 0) helperItems.push("liczba miesięcy aktywności: " + activeMonths);
    helperItems.forEach(function (text) {
      var li = document.createElement("li");
      li.textContent = text;
      conditionsList.appendChild(li);
    });

    warningsList.innerHTML = "";
    if (!warnings.length) warnings.push("Przed założeniem konta porównaj wynik z regulaminem promocji i tabelą opłat.");
    warnings.forEach(function (warning) {
      var li = document.createElement("li");
      li.textContent = warning;
      warningsList.appendChild(li);
    });

    result.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("bonus-calculator-form");
    if (form) form.addEventListener("submit", calculate);
  });
})();
