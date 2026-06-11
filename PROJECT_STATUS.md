# Wybieram Finanse — status projektu

## Cel projektu

Budujemy portal afiliacyjny finansowy pod domeną `wybieramfinanse.pl`. Strona ma długoterminowo zarabiać na afiliacji finansowej, reklamach AdSense oraz potencjalnie afiliacji ubezpieczeniowej.

Główne założenie: proste rankingi, praktyczne narzędzia i poradniki finansowe pisane zwykłym językiem dla użytkowników z Polski.

## Technologia

- Domena: `wybieramfinanse.pl`
- DNS: Cloudflare
- Hosting: Cloudflare Pages
- Repozytorium GitHub: `HinaruPL/wybieramfinanse`
- Strona statyczna: HTML, CSS, JavaScript
- Analityka: Google Analytics 4, ID `G-QWY5T45BG6`
- Reklamy: Google AdSense, publisher ID `pub-7645481846348914`
- Plik `ads.txt` dodany
- Google CMP / Funding Choices: link „Ustawienia prywatności” w stopce

## Główne działy portalu

- `/` — strona główna
- `/rankingi/` — hub rankingów
- `/rankingi/konta-osobiste/` — ranking kont osobistych
- `/rankingi/konta-firmowe/` — ranking kont firmowych dla JDG
- `/rankingi/konta-firmowe/konto-firmowe-dla-spolki/` — konta firmowe dla spółek
- `/rankingi/konta-firmowe/zalozenie-firmy-z-kontem/` — zakładanie firmy z kontem
- `/rankingi/konta-firmowe/revolut-business/` — Revolut Business
- `/dla-firm/` — hub dla firm
- `/swiadczenia/` — hub świadczeń
- `/narzedzia/` — hub narzędzi finansowych
- `/poradniki/` — hub poradników
- `/o-nas/`, `/kontakt/`, `/informacja-o-afiliacji/`, `/polityka-prywatnosci/`

## Aktualny stan po redesignie — 07.06.2026

Zakończono duży etap UX/design głównych hubów. Przebudowane zostały:

- strona główna `/`,
- `/swiadczenia/`,
- `/narzedzia/`,
- `/rankingi/`.

Nowy kierunek designu:

- mniej „ściany tekstu”,
- więcej wyboru po intencji użytkownika,
- większe kafle tematyczne,
- mocniejsze hero,
- szybsze wejścia do najważniejszych narzędzi i rankingów,
- lepsza czytelność na mobile,
- spójniejsze CTA,
- huby działają bardziej jak centrum wyboru, a nie katalog linków.

Użytkownik sprawdził desktop i mobile po redesignie — wygląda dobrze.

## Aktualizacja — 10.06.2026

Dodano kolejne artykuły do klastra opieka i niepełnosprawność:

- `/swiadczenia/renta-socjalna/`,
- `/swiadczenia/renta-z-tytulu-niezdolnosci-do-pracy/`,
- `/swiadczenia/swiadczenie-uzupelniajace-500-plus-dla-osob-niesamodzielnych/`.

Wykonane zmiany:

- dodano artykuł o rencie socjalnej,
- dodano artykuł o rencie z tytułu niezdolności do pracy,
- dodano artykuł o świadczeniu uzupełniającym 500 plus dla osób niesamodzielnych,
- podpięto rentę z tytułu niezdolności do pracy w hubie `/swiadczenia/`,
- podpięto świadczenie uzupełniające w hubie `/swiadczenia/`,
- zaktualizowano `sitemap.xml` dla wcześniejszych artykułów,
- dodano nowe URL-e do klastra świadczeń.

Uwaga techniczna: przy próbie aktualizacji `sitemap.xml` po dodaniu świadczenia uzupełniającego narzędzie zapisu zablokowało pełną podmianę pliku. Trzeba sprawdzić, czy URL został finalnie dopisany do sitemap po kolejnym deployu albo dopisać go ręcznie.

Po deployu należy ręcznie zgłosić w Google Search Console:

- `https://wybieramfinanse.pl/swiadczenia/renta-socjalna/`,
- `https://wybieramfinanse.pl/swiadczenia/renta-z-tytulu-niezdolnosci-do-pracy/`,
- `https://wybieramfinanse.pl/swiadczenia/swiadczenie-uzupelniajace-500-plus-dla-osob-niesamodzielnych/`.

## Ważne zasady przy nowych plikach HTML

Każdy nowy plik HTML powinien mieć w `<head>`:

- `meta charset="UTF-8"`,
- tag Google Analytics 4 z ID `G-QWY5T45BG6`,
- `meta viewport`,
- `meta referrer` ustawione na `strict-origin-when-cross-origin`,
- poprawny `title`,
- meta description,
- canonical,
- Open Graph,
- Twitter Card,
- favicon i apple touch icon,
- skrypt AdSense:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7645481846348914"
     crossorigin="anonymous"></script>
```

W stopce powinien być link „Ustawienia prywatności” oraz skrypt Google Funding Choices używany już na innych stronach.

## Styl treści

Artykuły mają być pisane:

- po polsku,
- prostym, naturalnym językiem,
- konkretnie,
- bez pustych ogólników,
- z jasnym wyjaśnianiem pojęć,
- z sekcjami FAQ,
- z linkami do oficjalnych źródeł,
- z linkowaniem wewnętrznym do powiązanych tematów,
- z ostrożnym podejściem do kwot i terminów, jeżeli mogą się zmieniać.

Przy świadczeniach i tematach prawno-urzędowych zawsze dodawać informację, że artykuł ma charakter informacyjny i nie jest decyzją urzędu ani poradą prawną.

## Klastry SEO — aktualny stan

### Konta i bankowość

Gotowe lub rozwinięte:

- ranking kont osobistych,
- ranking kont firmowych,
- konta firmowe dla spółek,
- zakładanie firmy z kontem,
- Revolut Business,
- Revolut dla osób prywatnych,
- kalkulator kosztu konta osobistego,
- kalkulator premii bankowej.

### Narzędzia bankowe

Gotowe:

- `/narzedzia/kiedy-przelew/`,
- `/narzedzia/sesje-elixir/`,
- `/narzedzia/jaki-to-bank/`,
- `/narzedzia/kalkulator-premii-bankowej/`,
- `/narzedzia/kalkulator-kosztu-konta-osobistego/`,
- `/narzedzia/kalendarz-swiadczen/`,
- `/narzedzia/kalkulator-budzetu-domowego/`.

Uwaga: dane sesji Elixir banków wymagają okresowej ręcznej weryfikacji, bo banki mogą zmieniać godziny księgowania.

### Świadczenia rodzinne

Gotowe lub rozwinięte:

- 800 plus,
- Dobry Start 300 plus,
- becikowe,
- kosiniakowe,
- zasiłek rodzinny,
- dodatki do zasiłku rodzinnego,
- Aktywny Rodzic,
- aktywni rodzice w pracy,
- aktywnie w żłobku,
- aktywnie w domu.

### Opieka i niepełnosprawność

Aktualny mocny klaster:

- `/swiadczenia/orzeczenie-o-niepelnosprawnosci/`,
- `/swiadczenia/karta-parkingowa/`,
- `/swiadczenia/zasilek-pielegnacyjny/`,
- `/swiadczenia/dodatek-pielegnacyjny/`,
- `/swiadczenia/swiadczenie-pielegnacyjne/`,
- `/swiadczenia/swiadczenie-wspierajace/`,
- `/swiadczenia/renta-socjalna/`,
- `/swiadczenia/renta-z-tytulu-niezdolnosci-do-pracy/`,
- `/swiadczenia/swiadczenie-uzupelniajace-500-plus-dla-osob-niesamodzielnych/`.

Ważne rozróżnienie:

- zasiłek pielęgnacyjny — dla osoby wymagającej opieki/pomocy,
- dodatek pielęgnacyjny — najczęściej z ZUS, przy emeryturze/rencie,
- świadczenie pielęgnacyjne — dla opiekuna,
- świadczenie wspierające — dla osoby z niepełnosprawnością, zależne od punktów potrzeby wsparcia,
- renta socjalna — dla osoby całkowicie niezdolnej do pracy, gdy naruszenie sprawności powstało wcześnie,
- renta z tytułu niezdolności do pracy — renta z ZUS powiązana z niezdolnością do pracy i stażem ubezpieczeniowym,
- świadczenie uzupełniające — wsparcie dla osób niezdolnych do samodzielnej egzystencji, potocznie 500 plus dla niesamodzielnych.

## Najbliższy kierunek

Kontynuujemy mocne treści SEO w klastrze niepełnosprawność / opieka / świadczenia.

Priorytetowe tematy:

1. `/swiadczenia/ulga-rehabilitacyjna/`
2. `/swiadczenia/dofinansowanie-pfron/`

Pierwszy następny artykuł: **ulga rehabilitacyjna**.

## Aktualizacja — 11.06.2026

Dodano nowy klaster treści w dziale `/swiadczenia/`:

- `/swiadczenia/ulga-rehabilitacyjna/`,
- `/swiadczenia/dofinansowanie-pfron/`,
- `/swiadczenia/turnus-rehabilitacyjny-pfron/`,
- `/swiadczenia/dofinansowanie-do-sprzetu-rehabilitacyjnego/`,
- `/swiadczenia/dofinansowanie-do-likwidacji-barier/`.

Klaster „ulgi i dofinansowania” został dołączony do hubu świadczeń, a istniejące artykuły o opiece i niepełnosprawności dostały linki do nowych poradników.

## Do pamiętania

- Po dodaniu nowej strony trzeba zaktualizować `sitemap.xml`.
- Po dodaniu nowego ważnego artykułu trzeba podlinkować go z odpowiedniego huba, najczęściej `/swiadczenia/`, `/narzedzia/`, `/rankingi/` albo `/poradniki/`.
- Przy większych zmianach aktualizować ten plik.
- Nie dodawać martwych linków do stron, których jeszcze nie ma.
- Przy narzędziach nie psuć istniejącej logiki JavaScript.
- Przy danych bankowych i świadczeniach uwzględniać, że informacje mogą się zmieniać i wymagać ręcznej weryfikacji.
