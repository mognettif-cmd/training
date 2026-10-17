# Training – PWA (Version 4)

Plan, Heute-Ansicht, Journal, Krafteinheiten mit Pausentimer, Skill-Leitern, Testbatterie, Statistik und Theorie.
Alles läuft lokal im Gerät, ohne Konto und ohne Server. Farben und Aufbau wie Version 3, Inhalt nach dem Vorbild HippoFit.

## Neu in Version 4
- **Wochenstruktur:** Mo Kraft B (Beine explosiv und Spagat), Mi Lauf, Fr Kraft A (Oberkörper und Sehnen), Sa langer Lauf.
  Di und So optional ein Sehnen-Snack (5–10 Min). Blöcke 1–6 und die Läufe aus V3 bleiben, nur die Tage sind verschoben.
  In den Wettkampfwochen gibt es Ausnahmen (Vogellisi am Sonntag, Thuner Stadtlauf am Samstag).
- **Krafteinheiten** in Kurz- (~30 Min) und Normalversion (~45 Min), mit Übungspaaren, um Pausen zu sparen:
  - Kraft A: Klimmzug mit Zusatzlast, L-Sitz, Liegestütz-Stufe, OAP-Skill, einarmige Negative, Sehnen-Finisher, kurz Handstand
  - Kraft B: Plyometrie (Pogos, Bounds, Drop Jumps), Bulgarian Split Squat, Wadenheben schwer, einbeiniges Kreuzheben, Querspagat, Längsspagat
- **Heute:** die Einheit des Tages mit Start-Knopf (Kurz/Normal), Wochenübersicht, Skill-Stand, nächster Test.
- **Durchführung:** Sätze vorausgefüllt, ✓ startet den Pausentimer (Vibration), der Bildschirm bleibt an, die Dauer wird gemessen.
  Pro Übung «leicht / passend / hart» – daraus kommt der Vorschlag fürs nächste Mal (+2,5 kg, +1 Wdh, +3 s).
- **Skill-Leitern** für OAP (6 Stufen), L-Sitz (5) und Liegestütz (6). Die App meldet «bereit für die nächste Stufe»,
  wenn das Ziel zweimal hintereinander in allen Sätzen erreicht wurde.
- **Testbatterie alle 6 Wochen:** 10 Tests (Oberkörper, Sprungkraft, Querspagat, Längsspagat, 3 km) mit Spinnennetz-Diagramm.
- **Theorie:** 4 neue Kapitel mit Evidenzgraden (A/B/C) und Quellen: Starke Sehnen · Einarmiger Klimmzug, L-Sitz, Liegestütz ·
  Männer- und Frauenspagat · Zwei Krafteinheiten pro Woche. Die 7 Kapitel aus V3 bleiben unverändert.

## Dateien
| Datei | Zweck |
|---|---|
| `index.html` | die App (inkl. Saisonplan und Krafteinheiten) |
| `theorie.js` | Theorie-Modul (11 Themen) |
| `manifest.json`, `sw.js`, `icon-*.png` | Installierbarkeit und Offline-Betrieb |
| `plan-hallwilersee-2026.json` | abgeschlossener Plan Hallwilerseelauf |
| `plan-saison-2027.json` | aktueller Plan (Version 4), dieselben Daten wie in `index.html` |

## Update auf GitHub (bestehendes Repository)
1. **Vorher auf dem Handy:** Tab «Daten» → Backup exportieren.
2. Im Repository auf GitHub: *Add file → Upload files*, alle Dateien aus diesem Ordner hineinziehen
   (bestehende werden überschrieben) → *Commit changes*. Vorschlag für die Commit-Nachricht:
   `Training V4: Wochenstruktur Mo/Mi/Fr/Sa, neue Krafteinheiten, Skill-Leitern, Tests, Theorie Sehnen/Spagat`
3. Nach 1–2 Minuten die App auf dem Handy öffnen, schliessen und nochmals öffnen. Der neue Cache-Name
   (`training-v6-2026-10-17` in `sw.js`) sorgt dafür, dass die neue Version geladen wird.

Beim ersten Start ersetzt die App einmalig den Saisonplan und die Krafteinheiten im Gerät.
**Journal, Läufe und Kraft-Logs bleiben erhalten.** Ein Backup aus Version 3 lässt sich jederzeit wieder einlesen.

## Erste Schritte nach dem Update
1. Tab «Heute» → «Stufen ändern»: pro Leiter die Stufe wählen, deren Ziel du noch nicht sicher schaffst.
2. In der ersten Woche (ab Mo 19.10.) oder am Fr 23.10. den Ersttest machen («Test eintragen»).

## Pflege
- **Krafteinheiten ändern:** in `index.html` `DEFAULT_SESSIONS` anpassen und `SESSIONS_VERSION` hochzählen.
  Pro Übung: `dosis`, optional `kurzDosis`, `pause` (Sekunden), `kurz:false` (nur in der Normalversion), `leiter` (Skill-Leiter).
- **Skill-Leitern / Tests:** `LEITERN` und `TESTS` in `index.html`.
- **Plan ändern:** `plan-saison-2027.json` bearbeiten, `version` hochzählen und den Plan in `index.html` (`PLAN_SAISON_2027`) ersetzen
  oder die Datei im Tab «Daten» importieren.
- Nach jeder Änderung `CACHE` in `sw.js` hochzählen.

## Lokal testen
`py -m http.server 8082 --directory "Training V4"` im Projektordner, dann http://localhost:8082 öffnen.
