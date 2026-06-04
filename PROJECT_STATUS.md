# Wybieram Finanse — status projektu

## Cel
Budujemy portal afiliacyjny finansowy pod domeną wybieramfinanse.pl. Strona ma zarabiać na afiliacji finansowej i potencjalnie ubezpieczeniowej.

## Główne kategorie
- Konta osobiste
- Konta firmowe
- Pożyczki online
- Kredyty
- Karty kredytowe
- Konta oszczędnościowe
- Ubezpieczenia
- Świadczenia: 800 plus, 300 plus, becikowe, zasiłek rodzinny
- Poradniki finansowe
- Budżet domowy
- Finanse firmy

## Technologia
- Domena: wybieramfinanse.pl
- Rejestrator: nazwa.pl
- DNS: Cloudflare
- Hosting: Cloudflare Pages
- Repozytorium GitHub: wybieramfinanse
- Strona statyczna: HTML, CSS, JavaScript

## Gotowe
- Strona główna
- style.css
- robots.txt
- sitemap.xml
- /o-nas/
- /kontakt/
- /informacja-o-afiliacji/
- /polityka-prywatnosci/
- www przekierowuje na domenę bez www
- SSL działa przez Cloudflare
- /rankingi/konta-osobiste/ — pierwsza strona zarabiająca, wersja robocza z tabelą ofert, metodologią i FAQ

## Do sprawdzenia później
- Google Search Console: sitemap.xml działa w przeglądarce, ale w GSC pokazało „nie udało się pobrać”.

## Najbliższy następny krok
Rozpocząć wybór pierwszych kampanii afiliacyjnych dla kont osobistych oraz przygotować wersję rankingu z prawdziwymi ofertami.

Potem:
- dodać link do niej ze strony głównej
- zaktualizować sitemap.xml
- zrobić pierwsze artykuły pod ruch: /swiadczenia/800-plus/ i /swiadczenia/dobry-start-300-plus/

## Aktualizacja — 31.05.2026

Dodano pierwszą stronę zarabiającą:

- /rankingi/konta-osobiste/

Ranking zawiera 11 ofert z linkami afiliacyjnymi:
- mBank eKonto do usług
- BNP Paribas Konto Otwarte na Ciebie
- Erste / Santander Konto Smart
- PKO Konto za Zero
- Bank Millennium Konto 360°
- VeloBank VeloKonto
- Credit Agricole Konto dla Ciebie
- Alior Konto Plus
- Nest Konto
- Bank Pocztowy Konto w Porządku
- UniCredit Konto Osobiste

Poprawiono linkowanie ze strony głównej do rankingu kont osobistych.

Do zrobienia:
- dodać opisy ofert pod tabelą,
- poprawić SEO strony rankingu,
- dodać dane strukturalne FAQ,
- rozważyć dodanie logo banków z legalnych źródeł,
- wrócić do Google Search Console i sprawdzić sitemap.xml,
- zaplanować AdSense jako dodatkowe źródło przychodu dla artykułów informacyjnych.


## Aktualizacja — logo w rankingu kont osobistych

- Do tabeli rankingu kont osobistych dodano logotypy/badge’e przy numeracji.
- Użyte logotypy: mBank, BNP Paribas, Erste, PKO BP, Nest Bank, Bank Pekao, Bank Pocztowy, UniCredit.
- Dla banków bez pewnego pliku logo dodano tekstowe oznaczenia: Credit Agricole, Millennium, VeloBank, Alior Bank.
- Poprawiono CSS, aby logo i badge’e wyglądały lżej i bardziej profesjonalnie.

- ## Aktualizacja — SEO rankingu kont osobistych

- Poprawiono meta title i meta description dla /rankingi/konta-osobiste/.
- Dodano canonical URL.
- Dodano podstawowe tagi Open Graph.
- Dodano tekst SEO wyjaśniający, jak korzystać z rankingu kont osobistych.
- Rozbudowano FAQ do 6 pytań.
- Dodano dane strukturalne FAQPage w formacie JSON-LD.


## Aktualizacja — AdSense

- Dodano skrypt Google AdSense do plików HTML.
- Publisher ID: pub-7645481846348914.
- Dodano plik ads.txt:
  google.com, pub-7645481846348914, DIRECT, f08c47fec0942fa0
- Utworzono komunikat zgody Google CMP dla użytkowników z EEA, UK i Szwajcarii.
- Układ reklam zostanie dopracowany po przygotowaniu większej liczby treści.


- Dodano pierwszy artykuł ruchowy: /swiadczenia/800-plus/.
- Artykuł zawiera prosty poradnik, FAQ, FAQ Schema, AdSense, link do rankingu kont osobistych i oficjalne źródła ZUS/gov.pl.

- Dodano link ze strony głównej do artykułu /swiadczenia/800-plus/.

## Aktualizacja — 03.06.2026

- Dodano artykuł /swiadczenia/dobry-start-300-plus/.
- Artykuł zawiera prosty poradnik, FAQ, FAQ Schema, AdSense, link do rankingu kont osobistych i oficjalne źródła ZUS/gov.pl.
- Dodano link ze strony głównej do artykułu Dobry Start 300 plus.
- Zaktualizowano sitemap.xml.

## Aktualizacja — 03.06.2026 — becikowe

- Dodano artykuł /swiadczenia/becikowe/.
- Artykuł zawiera prosty poradnik, FAQ, FAQ Schema, AdSense, link do rankingu kont osobistych i oficjalne źródła gov.pl.
- Dodano link ze strony głównej do artykułu Becikowe.
- Zaktualizowano sitemap.xml.

## Aktualizacja — 03.06.2026 — grafiki hero artykułów

- Dodano grafiki hero do artykułów /swiadczenia/800-plus/, /swiadczenia/dobry-start-300-plus/ i /swiadczenia/becikowe/.
- Dodano og:image i twitter:image dla tych artykułów, aby linki lepiej wyglądały przy udostępnianiu w social media.
- Dodano wspólne style .article-image-section i .article-hero-image w style.css.

## Aktualizacja — 03.06.2026 — strona zbiorcza świadczeń

- Dodano stronę zbiorczą /swiadczenia/ dla poradników o świadczeniach rodzinnych.
- Strona linkuje do artykułów: 800 plus, Dobry Start 300 plus i Becikowe.
- Dodano linkowanie wewnętrzne do rankingu kont osobistych.
- Zaktualizowano sitemap.xml.

## Aktualizacja — 03.06.2026 — nawigacja świadczeń

- Poprawiono link „Świadczenia” w głównej nawigacji, aby prowadził do /swiadczenia/ zamiast do anchora na stronie głównej.

## Aktualizacja — 03.06.2026 — zasiłek rodzinny

- Dodano artykuł /swiadczenia/zasilek-rodzinny/.
- Artykuł zawiera prosty poradnik, FAQ, FAQ Schema, AdSense, link do rankingu kont osobistych i oficjalne źródła gov.pl.
- Dodano link do artykułu ze strony /swiadczenia/.
- Dodano link do artykułu ze strony głównej.
- Zaktualizowano sitemap.xml.

## Aktualizacja — 03.06.2026 — kosiniakowe

- Dodano artykuł /swiadczenia/kosiniakowe/.
- Artykuł zawiera prosty poradnik, FAQ, FAQ Schema, AdSense, link do rankingu kont osobistych i oficjalne źródła gov.pl.
- Dodano link do artykułu ze strony /swiadczenia/.
- Dodano link do artykułu ze strony głównej.
- Zaktualizowano sitemap.xml.

## Aktualizacja — 03.06.2026 — grafiki hero zasiłku rodzinnego i kosiniakowego

- Dodano grafiki hero do artykułów /swiadczenia/zasilek-rodzinny/ i /swiadczenia/kosiniakowe/.
- Dodano og:image i twitter:image dla tych artykułów, aby linki lepiej wyglądały przy udostępnianiu w social media.

## Aktualizacja — 03.06.2026 — świadczenie pielęgnacyjne

- Dodano artykuł /swiadczenia/swiadczenie-pielegnacyjne/.
- Artykuł zawiera prosty poradnik, FAQ, FAQ Schema, AdSense, link do rankingu kont osobistych i oficjalne źródła gov.pl.
- Dodano link do artykułu ze strony /swiadczenia/.
- Dodano link do artykułu ze strony głównej.
- Zaktualizowano sitemap.xml.

## Aktualizacja — 03.06.2026 — świadczenie wspierające

- Dodano artykuł /swiadczenia/swiadczenie-wspierajace/.
- Artykuł zawiera prosty poradnik, FAQ, FAQ Schema, AdSense, link do rankingu kont osobistych i oficjalne źródła gov.pl/ZUS.
- Dodano link do artykułu ze strony /swiadczenia/.
- Dodano link do artykułu ze strony głównej.
- Zaktualizowano sitemap.xml.

## Aktualizacja — 03.06.2026 — dodatek na rozpoczęcie roku szkolnego

- Dodano artykuł /swiadczenia/dodatek-rozpoczecie-roku-szkolnego/.
- Artykuł wyjaśnia prostym językiem dodatek 100 zł na rozpoczęcie roku szkolnego i różnicę względem Dobry Start 300 plus.
- Artykuł zawiera FAQ, FAQ Schema, AdSense, linki wewnętrzne i oficjalne/pomocnicze źródła.
- Dodano link do artykułu ze strony /swiadczenia/.
- Dodano link do artykułu ze strony głównej.
- Zaktualizowano sitemap.xml.

## Aktualizacja — 04.06.2026 — dodatek dla rodziny wielodzietnej

- Dodano artykuł /swiadczenia/dodatek-rodzina-wielodzietna/.
- Artykuł wyjaśnia prostym językiem dodatek 95 zł na trzecie i kolejne dziecko oraz powiązanie z zasiłkiem rodzinnym.
- Artykuł zawiera FAQ, FAQ Schema, AdSense, linki wewnętrzne i oficjalne źródła gov.pl.
- Dodano link do artykułu ze strony /swiadczenia/.
- Dodano link do artykułu ze strony głównej.
- Zaktualizowano sitemap.xml.

## Aktualizacja — 04.06.2026 — pakiet dodatków do zasiłku rodzinnego

- Dodano pakiet 5 artykułów o dodatkach do zasiłku rodzinnego:
  - /swiadczenia/dodatek-samotne-wychowywanie-dziecka/
  - /swiadczenia/dodatek-urodzenie-dziecka/
  - /swiadczenia/dodatek-urlop-wychowawczy/
  - /swiadczenia/dodatek-ksztalcenie-rehabilitacja/
  - /swiadczenia/dodatek-nauka-poza-miejscem-zamieszkania/
- Wszystkie artykuły zawierają prosty poradnik, FAQ, FAQ Schema, AdSense, linki wewnętrzne i oficjalne źródła.
- Zaktualizowano /swiadczenia/, stronę główną i sitemap.xml.
- Grafiki hero dla tych artykułów zostaną dodane później.

## Aktualizacja — 04.06.2026 — grafiki hero dla kolejnych świadczeń

- Dodano grafiki hero do 9 artykułów w sekcji świadczeń:
  - /swiadczenia/swiadczenie-pielegnacyjne/
  - /swiadczenia/swiadczenie-wspierajace/
  - /swiadczenia/dodatek-rozpoczecie-roku-szkolnego/
  - /swiadczenia/dodatek-rodzina-wielodzietna/
  - /swiadczenia/dodatek-samotne-wychowywanie-dziecka/
  - /swiadczenia/dodatek-urodzenie-dziecka/
  - /swiadczenia/dodatek-urlop-wychowawczy/
  - /swiadczenia/dodatek-ksztalcenie-rehabilitacja/
  - /swiadczenia/dodatek-nauka-poza-miejscem-zamieszkania/
- Dla tych artykułów dodano og:image i twitter:image, aby linki lepiej wyglądały przy udostępnianiu w social media.
- Sprawdzono, że wspólne style .article-image-section i .article-hero-image nie zostały zdublowane.

## Aktualizacja — 04.06.2026 — Google Analytics 4

- Dodano Google Analytics 4 do plików HTML.
- Measurement ID: G-QWY5T45BG6.
- Od teraz nowe pliki HTML powinny zawierać tag GA4 bezpośrednio po <head>, razem ze skryptem AdSense.

## Aktualizacja — 04.06.2026 — meta referrer dla AdSense CMP

- Dodano meta referrer strict-origin-when-cross-origin do plików HTML, aby pomóc w poprawnym wyświetlaniu Google AdSense CMP / Privacy & messaging message.
- Sprawdzono obecność skryptu AdSense w sekcji head plików HTML.
