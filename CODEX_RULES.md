# Zasady pracy w repozytorium Wybieram Finanse

## Kodowanie

Wszystkie pliki tekstowe zapisujemy jako UTF-8.

Nie wolno zapisywać plików jako Windows-1250, ISO-8859-2 ani w innym kodowaniu.

Po każdej zmianie uruchom:

```bash
npm run check:encoding
```

Jeżeli skrypt wykryje wzorce mojibake, przed zakończeniem pracy trzeba je poprawić.

## Polskie znaki

Widoczne teksty dla użytkownika mają mieć poprawne polskie znaki:

* ą
* ć
* ę
* ł
* ń
* ó
* ś
* ź
* ż

Nie wolno zamieniać tekstu na wersję bez ogonków tylko po to, żeby uniknąć problemu kodowania.

Slugów URL nie poprawiamy na polskie znaki. Przykład:

* `/narzedzia/` zostaje bez polskich znaków,
* ale widoczny tekst ma brzmieć `Narzędzia`.

## Przed pushem

Przed pushem na `main` sprawdź:

* `npm run check:encoding`
* brak tekstów roboczych typu `placeholder`, `briefie`, `TODO`,
* brak uszkodzonych znaków w HTML, CSS, JS, SVG, XML i MD.

