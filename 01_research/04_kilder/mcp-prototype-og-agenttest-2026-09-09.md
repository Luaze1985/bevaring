---
title: "MCP-prøve for statisk designutkast"
date: 2026-09-09
status: research
tags: [mcp, lovable, claude, prototype, sikkerhet]
---

# MCP-prøve for statisk designutkast

## Kort konklusjon

🟢 En liten, privat designprøve i Lovable kan være nyttig for å sammenligne en visuell landingsside mot `design-v3.md`. Den bør brukes som en **skissegenerator**, ikke som publisering eller produktutvikling.

🟠 Koblingen er ikke risikofri: Lovable opplyser at en tilkoblet MCP-klient får samme tilgang som brukeren selv, på tvers av alle Lovable-prosjekter, og at verktøykall skjer direkte på konto/prosjekter. Byggekall bruker også kreditter. Derfor skal første prøve ha et lukket mandat, ingen kunde-/arkivdata og ingen utrulling.

## Hva den offisielle dokumentasjonen sier

- MCP er en åpen standard som lar AI-klienter koble seg til eksterne verktøy og arbeidsflyter. Det er en teknisk kobling, ikke en garanti for at resultatet er faglig eller visuelt riktig. [MCP-dokumentasjonen](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro)
- Lovable tilbyr MCP for blant annet ChatGPT, Claude, Claude Code og VS Code. Agenten kan opprette prosjekter, sende byggeinstrukser, lese kode og hente differ. Publisering er valgfritt. [Lovable MCP server](https://docs.lovable.dev/integrations/lovable-mcp-server)
- Lovable sier uttrykkelig at en tilkoblet klient arver brukerens kontotilgang: den kan liste, lese og redigere alle prosjekter brukeren har tilgang til. `create_project` og `send_message` bruker vanlige Lovable-kreditter. [Lovable MCP server – tilgang og kreditter](https://docs.lovable.dev/integrations/lovable-mcp-server)
- Claude anbefaler at man bare kobler til betrodde MCP-servere, leser OAuth-rettigheter nøye og ikke gir «Allow always» uten å forstå hvert verktøy. Eksterne koblinger kan få tilgang til og potensielt endre data i de tjenestene brukeren har gitt dem rettigheter til. [Claude: custom connectors og sikkerhet](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)

## Anbefalt minsteprøve: «én statisk skisse»

**Formål:** Få et visuelt sammenligningsgrunnlag for presentasjonssiden «Spor og funn» – ikke bygge ferdig nettside.

### Før eventuell tilkobling

1. Ferdigstill og godkjenn `design-v3.md` først. MCP skal tolke et låst designbrief, ikke finne opp posisjonering.
2. Bruk bare fiktive plassholdere: `[telefonnummer]`, `[e-post]`, `[bilde: hendene ved et arkivbord]`. Ikke last opp familiearkiv, kundemateriale, portretter eller faktiske kontaktlister.
3. Avklar hvilken Lovable-workspace som er trygg å bruke. Om abonnementet tillater det, velg begrenset prosjekt-/redaktørtilgang. Dette begrenser ikke MCP-kontoens grunnleggende rekkevidde, men reduserer hvem som kan se skissen.
4. Avtal en lav kredittgrense: **ett opprettingskall og maksimalt to forbedringskall**. Stopp før et tredje kall og vurder resultatet manuelt.

### Mandat til agenten

Kun dette er tillatt:

- opprette én privat, statisk presentasjonsside for intern designgjennomgang
- bruke designbriefet som eneste innholdsgrunnlag
- bruke plassholderbilder og korte norske tekster
- lage responsiv layout, uten innsending, analyse, innlogging, database eller eksterne koblinger
- vise preview og kodeendringer etter hvert steg

Uttrykkelig utenfor mandatet:

- ikke `deploy_project`
- ikke database, SQL, autentisering, filopplasting eller integrasjoner
- ikke ekte familiehistorier, arkivbilder, samtykkebaserte portretter eller kontaktdata
- ikke endre eksisterende Lovable-prosjekter, arbeidsområdets kunnskapsfelt eller ferdige design-systemer

### Foreslått rekkefølge

1. Koble til via OAuth først når eier har valgt å gjøre det. OAuth og aktiv tilkobling er en bevisst tilgangsbeslutning; den utføres ikke som del av denne researchen.
2. Be agenten lage en **plan uten bygging** først. Lovable dokumenterer `plan_mode` for å diskutere før agenten bygger. Godkjenn planen bare dersom den holder seg til én statisk side.
3. Be om første skisse med en prompt som peker til de konkrete prinsippene: varm papirflate, dempet blekkblå/grønn/rust, få bokser, store foto-plassholdere og scroll-fortellingen «spørsmål → materiale → søk og finn → vurdering → workshop i Kristiansand → kontakt».
4. Se preview. Deretter hent differ og filoversikt; Lovable dokumenterer `get_diff`, `list_files`, `read_file` og redigeringshistorikk som kontrollmuligheter.
5. Tillat høyst to målrettede forbedringer, for eksempel «fjern kort/SaaS-uttrykk» eller «mer luft rundt fotoessayet». Behold eller forkast skissen uten å publisere.

## Godkjenningsport for første skisse

Skissen kan gå til manuell vurdering bare dersom den:

- gjør workshop i Kristiansand og kontaktinvitasjonen tydelig
- beskriver arkivkompetanse, søk/finn og praktisk AI som støtte – ikke som automatisert sannhetsmaskin
- viser reell oppdagelse og eget materiale, fremfor generisk teknologisalg
- bruker plassholdere der rettigheter, navn og samtykke ikke er avklart
- ikke har skjema, innsamling av personopplysninger eller påstander om ferdig produkt

## Åpne avklaringer før kobling

- [?] Hvilken Lovable-workspace er riktig å bruke, og hvem har innsyn der?
- [?] Ønsker du skisse kun i Lovable, eller også en lokal HTML-variant som sammenligningsgrunnlag?
- [?] Skal et faktisk telefonnummer og e-post stå i den første interne skissen, eller først etter godkjenning?
- [?] Har Harde og den andre Lars godkjent offentlig navnebruk, rolle og eventuelt bilde? Inntil da brukes bare generiske team-plassholdere.

## Kilder

1. [Lovable MCP server](https://docs.lovable.dev/integrations/lovable-mcp-server) — funksjon, arbeidsflyt, OAuth, tilgang, kreditter og kontrollverktøy. Lest 2026-09-09.
2. [Model Context Protocol: introduksjon](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro) — hva MCP er. Lest 2026-09-09.
3. [Claude: Get started with custom connectors using remote MCP](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) — tillit, rettigheter og verktøygodkjenning. Lest 2026-09-09.

