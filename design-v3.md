# HistorieBevaring – design v3: Spor og funn

Status: **foreslått designretning**. Ikke publiseringsklar og erstatter ikke `design.md` eller `design-v2.md` før den er godkjent.

Dato: 2026-09-09  
Formål: en enkel, fotobasert presentasjonsside som vekker interesse for en liten workshop i Kristiansand.

## Designpåstanden

> Ett ekte spor kan være nok til å begynne.

Siden skal få en besøkende til å kjenne igjen et ufortalt spørsmål: et bilde, et navn, en gjenstand eller en fortelling de gjerne skulle forstått bedre. HistorieBevaring viser en rolig arbeidsmåte for å **lete, finne fram, sortere og vurdere**. Arkivkompetanse, søk og praktisk AI er redskaper i den prosessen – ikke et ferdig produkt og ikke en sannhetsmaskin.

Dette er ikke en produktkatalog, et digitalt arkiv eller en «AI-demo». Det er en invitasjon til en reell oppdagelsesreise og en avgrenset workshop.

## Avsender, løfte og ansvar

**Avsender på siden:** `vi`, fram til hver navngitt person har godkjent navn, rolle og eventuelt bilde. Lars kan være metodevert. Harde og en ytterligere Lars er foreløpig bare interne team-plassholdere.

**Hovedløfte:**

> Vi hjelper deg å komme i gang med spørsmål, materiale og en ryddig måte å lete på – med AI som støtte og menneskelig vurdering i sentrum.

**Må ikke loves:** faktagaranti, juridisk rådgivning, arkivgodkjenning, institusjonell langtidsbevaring eller at et bestemt svar kan finnes.

**Ansvarslinje som alltid må kunne nås:** Deltakeren/familien avgjør hva som er sant, hva som deles, samtykke, publisering og bevaring av eget materiale. Vi tilbyr metode, praktisk AI-veiledning og kvalitetstenkning.

## Visuell retning: oppdagelsesbordet

Følelsen er et godt opplyst bord med spor som kan følges: varmt, presist og stille. Det skal kjennes håndfast, ikke gammeldags påtatt.

- **Fysisk før digitalt:** fotoomslag, notat, kartkant, mappe, etikett, blyant, lupe og arbeidsbord. En skjerm kan vises som redskap, aldri som hovedmotiv.
- **Oppdagelse før forklaring:** begynn med spørsmålet, ikke med hva vi selger.
- **Én idé per flate:** én overskrift, en kort tekst og ett bilde eller en materiell detalj.
- **Klassisk uten kostyme:** ingen sepiafilter, filmriper, «gammel papir»-tekstur, stempelgrafikk eller late-som-arkiv.
- **AI i bakgrunnen:** vis spørsmål, oversikt og vurdering; aldri roboter, glød, genererte familieportretter eller påståtte skjermbilder av en løsning.

### Det lille «kodesettet»

Uttrykket skal bygges av bare tre grafiske grep. Alt annet er bilde, typografi og luft.

1. En hårtynn indekslinje som deler en flate.
2. En kvadratisk funnmarkør på `8 × 8px` i oker eller tegl.
3. En liten etikett i versaler, for eksempel `SPOR 01`, `SPØRSMÅL` eller `KRISTIANSAND`.

Ingen ikonbibliotek, gradienter, kapselknapper, kortsamlinger, dashboards eller tunge skygger.

## Farger

Dette er en varm, klassisk palett – ikke svart/hvitt. Kontrast må måles i den implementerte siden før publisering.

| Token | Verdi | Bruk |
| --- | --- | --- |
| `--paper` | `#F4EFE4` | Standard bakgrunn; ubestrøket papirfølelse |
| `--paper-light` | `#FCFAF5` | Luftige tekstflater og kontakt |
| `--ink` | `#1F2B2B` | Brødtekst, navigasjon og én mørk metodeflate |
| `--slate` | `#54605E` | Bildetekster, metadata og sekundærtekst |
| `--line` | `#CDC3B1` | 1px delinger og rammer |
| `--ochre` | `#B4863D` | Funnmarkør, kapittel og understrek |
| `--brick` | `#87483D` | Spørsmål og primær handling |
| `--moss` | `#69725C` | Sjelden sekundær detalj |

Regler:

- `paper`, `paper-light` og `ink` bærer minst 90 % av flaten.
- Bruk én aksentfarge i en seksjon; ikke oker, tegl og mosegrønt samtidig.
- Den mørke `ink`-flaten brukes kun til metodekapittelet, aldri som hero.
- Bilder beholder naturlige, nedtonede farger. De skal ikke gjøres monokrome.

## Typografi

Bruk én familie: `Atkinson Hyperlegible Next, Arial, sans-serif`. Den er ryddig og tilgjengelig; det klassiske preget kommer fra materialenheten, bildene og tempoet – ikke fra en nostalgisk font.

| Stil | Verdi | Regel |
| --- | --- | --- |
| Hero | `clamp(44px, 6vw, 82px)` / 700–800 / `0.98` | Maks 13 tegnbredder (`13ch`) |
| Seksjon | `clamp(30px, 3.5vw, 50px)` / 700 / `1.05` | Maks 17 tegnbredder |
| Brød | `18px` / 400 / `1.55` | Maks 58 tegnbredder |
| Kort innledning | `clamp(20px, 2vw, 25px)` / 500 / `1.35` | Maks 42 tegnbredder |
| Bildetekst | `13px` / 400 / `1.45` | Alltid under bilde, aldri over motiv |
| Etikett | `11px` / 700 / `1.25` | Versaler, `letter-spacing: .08em` |

Unngå kursiv som dekor, ekstra skrifter, tekst på foto og helversaler i brødtekst.

## Layout- og spacingkontrakt

Dette er målene som skal brukes konsekvent ved HTML/CSS-arbeid.

| Systemdel | Mobil | Nettbrett | Desktop |
| --- | ---: | ---: | ---: |
| Sidegutter | 20px | 32px | 48px |
| Maks innholdsvidde | – | – | 1180px |
| Maks lesekolonne | 600px | 600px | 600px |
| Normal seksjon, topp/bunn | 72px | 88px | 112px |
| Stort kapittelskift, topp/bunn | 112px | 132px | 160px |
| Bilde til tekst | 32px | 40px | 56px |
| Innholdsgruppe | 24px | 24px | 32px |
| Tett innhold | 12px | 12px | 16px |

Grunnskala: `4, 8, 12, 16, 24, 32, 40, 56, 72, 112, 160px`. Ingen tilfeldige mellomverdier.

- **Rutenett:** 12 logiske kolonner desktop; én kolonne på mobil.
- **Bilde/tekst:** 7:5 eller 8:4 på desktop. Maks to elementer ved siden av hverandre.
- **Mobil:** bilde først når bildet bærer stemningen; tekst kommer alltid på egen lys flate under.
- **Hjørner:** `0px` som standard. Video og praktiske kontroller kan ha `4px`.
- **Skygge:** ingen. Skille skapes med linje, avstand, bakgrunn eller bilde.

## Sidefortelling og bokser

«Bokser» betyr her tydelige flater med kant, avstand og en jobb – ikke like kort gjentatt i rutenett.

### 1. Hero – det ufortalte spørsmålet

**Etikett:** `SPOR 01 · HISTORIEBEVARING`  
**Overskrift:** `Har du noe du gjerne skulle funnet ut av?`  
**Tekst:** `Et bilde, et navn, en fortelling eller en gjenstand kan være starten. Vi hjelper deg å lete på en ryddig måte.`

**Layout:** hero i en 7:5-del. Tekst venstre, et bredt placeholder-bilde høyre. På mobil: tekst først, bilde etterpå. Bakgrunn `paper`.

**Hero-boks:** kun én, en liten merkelapp/indeks under innledningen. Ingen sekundære argumenter eller teamportretter.

**Primærknapp:** `Meld interesse for workshop i Kristiansand`  
**Sekundærlenke:** `Se arbeidsmåten ↓`

**Placeholder:** `PH-01` – fotoomslag, tom etikett og åpen notatbok på lyst bord. Dekorativt når budskapet finnes i teksten (`alt=""`).

### 2. Fullbredde bilde – start med det du allerede har

**Etikett:** `SPOR 02 · MATERIALET`  
**Overskrift:** `Du trenger ikke ha alt klart.`  
**Tekst:** `Det er nok å starte med ett bilde, en fortelling, et dokument eller et spørsmål.`

**Layout:** fullbredt bilde, etterfulgt av en enkel lys tekstboks under. Ikke tekst over foto.

**Placeholder:** `PH-02` – hender som legger fiktive eller egneide fotoomslag, tom mappe og notat med «Hva vet vi?» på et bord.

### 3. Arbeidsflate – søk, finn og få oversikt

**Etikett:** `SPOR 03 · SØK OG FINN`  
**Overskrift:** `Se hva materialet faktisk sier.`  
**Tekst:** `Vi bruker arkivblikk, søk og enkel struktur for å skille spor fra antakelser – og for å se hva som fortsatt må undersøkes.`

**Layout:** 7:5 bilde/tekst. Over tekst: en indekslinje med `spørre / finne / notere`. Dette er ikke tre kort.

**Placeholder:** `PH-03` – lupe, mappeetikett, notater og en anonymisert skjerm med fiktiv tekst.

### 4. Mørk metodeflate – mennesket avgjør

**Etikett:** `ARBEIDSMÅTE`  
**Overskrift:** `AI kan hjelpe oss å arbeide. Mennesket avgjør hva som holder.`  
**Tekst:** `AI kan hjelpe med å formulere spørsmål, sortere et lite grunnlag og lage førsteutkast. Kilder, sammenheng, usikkerhet og deling krever fortsatt menneskelig vurdering.`

**Layout:** én mørk flate med lys tekst, 8:4 tekst/detalj. Maks 430px tekstbredde. Eventuell detalj er et svært diskret blyantspor eller en etikett, ikke en illustrasjon.

**Boksregel:** ingen knapp her. Målet er å skape tillit, ikke avbryte lesingen.

### 5. Workshopflaten – en ettermiddag i Kristiansand

**Etikett:** `VERKSTED · KRISTIANSAND`  
**Overskrift:** `En rolig start på din egen leting.`  
**Innledning:** `En mulig første pilot er et lite verksted på omtrent to og en halv time.`

Dette er en **arbeidsantakelse**, ikke bekreftet arrangement. Frem til dato, sted, pris og kapasitet er bestemt, må teksten bruke «meld interesse» – ikke «bestill».

**Tre arbeidslinjer, ikke kort:**

1. **Ta med ett spor** – et bilde, en historie eller et spørsmål.
2. **Arbeid med metoden** – avgrens, finn fram, sorter og prøv praktiske AI-spørsmål med kontrollpunkter.
3. **Gå hjem med en retning** – en intervjuguide eller søkeplan, enkel sporoversikt og ett neste steg.

**Deltakerutbytte, i en innrammet faktaboks:**

- ett avgrenset lete- eller historiespørsmål
- en enkel oversikt over materiale, kilder og usikkerhet
- en kort intervju- eller søkeguide
- AI-prompter med kontrollpunkter
- en realistisk plan for den neste uken

**Ansvarsfotnote:** `Du velger selv hva du deler. Vi bruker nøytrale eksempler i fellesskap. Fakta, samtykke, publisering og bevaring av eget materiale er ditt ansvar.`

**Placeholder:** `PH-05` – et nøytralt bord klargjort med mapper, skriveark, blyanter og tomme stolrygger. Ingen identifiserbare deltakere.

### 6. Den menneskelige arbeidsmåten

**Etikett:** `HVERDAGSARBEID`  
**Overskrift:** `Praktisk AI og kvalitet i ekte oppgaver.`  
**Tekst:** `Vi arbeider med spørsmål, materiale og vurderinger som må tåle at noen ser etter. Familiehistorie er ett konkret utgangspunkt.`

**Layout:** en arbeidsdetalj med en liten tekstflate. Ingen personnavn eller portretter før godkjenning. Senere kan flaten utvides med tre tynne navnelinjer: `Lars / Harde / [navn]` og en godkjent rolle under hver.

**Placeholder:** `PH-06` – en person sett bakfra eller hender ved arbeidsbord, uten private opplysninger.

### 7. Kontakt – en enkel invitasjon

**Overskrift:** `Vil du finne ut hva som kan ligge i ditt materiale?`  
**Tekst:** `Gi beskjed dersom du vil høre mer om et mulig verksted i Kristiansand.`

**Primærknapp:** `Meld interesse for workshop i Kristiansand`  
**Kontaktlinjer:**

`Telefon: [sett inn nummer]`  
`E-post: [sett inn e-post]`

**Layout:** nesten tom `paper-light`-flate med maksimum 600px innhold. Ikke nytt bilde, skjema eller prisboks. Ikke publiser døde kontaktlenker eller samle personopplysninger før kanal og personverninfo er på plass.

## Komponenter

### Navigasjon

- Høyde: 72px desktop, 64px mobil.
- Venstre: enkel tekstlogo `HistorieBevaring`.
- Høyre: `Arbeidsmåten` og `Workshop` som ankerlenker, etterfulgt av en enkel tekstlenke `Kontakt`.
- Bakgrunn: `paper-light` med 1px bunnlinje `line`.
- Ingen sticky effekt før skissen er brukertestet; hvis sticky aktiveres, behold samme høyde og kontrast.

### Knapp

- Rektangulær, `4px` radius, minstehøyde 52px.
- `padding: 14px 20px`; tekst 16px / 700.
- Primær: `brick` bakgrunn, `paper-light` tekst.
- Hover: `ink` bakgrunn; ingen bevegelse større enn `2px`.
- Fokus: `3px solid ochre` med `4px` offset.
- På mobil kan bare hero- og kontaktknappen fylle bredden.

### Tekstlenke

- Understreket, med pil bare når lenken faktisk flytter brukeren videre.
- Ikke bruk lenker som ser ut som knapper uten å være handlinger.
- Fokus bruker samme synlige fokusmarkering som knapp.

### Funnboks

Brukes kun for deltakerutbytte eller ansvarslinje.

- `border: 1px solid var(--line)`
- bakgrunn `paper-light`
- `padding: 24px` mobil / `32px` desktop
- venstre topp: 8px funnmarkør i oker eller tegl
- ingen skygge, ingen illustrasjon, ingen «badge»

### Bilde og bildetekst

- Bilder er kant-til-kant i sin egen flate eller uten radius i rutenettet.
- All informasjonsbærende foto får en kort, presis bildetekst og nødvendig kreditering.
- Ingen tekst legges på foto. Ved behov blir teksten en separat flate under.
- Dekorative bilder får tom alternativtekst. Informasjonsbærende bilder beskriver motivets relevans, ikke stemningen.

### Film (ikke prioritert i første skisse)

En 50–70 sekunders presentasjonsfilm kan komme som en utvidelse mellom flate 6 og kontakt, men skal ikke forsinke den første statiske siden.

- Postermotiv: Lars eller godkjent samarbeidspartner i arbeid, med fiktivt eller eget materiale.
- Aktiv avspilling; aldri autoplay.
- Norske undertekster og synlig transkripsjon.
- Ingen familiearkiv, kundemateriale, medieutklipp eller ikke-godkjente personer.

Se `docs/FILM_BRIEF_PRESENTASJON_60S.md` for opptaksramme.

## Placeholderpakke og rettigheter

| ID | Motiv | Format | Alt-tekst når det bærer informasjon |
| --- | --- | --- | --- |
| `PH-01` | Fotoomslag, notatbok og etikett | 3:2 liggende | Dekorativt i hero; ellers tom alt |
| `PH-02` | Hender, mappe og tre materialspor | 4:5 stående | «Hender legger fotoomslag og merket mappe på et bord.» |
| `PH-03` | Lupe, notater, mappeetikett og anonymisert skjerm | 3:2 liggende | «Arbeidsbord med notater og mappeetikett for videre søk.» |
| `PH-04` | Blyantspor eller merkelapp | 16:9 | Dekorativ støtte til metodeflaten |
| `PH-05` | Nøytralt verkstedbord | 3:2 liggende | «Bord klargjort med mapper og skriveark til workshop.» |
| `PH-06` | Person/hender i arbeid | 4:5 stående | «En person gjør notater ved et arbeidsbord.» |

Før publisering av et reelt bilde eller filmstill skal prosjektet registrere: fil-ID, opphavsperson/rettighetshaver, tillatt kanal og varighet, kreditering, samtykke og eventuelle begrensninger. Et medieutklipp eller familiearkiv er ikke automatisk publiseringsklart.

## Tilgjengelighet

- WCAG 2.2 AA er minimum; mål kontrast i implementasjonen, ikke bare i denne spesifikasjonen.
- Tastaturfokus skal være synlig på alle bakgrunner.
- Vanlig tekst må aldri ligge direkte på bilde.
- Video krever aktiv avspilling, norske undertekster og transkripsjon.
- Bildetekster og kreditering skal være lesbare uten å zoome.
- Ankerlenker og knapper skal ha entydig norsk handlingstekst.
- Bevegelse begrenses til små hoveroverganger og skal respektere `prefers-reduced-motion`.

## Første tekniske skisse

En første skisse trenger bare semantisk HTML, en enkel CSS-fil og lokale placeholderflater. Ikke legg til rammeverk, database, skjema, analyse, innlogging eller filopplasting før det finnes et separat behov.

Foreslått struktur når siden kodes:

```text
site/
  index.html
  styles.css
  assets/
    placeholders/
    images/                 # kun rettighetsklarert materiale
  README.md                 # hva som er placeholder og hva som er klart
```

## MCP-/Lovable-prøve etter designgodkjenning

Lovable kan brukes til én privat statisk sammenligningsskisse, men ikke før v3 er godkjent. En MCP-klient arver tilgangene som gis til konto/workspace; Lovable opplyser også at byggehandlinger kan bruke kreditter. Derfor skal prøven være avgrenset til én ny privat skisse, med fiktive plassholdere, uten deploy, database, integrasjoner eller ekte materiale.

Les den kildebelagte prøveplanen i `01_research/04_kilder/mcp-prototype-og-agenttest-2026-09-09.md` før eventuell OAuth-tilkobling. [OpenAI beskriver tilsvarende at apptilgang og handlinger styres av tilkobling og gitte tillatelser](https://help.openai.com/en/articles/11487775-connectors-in).

## Avklaringsport før koding eller MCP-prøve

- [ ] Er «Spor og funn» riktig navn/retning, eller bare intern arbeidstittel?
- [ ] Er en workshop på omtrent 2,5 timer riktig, eller skal siden si «2–3 timer»?
- [ ] Hvilken dato, kapasitet, pris og konkret lokasjon i Kristiansand gjelder?
- [ ] Hvilket telefonnummer og hvilken e-post skal publiseres?
- [ ] Har Harde og eventuell annen Lars godkjent offentlig navn, rolle og bilde?
- [ ] Hvilke faktiske foto-/filmressurser er rettighetsklarert?
- [ ] Skal film komme i første versjon eller senere?

Før disse punktene er avklart, kan vi lage en statisk intern HTML-skisse med plassholdere, men ikke en publiseringsklar side.

## Suksesskriterium for skissen

En besøkende skal etter femten sekunder kunne si:

1. «Dette handler om å oppdage noe i eget materiale.»
2. «De kan hjelpe meg å søke, få oversikt og bruke AI med vurdering.»
3. «Jeg kan melde interesse for et verksted i Kristiansand.»

Alt annet er sekundært.
