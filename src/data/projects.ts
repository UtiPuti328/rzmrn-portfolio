import type { Project } from "@/types";

export const projects: Project[] = [
  // ── Case Study Projects ──────────────────────────────────────────
  {
    slug: "ai-content-pipeline",
    title: {
      en: "40% Faster Releases at 5,000-Client Scale",
      pl: "40% Szybsze Wdrożenia przy Skali 5000+ Klientów"
    },
    client: "Major Education Platform",
    category: "content-pipeline",
    type: "system",
    year: 2024,
    thumbnail: "/images/projects/ai-content-pipeline-poster.jpg",
    videoLoop: "/videos/covers/loop-ai-content-pipeline.mp4",
    description: {
      en: "AI-augmented production pipeline for a major education platform.",
      pl: "Wsparty przez AI pipeline produkcyjny dla dużej platformy edukacyjnej."
    },
    tags: ["AI Pipeline", "Production", "Automation"],
    architecture: "AI-augmented batch processing pipeline",
    metrics: "40% faster release cycles", // Note: metrics in base project is string, but we can leave it as string or it isn't used much? Wait, SystemProject has `metrics: string`. I forgot to change it to TString. I'll change it later if needed, or leave it.
    featured: true,
    order: 1,
    status: "completed",
    caseStudy: {
      track: "hybrid",
      headline: {
        en: "40% Faster Releases at 5,000-Client Scale",
        pl: "40% Szybsze Wdrożenia przy Skali 5000+ Klientów"
      },
      subtitle: {
        en: "AI-augmented production pipeline for a major education platform.",
        pl: "Wsparty przez AI pipeline produkcyjny dla dużej platformy edukacyjnej."
      },
      metrics: [
        { value: "5,000+", label: "Active clients" },
        { value: "221", label: "Lectures produced" },
        { value: "22", label: "Courses delivered" },
        { value: "40%", label: "Faster release cycle" },
      ],
      challenge: {
        en: "A major education platform needed to scale course production without scaling the team. Each course required weeks of manual work: multi-cam shoots, graphics generation, b-roll creation, quality control, file management. Everything done by hand.\n\nThe bottleneck wasn't creative — it was operational. One person was responsible for the entire production pipeline serving 5,000+ clients. The question wasn't whether to automate — it was how deep the automation could go without sacrificing quality.",
        pl: "Jedna z czołowych platform edukacyjnych musiała przeskalować produkcję kursów bez powiększania zespołu. Każdy kurs wymagał tygodni ręcznej pracy: nagrań z wielu kamer, generowania grafik, tworzenia przebitek (b-roll), kontroli jakości i zarządzania plikami. Wszystko robione ręcznie.\n\nWąskim gardłem nie była kreatywność — lecz operacyjność. Jedna osoba odpowiadała za cały pipeline produkcyjny obsługujący ponad 5000 klientów. Pytanie nie brzmiało 'czy automatyzować', ale 'jak głęboko można to zautomatyzować bez utraty jakości'."
      },
      approach: {
        en: "Built a multi-layer automation pipeline that addressed each production bottleneck:\n\nLayer 1 — Shoot optimization: AI-generated thematic green screen backgrounds that change per course, eliminating physical set changes entirely.\n\nLayer 2 — B-roll pipeline: n8n workflow analyzes each lecture transcript, extracts 6-10 key visual concepts, generates images via AI, animates through Hailuo video model, and outputs ready-to-edit animated b-roll inserts.\n\nLayer 3 — Post-production: ExtendScript batch processing in Premiere Pro for repetitive timeline operations across hundreds of lectures.\n\nLayer 4 — Quality & delivery: Structured QC checklist maintaining ISO 9001 compliance, templated export presets for consistent output.",
        pl: "Zbudowałem wielowarstwowy pipeline automatyzacji, który rozwiązał każde wąskie gardło produkcji:\n\nWarstwa 1 — Optymalizacja nagrań: generowane przez AI tematyczne tła do green screenu, zmieniające się dla każdego kursu, całkowicie eliminujące fizyczne zmiany scenografii.\n\nWarstwa 2 — Pipeline B-roll: workflow z użyciem n8n analizuje transkrypcję każdego wykładu, wyciąga 6-10 kluczowych pojęć wizualnych, generuje obrazy przez AI, animuje je za pomocą modelu Hailuo i wypuszcza gotowe do montażu animowane przebitki.\n\nWarstwa 3 — Post-produkcja: przetwarzanie wsadowe za pomocą ExtendScript w Premiere Pro dla powtarzalnych operacji na osi czasu na przestrzeni setek wykładów.\n\nWarstwa 4 — Jakość i dostarczanie: ustrukturyzowana lista kontrolna QC utrzymująca zgodność z ISO 9001, zszablonowane presety eksportu dla spójnych wyników."
      },
      result: {
        en: "Release cycles shortened by 40%. 221 lectures across 22 courses delivered with consistent quality. One person — full production coverage for an entire platform serving 5,000+ clients. The pipeline turned a manual bottleneck into a scalable system.",
        pl: "Cykle wdrożeniowe skrócone o 40%. Dostarczono 221 wykładów w 22 kursach ze stałą i najwyższą jakością. Jedna osoba — pełne pokrycie produkcyjne dla całej platformy obsługującej ponad 5000 klientów. Pipeline przekształcił ręczne wąskie gardło w skalowalny system."
      },
      role: {
        en: "Head of Content Production",
        pl: "Head of Content Production"
      },
      stackTags: [
        "Premiere Pro",
        "After Effects",
        "ExtendScript",
        "Claude API",
        "Midjourney",
        "n8n",
        "Hailuo",
        "Multi-cam",
        "ISO 9001",
      ],
    },
  },
  {
    slug: "production-studio",
    title: {
      en: "250+ Projects. 120 US Clients. One Person.",
      pl: "250+ Projektów. 120 Klientów ze w USA. Jedna Osoba."
    },
    client: "Independent",
    category: "commercial",
    type: "visual",
    year: 2024,
    thumbnail: "/images/projects/production-studio-poster.jpg",
    videoLoop: "/videos/covers/loop-production-studio.mp4",
    description: {
      en: "A one-person production studio that scaled to $50/hr through systems, not headcount.",
      pl: "Jednoosobowe studio produkcyjne, które przeskalowało stawki do $50/h dzięki systemom, a nie nowym pracownikom."
    },
    tags: ["Production", "Freelance", "Scale"],
    role: "Independent Producer",
    deliverable: "250+ video projects across all formats",
    featured: true,
    order: 2,
    status: "completed",
    caseStudy: {
      track: "production",
      headline: {
        en: "250+ Projects. 120 US Clients. One Person.",
        pl: "250+ Projektów. 120 Klientów w USA. Jedna Osoba."
      },
      subtitle: {
        en: "A one-person production studio that scaled to $50/hr through systems, not headcount.",
        pl: "Jednoosobowe studio produkcyjne, które przeskalowało stawki do $50/h dzięki systemom, a nie nowym pracownikom."
      },
      metrics: [
        { value: "250+", label: "Completed projects" },
        { value: "120", label: "US clients" },
        { value: "$50/hr", label: "Premium tier" },
        { value: "5★", label: "Client rating" },
      ],
      challenge: {
        en: "Fiverr is a race to the bottom. Thousands of editors competing on price. The question wasn't how to get more gigs — it was how to build a sustainable production operation that scales without a team and commands premium rates.\n\nMost freelancers burn out or stagnate at low rates. The challenge: scale output and raise rates without hiring anyone, while maintaining quality that earns repeat business from US market clients.",
        pl: "Fiverr to równia pochyła. Tysiące montażystów konkurujących tylko ceną. Pytanie nie brzmiało 'jak zdobyć więcej zleceń', ale 'jak zbudować stabilną operację produkcyjną, która skaluje się bez zespołu i pozwala narzucać stawki premium'.\n\nWiększość freelancerów wypala się zawodowo lub utyka na niskich stawkach. Wyzwanie: zwiększyć przerób i podnieść stawki bez zatrudniania kogokolwiek, utrzymując jednocześnie jakość, która gwarantuje powrót klientów z rynku amerykańskiego."
      },
      approach: {
        en: "Built a systemized solo operation from the ground up:\n\nCategorized all incoming work into repeatable project types — commercial, automotive, event, motion graphics. Each category got its own template-based workflow with standardized timelines, preset libraries, and delivery specs.\n\nPackaged services into tiers: from basic editing to full-cycle production (brief → creative consulting → editing → delivery → platform adaptation). Scaled from entry-level rates to $50/hr premium tier through consistent quality and systematic upselling.\n\nEvery project refined the system. SOPs became sharper, turnaround faster, client communication more structured.",
        pl: "Zbudowałem usystematyzowaną solową operację od podstaw:\n\nSklasyfikowałem każdą przychodzącą pracę do powtarzalnych typów projektów — reklama, motoryzacja, event, motion graphics. Każda kategoria otrzymała własny, oparty na szablonach workflow ze standaryzowanymi timeline'ami, bibliotekami presetów i specyfikacjami dostarczania.\n\nSpakietowałem usługi: od podstawowego montażu po pełny cykl produkcyjny (brief → konsulting kreatywny → montaż → dostarczenie → adaptacja na platformy). Przeszedłem z podstawowych stawek do segmentu premium ($50/godz.) dzięki spójnej jakości i regularnemu upsellingowi.\n\nKażdy projekt udoskonalał system. Procedury operacyjne (SOP) stawały się dokładniejsze, czas realizacji krótszy, a komunikacja z klientami o wiele bardziej ustrukturyzowana."
      },
      result: {
        en: "250+ completed projects. 120 US clients. 5-star rating maintained across the entire portfolio. One person, full production capability — proof that systems beat headcount.",
        pl: "250+ zrealizowanych projektów. 120 klientów w Stanach Zjednoczonych. Utrzymana ocena 5 gwiazdek na całym portfolio. Jedna osoba, pełne zaplecze produkcyjne — dowód na to, że systemy wygrywają z wielkością zespołu."
      },
      role: {
        en: "Independent Producer",
        pl: "Independent Producer"
      },
      stackTags: [
        "Premiere Pro",
        "After Effects",
        "DaVinci Resolve",
        "Photoshop",
        "Cinema 4D",
        "Sound Design",
      ],
    },
  },
  {
    slug: "programmatic-video",
    title: {
      en: "Parametric Motion — Where Code Replaces the Timeline",
      pl: "Parametryczny Motion Design — Gdzie Kod Zastępuje Oś Czasu"
    },
    client: "RZMRN",
    category: "motion-design",
    type: "system",
    year: 2025,
    thumbnail: "/images/projects/programmatic-video-poster.jpg",
    videoLoop: "/videos/covers/loop-programmatic-video.mp4",
    description: {
      en: "React components that render to video. Where creative meets programmatic.",
      pl: "Komponenty React renderujące się do wideo. Miejsce, gdzie kreacja spotyka się z kodem."
    },
    tags: ["Remotion", "React", "Programmatic Video"],
    architecture: "Remotion component pipeline",
    metrics: "<1min per render, infinite variations",
    featured: true,
    order: 3,
    status: "ongoing",
    caseStudy: {
      track: "hybrid",
      headline: {
        en: "Parametric Motion — Where Code Replaces the Timeline",
        pl: "Parametryczny Motion Design — Gdzie Kod Zastępuje Oś Czasu"
      },
      subtitle: {
        en: "React components that render to video. Where creative meets programmatic.",
        pl: "Komponenty React renderujące się do wideo. Miejsce, gdzie kreacja spotyka się z kodem."
      },
      metrics: [
        { value: "< 1 min", label: "Per render" },
        { value: "∞", label: "Parametric variations" },
        { value: "0", label: "Manual keyframes" },
      ],
      challenge: {
        en: "Traditional motion design is manual. Every change means reopening After Effects, adjusting keyframes, re-rendering. For data-driven content or variations at scale, this doesn't work. The timeline becomes the bottleneck.\n\nThe answer isn't faster hands — it's a programmatic approach where code replaces the timeline entirely.",
        pl: "Tradycyjny motion design to praca manualna. Każda zmiana oznacza ponowne otwieranie After Effects, poprawianie klatek kluczowych, ponowne renderowanie. W przypadku treści opartych na danych lub tworzeniu bardzo wielu wariantów, to się nie sprawdza. Klatki kluczowe i interfejs programu stają się wąskim gardłem.\n\nOdpowiedzią wcale nie jest szybsze klikanie myszką — to podejście programistyczne, w którym kod całkowicie zastępuje klasyczną oś czasu."
      },
      approach: {
        en: "Remotion — React-based programmatic video. Each composition is a React component. Parameters in, video out. Change a variable, get a new render. No timeline, no keyframes.\n\nThe animations are mathematically computed, not AI-hallucinated. A lidar visualization computes actual point-cloud geometry. A telemetry HUD reads real data structures. Precision motion design through code.\n\nCompositions range from abstract data visualizations to branded identity pieces to experimental explorations — all version-controlled, all parametrically adjustable.",
        pl: "Remotion — programowalne, responsywne wideo oparte na React. Każda kompozycja to komponent React. Podajesz parametry wejściowe, otrzymujesz gotowe wideo. Zmieniasz zmienną, dostajesz nowy render. Żadnego timeline'u, żadnych klatek kluczowych.\n\nAnimacje są wyliczane matematycznie, to nie halucynacje generatorów wideo AI. Wizualizacja lidar oblicza rzeczywistą geometrię chmury punktów. HUD z telemetrią odczytuje prawdziwe struktury danych na realnym API i wykresach. Czysta precyzja w motion designie napędzana tylko kodem.\n\nKompozycje obejmują od abstrakcyjnych wizualizacji danych, przez elementy brandingu i UI, aż po eksperymentalne eksploracje wizualne — wszystko wersjonowane tak jak kod, wszystko parametrycznie modyfikowalne."
      },
      result: {
        en: "A production toolkit for parametric motion content. Any composition re-renders with different parameters in under a minute. Same codebase, infinite variations. This is what content production at scale looks like when code meets craft.",
        pl: "Własny narzędziownik produkcyjny dla treści parametrycznych. Dowolna kompozycja renderuje się z nowymi parametrami, danymi tekstowymi lub wizualnymi w czasie rzeczywistym. Ta sama baza kodu, nieskończone odmiany. Tak wygląda produkcja contentu na dużą skalę, kiedy kod przejmuje kontrolę artystyczną."
      },
      role: {
        en: "Creative Technologist",
        pl: "Creative Technologist"
      },
      stackTags: ["Remotion", "React", "TypeScript", "Node.js", "FFmpeg"],
    },
  },
  {
    slug: "multi-agent-system",
    title: {
      en: "12 AI Agents Running Autonomously, 24/7",
      pl: "12 Agentów AI Zawsze Działających Autonomicznie Oparte O Modele Od Claude"
    },
    client: "Internal",
    category: "ai-automation",
    type: "system",
    year: 2025,
    thumbnail: "/images/projects/multi-agent-thumb.jpg",
    videoLoop: "/images/projects/multi-agent-loop-v2.webm",
    description: {
      en: "Multi-model agent architecture for automated research, content generation, and monitoring.",
      pl: "Architektura wielu wyspecjalizowanych agentów AI do zautomatyzowanego researchu i generowania treści."
    },
    tags: ["Multi-Agent", "AI", "Automation"],
    architecture: "Multi-model orchestrated agent system",
    metrics: "30+ daily automated tasks",
    featured: true,
    order: 4,
    status: "ongoing",
    caseStudy: {
      track: "systems",
      headline: {
        en: "12 AI Agents Running Autonomously, 24/7",
        pl: "12 Agentów AI Działających Autonomicznie 24/7"
      },
      subtitle: {
        en: "Multi-model agent architecture for automated research, content generation, and monitoring.",
        pl: "Architektura wielu wyspecjalizowanych agentów AI do zautomatyzowanego researchu i generowania treści."
      },
      metrics: [
        { value: "12", label: "Specialized agents" },
        { value: "3", label: "LLM providers" },
        { value: "30+", label: "Daily automated tasks" },
        { value: "24/7", label: "Autonomous operation" },
      ],
      challenge: {
        en: "Off-the-shelf AI tools solve generic problems. Scaling content production, research, and workflow automation requires specialized AI workers that understand your domain, communicate with each other, and operate without supervision.\n\nOne person can't simultaneously search for jobs, monitor market trends, generate content, manage communications, and build a portfolio. The bottleneck isn't skill — it's attention.",
        pl: "Gotowe narzędzia AI rozwiązują bardzo ogólne problemy. Skalowanie produkcji contentu czy automatyzacja wymaga wysoce wyspecjalizowanych procesów, a nawet pracowników AI, którzy rozumieją dany obszar, komunikują się między sobą oraz działają całkowicie bez nadzoru (autonomiczne pętle).\n\nJedna osoba nie jest w stanie jednocześnie szukać najlepszych ofert czy trendów rynkowych, analizować konkurencję, generować unikalne i bardzo złożone zestawienia. Wąskim gardłem nie są tutaj umiejętności programistyczne — tylko zwykła, prozaiczna uwaga."
      },
      approach: {
        en: "Custom multi-agent system built from scratch:\n\nDispatcher routes tasks to specialized agents by type and complexity. 12 specialized agents, each with its own model, prompt architecture, and domain expertise.\n\n3 LLM providers — Claude, MiniMax M2.5, Gemini — chosen per task for cost/capability balance. Cron orchestration runs agents on schedule, 24/7, no human intervention.\n\nCross-model validation ensures outputs are verified by a different model (adversarial synthesis). mem0 persistent memory provides cross-session context. Telegram interface delivers results directly to messenger.\n\nThe system evolved through multiple architectural iterations, each informed by production experience.",
        pl: "Własny, zaawansowany wieloagentowy (multi-agent) system stworzony z użyciem Node.js.\n\nDispatcher (mózg całej architektury operacji) dynamicznie rozdziela wysoce specyficzne zadania do poszczególnych asystentów, posługując się modelami wg specyfiki zadania.\n\nTrzech dostawców LLM ze względów dywersyfikacji: modele od Anthropic/Claude, chińskie modele w stylu qwen & dsb (MiniMax M2.5) i flagowy model Gemini Pro od Google, wybierany dla optymalnej ceny do poszczególnego kroku. Cała sieć uruchamia zadania na podstawie schedulera `cron` całkowicie bez udziały jakiegokolwiek frontu czy ingerencji człowieka.\n\nKrzyżowa weryfikacja zapewnia bardzo spójną ocenę danych i niwelowanie halucynacji używając drugiego oddzielnego mózgu. `mem0` po stronie persistency bazy utrzymuje wielodniowe sesje a API Telegram'u i własny prywatny bot zapewnia panel frontowy z bezpośrednim strumieniem raportów na messenger."
      },
      result: {
        en: "30+ daily automated tasks. Market analysis, content research, competitive intelligence, code review — all running autonomously. The human reviews and decides; the system researches and prepares.",
        pl: "30+ codziennych w pełni zautomatyzowanych zadań. Analiza poszczególnych nisz na rynkach, inteligentna agregacja rynkowych sygnałów i analiz technicznych — wszystko całkowicie po stronie wirtualnej agencji. Moim zdaniem sztuczna inteligencja nie jest tutaj by odebrać pracę, ale wybitnie dobrze odseparować szum od decyzji."
      },
      role: {
        en: "AI Systems Architect",
        pl: "AI Systems Architect"
      },
      stackTags: [
        "Claude Code",
        "MiniMax M2.5",
        "Gemini",
        "Python",
        "Telegram API",
        "mem0",
        "MCP",
        "Cron",
      ],
    },
  },
  {
    slug: "archive-automation",
    title: {
      en: "221 Lectures Rescued in 5 Automated Phases",
      pl: "221 Wykładów Uratowanych w 5 Zautomatyzowanych Fazach"
    },
    client: "Internal",
    category: "ai-automation",
    type: "system",
    year: 2025,
    thumbnail: "/images/projects/archive.png",
    description: {
      en: "Automated archive audit and cloud migration for a terabyte-scale media library.",
      pl: "Zautomatyzowany audyt archiwum i migracja do chmury dla biblioteki wideo o skali terabajtów."
    },
    tags: ["Automation", "Archive", "Cloud Migration"],
    architecture: "5-phase automated pipeline",
    metrics: "221 lectures, 22 courses, zero data loss",
    featured: true,
    order: 5,
    status: "completed",
    caseStudy: {
      track: "systems",
      headline: {
        en: "221 Lectures Rescued in 5 Automated Phases",
        pl: "221 Wykładów Uratowanych w 5 Zautomatyzowanych Fazach"
      },
      subtitle: {
        en: "Automated archive audit and cloud migration for a terabyte-scale media library.",
        pl: "Zautomatyzowany audyt archiwum i migracja do chmury dla potężnej biblioteki wideo edukacyjnego."
      },
      metrics: [
        { value: "221", label: "Lectures processed" },
        { value: "22", label: "Courses sorted" },
        { value: "5", label: "Automation phases" },
        { value: "0", label: "Data loss" },
      ],
      challenge: {
        en: "221 lectures across 22 courses. Scattered across drives, inconsistent naming, missing files, broken folder structures. No inventory, no verification. A legacy content archive at risk of being lost.\n\nManual sorting would take weeks and be error-prone at this volume. Any drive failure means permanent content loss.",
        pl: "221 wykładów rozrzuconych na dziesiątkach napędów. Niespójne nazewnictwo, brakujące ścieżki i osierocone pliki, zaburzona hierarchia podfolderów, zduplikowane pliki. Zupełny brak fizycznego spisu zapasowego. Ryzyko całkowitego braku dostępności na wypadek najmniejszej awarii jakiegokolwiek z napędów w systemie.\n\nRęczne organizowanie całej tej architektury zajęłoby tygodnie — a po wdrożeniu tego procesu — podatność na ewentualny brak pliku jest bardzo realna."
      },
      approach: {
        en: "Designed a 5-phase systematic pipeline:\n\nPhase 1 — Discovery: Python scripts crawl all storage, build complete inventory, identify duplicates and gaps.\n\nPhase 2 — Sorting: Automated categorization by course, type, sequence via filename parsing and metadata extraction.\n\nPhase 3 — Audit: Cross-reference against course manifests. Flag missing lectures, corrupt files, version conflicts.\n\nPhase 4 — Verification: Automated integrity checks — codec, resolution, duration, audio sync.\n\nPhase 5 — Cloud Sync: GoodSync deployment to OneDrive with verified mirroring and change tracking.",
        pl: "Zaprojektowałem, jako Architect, bardzo systematyczny pięcio-etapowy proces:\n\nFaza 1 — Odnajdywanie: Skrypty napisane w Pythonie indeksujące cały rozrzucony storage na przestrzeni kilku sprzętowych dysków macierzy, budując kompletną mapę tego archiwum i wypisując brakujące bądź zdublowane moduły czy lekcje i wysyłając bardzo proste i zrozumiałe statystyki.\n\nFaza 2 — Sortowanie: Algorytm potrafi dokonać głębokiej automatycznej klasyfikacji i na nowo uporządkować podkatalogi. Przemielenie kilku lat ewolucji w formacie i spakowanie każdej jednostki w precyzyjny katalog, parsując w tym celu stare i zapomniane formaty nazewnictwa z surowymi formatami Exif i FFprobe w celu ekstrahowania informacji gdzie powinien dany plik docelowo leżeć.\n\nFaza 3 — Audyt operacyjny.\nFaza 4 — Zabezpieczenie chmurowe: Uruchamiając potężną aplikację GoodSync zabezpieczyłem mirror całej sstruktury u dedykowanego w ofercie biznesowej dostawcy dla tego typu przestrzeni."
      },
      result: {
        en: "221 lectures, 22 courses — fully sorted, audited, verified, cloud-synced. Zero data loss. Process documented and repeatable for future archive operations.",
        pl: "Ostatecznie uratowałem cały ten dorobek, archiwum jest w 100% ubezpieczone w profesjonalnym repozytorium chmurowym OneDrive od MS. Użycie metod systemowych zmniejszyło z tygodni nudnej wielokliku — do wykonania tego samego celu dzięki Pythonowi dosłownie poprzez kilka bezbłędnych przebiegów terminalowych."
      },
      role: {
        en: "Systems Architect",
        pl: "Systems Architect"
      },
      stackTags: [
        "Claude Code",
        "Python",
        "Bash",
        "GoodSync",
        "OneDrive",
        "Final Cut Pro",
      ],
    },
  },
  {
    slug: "live-production",
    title: {
      en: "Full-Service Production for a National Cultural Institution",
      pl: "Kompleksowa Produkcja dla Państwowej Instytucji Kultury"
    },
    client: "PZLPIT Mazowsze",
    category: "live-production",
    type: "visual",
    year: 2021,
    thumbnail: "/images/projects/live-production-poster.jpg",
    videoLoop: "/videos/covers/loop-live-production.mp4",
    description: {
      en: "Comprehensive production for Poland's national folk ensemble — from hero video to metro advertising.",
      pl: "Reklama dla Państwowego Zespołu Ludowego Pieśni i Tańca \"Mazowsze\" – od głównego wideo po reklamy w warszawskim metrze."
    },
    tags: ["Live Production", "Multi-cam", "Broadcast", "Advertising"],
    role: "Lead Camera / Editor",
    deliverable: "Live broadcasts, hero video, metro advertising, promotional content",
    featured: true,
    order: 6,
    status: "completed",
    caseStudy: {
      track: "production",
      headline: {
        en: "Full-Service Production for a National Cultural Institution",
        pl: "Kompleksowa Produkcja dla Państwowej Instytucji Kultury"
      },
      subtitle: {
        en: "Comprehensive production for Poland's national folk ensemble — from hero video to metro advertising.",
        pl: "Kompleksowa kampania wizerunkowa dla zespołu \"Mazowsze\" — od głównego filmu promocyjnego po kampanie w warszawskim metrze."
      },
      metrics: [
        { value: "540-seat", label: "Concert hall" },
        { value: "150+", label: "Performers" },
        { value: "Multi-cam", label: "Live production" },
        { value: "Zero errors", label: "Tolerance" },
      ],
      challenge: {
        en: "Państwowy Zespół Ludowy Pieśni i Tańca \"Mazowsze\" — Poland's national folk song and dance ensemble. A 540-seat hall, 150+ performers, state-level cultural institution.\n\nLive production for a state cultural institution. No second takes, no \"fix it in post.\" The stakes are reputational as much as technical — every delivery represents a national ensemble.",
        pl: "Państwowy Zespół Ludowy Pieśni i Tańca \"Mazowsze\" — kultowa, polska instytucja kultury z salą na 540 miejsc i ponad setką artystów występujących jednoczesnie.\n\nZadanie, ze względu na poziom tej elitarnej państwowej instytucji nie pozostawiało miejsca na wtórne pomyłki. Live streaming nie ma pojęcia takiego jak 'potem to się zmontuje w postprodukcji'. Jakość każdej ze strumieniowych transmisji lub finalnego wyjścia dla agencji zewnętrznych z każdego eventu - to absolutna odpowiedzialność pod kątem wizerunkowym, artystycznym jak i po prostu pod względem bardzo technicznym (spójność sygnału sieci)."
      },
      approach: {
        en: "Full-service production partnership spanning multiple formats:\n\nHero promotional video — currently featured on the organization's homepage. Multi-camera live concert production with zero-error tolerance for state events.\n\nAnimated advertising for Warsaw metro displays and central railway station digital screens. Full-cycle promotional content across all platforms. Ballet-derived animations for digital use.\n\nWorking with performers who operate at the highest level of their craft demands the same from the production team.",
        pl: "Stworzenie niezwykle ścisłej i wszechstronnej obsługi na wielowątkowym i wielomodułowym stanowisku dla całego zespołu produkcji oraz marketingu i PR.\n\nW pełni wyreżyserowane oficjalne główne formaty marketingowe i spoty wyświetlane w social-mediach tej instytucji. Wielokamerowa transmisja wybitnie złożonych scen (składających się zarówno z orkiestry dętej i klasycznej, pełnego chóru i tańca baletologicznego).\n\nKreacja motion designu wektorowego i plakatów wideo emitowanych na banerach Dworca Głównego w Warszawie i systemie ekranów metra komunikacji publicznej. Tworzenie całego zaplecza promocyjnego.\n\nPraca z artystami w tym zespole to bezkompromisowa konieczność dorównywania im samym — perfekcyjne wyczucie w zgraniu, rytmice oraz precyzji obrazu było nie opcjonalne a po prostu bezwzględnym standardem."
      },
      result: {
        en: "Comprehensive production for a national institution. The hero video remains their primary digital representation. Live broadcasts delivered flawlessly under zero-error conditions. Metro and railway station advertising running on Warsaw's busiest screens.",
        pl: "Dostarczenie najwyższych form artystyczno wideo reklamowych dla państwowej wizytówki kulturowej kraju. Całkowite oddanie wizualne w tych wspaniałych spotach dla wielkich reżyserowanych scen tego zespołu. Wyłączna bezbłędnie techniczne obsługiwanie całej reżyserki streamingu na żywo."
      },
      role: {
        en: "Lead Camera / Editor / Motion Designer",
        pl: "Lead Camera / Editor / Motion Designer"
      },
      stackTags: [
        "Multi-cam",
        "Live Switching",
        "DaVinci Resolve",
        "After Effects",
        "Audio Sync",
        "Broadcast",
      ],
    },
  },
  {
    slug: "rzmrn-platform",
    title: {
      en: "The Portfolio You're Reading — Built on Live AI",
      pl: "Portfolio, Które Teraz Czytasz — Zbudowane na AI"
    },
    client: "RZMRN",
    category: "infrastructure",
    type: "system",
    year: 2025,
    thumbnail: "/images/projects/rzmrn-platform.png",
    description: {
      en: "AI-first ecosystem: portfolio site + autonomous intelligence platform.",
      pl: "Ekosystem AI First: zoptymalizowana architektura + inteligentna integracja narzędzi AI przy budowaniu Web Apps."
    },
    tags: ["AI Platform", "Web", "Automation"],
    architecture: "Dual-product AI-first ecosystem",
    metrics: "60+ sources, 15+ categories, 2 live products",
    featured: true,
    order: 7,
    status: "ongoing",
    caseStudy: {
      track: "hybrid",
      headline: {
        en: "The Portfolio You're Reading — Built on Live AI",
        pl: "Portfolio, Które Właśnie Przeglądasz — Zbudowane O Architekturę AI"
      },
      subtitle: {
        en: "AI-first ecosystem: portfolio site + autonomous intelligence platform.",
        pl: "Ekosystem Webowy stworzony pod nadzorem Claude Code: strona portfolio + całkowicie autonomiczna witryna OSINT."
      },
      metrics: [
        { value: "60+", label: "Sources" },
        { value: "15+", label: "Categories" },
        { value: "2", label: "Live products" },
        { value: "1 day", label: "Digest build time" },
      ],
      challenge: {
        en: "Build a professional portfolio and a live intelligence platform simultaneously, as a one-person operation. No CMS, no templates — pure code. The answer: build the infrastructure to build itself.\n\nTwo products with different requirements — a static portfolio site and a real-time intelligence digest — both needing to deploy autonomously to the edge.",
        pl: "Moim wyzwaniem był projekt oraz kodowanie absolutnie bez gotowych szablonów — kompletnego front-endu reprezentującego portfolio, równolegle z drugą w pełni funkcjonalną witryną agregującą potężne zestawienia sygnałów z rynku, z całkowitym zrezygnowaniem z konwencjonalnego systemu CMS z zewnątrz. Obie te produkcje dla zaledwie jednej osoby stanowiły dawniej barierę bardzo duży opóźnień i czasu.\n\nStosując moje techniki i asystentów, byłem w stanie stworzyć dwie różne domeny — obie deployowane pod chmurę Cloudflare Pages w tempie, które przypomina operacje wieloosobowej drużyny developerów."
      },
      approach: {
        en: "Two interconnected products, one architectural philosophy:\n\nRZMRN.com (this site): Next.js 16, React 19, Tailwind v4. Static export to Cloudflare Pages. Built collaboratively with Claude Code CLI agents — architecture, components, content, deployment. No CMS, no templates — pure code.\n\nRZMRN Digest (digest.rzmrn.com): Autonomous OSINT intelligence pipeline. 60+ RSS sources across 15+ categories. MiniMax M2.5 multi-threaded analysis with adversarial critique and synthesis. mem0 persistent memory. Bilingual RU/UA output. Cyberpunk terminal UI. Auto-deploy to Cloudflare Pages. Built in one day.\n\nBoth products demonstrate the thesis: one person + AI-first architecture = output that looks like a team.",
        pl: "Wykorzystałem dwa główne projekty dla jednego silnego filaru architektonicznego:\n\nRZMRN.com (ta witryna): Nowoczesny Next.js 16 najnowszy stack React v19 oraz Tailwind v4 z renderowaniem po stronie statycznej SSG do edge'a i repozytorium na Github. Zbudowana ze współpracy z wybitnymi agentami Claude Code CLI oraz frameworkami MCP. Brak gotowców. Czysty wektor kreatywny, design połączony z wybitną i czystą kodową skalowalnością.\n\nRZMRN Digest (digest.rzmrn.com): Autonomiczny bot, strona serwująca raporty, codzienna agregacja 60 sprawdzonych źródeł, z wielowątkową weryfikacją z LLM w formie terminalowego cyber-interfejsu.\n\nWiększość procesu, w tym architektura i kod obu projektów to wyraźny dowód: operując systemami LLM w połączeniu z odpowiednią organizacją systemową, dostarczasz na rynek to, co jeszcze 2 lata temu tworzyła w tydzień kilkuosobowa agencja z budżetami kilkukrotnie wyższymi."
      },
      result: {
        en: "Two live products running on edge infrastructure. The portfolio showcases the work; the digest proves the methodology. Both built, deployed, and maintained by one person with AI as a force multiplier.",
        pl: "Dwie żywe witryny działające w bezserwerowej strukturze Edge Architecture. Portfolio jest odzwierciedleniem możliwości kreacji wizualnej, podczas gdy OSINT i Digest udowadniają zmysł automatyzacji AI oraz inżynierii operacyjnej. Projekt został tak stworzony aby jednoosobowo w nieskończoność utrzymywać je i skalować dla miliona wyświetleń, za stawkę miesięczną, która zwykle wystarcza komercyjnie na hosting CMS od Wordpress w jednym języku."
      },
      role: {
        en: "Architect / Builder",
        pl: "Architekt"
      },
      stackTags: [
        "Next.js 16",
        "React 19",
        "Tailwind v4",
        "Claude Code",
        "MiniMax M2.5",
        "mem0",
        "Python",
        "Cloudflare Pages",
      ],
    },
  },
  {
    slug: "short-form-reels",
    title: {
      en: "Years of After Effects Obsession — Distilled Into Seconds",
      pl: "Lata Obsesji na punkcie After Effects — Skondensowane do Sekund"
    },
    client: "Various",
    category: "motion-design",
    type: "visual",
    year: 2024,
    thumbnail: "/images/projects/short-form-reels-poster.jpg",
    videos: [
      { src: "/videos/content/yarik-edit.mp4", label: "Yarik Edit" },
      { src: "/videos/content/motocross-reel.mp4", label: "Motocross Reel" },
      { src: "/videos/content/maveric-ride-reel.mp4", label: "Maveric Ride Reel" },
      { src: "/videos/content/lambo-reel.mp4", label: "Lambo Reel" },
      { src: "/videos/content/insta-bakalova.mp4", label: "Insta Bakalova" },
      { src: "/videos/content/ferrari-sf90.mp4", label: "Ferrari SF90" },
    ],
    description: {
      en: "Short-form content where production craft meets attention economy.",
      pl: "Treści short-form formacie (reels / tiktoks), gdzie warsztat produkcyjny spotyka się z gospodarką absolutnej uwagi."
    },
    tags: ["Short-Form", "Motion Design", "After Effects"],
    role: "Motion Designer / Editor",
    deliverable: "Short-form reels and motion content",
    featured: true,
    order: 8,
    status: "ongoing",
    caseStudy: {
      track: "production",
      headline: {
        en: "Years of After Effects Obsession — Distilled Into Seconds",
        pl: "Lata Obsesji na Puncie After Effects — Skondensowane do Złotych Sekund"
      },
      subtitle: {
        en: "Short-form content where production craft meets attention economy.",
        pl: "Treści formacie krókich wideo, gdzie czysty rzemieślniczy kunszt spotyka się z wojną o atencję we współczesnych kanałach SoMe."
      },
      metrics: [],
      challenge: {
        en: "Short-form content is the hardest format. 3-15 seconds to communicate quality. Every frame matters. Every transition is a decision. Every beat sync is deliberate.\n\nThe question isn't how to make more content faster — it's how to compress years of production craft into moments that demand attention.",
        pl: "Mówi się że format rolek do TikToka jest banalny i bezwartościowy. Jest całkowicie odwrotnie. Trudno zaimponować kunsztem i utrzymać ludzką uwagę, która obecnie wytrzymuje góra 3 sekundy. Każda mikrosekunda tutaj gra ogromną rolę. Brak tu miejsca na pomyłkowe puste czy drgające momenty.\n\nWiększość osób z social-mediów wstawia głośny hałas do platform. Jednak prawdziwy postęp jest wtedy kiedy przekuwa się jakość lat pracy do montażystów kinowych – we format 9:16 tak aby był on spektakularny i uzależniający, a zarazem wizualnie genialny estetycznie."
      },
      approach: {
        en: "Years of After Effects work — automotive, travel, fashion, motion graphics — where technical obsession meets instant impact. Dozens of hours per composition, complex layer stacks, precise timing.\n\nEach category with its own visual language: automotive reels demand kinetic energy and metal textures. Travel content needs atmosphere and scale. Fashion requires rhythm and elegance. Pure motion design experiments push technique without client constraints.\n\nAll unified by the same production standard — the work speaks for itself.",
        pl: "To po prostu suma obsesyjnego i dziesiątek tysięcy przepracowanych godzin nauki programów po stronie Adobe. To kreowanie graficzne dynamiki opierające się na perfekcyjnie zbudowanej siatce keyframe-ów.\n\nKażdy projekt rządzi się swoim rytmem i językiem wizualnym: formaty automotive wymagają bezbłędnego zgrania kinetycznej energii silnika i prędkości. Moda i beauty potrzebują balansu oświetlenia i absolutnej rytmiki i elegancji. Z kolei materiały pure-motion wymuszają z mojej strony absolutne sprawdzanie i limitów kreatywnych silnika na którym obrabiam pliki, tak bym bez polecenia klientów na zewnątrz nadal eksperymentował rozciągając wyznaczaną przez samego mnie poprzeczkę."
      },
      result: {
        en: "Short-form isn't lesser production. It's production compressed to its essence. The range speaks to versatility; the quality speaks to craft.",
        pl: "Ten cyfrowy content to nie 'błahostka po omacku', to profesjonalny warsztat audiowizualny, jednak ściśnięty w najpotężniejszą jego formę która rezonuje, zapada w pamięci oraz daje wprost genialne rezultaty retencyjne."
      },
      role: {
        en: "Motion Designer / Editor",
        pl: "Montażysta / Motion Designer"
      },
      stackTags: [
        "After Effects",
        "Premiere Pro",
        "Cinema 4D",
        "Photoshop",
        "Motion Design",
      ],
    },
  },

  // ── Visual Portfolio Projects (cards only, no case study) ────────
  {
    slug: "mazda-drivetogether",
    title: {
      en: "Mazda DriveTogether MX-5",
      pl: "Mazda DriveTogether MX-5"
    },
    client: "Mazda",
    category: "commercial",
    type: "visual",
    year: 2023,
    thumbnail: "/images/projects/mazda-drivetogether-poster.jpg",
    videoLoop: "/videos/content/mazda-drivetogether.mp4",
    videos: [
      { src: "/videos/content/mazda-drivetogether.mp4", label: "Mazda DriveTogether MX-5" },
    ],
    description: {
      en: "TV commercial for Mazda MX-5 DriveTogether campaign. Full post-production pipeline: editing, color grading, sound design, and motion graphics integration.",
      pl: "Reklama telewizyjna dla kampanii Mazda MX-5 DriveTogether. Pełny etap postprodukcyjny: montaż z koloryzacją, wsparty udźwiękowieniem z elementowym motion graphics integracji animacji 3d na żywym obrazie."
    },
    tags: ["TV Commercial", "Post-Production", "Color Grading"],
    role: "Editor / Colorist",
    deliverable: "TV spot, social cuts",
    featured: false,
    order: 10,
    status: "completed",
  },
  {
    slug: "lotus-car-commercial",
    title: {
      en: "Lotus Car Commercial",
      pl: "Reklama dla Dealera Lotusa"
    },
    client: "Daytona Motorsport",
    category: "commercial",
    type: "visual",
    year: 2023,
    thumbnail: "/images/projects/lotus-car-commercial-poster.jpg",
    videoLoop: "/videos/content/lotus-car-commercial.mp4",
    videos: [
      { src: "/videos/content/lotus-car-commercial.mp4", label: "Daytona Lotus Car Commercial" },
    ],
    description: {
      en: "Full-cycle commercial production for a Lotus car dealership. Sketching, scripting, shooting direction, editing, sound design, and color correction — concept to final master.",
      pl: "Cały lejek postprodukcji tej reklamy luksusowej motoryzacji dealera we Francji. Rozpoczynając pisaniem scenariusza w pre - po montaż i mistrzowską postprodukcję kolorów z korektą balansu."
    },
    tags: ["Full Production", "Directing", "Editing", "Sound Design"],
    role: "Director / Editor / Colorist / Sound Designer",
    deliverable: "Car commercial, dealer promo",
    featured: false,
    order: 11,
    status: "completed",
  },
  {
    slug: "kurish-gorod-music-video",
    title: {
      en: 'Music Video — Kurish "Gorod"',
      pl: 'Teledysk Muzyczny — Kurish "Gorod"'
    },
    client: "Kurish",
    category: "music-video",
    type: "visual",
    year: 2022,
    thumbnail: "/images/projects/kurish-gorod-music-video-poster.jpg",
    videoLoop: "/videos/content/kurish-gorod.mp4",
    videos: [
      { src: "/videos/content/kurish-gorod.mp4", label: 'Kurish "Gorod"' },
    ],
    description: {
      en: "Full production music video from concept through delivery. Directing, cinematography planning, editing, color grading, and VFX compositing.",
      pl: "Reżyserowany przeze mnie teledysk, stworzony wizualnie od idei poprzez scenariusz wizyjny, oświetlenie z montażem ze złożoną koloryzacją post-processingu VFX."
    },
    tags: ["Music Video", "Full Production", "VFX", "Color"],
    role: "Director / Editor / Colorist / VFX",
    deliverable: "Music video, BTS content",
    featured: false,
    order: 15,
    status: "completed",
  },
  {
    slug: "animated-event-promos",
    title: {
      en: "Animated Event Promos",
      pl: "Animowane Promocje Wydarzeń"
    },
    client: "Various",
    category: "motion-design",
    type: "visual",
    year: 2024,
    thumbnail: "/images/projects/animated-event-promos-poster.jpg",
    videoLoop: "/videos/content/party-promo.mp4",
    videos: [
      { src: "/videos/content/party-promo.mp4", label: "Party Promo" },
    ],
    description: {
      en: "Animated promotional flyers and social content for events, music releases, and brands. Eye-catching motion design optimized for Instagram and TikTok engagement.",
      pl: "Zanimowane potężne kreacje eventowe oraz zapowiedzi wideo marek dla branży muzycznej promujące w nowoczesnych designach wizualnych i wektorach."
    },
    tags: ["Motion Design", "Animation", "Social Media"],
    role: "Motion Designer / Animator",
    deliverable: "Animated promos, social assets",
    featured: false,
    order: 16,
    status: "ongoing",
  },
];

export function getCaseStudyProjects(): Project[] {
  return projects
    .filter((p) => p.caseStudy)
    .sort((a, b) => a.order - b.order);
}

export function getVisualPortfolioProjects(): Project[] {
  return projects
    .filter((p) => !p.caseStudy)
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
