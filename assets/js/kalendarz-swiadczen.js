(function () {
  const BENEFITS = {
    "800-plus": {
      name: "800 plus",
      type: "ZUS",
      description: "Comiesięczne świadczenie wychowawcze na dziecko, po spełnieniu warunków programu.",
      where: "Najczęściej przez ZUS PUE/eZUS, aplikację mZUS, bankowość elektroniczną albo portal Emp@tia.",
      when: "Wniosek zwykle składa się na nowy okres świadczeniowy. Warto pilnować terminów, żeby uniknąć przerwy w wypłacie.",
      documents: ["dane dziecka", "dane rodzica lub opiekuna", "PESEL", "numer rachunku bankowego"],
      warning: "Sprawdź aktualny okres świadczeniowy i zasady na stronie ZUS.",
      url: "/swiadczenia/800-plus/"
    },
    "dobry-start-300-plus": {
      name: "Dobry Start 300 plus",
      type: "ZUS",
      description: "Jednorazowe wsparcie na wyprawkę szkolną dla ucznia, po spełnieniu warunków programu.",
      where: "Zwykle elektronicznie przez ZUS PUE/eZUS, bankowość elektroniczną, aplikację mZUS lub portal Emp@tia.",
      when: "Przed rokiem szkolnym, w okresie naboru wniosków.",
      documents: ["dane dziecka", "informacje o szkole", "PESEL", "numer rachunku bankowego"],
      warning: "Termin naboru ma znaczenie, dlatego przed złożeniem wniosku sprawdź aktualne daty.",
      url: "/swiadczenia/dobry-start-300-plus/"
    },
    "becikowe": {
      name: "Becikowe",
      type: "Urząd gminy / MOPS",
      description: "Jednorazowe świadczenie po urodzeniu dziecka, zwykle zależne od spełnienia warunków formalnych i dochodowych.",
      where: "Urząd gminy lub miasta, MOPS/GOPS albo inna jednostka obsługująca świadczenia rodzinne.",
      when: "Po urodzeniu dziecka, z pilnowaniem terminu złożenia wniosku.",
      documents: ["dokumenty dziecka", "dane rodziców", "dokumenty dochodowe", "zaświadczenie lekarskie, jeśli jest wymagane"],
      warning: "Przed złożeniem wniosku sprawdź próg dochodowy i wymagane dokumenty w swoim urzędzie.",
      url: "/swiadczenia/becikowe/"
    },
    "zasilek-rodzinny": {
      name: "Zasiłek rodzinny",
      type: "Urząd gminy / MOPS",
      description: "Świadczenie dla rodzin spełniających określone warunki, w tym kryterium dochodowe.",
      where: "Urząd gminy lub miasta, MOPS/GOPS albo centrum świadczeń.",
      when: "Na okres zasiłkowy, zgodnie z lokalnym naborem.",
      documents: ["dokumenty dochodowe", "dane dzieci", "dokumenty potwierdzające sytuację rodziny"],
      warning: "Zasiłek rodzinny jest powiązany z dodatkami, więc warto sprawdzić pełną listę dokumentów.",
      url: "/swiadczenia/zasilek-rodzinny/"
    },
    "kosiniakowe": {
      name: "Kosiniakowe",
      type: "Urząd gminy / MOPS",
      description: "Świadczenie rodzicielskie dla osób, które nie korzystają z zasiłku macierzyńskiego na standardowych zasadach.",
      where: "Urząd gminy lub miasta albo MOPS/GOPS.",
      when: "Po urodzeniu dziecka lub objęciu dziecka opieką, zgodnie z warunkami świadczenia.",
      documents: ["dane dziecka", "dane rodzica lub opiekuna", "dokumenty potwierdzające sytuację"],
      warning: "Sprawdź, czy świadczenie pasuje do Twojej sytuacji rodzinnej i zawodowej.",
      url: "/swiadczenia/kosiniakowe/"
    },
    "swiadczenie-pielegnacyjne": {
      name: "Świadczenie pielęgnacyjne",
      type: "Opieka i niepełnosprawność",
      description: "Wsparcie dla osoby sprawującej opiekę, po spełnieniu warunków związanych z opieką i niepełnosprawnością.",
      where: "Urząd gminy lub miasta albo MOPS/GOPS.",
      when: "Po spełnieniu warunków i zebraniu dokumentów.",
      documents: ["orzeczenie o niepełnosprawności", "dane osoby wymagającej opieki", "dane opiekuna", "dodatkowe dokumenty wymagane przez urząd"],
      warning: "Warunki mogą być szczegółowe, dlatego przed wnioskiem warto sprawdzić aktualne zasady.",
      url: "/swiadczenia/swiadczenie-pielegnacyjne/"
    },
    "swiadczenie-wspierajace": {
      name: "Świadczenie wspierające",
      type: "Opieka i niepełnosprawność",
      description: "Świadczenie dla osoby z niepełnosprawnością, zwykle po uzyskaniu decyzji o poziomie potrzeby wsparcia.",
      where: "Proces zwykle łączy decyzję o poziomie potrzeby wsparcia i wniosek do ZUS.",
      when: "Po uzyskaniu wymaganej decyzji i spełnieniu warunków.",
      documents: ["decyzja o poziomie potrzeby wsparcia", "dane osoby uprawnionej", "dane do wypłaty"],
      warning: "Najpierw sprawdź ścieżkę uzyskania decyzji, a potem zasady wniosku do ZUS.",
      url: "/swiadczenia/swiadczenie-wspierajace/"
    },
    "aktywny-rodzic": {
      name: "Aktywny Rodzic",
      type: "Program dla rodziców",
      description: "Program obejmujący kilka wariantów wsparcia dla rodziców małych dzieci.",
      where: "ZUS/eZUS, zgodnie z obsługą programu.",
      when: "Po spełnieniu warunków dla jednego z wariantów programu.",
      documents: ["dane dziecka", "dane rodziców lub opiekunów", "informacje o opiece nad dzieckiem"],
      warning: "Wybierz właściwy wariant programu i sprawdź, czy pasuje do Twojej sytuacji.",
      url: "/swiadczenia/aktywny-rodzic/"
    },
    "aktywni-rodzice-w-pracy": {
      name: "Aktywni rodzice w pracy",
      type: "Program dla rodziców",
      description: "Wariant programu dla rodziców lub opiekunów spełniających warunki aktywności zawodowej.",
      where: "ZUS/eZUS.",
      when: "Gdy rodzice lub opiekunowie spełniają warunki aktywności zawodowej.",
      documents: ["dane dziecka", "dane rodziców", "informacje potrzebne do potwierdzenia warunków"],
      warning: "Warunki aktywności zawodowej warto sprawdzić przed złożeniem wniosku.",
      url: "/swiadczenia/aktywni-rodzice-w-pracy/"
    },
    "aktywnie-w-zlobku": {
      name: "Aktywnie w żłobku",
      type: "Program dla rodziców",
      description: "Wariant wsparcia związany z opieką żłobkową, klubem dziecięcym albo dziennym opiekunem.",
      where: "ZUS/eZUS.",
      when: "Gdy dziecko uczęszcza do żłobka, klubu dziecięcego albo jest pod opieką dziennego opiekuna.",
      documents: ["dane dziecka", "dane placówki lub opiekuna", "informacje o opłatach"],
      warning: "Sprawdź, czy placówka i opłaty są zgodne z wymaganiami programu.",
      url: "/swiadczenia/aktywnie-w-zlobku/"
    },
    "aktywnie-w-domu": {
      name: "Aktywnie w domu",
      type: "Program dla rodziców",
      description: "Wariant programu dla rodzica lub opiekuna opiekującego się dzieckiem w domu, po spełnieniu warunków.",
      where: "ZUS/eZUS.",
      when: "Gdy dziecko nie korzysta z opieki żłobkowej i spełnione są warunki programu.",
      documents: ["dane dziecka", "dane rodzica lub opiekuna", "numer rachunku bankowego"],
      warning: "Sprawdź, czy ten wariant nie wyklucza się z innym świadczeniem.",
      url: "/swiadczenia/aktywnie-w-domu/"
    },
    "dodatek-rozpoczecie-roku-szkolnego": {
      name: "Dodatek z tytułu rozpoczęcia roku szkolnego",
      type: "Dodatek do zasiłku rodzinnego",
      description: "Dodatek powiązany z zasiłkiem rodzinnym i rozpoczęciem roku szkolnego dziecka.",
      where: "Razem z zasiłkiem rodzinnym, zwykle w urzędzie gminy, MOPS/GOPS lub centrum świadczeń.",
      when: "Przy okazji roku szkolnego, zgodnie z terminami świadczeń rodzinnych.",
      documents: ["dokumenty związane z zasiłkiem rodzinnym", "dokumenty dotyczące nauki dziecka, jeśli są wymagane"],
      warning: "Dodatek zwykle zależy od prawa do zasiłku rodzinnego.",
      url: "/swiadczenia/dodatek-rozpoczecie-roku-szkolnego/"
    },
    "dodatek-rodzina-wielodzietna": {
      name: "Dodatek dla rodziny wielodzietnej",
      type: "Dodatek do zasiłku rodzinnego",
      description: "Dodatek do zasiłku rodzinnego dla rodzin wychowujących więcej dzieci, po spełnieniu warunków.",
      where: "Razem z zasiłkiem rodzinnym.",
      when: "Przy składaniu wniosku o zasiłek rodzinny lub w trakcie okresu, jeśli zmieni się sytuacja.",
      documents: ["dane dzieci", "dokumenty do zasiłku rodzinnego"],
      warning: "Sprawdź, od którego dziecka dodatek może być brany pod uwagę.",
      url: "/swiadczenia/dodatek-rodzina-wielodzietna/"
    },
    "dodatek-samotne-wychowywanie-dziecka": {
      name: "Dodatek z tytułu samotnego wychowywania dziecka",
      type: "Dodatek do zasiłku rodzinnego",
      description: "Dodatek powiązany z zasiłkiem rodzinnym i sytuacją samotnego wychowywania dziecka.",
      where: "Razem z zasiłkiem rodzinnym.",
      when: "Przy składaniu wniosku o zasiłek rodzinny albo po zmianie sytuacji rodzinnej.",
      documents: ["dokumenty potwierdzające sytuację rodzinną", "dane dziecka", "dokumenty do zasiłku rodzinnego"],
      warning: "Urząd może wymagać dokumentów potwierdzających sytuację rodzinną.",
      url: "/swiadczenia/dodatek-samotne-wychowywanie-dziecka/"
    },
    "dodatek-urodzenie-dziecka": {
      name: "Dodatek z tytułu urodzenia dziecka",
      type: "Dodatek do zasiłku rodzinnego",
      description: "Dodatek do zasiłku rodzinnego związany z urodzeniem dziecka, po spełnieniu warunków.",
      where: "Razem z zasiłkiem rodzinnym.",
      when: "Po urodzeniu dziecka, z pilnowaniem terminu.",
      documents: ["dane dziecka", "dokumenty rodzinne", "dokumenty dochodowe", "dokumenty do zasiłku rodzinnego"],
      warning: "Nie myl tego dodatku z becikowym; warunki mogą być inne.",
      url: "/swiadczenia/dodatek-urodzenie-dziecka/"
    },
    "dodatek-urlop-wychowawczy": {
      name: "Dodatek z tytułu urlopu wychowawczego",
      type: "Dodatek do zasiłku rodzinnego",
      description: "Dodatek powiązany z zasiłkiem rodzinnym i korzystaniem z urlopu wychowawczego.",
      where: "Razem z zasiłkiem rodzinnym.",
      when: "Gdy rodzic lub opiekun korzysta z urlopu wychowawczego i spełnia warunki.",
      documents: ["dokumenty potwierdzające urlop wychowawczy", "dokumenty do zasiłku rodzinnego"],
      warning: "Przed wnioskiem sprawdź wymagany staż i dokumenty potwierdzające urlop.",
      url: "/swiadczenia/dodatek-urlop-wychowawczy/"
    },
    "dodatek-ksztalcenie-rehabilitacja": {
      name: "Dodatek na kształcenie i rehabilitację",
      type: "Dodatek do zasiłku rodzinnego",
      description: "Dodatek do zasiłku rodzinnego związany z niepełnosprawnością dziecka, nauką lub rehabilitacją.",
      where: "Razem z zasiłkiem rodzinnym.",
      when: "Gdy dziecko spełnia warunki związane z niepełnosprawnością i nauką lub rehabilitacją.",
      documents: ["orzeczenie", "dokumenty dziecka", "dokumenty do zasiłku rodzinnego"],
      warning: "Najczęściej potrzebne są dokumenty potwierdzające niepełnosprawność.",
      url: "/swiadczenia/dodatek-ksztalcenie-rehabilitacja/"
    },
    "dodatek-nauka-poza-miejscem-zamieszkania": {
      name: "Dodatek na naukę poza miejscem zamieszkania",
      type: "Dodatek do zasiłku rodzinnego",
      description: "Dodatek do zasiłku rodzinnego dla ucznia uczącego się poza miejscem zamieszkania, po spełnieniu warunków.",
      where: "Razem z zasiłkiem rodzinnym.",
      when: "Gdy dziecko uczy się poza miejscem zamieszkania i spełnia warunki dodatku.",
      documents: ["dokumenty ze szkoły", "dokumenty potwierdzające naukę poza miejscem zamieszkania", "dokumenty do zasiłku rodzinnego"],
      warning: "Sprawdź, czy chodzi o dojazd, zamieszkanie poza domem czy inny wariant dodatku.",
      url: "/swiadczenia/dodatek-nauka-poza-miejscem-zamieszkania/"
    }
  };

  function renderBenefit(benefit) {
    const result = document.getElementById("benefit-result");
    document.getElementById("benefit-name").textContent = benefit.name;
    document.getElementById("benefit-type").textContent = benefit.type;
    document.getElementById("benefit-description").textContent = benefit.description;
    document.getElementById("benefit-where").textContent = benefit.where;
    document.getElementById("benefit-when").textContent = benefit.when;
    document.getElementById("benefit-warning").textContent = benefit.warning;
    document.getElementById("benefit-link").href = benefit.url;

    const documents = document.getElementById("benefit-documents");
    documents.innerHTML = "";
    benefit.documents.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      documents.appendChild(li);
    });

    result.hidden = false;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("benefit-select");
    const form = document.getElementById("benefit-calendar-form");

    if (!select || !form) {
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const benefit = BENEFITS[select.value];
      if (benefit) {
        renderBenefit(benefit);
      }
    });

    if (select.value && BENEFITS[select.value]) {
      renderBenefit(BENEFITS[select.value]);
    }
  });
})();
