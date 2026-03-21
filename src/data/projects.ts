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
        { value: "5,000+", label: { en: "Active clients", pl: "Aktywnych Klientów" } },
        { value: "221", label: { en: "Lectures produced", pl: "Wyprodukowane Wykłady" } },
        { value: "22", label: { en: "Courses delivered", pl: "Dostarczone Kursy" } },
        { value: "40%", label: { en: "Faster release cycle", pl: "Szybszy Cykl Wdrożeń" } },
      ],
      challenge: {
        en: "A major education platform needed to scale course production without scaling the team. Each course required weeks of manual work: multi-cam shoots, graphics generation, b-roll creation, quality control, file management. Everything done by hand.\n\nThe bottleneck wasn't creative — it was operational. One person was responsible for the entire production pipeline serving 5,000+ clients. The question wasn't whether to automate — it was how deep the automation could go without sacrificing quality.",
        pl: "Czołowa platforma edukacyjna musiała przeskalować produkcję kursów bez powiększania zespołu. Każdy kurs wymagał tygodni żmudnej, manualnej pracy: nagrań z wielu kamer, generowania grafik, montażu przebitek, kontroli jakości i zarządzania plikami.\n\nWąskim gardłem nie była wcale kreatywność — lecz operacyjność. Piekielnie obciążona jedna osoba odpowiadała za cały proces produkcyjny obsługujący ponad 5000 klientów. Pytanie nie brzmiało „czy” automatyzować, ale jak głęboko można zaimplementować automatyzację, by nie stracić absolutnie nic na jakości."
      },
      approach: {
        en: "Built a multi-layer automation pipeline that addressed each production bottleneck:\n\nLayer 1 — Shoot optimization: AI-generated thematic green screen backgrounds that change per course, eliminating physical set changes entirely.\n\nLayer 2 — B-roll pipeline: n8n workflow analyzes each lecture transcript, extracts 6-10 key visual concepts, generates images via AI, animates through Hailuo video model, and outputs ready-to-edit animated b-roll inserts.\n\nLayer 3 — Post-production: ExtendScript batch processing in Premiere Pro for repetitive timeline operations across hundreds of lectures.\n\nLayer 4 — Quality & delivery: Structured QC checklist maintaining ISO 9001 compliance, templated export presets for consistent output.",
        pl: "Zaprojektowałem i wdrożyłem wielowarstwowy system, który metodycznie eliminował każde wąskie gardło:\n\nWarstwa 1 — Optymalizacja nagrań: generowanie spersonalizowanych teł do green screenu przy pomocy AI dla każdego kursu, całkowicie eliminując potrzebę fizycznej zmiany scenografii.\n\nWarstwa 2 — Pipeline B-roll: zautomatyzowany przepływ pracy w n8n, który analizuje transkrypcje wykładów, wyciąga kluczowe pojęcia, generuje wizualizacje przez AI, następnie animuje je w modelu Hailuo i oddaje gotowe do montażu przebitki wideo.\n\nWarstwa 3 — Post-produkcja: skrypty ExtendScript do przetwarzania wsadowego w Premiere Pro, wykonujące powtarzalne operacje na osi czasu na przestrzeni setek wykładów w kilka sekund.\n\nWarstwa 4 — Jakość i dostarczanie: ustrukturyzowana kontrola (QC) gwarantująca pełną zgodność ze standardem ISO 9001 oraz ujednolicone presety renderu dla spójnych wyników."
      },
      result: {
        en: "Release cycles shortened by 40%. 221 lectures across 22 courses delivered with consistent quality. One person — full production coverage for an entire platform serving 5,000+ clients. The pipeline turned a manual bottleneck into a scalable system.",
        pl: "Czas produkcji skrócony o równe 40%. Dostarczyłem 221 wykładów w 22 kursach, zachowując bezkompromisową jakość. Jedna osoba skutecznie zapewniła pełne zaplecze produkcyjne dla platformy edukującej ponad 5000 klientów. Ten pipeline ostatecznie zamienił ręczne, zablokowane wąskie gardło w wybitnie skalowalny system."
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
        { value: "250+", label: { en: "Completed projects", pl: "Zrealizowane Projekty" } },
        { value: "120", label: { en: "US clients", pl: "Amerykańscy Klienci" } },
        { value: "$50/hr", label: { en: "Premium tier", pl: "Standard Premium" } },
        { value: "5★", label: { en: "Client rating", pl: "Ocena Klientów" } },
      ],
      challenge: {
        en: "Fiverr is a race to the bottom. Thousands of editors competing on price. The question wasn't how to get more gigs — it was how to build a sustainable production operation that scales without a team and commands premium rates.\n\nMost freelancers burn out or stagnate at low rates. The challenge: scale output and raise rates without hiring anyone, while maintaining quality that earns repeat business from US market clients.",
        pl: "Fiverr to cenowa równia pochyła — tysiące montażystów konkurujących tylko o to, kto zrobi najtaniej. Moim pytaniem nie było 'jak zdobyć więcej zleceń', lecz 'jak zbudować stabilny biznes produkcyjny, który potrafi się skalować w pojedynkę i pozwala dyktować stawki premium'.\n\nWiększość freelancerów na podobnych platformach błyskawicznie się wypala lub na zawsze utyka na niskich stawkach. Prawdziwe wyzwanie: drastycznie zwiększyć przerób i podnieść stawki bez zatrudniania podwykonawców, gwarantując jakość, dzięki której amerykańscy klienci wracają latami."
      },
      approach: {
        en: "Built a systemized solo operation from the ground up:\n\nCategorized all incoming work into repeatable project types — commercial, automotive, event, motion graphics. Each category got its own template-based workflow with standardized timelines, preset libraries, and delivery specs.\n\nPackaged services into tiers: from basic editing to full-cycle production (brief → creative consulting → editing → delivery → platform adaptation). Scaled from entry-level rates to $50/hr premium tier through consistent quality and systematic upselling.\n\nEvery project refined the system. SOPs became sharper, turnaround faster, client communication more structured.",
        pl: "Zbudowałem w pełni zoptymalizowaną solową operację projektową od podstaw:\n\nSklasyfikowałem każdą przychodzącą pracę na powtarzalne formaty — np. reklamy, motoryzacja, wydarzenia relacyjne czy motion design. Każda odnoga otrzymała swój własny, oparty na szablonach zautomatyzowany przepływ pracy ze standaryzowanymi timeline'ami, bibliotekami presetów i żelazną specyfikacją.\n\nZmieniłem wyceny z zadaniowych na kompleksowe usługi: od prostego montażu po pełen cykl produkcyjny (brief → konsultacje → montaż → dystrybucja → formaty na wybrane platformy SoMe). Takie systematyczne dosprzedawanie pozwoliło mi przeskoczyć z początkowych kwot do prestiżowego pułapu 50 dolarów za godzinę.\n\nKażdy kolejny projekt kalibrował mój system. Standaryzowane procedury (SOP) ewoluowały, turnaround stawał się błyskawiczny, a komunikacja z klientami wybitnie profesjonalna i poukładana."
      },
      result: {
        en: "250+ completed projects. 120 US clients. 5-star rating maintained across the entire portfolio. One person, full production capability — proof that systems beat headcount.",
        pl: "Sfinalizowane ponad 250 projektów dla 120 wyłącznych klientów w USA i utrzymana ocena 5/5 na całym profilu portfolio. Jeden człowiek, zaplecze produkcyjne na poziomie agencji — absolutny dowód na to, że sprawne systemy wygrywają z wielkością zespołu ludzkiego."
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
        { value: "< 1 min", label: { en: "Per render", pl: "Czas Renderu" } },
        { value: "∞", label: { en: "Parametric variations", pl: "Odmiany Parametryczne" } },
        { value: "0", label: { en: "Manual keyframes", pl: "Ręczne Klatki" } },
      ],
      challenge: {
        en: "Traditional motion design is manual. Every change means reopening After Effects, adjusting keyframes, re-rendering. For data-driven content or variations at scale, this doesn't work. The timeline becomes the bottleneck.\n\nThe answer isn't faster hands — it's a programmatic approach where code replaces the timeline entirely.",
        pl: "Tradycyjny motion design to praca manualna. Każda zmiana oznacza ponowne otwieranie After Effects, poprawianie klatek kluczowych, ponowne renderowanie. W przypadku treści opartych na danych lub tworzeniu bardzo wielu wariantów, to się nie sprawdza. Klatki kluczowe i interfejs programu stają się wąskim gardłem.\n\nŚlepią uliczką jest zatrudnianie asystentów do manualnego klikania — przyszłością jest inżynieria programistyczna, w której kod w całości zastępuje konwencjonalną oś czasu."
      },
      approach: {
        en: "Remotion — React-based programmatic video. Each composition is a React component. Parameters in, video out. Change a variable, get a new render. No timeline, no keyframes.\n\nThe animations are mathematically computed, not AI-hallucinated. A lidar visualization computes actual point-cloud geometry. A telemetry HUD reads real data structures. Precision motion design through code.\n\nCompositions range from abstract data visualizations to branded identity pieces to experimental explorations — all version-controlled, all parametrically adjustable.",
        pl: "Remotion — w pełni responsywne wideo oparte na frameworku React. Każda kompozycja jest traktowana jako komponent deweloperski. Podajesz argumenty wejściowe i odbierasz wyrenderowane pliki wideo. Chcesz modyfikacji? Zmieniasz tylko zmienną w kodzie. Zero timeline'u, zero ręcznego przestawiania klatek.\n\nObliczenia animacji są tu czystą matematyką — nie ma w tym losowych halucynacji generatorów sztucznej inteligencji. Przykładowo, wizualizacja radaru analizuje i przelicza prawdziwą wektorową geometrię, a wbudowany HUD telemetryczny karmi się natywnymi strukturami danych ze wskaźników REST API. To czysta precyzja i inżynieria motion designu w całości rządzona kodem.\n\nDziałania obejmują szerokie spektrum: od abstrakcyjnych przestrzeni i wizualizacji baz danych, przez wektorowe systemy identyfikacji (UI/Branding), aż po proceduralne eksperymenty wizualne. Wszystko rzetelnie wersjonowane na Gicie, jak każda porządna architektura kodu."
      },
      result: {
        en: "A production toolkit for parametric motion content. Any composition re-renders with different parameters in under a minute. Same codebase, infinite variations. This is what content production at scale looks like when code meets craft.",
        pl: "Stworzony od zera własny framework do masowej dystrybucji proceduralnego wideo. Generowanie tej samej kompozycji z nowymi danymi zajmuje programowi ledwie kilka sekund. Jeden ujednolicony kod źródłowy zapewnia dosłownie nieskończoną ilość wariantów wizualnych wideo-reklam. Tak w praktyce wygląda skalowalna produkcja treści klasy premium, gdy za rzemiosło odpowiada deweloper operujący kodem."
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
        { value: "12", label: { en: "Specialized agents", pl: "Wyspecjalizowani Agenci" } },
        { value: "3", label: { en: "LLM providers", pl: "Dostawcy LLM" } },
        { value: "30+", label: { en: "Daily automated tasks", pl: "Automatyczne Zadania" } },
        { value: "24/7", label: { en: "Autonomous operation", pl: "Działanie Autonomiczne" } },
      ],
      challenge: {
        en: "Off-the-shelf AI tools solve generic problems. Scaling content production, research, and workflow automation requires specialized AI workers that understand your domain, communicate with each other, and operate without supervision.\n\nOne person can't simultaneously search for jobs, monitor market trends, generate content, manage communications, and build a portfolio. The bottleneck isn't skill — it's attention.",
        pl: "Masowe narzędzia AI z półki rozwiązują tylko najbardziej podstawowe i ogólne problemy. Próba skalowania produkcji treści czy głębokiej analizy danych wymaga silnie spersonalizowanych asystentów AI, którzy dogłębnie zrozumieją branżę, będą swobodnie wymieniać się wnioskami między sobą oraz — co najważniejsze — zaczną działać w niezależnej, autonomicznej pętli.\n\nPojedynczy człowiek nigdy nie ma czasu na ciągłe śledzenie trendów rynkowych, analizę konkurencji z lupą, jednoczesne generowanie wymagających opracowań i utrzymanie sieci kontaktów biznesowych. Prawdziwym progiem zaporowym nie są wcale kompetencje czy zaplecze graficzne — lecz najzwyklejszy czas i ludzka uwaga."
      },
      approach: {
        en: "Custom multi-agent system built from scratch:\n\nDispatcher routes tasks to specialized agents by type and complexity. 12 specialized agents, each with its own model, prompt architecture, and domain expertise.\n\n3 LLM providers — Claude, MiniMax M2.5, Gemini — chosen per task for cost/capability balance. Cron orchestration runs agents on schedule, 24/7, no human intervention.\n\nCross-model validation ensures outputs are verified by a different model (adversarial synthesis). mem0 persistent memory provides cross-session context. Telegram interface delivers results directly to messenger.\n\nThe system evolved through multiple architectural iterations, each informed by production experience.",
        pl: "Własny, wysoce zaawansowany ekosystem wieloagentowy (Multi-Agent System) postawiony od zera na środowisku Node.js:\n\nDispatcher, pełniący funkcję rdzenia operacyjnego, nieustannie analizuje nadchodzące do platformy potrzeby i rozdziela mikro-zadania do 12 wyprofilowanych wirtualnych ekspertów, adaptując zachowanie modelu do specyfiki problemu.\n\nDla dywersyfikacji wniosków zintegrowano trzy potężne rdzenie: modele Claude od Anthropic dla architektury i logiki, błyskotliwe chińskie Minimax (M2.5/M2.7) dla gigantycznego kontekstu w tle, oraz Gemini Pro dla agregacji ogólnego researchu webowego. Cały organizm aktywuje się w określonych blokach czasowych za sprawą infrastruktury cron — całkowicie bez jakiejkolwiek ręcznej ingerencji człowieka.\n\nOprócz tego, system operacyjny regularnie uruchamia krzyżową autoweryfikację wniosków (adversarial synthesis), niwelując halucynacje LLM-ów we własnym zakresie. Pamięć mem0 odpowiada za trzymanie kilkutygodniowego kontekstu projektu, a finalne, gotowe raporty lądują prosto na moim komunikatorze Telegram poprzez prywatnego bota."
      },
      result: {
        en: "30+ daily automated tasks. Market analysis, content research, competitive intelligence, code review — all running autonomously. The human reviews and decides; the system researches and prepares.",
        pl: "Codziennie wykonywanych jest ponad 30 w pełni zautomatyzowanych mikrozadań. Analiza rynkowa, inteligentne podsumowywanie trendów webowych i weryfikacja techniczna kodu dzieją się w tle, na moich prywatnych wirtualnych serwerach. Człowiek tylko analizuje owoce tej pracy i na ich podstawie podejmuje czyste decyzje biznesowe — całą brudną robotę analityczną robi system."
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
        { value: "221", label: { en: "Lectures processed", pl: "Przetworzone Wykłady" } },
        { value: "22", label: { en: "Courses sorted", pl: "Posortowane Kursy" } },
        { value: "5", label: { en: "Automation phases", pl: "Fazy Automatyzacji" } },
        { value: "0", label: { en: "Data loss", pl: "Utrata Danych" } },
      ],
      challenge: {
        en: "221 lectures across 22 courses. Scattered across drives, inconsistent naming, missing files, broken folder structures. No inventory, no verification. A legacy content archive at risk of being lost.\n\nManual sorting would take weeks and be error-prone at this volume. Any drive failure means permanent content loss.",
        pl: "221 gigantycznych wykładów i modułów wideo chaotycznie rozrzuconych na dziesiątkach napędów dyskowych. Niespójne nazewnictwo plików, osierocone i zduplikowane materiały oraz zagubiona hierarchia katalogów. Całkowity brak spisu inwentarza. Ryzyko bezpowrotnej utraty dorobku w przypadku chociażby najmniejszej awarii talerza dyskowego.\n\nRęczna próba uporządkowania tak zagmatwanej pajęczyny zajęłaby pojedynczemu człowiekowi kilka bolesnych tygodni pracy, oferując w zamian gigantyczny margines błędu. Brakujące pliki na zawsze pozostałyby niezauważone."
      },
      approach: {
        en: "Designed a 5-phase systematic pipeline:\n\nPhase 1 — Discovery: Python scripts crawl all storage, build complete inventory, identify duplicates and gaps.\n\nPhase 2 — Sorting: Automated categorization by course, type, sequence via filename parsing and metadata extraction.\n\nPhase 3 — Audit: Cross-reference against course manifests. Flag missing lectures, corrupt files, version conflicts.\n\nPhase 4 — Verification: Automated integrity checks — codec, resolution, duration, audio sync.\n\nPhase 5 — Cloud Sync: GoodSync deployment to OneDrive with verified mirroring and change tracking.",
        pl: "Zaprojektowałem precyzyjny pięcioetapowy rurociąg skryptowy (Pipeline):\n\nFaza 1 — Odnajdywanie: Autorskie skrypty w Pythonie przeczesują masowo strukturę kilkunastu dysków przenośnych, generują gigantyczną mapę uśpionego archiwum, a następnie flagują brakujące odcinki i błyskawicznie wykrywają fizyczne duplikaty wideo.\n\nFaza 2 — Sortowanie: Algorytm potrafi dokonać głębokiej automatycznej klasyfikacji i na nowo poukładać całe drzewo podkatalogów, parsując w tym celu przestarzałe formaty z nazewnictwa oraz ekstrahując surowe metadane Exif i dane techniczne FFprobe.\n\nFaza 3 i 4 — Audyt i weryfikacja: Bezlitosny skrypt krzyżowo identyfikuje braki na macierzy z oficjalnym modelem indeksów szkoły filmowej. Następuje sprawdzanie wierności oryginalnych kodeków, rodzielczości i ewentualnych desynchronizacji dźwięku w wyjściowych plikach mp4.\n\nFaza 5 — Zabezpieczenie chmurowe: Uruchamiając potężną aplikację GoodSync, postawiłem pełny mirroring ustrukturyzowanej biblioteki w profesjonalnym i zabezpieczonym chmurowo strumieniu z MS OneDrive."
      },
      result: {
        en: "221 lectures, 22 courses — fully sorted, audited, verified, cloud-synced. Zero data loss. Process documented and repeatable for future archive operations.",
        pl: "Uratowano 221 obszernych wykładów i ułożono w idealnie skatalogowane 22 kursy — z pełnym audytem anomali i gwarancją braku utraty danych. Żmudna robota, na którą wcześniej człowiek musiałby zarezerwować miesiąc, została zastąpiona kilkoma w pełni bezbłędnymi przebiegami z mojego środowiska terminalowego."
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
        { value: "540-seat", label: { en: "Concert hall", pl: "Sala Koncertowa" } },
        { value: "150+", label: { en: "Performers", pl: "Występujących" } },
        { value: "Multi-cam", label: { en: "Live production", pl: "Transmisja Live" } },
        { value: "Zero errors", label: { en: "Tolerance", pl: "Tolerancja Błędu" } },
      ],
      challenge: {
        en: "Państwowy Zespół Ludowy Pieśni i Tańca \"Mazowsze\" — Poland's national folk song and dance ensemble. A 540-seat hall, 150+ performers, state-level cultural institution.\n\nLive production for a state cultural institution. No second takes, no \"fix it in post.\" The stakes are reputational as much as technical — every delivery represents a national ensemble.",
        pl: "Państwowy Zespół Ludowy Pieśni i Tańca „Mazowsze” — kultowa, potężna instytucja kultury z imponującą sceną na 540 miejsc oraz przeszło setką artystów występujących symultanicznie podczas jednego ujęcia.\n\nProdukcja transmisyjna (Live) oraz operatorska na tak elitarnym, państwowym poziomie nie zostawia nawet mikromilimetra marginesu na pomyłkę. W relacjach na żywo nie ma filozofii typu „później naprawimy to na spokojnie w montażu”. Perfekcja wizualna z każdego miksu musi natychmiast wychodzić we flagowej jakości na światło dzienne."
      },
      approach: {
        en: "Full-service production partnership spanning multiple formats:\n\nHero promotional video — currently featured on the organization's homepage. Multi-camera live concert production with zero-error tolerance for state events.\n\nAnimated advertising for Warsaw metro displays and central railway station digital screens. Full-cycle promotional content across all platforms. Ballet-derived animations for digital use.\n\nWorking with performers who operate at the highest level of their craft demands the same from the production team.",
        pl: "Pełnowymiarowe reżyserskie i operatorskie wzięcie na barki produkcji audiowizualnej:\n\nWyreżyserowanie oficjalnych form marketingowych zespołu. Wielo-kamerowa, arcytrudna realizacja przeplatających się w dynamicznym układzie orkiestr dętych, chórów akustycznych oraz baletu tańczącego ludową akrobatykę.\n\nOprócz obsługi tradycyjnego wideo powierzono mi również zadanie wykreowania i wprawienia w ruch wektorowych, monumentalnych animacji reklamowych, wyświetlanych nieprzerwanie na wielkich plazmach Dworca Centralnego w Warszawie oraz na wszystkich peronach stołecznego metra.\n\nPraca operatorsko-reżyserska i montaż z tak elitarnymi w swoim fachu artystami wymaga dopasowania się pod absolutnie bezkompromisowy poziom profesjonalizmu i punktualności rzemieślniczej."
      },
      result: {
        en: "Comprehensive production for a national institution. The hero video remains their primary digital representation. Live broadcasts delivered flawlessly under zero-error conditions. Metro and railway station advertising running on Warsaw's busiest screens.",
        pl: "Instytucja państwowa otrzymała potężny fundament wizerunkowy w formacie wideo. Wykreowany we współpracy z zespołem sztandarowy spot do dziś dumnie wita gości na głównej stronie witryny zespołu. Z kolei transmisje na żywo zostały opanowane wręcz perfekcyjnie – i to przy zerowej wyrozumiałości publiczności i streamingu na wszelkie pomyłki operacyjne realizatora obrazu."
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
        { value: "60+", label: { en: "Sources", pl: "Źródła" } },
        { value: "15+", label: { en: "Categories", pl: "Kategorie" } },
        { value: "2", label: { en: "Live products", pl: "Aktywne Serwisy" } },
        { value: "1 day", label: { en: "Digest build time", pl: "Czas Budowy Digest" } },
      ],
      challenge: {
        en: "Build a professional portfolio and a live intelligence platform simultaneously, as a one-person operation. No CMS, no templates — pure code. The answer: build the infrastructure to build itself.\n\nTwo products with different requirements — a static portfolio site and a real-time intelligence digest — both needing to deploy autonomously to the edge.",
        pl: "Wyzwanie polegało na zaprojektowaniu i dewelopmencie dwóch komercyjnych domen od absolutnego zera do perfekcyjnego poziomu zaawansowania. Moim celem z góry było zrezygnowanie z wszelkich topornych, gotowych kreatorów stron czy powolnych CMS-ów. Tego kalibru wielowątkowe produkcje w pojedynkę zazwyczaj wiążą się z bolesnymi spowolnieniami oraz obniżeniem estetycznego standardu aplikacji webowej.\n\nNiemniej odpowiedź znalazłem wdrażając we wszystko asystentów LLM i budując solidną chmurową architekturę. Obie witryny mogły być wreszcie deployowane niemal tak szybko i tak potężnie, jak robiłyby to elitarne zespoły deweloperskie."
      },
      approach: {
        en: "Two interconnected products, one architectural philosophy:\n\nRZMRN.com (this site): Next.js 16, React 19, Tailwind v4. Static export to Cloudflare Pages. Built collaboratively with Claude Code CLI agents — architecture, components, content, deployment. No CMS, no templates — pure code.\n\nRZMRN Digest (digest.rzmrn.com): Autonomous OSINT intelligence pipeline. 60+ RSS sources across 15+ categories. MiniMax M2.5 multi-threaded analysis with adversarial critique and synthesis. mem0 persistent memory. Bilingual RU/UA output. Cyberpunk terminal UI. Auto-deploy to Cloudflare Pages. Built in one day.\n\nBoth products demonstrate the thesis: one person + AI-first architecture = output that looks like a team.",
        pl: "Dwa zintegrowane produkty, spięte jedną potężną i czystą filozofią deweloperską:\n\nRZMRN.com (witryna, na której aktualnie to czytasz): Zbudowana na błyskawicznym frameworku Next.js 16, React 19 z renderowaniem szkieletowym Tailwind v4. Skompresowana jako wydmuszka statyczna i serwowana w oparciu o infrastrukturę Edge w chmurze Cloudflare Pages. Stworzona w tandemie z modelami od Anthropic; począwszy od całej architektury systemu wielojęzycznego aż po złożone, interaktywne komponenty React we front-endzie. Zero obrzydliwych gotowców – czysty kod sterowany precyzyjną ręką architekta.\n\nRZMRN Digest (digest.rzmrn.com): Potężny, całkowicie autonomiczny system AI Pipeline w modelu operacyjnym OSINT. Pętla serwerowa połyka dane bezpośrednio za pośrednictwem blisko 60 sprawdzonych kanałów i analizuje z użyciem gigantycznych modeli językowych od MiniMax (M2.5/M2.7) oraz potężnych modułów od Google. To codzienna platforma dystrybucyjna z obłędną szatą graficzną rodem z hacker-terminala web-interface’ów lat 90. Całość postawiona od pomysłu do dewelopmentu serwera produkcyjnego dosłownie w mniej niż jedną pełną dobę operacyjną."
      },
      result: {
        en: "Two live products running on edge infrastructure. The portfolio showcases the work; the digest proves the methodology. Both built, deployed, and maintained by one person with AI as a force multiplier.",
        pl: "Oba systemy funkcjonują natywnie na serwerach architektury Edge o zasięgu globalnym. Portfolio perfekcyjnie wystawia wizualnie kreatywne referencje twórcy, a działający podrzędnie inteligentny Digest – dosadnie krzyczy o potędze logiki systemowej, jaką władam. Gigantyczne zasięgi dla setek tysięcy wejść udźwignięte dosłownie na mikroskopijnych nakładach utrzymania budżetów serwerowych – triumf automatyzacji nad wielkimi korporacyjnymi strukturami."
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
      { src: "/videos/content/yarik-edit.mp4", label: "Bangkok Reel" },
      { src: "/videos/content/motocross-reel.mp4", label: "Motocross Reel" },
      { src: "/videos/content/maveric-ride-reel.mp4", label: "Maveric Ride Reel" },
      { src: "/videos/content/lambo-reel.mp4", label: "Freaking Lambo" },
      { src: "/videos/content/insta-bakalova.mp4", label: "Around Bali" },
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
        pl: "Istnieje powszechny, mylny stereotyp mówiący o tym, że format popularnych 'rolek' czy 'tiktoków' jest intelektualnie płytki, prozaiczny w obróbce i rzekomo banalny estetycznie. Prawda branżowa natomiast szokuje – nie istnieje dziś trudniejsza dziedzina rzemiosła obrazu od formy short-wideo. Zaledwie od 3 do 15 sekund – tylko tyle wystarcza dzisiejszej percepcji, by przesunąć kciukiem naszą dziesiątek godzin budowaną kompozycję i pochłonąć do cna ten mikrosekundowy zysk atencji widza. Każda drobna ramka wycinana skalpelem musi z absolutną bolesnością krzyczeć o luksusowej wizji produktu docelowego – tu pęka każda tolerancja na jakiekolwiek przedłużające się czy niewidoczne sceny, kuleje każdy moment zawieszenia braku rytmicznego ciosu basu.\n\nPrawdziwe arcydzieło cyfrowej inżynierii we wpompowywaniu ruchu na portale polega dziś nie tylko na byciu maszyną taśmociągową tworzącą setki bezdusznych treści tygodniowo dla brandu – lecz destylowaniu i miażdżeniu dekady perfekcjonizmu motion dla gigantycznych potęg z kinematografii kinowej do formatów ekranów telefonu trzymanego w dłoni na korytarzu miejskim - tak żeby było to niemiłosiernie oszałamiające optycznie i wizualnie."
      },
      approach: {
        en: "Years of After Effects work — automotive, travel, fashion, motion graphics — where technical obsession meets instant impact. Dozens of hours per composition, complex layer stacks, precise timing.\n\nEach category with its own visual language: automotive reels demand kinetic energy and metal textures. Travel content needs atmosphere and scale. Fashion requires rhythm and elegance. Pure motion design experiments push technique without client constraints.\n\nAll unified by the same production standard — the work speaks for itself.",
        pl: "Suma przepalonych dziesiątków tysięcy żmudnych obsesyjnych godzin analizy każdego drgnięcia piksela na osi oprogramowania do efektów wizualnych po stronie Adobe. Prawdziwe motion rodzi się na styku brutalnego zderzenia graficznej i udrękowej analizy warstw krzywych klatek kluczowych w przestrzeni, maskowania obiektowego do klatek przemieszczających się o milimetry po soczewkach optyk kamery z żywym światłem środowiskowym i wektorów dynamicznie rozciąganej wektorowej przestrzeni loga nałożonego po torze pędzącego samochodu w zakręcie na zderzaku.\n\nKażda dziedzina posiada swoją niezależną dynamikę wektorową. Formaty komercyjno-samochodowe wymagają ode mnie precyzyjnego wgryzienia i idealnie sprzęgniętego uderzania rytmiki bitów ujęciami lśniącej blachy i kinetycznej eksplozji z obrotów silnikowych. Filmy związane z modą czy produktami beauty domagają się ode mnie wnikliwego rzemiosła pracy oświetleniowej, eleganckiego tempa zwolnienia z klatek (Time Remapping) jak również wręcz bezwzględnego wyrównywania estetyki wizualnej. Prawdziwa i surowa praca z motion to rzeźbienie i pchanie absolutnie najdalszych wektorowych wariantów i sprawdzania ostatecznych wydolności optycznych komputera oraz wizji z pominięciem dyktowania wymiarów przez zewnętrznych reżyserów – to brutalna praca na czystych żywych liniach granicznych wizji dewelopera kreacji obrazu."
      },
      result: {
        en: "Short-form isn't lesser production. It's production compressed to its essence. The range speaks to versatility; the quality speaks to craft.",
        pl: "Cyfrowe formy contentu pionowego (Short-Form) to wcale nie podrzędny wizualny asortyment wyrzucany do kosza po zobaczeniu na streamie. To w stu procentach pełnowymiarowa i profesjonalna produkcja, tylko i wyłącznie drastycznie skondensowana i bezwzględna do swojej najbardziej gęstej ożywczej surowej czystości audiowizualnej – tam gdzie wybitny warsztat montażowy przemienia i napędza najbardziej oszałamiający efekt na końcu portalu wzrokowego klienta, rozgramiając doszczętnie wszelkie mizerne zbitki rzemieślniczej konkurencji o uwagę widza."
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
      pl: "Pełny proces postprodukcyjny: od agresywnego i nienagannego montażu w rytm silnika, przez kinowy color grading nadający ostateczny obraz surowym pikselom z kamery cyfrowej – a kończąc na precyzyjnym udźwiękowieniu wraz z osadzeniem graficznych brył 3D wektorowego motion design."
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
      pl: "Kompleksowa obsługa postprodukcji oraz reżyserii tego spotu reklamy luksusowych samochodów dla zachodniego francuskiego dealera motoryzacyjnego Daytona. Tworzenie pełnej wizji kreatywnej od rozpisania scenopisów (pre-production), poprzez fizyczny direct planów – po perfekcyjnie wyszlifowany mistrzowski montaż, sound design i zaawansowny i luksusowy color-correction doprowadzony z chirurgiczną ostrością kalibru balansu kinowego z masterem do ostatecznej dystrybucji."
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
      pl: "W pełni autorsko wyreżyserowane, profesjonalne muzyczne teledyski u artysty muzycznego, skrojone ze starannością warsztatu wideo od czystego szkicu ołówkiem wizji reżyserskiej aż po ostateczne zblokowanie całej siatki logistycznej i oświetleniowej w czasie prawdziwego live-planu teledysku – wykreowane i podparte we wręcz absurdalnie złożonej siatce kompozycji wizualnej efektów specjalnych 3d i surowego agresywnego post-processingu VFX przy końcowej korekcie obrazu log."
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
      pl: "Potężne, zapadające w percepcji animowane projekcje i zapowiedzi w formacie reklam wideo od największych agencji eventowych i dystrybutorów muzycznych i brandingów firm z całego świata. Skrajnie dynamiczne, wizualnie agresywne kreacje motion design idealnie wpompowujące zaangażowanie dla potęg wizualnego engagement'u w social mediach z platform Tik-Tok oraz Instagram."
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
