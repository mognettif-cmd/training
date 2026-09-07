# Training · Hallwilersee & OAP

Web-App (PWA) für Fabrizios Trainingsplan: 5-Wochen-Laufplan bis 10.10.2026, Kraft A/B, OAP-Sessions, Lauf- und Krafttagebuch mit Fortschritt.

## Online stellen (GitHub Pages)
1. Alle Dateien dieses Ordners ins Repository hochladen (Add file → Upload files → Commit).
2. Settings → Pages → Source «Deploy from a branch», Branch `main`, Ordner `/ (root)` → Save.
3. Nach 1–2 Minuten: `https://DEINNAME.github.io/REPONAME/`

## Auf dem Handy installieren (Android)
Chrome → Adresse öffnen → Menü ⋮ → «App installieren».

## Updates
Neue `index.html` hochladen und committen. Beim nächsten Öffnen lädt die App die neue Version nach (Service Worker, Cache-Name in `sw.js` bei Bedarf hochzählen).

## Daten
Alles bleibt lokal auf dem Gerät (localStorage). Backup über Tab «Daten» → Exportieren.
Garmin: Garmin Connect (Web) → Aktivitäten → Alle Aktivitäten → CSV exportieren → Tab «Läufe» → «Garmin-CSV importieren».
