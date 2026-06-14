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

## Aktualizacja — 13.06.2026

W kolejnym sprincie wzmocniliśmy warstwę zaufania, przejrzystości i jakości redakcyjnej serwisu po wykrytym sygnale dotyczącym treści o niskiej wartości.

Wykonane zmiany:

- dodano stronę `/jak-tworzymy-tresci/` opisującą proces tworzenia treści, źródła i zasady aktualizacji,
- rozbudowano stronę `/o-nas/`, żeby lepiej wyjaśniała misję portalu i sposób pracy redakcji,
- dodano bloki `editorial-note` w kluczowych hubach i artykułach,
- wzmocniono linkowanie do strony o procesie tworzenia treści w stopkach,
- dodano nowe ilustracje SVG dla stron redakcyjnych,
- zaktualizowano `sitemap.xml` o nowy URL,
- zachowano dotychczasowe treści, rankingi i afiliacyjne CTA bez skracania materiałów.

Klaster tematyczny:

- `ulgi i dofinansowania` dla osób z niepełnosprawnością został dopisany wcześniej i pozostaje częścią rozbudowy działu `/swiadczenia/`.

Następny planowany kierunek:

- rozszerzenie tematu kredytów gotówkowych, RRSO i kalkulatorów rat w kolejnych artykułach poradnikowych.

## Sprint 4A — 14.06.2026

Dodaliśmy nowy ranking kredytów gotówkowych pod adresem `/rankingi/kredyty-gotowkowe/`.

Zakres sprintu:

- utworzono nową stronę z rankingiem klasycznych kredytów i pożyczek gotówkowych bankowych,
- dodano własną grafikę SVG dla tego rankingu,
- wstawiono disclaimer, blok redakcyjny, metodologię, FAQ i oficjalne źródła,
- dopisano link do nowego rankingu w hubie `/rankingi/`,
- dopisano link do nowego rankingu na stronie głównej `/`,
- zaktualizowano `sitemap.xml`,
- zachowano ostrożny, informacyjny ton i oznaczenia afiliacyjne `rel="nofollow sponsored"` przy CTA.

Lista ofert w rankingu:

- Bank Pekao
- VeloBank
- Erste Bank Polska
- Millennium
- Alior Bank
- Raiffeisen Digital Bank
- BNP Paribas
- Santander Consumer Bank
- PKO BP

Następny krok:

- Sprint 4B: kalkulator raty kredytu, RRSO, zdolność kredytowa i artykuły wspierające.

## Audyt polskich znaków i tekstów roboczych

- wykonano pełny audyt UTF-8 dla plików HTML, CSS, JS, SVG, XML i MD,
- sprawdzono polskie znaki oraz typowe wzorce mojibake,
- usunięto robocze teksty z publicznych stron, w tym z rankingu kredytów gotówkowych,
- poprawiono ranking kredytów gotówkowych i powiązane strony, które miały problemy z kodowaniem,
- Sprint 4B jest wstrzymany do czasu ręcznej kontroli po audycie.

Przy świadczeniach i tematach prawno-urzędowych zawsze dodawać informację, że artykuł ma charakter informacyjny i nie jest decyzją urzędu ani poradą prawną.

## Globalna poprawka layoutu grafik i disclaimerów

- ujednolicono globalne odstępy dla `.article-image-section` i `.article-hero-image`,
- dodano bezpieczny odstęp i wyższy stacking context dla `.disclaimer`,
- poprawiono marginesy `.editorial-note`, żeby nie nachodziła na grafiki ani treść,
- zmiany wprowadzono w `style.css` oraz `assets/articles/article-images.css`,
- do testów kontrolnych wskazano strony:
  - `/rankingi/kredyty-gotowkowe/`,
  - `/rankingi/konta-osobiste/`,
  - `/narzedzia/kalkulator-budzetu-domowego/`,
  - `/poradniki/revolut/`,
  - `/swiadczenia/800-plus/`,
  - `/swiadczenia/renta-socjalna/`,
  - `/dlugi/jak-wyjsc-z-dlugow/`.

## Poprawka rankingu kredytów gotówkowych

- uzupełniono RRSO przy Santander Consumer Bank,
- dodano logo tam, gdzie w repo były już bezpieczne assety,
- przygotowano fallback badge dla banków bez pewnego oficjalnego logo w repo,
- poprawiono kolumnę „Na co uważać” na język dla czytelnika,
- sprawdzono, że każda oferta ma w tabeli RRSO,
- dla banków bez pewnego oficjalnego logo w repo przygotowano neutralne badge SVG, więc nie ma już brakujących elementów w tabeli.

## Logo i badge w rankingu kredytów gotówkowych

- z istniejących logo w repo użyto:
  - Bank Pekao,
  - Erste Bank Polska,
  - BNP Paribas,
  - PKO BP,
- neutralne SVG badge przygotowano dla:
  - VeloBank,
  - Millennium,
  - Alior Bank,
  - Raiffeisen Digital Bank,
  - Santander Consumer Bank,
- wszystkie 9 ofert w tabeli mają już graficzny element `<img>`,
- nie użyto logo z Google Grafika ani przypadkowych źródeł.

## Naprawa rankingu kont osobistych i ujednolicenie tabel rankingowych

- naprawiono mojibake w `/rankingi/konta-osobiste/index.html`,
- ujednolicono układ logo w `/rankingi/kredyty-gotowkowe/index.html` do stylu rankingu kont osobistych,
- sprawdzono RRSO i linki afiliacyjne w rankingu kredytów,
- wykonano skan końcowy na krzaki.

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

1. `/swiadczenia/swiadczenia-z-mops/`
2. `/swiadczenia/zasilek-staly/`

Pierwszy następny artykuł: **świadczenia z MOPS**.

## Aktualizacja — 11.06.2026

Dodano nowy klaster treści w dziale `/swiadczenia/`:

- `/swiadczenia/ulga-rehabilitacyjna/`,
- `/swiadczenia/dofinansowanie-pfron/`,
- `/swiadczenia/turnus-rehabilitacyjny-pfron/`,
- `/swiadczenia/dofinansowanie-do-sprzetu-rehabilitacyjnego/`,
- `/swiadczenia/dofinansowanie-do-likwidacji-barier/`.

Klaster „ulgi i dofinansowania” został dołączony do hubu świadczeń, a istniejące artykuły o opiece i niepełnosprawności dostały linki do nowych poradników.

## Aktualizacja — 11.06.2026 (pomoc społeczna i MOPS)

Dodano nowy klaster treści w dziale `/swiadczenia/`:

- `/swiadczenia/swiadczenia-z-mops/`,
- `/swiadczenia/zasilek-staly/`,
- `/swiadczenia/zasilek-okresowy/`,
- `/swiadczenia/zasilek-celowy/`,
- `/swiadczenia/dodatek-mieszkaniowy/`.

Klaster „pomoc społeczna i MOPS” został dołączony do hubu świadczeń, a wybrane istniejące artykuły dostały linki do nowych poradników.

## Do pamiętania

- Po dodaniu nowej strony trzeba zaktualizować `sitemap.xml`.
- Po dodaniu nowego ważnego artykułu trzeba podlinkować go z odpowiedniego huba, najczęściej `/swiadczenia/`, `/narzedzia/`, `/rankingi/` albo `/poradniki/`.
- Przy większych zmianach aktualizować ten plik.
- Nie dodawać martwych linków do stron, których jeszcze nie ma.
- Przy narzędziach nie psuć istniejącej logiki JavaScript.
- Przy danych bankowych i świadczeniach uwzględniać, że informacje mogą się zmieniać i wymagać ręcznej weryfikacji.

## Aktualizacja - 11.06.2026 (długi i komornik)

Dodano nowy klaster SEO wokół długów, zajęć komorniczych i porządkowania zadłużenia:

- `/dlugi/`,
- `/dlugi/ile-komornik-moze-zabrac-z-pensji/`,
- `/dlugi/czy-komornik-moze-zajac-800-plus/`,
- `/dlugi/czego-nie-moze-zajac-komornik/`,
- `/dlugi/czy-komornik-moze-zajac-konto-dziecka/`,
- `/dlugi/jak-sprawdzic-dlugi/`,
- `/dlugi/jak-wyjsc-z-dlugow/`,
- `/narzedzia/kalkulator-limit-komorniczy/`.

Wykonane zmiany:

- dodano nowy hub `/dlugi/`,
- dodano sześć artykułów o długach i komorniku,
- dodano kalkulator limitu komorniczego,
- podpięto nowe treści na stronie głównej, w `/narzedzia/` i w `/poradniki/`,
- zaktualizowano `sitemap.xml` o nowe URL-e,
- zachowano prosty, ostrożny ton i linkowanie do oficjalnych źródeł.

Klaster "długi i komornik" został dołączony do głównej struktury portalu.

## Aktualizacja - 14.06.2026 (klaster kredytowy)

Dodano nowy klaster wokół kredytów gotówkowych, RRSO i zdolności kredytowej:

- `/kredyty/`,
- `/narzedzia/kalkulator-raty-kredytu/`,
- `/poradniki/co-to-jest-rrso/`,
- `/poradniki/zdolnosc-kredytowa/`,
- `/poradniki/jak-poprawic-zdolnosc-kredytowa/`,
- `/poradniki/kredyt-gotowkowy-a-pozyczka/`.

Wykonane zmiany:

- dodano nowy hub kredytowy,
- dodano kalkulator raty kredytu,
- dodano cztery poradniki o RRSO, zdolności kredytowej i różnicach między kredytem a pożyczką,
- podlinkowano nowy klaster z home page, `/rankingi/`, `/narzedzia/` i `/poradniki/`,
- zaktualizowano `sitemap.xml` o nowe URL-e,
- zachowano ostrożny, informacyjny ton bez obiecywania decyzji banku.

Klaster kredytowy został dołączony do głównej struktury portalu.

## Mini Sprint 4C — audyt jakości i gotowość AdSense

W ramach Mini Sprintu 4C:

- sprawdzono polskie znaki,
- sprawdzono meta title, description i canonical,
- sprawdzono `sitemap.xml`,
- sprawdzono linkowanie wewnętrzne klastra kredytowego,
- sprawdzono linki afiliacyjne,
- sprawdzono layout grafik i disclaimerów,
- sprawdzono kalkulator raty kredytu.

Wynik: portal jest przygotowany do ręcznej kontroli przed ponownym zgłoszeniem AdSense, a klaster kredytowy jest spójnie połączony i opisany w sposób informacyjny.

## Cookies i własna strona 404

Aktualizacja sprintu z 14.06.2026:

- dodano własną stronę `/cookies/` z prostym wyjaśnieniem cookies, Google Analytics, AdSense i linków afiliacyjnych,
- dodano własną stronę `/404.html` z ustawieniem `noindex,follow`,
- wdrożono wspólny banner cookies uruchamiany z `localStorage`,
- Google Analytics 4 ładuje się dopiero po wyrażeniu zgody na cookies analityczne,
- do stopki całego serwisu dodano link `Cookies`,
- uzupełniono `sitemap.xml` o nowy adres `/cookies/`.
