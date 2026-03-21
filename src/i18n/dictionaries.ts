import type { Locale } from "./config";

export type Dictionary = typeof dictionaries.en;

export const dictionaries = {
  en: {
    nav: {
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      subtitle: "Filmmaker & Creative Director — Motion / Post / AI",
      trackLabels: "Directing / Cinematography / Editing / Motion Design / Color Grading / AI Automation",
      viewWork: "View Work",
      getInTouch: "Get in Touch",
      scroll: "Scroll",
    },
    projects: {
      sectionTitle: "Selected Work",
      allProjects: "ls -la ./projects \u2192",  // right arrow
      tracks: {
        content: "Content Production",
        ai: "AI Systems",
      },
      trackSub1: "Video \u00b7 Motion \u00b7 Live \u00b7 Post-Production", // middle dot
      trackSub2: "Automation \u00b7 Multi-Agent \u00b7 Programmatic Video \u00b7 Pipeline",
      bridge: "I produce content and build AI systems to scale it 10x",
      viewCaseStudy: "View Case Study \u2192",
      pageTitle: "Projects Dashboard (All)",
      pageSubtitle: "PRODUCTION / ARCHITECTURE / EXPERIMENTS",
      categories: {
        all: "All",
        commercial: "Commercial",
        "music-video": "Music Video",
        "motion-design": "Motion Design",
        documentary: "Documentary",
        "social": "Social",
        branding: "Branding",
        "ai-automation": "AI Automation",
        "content-pipeline": "Content Pipeline",
        "live-production": "Live Production",
        "bot-system": "Bot System",
        infrastructure: "Infrastructure",
      },
      tracksLabel: {
        production: "PRODUCTION",
        systems: "SYSTEMS",
        hybrid: "SYSTEMS + PRODUCTION",
      }
    },
    stats: {
      years: "Years in Production",
      projects: "Projects Shipped",
      deliveries: "Fiverr Deliveries",
      reviews: "5-Star Reviews",
    },
    aboutTeaser: {
      title: "I don't just cut video. I build systems.",
      p1: "Director of Post-Production and Motion Designer, engineering high-end visual stories and the technical workflows behind them. From EdTech course productions to automotive commercials for Mazda and Lotus.",
      p2: "Custom AI and automation pipelines integrated into post-production \u2014 eliminating routine bottlenecks so the focus stays entirely on the creative work.",      
      p3: "Based in Poland, available for remote commercial projects, brand films, and motion design commissions globally.",
      link: "More About Me \u2192",
    },
    cta: {
      title: "Let's make something together",
      subtitle: "Available for commercial projects, music videos, brand films, and motion design commissions.",
      button: "Start a Conversation",
    },
    footer: {
      rights: "\u00a9 2026 RZMRN. All rights reserved.",
    },
    caseStudy: {
      back: "\u2190 cd ..",
      role: "Role",
      stack: "Stack & Tools",
      challenge: "The Challenge",
      approach: "The Approach",
      result: "The Result",
      seeAlso: "See Also \u2192",
    }
  },
  pl: {
    nav: {
      projects: "Projekty",
      about: "O mnie",
      contact: "Kontakt",
    },
    hero: {
      subtitle: "Filmmaker & Creative Director \u2014 Motion / Post / AI",
      trackLabels: "Directing / Cinematography / Editing / Motion Design / Color / AI",
      viewWork: "Zobacz Portfolio",
      getInTouch: "Skontaktuj si\u0119",
      scroll: "Scrolluj",
    },
    projects: {
      sectionTitle: "Wybrane Projekty",
      allProjects: "ls -la ./projekty \u2192",
      tracks: {
        content: "Produkcja Contentu",
        ai: "Systemy AI",
      },
      trackSub1: "Video \u00b7 Motion \u00b7 Live \u00b7 Post-Produkcja",
      trackSub2: "Automatyzacja \u00b7 Multi-Agent \u00b7 Programmatic Video \u00b7 Pipeline",
      bridge: "Produkuj\u0119 content i buduj\u0119 systemy AI, aby skalowa\u0107 go 10x",
      viewCaseStudy: "Zobacz Case Study \u2192",
      pageTitle: "Panel Projekt\u00f3w (Wszystko)",
      pageSubtitle: "PRODUKCJA / ARCHITEKTURA / EKSPERYMENTY",
      categories: {
        all: "Wszystko",
        commercial: "Reklama",
        "music-video": "Teledyski",
        "motion-design": "Motion Design",
        documentary: "Dokument",
        "social": "Social Media",
        branding: "Branding",
        "ai-automation": "AI & Automatyzacja",
        "content-pipeline": "Content Pipeline",
        "live-production": "Produkcja Live",
        "bot-system": "Systemy Bot\u00f3w",
        infrastructure: "Infrastruktura",
      },
      tracksLabel: {
        production: "PRODUKCJA",
        systems: "SYSTEMY",
        hybrid: "SYSTEMY + PRODUKCJA",
      }
    },
    stats: {
      years: "Lat w Produkcji",
      projects: "Zrealizowanych Projekt\u00f3w",
      deliveries: "Zam\u00f3wie\u0144 na Fiverr",
      reviews: "5-Gwiazdkowych Opinii",
    },
    aboutTeaser: {
      title: "Nie tylko montuj\u0119 wideo. Tworz\u0119 systemy.",
      p1: "Director of Post-Production i Motion Designer. Projektuj\u0119 wysokiej jako\u015bci wizualne historie i techniczne workflow, kt\u00f3re za nimi stoj\u0105. Od produkcji kurs\u00f3w EdTech po reklamy motoryzacyjne dla Mazdy i Lotusa.",
      p2: "Autorskie pipeline'y AI i automatyzacje zintegrowane z post-produkcj\u0105 \u2014 eliminuj\u0105 w\u0105skie gard\u0142a i rutyn\u0119, aby ca\u0142a uwaga by\u0142a skupiona na kreatywnej pracy.",
      p3: "Pracuj\u0119 z Polski, dost\u0119pny zdalnie przy komercyjnych projektach, filmach wizerunkowych i zleceniach motion design g\u0142obalnie.",
      link: "Wi\u0119cej O Mnie \u2192",
    },
    cta: {
      title: "Stw\u00f3rzmy co\u015b razem",
      subtitle: "Dost\u0119pny do wsp\u00f3\u0142pracy przy projektach komercyjnych, teledyskach, filmach wizerunkowych i zleceniach motion design.",
      button: "Rozpocznij Rozmow\u0119",
    },
    footer: {
      rights: "\u00a9 2026 RZMRN. Wszelkie prawa zastrze\u017cone.",
    },
    caseStudy: {
      back: "\u2190 cd ..",
      role: "Rola",
      stack: "Narz\u0119dzia & Stack",
      challenge: "Wyzwanie",
      approach: "Rozwi\u0105zanie",
      result: "Rezultat",
      seeAlso: "Zobacz R\u00f3wnie\u017c \u2192",
    }
  }
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
