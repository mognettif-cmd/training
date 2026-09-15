# Training – PWA

Laufplan, Krafteinheiten, Theorie und Trainingstagebuch. Alles läuft lokal im Gerät,
ohne Konto und ohne Server.

## Dateien
| Datei | Zweck |
|---|---|
| `index.html` | die App |
| `sessions.js` | alle Krafteinheiten als Daten: A1/A2, B1/B2, C1/C2, D1/D2, T1/T2, R1/R2, Kraft A/B |
| `theorie.js` | Theorie-Modul (7 Themen, je mit Trainingseinheit) |
| `manifest.json`, `sw.js`, `icon-*.png` | Installierbarkeit und Offline-Betrieb |
| `plan-hallwilersee-2026.json` | der aktuelle Plan als Datei – Beispiel für künftige Pläne |

## Online stellen (GitHub Pages)
1. Alle Dateien ins Repository hochladen (Add file → Upload files → Commit).
2. Settings → Pages → Source «Deploy from a branch», Branch `main`, Ordner `/ (root)`.
3. Nach 1–2 Minuten erreichbar unter `https://DEINNAME.github.io/REPONAME/`.

## Auf dem Pixel installieren
Chrome → Adresse öffnen → Menü ⋮ → «App installieren».

## Updates
Neue Dateien hochladen **und in `sw.js` den Wert von `CACHE` hochzählen**
(z. B. `training-v4-2026-10-20`). Ohne das behält das Handy die alte Version.
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

## Daten
Backup im Tab «Daten» → Exportieren (enthält Pläne, Läufe, Kraft-Log, Theorie).
Garmin: Garmin Connect (Web) → Aktivitäten → Alle Aktivitäten → CSV exportieren →
Tab «Läufe» → Garmin-CSV importieren. Velo und Duplikate werden übersprungen.

## Krafteinheiten ergänzen
`sessions.js` enthält alle Einheiten als Objekte:
`{ id, name, untertitel, gruppe, dauer, equipment, fokus, warmup, pause, finisher,
   uebungen:[{id, name, dosis, cue, tag, schulter}] }`
`gruppe` steuert die Wahlleiste im Tab «Kraft», `tag` gruppiert die Übungen innerhalb
der Session, `schulter` erzeugt den Warnhinweis. Nach einer Änderung in `sessions.js`
die Konstante `SESSIONS_VERSION` in `index.html` um eins erhöhen, sonst behält das
Gerät die gespeicherte Fassung.
