# Prompt do Codexa — /narzedzia/kiedy-przelew/

Pracujemy nad projektem Wybieram Finanse — wybieramfinanse.pl.

Projekt:
- statyczny HTML/CSS,
- Cloudflare Pages,
- GitHub repo: `wybieramfinanse`,
- brak frameworka,
- brak build command.

Cel:
Utwórz narzędzie `/narzedzia/kiedy-przelew/`, które pozwoli użytkownikowi orientacyjnie sprawdzić, kiedy może dojść standardowy przelew Elixir w PLN.

WAŻNE:
- Wynik ma być zawsze opisany jako orientacyjny, nigdy gwarantowany.
- Narzędzie nie ma obiecywać, że przelew „na pewno dotrze”.
- Banki mają różne godziny sesji wychodzących i przychodzących.
- Revolut i ZEN nie mogą być traktowane jak zwykłe banki z klasycznymi sesjami Elixir.
- Przelewy wewnętrzne, Express Elixir, BlueCash, BLIK, SEPA i SWIFT wymagają osobnych komunikatów.

## Pliki JS do użycia

Dodaj do projektu:

- `/assets/js/bank-sessions.js`
- `/assets/js/bank-prefixes.js`
- `/assets/js/kiedy-przelew.js`

Użyj przygotowanych plików startowych:
- `bank-sessions.js`
- `bank-prefixes.js`
- `kiedy-przelew-logic.js`

Jeśli zmieniasz nazwy plików, zachowaj czytelność i nie mieszaj danych z logiką.

## Nowa strona

Utwórz:

`/narzedzia/kiedy-przelew/index.html`

SEO:

Title:
`Kiedy dojdzie przelew? Kalkulator sesji Elixir | Wybieram Finanse`

Meta description:
`Sprawdź orientacyjnie, kiedy dojdzie przelew między bankami. Wybierz bank nadawcy i odbiorcy albo rozpoznaj bank po numerze konta.`

Canonical:
`https://wybieramfinanse.pl/narzedzia/kiedy-przelew/`

H1:
`Kiedy dojdzie przelew?`

## Wymagane elementy strony

1. Hero: H1, krótki opis, informacja, że wynik jest orientacyjny.
2. Formularz — tryb 1: bank nadawcy, bank odbiorcy, data i godzina wysłania, przycisk.
3. Formularz — tryb 2: numer konta nadawcy, numer konta odbiorcy, data i godzina wysłania, przycisk.
4. Rozpoznawanie banku po numerze konta:
   - obsłuż NRB: 26 cyfr,
   - obsłuż IBAN PL: `PL` + 26 cyfr,
   - usuń spacje i myślniki,
   - sprawdź poprawność sumy kontrolnej mod 97,
   - pobierz numer rozliczeniowy z cyfr 3–10,
   - rozpoznaj bank po pierwszych 4 cyfrach numeru rozliczeniowego.
5. Wynik: bank nadawcy, bank odbiorcy, czas wysłania, szacowany termin księgowania, status wizualny, aktualna godzina użytkownika, licznik.
6. Dynamiczny zegar:
   - użyj czasu z przeglądarki użytkownika: `new Date()`,
   - aktualizuj co sekundę.
7. Licznik:
   - odliczaj do `estimatedAt`,
   - jeśli termin minął, nie pisz „przelew dotarł”, tylko pokaż komunikat:
     „Szacowany czas księgowania już minął. Sprawdź saldo lub historię rachunku. Jeśli przelewu nie ma, może zostać zaksięgowany w kolejnej sesji albo następnego dnia roboczego.”
8. Statusy wizualne bez emoji:
   - `Możliwy dziś`
   - `Następny dzień roboczy`
   - `Po weekendzie lub dniu wolnym`
   - `Przelew wewnętrzny`
   - `Zależne od typu przelewu`
   - `Sprawdź kolejną sesję`
   - `Do ręcznej weryfikacji`
9. Specjalna obsługa Revolut i ZEN:
   - nie licz im klasycznych sesji Elixir,
   - pokaż status `Zależne od typu przelewu`,
   - nie promuj kryptowalut.
10. Tabela sesji banków z bazy.
11. FAQ minimum 10 pytań + FAQPage JSON-LD.
12. Prywatność: numer konta ma być przetwarzany lokalnie w przeglądarce, bez wysyłania na serwer.
13. Linkowanie do `/narzedzia/`, `/rankingi/`, `/rankingi/konta-osobiste/`, `/rankingi/konta-firmowe/`, `/poradniki/`, `/kontakt/`.
14. Dodaj link do narzędzia z `/narzedzia/`, strony głównej i stopki, jeśli istnieje sekcja narzędzi.
15. Sitemap: dodaj `https://wybieramfinanse.pl/narzedzia/kiedy-przelew/`.
16. PROJECT_STATUS.md: dopisz wykonanie narzędzia i informację, że baza wymaga ręcznej weryfikacji.

## Na końcu odpowiedzi podaj

1. utworzone pliki,
2. zmienione pliki,
3. czy zaktualizowano sitemap,
4. czy zaktualizowano PROJECT_STATUS.md,
5. czy narzędzie działa bez wysyłania numerów konta na serwer,
6. listę banków w bazie,
7. listę banków oznaczonych jako `low` albo `prefix-only`,
8. co trzeba ręcznie zweryfikować.
