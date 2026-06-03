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
