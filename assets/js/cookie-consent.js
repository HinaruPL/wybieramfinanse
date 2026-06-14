(function () {
  var STORAGE_KEY = 'wybieramfinanse_cookie_consent_v1';
  var GA_ID = 'G-QWY5T45BG6';
  var consentValue = null;

  function safeGetItem(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function safeSetItem(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {}
  }

  function ensureDataLayer() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };
  }

  function loadGa() {
    if (window.__wybieramFinanseGaLoaded) {
      return;
    }

    window.__wybieramFinanseGaLoaded = true;
    ensureDataLayer();
    window.gtag('js', new Date());

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);

    window.gtag('config', GA_ID);
  }

  function hideBanner(banner) {
    if (banner && banner.parentNode) {
      banner.parentNode.removeChild(banner);
    }
    document.body.classList.remove('cookie-banner-open');
  }

  function setConsent(value) {
    consentValue = value;
    safeSetItem(STORAGE_KEY, value);
  }

  function createButton(label, className, onClick) {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = className;
    button.textContent = label;
    button.addEventListener('click', onClick);
    return button;
  }

  function buildBanner() {
    var banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', 'Informacja o cookies');
    banner.innerHTML = ''
      + '<div class="cookie-banner__copy">'
      + '<p class="cookie-banner__label">Cookies</p>'
      + '<p>Używamy plików cookies niezbędnych do działania strony. Za Twoją zgodą uruchomimy Google Analytics, żeby lepiej rozumieć ruch i poprawiać treści. Szczegóły znajdziesz w polityce cookies.</p>'
      + '<a class="cookie-banner__link" href="/cookies/">Przeczytaj politykę cookies</a>'
      + '</div>';

    var actions = document.createElement('div');
    actions.className = 'cookie-banner__actions';
    actions.appendChild(createButton('Tylko niezbędne', 'btn secondary', function () {
      setConsent('necessary');
      hideBanner(banner);
    }));
    actions.appendChild(createButton('Akceptuję', 'btn primary', function () {
      setConsent('all');
      loadGa();
      hideBanner(banner);
    }));
    banner.appendChild(actions);

    return banner;
  }

  consentValue = safeGetItem(STORAGE_KEY);

  if (consentValue === 'all') {
    loadGa();
    return;
  }

  if (consentValue === 'necessary') {
    return;
  }

  function init() {
    if (!document.body) {
      return;
    }

    var banner = buildBanner();
    document.body.classList.add('cookie-banner-open');
    document.body.appendChild(banner);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
