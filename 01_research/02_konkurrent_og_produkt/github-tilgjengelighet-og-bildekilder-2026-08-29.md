# GitHub-kartlegging: tilgjengelighet, illustrasjon og visuelt skall

**Dato:** 29. august 2026  
**Formål:** Finne lisensklare, åpne byggesteiner som kan informere `design.md` før eventuell koding av en norsk markedsnettside for HistorieBevaring.  
**Avgrensning:** Dette er en design- og kildebrief, ikke et valg om rammeverk, installasjon eller kopiering av kode. Alle lenker går til prosjektenes egne GitHub-sider eller lisensfiler.

## Konklusjon

Det mest passende første skallet er **rolig, tekstnært og dokumentorientert**, ikke en typisk AI-startup-side. Bygg uttrykket rundt en varm, lys bakgrunn, tydelig lesbar typografi, få og meningsbærende illustrasjoner, og konkrete eksempler på arbeidsflyten:

`minne → intervju → originaler → kildekontroll → utkast → familien avgjør`.

Til første post og workshop-siden bør bilder ikke bære tillit alene. Bruk heller egne, anonyme artefakter: et beskåret bilde av en notatbok, en håndskrevet tidslinje, en skannet detalj som familien har gitt uttrykkelig tillatelse til, eller en enkel CC0-illustrasjon. Det passer også ansvarslinjen: Familien styrer egne minner, samtykker og publisering.

## Anbefalt visuelt skall for `design.md`

### 1. Bilde- og illustrasjonsretning

- **Primærmotiv:** Hender, papir, bilder, lyd og samtale – ikke AI-genererte portretter av påståtte familier eller generiske «glødende KI-hjerner».
- **Hero:** Én rolig, taktil illustrasjon eller et anonymisert eksempel på en arbeidsflate; ikke et foto av en gjenkjennbar person uten dokumentert samtykke.
- **Prosessdelen:** Små, enkle strektegninger/ikoner for intervju, mappe, lupe/kildesjekk, lyd og bok. De skal forklare stegene, ikke dekorere dem.
- **Mennesker i eksempler:** Bruk nøytrale illustrerte avatarer eller fiktive navn. Ikke bland reelle kundehistorier og markedsføring før skriftlig tillatelse og konkret publiseringsavklaring finnes.

### 2. Sidehierarki

1. **Rolig start:** «Bevar familiehistorien – med AI du har kontroll på.» Én knapp: interesse for pilotworkshop.
2. **Hva dere lærer:** struktur, intervju, research, førsteutkast og kontrollpunkter.
3. **Slik arbeider du:** fem eller seks tydelige, nummererte steg med korte forklaringer.
4. **Ansvarsgrense:** Familien tar endelige valg om fakta, samtykke, publisering og bevaring; dere bidrar med praktisk AI og kvalitet.
5. **Pilotformat:** 90 minutter, nøytrale eksempler i fellesrommet, eget materiale holdes privat.
6. **Neste steg:** Påmelding/interesse; privat kartlegging først etter workshop ved et konkret behov.

### 3. Typografi og tone

- Bruk én lettlest sans serif til brødtekst og grensesnitt; vurder en diskret serif bare for sitater eller kapittelmarkører, ikke som identitetsbærende «slektshistorie-stil».
- Stor nok skrift, god linjeavstand, tydelige lenker og synlige fokusmarkører er viktigere enn et nostalgisk uttrykk.
- Norsk språk og konkrete verb: «samle», «spørre», «sjekke», «sortere», «velge». Unngå løfter om at AI «bevarer», «verifiserer» eller «sikrer» historien på egen hånd.

## Kilder som kan brukes med tydelig lisens

### Aksel – norsk designretning og komponentreferanse

- **Repository:** [navikt/aksel](https://github.com/navikt/aksel)
- **Lisens:** [MIT](https://github.com/navikt/aksel/blob/main/LICENSE)
- **Hva prosjektet er:** NAVs designssystem med React-komponenter, CSS, designtokens, ikoner og dokumentasjon.
- **Aktuell anvendelse:** Bruk som referanse for tydelige skjema, knapper, feilmeldinger, spacing og norsk klarspråk. Det passer særlig workshop-påmelding og ansvarsavklaringer.
- **Tilpasning:** Ikke kopier NAVs visuelle identitet eller la siden ligne en offentlig tjeneste. Ta med prinsippene, men lag et eget varmt og ikke-byrokratisk uttrykk.

### React Aria – tilgjengelige interaksjoner uten ferdig visuell identitet

- **Repository:** [adobe/react-spectrum](https://github.com/adobe/react-spectrum)
- **Lisens:** [Apache-2.0](https://github.com/adobe/react-spectrum/blob/main/LICENSE)
- **Hva prosjektet er:** React Aria tilbyr ustilede komponenter og hooks for tilgjengelige interaksjoner; prosjektet beskriver tastatur- og skjermleserstøtte basert på WAI-ARIA-praksis.
- **Aktuell anvendelse:** Aktuelt først dersom den kommende siden får menyer, dialog, trekkspill/FAQ, påmeldingsskjema eller annet med tastaturnavigasjon. Gir frihet til et eget uttrykk.
- **Tilpasning:** Dette er ikke en visuell mal. Tilgjengelig semantikk, synlig fokus og god kontrast må fortsatt bestemmes og testes i eget design.

### Lucide – nøkterne prosessikoner

- **Repository:** [lucide-icons/lucide](https://github.com/lucide-icons/lucide)
- **Lisens:** [ISC](https://github.com/lucide-icons/lucide/blob/main/LICENSE)
- **Hva prosjektet er:** Et åpent ikonsett, med tillatelse til kommersiell og personlig bruk.
- **Aktuell anvendelse:** Velg maksimalt fem–seks ikoner som forsterker arbeidsflyten: mikrofon, mappe, søk, fil, bok og pil. Bruk tekstetikett ved siden av ikonet.
- **Tilpasning:** Ikoner må aldri være eneste bærer av mening. Unngå tegn som kan tolkes som løfte om juridisk sikkerhet, arkivgaranti eller medisinsk effekt.

### DiceBear – nøytrale, illustrative eksempler uten kundebilder

- **Repository:** [dicebear/dicebear](https://github.com/dicebear/dicebear)
- **Stil- og lisensoversikt:** [dicebear/styles – LICENSE.md](https://github.com/dicebear/styles/blob/main/LICENSE.md)
- **Kode-lisens:** MIT. **Illustrasjonsstiler:** har ulike lisenser og må vurderes hver for seg.
- **Lisensklare valg:** `Open Peeps`, `Notionists Neutral`, `Moods`, `Pixel Art Neutral` og flere andre er oppført som [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) i prosjektets egen lisensoversikt.
- **Aktuell anvendelse:** Anonyme eksempelfigurer i workshopmateriale eller et fiktivt prosesscase. Det kan redusere behovet for å bruke familiers ansikter eller private bilder i tidlig markedsføring.
- **Tilpasning:** Ikke bruk avatarer som om de forestiller ekte kunder. Lås valgt stil og lisens i prosjektets kildeoversikt før eventuell publisering; ikke anta at alle DiceBear-stiler er CC0.

### Atkinson Hyperlegible Next – mulig tilgjengelig brødskrift

- **Repository:** [googlefonts/atkinson-hyperlegible-next](https://github.com/googlefonts/atkinson-hyperlegible-next)
- **Lisens:** [SIL Open Font License 1.1](https://github.com/googlefonts/atkinson-hyperlegible-next/blob/main/OFL.txt)
- **Hva prosjektet er:** En nyere fontfamilie utviklet med særlig vekt på lett gjenkjennelige bokstavformer.
- **Aktuell anvendelse:** Kandidat for brødtekst og skjema dersom prøveoppsett med norsk tekst fungerer godt. Den understreker sidens inkluderende, praktiske karakter uten å bli teknologisk.
- **Tilpasning:** Test særlig `æ`, `ø`, `å`, tall, kursiv og liten skjerm før valg. Tilgjengelig font fritar ikke siden fra krav om god størrelse, kontrast og luft.

## Bildekilder som bevisst ikke anbefales som standard nå

| Kilde/type | Hvorfor ikke standardvalg i første fase |
| --- | --- |
| Reelle familieportretter og fotoalbum | Krever konkret avklaring av motiv, opphavsrett, samtykke og publiseringsform per bilde. |
| AI-genererte «familier» | Kan skape feil forventning om autentisitet og passer svakt med løftet om dokumentasjon og kildekontroll. |
| UnDraw-kompileringer på GitHub | Kode-wrapperen kan ha åpen lisens, men kunsten kan fortsatt være under unDraws egne vilkår. Ikke bruk uten å kontrollere originalvilkårene ved publisering. |
| Stockfoto med uklar modell-/redaksjonell lisens | Oppfyller ikke kravet om tydelig lisenssporing og kan virke generisk eller misvisende i en tillitsbasert tjeneste. |

## Minimumskrav før visuelle elementer går fra skisse til publisering

- Registrer kilde, eksakt URL, lisens, dato og konkret bruk for hvert ikke-eget bilde, ikon eller font.
- Sjekk tekstkontrast og tastaturnavigasjon i den faktiske siden; en åpen komponentpakke er ikke nok bevis alene.
- Beskriv om bildet er illustrasjon, fiktivt eksempel eller ekte familie-/kundemateriale.
- For ekte materiale: avklar rettigheter, personvern og publiseringssamtykke separat fra eventuell samtykke til intervju/opptak.
- Ikke bruk navn, bilder eller roller på kollegaer før de selv har sagt ja.

## Forslag til første designbeslutning

Før kodestart: lag `design.md` med et **«rolig arkivverksted»**-skall:

- lys papir-/sandbakgrunn, mørk gråbrun tekst og én dempet aksentfarge
- Atkinson Hyperlegible Next eller tilsvarende testet brødskrift
- én CC0-illustrert prosessfigur eller egen, anonym arbeidsflate i hero
- Aksel som referanse for skjema/struktur og Lucide for prosessikoner
- ikke mer enn én heroillustrasjon og seks små prosessikoner på forsiden

Dette gir et tydelig avsenderuttrykk uten å påstå at teknologien eller nettsiden tar ansvar for familiens materiale.

## Kildekontroll og begrensning

Statusen over gjelder lisensene og repository-beskrivelsene slik de står i prosjektenes egne GitHub-sider 29. august 2026. Lisens kan endres mellom versjoner; ved implementering må den konkrete versjonen og filen som tas i bruk registreres på nytt. Dette notatet er ikke juridisk rådgivning.
