# Fysikkforklarer

En liten prototype som løser fysikkoppgaver på to måter:

- **Med KI** - skriv oppgaven i vanlig tekst, og få tolkning, relevante
  lover/formler, løsning steg for steg og svar. Krever din egen, gratis
  API-nøkkel (se under) - ingen konto hos oss, ingen innlogging på siden.
- **Uten KI** - en liste med 12 vanlige fysikkformler (mekanikk, E&M,
  termodynamikk, bølger/optikk, moderne fysikk) der du velger riktig type,
  fyller inn kjente verdier, og får fremgangsmåten regnet ut lokalt. Fungerer
  alltid, uansett KI-nøkkel.

## Filene i denne mappen

| Fil | Hva den er |
|---|---|
| `index.html` | Selve appen. GitHub Pages serverer denne automatisk på rot-URL-en. |
| `manifest.json` | Gjør siden installerbar som app på telefon (navn, ikon, farger). |
| `icon-192.png`, `icon-512.png` | App-ikonene. |
| `sw.js` | Liten service worker som cacher appskallet (kreves for installasjon). |

Alle fem må ligge i samme mappe i repoet for at installasjon skal fungere.

## Om KI-nøkkelen

Appen kaller Google Gemini eller Anthropic Claude sitt offisielle API direkte
fra nettleseren, med nøkkelen du selv limer inn. Nøkkelen lagres kun i din
egen nettlesers `localStorage` og sendes aldri til noen annen server enn
leverandørens egen. Google Gemini har en reell gratis kvote uten
betalingskort (aistudio.google.com/apikey) - anbefalt for de fleste. Anthropic
Claude krever betalingsinfo registrert (console.anthropic.com/settings/keys).

## Laste opp til GitHub

1. Opprett et nytt repo på github.com (eller bruk et eksisterende).
2. Åpne repoet i nettleseren -> "Add file" -> "Upload files" -> dra inn alle
   fem filene over -> commit.
   Alternativt via terminal:
   ```bash
   git init
   git add index.html manifest.json icon-192.png icon-512.png sw.js
   git commit -m "Legg til Fysikkforklarer"
   git branch -M main
   git remote add origin https://github.com/<brukernavn>/<repo>.git
   git push -u origin main
   ```
3. Slå på siden: Settings -> Pages -> velg grenen (main) og mappen (/root)
   -> lagre. Siden blir tilgjengelig på
   `https://<brukernavn>.github.io/<repo>/` etter noen minutter.

## Installere som app på telefon

Dette gjør siden til en "PWA" (Progressive Web App) - et hjemmeskjerm-ikon
som åpner seg fullskjerm, uten adressefelt, omtrent som en vanlig app. Det er
**ikke** en App Store/Play Store-app: den listes ikke der, og noen
funksjoner (push-varsler, bakgrunnskjøring) er begrenset eller mangler,
særlig på iPhone.

**Android (Chrome):**
1. Åpne github.io-lenken i Chrome.
2. Trykk de tre prikkene øverst til høyre.
3. Velg "Installer app" (eller "Legg til på startskjermen").
4. Ikonet dukker opp i appskuffen/på startskjermen som en vanlig app.

**iPhone/iPad (Safari):**
1. Åpne github.io-lenken i Safari (må være Safari, ikke Chrome, for at dette
   skal fungere).
2. Trykk Del-ikonet (firkant med pil opp) nederst.
3. Velg "Legg til på Hjem-skjerm".
4. Ikonet dukker opp på hjemskjermen og åpner appen fullskjerm ved trykk.

## Status

Dette er en prototype/utkast til testing - ikke en ferdig, kvalitetssikret
løsning. KI-svar bør kontrolleres, særlig på uvanlige eller avanserte
oppgaver. Den manuelle formellisten regner alltid ut lokalt og er upåvirket
av KI-tilkoblingen.
