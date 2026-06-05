(function () {
  function getNumber(id) {
    const element = document.getElementById(id);
    if (!element) {
      return 0;
    }
    const value = Number(String(element.value).replace(",", "."));
    if (!Number.isFinite(value) || value < 0) {
      return 0;
    }
    return value;
  }

  function formatMoney(value) {
    return new Intl.NumberFormat("pl-PL", {
      style: "currency",
      currency: "PLN",
      maximumFractionDigits: 2
    }).format(value);
  }

  function formatPercent(value) {
    if (!Number.isFinite(value)) {
      return "0%";
    }
    return `${value.toFixed(1).replace(".", ",")}%`;
  }

  function categoryPercent(value, income) {
    return income > 0 ? (value / income) * 100 : 0;
  }

  function budgetStatus(left, income) {
    if (income <= 0) {
      return "Do uzupełnienia";
    }
    const leftPercent = (left / income) * 100;
    if (left < 0) {
      return "Budżet ryzykowny";
    }
    if (leftPercent < 10) {
      return "Budżet napięty";
    }
    if (leftPercent <= 20) {
      return "Budżet pod kontrolą";
    }
    return "Bezpieczny budżet";
  }

  function statusMessage(status) {
    if (status === "Bezpieczny budżet") {
      return "Masz dodatni zapas w budżecie. Warto ustalić, jaka część tej kwoty ma iść na oszczędności, a jaka na większe cele.";
    }
    if (status === "Budżet pod kontrolą") {
      return "Budżet wygląda stabilnie, ale warto regularnie sprawdzać większe koszty i planować oszczędności.";
    }
    if (status === "Budżet napięty") {
      return "Po wydatkach zostaje niewielka część dochodu. Warto spokojnie sprawdzić, które koszty można zmniejszyć.";
    }
    if (status === "Budżet ryzykowny") {
      return "Wydatki są wyższe niż dochody. Warto przejrzeć koszty stałe i sprawdzić, które wydatki można ograniczyć jako pierwsze.";
    }
    return "Wpisz przynajmniej jedną kwotę dochodu, żeby kalkulator mógł policzyć budżet.";
  }

  function renderList(id, items) {
    const list = document.getElementById(id);
    if (!list) {
      return;
    }
    list.innerHTML = "";
    items.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }

  function setText(id, text) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = text;
    }
  }

  function calculateBudget() {
    const income = {
      salary: getNumber("income-salary"),
      partner: getNumber("income-partner"),
      benefits: getNumber("income-benefits"),
      business: getNumber("income-business"),
      other: getNumber("income-other")
    };

    const housing = getNumber("housing-rent") + getNumber("housing-utilities") + getNumber("housing-media") + getNumber("housing-other");
    const daily = getNumber("daily-food") + getNumber("daily-transport") + getNumber("daily-children") + getNumber("daily-health") + getNumber("daily-clothes");
    const debts = getNumber("debt-loans") + getNumber("debt-borrowings") + getNumber("debt-cards") + getNumber("debt-other");
    const lifestyle = getNumber("life-entertainment") + getNumber("life-subscriptions") + getNumber("life-holidays") + getNumber("life-other");
    const currentSavings = getNumber("savings-current");
    const plannedSavings = getNumber("savings-planned");

    const totalIncome = income.salary + income.partner + income.benefits + income.business + income.other;
    const totalExpenses = housing + daily + debts + lifestyle + currentSavings;
    const left = totalIncome - totalExpenses;
    const spentPercent = totalIncome > 0 ? (totalExpenses / totalIncome) * 100 : 0;
    const leftPercent = totalIncome > 0 ? (left / totalIncome) * 100 : 0;
    const yearlySavings = currentSavings * 12;
    const potentialYearlySavings = Math.max(0, left) * 12;
    const status = budgetStatus(left, totalIncome);

    const result = document.getElementById("budget-result");
    if (result) {
      result.hidden = false;
    }

    setText("budget-status", status);
    setText("result-income", formatMoney(totalIncome));
    setText("result-expenses", formatMoney(totalExpenses));
    setText("result-left", formatMoney(left));
    setText("result-spent-percent", formatPercent(spentPercent));
    setText("result-left-percent", formatPercent(leftPercent));
    setText("result-current-savings", formatMoney(currentSavings));
    setText("result-yearly-savings", formatMoney(yearlySavings));
    setText("result-potential-yearly-savings", formatMoney(potentialYearlySavings));
    setText("result-message", statusMessage(status));

    setText("category-housing", formatPercent(categoryPercent(housing, totalIncome)));
    setText("category-daily", formatPercent(categoryPercent(daily, totalIncome)));
    setText("category-debts", formatPercent(categoryPercent(debts, totalIncome)));
    setText("category-lifestyle", formatPercent(categoryPercent(lifestyle, totalIncome)));
    setText("category-savings", formatPercent(categoryPercent(currentSavings, totalIncome)));

    const tips = [];
    if (totalIncome <= 0) {
      tips.push("Wpisz przynajmniej jedną kwotę dochodu, żeby kalkulator mógł policzyć budżet.");
    }
    if (totalIncome > 0 && categoryPercent(housing, totalIncome) > 40) {
      tips.push("Koszty mieszkania są wysoką częścią budżetu. Warto sprawdzić, czy da się obniżyć rachunki albo zaplanować większą poduszkę finansową.");
    }
    if (totalIncome > 0 && categoryPercent(debts, totalIncome) > 30) {
      tips.push("Raty i zobowiązania mocno obciążają budżet. Warto szczególnie pilnować terminów spłat i unikać nowych zobowiązań bez planu.");
    }
    if (left < 0) {
      tips.push("Wydatki są wyższe niż dochody. Warto przejrzeć koszty stałe i sprawdzić, które wydatki można ograniczyć jako pierwsze.");
    }
    if (currentSavings === 0) {
      tips.push("Nie odkładasz jeszcze regularnie pieniędzy. Nawet mała stała kwota może pomóc zbudować pierwszą poduszkę finansową.");
    }
    if (status === "Bezpieczny budżet") {
      tips.push("Masz dodatni zapas w budżecie. Warto ustalić, jaka część tej kwoty ma iść na oszczędności, a jaka na większe cele.");
    }
    if (plannedSavings > 0 && left < plannedSavings) {
      tips.push("Planowana kwota oszczędności jest wyższa niż obecny zapas po wydatkach. Warto sprawdzić, czy plan jest realny w zwykłym miesiącu.");
    }
    if (tips.length === 0) {
      tips.push("Budżet wygląda spokojnie na podstawie wpisanych danych. Warto wracać do kalkulatora co miesiąc.");
    }

    renderList("budget-tips", tips);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("home-budget-form");
    if (!form) {
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      calculateBudget();
    });
  });
})();
