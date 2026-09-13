# GitHub-benchmark: visuelt skall for historiefortelling

Kontrolldato: 2026-08-29  
Metode: offentlig GitHub-README, demo-/dokumentasjonslenker og lisensfil. Ingen kode er lastet ned, installert eller kopiert.

Dette er en design- og teknologibenchmark, ikke en beslutning om implementering. Løsningene kan inspirere en nettside og en eventuell senere kundeløsning, men ingen av dem løser samtykke, kildekontroll eller ansvar for familienes materiale.

## Anbefalt visuelt prinsipp for første nettside

Velg **ett rolig fotoessay med tre bevispunkter** fremfor et fullt digitalt familiearkiv i markedsføringen:

1. Et anonymisert bilde eller en illustrasjon av et familiefoto, med tydelig bildetekst og spørsmål om kilde.
2. En kort tidslinje som viser arbeidsprosessen: `samle → snakke → kontrollere → bevare`.
3. En kort lyd-/tekstbit som demonstrasjon, med et tydelig skille mellom original, transkripsjon og redigert fortelling.

Det viser metoden uten å be publikum laste opp private minner. Ekte familiehistorier, ansikter, stemmer eller dokumenter skal ikke brukes uten uttrykkelig avtale og en avklart publiseringsrett.

## 1. React Chrono – tidslinje for prosess og historiske nedslag

- Repository: <https://github.com/prabhuignoto/react-chrono>
- Lisens: MIT. Se [lisensfilen](https://github.com/prabhuignoto/react-chrono/blob/master/LICENSE).
- Dokumentert: vertikale, horisontale og vekselvise tidslinjer; bilder/video; tastaturnavigasjon; i18n og responsiv visning.
- Teknisk krav ved eventuell bruk: React 18.2+ eller 19+; README oppgir Node.js 22+ for prosjektets oppsett.

**Visuelt grep som passer HistorieBevaring:** En firetrinns prosesslinje på forsiden, med én liten «kildelapp» under hvert trinn. Den skal forklare arbeidsmåten – ikke rekonstruere hele familiehistorier offentlig.

**Vurdering:** God kandidat når siden bygges i React. MIT er enkel å forholde seg til, men lisensnotat må beholdes ved faktisk gjenbruk. Ikke bruk slideshow eller rik mediestøtte i første versjon; det risikerer å gjøre en rolig, tillitsskapende side til en produktdemo.

## 2. Yet Another React Lightbox – kontrollert visning av skannede bilder

- Repository: <https://github.com/igordanchenko/yet-another-react-lightbox>
- Lisens: MIT. Se [lisensfilen](https://github.com/igordanchenko/yet-another-react-lightbox/blob/main/LICENSE).
- Dokumentert: tastatur-, mus- og berøringsnavigasjon; responsive bildekilder; valgfri bildetekst, zoom, miniatyrer og nedlasting.
- Teknisk krav ved eventuell bruk: React 16.8+ til 19; komponent og tilhørende CSS importeres i React-applikasjonen.

**Visuelt grep som passer HistorieBevaring:** Ett «se originalen»-eksempel der en nøytral, lisensiert prøveillustrasjon åpnes i stor visning. Ved siden av vises en enkel metadata-/kildelapp: `original`, `hvem eier den`, `hva vet vi`, `hva er uklart`.

**Vurdering:** God for senere kundesider eller en avgrenset demo. Ikke aktiver nedlasting eller deling som standard for kundemateriale; tilgang og eksport må styres av familien. Bilder på markedsføringssiden bør være egne, lisensierte eller eksplisitt godkjente – bibliotekets lisens dekker ikke selve bildene.

## 3. wavesurfer.js – lydfortelling med tidskode og kontrollpunkt

- Repository: <https://github.com/katspaugh/wavesurfer.js>
- Lisens: BSD 3-Clause. Se [lisensfilen](https://github.com/katspaugh/wavesurfer.js/blob/main/LICENSE).
- Dokumentert: bølgeform og avspilling, med offisielle programtillegg for markører/regioner, tidslinje og hover-tidsstempel.
- Teknisk krav ved eventuell bruk: moderne nettleser og JavaScript; lydfilen må være tilgjengelig for nettleseren. README advarer om CORS ved lyd fra annet domene.

**Visuelt grep som passer HistorieBevaring:** En maksimal 20-sekunders anonymisert eller profesjonelt innlest lydprøve, med én markert tidskode som lenker til en kontrollert transkripsjon. Vis etikettene `originalopptak`, `transkripsjon` og `redigert tekst` som tre forskjellige lag.

**Vurdering:** Sterk demonstrasjon av at stemmen er en kilde, ikke bare råmateriale for AI. Men lydbølger kan gi et falskt inntrykk av presisjon: tidskode betyr ikke at innholdet er faktasjekket. Ikke publiser familiestemmer som «eksempel» uten separat publiseringssamtykke. BSD 3-Clause krever blant annet at opphavs- og lisensinformasjon tas med ved distribusjon.

## 4. React Compare Slider – kontrast mellom råmateriale og struktur

- Repository: <https://github.com/nerdyman/react-compare-slider>
- Lisens: MIT. Se [lisensfilen](https://github.com/nerdyman/react-compare-slider/blob/main/LICENSE).
- Dokumentert: sammenligner to React-komponenter, også bilder og video, i liggende eller stående retning.
- Teknisk krav ved eventuell bruk: React-komponent i en React-basert side.

**Visuelt grep som passer HistorieBevaring:** Ikke «før/etter» som om AI forbedrer sannheten. Bruk heller en sammenligning med tittelen **«Original og arbeidskopi»**: venstre side viser en fiktiv notatside eller et delvis bilde; høyre side viser strukturert metadata og spørsmål som fortsatt må avklares.

**Vurdering:** Lav terskel og MIT-lisens, men må brukes med språklig disiplin. Unngå en glidebryter som påstår at et uklart foto eller en usikker historie blir «riktig» etter AI-behandling.

## 5. OpenSeadragon – nærstudie av foto og dokument (senere fase)

- Repository: <https://github.com/openseadragon/openseadragon>
- Lisens: New BSD / BSD 3-Clause. Se [README](https://github.com/openseadragon/openseadragon/blob/master/README.md) og [lisensfilen](https://github.com/openseadragon/openseadragon/blob/master/LICENSE.txt).
- Dokumentert: nettbasert visning av bilder som kan zoomes, skrevet i ren JavaScript.
- Teknisk krav ved eventuell bruk: bildepyramider/egnet flisformat eller passende bildeoppsett; dette er en egen bildepresentasjonskomponent, ikke et arkivsystem.

**Visuelt grep som passer HistorieBevaring:** Senere kan et brev, et kart eller et foto vises som «undersøk originalen», med små metadatafelt og avgrenset zoom. På første markedsnettside er dette for tungt; et godt stillbilde med fortellende bildetekst gjør samme jobb enklere.

**Vurdering:** Relevant hvis privat oppfølging senere inkluderer høyoppløselige dokumenter. Ikke egnet som erstatning for filforvaltning, sikker tilgang eller langtidsbevaring.

## Alternativ som ikke anbefales som førstevalg: TimelineJS3

- Repository: <https://github.com/NUKnightLab/TimelineJS3>
- Lisens: MPL-2.0. Se [README](https://github.com/NUKnightLab/TimelineJS3) og [lisensopplysningen i `package.json`](https://github.com/NUKnightLab/TimelineJS3/blob/master/package.json).

Dette er en veletablert fortellertidslinje som kan ta inn ulike medietyper og passer redaksjonell historiefortelling. Den er imidlertid tyngre enn første behov, og MPL-2.0 krever at endringer i de lisensdekkede kildefilene deles under samme lisens. Velg den bare dersom den redaksjonelle tidslinjeopplevelsen er sentral nok til å oppveie en mer krevende lisensvurdering. React Chrono er enklere for et nytt React-skall.

## Felles grenser før mulig gjenbruk

- Verifiser lisens, versjon, vedlikehold og sikkerhetsstatus på nytt den dagen en komponent velges.
- Bibliotekslisenser gir ingen rettigheter til foto, skannede dokumenter, stemmer eller transkripsjoner. Avklar eierskap og publiseringssamtykke særskilt.
- Hold demonstrasjoner på offentlig nettside fiktive, egne eller eksplisitt godkjente. Ikke bruk kundemateriale som «før/etter»-reklame.
- En komponent kan gjøre en kilde lettere å oppleve, men gjør den ikke mer sann. Kilde-, usikkerhets- og samtykkeinformasjon må følge visningen i produktets design.
- Ingen komponent her er vurdert som en løsning for arkivavlevering, juridisk lagring, tilgangsstyring eller personvern alene.

## Konklusjon for et kommende `design.md`

Bruk dette som visuelt skall, før kode:

- varm, redaksjonell fotoessay-stil med luft og få elementer;
- én prosesslinje inspirert av React Chrono;
- en demonstrativ kilde-/arbeidskopi-sammenligning inspirert av React Compare Slider;
- valgfri lydprøve inspirert av wavesurfer.js, bare med trygt demonstrasjonsmateriale;
- lysboks og dyp zoom parkert til en senere, privat kundeopplevelse.

Det gir en markedsføringsside som lover metode og kvalitet, uten å late som at familien har delegert ansvar eller at AI har avgjort hva som er sant.
