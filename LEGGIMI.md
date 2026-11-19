# Lumen — versione offline

App per foto cliniche, cartelle, agenda e studio di tesi.
Funziona senza internet e salva tutto **solo sul dispositivo**.

## Cosa c'è in questa cartella

| File | A cosa serve |
|---|---|
| `index.html` | L'app |
| `sw.js` | Fa funzionare l'app offline |
| `manifest.webmanifest` | Nome e icona dell'app installata |
| `icons/`, `fonts/`, `vendor/` | Icone, caratteri e libreria per i file ZIP |

Nessun dato dei pazienti è in questi file: foto e schede restano sui tuoi dispositivi.

## Pubblicare su GitHub Pages (gratis, una volta sola)

1. Crea un account gratuito su github.com.
2. In alto a destra tocca **+** → **New repository**. Nome: `lumen`. Lascia **Public** e tocca **Create repository**.
3. Nella pagina del repository tocca **uploading an existing file**.
4. Trascina nella pagina **tutto il contenuto** di questa cartella (i file e le cartelle `icons`, `fonts`, `vendor`), non la cartella stessa. `index.html` deve stare in primo livello.
5. In basso tocca **Commit changes**.
6. Vai in **Settings** → **Pages**. In "Branch" scegli **main** e **/(root)**, poi **Save**.
7. Dopo 1–2 minuti l'indirizzo è `https://TUONOME.github.io/lumen/`.

## Installare l'app

- **iPhone**: apri l'indirizzo in **Safari** → tocca **Condividi** → **Aggiungi alla schermata Home**. Aprila una volta con internet: da quel momento funziona anche offline.
- **Mac**: apri l'indirizzo in **Safari** → menu **File** → **Aggiungi al Dock** (oppure in Chrome: icona di installazione nella barra degli indirizzi).

Usa sempre l'app installata, non la pagina nel browser: così iOS non cancella i dati.

## Portare foto e schede sul Mac

1. Sul telefono: menu → **Backup e Mac** → **Esporta backup** (file .lumen) → scegli **AirDrop** e il tuo Mac.
2. Sul Mac: apri Lumen → menu → **Backup e Mac** → **Importa backup e unisci** → scegli il file.

"Unisci" aggiunge le novità e tiene la versione più recente di ogni scheda. Il file di backup contiene dati sanitari: spostalo solo con AirDrop o cavo e non caricarlo su cloud o email.

## Aggiornare l'app

Quando ti passo una nuova versione: carica i file nuovi su GitHub (sovrascrivendo i vecchi) e cambia il numero in `sw.js` alla riga `const VERSION`. Alla prossima apertura con internet l'app si aggiorna; i dati restano.

## Cosa manca rispetto alla versione dentro Claude

- L'analisi delle foto con l'intelligenza artificiale (richiede Claude e internet).
- La sincronizzazione automatica tra telefono e Mac (si fa con il backup).
