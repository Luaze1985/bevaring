# AGENTS.md — HistorieBevaring

**Les først:** rot-`AGENTS.md` + rot-`CONTEXT.md` i Documents, deretter lokal `README.md`, `CONTEXT.md` og aktuell researchfil.

**Scope:** Utvikle en norsk, assistert tjeneste for praktisk AI-hjelp, research, intervju, dokumentasjon, kildekontroll, arkivfaglig støtte og ferdig bok, lyd og familiearkiv.
**Status:** AKTIV — researchport, produktbygging pauset.

## Kilde- og arbeidsregler

- Skil alltid mellom verifiserte fakta, aktørens egne markedsføringspåstander, vår vurdering og intern hypotese.
- Konkurrentmetoder er benchmark. De blir ikke HistorieBevarings metode uten synlig kilde, vurdering og norsk tilpasning.
- Pris, funksjoner og regulatoriske forhold skal datostemples og kontrolleres på nytt før beslutning eller publisering.
- Bevar originalopptak, originaldokumenter og kildehenvisninger. AI-utkast skal kunne spores tilbake til input og gjennomgås av et menneske.
- Ikke flytt materiale fra `01_research/03_interne_konsepter_og_hypoteser/` til verifiserte fakta uten ny kontroll.

## Ikke les / ikke gjør

- `.env`, secrets og credentials skal aldri leses.
- Private persondata skal ikke legges i repoet.
- Ingen destruktive git-kommandoer. Ingen commit uten Lars. (Auto-push er satt opp via `.git/hooks/post-commit` slik at commits automatisk sendes til origin/main).
- Ikke bygg produkt, MVP, prompts eller automatisering før researchporten er godkjent.

## Neste handling + sannhetskilde

- Neste: Lars gjennomgår `docs/foreslatt-repostruktur.md` og `01_research/00_RESEARCH_INDEX.md`.
- Sannhetskilde for nåværende status: `CONTEXT.md`.

## Agent skills

- Issue tracker: lokal Markdown; se `docs/agents/issue-tracker.md`.
- Triage labels: se `docs/agents/triage-labels.md`.
- Domain docs: se `docs/agents/domain.md`.
