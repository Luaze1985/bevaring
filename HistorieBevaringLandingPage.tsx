import React, { useState } from 'react';

interface ArchiveTrack {
  id: string;
  tag: string;
  title: string;
  desc: string;
  cue: string;
  caption: string;
}

interface ServiceOffer {
  num: string;
  category: string;
  title: string;
  desc: string;
}

const ARCHIVE_TRACKS: Record<string, ArchiveTrack> = {
  desk: {
    id: 'desk',
    tag: 'UTGANGSPUNKTET',
    title: 'Ett ekte spor er nok',
    desc: 'Et ukjent fotografi, en eiendom, en gjenstand eller et brev. Du trenger ikke ha oversikten på forhånd for å begynne å lete.',
    cue: 'Vi hjelper med å formulere de første gode spørsmålene.',
    caption: 'Bildeplassholder: Fotoomslag og notatbok på et lyst bord.'
  },
  material: {
    id: 'material',
    tag: 'MATERIALET',
    title: 'Hva vet vi med sikkerhet?',
    desc: 'Vi går gjennom hva som finnes av originale papirer, bilder eller opptegnelser, og skiller sikre opplysninger fra antakelser.',
    cue: 'Eget materiale forblir trygt hos deg.',
    caption: 'Bildeplassholder: Mappe og materialspor på et arbeidsbord.'
  }
};

const SERVICE_OFFERS: ServiceOffer[] = [
  {
    num: '01',
    category: 'DET DU GJØR SELV',
    title: 'Kildearbeid og innhold',
    desc: 'Du søker gjennom eget materiale, leser kildene og setter sammen historien. Du kjenner menneskene, konteksten og hva som er viktig å bevare.'
  },
  {
    num: '02',
    category: 'DET VERKTØYENE GJØR',
    title: 'Mekanisk sortering og oversikt',
    desc: 'Verktøyene sorterer råtekst, henter ut datoer og steder, lager tidslinjer og rydder i store notatmengder så du slipper uker med manuelt grovarbeid.'
  },
  {
    num: '03',
    category: 'DET VI BIDRAR MED',
    title: 'Fagkunnskap og veiledning',
    desc: 'Vi bidrar med arkivfaglig rettledning når du står fast i kildene, opplæring i relevante KI-verktøy, og råd om formidling og struktur.'
  },
  {
    num: '04',
    category: 'KILDEFORSTÅELSE',
    title: 'Ingen mirakler eller oppdiktede svar',
    desc: 'Vi skiller fakta fra antakelser. Arkiver har hull, og verktøy forstår ikke lokalhistorie alene. Hvert funn må kontrolleres mot originalen.'
  }
];

export const HistorieBevaringLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F4EFE4] text-[#182222] font-sans antialiased text-[18px] leading-[1.55] selection:bg-[#B4863D] selection:text-white">
      
      {/* Tilgjengelighet / Tastatursnarvei */}
      <a 
        href="#innhold" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 px-4 py-2.5 bg-[#182222] text-[#FCFAF5] font-bold text-sm outline-none ring-2 ring-[#B4863D]"
      >
        Hopp til innhold
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#FCFAF5]/96 backdrop-blur border-b border-[#CDC3B1]">
        <div className="max-w-[1180px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <a href="#start" className="font-extrabold text-[18px] tracking-tight text-[#182222] focus:outline-none focus:ring-2 focus:ring-[#B4863D]">
            HistorieBevaring<span className="text-[#B4863D]"> ·</span>
          </a>
          <nav aria-label="Hovedmeny" className="flex items-center gap-7 text-[15px] font-bold">
            <a href="#tilbud" className="hover:underline text-[#182222] focus:outline-none focus:ring-2 focus:ring-[#B4863D]">Hva vi tilbyr</a>
            <a href="#arbeidsmate" className="hover:underline text-[#182222] focus:outline-none focus:ring-2 focus:ring-[#B4863D]">Arbeidsmåten</a>
            <a href="#workshop" className="hover:underline text-[#182222] focus:outline-none focus:ring-2 focus:ring-[#B4863D]">Verksted</a>
            <a href="#kontakt" className="hover:underline text-[#182222] focus:outline-none focus:ring-2 focus:ring-[#B4863D]">Kontakt</a>
          </nav>
        </div>
      </header>

      <main id="innhold">

        {/* 1. Hero */}
        <section className="pt-16 pb-24 md:pt-24 md:pb-28 max-w-[1180px] mx-auto px-6" id="start">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[.1em] text-[#182222] uppercase mb-3">
                <span className="w-2 h-2 bg-[#B4863D]" />
                HISTORIEBEVARING · FORSØK
              </div>
              <h1 className="text-[42px] md:text-[66px] font-extrabold tracking-[-0.045em] leading-[1.0] mb-6 max-w-[14ch]">
                Fagmetode og verktøystøtte til historiematerialet ditt.
              </h1>
              <p className="text-[20px] md:text-[23px] text-[#525E5C] leading-[1.42] max-w-[52ch] mb-4">
                Vi har kompetanse på arkiv, kunstig intelligens og kommunikasjon. Nå ønsker vi å teste ut om det er interesse for et tilbud som kombinerer disse tre fagfeltene.
              </p>
              <p className="text-[17px] text-[#525E5C] leading-[1.5] max-w-[52ch] mb-8">
                Arkivene og kildene er de samme som før, men nye verktøy gjør at du kan gjøre mer av grovarbeidet selv. Du står for kildearbeidet, vurderingene og sammenstillingen – vi viser hvordan du navigerer i kildene og hvordan teknologien kan ta den mekaniske sorteringen.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="#kontakt"
                  className="inline-flex items-center justify-center min-h-[52px] px-7 bg-[#182222] hover:bg-[#2C3838] text-[#FCFAF5] font-bold text-[16px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B4863D]"
                >
                  Ta kontakt
                </a>
                <a 
                  href="#tilbud"
                  className="inline-flex items-center justify-center min-h-[52px] px-7 border border-[#A89C86] hover:bg-[#182222] hover:text-[#FCFAF5] text-[#182222] font-bold text-[16px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B4863D]"
                >
                  Se arbeidsdelingen
                </a>
              </div>
            </div>

            {/* Bildeplassholder: Arbeidsbord */}
            <figure 
              className="md:col-span-5 relative min-h-[460px] bg-[#E3DACB] border border-[#CDC3B1] p-6 flex flex-col justify-between hover:border-[#182222] focus-within:border-[#182222] transition-colors group cursor-pointer shadow-sm outline-none"
              tabIndex={0}
              aria-label="Plassholder: Notatark og fotolomme på et lyst arbeidsbord. Trykk eller hold over for å lese kildesporet."
            >
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FCFAF5] border border-[#CDC3B1] text-[11px] font-extrabold tracking-wider uppercase text-[#182222] w-fit z-10">
                <span className="w-1.5 h-1.5 bg-[#B4863D]" />
                ARBEIDSBORD
              </div>

              <div className="my-auto p-6 bg-[#FCFAF5] border border-[#CDC3B1] shadow-sm transform -rotate-1">
                <div className="flex gap-4 items-start mb-4">
                  <div className="w-16 h-20 bg-[#DDD5C5] border border-[#C4B8A2] shrink-0" />
                  <div>
                    <div className="font-bold text-lg leading-snug mb-1">Hva kan dette fortelle?</div>
                    <div className="text-xs text-[#525E5C]">Begynn med det du allerede har.</div>
                  </div>
                </div>
                <div className="h-px bg-[#CDC3B1] my-2" />
                <span className="w-2 h-2 bg-[#B4863D] inline-block float-right" />
              </div>

              {/* Rollover / Tastaturfokus lag */}
              <div className="absolute inset-0 bg-[#FCFAF5]/96 p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 border border-[#A89C86] z-20">
                <span className="text-[11px] font-extrabold tracking-wider text-[#182222] uppercase mb-1">UTGANGSPUNKTET</span>
                <h4 className="font-extrabold text-lg text-[#182222] mb-2">{ARCHIVE_TRACKS.desk.title}</h4>
                <p className="text-sm text-[#525E5C] leading-relaxed mb-3">{ARCHIVE_TRACKS.desk.desc}</p>
                <div className="text-xs font-bold text-[#182222] border-t border-[#CDC3B1] pt-2">{ARCHIVE_TRACKS.desk.cue}</div>
              </div>

              <figcaption className="text-xs text-[#525E5C] z-10">{ARCHIVE_TRACKS.desk.caption}</figcaption>
            </figure>

          </div>
        </section>

        {/* 2. Hva vi tilbyr */}
        <section className="py-20 bg-[#FCFAF5] border-t border-b border-[#CDC3B1]" id="tilbud">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[.1em] text-[#182222] uppercase mb-3">
              <span className="w-2 h-2 bg-[#B4863D]" />
              ARBEIDSDELING
            </div>
            <h2 className="text-[30px] md:text-[46px] font-extrabold tracking-tight leading-[1.06] mb-4">
              Hvordan vi jobber sammen
            </h2>
            <p className="text-[#525E5C] max-w-2xl mb-12">
              Målet er at du skal sitte i førersetet for din egen historie. Vi deler arbeidet ryddig:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICE_OFFERS.map((offer) => (
                <div key={offer.num} className="border border-[#CDC3B1] p-7 bg-[#F4EFE4]">
                  <span className="text-[11px] font-extrabold tracking-wider uppercase text-[#182222] block mb-2">
                    {offer.num} · {offer.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-sm text-[#525E5C] leading-relaxed">{offer.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#F4EFE4] border border-[#CDC3B1]">
              <span className="text-[11px] font-extrabold tracking-wider uppercase text-[#182222] block mb-1">
                PILOT
              </span>
              <h3 className="text-lg font-bold mb-2">Uforpliktende tilbakemelding</h3>
              <p className="text-sm text-[#525E5C] leading-relaxed">
                Dette er et forsøk for å se om det er behov for denne typen faglig og teknologisk drahjelp. Har du et materiale eller et spørsmål, ta gjerne kontakt.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Materialet */}
        <section className="py-20 md:py-28 max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            
            <figure 
              className="md:col-span-7 relative min-h-[440px] bg-[#E1D8C7] border border-[#CDC3B1] p-6 flex flex-col justify-between hover:border-[#182222] focus-within:border-[#182222] transition-colors group cursor-pointer shadow-sm outline-none"
              tabIndex={0}
              aria-label="Plassholder: Mappe og materialspor på et arbeidsbord. Trykk eller hold over for kildeoversikt."
            >
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FCFAF5] border border-[#CDC3B1] text-[11px] font-extrabold tracking-wider uppercase text-[#182222] w-fit z-10">
                <span className="w-1.5 h-1.5 bg-[#B4863D]" />
                SPOR 02 · MATERIALET
              </div>

              <div className="my-auto p-6 bg-[#EDE4D4] border border-[#CDC3B1] shadow-sm transform rotate-1 max-w-sm mx-auto">
                <div className="w-24 h-2 bg-[#182222] mb-3" />
                <div className="h-px bg-[#CDC3B1] my-2" />
                <div className="h-px bg-[#CDC3B1] my-2 w-3/4" />
                <span className="w-2 h-2 bg-[#7A3E34] inline-block mt-4" />
              </div>

              <div className="absolute inset-0 bg-[#FCFAF5]/96 p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 border border-[#A89C86] z-20">
                <span className="text-[11px] font-extrabold tracking-wider text-[#182222] uppercase mb-1">MATERIALET</span>
                <h4 className="font-extrabold text-lg text-[#182222] mb-2">{ARCHIVE_TRACKS.material.title}</h4>
                <p className="text-sm text-[#525E5C] leading-relaxed mb-3">{ARCHIVE_TRACKS.material.desc}</p>
                <div className="text-xs font-bold text-[#182222] border-t border-[#CDC3B1] pt-2">{ARCHIVE_TRACKS.material.cue}</div>
              </div>

              <figcaption className="text-xs text-[#525E5C] z-10">{ARCHIVE_TRACKS.material.caption}</figcaption>
            </figure>

            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[.1em] text-[#182222] uppercase mb-3">
                <span className="w-2 h-2 bg-[#B4863D]" />
                MATERIALET
              </div>
              <h2 className="text-[30px] md:text-[46px] font-extrabold tracking-tight leading-[1.06] mb-4">
                Du trenger ikke ha alt klart.
              </h2>
              <p className="text-[#525E5C] leading-[1.55]">
                Det er nok å starte med en enkel detalj – et navn på et skjøte, en hendelse i lokalavisen eller en muntlig fortelling. Målet er å finne ut hvilken tråd du vil nøste i.
              </p>
            </div>

          </div>
        </section>

        {/* 4. Mørk Metodeflate */}
        <section className="py-24 bg-[#182222] text-[#FCFAF5]" id="arbeidsmate">
          <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <div className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[.1em] text-[#E7C985] uppercase mb-3">
                <span className="w-2 h-2 bg-[#E7C985]" />
                ARBEIDSMÅTE
              </div>
              <h2 className="text-[32px] md:text-[48px] font-extrabold tracking-tight leading-[1.06] mb-4 text-[#FCFAF5] max-w-[17ch]">
                AI hjelper oss med grovarbeidet. Mennesket har ansvaret for sannheten.
              </h2>
              <p className="text-[#D8DFDE] leading-[1.55] max-w-[58ch]">
                Språkmodeller og digitale verktøy er effektive til å transkribere, trekke ut stikkord og foreslå sammenhenger. Men AI forstår ikke lokal kontekst alene og kan dikte opp opplysninger. Derfor må alle funn forankres i kildene, og formidlingen gjøres i tett dialog med deg.
              </p>
            </div>
            <aside className="md:col-span-4 p-6 border-t border-b border-white/25 text-[#E7C985] font-bold text-lg leading-snug">
              Vi bruker AI som et praktisk verktøy for å spare tid – aldri som en erstatning for kildekritikk og menneskelig dømmekraft.
            </aside>
          </div>
        </section>

        {/* 5. Workshop */}
        <section className="py-24 max-w-[1180px] mx-auto px-6" id="workshop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[.1em] text-[#182222] uppercase mb-3">
                <span className="w-2 h-2 bg-[#B4863D]" />
                VERKSTED · KRISTIANSAND
              </div>
              <h2 className="text-[32px] md:text-[46px] font-extrabold tracking-tight leading-[1.06] mb-4">
                En rolig start på din egen leting.
              </h2>
              <p className="text-[20px] text-[#525E5C] leading-[1.42] mb-6">
                En mulig første pilot er et lite verksted på omtrent to og en halv time.
              </p>
              <p className="text-xs text-[#525E5C] leading-relaxed">
                Dette er en interesseinvitasjon, ikke et bekreftet arrangement. Tid, sted og kapasitet bestemmes først når vi vet om det er grunnlag for en pilot.
              </p>
            </div>

            <div className="md:col-span-7">
              <ol className="divide-y divide-[#CDC3B1] border-t border-[#CDC3B1]">
                <li className="grid grid-cols-[36px_1fr] gap-4 py-5">
                  <span className="font-extrabold text-[#182222]">01</span>
                  <div>
                    <h3 className="font-bold text-lg">Ta med ett spørsmål eller dokument</h3>
                    <p className="text-sm text-[#525E5C]">Et gammelt brev, et bilde, en eiendom eller en historie du lurer på.</p>
                  </div>
                </li>
                <li className="grid grid-cols-[36px_1fr] gap-4 py-5">
                  <span className="font-extrabold text-[#182222]">02</span>
                  <div>
                    <h3 className="font-bold text-lg">Lær enkle triks og metoder</h3>
                    <p className="text-sm text-[#525E5C]">Vi viser praktiske søkegrep i arkivene, og hvordan enkel AI-støtte kan hjelpe med tyding og sortering uten å rote det til.</p>
                  </div>
                </li>
                <li className="grid grid-cols-[36px_1fr] gap-4 py-5">
                  <span className="font-extrabold text-[#182222]">03</span>
                  <div>
                    <h3 className="font-bold text-lg">Gjør det selv – eller kom tilbake</h3>
                    <p className="text-sm text-[#525E5C]">Gå hjem med enkle triks du kan bruke selv. Trenger du mer hjelp senere, kan du komme tilbake til oss for videre bistand.</p>
                  </div>
                </li>
              </ol>

              <aside className="mt-8 p-6 bg-[#FCFAF5] border border-[#CDC3B1]">
                <h3 className="font-bold text-base mb-3">Hva du sitter igjen med</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#525E5C]">
                  <li>Enkle triks og søkemetoder du kan ta med hjem og bruke i eget tempo</li>
                  <li>Erfaring med trygg og nøktern bruk av AI på historisk materiale</li>
                  <li>En konkret kildeliste og retning for videre leting</li>
                  <li>Mulighet til å komme tilbake til oss for mer hjelp hvis du står fast</li>
                </ul>
              </aside>
            </div>

          </div>

          <div className="mt-8 text-xs text-[#525E5C] max-w-2xl leading-relaxed">
            Du velger selv hva du deler. Vi bruker nøytrale eksempler i fellesskap. Fakta, samtykke, publisering og bevaring av eget materiale er ditt ansvar.<br /><br />
            <strong>Om tid og kostnad:</strong> Vi lover ikke at du finner alle svar på to og en halv time, men du lærer metoden og verktøyene. Å gå i dybden tar tid – både din tid og vår tid. Dersom du senere ønsker at vi skal gjøre større letearbid, tyding eller formidling for deg, avtaler vi omfang og kostnad nærmere på forhånd.
          </div>
        </section>

        {/* 6. Om oss (Plassholder inntil videre) */}
        <section className="py-20 border-t border-[#CDC3B1] max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            
            <div className="md:col-span-7 relative min-h-[360px] bg-[#E3DACB] border border-[#CDC3B1] p-6 flex flex-col justify-between shadow-sm">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FCFAF5] border border-[#CDC3B1] text-[11px] font-extrabold tracking-wider uppercase text-[#182222] w-fit z-10">
                <span className="w-1.5 h-1.5 bg-[#B4863D]" />
                FAGLIG VERKSTED
              </div>

              <div className="my-auto p-6 bg-[#FCFAF5] border border-[#CDC3B1] shadow-sm max-w-sm mx-auto">
                <div className="text-[11px] font-extrabold uppercase text-[#182222] mb-2 tracking-wider">FAGMILJØ</div>
                <div className="h-px bg-[#CDC3B1] my-2" />
                <div className="h-px bg-[#CDC3B1] my-2 w-2/3" />
                <span className="w-2 h-2 bg-[#B4863D] inline-block mt-3" />
              </div>

              <div className="text-xs text-[#525E5C]">Bildeplassholder: Et nøytralt verkstedbord med skriveark og mapper.</div>
            </div>

            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[.1em] text-[#182222] uppercase mb-3">
                <span className="w-2 h-2 bg-[#B4863D]" />
                OM OSS
              </div>
              <h2 className="text-[30px] md:text-[46px] font-extrabold tracking-tight leading-[1.06] mb-4">
                Arkivblikk og kvalitet i ekte oppgaver.
              </h2>
              <p className="text-[#525E5C] leading-[1.55] mb-6">
                Vi arbeider med spørsmål, materiale og kildevurderinger som må tåle at noen ser etter. Full presentasjon av fagmiljøet og metodeverter oppdateres før offentlig publisering.
              </p>
              
              <div className="p-4 bg-[#FCFAF5] border border-[#CDC3B1] text-sm text-[#525E5C]">
                <strong>Metodevert:</strong> Lars Erik Brekne Johnsen · Kristiansand<br />
                <span className="text-xs text-[#8A9694]">Ytterligere samarbeidspartnere og roller avklares før lansering.</span>
              </div>
            </div>

          </div>
        </section>

        {/* 7. Kontakt */}
        <section className="py-20 bg-[#FCFAF5] border-t border-[#CDC3B1]" id="kontakt">
          <div className="max-w-[760px] mx-auto px-6">
            <div className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[.1em] text-[#182222] uppercase mb-3">
              <span className="w-2 h-2 bg-[#B4863D]" />
              KONTAKT
            </div>
            <h2 className="text-[30px] md:text-[46px] font-extrabold tracking-tight leading-[1.06] mb-4">
              Har du et historiemateriale du vil se nærmere på?
            </h2>
            <p className="text-[20px] text-[#525E5C] leading-[1.42] mb-8">
              Dette er et forsøk på å se om det er interesse for et tilbud som kombinerer arkiv, kunstig intelligens og kommunikasjon. Ta gjerne kontakt og fortell hva slags materiale eller spørsmål du har.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="mailto:lars.erik@breknejohnsen.no?subject=HistorieBevaring" 
                className="inline-flex items-center justify-center min-h-[52px] px-7 bg-[#182222] hover:bg-[#2C3838] text-[#FCFAF5] font-bold text-[16px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B4863D]"
              >
                Ta kontakt
              </a>
            </div>

            <div className="pt-6 border-t border-[#CDC3B1] space-y-2 text-[17px] font-bold">
              <div>Telefon: [sett inn nummer]</div>
              <div>E-post: [sett inn e-post]</div>
            </div>

            <details className="mt-8 pt-4 border-t border-[#CDC3B1] text-sm text-[#525E5C]">
              <summary className="cursor-pointer font-bold py-2 hover:text-[#182222]">
                Før publisering må dette avklares
              </summary>
              <div className="pt-3 pl-4 space-y-1.5 text-xs">
                <div>[?] Varighet, dato, sted og kapasitet.</div>
                <div>[?] Faktisk telefonnummer og e-post.</div>
                <div>[?] Navn, roller og bildebruk for medvirkende.</div>
                <div>[?] Rettigheter til foto, film og annet materiale.</div>
              </div>
            </details>
          </div>
        </section>

      </main>

      <footer className="py-8 border-t border-[#CDC3B1] text-xs text-[#525E5C]">
        <div className="max-w-[1180px] mx-auto px-6">
          HistorieBevaring · v3 produksjonsklar modul · ren lokal TypeScript/Tailwind-komponent
        </div>
      </footer>

    </div>
  );
};

export default HistorieBevaringLandingPage;
