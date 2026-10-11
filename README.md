# Training – PWA

Plan, Journal (Trainingstagebuch), Krafteinheiten, Statistik und Theorie. Alles läuft lokal im Gerät,
ohne Konto und ohne Server.

## Dateien
| Datei | Zweck |
|---|---|
| `index.html` | die App |
| `theorie.js` | Theorie-Modul (7 Themen, je mit Trainingseinheit) |
| `manifest.json`, `sw.js`, `icon-*.png` | Installierbarkeit und Offline-Betrieb |
| `plan-hallwilersee-2026.json` | abgeschlossener Plan Hallwilerseelauf |
| `plan-aufbau-2027.json` | aktueller Plan: Saisonübersicht 2027 und Block 1 im Detail |

## Online stellen (GitHub Pages)
1. Alle Dateien ins Repository hochladen (Add file → Upload files → Commit).
2. Settings → Pages → Source «Deploy from a branch», Branch `main`, Ordner `/ (root)`.
3. Nach 1–2 Minuten erreichbar unter `https://DEINNAME.github.io/REPONAME/`.

## Auf dem Pixel installieren
Chrome → Adresse öffnen → Menü ⋮ → «App installieren».

## Updates
Neue Dateien hochladen **und in `sw.js` den Wert von `CACHE` hochzählen**
(z. B. `training-v3-2026-10-20`). Ohne das behält das Handy die alte Version.
Vorher im Tab «Daten» ein Backup exportieren.

## Neue Vorbereitung ohne Codeänderung
Der Plan ist reine Datenstruktur. Für den nächsten Wettkampf eine JSON-Datei nach dem
Muster von `plan-hallwilersee-2026.json` anlegen und im Tab «Daten» unter
«Plan importieren» laden. Mehrere Pläne können nebeneinander liegen; der aktive wird
im Tab «Plan» oder «Daten» umgeschaltet. Aufbau:

```
{ id, name, wettkampf:{name,datum,distanz}, ziel, tempi:{...}, regeln:[...],
  wochen:[ { nr, start:"YYYY-MM-DD", fokus,
             tage:[ {typ:"lauf|kraft|velo|frei", titel, detail, km, session} x7 ] } ] }
```
`tage[0]` ist Montag. `km` speist die Soll-Kilometer im Tab «Fortschritt».
Optional `bloecke:[{name,von,bis,schwerpunkt,erhaltung,wettkampf}]` zeigt im Tab «Plan» die Saisonübersicht.

## Krafteinheiten ändern
In `index.html` `DEFAULT_SESSIONS` anpassen und `SESSIONS_VERSION` hochzählen.
Dann ersetzt die App die Einheiten im Gerät einmalig; der Kraft-Log bleibt erhalten.

## Journal
Ein Eintrag pro Training, drei Arten:
- **Lauf**: Distanz, Dauer, Höhenmeter, Ø Puls, RPE (Pace wird berechnet)
- **Kraft**: Sätze pro Übung (vorbelegt mit den Werten vom letzten Mal, abhaken), Dauer, RPE
- **Beweglichkeit**: Dauer, RPE

Bestehende Läufe und Kraft-Logs werden beim ersten Start einmalig ins Journal übernommen.

## Statistik
Zeitraum umschaltbar (4 Wochen, Block, Saison). Laufkilometer mit Plan-Soll, Belastung (sRPE = Minuten × RPE,
nach Foster) mit Monotonie, Intensitätsverteilung nach RPE, Laufeffizienz (Meter pro Herzschlag, 100 Hm ≈ 1 km),
Höhenmeter, Kraftverlauf pro Übung (geschätztes Maximum nach Epley bzw. Wiederholungen oder Haltezeit),
Konsistenz-Kalender und automatische Hinweise.

## Daten
Über den Knopf «Daten» oben rechts. Backup → Exportieren (enthält Pläne, Journal, Krafteinheiten, Theorie).
Alte Backups (Version 2 mit Läufen und Kraft-Log) lassen sich weiterhin importieren.
