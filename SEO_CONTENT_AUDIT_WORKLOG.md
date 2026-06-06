# SEO_CONTENT_AUDIT_WORKLOG

## Status

Rozpoczęto ręczny audyt SEO, techniczny i merytoryczny portalu Wybieram Finanse po zakończeniu prac Codexa.

Ten plik jest roboczym dziennikiem audytu prowadzonego bez Codexa. Ma pomagać śledzić, które obszary zostały już sprawdzone, co wymaga poprawy i jakie zmiany powinny być wykonywane etapami.

## Zakres audytu

Audyt obejmuje:

1. SEO techniczne wszystkich głównych plików HTML.
2. Jakość meta title i meta description.
3. Canonical, Open Graph, Twitter Card, favicon i obrazy hero.
4. FAQPage JSON-LD oraz zgodność schema z widocznym FAQ.
5. Breadcrumbs, menu, stopkę i sekcje „Zobacz też”.
6. Linkowanie wewnętrzne między klastrami.
7. Linki afiliacyjne i zewnętrzne.
8. Sitemap.xml.
9. Merytorykę artykułów, zgodność treści z tytułem oraz brakujące informacje.
10. Aktualność wrażliwych tematów: świadczenia, terminy, limity, JDG, spółki, działalność nierejestrowana.

## Struktura wykryta w sitemap.xml

W sitemap są już obecne główne sekcje:

- strona główna,
- strony informacyjne,
- rankingi,
- klaster kont firmowych,
- dział dla firm,
- poradniki,
- narzędzia,
- świadczenia,
- nowe poradniki o przelewach,
- nowe poradniki firmowe.

To oznacza, że najważniejsza struktura portalu została zbudowana. Obecny etap nie polega na tworzeniu nowych URL-i, tylko na dopracowaniu jakości, SEO i merytoryki istniejących stron.

## Pierwsze obserwacje techniczne

### Strona główna

`index.html` ma poprawne podstawy techniczne:

- `<!DOCTYPE html>`,
- `<html lang="pl">`,
- `<meta charset="UTF-8">`,
- GA4,
- meta viewport,
- meta referrer,
- canonical,
- stylesheet,
- favicon,
- apple-touch-icon,
- Open Graph,
- Twitter Card,
- AdSense,
- logo w headerze.

### Sitemap

`sitemap.xml` zawiera nowe poradniki i narzędzia, w tym:

- `/narzedzia/kiedy-przelew/`,
- `/narzedzia/sesje-elixir/`,
- `/narzedzia/jaki-to-bank/`,
- `/poradniki/co-to-jest-sesja-elixir/`,
- `/poradniki/sesja-wychodzaca-i-przychodzaca/`,
- `/poradniki/czy-przelewy-ida-w-weekend/`,
- `/poradniki/elixir-express-elixir-bluecash/`,
- `/poradniki/jak-sprawdzic-bank-po-numerze-konta/`,
- `/poradniki/dlaczego-przelew-nie-doszedl/`,
- `/poradniki/co-to-jest-jdg/`,
- `/poradniki/co-to-jest-spolka-zoo/`,
- `/poradniki/rodzaje-spolek-w-polsce/`,
- `/poradniki/jdg-a-spolka-roznice/`,
- `/poradniki/jak-zalozyc-jdg/`,
- `/poradniki/jak-zalozyc-spolke-zoo/`,
- `/poradniki/dzialalnosc-nierejestrowana/`.

## Pierwsze obserwacje merytoryczne

### Co to jest JDG?

Artykuł `/poradniki/co-to-jest-jdg/` jest już znacznie lepszy niż pierwotna wersja. Zawiera:

- wstęp zgodny z tematem,
- disclaimer prawno-podatkowy,
- sekcję „Najważniejsze informacje w skrócie”,
- wyjaśnienie, że JDG nie jest spółką,
- odpowiedzialność przedsiębiorcy,
- formalności,
- ZUS i podatki ogólnie,
- księgowość,
- konto firmowe,
- przykłady,
- linkowanie wewnętrzne.

Do dalszej poprawy:

- warto dodać dokładniejszą sekcję o CEIDG,
- warto dodać checklistę „co przygotować przed założeniem JDG”,
- warto rozważyć link do artykułu o działalności nierejestrowanej w miejscu, gdzie mowa o starcie małego biznesu,
- warto sprawdzić, czy FAQ ma wystarczająco konkretne odpowiedzi.

### Co to jest spółka z o.o.?

Artykuł `/poradniki/co-to-jest-spolka-zoo/` zaczyna się już od spółki z o.o., więc wcześniejszy problem kontekstu został poprawiony.

Zauważone problemy:

- meta description jest urwane i kończy się nienaturalnie: „... i nie.”,
- sekcja o kapitale zakładowym jest zbyt ogólna; warto dodać podstawowe informacje o minimalnym kapitale 5 000 zł i minimalnej wartości udziału 50 zł, z zastrzeżeniem weryfikacji aktualnych przepisów,
- warto dodać sekcję o dwóch ścieżkach założenia spółki: S24 i forma notarialna,
- warto dodać krótką wzmiankę o KRS, NIP, REGON, CRBR i koncie firmowym po rejestracji,
- FAQ jest poprawne, ale mogłoby być bardziej konkretne.

## Priorytety dalszej pracy

### Priorytet 1 — szybkie poprawki SEO/meta

1. Poprawić urwane meta description w `/poradniki/co-to-jest-spolka-zoo/`.
2. Sprawdzić meta description w pozostałych nowych poradnikach.
3. Sprawdzić, czy title nie są zbyt krótkie lub zbyt ogólne.

### Priorytet 2 — artykuły firmowe

Sprawdzić i ewentualnie rozbudować:

- `/poradniki/co-to-jest-jdg/`,
- `/poradniki/co-to-jest-spolka-zoo/`,
- `/poradniki/rodzaje-spolek-w-polsce/`,
- `/poradniki/jdg-a-spolka-roznice/`,
- `/poradniki/jak-zalozyc-jdg/`,
- `/poradniki/jak-zalozyc-spolke-zoo/`,
- `/poradniki/dzialalnosc-nierejestrowana/`.

Najważniejsze rzeczy do dopisania lub sprawdzenia:

- CEIDG,
- KRS,
- S24,
- umowa spółki,
- kapitał zakładowy,
- NIP/REGON,
- CRBR,
- odpowiedzialność zarządu,
- konto firmowe,
- terminy i obowiązki po rejestracji,
- działalność nierejestrowana i aktualne limity.

### Priorytet 3 — artykuły o świadczeniach

Po firmach trzeba przejść przez wszystkie świadczenia i sprawdzić:

- kto może dostać świadczenie,
- ile wynosi,
- terminy,
- gdzie złożyć wniosek,
- jakie dokumenty mogą być potrzebne,
- kiedy wypłata,
- na co uważać,
- aktualność warunków.

To wymaga sprawdzania aktualnych źródeł, bo dane mogą się zmieniać.

### Priorytet 4 — narzędzia i przelewy

Sprawdzić:

- `/narzedzia/kiedy-przelew/`,
- `/narzedzia/sesje-elixir/`,
- `/narzedzia/jaki-to-bank/`,
- poradniki o przelewach.

Najważniejsze: nie gwarantować czasu przelewu, jasno odróżniać Elixir, Express Elixir, BlueCash, przelew wewnętrzny i fintechy typu Revolut/ZEN.

## Następny planowany krok

Najpierw wykonać mały, bezpieczny commit poprawiający:

1. urwane meta description artykułu o spółce z o.o.,
2. dopisanie konkretniejszej sekcji o kapitale zakładowym, KRS, S24 i formalnościach,
3. rozbudowanie FAQ artykułu o spółce z o.o.,
4. aktualizację raportu po wykonaniu zmian.

Dopiero po tym przejść do kolejnych artykułów firmowych.
