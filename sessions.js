/* Krafteinheiten als Daten. Neue Session = Objekt ergänzen, kein Codeeingriff.
   Aus dem alten OAP-Trainingsplan übernommen (A1–T2, R1/R2) plus Laufkraft A/B. */
window.DEFAULT_SESSIONS = [
 {
  "id": "A1",
  "name": "A1",
  "untertitel": "OAP Pull · Grip",
  "gruppe": "A · OAP Pull",
  "dauer": "30–40 min",
  "equipment": "Klimmzugstange · TRX · Ringe · KB 16 kg",
  "fokus": "Einarmige Zugkraft aufbauen, volle ROM, Unterarme, Sehnenadaptation",
  "warmup": "Scapular Circles + Arm CARs (schmerzfrei) + Dead Hang 20 s × 2",
  "pause": "45–60 s zwischen Stationen · Zirkel 2× (3× wenn Zeit)",
  "finisher": {
   "label": "Finisher (+5 min)",
   "desc": "EMOM 6 min · Min 1: 10 KB Swings 16 kg · Min 2: 5 TRX Row explosiv · Rest = Pause"
  },
  "uebungen": [
   {
    "id": "A1-1",
    "name": "Scapular Pull-Up",
    "dosis": "3 × 10",
    "cue": "Arme gestreckt — nur Schulterblatt heben/senken. Schulterblatt aktiv, Rumpf angespannt.",
    "tag": "Aufwärmen",
    "schulter": ""
   },
   {
    "id": "A1-2",
    "name": "Band-OAP",
    "dosis": "4 × 4–5 / Seite",
    "cue": "Tempo 3-1-1-0 · volle ROM · Betroffene Schulter: bei Schmerz > 3/10 → nur gesunde Seite, andere 2-armig.",
    "tag": "Hauptlift",
    "schulter": "⚠️ Betroffene Seite schmerzfreie ROM only"
   },
   {
    "id": "A1-3",
    "name": "TRX Row + volle ROM",
    "dosis": "3 × 8",
    "cue": "Füsse erhöht. Unten komplett strecken, oben Skapula maximal zusammenziehen. Tempo 3-0-1-0.",
    "tag": "Zug ROM",
    "schulter": ""
   },
   {
    "id": "A1-4",
    "name": "Ring Push-Up (tief)",
    "dosis": "3 × 6–8",
    "cue": "Ringe tief, Brust zwischen Händen sinken. Betroffene Schulter: Tiefe reduzieren bis schmerzfrei.",
    "tag": "Push ROM",
    "schulter": "⚠️ Tiefe anpassen"
   },
   {
    "id": "A1-5",
    "name": "KB Hammer Curl 16 kg",
    "dosis": "3 × 8 / Seite",
    "cue": "Tempo 3-1-2-0 · voller Bewegungsumfang · kein Schwung · Unterarm-Fokus.",
    "tag": "Unterarm",
    "schulter": ""
   },
   {
    "id": "A1-6",
    "name": "Dead Hang aktiv (1 Arm)",
    "dosis": "3 × 20–30 s / Seite",
    "cue": "Skapula aktiv deprimiert halten. Betroffene Seite: kürzere Dauer, sofort stoppen bei Schmerz.",
    "tag": "Sehne/Grip",
    "schulter": "⚠️ Dauer anpassen"
   }
  ]
 },
 {
  "id": "A2",
  "name": "A2",
  "untertitel": "OAP Variation · Negativ",
  "gruppe": "A · OAP Pull",
  "dauer": "30–40 min",
  "equipment": "Klimmzugstange · Ringe · KB 16 kg · Widerstandsband",
  "fokus": "Negativbewegungen, einarmige Kontrolle, Gripmuster wechseln",
  "warmup": "Band Pull-Apart 2 × 15 + Hang Scapular 30 s + Wrist CARs 2 × 30 s",
  "pause": "60 s zwischen Stationen · Zirkel 2×",
  "finisher": {
   "label": "Finisher (+4 min)",
   "desc": "3 Runden: 3 Negativ Pull-Up + 5 Ring Row + 10 s Towel Hang · Pause 60 s"
  },
  "uebungen": [
   {
    "id": "A2-1",
    "name": "Negativ Pull-Up (1-armig assistiert)",
    "dosis": "4 × 3 / Seite",
    "cue": "Band leicht am Fuss. Oben einhängen, 5 s runter lassen. Volle Kontrolle, keine Beschleunigung.",
    "tag": "Negativ OAP",
    "schulter": "⚠️ Betroffene Seite: nur schmerzfreie Tiefe"
   },
   {
    "id": "A2-2",
    "name": "Ring Row (supiniert, enge Hände)",
    "dosis": "3 × 8",
    "cue": "Hände supiniert (Handflächen oben) · Ellbogen nah · Brust zu den Ringen · langsam.",
    "tag": "Zug Variation",
    "schulter": ""
   },
   {
    "id": "A2-3",
    "name": "Towel/Seil Pull-Up (2-armig)",
    "dosis": "3 × 5",
    "cue": "Handtuch über Stange, je eine Hand. Volle ROM. Direkte OAP-Vorstufe — Unterarm und Grip massiv.",
    "tag": "Grip Spezifisch",
    "schulter": ""
   },
   {
    "id": "A2-4",
    "name": "KB Reverse Curl 16 kg",
    "dosis": "3 × 8 / Seite",
    "cue": "Handrücken oben (Pronation) · Tempo 3-1-2-0 · Unterarm dorsal · andere Muskeln als Hammer Curl.",
    "tag": "Unterarm Ext.",
    "schulter": ""
   },
   {
    "id": "A2-5",
    "name": "Dead Bug + Zugband overhead",
    "dosis": "3 × 6 / Seite",
    "cue": "Band overhead in gesunder Hand · LWS am Boden · Anti-Extension + Schulterstabilität.",
    "tag": "Rumpf/Schulter",
    "schulter": "⚠️ Nur gesunde Seite overhead"
   },
   {
    "id": "A2-6",
    "name": "Fingerflexor Hang (Fingerkuppen)",
    "dosis": "3 × 20 s",
    "cue": "Nur Fingerkuppen an der Stange. Kurze Dauer, maximale Griffintensität. Sehnenaufbau.",
    "tag": "Finger/Sehne",
    "schulter": ""
   }
  ]
 },
 {
  "id": "B1",
  "name": "B1",
  "untertitel": "KB Power · O₂",
  "gruppe": "B · KB Power",
  "dauer": "30–40 min",
  "equipment": "KB 16–32 kg · Klimmzugstange",
  "fokus": "Explosivkraft, O₂-Anpassung, unilaterale Belastung, Rumpf",
  "warmup": "KB Halo 12 kg × 8/Richtung + World's Greatest Stretch 30 s/Seite",
  "pause": "45–60 s zwischen Stationen · Zirkel 2×",
  "finisher": {
   "label": "Finisher (+5 min)",
   "desc": "Tabata 4 min · 20 s KB Swing 20 kg / 10 s Pause · 8 Runden"
  },
  "uebungen": [
   {
    "id": "B1-1",
    "name": "KB Swing 2-armig",
    "dosis": "5 × 12",
    "cue": "16–24 kg · Hüfte explosiv · Latspannung oben · kein Hohlkreuz · Rücken neutral.",
    "tag": "Power",
    "schulter": ""
   },
   {
    "id": "B1-2",
    "name": "KB Clean + Press (1-armig)",
    "dosis": "4 × 5 / Seite",
    "cue": "16 kg · sauber fangen · voller Press · Betroffene Schulter: nur bis Schulterhöhe drücken.",
    "tag": "Unilat",
    "schulter": "⚠️ ROM begrenzen"
   },
   {
    "id": "B1-3",
    "name": "KB High Pull (1-armig)",
    "dosis": "3 × 6 / Seite",
    "cue": "16 kg · Ellbogen hoch · explosive Hüfte · Betroffene Schulter: nur bis Schulterbreite.",
    "tag": "Explosiv",
    "schulter": "⚠️ ROM begrenzen"
   },
   {
    "id": "B1-4",
    "name": "Pull-Up (eng)",
    "dosis": "3 × 5",
    "cue": "Ellbogen nah · Tempo 3-1-1-0 · volle ROM · Negativ 4 s wenn möglich.",
    "tag": "Zug",
    "schulter": ""
   },
   {
    "id": "B1-5",
    "name": "Cossack Squat",
    "dosis": "3 × 5 / Seite",
    "cue": "Tiefe laterale Kniebeuge · Standbein gestreckt · Zehe oben · Brust aufrecht. KH vor Brust als Progression.",
    "tag": "Bein/Mobi",
    "schulter": ""
   },
   {
    "id": "B1-6",
    "name": "KB Suitcase Carry",
    "dosis": "3 × 25 m / Seite",
    "cue": "24–32 kg · Schulter aktiv gesenkt · nicht seitlich kippen · Grip + Lateralkette.",
    "tag": "Unterarm/Rumpf",
    "schulter": ""
   }
  ]
 },
 {
  "id": "B2",
  "name": "B2",
  "untertitel": "KB Komplex · Kondition",
  "gruppe": "B · KB Power",
  "dauer": "35–45 min",
  "equipment": "KB 16–24 kg · Klimmzugstange",
  "fokus": "KB-Komplexe für maximale Kondition, Griffausdauer, Rotationskraft",
  "warmup": "KB Deadlift 16 kg × 10 + Hip Circle × 8 / Seite + Arm Swing 30 s",
  "pause": "60 s zwischen Stationen · Zirkel 2×",
  "finisher": {
   "label": "Finisher (+6 min)",
   "desc": "KB-Komplex 3 Runden (keine Pause): 5 Swing + 3 Clean + 2 Press + 1 Snatch (1 Arm, dann Seite wechseln) · Pause 90 s zwischen Runden"
  },
  "uebungen": [
   {
    "id": "B2-1",
    "name": "KB Snatch (1-armig)",
    "dosis": "5 × 5 / Seite",
    "cue": "16 kg · von unten explosiv · Arm gestreckt oben · kein Knicken im Handgelenk · Schulterblatt aktiv.",
    "tag": "Explosiv/Grip",
    "schulter": "⚠️ Betroffene Seite: nur bis Schulter"
   },
   {
    "id": "B2-2",
    "name": "KB Windmill",
    "dosis": "3 × 5 / Seite",
    "cue": "16–20 kg · Hüfte lateral schieben · Blick auf KB · Rücken neutral · langsam. Erst Technik, dann Last.",
    "tag": "Lateral/Mobi",
    "schulter": "⚠️ Gesunde Seite zuerst"
   },
   {
    "id": "B2-3",
    "name": "KB Swing 1-armig",
    "dosis": "4 × 8 / Seite",
    "cue": "16 kg · Hüfte wie 2-armig · Schulter stabil · Latspannung halten · explosiv.",
    "tag": "Unilat Power",
    "schulter": ""
   },
   {
    "id": "B2-4",
    "name": "Chin-Up (supiniert)",
    "dosis": "3 × 5",
    "cue": "Handflächen zu dir · Ellbogen nah · volle ROM · Biceps stärker betont als Pull-Up.",
    "tag": "Zug Variation",
    "schulter": ""
   },
   {
    "id": "B2-5",
    "name": "KB Goblet Squat + Pause",
    "dosis": "3 × 5 × 3 s",
    "cue": "20–24 kg · tiefste Position 3 s halten · Fersen am Boden · Brust offen · Knie nach aussen.",
    "tag": "Bein Kraft",
    "schulter": ""
   },
   {
    "id": "B2-6",
    "name": "KB Rack Carry (1-armig)",
    "dosis": "3 × 25 m / Seite",
    "cue": "16 kg in Rack-Position · Ellbogen an Körper · Schulter stabil · Core brannt.",
    "tag": "Rumpf/Schulter",
    "schulter": "⚠️ Betroffene Seite: Farmer Carry statt Rack"
   }
  ]
 },
 {
  "id": "C1",
  "name": "C1",
  "untertitel": "Rings · Defizit · Rumpf",
  "gruppe": "C · Rings",
  "dauer": "35–45 min",
  "equipment": "Ringe · TRX · Klimmzugstange · KH 16 kg",
  "fokus": "Maximale Gelenkamplitude, unilaterale Bein-/Armkraft, Rumpfstabilität",
  "warmup": "90/90 Hip 60 s/Seite + Thorax-Rotation 8×/Seite + Shoulder CARs 5×",
  "pause": "60 s zwischen Stationen · Zirkel 2–3×",
  "finisher": {
   "label": "Finisher (+5 min)",
   "desc": "AMRAP 5 min · 3 Ring Pull-Up + 5 Defizit Split Squat/Seite + 10 s L-Sit"
  },
  "uebungen": [
   {
    "id": "C1-1",
    "name": "Ring Pull-Up",
    "dosis": "4 × 5",
    "cue": "Ringe schulterbreit · volle ROM · Ellbogen nah · Tempo 3-1-1-0 · stabiler als Stange.",
    "tag": "Zug",
    "schulter": ""
   },
   {
    "id": "C1-2",
    "name": "Defizit Bulg. Split Squat",
    "dosis": "4 × 6 / Seite",
    "cue": "Vorderfuss auf 5–10 cm Erhöhung · 16 kg KH · tief sinken · Knie über 3. Zehe · langsam.",
    "tag": "Defizit Bein",
    "schulter": ""
   },
   {
    "id": "C1-3",
    "name": "TRX Fallout",
    "dosis": "3 × 8",
    "cue": "Arme strecken bis Körper fast horizontal · langsam zurück · Anti-Extension Rumpf und Schulter.",
    "tag": "Anti-Ext.",
    "schulter": "⚠️ Amplitude anpassen"
   },
   {
    "id": "C1-4",
    "name": "Turkish Get-Up",
    "dosis": "3 × 3 / Seite",
    "cue": "16 kg · jede Phase kontrolliert · Auge immer auf KB · Gesunde Seite zuerst.",
    "tag": "Ganzkörper",
    "schulter": "⚠️ Gesunde Seite zuerst"
   },
   {
    "id": "C1-5",
    "name": "Cossack Squat (gewichtet)",
    "dosis": "3 × 5 / Seite",
    "cue": "16 kg KH vor Brust · tief · Standbein gestreckt · Fersen am Boden · Brust aufrecht.",
    "tag": "Bein/Mobi",
    "schulter": ""
   },
   {
    "id": "C1-6",
    "name": "L-Sit Hold",
    "dosis": "3 × 10–20 s",
    "cue": "Boden oder Stuhlkanten · Rumpf + Schulterdepression · Beine gestreckt oder Knie gebeugt.",
    "tag": "Rumpf/Grip",
    "schulter": ""
   }
  ]
 },
 {
  "id": "C2",
  "name": "C2",
  "untertitel": "Rings Power · Pistol",
  "gruppe": "C · Rings",
  "dauer": "35–45 min",
  "equipment": "Ringe · Klimmzugstange · KH 16 kg · Schaumrolle",
  "fokus": "Ring-Kraft progressiv, Pistol Squat Aufbau, Rumpfrotation",
  "warmup": "Pigeon Pose 90 s/Seite + Ankle Circles + Ring Support Hold 3 × 15 s",
  "pause": "60–75 s zwischen Stationen · Zirkel 2×",
  "finisher": {
   "label": "Finisher (+5 min)",
   "desc": "Tabata Ringe · 20 s Ring Support Hold / 10 s Pause · 8 Runden · Schulter und Rumpf brennen"
  },
  "uebungen": [
   {
    "id": "C2-1",
    "name": "Ring Muscle-Up Progression",
    "dosis": "4 × 3–5",
    "cue": "Variante nach Level: Ring Row to Dip / False Grip Hang / Transition üben. Kein Kip.",
    "tag": "Ring Kraft",
    "schulter": "⚠️ Betroffene Schulter: nur Ring Row"
   },
   {
    "id": "C2-2",
    "name": "Pistol Squat Progression",
    "dosis": "4 × 4 / Seite",
    "cue": "Variante: Box Pistol (auf Erhöhung) → Pistol mit TRX → frei. Ferse am Boden · Brust aufrecht.",
    "tag": "Unilat Bein",
    "schulter": ""
   },
   {
    "id": "C2-3",
    "name": "Ring Support Hold + Dip",
    "dosis": "3 × 5",
    "cue": "Support Hold 5 s · dann 3 Dips · Schultern tief · Ringe nach aussen drehen · kontrolliert.",
    "tag": "Push/Schulter",
    "schulter": "⚠️ Tiefe anpassen"
   },
   {
    "id": "C2-4",
    "name": "Hollow Body → V-Up",
    "dosis": "3 × 8",
    "cue": "Hollow Body Position halten · dann V-Up · LWS am Boden · langsam · Rumpfkraft OAP-relevant.",
    "tag": "Rumpf",
    "schulter": ""
   },
   {
    "id": "C2-5",
    "name": "Cossack Squat → Lateral Lunge",
    "dosis": "3 × 5 / Seite",
    "cue": "Erst tiefer Cossack · dann aus der Position aufstehen als Lateral Lunge. Kontinuierlich, kein Pause.",
    "tag": "Kombi Bein",
    "schulter": ""
   },
   {
    "id": "C2-6",
    "name": "KB Windmill light",
    "dosis": "3 × 5 / Seite",
    "cue": "12 kg · Hüfte lateral · Rotation aktiv · Blick auf KB · langsam. Schulterblatt aktiv halten.",
    "tag": "Lateral/Schulter",
    "schulter": "⚠️ Gesunde Seite zuerst"
   }
  ]
 },
 {
  "id": "D1",
  "name": "D1",
  "untertitel": "Schwere KH · Hinge",
  "gruppe": "D · Kraft",
  "dauer": "35–45 min",
  "equipment": "2 × KH bis 40 kg · KB 24–32 kg",
  "fokus": "Maximalkraft Hinge & Press, Lateralkette, Rumpfisometrie",
  "warmup": "Jefferson Curl 1 kg × 5 (langsam) + Hip Hinge KG × 10 + Pallof Press",
  "pause": "75–90 s zwischen Stationen · Zirkel 2×",
  "finisher": "",
  "uebungen": [
   {
    "id": "D1-1",
    "name": "Romanian Deadlift (RDL)",
    "dosis": "4 × 6",
    "cue": "2 × 32–40 kg · Hüfte zurück · Knie leicht gebeugt · Rücken neutral · 4 s absenken.",
    "tag": "Hinge",
    "schulter": ""
   },
   {
    "id": "D1-2",
    "name": "Single-Arm Floor Press",
    "dosis": "3 × 6 / Seite",
    "cue": "1 × 28–36 kg · Rumpfrotation kontrollieren · nicht mitdrehen · Gesunde Seite zuerst.",
    "tag": "Unilat Press",
    "schulter": "⚠️ Gesunde Seite zuerst"
   },
   {
    "id": "D1-3",
    "name": "Renegade Row",
    "dosis": "3 × 5 / Seite",
    "cue": "2 × 20–28 kg · Hüfte absolut fix · kein Rotieren · Skapula aktiv · langsam.",
    "tag": "Rumpf/Zug",
    "schulter": ""
   },
   {
    "id": "D1-4",
    "name": "Cossack Squat (max. Tiefe)",
    "dosis": "3 × 4 / Seite",
    "cue": "Nur KG oder leichte KH · tiefste erreichbare Position · Fersen am Boden · keine Kompensation.",
    "tag": "Bein/Mobi",
    "schulter": ""
   },
   {
    "id": "D1-5",
    "name": "Suitcase Deadlift",
    "dosis": "3 × 5 / Seite",
    "cue": "1 × 36–40 kg · Lateralkette · Rumpf isometrisch halten · nicht seitlich kippen.",
    "tag": "Lateralkette",
    "schulter": ""
   },
   {
    "id": "D1-6",
    "name": "KB Farmer Carry (1-armig)",
    "dosis": "3 × 30 m / Seite",
    "cue": "24–32 kg · Griffausdauer + Lateralstabilität · Schulter aktiv gesenkt.",
    "tag": "Unterarm",
    "schulter": ""
   }
  ]
 },
 {
  "id": "D2",
  "name": "D2",
  "untertitel": "Kraft + Rotation",
  "gruppe": "D · Kraft",
  "dauer": "35–45 min",
  "equipment": "2 × KH bis 40 kg · KB 16–24 kg · TRX",
  "fokus": "Rotationskraft, unilaterale Hinge-Varianten, Schulter-Schutz-Kraft",
  "warmup": "Thorax-Rotation auf Knie 8×/Seite + Cat-Cow × 10 + Pallof Press 2 × 10/Seite",
  "pause": "75 s zwischen Stationen · Zirkel 2×",
  "finisher": {
   "label": "Finisher (+5 min)",
   "desc": "Komplexe 3 Runden: 5 KB Swing + 3 Windmill + 5 Single-Leg RDL / Seite · Pause 75 s"
  },
  "uebungen": [
   {
    "id": "D2-1",
    "name": "Single-Leg RDL",
    "dosis": "4 × 5 / Seite",
    "cue": "1 × 24–32 kg (ggü. Standbein) · Rücken neutral · Hüfte kippt nicht · Standbein leicht gebeugt.",
    "tag": "Unilat Hinge",
    "schulter": ""
   },
   {
    "id": "D2-2",
    "name": "KB Windmill (schwer)",
    "dosis": "3 × 5 / Seite",
    "cue": "20–24 kg · Hüfte lateral schieben · Rotation kontrolliert · nicht den Rücken beugen.",
    "tag": "Rotation",
    "schulter": "⚠️ Gesunde Seite zuerst"
   },
   {
    "id": "D2-3",
    "name": "Pallof Press (schwereres Band/KB)",
    "dosis": "3 × 10 / Seite",
    "cue": "KB 16 kg als Gegengewicht oder Band · Anti-Rotation · Rumpf absolut fix · langsam.",
    "tag": "Anti-Rotation",
    "schulter": ""
   },
   {
    "id": "D2-4",
    "name": "Offset KB Squat",
    "dosis": "3 × 6 / Seite",
    "cue": "Nur eine Seite KB 24 kg · asymmetrische Last zwingt Rumpf zu stabilisieren · Knie über Zehe.",
    "tag": "Rumpf/Bein",
    "schulter": ""
   },
   {
    "id": "D2-5",
    "name": "TRX Fallout (schwer)",
    "dosis": "3 × 6",
    "cue": "Füsse erhöht oder Körper tiefer · fast horizontal · maximale Anti-Extension · sehr langsam.",
    "tag": "Anti-Ext.",
    "schulter": "⚠️ Amplitude anpassen"
   },
   {
    "id": "D2-6",
    "name": "Overhead Carry (1-armig)",
    "dosis": "3 × 20 m / Seite",
    "cue": "16–20 kg overhead · Arm senkrecht · Schulterblatt aktiv · kein Seitneigen · nur gesunde Seite.",
    "tag": "Schulter Stab.",
    "schulter": "⚠️ Nur gesunde Seite overhead"
   }
  ]
 },
 {
  "id": "T1",
  "name": "T1",
  "untertitel": "Travel · Kein Equipment",
  "gruppe": "T · Travel",
  "dauer": "25–35 min",
  "equipment": "Kein Equipment — überall",
  "fokus": "Mobility-Flow, Rumpf, KG-Kraft — auf Reisen, zwischen Terminen",
  "warmup": "Inchworm × 5 + Scorpion Stretch 8×/Seite + Deep Squat Hold 60 s",
  "pause": "45 s zwischen Stationen · Zirkel 2×",
  "finisher": {
   "label": "Finisher (+4 min)",
   "desc": "Tabata · 20 s Burpee / 10 s Pause · 8 Runden"
  },
  "uebungen": [
   {
    "id": "T1-1",
    "name": "Pike Push-Up",
    "dosis": "4 × 8–10",
    "cue": "Hüfte hoch · Schulter-Fokus · Kopf zwischen Armen durch · langsam.",
    "tag": "Push",
    "schulter": "⚠️ Tiefe anpassen"
   },
   {
    "id": "T1-2",
    "name": "Cossack Squat",
    "dosis": "4 × 6 / Seite",
    "cue": "Maximale Tiefe · Standbein gestreckt · Zehe oben · kein Kippen. Arme vor Brust für Balance.",
    "tag": "Bein/Mobi",
    "schulter": ""
   },
   {
    "id": "T1-3",
    "name": "Archer Push-Up",
    "dosis": "3 × 5 / Seite",
    "cue": "Breit starten · Gewicht auf eine Seite · Ellbogen nah · unilaterale Schulterstabilität.",
    "tag": "Unilat Push",
    "schulter": "⚠️ Tiefe anpassen"
   },
   {
    "id": "T1-4",
    "name": "Dead Bug",
    "dosis": "3 × 6 / Seite",
    "cue": "LWS am Boden · langsam · gegenüberliegender Arm/Bein · Anti-Extension.",
    "tag": "Rumpf",
    "schulter": ""
   },
   {
    "id": "T1-5",
    "name": "Jefferson Curl",
    "dosis": "2 × 5",
    "cue": "0.5–2 kg (Wasserflasche) · Wirbel für Wirbel abrollen · kein Schmerz · Rücken-Mobilität.",
    "tag": "Mobi Rücken",
    "schulter": ""
   },
   {
    "id": "T1-6",
    "name": "L-Sit Hold",
    "dosis": "3 × 10–20 s",
    "cue": "Stuhlkanten oder Boden · Rumpf + Schulterdepression · Beine gestreckt oder Knie gebeugt.",
    "tag": "Rumpf/Grip",
    "schulter": ""
   },
   {
    "id": "T1-7",
    "name": "Reverse Snow Angel",
    "dosis": "2 × 10",
    "cue": "Auf Bauch · Arme am Boden führen · Skapula-Retraktoren · langsam.",
    "tag": "Schulter Schutz",
    "schulter": ""
   }
  ]
 },
 {
  "id": "T2",
  "name": "T2",
  "untertitel": "Travel · Intensiv",
  "gruppe": "T · Travel",
  "dauer": "25–35 min",
  "equipment": "Kein Equipment — optional Wasserflasche als Last",
  "fokus": "Höhere Intensität, mehr Rumpf, Einbeinvarianten — für fitte Travel-Tage",
  "warmup": "World's Greatest Stretch 45 s/Seite + Hip CARs 5×/Seite + Wrist Circles",
  "pause": "45–60 s zwischen Stationen · Zirkel 2×",
  "finisher": {
   "label": "Finisher (+5 min)",
   "desc": "AMRAP 5 min · 5 Pike Push-Up + 5 Pistol Squat/Seite + 10 s Hollow Body Hold"
  },
  "uebungen": [
   {
    "id": "T2-1",
    "name": "Pseudo Planche Push-Up",
    "dosis": "4 × 6",
    "cue": "Hände nah an Hüften, nach aussen rotiert · Körper schräg vorgelehnt · Schulter-Fokus · sehr langsam.",
    "tag": "Push Schwer",
    "schulter": "⚠️ Belastung einschätzen"
   },
   {
    "id": "T2-2",
    "name": "Pistol Squat Progression",
    "dosis": "4 × 4 / Seite",
    "cue": "Variante nach Level: Box → Stuhl → TRX-assistiert → frei. Ferse am Boden. Kein Runden des Rückens.",
    "tag": "Unilat Bein",
    "schulter": ""
   },
   {
    "id": "T2-3",
    "name": "Hollow Body Hold",
    "dosis": "3 × 25 s",
    "cue": "Arme über Kopf · Lendenwirbelsäule am Boden · Beine gestreckt 20–30 cm hoch · alles angespannt.",
    "tag": "Rumpf",
    "schulter": ""
   },
   {
    "id": "T2-4",
    "name": "Reverse Nordic Curl",
    "dosis": "3 × 3–5",
    "cue": "Knie auf Boden (Handtuch drunter) · Oberkörper aufrecht · langsam nach hinten lehnen · Quadrizeps + Hüftbeuger exzentrisch bremsen · mit Armen abfangen · explosiv zurück. Regression: nur 20–30° Neigung. ⚡ Fokus: Quadrizeps / Hüftbeuger — kein Hamstring.",
    "tag": "Quad Exzentrik",
    "schulter": ""
   },
   {
    "id": "T2-4b",
    "name": "Slider Leg Curl (Waschlappen)",
    "dosis": "3 × 5–8",
    "cue": "Auf Rücken · Fersen auf Waschlappen/Socken auf glattem Boden · Hüfte heben und oben halten · Beine langsam strecken (exzentrisch) · dann einziehen. Regression: 2-beinig. Progression: 1-beinig. ⚡ Fokus: Hamstrings / Posterior Chain.",
    "tag": "Hamstring Exz.",
    "schulter": ""
   },
   {
    "id": "T2-5",
    "name": "Cossack Squat + Rotation",
    "dosis": "3 × 5 / Seite",
    "cue": "Im tiefen Cossack Oberkörper zur Seite rotieren · Arme ausgestreckt · Mobilität + Kraft kombiniert.",
    "tag": "Kombi",
    "schulter": ""
   },
   {
    "id": "T2-6",
    "name": "Handstand Hold Progression",
    "dosis": "3 × 15–30 s",
    "cue": "Variante nach Level: Pike Hold → Handstand an Wand → frei. Schulterblatt aktiv · Körper gerade.",
    "tag": "Schulter/Rumpf",
    "schulter": "⚠️ Betroffene Schulter: Pike Hold"
   },
   {
    "id": "T2-7",
    "name": "Single-Leg Glute Bridge",
    "dosis": "3 × 10 / Seite",
    "cue": "Hüfte komplett durchstrecken · Gluteus maximal anspannen · Standfuss flach · 2 s oben halten.",
    "tag": "Posterior Chain",
    "schulter": ""
   }
  ]
 },
 {
  "id": "R1",
  "name": "R1",
  "untertitel": "HM Ganzkörper · Zug-Fokus",
  "gruppe": "R · HM Kraft",
  "dauer": "45–60 min",
  "equipment": "Klimmzugstange · Ringe/TRX · KB 16–32 kg · Stufe",
  "fokus": "Ganzkörper mit Zug-Schwerpunkt + Läufer-Block (Gastrocnemius/Achilles, posteriore Kette) — Halbmarathon 10.10.",
  "warmup": "Schulterkreisen am Band + Scapular Pull-Up 2 × 8 + Dead Hang 2 × 30 s + 10 Kniebeugen o. Gewicht",
  "pause": "60–90 s zwischen Stationen · Zirkel 2×",
  "finisher": {
   "label": "Hinweis Laufwoche",
   "desc": "R1 ist longrun-verträglich — darf 24 h vor dem Longrun liegen. Entlastungswoche: je 1 Satz weniger."
  },
  "uebungen": [
   {
    "id": "R1-1",
    "name": "Klimmzüge volle ROM",
    "dosis": "4 × 6–8",
    "cue": "Unten komplett aushängen, oben Kinn klar über die Stange. Kontrolliert, kein Kippen.",
    "tag": "Zug vertikal",
    "schulter": "⚠️ Bei Schmerz > 3/10 → Ring Row"
   },
   {
    "id": "R1-2",
    "name": "Ring Push-Up (tief)",
    "dosis": "3 × 8–12",
    "cue": "Brust zwischen den Händen sinken · volle ROM · Ringe stabilisieren aktiv.",
    "tag": "Push horizontal",
    "schulter": "⚠️ Tiefe reduzieren bis schmerzfrei"
   },
   {
    "id": "R1-3",
    "name": "Pelican Curl (Ringe, konservativ)",
    "dosis": "2 × 3–5",
    "cue": "Kleiner Winkel starten, Absenken nur so tief wie schmerzfrei · 3–5 s exzentrisch · Ellbogen gestreckt lassen. ⚡ Maximale Bizeps-/Sehnendehnung unter Last — OAP-Gold, aber konservativ steigern.",
    "tag": "Bizeps Exz.",
    "schulter": "⚠️ Absenktiefe schmerzfrei"
   },
   {
    "id": "R1-4",
    "name": "Ring Row volle ROM",
    "dosis": "3 × 8–10",
    "cue": "Füsse erhöht · unten voll strecken, oben Skapula maximal zusammen · Endkontraktion 1 s.",
    "tag": "Zug horizontal",
    "schulter": ""
   },
   {
    "id": "R1-5",
    "name": "Einbein-Wadenheber schwer (Stufe)",
    "dosis": "3 × 8–10 / Seite",
    "cue": "KB in der Hand, Fussballen auf Stufe. Ferse tief UNTER Stufenniveau (voller Dehnbereich!), oben ganz hoch, 3 s exzentrisch. ⚡ Läufer-Block: Gastrocnemius/Achilles — wichtigste HM-Prophylaxe.",
    "tag": "Läufer-Block",
    "schulter": ""
   },
   {
    "id": "R1-6",
    "name": "KB Romanian Deadlift 1-beinig",
    "dosis": "3 × 8 / Seite",
    "cue": "Hüftgelenk als Scharnier · volle Hamstring-Dehnung · Rücken lang · Hüfte parallel. ⚡ Läufer-Block: posteriore Kette unilateral.",
    "tag": "Läufer-Block",
    "schulter": ""
   }
  ]
 },
 {
  "id": "R2",
  "name": "R2",
  "untertitel": "HM Ganzkörper · Druck-Fokus",
  "gruppe": "R · HM Kraft",
  "dauer": "45–60 min",
  "equipment": "Klimmzugstange · Ringe · KB 16–32 kg · erhöhte Unterlage",
  "fokus": "Ganzkörper mit Druck-/OAP-Schwerpunkt + Läufer-Block (Einbein-Exzentrik, Soleus) — baut die Quadrizeps-Kapazität für die letzten 5 km am Hallwilersee.",
  "warmup": "Hüftkreisen + KB Halo 12 kg × 8/Richtung + Band Pull-Apart 2 × 15 + Wrist CARs",
  "pause": "60–90 s zwischen Stationen · Zirkel 2×",
  "finisher": {
   "label": "Hinweis Laufwoche",
   "desc": "⚠️ 48 h Abstand zum Longrun — Split Squats machen sonst schwere Beine. Entlastungswoche: je 1 Satz weniger."
  },
  "uebungen": [
   {
    "id": "R2-1",
    "name": "OAP-Progression (Negativ / Archer)",
    "dosis": "4 × 3–5",
    "cue": "Exzentrisch 5 s bis zum vollen Aushang unten — kein Abbrechen bei halber Streckung. Last in gedehnter Position = stärkster Sehnenreiz.",
    "tag": "Hauptlift",
    "schulter": "⚠️ Betroffene Seite schmerzfreie ROM only"
   },
   {
    "id": "R2-2",
    "name": "Pike / Handstand Push-Up",
    "dosis": "3 × 5–8",
    "cue": "Variante nach Level: Pike → Füsse erhöht → Wand. Scheitel Richtung Boden, volle ROM.",
    "tag": "Push vertikal",
    "schulter": "⚠️ Betroffene Schulter: Pike flach, schmerzfreie ROM"
   },
   {
    "id": "R2-3",
    "name": "Ring Dips / Trizeps",
    "dosis": "3 × 6–10",
    "cue": "Ringe eng am Körper · Schultern tief (Depression) · unten volle Dehnung nur soweit schmerzfrei. Regression: Bank-Dips oder Ring-Trizepsstrecken.",
    "tag": "Push/Trizeps",
    "schulter": "⚠️ Tiefe anpassen"
   },
   {
    "id": "R2-4",
    "name": "Ring Face Pull / Rear Delt Row",
    "dosis": "3 × 10–12",
    "cue": "Ringe zu den Schläfen ziehen · Ellbogen hoch · Rotatoren + hintere Schulter — Gegenspieler zum Drücken.",
    "tag": "Schultergesundheit",
    "schulter": ""
   },
   {
    "id": "R2-5",
    "name": "Bulgarian Split Squat / KB-Ausfallschritt rw.",
    "dosis": "3 × 8 / Seite",
    "cue": "Hinteres Knie kontrolliert Richtung Boden · Oberkörper aufrecht. ⚡ Läufer-Block: renntagsrelevante Einbein-Exzentrik.",
    "tag": "Läufer-Block",
    "schulter": ""
   },
   {
    "id": "R2-6",
    "name": "Soleus-Wadenheber sitzend (Knie gebeugt)",
    "dosis": "3 × 12–15 / Seite",
    "cue": "KB auf dem Knie · langsam · voller Weg. ⚡ Läufer-Block: Der Soleus trägt beim Laufen die Hauptlast — wird nur bei gebeugtem Knie trainiert.",
    "tag": "Läufer-Block",
    "schulter": ""
   }
  ]
 },
 {
  "id": "kraft-a",
  "name": "Kraft A",
  "untertitel": "Beine und Power",
  "gruppe": "K · Laufkraft",
  "dauer": "45–55 min",
  "equipment": "Kettlebell · freie Fläche",
  "fokus": "Schnellkraft und Laufökonomie",
  "warmup": "5 Min locker + Sprunggelenk und Hüfte mobilisieren",
  "pause": "Power 2 Min, Kraft 2 Min",
  "finisher": "Plank 3 × 40 s",
  "uebungen": [
   {
    "id": "KA-1",
    "name": "Ankle Hops",
    "dosis": "2 × 15 s",
    "cue": "Kurzer Bodenkontakt, Knie fast gestreckt.",
    "tag": "Power",
    "schulter": ""
   },
   {
    "id": "KA-2",
    "name": "Countermovement Jump",
    "dosis": "3 × 5",
    "cue": "Maximal hoch, weich landen, jeder Sprung mit voller Absicht.",
    "tag": "Power",
    "schulter": ""
   },
   {
    "id": "KA-3",
    "name": "Einbeinige Sprünge seitlich",
    "dosis": "2 × 6 / Seite",
    "cue": "Landung 1 s stabilisieren, Knie über dem Fuss.",
    "tag": "Power",
    "schulter": ""
   },
   {
    "id": "KA-4",
    "name": "Kettlebell-Swing",
    "dosis": "4 × 8",
    "cue": "Hüftexplosion, Glocke fliegt, Arme führen nur.",
    "tag": "Schnellkraft",
    "schulter": ""
   },
   {
    "id": "KA-5",
    "name": "Goblet-Squat",
    "dosis": "3 × 6",
    "cue": "Zügig hoch, 3 s runter.",
    "tag": "Kraft",
    "schulter": ""
   },
   {
    "id": "KA-6",
    "name": "Einbeiniges RDL",
    "dosis": "3 × 8 / Seite",
    "cue": "Kontrolliert – Absicherung, kein Power-Reiz.",
    "tag": "Kraft",
    "schulter": ""
   },
   {
    "id": "KA-7",
    "name": "Wadenheben zügig",
    "dosis": "3 × 12",
    "cue": "Schnell hoch, kontrolliert runter, volle Amplitude.",
    "tag": "Kraft",
    "schulter": ""
   }
  ]
 },
 {
  "id": "kraft-b",
  "name": "Kraft B",
  "untertitel": "Oberkörper und OAP · keine Beine",
  "gruppe": "K · Laufkraft",
  "dauer": "40–50 min",
  "equipment": "Klimmzugstange · Ringe",
  "fokus": "Kraft halten ohne die Beine zu belasten",
  "warmup": "Scapular Circles + Arm CARs + Dead Hang 20 s × 2",
  "pause": "2 Min",
  "finisher": "Side-Plank 3 × 40 s / Seite",
  "uebungen": [
   {
    "id": "KB-1",
    "name": "Klimmzug volle ROM",
    "dosis": "4 × 6",
    "cue": "Unten ganz strecken, oben Brust zur Stange.",
    "tag": "Zug",
    "schulter": ""
   },
   {
    "id": "KB-2",
    "name": "Einarmig negativ ablassen",
    "dosis": "3 × 3 / Seite",
    "cue": "5 s Abwärtsphase.",
    "tag": "OAP",
    "schulter": "⚠️ Betroffene Seite nur schmerzfrei"
   },
   {
    "id": "KB-3",
    "name": "Pelican Curl",
    "dosis": "2 × 3–5",
    "cue": "Konservativ steigern, Ellbogen kontrolliert.",
    "tag": "OAP",
    "schulter": "⚠️ ROM reduzieren bei Reizung"
   },
   {
    "id": "KB-4",
    "name": "Ring-Dips",
    "dosis": "3 × 8",
    "cue": "Nur so tief, wie die Schulter ruhig bleibt.",
    "tag": "Push",
    "schulter": "⚠️ Tiefe anpassen"
   },
   {
    "id": "KB-5",
    "name": "Ring-Rows",
    "dosis": "3 × 10",
    "cue": "Skapula zuerst, dann Arm.",
    "tag": "Zug",
    "schulter": ""
   },
   {
    "id": "KB-6",
    "name": "Ring Face Pull",
    "dosis": "3 × 12",
    "cue": "Aussenrotation am Ende halten.",
    "tag": "Schulter Schutz",
    "schulter": ""
   },
   {
    "id": "KB-7",
    "name": "Hanging Leg Raise",
    "dosis": "3 × 8",
    "cue": "Becken kippen, nicht schwingen.",
    "tag": "Rumpf",
    "schulter": ""
   }
  ]
 }
];
