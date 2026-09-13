# HistorieBevaring – design v2: redaksjonelt studio

Status: alternativ designretning; ikke godkjent for HTML ennå.  
Dato: 2026-09-01

## Retning

Bytt «rolig arkivverksted» med et **redaksjonelt, svart/hvitt studio**. Siden skal kjennes som en kort, gjennomarbeidet dokumentar eller et uavhengig magasin: tydelig, personlig og kulturelt trygg – ikke som en SaaS-side, en offentlig portal eller et nostalgisk familiearkiv.

Svart og hvitt bærer størstedelen av uttrykket. Klassiske farger kommer inn som små, bevisste redaksjonelle markeringer, ikke som dekor overalt.

## Visuell idé

> Store bilder. Stor typografi. Mye luft. Én tydelig tanke om gangen.

- Arbeidsbilder og film er hovedmaterialet.
- Overskrifter kan være klassiske og redaksjonelle; brødtekst skal være nøktern og svært lesbar.
- Kort og ikonbokser reduseres kraftig. Del heller siden i store svarte, hvite og fotobaserte flater.
- Siden bruker asymmetri og hvitrom i stedet for mange rammer, avrundinger og skygger.

## Fargepalett

| Token | Verdi | Rolle |
| --- | --- | --- |
| `ink` | `#0C0C0C` | Primær svart; tekst, flater, knapper |
| `paper` | `#F7F5F0` | Varm nesten-hvit sidebakgrunn |
| `white` | `#FFFFFF` | Kontrastflater og tekst på svart |
| `grey` | `#6B6B6B` | Metadata og sekundærtekst |
| `wine` | `#6D1F2B` | Primær klassisk aksent; små etiketter og enkelte lenker |
| `museum-blue` | `#183A63` | Sekundær aksent; bare redaksjonelle kapittelmarkører |
| `ochre` | `#A87819` | Sjelden markering av spørsmål, dato eller arkivdetalj |

**Regel:** minst 85 % av synlig flate er svart, hvit eller varm grå. Bruk maksimalt én aksentfarge i samme seksjon. `wine` er default; blått og oker brukes ikke i hero samtidig.

## Typografi

V2 skal teste en tydelig todelt typografi:

- **Overskrifter:** `Source Serif 4` eller tilsvarende klassisk, åpen serif. Stor, men ikke nostalgisk.
- **Brødtekst, navigasjon og knapper:** `Atkinson Hyperlegible Next, Arial, sans-serif`.

| Stil | Desktop | Mobil | Bruk |
| --- | --- | --- | --- |
| Hero | `clamp(60px, 8vw, 112px)` | minimum `48px` | Kort hovedpåstand, maks 7–9 ord |
| Seksjonstittel | `clamp(38px, 4vw, 64px)` | minimum `32px` | Én idé per seksjon |
| Brødtekst | `18px` | `17px` | Maks 55 tegn per linje |
| Bildetekst | `13px` | `13px` | Motiv, kreditering og sammenheng |
| Etikett | `11px` i versaler | `11px` | Dato, kapittel eller arbeidssteg |

## Sideoppsett

### 1. Åpning: svart helflate

En nesten helskjerms svart åpning med en stor, hvit overskrift:

> Vi gjør AI anvendbar i virkelige arbeid.

Under: én kort setning, og en diskret tekstlenke `Se hvordan vi arbeider ↓`. Ingen rund, grønn CTA i hero.

Visuelt: ett stillbilde av Lars i arbeid, i sort/hvitt eller svært dempet farge, delvis beskåret. Ingen illustrert papirlapp i v2-hero.

### 2. Film som første menneskelige møte

Rett etter åpningen: et stort videobilde med enkel trekantknapp og tittelen:

> Se filmen · hvorfor vi gjør dette

Filmen er fortsatt 50–70 sekunder og må ha norsk teksting og transkripsjon. Den skal være den personlige forklaringen, slik at resten av siden kan være mer visuell og mindre forklarende.

### 3. Tre kompetanseområder som redaksjonelle spalter

Ikke kort. Bruk tre nummererte, typografiske blokker på hvit bakgrunn:

`01 Komme i gang`  
`02 Få oversikt`  
`03 Arbeide med kvalitet`

Hver får maks 40–55 ord og en enkelt aksentstrek i vinrød eller blått. Ingen ikoner i første designv2.

### 4. Svart metodekapittel

Den svarte flaten fortsetter som designets anker, men gjøres enklere:

> AI foreslår. Mennesket avgjør.

Under: fem steg satt som stor typografi og smale skillelinjer, ikke sirkler eller piler.

### 5. Fotoessay i fire helsider

Veksl store, kant-til-kant arbeidsbilder og nesten tomme tekstflater:

1. arbeid
2. materiale
3. spørsmål
4. vurdering

Alle bilder får svart/hvitt behandling eller svært nedtonet farge. Bildetekst ligger under i liten, presis tekst. Medieutklipp er små innlimte detaljer, ikke bakgrunn.

### 6. Avslutning: hvit flate, svart kontakt

Avslutt med enkel typografi:

> Har du noe du vil få bedre oversikt over?

Under: én tekstlenke eller rektangulær svart knapp `Ta kontakt`. Ingen bilde og ingen produktpåstand.

## Spacing og grid

- Maksbredde: `1280px`; tekstkolonne: maks `560px`.
- Desktop gutter: `40px`; mobil gutter: `20px`.
- Mellom kapitler: `clamp(96px, 12vw, 180px)`.
- På tekstflater: minst `64px` luft over og under hovedoverskrift desktop, `40px` mobil.
- Fotoessay: hvert bilde dekker hele viewportbredden eller 9 av 12 kolonner; ikke mellomstore bilder med avrundede hjørner.
- Hjørner: `0px` som norm. Radius brukes kun på videospiller og eventuelle kontrollknapper (`4px`).
- Skygger: ingen. Kontrast skapes med svart/hvitt, bilde og plassering.

## Knapper og lenker

| Element | Design |
| --- | --- |
| Primær handling | Sort rektangel, hvit tekst, `min-height: 52px`, `padding: 14px 22px`, radius `4px` |
| Sekundær handling | Understreket tekstlenke med pil ned/høyre |
| Hover | Vinrød bakgrunn på primærknapp; understrek flyttes 3px på lenker |
| Fokus | 3px vinrød fokusramme med 4px offset |
| Mobil | Primærknapp kan fylle bredden, men ikke alle knapper |

Alle knapper og lenker er konkrete handlinger. Ikke bruk knapper som dekor eller for å late som at video/funksjon finnes.

## Fotografi og grafikk

- Hovedstil: grovkornet svart/hvitt, naturlig lys, harde men varme kontraster.
- Motiver: Lars i arbeid, hender, bord, notater, kamera, skjermdetaljer med fiktivt materiale, utstyr og rom.
- Unngå: stockfoto, AI-genererte ansikter, perfekte familiealbum og «glødende AI»-grafikk.
- Bruk vinrøde, blå eller okergule små grafiske merker som kapitteltall, streker, datoer og spørsmål.
- Filmplakat: svart/hvitt stillbilde med minimal typografi; ingen «YouTube»-lignende ramme eller visuelle kontroller før brukeren spiller av.

## Tilgjengelighet

- WCAG 2.2 AA gjelder fortsatt.
- Ikke legg tekst over foto med mindre det ligger på en ugjennomsiktig svart/hvit flate.
- Klassisk serif brukes bare i store overskrifter; brødtekst og navigasjon bruker lesbar sans serif.
- Sørg for synlig tastaturfokus på svart, hvitt og foto.
- Filmen krever aktiv avspilling, undertekster og transkripsjon.

## Hva v2 bevisst fjerner

- papirbakgrunn, grønne knapper og avrundede kort som hoveduttrykk
- ikonsirkler, fem prosessbobler og rutenett som minner om produktfunksjoner
- for mye forklaring på én gang
- fiktiv heroillustrasjon som hovedmotiv

## V2s avklaringsport

Før vi erstatter `design.md` eller HTML-skissen skal du vurdere én ting: **Er svart/hvitt redaksjonelt studio riktig hovedfølelse?**

Hvis ja, lager vi neste HTML-versjon rundt denne retningen og velger hvilken aksentfarge som skal være fast: vinrød, museumsblå eller oker.
