# Wybieram Finanse — instrukcje dla Codex / AI agenta

## Cel projektu

Budujemy polski portal afiliacyjny finansowy pod domeną:

https://wybieramfinanse.pl

Strona ma zarabiać głównie na afiliacji finansowej oraz dodatkowo na Google AdSense.

Główne tematy:
- konta osobiste,
- konta firmowe,
- pożyczki,
- kredyty,
- karty,
- ubezpieczenia,
- świadczenia rodzinne,
- poradniki finansowe,
- budżet domowy.

## Technologia

Projekt jest statyczną stroną HTML/CSS.

Hosting:
- Cloudflare Pages

Repozytorium:
- GitHub: wybieramfinanse

Brak frameworka.
Brak build command.
Cloudflare Pages publikuje stronę po commitach do main.

## Ważne pliki

- index.html — strona główna
- style.css — globalne style
- robots.txt
- sitemap.xml
- ads.txt
- PROJECT_STATUS.md — aktualny status projektu
- /rankingi/konta-osobiste/index.html — ranking kont osobistych
- /swiadczenia/800-plus/index.html — artykuł o 800 plus

## AdSense

W każdym nowym pliku HTML należy w sekcji head dodać skrypt:

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7645481846348914"
     crossorigin="anonymous"></script>

ads.txt:

google.com, pub-7645481846348914, DIRECT, f08c47fec0942fa0

## Google Analytics 4

- Projekt Wybieram Finanse używa Google Analytics 4.
- Measurement ID: G-QWY5T45BG6.
- Przy każdym nowym pliku HTML należy dodać tag GA4 bezpośrednio po <head>.
- Nie wolno dodawać więcej niż jednego tagu Google Analytics na stronie.

## Styl treści

Artykuły mają być pisane prostym, naturalnym językiem dla zwykłych ludzi.

Nie pisać tekstów, które brzmią jak z generatora.

Styl:
- jasno,
- po ludzku,
- konkretnie,
- krótkie zdania,
- bez przesadnego żargonu,
- z praktycznymi odpowiedziami.

Struktura artykułów:
- szybka odpowiedź,
- proste wyjaśnienie,
- szczegóły,
- FAQ,
- linki do oficjalnych źródeł,
- delikatne linkowanie wewnętrzne do rankingów.

## Afiliacja

Na stronach rankingowych używamy linków afiliacyjnych z atrybutami:

rel="sponsored nofollow"
target="_blank"

Nie opisujemy warunków naszej prowizji.
Opisujemy warunki z perspektywy użytkownika:
- co może zyskać,
- jakie opłaty sprawdzić,
- jakie warunki promocji sprawdzić,
- dla kogo oferta może mieć sens.

## Aktualny ranking kont osobistych

Strona:
/rankingi/konta-osobiste/

Ranking ma 12 kont:

1. mBank eKonto do usług
2. BNP Paribas Konto Otwarte na Ciebie
3. Erste / Santander Konto Smart
4. PKO Konto za Zero
5. Bank Millennium Konto 360°
6. VeloBank VeloKonto
7. Credit Agricole Konto dla Ciebie
8. Alior Konto Plus
9. Nest Konto
10. Bank Pekao Konto Przekorzystne
11. Bank Pocztowy Konto w Porządku
12. UniCredit Konto Osobiste

## Logotypy banków

Pliki logo w /assets/logos/:

- UniCredit.jpg
- bank_pocztowy.jpg
- bnp.jpg
- erste.png
- mbank.jpg
- nest.png
- pekao.jpg
- pko.webp

Brakujące logo są zastąpione tekstowymi badge’ami:
- Credit Agricole
- Millennium
- VeloBank
- Alior Bank

Nie dodawać przypadkowych logo z Google Grafika.
Logo brać tylko z:
- panelu afiliacyjnego,
- oficjalnego press kitu,
- oficjalnej strony banku,
- oficjalnej sekcji brand/media.

## SEO

Każdy nowy artykuł powinien mieć:
- unikalny title,
- meta description,
- canonical,
- Open Graph,
- FAQ jeśli temat pasuje,
- FAQPage JSON-LD jeśli jest FAQ,
- wpis w sitemap.xml,
- linkowanie wewnętrzne z odpowiednich stron,
- aktualizację PROJECT_STATUS.md.

## Ważne

Po każdej większej zmianie zaktualizować PROJECT_STATUS.md.

Nie usuwać:
- skryptu AdSense,
- informacji o afiliacji,
- rel="sponsored nofollow" z linków afiliacyjnych,
- sitemap.xml,
- robots.txt,
- ads.txt.

Nie dodawać trudnego, urzędowego języka do artykułów.
Nie obiecywać użytkownikowi zysków ani gwarancji.
