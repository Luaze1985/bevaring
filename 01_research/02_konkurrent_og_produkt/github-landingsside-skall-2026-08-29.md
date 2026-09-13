# GitHub: landingsside-skall til inspirasjon

**Status:** research/benchmark, 29. august 2026  
**Formål:** Finne tekniske og strukturelle skall for en rolig, tillitsskapende markeds- og workshopsider. Dette er **ikke** et teknologivalg, en bestilling eller en implementasjonsplan.

## Viktig lisens- og designgrense

Funnene under er inspirasjon til informasjonsarkitektur og komponentdeling. En åpen lisens kan tillate gjenbruk av kode når dens vilkår følges, men den gir ikke rett til å overta bildebruk, tekst, varemerke, kundeuttalelser eller identitet. Før eventuell gjenbruk må den aktuelle `LICENSE`-filen og alle bilde-/fontkrediteringer kontrolleres på nytt. Eget norsk innhold, egne bilder og egne samtykkebaserte eksempler er uansett nødvendig.

## Anbefalt retning for HistorieBevaring

Bruk en **innholdsorientert, statisk markedsflate** først: én side som forklarer metode, pilotworkshop og ansvarsgrensen, med ett nøkternt påmeldingspunkt. Ikke bygg inn pålogging, betaling, kundeportal eller materialeopplasting før pilotdata viser at det trengs.

Strukturelt passer følgende rekkefølge best:

1. Rolig toppområde: hvem workshoppen er for, og én handling: «Meld interesse for pilot».
2. Hva du lærer: intervju, filstruktur, research, AI-prompter og kontrollpunkter.
3. Slik foregår 90-minutters pilot: kort, konkret og uten private data i fellesrommet.
4. Ansvarsgrense: familien har siste ord om fakta, samtykke, publisering og bevaring; metodeverten hjelper med praktisk AI og kvalitet.
5. Om videre hjelp: privat kartleggingssamtale ved behov – ingen løfter om arkivgodkjenning eller garantert faktasjekk.
6. Enkel FAQ og kontaktskjema/interesseliste.

## Aktuelle åpne startere

### 1. Astro Landing Page – enkleste visuelle skall

- **Repository:** [mhyfritz/astro-landing-page](https://github.com/mhyfritz/astro-landing-page)
- **Rammeverk:** Astro + Tailwind CSS.
- **Lisens:** MIT (kontrollert i repositoryets README/lisensmarkering 29.08.2026).
- **Hva som er nyttig:** Liten, responsiv og tematiserbar landingsside med CSS-variabler, bilder, typografi, Open Graph og SEO-grunnlag. README beskriver den eksplisitt som en landingssidetemplate og viser en enkel statisk byggflyt.
- **Gjenbruk som idé:** Én hovedside, synlig lesbar typografi, få seksjoner og en tydelig CTA. Temavariabler er et godt mønster for å etablere en dempet, varm visuell profil uten å spre fargevalg over hele koden.
- **Ikke ta med ukritisk:** Demoinnhold, måne/rom-bilder og mørk modus som standard. Prosjektets eget README oppgir at enkelte demoressurser kommer fra eksterne kilder.
- **Match:** Høy for første post → workshop-pilot.

### 2. Next.js Landing Page Starter Template – tydelig seksjonsarkitektur

- **Repository:** [ixartz/Next-JS-Landing-Page-Starter-Template](https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template)
- **Rammeverk:** Next.js 14+, TypeScript og Tailwind CSS 3.
- **Lisens:** MIT.
- **Hva som er nyttig:** Et bevisst, enkelt komponentmønster: navigasjon, hero, funksjoner, CTA og footer. README dokumenterer at det er statisk-side-orientert, og at komponentene er adskilt fra sidemalen.
- **Gjenbruk som idé:** Bytt de generiske «features» med workshopens konkrete læringsutbytte; bruk CTA-blokken til interessepåmelding, ikke kjøp. Den atomære komponentdelingen egner seg når nettsiden etter hvert får en egen side for post/ressurser.
- **Ikke ta med ukritisk:** «Produkt»-språk, vekstmarkører, påståtte resultater og illustrasjoner fra demoen. Versjonsnivået bør revurderes ved faktisk oppstart.
- **Match:** Høy hvis neste tekniske steg allerede blir React/Next.js.

### 3. SaaS Landing Template – kun som komponentkatalog

- **Repository:** [gonzalochale/saas-landing-template](https://github.com/gonzalochale/saas-landing-template)
- **Rammeverk:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Radix-primitiver og Framer Motion.
- **Lisens:** MIT.
- **Hva som er nyttig:** Tydelig filansvar per seksjon (`hero`, `faq`, `footer` m.m.) og praktisk dokumentasjon av hvor innhold, stil og seksjoner endres.
- **Gjenbruk som idé:** FAQ- og footer-/kontaktmønstrene, samt at hver seksjon har et isolert ansvar. Dette kan gjøre det enkelt å beholde ansvarsgrensen synlig på nettstedet.
- **Ikke ta med ukritisk:** Partnerlogoer, «stats», testimonials, prisplaner og bevegelse. De er typiske SaaS-elementer og vil svekke den rolige, dokumenterende posisjonen før det finnes reell dokumentasjon.
- **Match:** Middels. Aktuelt kun dersom prosjekter allerede velger moderne Next.js.

### 4. Next.js SaaS Starter – senere referanse, ikke første skall

- **Repository:** [nextjs/saas-starter](https://github.com/nextjs/saas-starter)
- **Rammeverk:** Next.js, Postgres, Drizzle, Stripe og shadcn/ui.
- **Lisens:** MIT.
- **Hva som er nyttig:** Et offisielt, strukturert eksempel på avgrensning mellom markedsflate, innlogging, rollebasert tilgang, aktivitetsspor og betaling.
- **Gjenbruk som idé:** Først hvis en senere, uttrykkelig besluttet tjeneste trenger innlogging eller administrasjon. Da bør skille mellom åpen markedsflate og privat kundeområde opprettholdes.
- **Ikke ta med nå:** Hele applikasjonen. Den inkluderer database, innlogging, Stripe, team-/rollefunksjoner og kundeportal – langt utenfor pilotens behov og medfører en vesentlig større personvern- og sikkerhetsflate.
- **Match:** Lav nå, mulig senere.

## Designprinsipper som overlever valg av kodebase

- **Bilder:** Ekte, rolige situasjonsbilder av hender, papir, lydopptak, samtale og sortering – aldri private familiearkiv eller gjenkjennbare personer uten dokumentert tillatelse. Unngå stock-bilder som ser ut som helse-/minnetapsreklame.
- **Tone:** Varm og presis. Ikke lov «bevaring for alltid», perfekt faktasjekk eller at AI «skriver livshistorien». Forklar hva deltakeren faktisk gjør på 90 minutter.
- **Tillit:** Sett ansvarsgrensen på siden, ikke bare i vilkår. Vis arbeidsflyt og kontrollpunkter fremfor uverifiserte kundesitater.
- **Konvertering:** Én primærhandling: interesse for pilotworkshop. En eventuell privat kartlegging skal være sekundær, og først beskrives som en avgrenset samtale.
- **Tilgjengelighet:** Høy kontrast, god brødtekststørrelse, få bevegelser, tydelige overskrifter og ingen informasjon som bare ligger i bilder.

## Foreløpig anbefaling

Ta **Astro Landing Page** som visuelt/innholdsmessig referanse og **ixartz** som referanse for seksjonsdeling. Dette betyr ikke at noen av dem er valgt eller skal klones. Før koding bør `design.md` låse sidehierarki, bildepolicy, visuell retning og de faktiske tekstpåstandene; først deretter bør rammeverk og eventuelt startrepo velges.

## Kildekontroll

Kildene er prosjektenes egne GitHub-sider, lest 29.08.2026:

- [Astro Landing Page: README og MIT-lisensmarkering](https://github.com/mhyfritz/astro-landing-page)
- [Next.js Landing Page Starter Template: README og MIT-lisensmarkering](https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template)
- [SaaS Landing Template: README og MIT-lisensmarkering](https://github.com/gonzalochale/saas-landing-template)
- [Next.js SaaS Starter: README og MIT-lisensmarkering](https://github.com/nextjs/saas-starter)

Repositorystatus, avhengigheter og lisens kan endres. Verifiser på nytt på beslutningstidspunktet.
