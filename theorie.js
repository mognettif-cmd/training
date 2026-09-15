/* Theorie-Modul für die Trainings-App – Version 2
 * Drop-in, vanilla JS, kein Build-Schritt, keine Abhängigkeiten.
 *
 * Einbau in index.html:
 *   1) Script-Tag mit src="theorie.js" vor dem schliessenden body-Tag einbinden
 *   2) Container anlegen, z. B. ein div mit id="tab-theorie"
 *   3) Theorie.mount('tab-theorie');
 *
 * Themen sind Daten, kein Code. Neues Thema entweder unten in
 * DEFAULT_THEMEN ergänzen (wird mit der App ausgeliefert) oder in der
 * App über «Neues Thema» erfassen (bleibt lokal auf dem Gerät).
 * Lokal bearbeitete Themen überschreiben den Auslieferungsstand und
 * lassen sich einzeln zurücksetzen.
 */
(function (global) {
  'use strict';

  var STORE_KEY = 'theorie_v1';
  var LOG_KEY = 'theorie_log_v1';

  /* ---------- Speicher (fällt auf RAM zurück, wenn localStorage blockt) ---------- */
  var mem = {};
  var store = {
    get: function (k, fallback) {
      try {
        var raw = global.localStorage.getItem(k);
        return raw ? JSON.parse(raw) : fallback;
      } catch (e) {
        return k in mem ? mem[k] : fallback;
      }
    },
    set: function (k, v) {
      mem[k] = v;
      try { global.localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* RAM-Fallback */ }
    }
  };

  /* ---------- Inhalte ---------- */
  var DEFAULT_THEMEN = [

    /* ============================ 1 GRUNDLAGEN ============================ */
    {
      id: 'grundlagen',
      titel: 'Trainingsgrundlagen',
      kurz: 'Reiz, Anpassung, Progression – die Regeln, die für jede Trainingsform gelten.',
      stand: '2026-09-14',
      abschnitte: [
        {
          h: 'Reiz und Anpassung',
          p: 'Anpassung braucht einen Reiz, der über dem Gewohnten liegt, und danach Erholung. Das Superkompensationsbild ist dafür ein brauchbares Denkmodell, aber kein Naturgesetz: in der Realität überlagern sich Reize aus mehreren Einheiten, und die Kurve lässt sich nicht auf den Tag genau planen.'
        },
        {
          h: 'Die sechs Prinzipien',
          liste: [
            'Überlastung: ohne Steigerung über das Gewohnte hinaus keine Anpassung.',
            'Progression: pro Zyklus eine Variable steigern – Last, Wiederholungen, Sätze, Tempo oder Umfang. Nicht alles gleichzeitig.',
            'Spezifität: trainiert wird, was gefordert wird. Ein Halbmarathon braucht Kilometer im Zieltempo, kein Zirkeltraining.',
            'Reversibilität: Ausdauer verliert man schneller als Kraft; Kraft hält über mehrere Wochen erstaunlich gut.',
            'Individualität: die Streuung zwischen Personen ist gross. Der Plan ist eine Hypothese, die Verlaufsdaten korrigieren sie.',
            'Ermüdung ist Teil des Reizes, nicht das Ziel. Wer jede Einheit ausreizt, misst Erschöpfung statt Fortschritt.'
          ]
        },
        {
          h: 'Steuerung',
          liste: [
            'Innere Last: RPE (Anstrengung 1–10) und RIR (Wiederholungen in Reserve) – simpel und für die meisten Zwecke ausreichend.',
            'Äussere Last: kg mal Wiederholungen mal Sätze, Kilometer, Bodenkontakte, Zeit pro Intensitätszone.',
            'Regel: eine Steuergrösse pro Trainingsform festlegen und konsequent führen. Zwei ungeführte Grössen sind schlechter als eine geführte.'
          ]
        },
        {
          h: 'Periodisierung',
          p: 'Über Wochen wird die Betonung verschoben: erst Umfang und Technik, dann Intensität, dann Spezifik. Alle drei bis fünf Wochen eine Entlastungswoche mit rund 50–60 Prozent des Umfangs. Vor einem Wettkampf wird der Umfang reduziert und die Intensität gehalten – Tapering.'
        },
        {
          h: 'Wie schnell etwas kommt',
          liste: [
            'Koordination und Technik: Tage bis Wochen.',
            'Neuronale Kraftgewinne: 2–6 Wochen.',
            'Muskelquerschnitt: ab etwa 6–8 Wochen sichtbar.',
            'Sehnen- und Knochenanpassung: Monate – deshalb hinkt die Belastbarkeit der Leistungsfähigkeit hinterher. Häufigste Verletzungsursache bei Motivierten.'
          ]
        }
      ],
      quellen: [
        { t: 'ACSM Position Stand: Progression Models in Resistance Training (2009)', url: 'https://pubmed.ncbi.nlm.nih.gov/19204579/' }
      ],
      einheit: {
        name: 'Standortbestimmung',
        wann: 'Alle 8–12 Wochen, ausgeruht, immer gleiche Reihenfolge und Tageszeit',
        hinweis: 'Ohne Ausgangswerte ist Progression Gefühlssache. Werte in die Notiz schreiben, dann sind sie im Log vergleichbar.',
        bloecke: [
          {
            titel: 'Test',
            uebungen: [
              { id: 'g-t1', name: 'Countermovement Jump', dosis: '3 Versuche, bester zählt', hinweis: 'Sprunghöhe – Schnellkraft' },
              { id: 'g-t2', name: 'Klimmzüge maximal', dosis: '1 Satz bis 1 Wdh. in Reserve', hinweis: 'Oberkörperkraft, Bezug OAP' },
              { id: 'g-t3', name: 'Einbeinstand mit geschlossenen Augen', dosis: 'pro Seite Zeit bis zum Ausgleichsschritt', hinweis: 'Gleichgewicht' },
              { id: 'g-t4', name: '3-km-Testlauf', dosis: 'gleichmässig, maximal', hinweis: 'Schätzt Schwellentempo – gleiche Strecke verwenden' },
              { id: 'g-t5', name: 'Körpergewicht und Ruhepuls', dosis: 'morgens, nüchtern', hinweis: 'Kontextwerte' }
            ]
          }
        ]
      }
    },

    /* ============================= 2 AUSDAUER ============================= */
    {
      id: 'ausdauer',
      titel: 'Ausdauer',
      kurz: 'VO2max, Schwelle, Laufökonomie – und warum das meiste langsam sein muss.',
      stand: '2026-09-14',
      abschnitte: [
        {
          h: 'Was die Leistung begrenzt',
          liste: [
            'VO2max: die Obergrenze der Sauerstoffaufnahme. Bestimmt das Dach, nicht das Ergebnis.',
            'Anaerobe Schwelle: der Anteil der VO2max, der über längere Zeit gehalten werden kann. Für Wettkämpfe ab 30 Minuten die wichtigste Grösse.',
            'Laufökonomie: der Sauerstoffbedarf bei gegebenem Tempo. Reagiert auf Krafttraining und Plyometrie, kaum auf mehr Kilometer.'
          ]
        },
        {
          h: 'Drei Intensitätszonen',
          liste: [
            'Zone 1 locker: Sprechen in ganzen Sätzen möglich, unterhalb der ersten Schwelle.',
            'Zone 2 mittel: das gefühlt produktive Graugebiet zwischen den Schwellen – kurze Sätze noch möglich.',
            'Zone 3 hart: oberhalb der zweiten Schwelle, nur einzelne Wörter.',
            'Der Sprechtest genügt zur Steuerung; die Uhr ist Zusatzinformation, nicht die Wahrheit.'
          ]
        },
        {
          h: 'Verteilung der Intensität',
          p: 'Das polarisierte Modell verteilt rund 75–80 Prozent des Umfangs auf Zone 1 und 15–20 Prozent auf Zone 3, mit wenig dazwischen. In der Metaanalyse von Oliveira und Kollegen (2024) zeigte sich damit ein kleiner Vorteil bei der VO2peak, während Zeitfahrleistung und Zeit bis zur Erschöpfung gleichwertig blieben – der Vorteil fiel bei gut trainierten Athleten und kurzen Interventionen deutlicher aus. Praktisch wichtiger als das Etikett ist: locker wirklich locker, hart wirklich hart. Freizeitläuferinnen und -läufer landen sonst dauerhaft im Graugebiet.'
        },
        {
          h: 'Die Einheitstypen',
          liste: [
            'Langer Lauf: Zone 1, Umfangreiz, ab 75 Minuten. Für Wettkampfspezifik die letzten Kilometer im Zieltempo.',
            'Schwellenlauf: 20–40 Minuten Gesamtbelastung, in Blöcken von 6–15 Minuten, kurze Trabpausen.',
            'VO2max-Intervalle: 3–5 Minuten hart, Pause etwa gleich lang, 15–20 Minuten Gesamtbelastung.',
            'Lockerer Dauerlauf: Regeneration und Grundlage, immer Zone 1.'
          ]
        },
        {
          h: 'Steigerung und Grenzen',
          p: 'Der Umfang wird über Wochen gesteigert, nicht über Tage; die verbreitete Zehn-Prozent-Regel ist eine Faustregel ohne starke Datenbasis, aber als Bremse brauchbar. Die Belastbarkeit von Sehnen und Knochen hinkt der Ausdauerform nach – genau dort entstehen die typischen Laufverletzungen.'
        }
      ],
      quellen: [
        { t: 'Oliveira et al. (2024), Sports Medicine – Polarisiert vs. andere Intensitätsverteilungen', url: 'https://link.springer.com/article/10.1007/s40279-024-02034-z' },
        { t: 'Stöggl & Sperlich (2014), Front Physiol – Intensitätsverteilung bei gut Trainierten', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4621419/' }
      ],
      einheit: {
        name: 'Schwellenlauf 3 × 10 Minuten',
        wann: 'Mittwoch, Qualitätslauf – Woche 3 des Halbmarathonplans',
        hinweis: 'Zieltempo 6:15–6:25 min/km. Wenn der dritte Block mehr als 10 Sekunden langsamer wird, war der Einstieg zu schnell.',
        bloecke: [
          {
            titel: 'Einlaufen',
            uebungen: [
              { id: 'a-w1', name: 'Lockeres Traben', dosis: '12 Min, 7:30–7:45', hinweis: 'Zone 1, Sprechtest' },
              { id: 'a-w2', name: 'Steigerungsläufe', dosis: '3 × 20 s', hinweis: 'Bis knapp unter Renntempo, volle Trabpause' }
            ]
          },
          {
            titel: 'Hauptteil',
            uebungen: [
              { id: 'a-h1', name: 'Block 1', dosis: '10 Min bei 6:15–6:25, danach 2 Min traben', hinweis: 'Bewusst 5 s zu langsam starten' },
              { id: 'a-h2', name: 'Block 2', dosis: '10 Min bei 6:15–6:25, danach 2 Min traben', hinweis: 'Atmung rhythmisch halten' },
              { id: 'a-h3', name: 'Block 3', dosis: '10 Min bei 6:15–6:25', hinweis: 'Sollte hart, aber kontrolliert enden' }
            ]
          },
          {
            titel: 'Auslaufen',
            uebungen: [
              { id: 'a-c1', name: 'Auslaufen', dosis: '8–10 Min locker', hinweis: 'Tempi und Gefühl direkt danach notieren' }
            ]
          }
        ]
      }
    },

    /* =============================== 3 KRAFT ============================== */
    {
      id: 'kraft',
      titel: 'Kraft',
      kurz: 'Maximalkraft: schwer, wenige Wiederholungen, lange Pausen, saubere Technik.',
      stand: '2026-09-14',
      abschnitte: [
        {
          h: 'Was trainiert wird',
          p: 'Maximalkraft entsteht aus zwei Quellen: neuronal – mehr motorische Einheiten, höhere Frequenzierung, bessere intermuskuläre Koordination – und morphologisch über den Muskelquerschnitt. In den ersten Wochen ist der Zuwachs fast vollständig neuronal. Deshalb wird man stärker, lange bevor man grösser wird.'
        },
        {
          h: 'Dosierung',
          liste: [
            'Last: 80–90 % 1RM, bei Fortgeschrittenen auch darüber.',
            'Wiederholungen: 1–6, mit 1–2 Wiederholungen in Reserve.',
            'Sätze: 3–5 pro Übung.',
            'Pause: 3–5 Minuten. Kürzere Pausen kosten hier direkt Qualität.',
            'Frequenz: 2–3× pro Woche pro Bewegungsmuster; für Kraft bringt mehr Frequenz bei gleichem Volumen einen kleinen zusätzlichen Effekt.',
            'Übungen: wenige, mehrgelenkige, technisch beherrschte.'
          ]
        },
        {
          h: 'Progression',
          p: 'Doppelte Progression: erst Wiederholungen innerhalb eines Zielbereichs steigern, dann die Last erhöhen und wieder am unteren Ende beginnen. Die Volumen-Dosis-Wirkung gilt auch für Kraft, allerdings mit deutlich stärker abnehmendem Grenznutzen als bei der Hypertrophie – viel Volumen bringt hier wenig zusätzlich.'
        },
        {
          h: 'Bezug zu allem anderen',
          p: 'Kraft ist die Basis für Power: wer zu wenig Kraft hat, hat kein Fundament, auf dem Geschwindigkeit trainiert werden kann. Bei Ausdauersportlern verbessert schweres Krafttraining die Laufökonomie, ohne die Ausdauer zu beeinträchtigen – vorausgesetzt, die harten Läufe bleiben harte Läufe und die Kraft findet nicht am Vortag statt.'
        }
      ],
      quellen: [
        { t: 'Pelland et al. (2024/25) – Dosis-Wirkung von Volumen und Frequenz auf Kraft und Hypertrophie', url: 'https://pubmed.ncbi.nlm.nih.gov/41343037/' },
        { t: 'ACSM Position Stand: Progression Models in Resistance Training (2009)', url: 'https://pubmed.ncbi.nlm.nih.gov/19204579/' }
      ],
      einheit: {
        name: 'Kraft – schwer, Ganzkörper',
        wann: 'Montag oder Freitag, mindestens 24 h Abstand zum Qualitätslauf',
        hinweis: 'Pausen wirklich ausnutzen. Die Einheit dauert rund 60 Minuten, davon die Hälfte Pause – das ist so gewollt.',
        bloecke: [
          {
            titel: 'Vorbereiten',
            uebungen: [
              { id: 'k-w1', name: 'Aufwärmen allgemein', dosis: '5 Min Velo oder Seilspringen', hinweis: '' },
              { id: 'k-w2', name: 'Aufwärmsätze der ersten Übung', dosis: '2–3 Sätze mit steigender Last', hinweis: 'Nie kalt in den ersten Arbeitssatz' }
            ]
          },
          {
            titel: 'Hauptteil',
            uebungen: [
              { id: 'k-h1', name: 'Kniebeuge', dosis: '4 × 5, Pause 3 Min', hinweis: 'Letzter Satz mit 1–2 Wdh. in Reserve' },
              { id: 'k-h2', name: 'Klimmzug mit Zusatzlast', dosis: '5 × 3, Pause 3 Min', hinweis: 'OAP-Vorbereitung: volle Streckung unten' },
              { id: 'k-h3', name: 'Rumänisches Kreuzheben', dosis: '3 × 6, Pause 3 Min', hinweis: 'Rücken neutral, Bewegung aus der Hüfte' },
              { id: 'k-h4', name: 'Schulterdrücken stehend', dosis: '3 × 5, Pause 2–3 Min', hinweis: 'Rippen unten lassen, kein Hohlkreuz' }
            ]
          },
          {
            titel: 'Abschluss',
            uebungen: [
              { id: 'k-a1', name: 'Pallof-Press', dosis: '3 × 10 pro Seite', hinweis: 'Antirotation, ruhig atmen' },
              { id: 'k-a2', name: 'Wadenheben schwer', dosis: '3 × 8', hinweis: 'Achillessehne – zahlt direkt aufs Laufen ein' }
            ]
          }
        ]
      }
    },

    /* ========================== 4 MUSKELWACHSTUM ========================== */
    {
      id: 'muskelwachstum',
      titel: 'Muskelwachstum',
      kurz: 'Hypertrophie: genug Volumen, nahe genug ans Muskelversagen, genug Protein.',
      stand: '2026-09-14',
      abschnitte: [
        {
          h: 'Der Auslöser',
          p: 'Der dominante Reiz ist mechanische Spannung in der einzelnen Muskelfaser über viele Wiederholungen hinweg. Entscheidend ist deshalb nicht die Last an sich, sondern wie nah der Satz ans Muskelversagen führt – dort sind alle motorischen Einheiten rekrutiert und die Wiederholungen laufen zwangsläufig langsam.'
        },
        {
          h: 'Volumen',
          p: 'Die umfassendste Metaregression bislang (Pelland et al.) zeigt: Muskelmasse und Kraft nehmen mit steigendem Wochenvolumen zu, mit abnehmendem Grenznutzen – bei der Kraft deutlich ausgeprägter als bei der Masse. Praktisch heisst das: rund 10 harte Sätze pro Muskelgruppe und Woche als solide Basis, mehr bringt weiter etwas, aber jede zusätzliche Serie weniger als die vorherige. Die Frequenz spielt bei gleichem Volumen für die Hypertrophie kaum eine Rolle – zwei Einheiten sind angenehmer als eine, aber nicht überlegen.'
        },
        {
          h: 'Wiederholungen und Nähe zum Versagen',
          liste: [
            'Wiederholungsbereich 5–30 – bei gleicher Nähe zum Versagen vergleichbar wirksam.',
            'Praktikabel: 6–12 Wiederholungen, mit 0–3 Wiederholungen in Reserve.',
            'Muskelversagen in jedem Satz ist nicht nötig und erhöht nur die Ermüdung.',
            'Pause mindestens 2 Minuten – kurze Pausen senken die Wiederholungszahl im Folgesatz und damit das effektive Volumen.',
            'Volle Bewegungsamplitude, besonders in der gedehnten Position.'
          ]
        },
        {
          h: 'Drumherum',
          liste: [
            'Protein rund 1,6 bis 2,2 g pro kg Körpergewicht und Tag.',
            'Leichter Kalorienüberschuss beim Aufbau; im Defizit ist Muskelerhalt realistisch, Aufbau nur bei Anfängern.',
            'Schlaf ist die am meisten unterschätzte Variable.',
            'Parallel viel Ausdauertraining dämpft den Aufbau an der Beinmuskulatur – bei einer Halbmarathonvorbereitung ist Erhalt das realistische Ziel.'
          ]
        }
      ],
      quellen: [
        { t: 'Pelland et al. (2024/25) – Dosis-Wirkung Volumen und Frequenz', url: 'https://pubmed.ncbi.nlm.nih.gov/41343037/' },
        { t: 'Schoenfeld et al. (2017), J Sports Sci – Wochenvolumen und Muskelmasse', url: 'https://pubmed.ncbi.nlm.nih.gov/27433992/' }
      ],
      einheit: {
        name: 'Hypertrophie Oberkörper',
        wann: 'Freitag, Block Kraft B – belastet die Beine nicht',
        hinweis: 'Ziel ist Volumen bei guter Ausführung: 0–2 Wiederholungen in Reserve, Pausen mitzählen.',
        bloecke: [
          {
            titel: 'Ziehen',
            uebungen: [
              { id: 'm-z1', name: 'Klimmzug', dosis: '4 × 6–10, Pause 2 Min', hinweis: 'Volle Streckung unten, kontrolliert ablassen' },
              { id: 'm-z2', name: 'Einarmiges Rudern', dosis: '3 × 10 pro Seite, Pause 2 Min', hinweis: 'Schulterblatt zuerst, dann Arm' },
              { id: 'm-z3', name: 'Bizeps-Curl', dosis: '3 × 10–12', hinweis: 'Gestreckte Position mitnehmen' }
            ]
          },
          {
            titel: 'Drücken',
            uebungen: [
              { id: 'm-d1', name: 'Dips oder Bankdrücken', dosis: '4 × 8, Pause 2 Min', hinweis: 'Tiefe nur so weit, wie die Schulter es ruhig zulässt' },
              { id: 'm-d2', name: 'Seitheben', dosis: '3 × 12–15', hinweis: 'Leicht, sauber, bis es brennt' }
            ]
          },
          {
            titel: 'Rumpf',
            uebungen: [
              { id: 'm-r1', name: 'Hanging Leg Raise', dosis: '3 × 8–12', hinweis: 'Becken kippen, nicht schwingen' },
              { id: 'm-r2', name: 'Side-Plank', dosis: '3 × 40 s pro Seite', hinweis: '' }
            ]
          }
        ]
      }
    },

    /* =========================== 5 SCHNELLKRAFT =========================== */
    {
      id: 'power',
      titel: 'Schnellkraft und Power',
      kurz: 'Kraft mal Geschwindigkeit – schnell bewegen statt schwer heben.',
      stand: '2026-09-14',
      abschnitte: [
        {
          h: 'Prinzip',
          p: 'Power ist Kraft mal Geschwindigkeit. Trainiert wird nicht die maximale Last, sondern die Rate of Force Development – wie schnell Kraft aufgebaut wird. Entscheidend ist deshalb die Bewegungsabsicht: die konzentrische Phase so schnell wie möglich, auch wenn die Last leicht ist.'
        },
        {
          h: 'Dosierung',
          liste: [
            'Last: 30–60 % 1RM für Geschwindigkeit, bis 70 % für Kraftbetonung. Untrainierte starten mit Körpergewicht.',
            'Wiederholungen: 5–8. Satz beenden, sobald die Bewegung sichtbar langsamer wird (Velocity Loss ca. 10–20 %).',
            'Sätze: 3–4.',
            'Pause: 2–3 Minuten, vollständig. Zu kurze Pausen machen aus Power-Training Ausdauertraining.',
            'Tempo: konzentrisch maximal schnell, exzentrisch kontrolliert über rund 2 Sekunden.',
            'Platz in der Einheit: direkt nach dem Aufwärmen, ausgeruht, vor der Kraftarbeit.',
            'Frequenz: 2–3× pro Woche.'
          ]
        },
        {
          h: 'Voraussetzung und Progression',
          p: 'Zuerst Technik und Kraftbasis, dann Geschwindigkeit, dann Last. Die Reihenfolge lautet: stabil und kontrolliert → schnell konzentrisch → leichte Zusatzlast → Sprung- und Wurfvarianten. Landekontrolle kommt immer vor Sprunghöhe.'
        },
        {
          h: 'Im Lauftraining',
          p: 'Ziel ist Sehnensteifigkeit und Laufökonomie, nicht Maximalkraft. Kettlebell-Swings, Ankle Hops, Countermovement Jumps und einbeinige Sprünge. Steuergrösse ist die Zahl der Bodenkontakte pro Einheit, nicht die Satzzahl. In der Wettkampfvorbereitung nichts Neues mehr aufbauen; die letzte plyometrische Einheit liegt rund 10 Tage vor dem Wettkampf.'
        },
        {
          h: 'Bei älteren Menschen und in der Sturzprävention',
          liste: [
            'Power sagt Funktion und Sturzrisiko besser voraus als Maximalkraft und nimmt im Alter schneller ab.',
            '40–60 % 1RM, 8–10 Wiederholungen, konzentrisch schnell, exzentrisch langsam.',
            'Übungen: Sit-to-Stand schnell hoch und 3 s runter, Step-up, zügiges Wadenheben, Beinpresse explosiv.',
            'Dazu reaktives Stepping auf Signal (vorwärts, seitlich, rückwärts) für den Übertrag in die Sturzsituation.',
            '2–3× pro Woche über mindestens 12 Wochen, Haltemöglichkeit immer in Reichweite.'
          ]
        },
        {
          h: 'Nach Verletzung oder Operation',
          liste: [
            'Freigabe kriterienbasiert, nicht nach Wochen: schmerzarm, volle ROM, Kraft-LSI ≥ 70–80 %, keine Reizung oder Schwellung nach 24 h.',
            'Stufenfolge: beidbeinig → einbeinig, vertikal → horizontal und lateral, vorhersehbar → reaktiv.',
            'Steuerung über Bodenkontakte, 48 h Abstand zwischen zwei Einheiten.'
          ]
        }
      ],
      quellen: [
        { t: 'Skelton et al. (1994), Age and Ageing; Reid & Fielding (2012), Exerc Sport Sci Rev – Referenzen notiert, noch nicht nachgeschlagen', url: '' }
      ],
      einheit: {
        name: 'Power A – Laufkraft',
        wann: 'Montag, im Block Kraft A, direkt nach dem Aufwärmen',
        hinweis: 'Rund 80 Bodenkontakte. Bei Ermüdung oder unsauberer Landung Block 1 abbrechen. Letzte plyometrische Einheit vor dem Hallwilerseelauf: 30. September.',
        bloecke: [
          {
            titel: 'Aufwärmen (8 Min)',
            uebungen: [
              { id: 'p-warm-1', name: 'Lockeres Laufen oder Velo', dosis: '5 Min', hinweis: 'Zone 1' },
              { id: 'p-warm-2', name: 'Sprunggelenk und Hüfte mobilisieren', dosis: '3 Min', hinweis: 'Fussgelenkkreisen, Ausfallschritt mit Rotation' }
            ]
          },
          {
            titel: 'Block 1 – Plyometrie',
            uebungen: [
              { id: 'p-plyo-1', name: 'Ankle Hops', dosis: '2 × 15 s, Pause 60 s', hinweis: 'Knie fast gestreckt, kurzer Bodenkontakt, Arbeit im Sprunggelenk' },
              { id: 'p-plyo-2', name: 'Countermovement Jump', dosis: '3 × 5, Pause 2 Min', hinweis: 'Maximal hoch, weich landen, jeder Sprung mit voller Absicht' },
              { id: 'p-plyo-3', name: 'Einbeinige Sprünge seitlich', dosis: '2 × 6 pro Seite, Pause 90 s', hinweis: 'Landung 1 s stabilisieren, Knie über dem Fuss' }
            ]
          },
          {
            titel: 'Block 2 – Schnellkraft',
            uebungen: [
              { id: 'p-kraft-1', name: 'Kettlebell-Swing', dosis: '4 × 8, Pause 2 Min', hinweis: 'Hüftexplosion, Glocke fliegt, Arme führen nur' },
              { id: 'p-kraft-2', name: 'Goblet-Squat', dosis: '3 × 6, Pause 2 Min', hinweis: 'Zügig hoch, 3 s runter' },
              { id: 'p-kraft-3', name: 'Einbeiniges RDL', dosis: '3 × 8 pro Seite', hinweis: 'Bewusst kontrolliert – kein Power-Reiz, sondern Absicherung' },
              { id: 'p-kraft-4', name: 'Wadenheben zügig', dosis: '3 × 12', hinweis: 'Schnell hoch, kontrolliert runter, volle Amplitude' }
            ]
          },
          {
            titel: 'Abschluss',
            uebungen: [
              { id: 'p-ab-1', name: 'Plank', dosis: '3 × 40 s', hinweis: 'Becken stabil, nicht durchhängen' }
            ]
          }
        ]
      }
    },

    /* ============================ 6 PLYOMETRIE ============================ */
    {
      id: 'plyometrie',
      titel: 'Plyometrie',
      kurz: 'Der Dehnungs-Verkürzungs-Zyklus – gesteuert über Bodenkontakte, nicht über Sätze.',
      stand: '2026-09-14',
      abschnitte: [
        {
          h: 'Was dabei passiert',
          p: 'Plyometrie nutzt den Dehnungs-Verkürzungs-Zyklus: eine schnelle exzentrische Vordehnung, unmittelbar gefolgt von der konzentrischen Aktion. Sehne und Muskel arbeiten dabei wie eine Feder. Kurz ist der Zyklus unter etwa 250 Millisekunden Bodenkontakt – Sprint, Hops, Sprünge aus dem Fussgelenk; lang darüber – Countermovement Jump, Absprung aus der Hocke. Trainiert wird das, was man braucht: Laufen lebt vom kurzen Zyklus.'
        },
        {
          h: 'Wirkung',
          liste: [
            'Höhere Sehnensteifigkeit und bessere Energierückgabe.',
            'Bessere Laufökonomie – einer der wenigen Wege, schneller zu werden, ohne mehr zu laufen.',
            'Höhere Sprung- und Sprintleistung.',
            'Knochendichte: Sprungbelastung ist einer der stärksten osteogenen Reize.'
          ]
        },
        {
          h: 'Dosierung über Bodenkontakte',
          liste: [
            'Ein beidbeiniger Sprung mit Landung zählt zwei Kontakte, ein einbeiniger einen.',
            'Einsteiger 80–100 Kontakte pro Einheit, Fortgeschrittene 100–120, Geübte 120–140.',
            '2–3 Einheiten pro Woche, dazwischen 48–72 Stunden.',
            'Kurze Sätze: 2–6 Kontakte pro Satz, volle Pause – Qualität geht vor Menge.',
            'Abbruch, sobald die Landung lauter oder die Bewegung unsauber wird. Müde Plyometrie ist nur noch Belastung.'
          ]
        },
        {
          h: 'Progression',
          p: 'Beidbeinig vor einbeinig, am Ort vor in Bewegung, vertikal vor horizontal und lateral, submaximal vor maximal, vorhersehbar vor reaktiv. Depth Jumps stehen ganz am Ende und sind für die meisten Ziele verzichtbar. Landekontrolle wird immer separat und zuerst geübt.'
        },
        {
          h: 'Wie belastbar ist die Evidenz',
          p: 'Dass Plyometrie wirkt, ist gut belegt. Die konkreten Zahlen zu Kontakten, Sätzen und Progression stammen dagegen überwiegend aus Erfahrungswissen und Lehrbüchern, nicht aus kontrollierten Dosisstudien – ein publizierter Konsens fehlt. Die Werte oben sind brauchbare Leitplanken, kein Naturgesetz.'
        }
      ],
      quellen: [
        { t: 'Übersicht Dosierung und Erholungsabstände (NSCA-nahe Praxisliteratur)', url: 'https://cdn3.sportngin.com/attachments/document/0041/5798/PlyometricTraining.pdf' },
        { t: 'Plyometrie für Läufer – inkl. Hinweis auf die schwache Evidenzlage der Dosierungsempfehlungen', url: 'https://perfectstridept.com/plyometrics-for-runners/' }
      ],
      einheit: {
        name: 'Plyometrie – Einstieg',
        wann: 'Nach dem Aufwärmen, ausgeruht, 48 h Abstand zur nächsten Sprungeinheit',
        hinweis: 'Rund 90 Bodenkontakte. Weiche Landung, leises Aufkommen – Lautstärke ist die einfachste Qualitätskontrolle.',
        bloecke: [
          {
            titel: 'Vorbereiten',
            uebungen: [
              { id: 'y-w1', name: 'Lockeres Laufen', dosis: '5 Min', hinweis: '' },
              { id: 'y-w2', name: 'Landetechnik üben', dosis: '2 × 5 Absprünge von 20 cm mit Landung halten', hinweis: 'Hüfte zurück, Knie über dem Fuss, 2 s stehen bleiben' }
            ]
          },
          {
            titel: 'Kurzer Zyklus',
            uebungen: [
              { id: 'y-k1', name: 'Ankle Hops am Ort', dosis: '3 × 10, Pause 60 s', hinweis: 'Kurzer Bodenkontakt, Knie fast gestreckt' },
              { id: 'y-k2', name: 'Pogo-Hops vorwärts', dosis: '3 × 8, Pause 60 s', hinweis: 'Kleine Amplitude, hohe Frequenz' }
            ]
          },
          {
            titel: 'Langer Zyklus',
            uebungen: [
              { id: 'y-l1', name: 'Countermovement Jump', dosis: '3 × 4, Pause 90 s', hinweis: 'Jeder Sprung maximal' },
              { id: 'y-l2', name: 'Weitsprung aus dem Stand', dosis: '3 × 3, Pause 90 s', hinweis: 'Horizontale Kraftrichtung, Landung stabilisieren' }
            ]
          },
          {
            titel: 'Einbeinig',
            uebungen: [
              { id: 'y-e1', name: 'Einbeinige Hops vorwärts', dosis: '2 × 6 pro Seite, Pause 90 s', hinweis: 'Erst wenn beidbeinig sauber sitzt' },
              { id: 'y-e2', name: 'Seitliche Sprünge über eine Linie', dosis: '2 × 8 pro Seite', hinweis: 'Kontrolliert, kein Wegknicken des Knies' }
            ]
          }
        ]
      }
    },

    /* =========================== 7 KOORDINATION =========================== */
    {
      id: 'koordination',
      titel: 'Koordination und Gleichgewicht',
      kurz: 'Lernen statt konditionieren – Aufgabe, Variation und Aufmerksamkeit entscheiden.',
      stand: '2026-09-14',
      abschnitte: [
        {
          h: 'Was Koordination ist',
          p: 'Koordination ist kein konditioneller Faktor, sondern motorisches Lernen. Der Reiz ist nicht Ermüdung, sondern die Aufgabe. Deshalb wird koordinativ im ausgeruhten Zustand trainiert, am Anfang der Einheit, in kurzen Blöcken und mit voller Aufmerksamkeit. Was zählt, ist nicht die Leistung im Training, sondern was Tage später noch abrufbar ist.'
        },
        {
          h: 'Die vier Stellschrauben',
          liste: [
            'Aufmerksamkeitsfokus: extern schlägt intern. «Stoss den Boden weg» wirkt besser als «streck dein Knie».',
            'Variation: unterschiedliche Ausführungen, Winkel, Untergründe und Tempi statt stur derselben Wiederholung.',
            'Durchmischung: verschiedene Aufgaben abwechselnd üben. Das fühlt sich im Training schlechter an, hält aber länger – dieser Effekt ist gut untersucht und in seiner Grösse derzeit fachlich umstritten.',
            'Rückmeldung: sparsam und verzögert. Eine Frage («Wo hast du das gespürt?») lernt besser als eine Korrektur.'
          ]
        },
        {
          h: 'Gleichgewicht steigern',
          liste: [
            'Unterstützungsfläche verkleinern: Füsse zusammen → Tandemstand → Einbeinstand.',
            'Sinnesinformation wegnehmen: Augen zu, Kopfdrehungen, weicher Untergrund.',
            'Aufgabe daraufsetzen: Ball fangen, etwas tragen, rechnen oder sprechen (Dual-Task).',
            'Reaktiv werden: Stoss von aussen, Stolperschritt, Richtungswechsel auf Zuruf.',
            'Richtig dosiert wackelt es sichtbar, ohne dass ein Sturz droht.'
          ]
        },
        {
          h: 'Sturzprävention – die Dosis',
          p: 'Die Metaanalyse von Sherrington und Kollegen (2017) über 99 Programme zeigt: Training senkt die Sturzrate bei selbstständig lebenden älteren Menschen um rund 21 Prozent. Programme, die das Gleichgewicht wirklich herausfordern und mehr als drei Stunden pro Woche umfassen, kommen zusammen auf rund 39 Prozent. Diese beiden Merkmale erklärten den grössten Teil der Unterschiede zwischen den Studien. Dazu: dauerhaft, nicht als Block über zwölf Wochen.'
        },
        {
          h: 'Beim Laufen',
          p: 'Lauftechnik reagiert auf externe Hinweise und auf Variation – Barfussabschnitte, Trail, Bergauf-Bergab, Frequenzvorgaben. Direkte Umstellungen des Laufstils sind riskant, weil sie die Belastung sofort umverteilen, während die Gewebe erst über Monate nachziehen.'
        }
      ],
      quellen: [
        { t: 'Sherrington et al. (2017), Br J Sports Med – Training zur Sturzprävention, Dosis und Balance-Anforderung', url: 'https://pubmed.ncbi.nlm.nih.gov/27707740/' },
        { t: 'Kontextuelle Interferenz – systematische Übersicht und Metaanalyse (2024)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11237090/' },
        { t: 'Chua et al. (2019), Hum Mov Sci – Variation fördert externen Aufmerksamkeitsfokus', url: 'https://pubmed.ncbi.nlm.nih.gov/30831389/' }
      ],
      einheit: {
        name: 'Koordination und Lauftechnik',
        wann: 'Ausgeruht, vor einem lockeren Lauf – rund 20 Minuten',
        hinweis: 'Keine Ermüdung suchen. Sobald die Ausführung zerfällt, ist der Lerneffekt weg.',
        bloecke: [
          {
            titel: 'Gleichgewicht',
            uebungen: [
              { id: 'c-g1', name: 'Einbeinstand mit Kopfdrehungen', dosis: '3 × 30 s pro Seite', hinweis: 'Blick mitnehmen, Fuss aktiv greifen lassen' },
              { id: 'c-g2', name: 'Einbeinstand mit Ballwürfen an die Wand', dosis: '2 × 45 s pro Seite', hinweis: 'Externer Fokus: auf den Ball, nicht auf das Bein' },
              { id: 'c-g3', name: 'Reaktives Stepping', dosis: '3 × 8 Schritte auf Zuruf oder Zufall', hinweis: 'Vorwärts, seitlich, rückwärts – schnell und sicher landen' }
            ]
          },
          {
            titel: 'Lauf-ABC',
            uebungen: [
              { id: 'c-l1', name: 'Fussgelenkarbeit (Ankling)', dosis: '3 × 20 m', hinweis: 'Kurzer Kontakt, Fuss unter dem Körper' },
              { id: 'c-l2', name: 'Kniehebelauf', dosis: '3 × 20 m', hinweis: '«Boden wegstossen» statt «Knie hoch»' },
              { id: 'c-l3', name: 'Anfersen', dosis: '2 × 20 m', hinweis: 'Locker, hohe Frequenz' },
              { id: 'c-l4', name: 'Steigerungsläufe', dosis: '3 × 60 m', hinweis: 'Technik ins Tempo mitnehmen' }
            ]
          },
          {
            titel: 'Variation',
            uebungen: [
              { id: 'c-v1', name: 'Barfuss auf Rasen traben', dosis: '4 × 1 Min', hinweis: 'Nur bei beschwerdefreien Füssen, langsam aufbauen' }
            ]
          }
        ]
      }
    }
  ];

  /* ---------- Datenzugriff ---------- */
  function alleThemen() {
    var eigene = store.get(STORE_KEY, []);
    var reihenfolge = [];
    var map = {};
    DEFAULT_THEMEN.forEach(function (t) { map[t.id] = t; reihenfolge.push(t.id); });
    eigene.forEach(function (t) {
      if (!map[t.id]) reihenfolge.push(t.id);
      map[t.id] = t;                                  // lokale Version gewinnt
    });
    return reihenfolge.map(function (id) { return map[id]; });
  }

  function themaSpeichern(thema) {
    var eigene = store.get(STORE_KEY, []).filter(function (t) { return t.id !== thema.id; });
    eigene.push(thema);
    store.set(STORE_KEY, eigene);
  }

  function themaZuruecksetzen(id) {
    store.set(STORE_KEY, store.get(STORE_KEY, []).filter(function (t) { return t.id !== id; }));
  }

  function logLesen() { return store.get(LOG_KEY, []); }

  function logSchreiben(eintrag) {
    var log = logLesen();
    log.unshift(eintrag);
    store.set(LOG_KEY, log.slice(0, 200));
  }

  /* ---------- Styles (zurückhaltend, erbt Schrift und Farbe der App) ---------- */
  var CSS = [
    '.th{font:inherit;color:inherit;line-height:1.55}',
    '.th *{box-sizing:border-box}',
    '.th-kopf{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:14px}',
    '.th-kopf h2{font-size:1.25rem;margin:0;font-weight:650}',
    '.th-karte{border:1px solid rgba(128,128,128,.28);border-radius:10px;padding:14px;margin-bottom:10px;cursor:pointer;background:transparent}',
    '.th-karte:hover,.th-karte:focus-visible{border-color:rgba(128,128,128,.6)}',
    '.th-karte h3{margin:0 0 4px;font-size:1rem;font-weight:650}',
    '.th-kurz{opacity:.72;font-size:.9rem}',
    '.th-meta{opacity:.55;font-size:.78rem;margin-top:8px}',
    '.th-abschnitt{padding:14px 0;border-top:1px solid rgba(128,128,128,.22)}',
    '.th-abschnitt h4{margin:0 0 6px;font-size:.95rem;font-weight:650}',
    '.th-abschnitt p{margin:0;max-width:68ch}',
    '.th-abschnitt ul{margin:0;padding-left:1.1em}',
    '.th-abschnitt li{margin-bottom:4px;max-width:68ch}',
    '.th-quellen a{color:inherit}',
    '.th-quellen li{font-size:.85rem;opacity:.8}',
    '.th-einheit{margin-top:16px;border:1px solid rgba(128,128,128,.28);border-radius:10px;padding:14px}',
    '.th-block{margin-top:12px}',
    '.th-block>strong{display:block;margin-bottom:6px;font-size:.9rem}',
    '.th-ue{display:flex;gap:10px;align-items:flex-start;padding:7px 0;border-top:1px dotted rgba(128,128,128,.3)}',
    '.th-ue input{margin-top:4px;width:18px;height:18px;flex:0 0 auto}',
    '.th-ue-name{font-weight:600}',
    '.th-ue-dosis{font-variant-numeric:tabular-nums}',
    '.th-ue-hinweis{opacity:.68;font-size:.85rem}',
    '.th-btn{font:inherit;font-size:.88rem;padding:7px 12px;border-radius:8px;border:1px solid rgba(128,128,128,.45);background:transparent;color:inherit;cursor:pointer}',
    '.th-btn:hover{border-color:rgba(128,128,128,.75)}',
    '.th-btn-prim{border-color:#14594d;background:#14594d;color:#fff}',
    '.th-btn-prim:hover{background:#0f4a40;border-color:#0f4a40}',
    '.th-leiste{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;align-items:center}',
    '.th-notiz{width:100%;margin-top:10px;padding:8px;border-radius:8px;border:1px solid rgba(128,128,128,.35);background:transparent;color:inherit;font:inherit;font-size:.9rem}',
    '.th-editor{width:100%;min-height:320px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.82rem;padding:10px;border-radius:8px;border:1px solid rgba(128,128,128,.35);background:transparent;color:inherit}',
    '.th-log{margin-top:16px;font-size:.85rem;opacity:.8}',
    '.th-log div{padding:3px 0}',
    '.th-hinweis{font-size:.85rem;opacity:.75;margin-top:8px;max-width:68ch}',
    '@media(max-width:420px){.th-ue{flex-wrap:wrap}}'
  ].join('\n');

  function styleEinfuegen() {
    if (document.getElementById('th-style')) return;
    var s = document.createElement('style');
    s.id = 'th-style';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* ---------- Hilfen ---------- */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function heute() { return new Date().toISOString().slice(0, 10); }
  function datumCH(iso) {
    var p = String(iso).split('-');
    return p.length === 3 ? p[2] + '.' + p[1] + '.' + p[0] : iso;
  }

  /* ---------- Ansichten ---------- */
  function renderListe(root) {
    root.innerHTML = '';
    var kopf = el('div', 'th-kopf');
    kopf.appendChild(el('h2', null, 'Theorie'));
    var neu = el('button', 'th-btn', 'Neues Thema');
    neu.onclick = function () { renderEditor(root, null); };
    kopf.appendChild(neu);
    root.appendChild(kopf);

    alleThemen().forEach(function (t) {
      var k = el('div', 'th-karte');
      k.tabIndex = 0;
      k.appendChild(el('h3', null, t.titel));
      k.appendChild(el('div', 'th-kurz', t.kurz || ''));
      var anzahl = t.einheit ? t.einheit.bloecke.reduce(function (n, b) { return n + b.uebungen.length; }, 0) : 0;
      k.appendChild(el('div', 'th-meta',
        (t.abschnitte ? t.abschnitte.length + ' Abschnitte' : 'keine Abschnitte') +
        (anzahl ? ' · Einheit mit ' + anzahl + ' Übungen' : '') +
        (t.stand ? ' · Stand ' + datumCH(t.stand) : '')));
      var oeffnen = function () { renderThema(root, t.id); };
      k.onclick = oeffnen;
      k.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); oeffnen(); } };
      root.appendChild(k);
    });

    var log = logLesen();
    if (log.length) {
      var box = el('div', 'th-log');
      box.appendChild(el('strong', null, 'Zuletzt absolviert'));
      log.slice(0, 5).forEach(function (e) {
        box.appendChild(el('div', null, datumCH(e.datum) + ' · ' + e.einheit + ' · ' + e.erledigt + '/' + e.total + ' Übungen' + (e.notiz ? ' · ' + e.notiz : '')));
      });
      root.appendChild(box);
    }
  }

  function renderThema(root, id) {
    var t = alleThemen().filter(function (x) { return x.id === id; })[0];
    if (!t) return renderListe(root);
    root.innerHTML = '';

    var kopf = el('div', 'th-kopf');
    kopf.appendChild(el('h2', null, t.titel));
    var zurueck = el('button', 'th-btn', 'Zurück');
    zurueck.onclick = function () { renderListe(root); };
    kopf.appendChild(zurueck);
    root.appendChild(kopf);

    (t.abschnitte || []).forEach(function (a) {
      var s = el('div', 'th-abschnitt');
      s.appendChild(el('h4', null, a.h));
      if (a.p) s.appendChild(el('p', null, a.p));
      if (a.liste) {
        var ul = el('ul');
        a.liste.forEach(function (li) { ul.appendChild(el('li', null, li)); });
        s.appendChild(ul);
      }
      root.appendChild(s);
    });

    if (t.quellen && t.quellen.length) {
      var q = el('div', 'th-abschnitt th-quellen');
      q.appendChild(el('h4', null, 'Quellen'));
      var ql = el('ul');
      t.quellen.forEach(function (x) {
        var li = el('li');
        if (x.url) {
          var a = el('a', null, x.t);
          a.href = x.url;
          a.target = '_blank';
          a.rel = 'noopener';
          li.appendChild(a);
        } else {
          li.textContent = x.t;
        }
        ql.appendChild(li);
      });
      q.appendChild(ql);
      root.appendChild(q);
    }

    if (t.einheit) root.appendChild(renderEinheit(t));

    var leiste = el('div', 'th-leiste');
    var bearbeiten = el('button', 'th-btn', 'Bearbeiten');
    bearbeiten.onclick = function () { renderEditor(root, t); };
    leiste.appendChild(bearbeiten);
    if (store.get(STORE_KEY, []).some(function (x) { return x.id === t.id; }) &&
        DEFAULT_THEMEN.some(function (d) { return d.id === t.id; })) {
      var reset = el('button', 'th-btn', 'Auf Auslieferungsstand zurücksetzen');
      reset.onclick = function () { themaZuruecksetzen(t.id); renderThema(root, t.id); };
      leiste.appendChild(reset);
    }
    root.appendChild(leiste);
  }

  function renderEinheit(t) {
    var e = t.einheit;
    var box = el('div', 'th-einheit');
    box.appendChild(el('h4', null, 'Trainingseinheit: ' + e.name));
    if (e.wann) box.appendChild(el('div', 'th-kurz', e.wann));
    if (e.hinweis) box.appendChild(el('div', 'th-hinweis', e.hinweis));

    var boxen = [];
    e.bloecke.forEach(function (b) {
      var bl = el('div', 'th-block');
      bl.appendChild(el('strong', null, b.titel));
      b.uebungen.forEach(function (u) {
        var row = el('div', 'th-ue');
        var cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.id = 'th-' + u.id;
        boxen.push(cb);
        var txt = el('div');
        var lab = document.createElement('label');
        lab.htmlFor = cb.id;
        lab.className = 'th-ue-name';
        lab.textContent = u.name;
        txt.appendChild(lab);
        txt.appendChild(el('div', 'th-ue-dosis', u.dosis));
        if (u.hinweis) txt.appendChild(el('div', 'th-ue-hinweis', u.hinweis));
        row.appendChild(cb);
        row.appendChild(txt);
        bl.appendChild(row);
      });
      box.appendChild(bl);
    });

    var notiz = el('textarea', 'th-notiz');
    notiz.placeholder = 'Notiz zur Einheit (Werte, Gefühl, Abbruchgrund)';
    box.appendChild(notiz);

    var leiste = el('div', 'th-leiste');
    var speichern = el('button', 'th-btn th-btn-prim', 'Einheit eintragen');
    var status = el('span', 'th-hinweis', '');
    speichern.onclick = function () {
      var erledigt = boxen.filter(function (c) { return c.checked; }).length;
      var eintrag = {
        datum: heute(),
        thema: t.id,
        einheit: e.name,
        erledigt: erledigt,
        total: boxen.length,
        notiz: notiz.value.trim()
      };
      logSchreiben(eintrag);
      status.textContent = 'Eingetragen am ' + datumCH(heute()) + ' – ' + erledigt + ' von ' + boxen.length + ' Übungen.';
      if (typeof global.onTheorieEinheit === 'function') global.onTheorieEinheit(eintrag);
    };
    leiste.appendChild(speichern);
    leiste.appendChild(status);
    box.appendChild(leiste);
    return box;
  }

  function renderEditor(root, thema) {
    root.innerHTML = '';
    var vorlage = thema || {
      id: 'thema-' + Date.now(),
      titel: 'Neues Thema',
      kurz: '',
      stand: heute(),
      abschnitte: [{ h: 'Prinzip', p: '' }],
      quellen: [{ t: '', url: '' }],
      einheit: { name: '', wann: '', hinweis: '', bloecke: [{ titel: 'Block 1', uebungen: [{ id: 'u1', name: '', dosis: '', hinweis: '' }] }] }
    };

    var kopf = el('div', 'th-kopf');
    kopf.appendChild(el('h2', null, thema ? 'Thema bearbeiten' : 'Neues Thema'));
    var abbrechen = el('button', 'th-btn', 'Abbrechen');
    abbrechen.onclick = function () { thema ? renderThema(root, thema.id) : renderListe(root); };
    kopf.appendChild(abbrechen);
    root.appendChild(kopf);

    root.appendChild(el('div', 'th-hinweis', 'Inhalt als JSON. Struktur beibehalten: id, titel, kurz, stand, abschnitte (h plus p oder liste), quellen (t, url), einheit (name, wann, hinweis, bloecke mit uebungen).'));

    var ta = el('textarea', 'th-editor');
    ta.value = JSON.stringify(vorlage, null, 2);
    root.appendChild(ta);

    var fehler = el('div', 'th-hinweis', '');
    var leiste = el('div', 'th-leiste');
    var speichern = el('button', 'th-btn th-btn-prim', 'Speichern');
    speichern.onclick = function () {
      var neu;
      try { neu = JSON.parse(ta.value); } catch (err) {
        fehler.textContent = 'JSON lässt sich nicht lesen: ' + err.message;
        return;
      }
      if (!neu.id || !neu.titel) { fehler.textContent = 'id und titel werden gebraucht.'; return; }
      neu.stand = heute();
      themaSpeichern(neu);
      renderThema(root, neu.id);
    };
    leiste.appendChild(speichern);
    root.appendChild(leiste);
    root.appendChild(fehler);
  }

  /* ---------- Öffentliche Schnittstelle ---------- */
  function mount(ziel) {
    styleEinfuegen();
    var root = typeof ziel === 'string' ? document.getElementById(ziel) : ziel;
    if (!root) { console.warn('[Theorie] Container nicht gefunden:', ziel); return null; }
    root.classList.add('th');
    renderListe(root);
    return root;
  }

  global.Theorie = {
    mount: mount,
    themen: alleThemen,
    speichern: themaSpeichern,
    zuruecksetzen: themaZuruecksetzen,
    log: logLesen,
    export: function () { return { themen: store.get(STORE_KEY, []), log: logLesen() }; },
    import: function (daten) {
      if (daten && daten.themen) store.set(STORE_KEY, daten.themen);
      if (daten && daten.log) store.set(LOG_KEY, daten.log);
    }
  };
})(window);
