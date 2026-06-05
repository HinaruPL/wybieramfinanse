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

## Aktualizacja — 04.06.2026 — ustawienia prywatności w stopce

- Dodano link „Ustawienia prywatności” w stopce plików HTML.
- Dodano bezpieczny skrypt do ponownego otwierania ustawień zgody Google CMP / Funding Choices.
- Nie instalowano zewnętrznego CMP, aby uniknąć dwóch banerów zgody na stronie.

## Aktualizacja — 04.06.2026 — poprawka linku ustawień prywatności

- Poprawiono obsługę linku „Ustawienia prywatności” w stopce.
- Link korzysta z Google Funding Choices API i funkcji window.googlefc.showRevocationMessage() po zdarzeniu CONSENT_API_READY.

## Aktualizacja — 04.06.2026 — pakiet Aktywny Rodzic

- Dodano pakiet 4 artykułów o programie Aktywny Rodzic:
  - /swiadczenia/aktywny-rodzic/
  - /swiadczenia/aktywni-rodzice-w-pracy/
  - /swiadczenia/aktywnie-w-zlobku/
  - /swiadczenia/aktywnie-w-domu/
- Wszystkie artykuły zawierają prosty poradnik, FAQ, FAQ Schema, AdSense, GA4, linki wewnętrzne i oficjalne źródła.
- Zaktualizowano /swiadczenia/, stronę główną i sitemap.xml.
- Grafiki hero dla tych artykułów zostaną dodane później.

## Aktualizacja — 04.06.2026 — grafiki hero Aktywny Rodzic

- Dodano grafiki hero do 4 artykułów o programie Aktywny Rodzic:
  - /swiadczenia/aktywny-rodzic/
  - /swiadczenia/aktywni-rodzice-w-pracy/
  - /swiadczenia/aktywnie-w-zlobku/
  - /swiadczenia/aktywnie-w-domu/
- Dla tych artykułów dodano og:image i twitter:image, aby linki lepiej wyglądały przy udostępnianiu w social media.
- Sprawdzono, że wspólne style .article-image-section i .article-hero-image nie zostały zdublowane.

## Aktualizacja — 04.06.2026 — klastry sekcji świadczeń

- Uporządkowano sekcję /swiadczenia/ w klastry tematyczne:
  - najważniejsze świadczenia rodzinne,
  - zasiłek rodzinny i dodatki,
  - program Aktywny Rodzic,
  - niepełnosprawność i opieka.
- Rozbudowano artykuł /swiadczenia/zasilek-rodzinny/ o linki do dodatków do zasiłku rodzinnego.
- Upewniono się, że artykuły o dodatkach linkują do głównego artykułu o zasiłku rodzinnym.
- Rozbudowano artykuł /swiadczenia/aktywny-rodzic/ o linki do trzech świadczeń programu.
- Upewniono się, że artykuły szczegółowe Aktywny Rodzic linkują do przewodnika i pozostałych świadczeń.
- Uporządkowano sekcję świadczeń na stronie głównej, aby nie była przeładowana zbyt dużą liczbą kart.

## Aktualizacja — 04.06.2026 — audyt techniczny i SEO

- Wykonano pełny audyt techniczny i SEO projektu.
- Sprawdzono: GA4, AdSense, meta referrer, canonical, title, meta description, Open Graph, Twitter Card, FAQ Schema, grafiki hero, linkowanie wewnętrzne, linki zewnętrzne, stopkę, sitemap.xml, robots.txt, ads.txt i ranking kont osobistych.
- Uporządkowano lub poprawiono wykryte drobne błędy techniczne i SEO.
- Sprawdzono strukturę klastrów w sekcji /swiadczenia/.
- Sprawdzono linkowanie między zasiłkiem rodzinnym i dodatkami oraz między artykułami programu Aktywny Rodzic.
- Zanotowano ewentualne problemy wymagające decyzji właściciela.

## Aktualizacja — 04.06.2026 — ranking kont firmowych

- Dodano nową stronę /rankingi/konta-firmowe/ z rankingiem kont firmowych dla JDG.
- Ranking zawiera porównanie ofert banków, szczegółowe opisy, metodologię, sekcje poradnikowe i FAQ z FAQPage JSON-LD.
- Dodano linki afiliacyjne z rel="sponsored nofollow" i target="_blank".
- Dodano krótkie zajawki przyszłych tematów: konto firmowe dla spółki, założenie firmy z kontem i Revolut Business.
- Dodano link ze strony głównej do rankingu kont firmowych.
- Zaktualizowano sitemap.xml.
- Nie dodano grafiki hero, bo w assets/articles/ nie ma jeszcze dedykowanej grafiki dla kont firmowych.

## Aktualizacja — 04.06.2026 — ranking kont firmowych dla spółek

- Dodano ranking kont firmowych dla spółek: /rankingi/konta-firmowe/konto-firmowe-dla-spolki/.
- Poprawiono logo Revolut Business w rankingu kont firmowych dla JDG, używając assets/logos/revolut-business.svg.
- Dodano linkowanie z rankingu kont firmowych dla JDG do nowej strony dla spółek.
- Sprawdzono podstawowe SEO, FAQ Schema, linki afiliacyjne i linkowanie wewnętrzne dla nowego etapu.
- Zaktualizowano sitemap.xml.

## Aktualizacja — 04.06.2026 — zakładanie firmy z kontem firmowym

- Poprawiono widoczność strony o kontach firmowych dla spółek na stronie głównej i w sekcji kont firmowych.
- Dodano artykuł /rankingi/konta-firmowe/zalozenie-firmy-z-kontem/.
- Wykorzystano oferty mBank i Credit Agricole pasujące do zakładania firmy z kontem.
- Dodano linkowanie między rankingiem kont firmowych dla JDG, rankingiem dla spółek i poradnikiem o zakładaniu firmy z kontem.
- Zaktualizowano sitemap.xml i linkowanie wewnętrzne.

## Aktualizacja — 04.06.2026 — poprawka deployu Cloudflare Workers Assets

- Dodano plik .assetsignore dla Cloudflare Workers Static Assets.
- Wykluczono z uploadu assetów katalog .git oraz pliki techniczne repozytorium, aby uniknąć błędu Asset too large podczas deployu.

## Aktualizacja — 04.06.2026 — Revolut Business

- Dodano artykuł /rankingi/konta-firmowe/revolut-business/.
- Artykuł dotyczy wyłącznie Revolut Business.
- Zwykły Revolut osobisty zostaje na przyszły osobny wpis.
- Dodano linkowanie z klastra kont firmowych.
- Zaktualizowano sitemap.xml.

## Aktualizacja — 04.06.2026 — uporządkowanie struktury portalu i branding

- Utworzono stronę zbiorczą /rankingi/.
- Utworzono dział /dla-firm/ dla treści o kontach firmowych i finansach działalności.
- Utworzono stronę /poradniki/ jako katalog poradników finansowych.
- Utworzono stronę /narzedzia/ jako katalog planowanych narzędzi.
- Przebudowano /swiadczenia/ jako uporządkowany katalog świadczeń rodzinnych, dodatków, programu Aktywny Rodzic oraz świadczeń opiekuńczych.
- Poprawiono stronę główną, aby prowadziła do głównych działów portalu.
- Wdrożono logo i podstawowe pliki brandingu z /assets/brand/.
- Dodano favicon, apple touch icon i domyślną grafikę og-logo.png dla nowych stron bez własnej grafiki.
- Poprawiono menu i stopkę na nowych stronach oraz najważniejszych stronach rankingowych.
- Dodano widoczne breadcrumbs na stronach zbiorczych i najważniejszych stronach rankingowych.
- Zaktualizowano sitemap.xml.

## Aktualizacja — 04.06.2026 — narzędzie Kiedy przelew?

- Dodano narzędzie /narzedzia/kiedy-przelew/.
- Dodano kalkulator sesji Elixir dla standardowych przelewów w PLN.
- Dodano rozpoznawanie banku po numerze konta.
- Dodano walidację NRB/IBAN PL.
- Dodano aktualny zegar użytkownika.
- Dodano odliczanie do przewidywanego księgowania.
- Dodano statusy wizualne wyniku.
- Dodano tabelę sesji banków.
- Dane sesji bankowych wymagają okresowej ręcznej weryfikacji.
## Aktualizacja — 05.06.2026 — audyt narzędzia Kiedy przelew?

- Wykonano audyt techniczny, UX i SEO narzędzia /narzedzia/kiedy-przelew/.
- Sprawdzono lokalne działanie strony, linkowanie wewnętrzne, sitemap.xml, FAQ Schema, GA4, AdSense i meta referrer.
- Sprawdzono przypadki bank → bank, rozpoznawanie NRB/IBAN PL, banki specjalne Revolut/ZEN, weekendy, przelew po ostatniej sesji oraz statusy wizualne.
- Poprawiono logikę bazową kalkulatora, aby banki bez kompletnych danych sesji zwracały ręczną weryfikację zamiast orientacyjnego wyniku Elixir.
## Aktualizacja — 05.06.2026 — Revolut dla osób prywatnych

- Dodano artykuł /poradniki/revolut/.
- Artykuł dotyczy Revolut dla osób prywatnych.
- Revolut Business pozostaje osobnym artykułem w sekcji kont firmowych.
- Dodano linkowanie z poradników, rankingów, narzędzi, strony głównej i artykułu Revolut Business.
- Zaktualizowano sitemap.xml.

## Aktualizacja — 05.06.2026 — audyt linkowania wewnętrznego i SEO po rozbudowie portalu

- Sprawdzono strukturę portalu po rozbudowie głównych działów.
- Poprawiono linkowanie wewnętrzne między rankingami, poradnikami, narzędziami, działem dla firm i świadczeniami.
- Uzupełniono sekcje „Zobacz też” na najważniejszych stronach.
- Sprawdzono menu i stopkę oraz ujednolicono grupy linków w stopce.
- Sprawdzono logo, favicon, apple-touch-icon i domyślne OG image.
- Sprawdzono sitemap.xml pod kątem najważniejszych adresów.
- Sprawdzono linki afiliacyjne i zewnętrzne pod kątem atrybutów rel i target.
- Revolut osobisty nadal czeka na właściwy link afiliacyjny, jeśli taki link zostanie później znaleziony.
## Aktualizacja — 05.06.2026 — narzędzie Jaki to bank?

- Dodano narzędzie /narzedzia/jaki-to-bank/.
- Narzędzie korzysta z istniejącej bazy prefiksów bankowych /assets/js/bank-prefixes.js.
- Numer konta jest sprawdzany lokalnie w przeglądarce.
- Narzędzie nie pokazuje właściciela rachunku.
- Dodano linkowanie z /narzedzia/ i /narzedzia/kiedy-przelew/.
- Zaktualizowano sitemap.xml.

## Aktualizacja — 05.06.2026 — kalkulator premii bankowej

- Dodano narzędzie /narzedzia/kalkulator-premii-bankowej/.
- Narzędzie liczy szacowany bilans promocji bankowej po uwzględnieniu premii, nagrody niepieniężnej i kosztów.
- Dodano ocenę trudności warunków promocji.
- Dodano statusy wizualne opłacalności i trudności.
- Dodano linkowanie z rankingów i narzędzi.
- Zaktualizowano sitemap.xml.


## Aktualizacja — 05.06.2026 — kalkulator kosztu konta osobistego

- Dodano narzędzie /narzedzia/kalkulator-kosztu-konta-osobistego/.
- Narzędzie liczy szacowany miesięczny i roczny koszt konta osobistego.
- Dodano bilans po uwzględnieniu premii.
- Dodano statusy wizualne kosztu i bilansu.
- Dodano linkowanie z rankingu kont osobistych i narzędzi.
- Zaktualizowano sitemap.xml.


## Aktualizacja - 05.06.2026 - kalendarz świadczeń

- Dodano narzędzie /narzedzia/kalendarz-swiadczen/.
- Narzędzie pomaga sprawdzić podstawowe terminy, miejsca składania wniosków i dokumenty.
- Dodano dane dla głównych świadczeń i dodatków.
- Dodano linkowanie z działu /swiadczenia/ i /narzedzia/.
- Zaktualizowano sitemap.xml.


## Aktualizacja - 05.06.2026 - kalkulator budżetu domowego

- Dodano narzędzie /narzedzia/kalkulator-budzetu-domowego/.
- Narzędzie liczy miesięczny budżet domowy.
- Dodano podział wydatków na kategorie.
- Dodano status budżetu.
- Dodano komunikaty i podpowiedzi.
- Dodano linkowanie z narzędzi, świadczeń i poradników.
- Zaktualizowano sitemap.xml.
## Aktualizacja - 05.06.2026 - audyt i uporzadkowanie sekcji narzedzi

- Sprawdzono wszystkie istniejace narzedzia w sekcji /narzedzia/.
- Przebudowano /narzedzia/ jako czytelne centrum narzedzi finansowych z logicznymi grupami.
- Dodano logiczne grupy narzedzi: najpopularniejsze, kalkulatory kont i promocji, swiadczenia i domowe finanse oraz narzedzia bankowe.
- Poprawiono linkowanie miedzy narzedziami i powiazanymi rankingami.
- Dodano lub poprawiono sekcje "Powiazane narzedzia" na stronach narzedzi.
- Sprawdzono komunikaty bezpieczenstwa i prywatnosci, w tym przetwarzanie numerow kont lokalnie w przegladarce.
- Sprawdzono sitemap.xml i zaktualizowano daty zmienionych stron narzedzi.
- Sprawdzono podstawowe SEO, GA4, AdSense, meta referrer, OG/Twitter i FAQ Schema na stronach narzedzi.
- Wykonano testy funkcjonalne istniejacych narzedzi.
- Strona /narzedzia/kalkulator-kosztu-konta-firmowego/ jest wymieniana w planach, ale nie ma jej jeszcze w repozytorium, wiec nie dodano martwych linkow ani wpisu do sitemap.xml.

## Hotfix po przebudowie struktury

- poprawiono kodowanie UTF-8 i polskie znaki na g??wnych stronach,
- poprawiono teksty z mojibake w menu, stopce, meta tagach i tre?ciach,
- powi?kszono logo w nag??wku,
- sprawdzono najwa?niejsze strony po zmianach.

## Aktualizacja - 05.06.2026 - naprawa kalkulatora Kiedy przelew i sesje Elixir

- Naprawiono i rozbudowano sekcję narzędzi: przywrócono działanie kalkulatora „Kiedy przelew?”, dodano przełącznik trybu po nazwie banku / po numerze konta, wydzielono tabelę sesji Elixir na osobną podstronę /narzedzia/sesje-elixir/ oraz poprawiono linkowanie w narzędziach.
- Przyczyną awarii był błędny inline script na stronie /narzedzia/kiedy-przelew/, który miał nieucieczone cudzysłowy przy renderowaniu tabeli sesji.
- Dodano stronę /narzedzia/sesje-elixir/ z tabelą sesji banków i filtrowaniem po nazwie banku.
- Dodano linkowanie do /narzedzia/sesje-elixir/ z centrum narzędzi, strony głównej, kalkulatora przelewu i stopek.
- Zaktualizowano sitemap.xml.
