# Visuell retning v3: Spor og funn

Status: **intern arbeidshypotese** — ikke godkjent design og ikke publiseringsklar.  
Dato: 2026-09-09

## Hensikt

Denne retningen skal gi HistorieBevaring en enklere og mer konkret inngang enn tidligere utkast: en side om **å oppdage noe i eget materiale**. Ikke en produktside, et digitalt arkiv eller en AI-demo.

Arbeidshypotesen er at besøkende først kjenner igjen et spørsmål de selv har, deretter ser at verkstedet kan hjelpe dem å lete, sortere og vurdere. AI er et stille arbeidsredskap i den fortellingen. Ekte materiale, menneskelig nysgjerrighet og faglig vurdering er hovedsaken.

## Én setning om følelsen

> Et godt opplyst bord med spor som kan følges — varmt, presist og helt uten digitalt show.

## Visuell kjerne

- **Oppdagelse før forklaring:** Bildene viser et spor, en detalj, en mappe eller et spørsmål før de viser løsningen.
- **Fysisk før digitalt:** Papir, fotoomslag, kartkant, blyant, etikett, lupe og arbeidsbord. Skjerm kan forekomme som redskap, aldri som hovedmotiv.
- **En idé per flate:** Ingen funksjonskort, ikonrader eller mange like bokser. Én overskrift, én kort tekst og ett bilde eller en enkel detalj.
- **Klassisk uten kostyme:** Varmt papir, dyp blekkblått og dempede jordfarger. Ikke sepiafilter, falsk slitasje eller museumsrekvisitter.
- **AI i bakgrunnen:** Vis gode spørsmål, oversikt og vurdering. Unngå robotgrafikk, glød, genererte ansikter og skjermbilder som later som systemet er en ferdig tjeneste.

## Forslag til fargeverden

Alle verdier er arbeidsverdier som må kontrasttestes før de låses.

| Token | Farge | Oppgave |
| --- | --- | --- |
| `paper` | `#F4EFE4` | Hovedbakgrunn; ubestrøket papir, ikke hvitt |
| `paper-light` | `#FCFAF5` | Tekstflater og luft |
| `ink` | `#1F2B2B` | Tekst og mørke flater; dyp blekkgrønn/blå |
| `slate` | `#54605E` | Sekundærtekst og streker |
| `ochre` | `#B4863D` | Små funnmarkører, datoer og understrek |
| `brick` | `#87483D` | Varsom aksent for spørsmål eller kontakt |
| `moss` | `#69725C` | Sekundær detaljfarge, svært sparsomt |
| `line` | `#CDC3B1` | Hårtynne rammer og inndelinger |

Regler:

- `paper`, `paper-light` og `ink` skal dominere. Én aksentfarge per seksjon.
- Mørke flater brukes bare én gang som et rolig metodeavbrekk, ikke som hero og ikke som dekor.
- Ingen gradienter, glass-effekter, glød, tung skygge eller kapsel-/pillknapper.
- Hjørner er normalt rette (`0px`); videoposter og praktiske kontrollflater kan få `4px` radius.

## Typografi og grafiske spor

Arbeidshypotese: behold **Atkinson Hyperlegible Next** som én eneste skrifttype med Arial/sans-serif som reserve. Det holder uttrykket tilgjengelig og lar bilde, materiale og mellomrom gi den klassiske følelsen.

- Display: `clamp(44px, 6vw, 82px)`, vekt 700–800, linjehøyde `0.98`, maks `13ch`.
- Seksjonstittel: `clamp(30px, 3.5vw, 50px)`, maks `17ch`.
- Brødtekst: `18px`, linjehøyde `1.55`, maks `58ch`.
- Bildetekst/metadata: `13px`, linjehøyde `1.45`.
- Små markører: `11px`, versaler, `letter-spacing: .08em`; brukes bare til kapittel, sted eller arbeidssteg.

Grafikk begrenses til tre enkle, gjentakbare spor:

1. en tynn indekslinje (`1px`) som deler en flate,
2. en liten kvadratisk funnmarkør (`8 × 8px`) i oker eller tegl,
3. en kort håndfast etikett, som `SPOR 01` eller `SPØRSMÅL`.

Dette er «kodesettet» for enkelhet: siden skal kjennes sammenhengende uten logoer, pynt og et helt ikonbibliotek.

## Layout- og spacingkontrakt

| Del | Regel |
| --- | --- |
| Innholdsbredden | `max-width: 1180px`, sentrert |
| Lesekolonne | `max-width: 600px` |
| Gutter | `20px` mobil, `32px` nettbrett, `48px` desktop |
| Mikroavstand | 4, 8, 12 og 16 px — aldri vilkårlige mellomverdier |
| Innholdsgruppe | 24 eller 32 px |
| Vanlig seksjon | 72 px mobil / 112 px desktop topp og bunn |
| Store kapittelbrudd | 112 px mobil / 160 px desktop |
| Bilde-tekst-par | 32 px mobil / 56 px desktop mellom bilde og tekst |
| Rutenett | 12 logiske kolonner desktop, én kolonne mobil |

Bruk en 7:5 eller 8:4 deling der tekst møter stort foto. Ikke legg flere enn to elementer ved siden av hverandre. På mobil kommer alltid bilde før den korte teksten når bildet bærer stemningen.

## Storyboard for den første lange siden

### 1. Åpning — det ufortalte spørsmålet

**Budskap:** «Har du noen gang sett på et bilde, et navn eller en gjenstand og lurt på hva historien egentlig er?»

**Flate:** lys papirbakgrunn, stor overskrift til venstre. Til høyre et stort, beskåret placeholder-foto av et enkelt fotoomslag, en liten etikett og en åpen notatbok. Ikke personportrett i hero.

**Handling:** tekstlenke eller enkel knapp: `Meld interesse for workshop i Kristiansand`.

**Hvorfor:** Den inviterer til en personlig oppdagelsesreise før den forklarer tjenesten.

### 2. Spor — start med det du allerede har

**Budskap:** Det er nok å starte med ett bilde, en fortelling, et dokument eller et spørsmål.

**Flate:** fullbredt, rolig arbeidsfoto. En kort papirflate under eller ved siden av; aldri tekst over fotografiet.

**Placeholder-motiv:** hender som legger tre fiktive eller egeneide gjenstander på et bord: fotoomslag uten synlige navn, en tom arkivmappe og et notat med `Hva vet vi?`.

### 3. Funn — søk, finn fram og lag oversikt

**Budskap:** Arkivkompetanse og søk hjelper med å se hva materialet faktisk sier, og hva som fremdeles er et spørsmål.

**Flate:** tekst og foto i 7:5-deling. Den eneste grafiske detaljen er en indekslinje med tre ord: `spørre / finne / notere`.

**Placeholder-motiv:** arbeidsbord med lupe, oversiktskort, en mappeetikett og en bærbar datamaskin der skjermen er uskarp eller viser fiktiv, nøytral tekst. Ikke vis en påstått AI-løsning.

### 4. Mennesket avgjør — AI som arbeidsredskap

**Budskap:** AI kan gi struktur og utkast, men mennesket vurderer kilder, sammenheng og hva som skal deles.

**Flate:** én mørk `ink`-flate med kort, lys typografi. Ingen illustrasjon nødvendig; eventuelt en svært diskré nærstudie av blyantspor eller merkelapp.

**Kjerneformulering:** `AI kan hjelpe oss å arbeide. Mennesket avgjør hva som holder.`

### 5. Verkstedet — en ettermiddag i Kristiansand

**Budskap:** En avgrenset workshop på **omtrent 2,5 timer** er en mulig første test. Deltakeren kommer for å få en reell start, ikke for å kjøpe et ferdig produkt.

**Flate:** lys papirbakgrunn med en enkel, tretakts liste, ikke tre kort:

1. **Ta med ett spor** — et bilde, en historie eller et spørsmål.
2. **Arbeid med metoden** — avgrens, finn fram, sorter og prøv praktiske AI-spørsmål med kontrollpunkter.
3. **Gå hjem med en retning** — en intervjuguide eller søkeplan, enkel mappe-/kildeoversikt og neste steg.

**Placeholder-motiv:** oversiktsbilde av et bord før et verksted starter: nøytrale skriveark, blyanter, mapper og tomme stolrygger. Ingen gjenkjennbare personer.

**Avgrensing som må stå i mindre tekst:** Deltakerne velger selv hva de deler. Verkstedet bruker nøytrale eksempler i fellesskap; ansvar for fakta, samtykke, publisering og bevaring blir hos familien.

### 6. Hvem møter du — arbeidende mennesker, ikke et oppblåst team

**Budskap:** «Vi arbeider med praktisk AI, arkivblikk og kvalitet i ekte oppgaver.»

**Flate:** én stor arbeidsdetalj og en kort tekst. Dersom teamet senere er avklart, kan den ha tre smale navnelinjer: `Lars / Harde / [navn]` med rollebeskrivelse. Inntil da brukes `vi` og ingen portretter/navn.

**Placeholder-motiv:** en person bakfra eller hender ved arbeidsbord. Dette kan fungere før navn og roller er endelig godkjent.

### 7. Avslutning — rolig invitasjon

**Budskap:** `Vil du finne ut hva som kan ligge i ditt materiale?`

**Flate:** lys, nesten tom papirflate. Ingen nytt bilde, ingen påmeldingsskjema.

**Handling:**

- `Meld interesse for workshop i Kristiansand`
- `Telefon: [sett inn nummer]`
- `E-post: [sett inn e-post]`

Telefon og e-post skal forbli plassholdere til eier har bestemt publiseringskanal. Ikke publiser en død knapp eller samle inn personopplysninger uten avklart håndtering.

## Konkrete placeholderpakker

| ID | Beskrivelse | Format | Alternativtekst/rolle |
| --- | --- | --- | --- |
| `PH-01` | Fotoomslag, notatbok og etikett på et lyst bord | 3:2 liggende | Dekorativ hero; `alt=""` hvis budskapet står i tekst |
| `PH-02` | Hender, mappe og tre fiktive/egneide materialspor | 4:5 stående | «Hender legger fotoomslag og merket mappe på et bord.» |
| `PH-03` | Lupe, mappeetikett, notater og anonymisert skjerm | 3:2 liggende | «Arbeidsbord med notater og mappeetikett for videre søk.» |
| `PH-04` | Blyantspor eller merkelapp på mørk bakgrunn | 16:9 bredt | Dekorativ støtte til metodeflaten |
| `PH-05` | Nøytralt verkstedbord før deltakere kommer | 3:2 liggende | «Bord klargjort med mapper og skriveark til workshop.» |
| `PH-06` | Person/hender i arbeid, uten private opplysninger | 4:5 stående | «En person gjør notater ved et arbeidsbord.» |

## Rettigheter og publiseringsklarering

Ingen placeholder må forveksles med et frikort for publisering. Før et bilde, filmstill eller medieutklipp går på nett, må det registreres med fil-ID, opphavsperson/rettighetshaver, tillatt bruk, kreditering og eventuell utløpsdato.

Særlig må avklares:

- **Personer:** skriftlig samtykke til konkret bruk, kanal, tidsrom og kreditering. Dette gjelder også Lars, Harde og andre samarbeidspartnere.
- **Familie- og arkivmateriale:** hvem eier originalen, hvem har opphavsretten, om synlige personer kan identifiseres, og om innholdet inneholder personopplysninger eller sensitiv historie.
- **Medieutklipp:** et avisutklipp eller skjermbilde gir ikke i seg selv publiseringsrett til teksten eller bildet. Bruk det først etter eksplisitt rettighetsvurdering.
- **AI-generert materiale:** ikke bruk AI-genererte familieportretter, falske historiske dokumenter eller bilder som kan se ut som dokumentasjon. Dersom en abstrakt illustrasjon brukes, merk den klart som illustrasjon.
- **Musikk og film:** avklar musikk, stemmer, opptakslokasjon og undertekster/transkripsjon separat.

## Bevisste nei

- Ikke stockfoto av smilende familie ved fotoalbum.
- Ikke nostalgi som late som autentisitet: ingen sepia, filmriper, «gammel papir»-tekstur eller stempelgrafikk som hovedvirkemiddel.
- Ikke SaaS-mønstre: ingen dashboard, prisbokser, funksjonskort, fiktive brukerprofiler eller «AI magic»-grafikk.
- Ikke romantiser at hvert arkivspor har en stor løsning. Siden skal gjøre det legitimt at noen funn er uklare.
- Ikke bruk personer som team eller faglig garanti før de har samtykket til navn, rolle og bilde.

## Åpne avklaringer før design blir side

1. Er **2,5 timer** riktig for første workshop, eller skal siden omtale «2–3 timer» uten fast varighet?
2. Hvilken avsender-/kontaktkanal skal faktisk publiseres for Kristiansand?
3. Hvem, om noen, skal navngis eller filmes i første versjon?
4. Hvilke av placeholderne kan erstattes med egne rettighetsklarerte bilder først?
5. Skal den planlagte 50–70-sekunders filmen være med i første lansering, eller følge som neste kapittel etter at fotoopptak er klart?

## Suksesskriterium for en første skisse

Etter 15 sekunder skal en besøkende kunne gjengi tre ting: «Dette handler om å oppdage noe i eget materiale», «de kan hjelpe meg å søke, få oversikt og bruke AI med vurdering», og «jeg kan melde interesse for et verksted i Kristiansand». Alt annet er sekundært.
