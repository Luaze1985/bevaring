# Foreslått repo-struktur

Status: forslag — bare grunnfiler og `01_research/` finnes nå.

```text
HistorieBevaring/
├─ README.md
├─ AGENTS.md
├─ CONTEXT.md
├─ 01_research/                    # eksisterende evidens og hypoteser
│  ├─ 00_RESEARCH_INDEX.md
│  ├─ 01_verifiserte_fakta/
│  ├─ 02_konkurrent_og_produkt/
│  ├─ 03_interne_konsepter_og_hypoteser/
│  ├─ 04_kilder/
│  └─ 05_tidligere_faktasjekk/
├─ 02_metode/                      # opprettes etter godkjenning
│  ├─ AI_ARBEIDSMETODIKK.md
│  ├─ RESEARCHMETODE.md
│  ├─ KILDEKONTROLL.md
│  ├─ MENNESKELIG_KONTROLL.md
│  └─ ETIKK_SAMTYKKE_OG_PERSONVERN.md
├─ 03_produkt/                     # egen løsning, ikke benchmark
│  ├─ PRODUKTKONSEPT.md
│  ├─ KUNDEFLYT.md
│  ├─ PRAKTISK_AI_HJELP.md
│  ├─ PRODUKTPAKKER.md
│  └─ FAMILIEARKIV.md
├─ 04_arbeidsflyter/
│  ├─ intervju_og_tale/
│  ├─ research_og_kildesok/
│  ├─ transkripsjon_og_logg/
│  ├─ bilder_og_dokumenter/
│  ├─ faktasjekk_og_usikkerhet/
│  ├─ bok_lyd_og_formidling/
│  └─ arkivering_og_avlevering/
├─ 05_maler/
│  ├─ intervjuguider/
│  ├─ AI_prompter/
│  ├─ researchmaler/
│  ├─ samtykke/
│  └─ metadata_og_kildekort/
├─ 06_pilot/
│  ├─ MVP.md
│  ├─ PILOTPLAN.md
│  └─ TESTSCENARIER.md
├─ docs/
└─ 99_arkiv/
```

## Hvorfor dette skillet

1. Research beholdes som evidenslag: hva andre faktisk gjør, hva kildene støtter og hva som er usikkert.
2. Metodelaget skal beskrive Lars' etablerte arbeidsmåte: file-first, minste nyttige artefakt, fakta/antakelser, tydelige verktøyroller, menneskelig kontroll og dokumentert verifikasjon.
3. Produktlaget er HistorieBevarings egen syntese og norske tilpasning.
4. Arbeidsflytene gjør tjenesten praktisk: fra intervju og research til bok, lyd og familiearkiv.
5. Pilot opprettes sist, etter at metode og produktavgrensning er godkjent.

## Foreslåtte porter

- Port 0: research og struktur godkjent.
- Port 1: metode og etikk godkjent.
- Port 2: produktløfte og målgruppe testet.
- Port 3: én tynn ende-til-ende-pilot.

Ingen mapper fra `02_metode/` og videre er opprettet i første leveranse.
