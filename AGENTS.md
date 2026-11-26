# Intro AI Literacy deck: istruzioni per gli agenti

## Obiettivo e confini

- Deck web statico, senza build e senza dipendenze, che funziona anche offline. Creato e mantenuto con la Skill `slide-workshop-ai`.
- Workshop introduttivo del 27 novembre 2026 a Roma, 10-15, sette iscritti, porta d'ingresso ai workshop ArchiViz, Productivity e Marketing.
- È una risorsa del progetto `workshop-ai-per-architette`, con il proprio repository Git e la propria pubblicazione (GitHub Pages, ramo `main`, URL `https://jonathanlivingston86.github.io/intro-ai/`).
- `report/` è il report sulla professione da scaricare, collegato dal QR della slide 8.
- Leggi `docs/STATUS.md` per lo stato.

## Regole di scrittura

- Segui `references/02-scrittura.md` della Skill `slide-workshop-ai`: frasi corte, del tu, niente trattino lungo, fatto più caso più azione, dettagli e fonti nel blocco `.extra`.
- Filo conduttore: "ero convinto che... invece". Le convinzioni si aprono nella sezione in cui servono, non tutte all'inizio; si richiamano insieme nella slide "Cosa abbiamo smontato".
- Strumenti nominati sempre con il loro nome e logo, senza sponsorizzazione.
- Ogni numero ha data e fonte nella dispensa. Se la fonte è secondaria va scritto.

## Mappa

- `index.html`: slide. `data-po` = solo presentatore; `data-steps` e `data-step` = passaggi.
- `deck.js`: motore (non modificare). `moduli/puntini.js`: mappa a puntini febbraio-novembre 2026.
- `style.css`: stile comune; gli stili su misura sono in fondo.
- `assets/loghi/`: loghi da LobeHub Icons 1.106.0. `assets/img/`: pianta generata da Gemini il 25/11/2026 e schizzo, render, 3D del workshop di marzo.

## Decisioni

- Il report usa i redditi di Inarcassa in cifre 2026 (redditi 2024) e non la cifra CNAPPC di 24.421 euro, che non coincide con la fonte originale.
- La citazione "non vince la specie più forte" resta, con la rivelazione che non è di Darwin (Megginson, 1963).
- Video degli spaghetti scaricato (YouTube g_31_Kj0-NE, tagliato a 83,5 s, 13,7 MB) e pubblicato come asset in `assets/video/`, per scelta di Andrea del 25/11/2026 (uso didattico). Parte senza audio quando si entra nella slide: modulo `moduli/video.js`.
- Le immagini di schizzo, render e 3D sono di Andrea (workshop di marzo 2026).

## Cose da non fare

- Non creare repository, fare push o modificare il sito live senza l'ok esplicito di Andrea.
- Non inserire dati personali, credenziali, percorsi locali o materiali senza diritto di pubblicazione: il repository è pubblico.

## Verifiche minime

Segui `references/04-verifica.md` della Skill: sintassi, nessun trattino lungo, controllo impaginazione a tre risoluzioni, dispensa, telefono, PDF.
