import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const OUTPUT_DIR = path.join(ROOT, "docs");
const OUTPUT_JSON = path.join(OUTPUT_DIR, "copy-inventory.json");
const OUTPUT_MD = path.join(OUTPUT_DIR, "copy-inventory.md");

const DICTIONARY_SOURCE = "src/i18n/dictionaries.ts";
const PROJECTS_SOURCE = "src/data/projects.ts";

const USED_DICTIONARY_KEYS = new Set([
  "nav.projects",
  "nav.about",
  "nav.contact",
  "hero.subtitle",
  "hero.trackLabels",
  "hero.viewWork",
  "hero.getInTouch",
  "hero.scroll",
  "projects.sectionTitle",
  "projects.allProjects",
  "projects.tracks.content",
  "projects.tracks.ai",
  "projects.trackSub1",
  "projects.trackSub2",
  "projects.bridge",
  "projects.viewCaseStudy",
  "projects.tracksLabel.production",
  "projects.tracksLabel.systems",
  "projects.tracksLabel.hybrid",
  "stats.years",
  "stats.projects",
  "stats.deliveries",
  "stats.reviews",
  "aboutTeaser.title",
  "aboutTeaser.p1",
  "aboutTeaser.p2",
  "aboutTeaser.p3",
  "aboutTeaser.link",
  "cta.title",
  "cta.subtitle",
  "cta.button",
  "footer.rights",
  "caseStudy.back",
  "caseStudy.role",
  "caseStudy.challenge",
  "caseStudy.approach",
  "caseStudy.result",
  "bentoGrid.commercial",
  "bentoGrid.automotive",
  "bentoGrid.event",
  "bentoGrid.motion",
  "terminal.projectsShipped",
  "terminal.fiverrDeliveries",
  "terminal.fiveStarReviews",
  "terminal.yearsActive",
  "terminal.details",
  "terminal.file",
]);

const DICTIONARY_SECTION_META = {
  nav: { route: "Shared Layout", section: "Navigation" },
  hero: { route: "/[locale]", section: "Hero" },
  projects: {
    route: "/[locale] + /[locale]/projects + /[locale]/projects/[slug]",
    section: "Projects UI",
  },
  stats: { route: "/[locale]", section: "Stats" },
  aboutTeaser: { route: "/[locale]", section: "About Teaser" },
  cta: { route: "/[locale]", section: "Home CTA" },
  footer: { route: "Shared Layout", section: "Footer" },
  caseStudy: { route: "/[locale]/projects/[slug]", section: "Case Study UI" },
  bentoGrid: { route: "/[locale]/projects/[slug]", section: "Interactive Labels" },
  terminal: { route: "/[locale]", section: "Terminal Proof" },
};

const HARD_CODED_SOURCES = [
  { file: "src/components/sections/home/Hero.tsx", route: "/[locale]", section: "Hero" },
  { file: "src/components/ui/TerminalProof.tsx", route: "/[locale]", section: "Terminal Proof" },
  { file: "src/app/[locale]/about/page.tsx", route: "/[locale]/about", section: "About Page" },
  { file: "src/components/sections/about/Bio.tsx", route: "/[locale]/about", section: "Bio" },
  { file: "src/components/sections/about/Skills.tsx", route: "/[locale]/about", section: "Skills" },
  { file: "src/components/sections/about/Philosophy.tsx", route: "/[locale]/about", section: "Philosophy" },
  { file: "src/app/[locale]/contact/page.tsx", route: "/[locale]/contact", section: "Contact Page" },
  { file: "src/components/sections/contact/ContactForm.tsx", route: "/[locale]/contact", section: "Contact Form" },
  { file: "src/app/[locale]/projects/page.tsx", route: "/[locale]/projects", section: "Projects Page" },
  {
    file: "src/components/sections/projects/ProjectsPageContent.tsx",
    route: "/[locale]/projects",
    section: "Projects Page Content",
  },
  {
    file: "src/app/[locale]/projects/[slug]/page.tsx",
    route: "/[locale]/projects/[slug]",
    section: "Project Detail Page",
  },
  {
    file: "src/components/sections/case-study/CaseStudyLayout.tsx",
    route: "/[locale]/projects/[slug]",
    section: "Case Study Layout",
  },
  {
    file: "src/components/sections/case-study/CaseNav.tsx",
    route: "/[locale]/projects/[slug]",
    section: "Case Study Nav",
  },
  {
    file: "src/components/ui/CaseStudyCard.tsx",
    route: "/[locale] + /[locale]/projects",
    section: "Case Study Card",
  },
  {
    file: "src/components/interactive/AnimatedPipeline.tsx",
    route: "/[locale]/projects/[slug]",
    section: "Animated Pipeline",
  },
  {
    file: "src/components/interactive/BentoGrid.tsx",
    route: "/[locale]/projects/[slug]",
    section: "Bento Grid",
  },
  {
    file: "src/components/interactive/EcosystemDiagram.tsx",
    route: "/[locale]/projects/[slug]",
    section: "Ecosystem Diagram",
  },
  {
    file: "src/components/interactive/InteractiveSlot.tsx",
    route: "/[locale]/projects/[slug]",
    section: "Interactive Slot",
  },
  {
    file: "src/components/interactive/LiveFeedHUD.tsx",
    route: "/[locale]/projects/[slug]",
    section: "Live Feed HUD",
  },
  {
    file: "src/components/interactive/NetworkGraph.tsx",
    route: "/[locale]/projects/[slug]",
    section: "Network Graph",
  },
  {
    file: "src/components/interactive/ScrollTimeline.tsx",
    route: "/[locale]/projects/[slug]",
    section: "Scroll Timeline",
  },
  {
    file: "src/components/interactive/TypingTerminal.tsx",
    route: "/[locale]/projects/[slug]",
    section: "Typing Terminal",
  },
  {
    file: "src/components/interactive/VideoWall.tsx",
    route: "/[locale]/projects/[slug]",
    section: "Video Wall",
  },
];

const ROUTE_ORDER = new Map(
  [
    "Shared Layout",
    "/[locale]",
    "/[locale]/about",
    "/[locale]/contact",
    "/[locale]/projects",
    "/[locale] + /[locale]/projects",
    "/[locale]/projects + /[locale]/projects/[slug]",
    "/[locale] + /[locale]/projects + /[locale]/projects/[slug]",
    "/[locale]/projects/[slug]",
  ].map((route, index) => [route, index])
);

const STRUCTURED_KEY_BLOCKLIST = new Set([
  "slug",
  "thumbnail",
  "videoLoop",
  "src",
  "url",
  "href",
  "path",
  "id",
  "key",
  "type",
  "track",
  "category",
  "order",
  "featured",
  "hero",
  "clientLogo",
  "poster",
]);

const STRUCTURED_ROOT_BLOCKLIST = new Set([
  "trackColors",
  "trackGradients",
  "transitionStyle",
]);

const JSX_ATTRIBUTE_ALLOWLIST = new Set(["aria-label", "title", "placeholder"]);

const ENTITY_MAP = {
  "&apos;": "'",
  "&quot;": '"',
  "&ldquo;": '"',
  "&rdquo;": '"',
  "&lsquo;": "'",
  "&rsquo;": "'",
  "&amp;": "&",
  "&larr;": "←",
  "&rarr;": "→",
  "&u2192;": "→",
  "&nbsp;": " ",
};

function toPosix(filePath) {
  return filePath.split(path.sep).join("/");
}

function normalizeText(text) {
  if (typeof text !== "string") {
    return "";
  }

  let normalized = text;
  for (const [entity, value] of Object.entries(ENTITY_MAP)) {
    normalized = normalized.split(entity).join(value);
  }

  normalized = normalized
    .replace(/\r\n/g, "\n")
    .replace(/\u00a0/g, " ")
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trimEnd())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return normalized;
}

function hasLetter(text) {
  return /\p{L}/u.test(text);
}

function isMetricLike(pathKey) {
  return /(?:^|\.)(?:value|metric|metrics(?:\[\d+\])?\.value)$/.test(pathKey);
}

function isLikelyUserFacingText(text, pathKey = "") {
  if (!text) return false;
  if (text === "use client") return false;
  if (/^https?:\/\//i.test(text)) return false;
  if (/^[@./]/.test(text) && text.includes("/")) return false;
  if (/^#(?:[0-9a-f]{3,8})$/i.test(text)) return false;

  const lower = text.toLowerCase();
  const styleFragments = [
    "linear-gradient",
    "cubic-bezier",
    "prefers-reduced-motion",
    "rgba(",
    "var(--",
    "bg-[",
    "border-[",
    "text-[",
    "px-",
    "py-",
    "pt-",
    "pb-",
    "sm:",
    "md:",
    "lg:",
    "xl:",
  ];
  if (styleFragments.some((fragment) => lower.includes(fragment))) {
    return false;
  }

  if (!hasLetter(text)) {
    return isMetricLike(pathKey) && /[0-9]/.test(text);
  }

  return true;
}

function shouldCaptureStructuredKey(pathKey, text) {
  const root = pathKey.split(/[\[.]/)[0];
  if (STRUCTURED_ROOT_BLOCKLIST.has(root)) {
    return false;
  }

  const parts = pathKey
    .replace(/\[\d+\]/g, "")
    .split(".")
    .filter(Boolean);
  const last = parts.at(-1);

  if (last && STRUCTURED_KEY_BLOCKLIST.has(last)) {
    return false;
  }

  if (parts.includes("sameAs")) {
    return false;
  }

  return isLikelyUserFacingText(text, pathKey);
}

function humanizeKebab(text) {
  return text
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatStatus(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

async function loadTsModule(relativePath) {
  const absolutePath = path.join(ROOT, relativePath);
  const source = await fs.readFile(absolutePath, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
    },
    fileName: absolutePath,
  });

  const module = { exports: {} };
  const context = vm.createContext({
    module,
    exports: module.exports,
    console,
    require(specifier) {
      throw new Error(`Unexpected runtime import while loading ${relativePath}: ${specifier}`);
    },
  });

  new vm.Script(outputText, { filename: absolutePath }).runInContext(context);
  return module.exports;
}

function flattenObjectLeaves(value, prefix = "") {
  const entries = [];

  if (typeof value === "string") {
    entries.push([prefix, value]);
    return entries;
  }

  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return entries;
  }

  for (const [key, nextValue] of Object.entries(value)) {
    const nextPrefix = prefix ? `${prefix}.${key}` : key;
    entries.push(...flattenObjectLeaves(nextValue, nextPrefix));
  }

  return entries;
}

function collectDictionaryEntries(dictionaries) {
  const entries = [];

  for (const locale of ["en", "pl"]) {
    for (const [key, text] of flattenObjectLeaves(dictionaries[locale])) {
      if (!USED_DICTIONARY_KEYS.has(key)) {
        continue;
      }

      const meta = DICTIONARY_SECTION_META[key.split(".")[0]];
      entries.push({
        sourceType: "dictionary",
        route: meta.route,
        section: meta.section,
        source: DICTIONARY_SOURCE,
        key: `${key}.${locale}`,
        text: normalizeText(text),
        locale,
      });
    }
  }

  return entries;
}

function pushProjectEntry(entries, route, section, key, text, extra = {}) {
  const normalized = normalizeText(String(text));
  if (!normalized || !isLikelyUserFacingText(normalized, key)) {
    return;
  }

  entries.push({
    sourceType: "project",
    route,
    section,
    source: PROJECTS_SOURCE,
    key,
    text: normalized,
    ...extra,
  });
}

function collectProjectEntries(projects) {
  const entries = [];

  for (const project of projects) {
    const baseRoute = "/[locale]/projects + /[locale]/projects/[slug]";
    const baseSection = `Project Data / ${project.slug}`;

    pushProjectEntry(entries, baseRoute, baseSection, "title.en", project.title.en, {
      locale: "en",
      slug: project.slug,
    });
    pushProjectEntry(entries, baseRoute, baseSection, "title.pl", project.title.pl, {
      locale: "pl",
      slug: project.slug,
    });
    pushProjectEntry(entries, baseRoute, baseSection, "client", project.client, {
      slug: project.slug,
    });
    pushProjectEntry(entries, baseRoute, baseSection, "year", String(project.year), {
      slug: project.slug,
    });
    pushProjectEntry(entries, baseRoute, baseSection, "description.en", project.description.en, {
      locale: "en",
      slug: project.slug,
    });
    pushProjectEntry(entries, baseRoute, baseSection, "description.pl", project.description.pl, {
      locale: "pl",
      slug: project.slug,
    });

    project.tags.forEach((tag, index) => {
      pushProjectEntry(entries, baseRoute, baseSection, `tags[${index}]`, tag, {
        slug: project.slug,
      });
    });

    pushProjectEntry(
      entries,
      baseRoute,
      baseSection,
      "display.category",
      project.category.replace(/-/g, " "),
      { slug: project.slug }
    );

    if (project.status) {
      pushProjectEntry(entries, baseRoute, baseSection, "display.status", formatStatus(project.status), {
        slug: project.slug,
      });
    }

    if (project.type === "visual") {
      pushProjectEntry(entries, baseRoute, baseSection, "role", project.role, {
        slug: project.slug,
      });
      pushProjectEntry(entries, baseRoute, baseSection, "deliverable", project.deliverable, {
        slug: project.slug,
      });
    } else {
      pushProjectEntry(entries, baseRoute, baseSection, "architecture", project.architecture, {
        slug: project.slug,
      });
      pushProjectEntry(entries, baseRoute, baseSection, "metrics", project.metrics, {
        slug: project.slug,
      });
    }

    if (!project.caseStudy) {
      continue;
    }

    const caseRoute =
      "/[locale] + /[locale]/projects + /[locale]/projects/[slug]";
    const caseSection = `Case Study Data / ${project.slug}`;
    const caseStudy = project.caseStudy;

    pushProjectEntry(entries, caseRoute, caseSection, "headline.en", caseStudy.headline.en, {
      locale: "en",
      slug: project.slug,
    });
    pushProjectEntry(entries, caseRoute, caseSection, "headline.pl", caseStudy.headline.pl, {
      locale: "pl",
      slug: project.slug,
    });
    pushProjectEntry(entries, caseRoute, caseSection, "subtitle.en", caseStudy.subtitle.en, {
      locale: "en",
      slug: project.slug,
    });
    pushProjectEntry(entries, caseRoute, caseSection, "subtitle.pl", caseStudy.subtitle.pl, {
      locale: "pl",
      slug: project.slug,
    });
    pushProjectEntry(entries, caseRoute, caseSection, "challenge.en", caseStudy.challenge.en, {
      locale: "en",
      slug: project.slug,
    });
    pushProjectEntry(entries, caseRoute, caseSection, "challenge.pl", caseStudy.challenge.pl, {
      locale: "pl",
      slug: project.slug,
    });
    pushProjectEntry(entries, caseRoute, caseSection, "approach.en", caseStudy.approach.en, {
      locale: "en",
      slug: project.slug,
    });
    pushProjectEntry(entries, caseRoute, caseSection, "approach.pl", caseStudy.approach.pl, {
      locale: "pl",
      slug: project.slug,
    });
    pushProjectEntry(entries, caseRoute, caseSection, "result.en", caseStudy.result.en, {
      locale: "en",
      slug: project.slug,
    });
    pushProjectEntry(entries, caseRoute, caseSection, "result.pl", caseStudy.result.pl, {
      locale: "pl",
      slug: project.slug,
    });
    pushProjectEntry(entries, caseRoute, caseSection, "role.en", caseStudy.role.en, {
      locale: "en",
      slug: project.slug,
    });
    pushProjectEntry(entries, caseRoute, caseSection, "role.pl", caseStudy.role.pl, {
      locale: "pl",
      slug: project.slug,
    });

    caseStudy.metrics.forEach((metric, index) => {
      pushProjectEntry(entries, caseRoute, caseSection, `metrics[${index}].value`, metric.value, {
        slug: project.slug,
      });
      pushProjectEntry(entries, caseRoute, caseSection, `metrics[${index}].label.en`, metric.label.en, {
        locale: "en",
        slug: project.slug,
      });
      pushProjectEntry(entries, caseRoute, caseSection, `metrics[${index}].label.pl`, metric.label.pl, {
        locale: "pl",
        slug: project.slug,
      });
    });

    caseStudy.stackTags.forEach((tag, index) => {
      pushProjectEntry(entries, caseRoute, caseSection, `stackTags[${index}]`, tag, {
        slug: project.slug,
      });
    });
  }

  return entries;
}

function unwrapExpression(node) {
  let current = node;

  while (
    current &&
    (ts.isAsExpression(current) ||
      ts.isTypeAssertionExpression(current) ||
      ts.isParenthesizedExpression(current) ||
      ts.isSatisfiesExpression?.(current))
  ) {
    current = current.expression;
  }

  return current;
}

function inferLocaleBranches(condition) {
  if (!ts.isBinaryExpression(condition)) {
    return null;
  }

  const operator = condition.operatorToken.kind;
  if (
    operator !== ts.SyntaxKind.EqualsEqualsEqualsToken &&
    operator !== ts.SyntaxKind.ExclamationEqualsEqualsToken
  ) {
    return null;
  }

  const leftIsLocaleIdentifier =
    ts.isIdentifier(condition.left) &&
    (condition.left.text === "locale" || condition.left.text === "validLocale");
  const rightIsLocaleLiteral =
    ts.isStringLiteral(condition.right) &&
    (condition.right.text === "pl" || condition.right.text === "en");

  if (!leftIsLocaleIdentifier || !rightIsLocaleLiteral) {
    return null;
  }

  const trueLocale = operator === ts.SyntaxKind.EqualsEqualsEqualsToken
    ? condition.right.text
    : condition.right.text === "pl"
      ? "en"
      : "pl";
  const falseLocale = trueLocale === "pl" ? "en" : "pl";

  return {
    whenTrue: trueLocale,
    whenFalse: falseLocale,
  };
}

function getPropertyName(nameNode) {
  if (ts.isIdentifier(nameNode) || ts.isStringLiteral(nameNode) || ts.isNumericLiteral(nameNode)) {
    return nameNode.text;
  }
  return null;
}

function getJsxTagName(node) {
  let current = node.parent;

  while (current) {
    if (ts.isJsxElement(current)) {
      return current.openingElement.tagName.getText();
    }
    if (ts.isJsxSelfClosingElement(current)) {
      return current.tagName.getText();
    }
    current = current.parent;
  }

  return "jsx";
}

function createAstEntryCollector(sourceFile, route, section, source) {
  const entries = [];
  const seen = new Set();

  function addEntry(key, text, node, extra = {}) {
    const normalized = normalizeText(text);
    if (!shouldCaptureStructuredKey(key, normalized)) {
      return;
    }

    const line = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1;
    const resolvedKey =
      extra.locale && !key.endsWith(`.${extra.locale}`) ? `${key}.${extra.locale}` : key;
    const entry = {
      sourceType: "hardcoded",
      route,
      section,
      source,
      key: resolvedKey,
      text: normalized,
      line,
      ...extra,
    };

    const dedupeKey = JSON.stringify(entry);
    if (seen.has(dedupeKey)) {
      return;
    }

    seen.add(dedupeKey);
    entries.push(entry);
  }

  function collectExpressionStrings(expression, baseKey, node, localeHint = null) {
    const current = unwrapExpression(expression);
    if (!current) {
      return;
    }

    if (ts.isStringLiteralLike(current) || ts.isNoSubstitutionTemplateLiteral(current)) {
      addEntry(baseKey, current.text, node, localeHint ? { locale: localeHint } : {});
      return;
    }

    if (ts.isConditionalExpression(current)) {
      const localeMeta = inferLocaleBranches(current.condition);
      collectExpressionStrings(
        current.whenTrue,
        baseKey,
        current.whenTrue,
        localeMeta?.whenTrue ?? localeHint
      );
      collectExpressionStrings(
        current.whenFalse,
        baseKey,
        current.whenFalse,
        localeMeta?.whenFalse ?? localeHint
      );
      return;
    }
  }

  function collectStructuredLiterals(node, keyPath) {
    const current = unwrapExpression(node);
    if (!current) {
      return;
    }

    if (ts.isStringLiteralLike(current) || ts.isNoSubstitutionTemplateLiteral(current)) {
      addEntry(keyPath, current.text, current);
      return;
    }

    if (ts.isConditionalExpression(current)) {
      const localeMeta = inferLocaleBranches(current.condition);
      collectExpressionStrings(current.whenTrue, keyPath, current.whenTrue, localeMeta?.whenTrue ?? null);
      collectExpressionStrings(current.whenFalse, keyPath, current.whenFalse, localeMeta?.whenFalse ?? null);
      return;
    }

    if (ts.isArrayLiteralExpression(current)) {
      current.elements.forEach((element, index) => {
        collectStructuredLiterals(element, `${keyPath}[${index}]`);
      });
      return;
    }

    if (ts.isObjectLiteralExpression(current)) {
      current.properties.forEach((property) => {
        if (!ts.isPropertyAssignment(property)) {
          return;
        }

        const propertyName = getPropertyName(property.name);
        if (!propertyName) {
          return;
        }

        collectStructuredLiterals(property.initializer, `${keyPath}.${propertyName}`);
      });
    }
  }

  function visit(node) {
    if (ts.isJsxText(node)) {
      const tagName = getJsxTagName(node);
      if (tagName === "style") {
        return;
      }
      addEntry(`${tagName}@L${sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1}`, node.getText(sourceFile), node);
    }

    if (ts.isJsxExpression(node) && node.expression) {
      if (node.parent && ts.isJsxAttribute(node.parent)) {
        return;
      }

      const tagName = getJsxTagName(node);
      if (tagName === "style") {
        return;
      }
      collectExpressionStrings(
        node.expression,
        `${tagName}@L${sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1}`,
        node
      );
    }

    if (
      ts.isJsxAttribute(node) &&
      JSX_ATTRIBUTE_ALLOWLIST.has(node.name.text) &&
      node.initializer
    ) {
      if (ts.isStringLiteral(node.initializer)) {
        addEntry(`${node.name.text}@L${sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1}`, node.initializer.text, node.initializer);
      }

      if (ts.isJsxExpression(node.initializer) && node.initializer.expression) {
        collectExpressionStrings(
          node.initializer.expression,
          `${node.name.text}@L${sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1}`,
          node.initializer
        );
      }
    }

    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.initializer &&
      !node.name.text.startsWith("COLOR_") &&
      !node.name.text.endsWith("_QUERY")
    ) {
      collectStructuredLiterals(node.initializer, node.name.text);
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return entries;
}

async function collectHardcodedEntries() {
  const entries = [];

  for (const sourceMeta of HARD_CODED_SOURCES) {
    const absolutePath = path.join(ROOT, sourceMeta.file);
    const sourceText = await fs.readFile(absolutePath, "utf8");
    const scriptKind = sourceMeta.file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
    const sourceFile = ts.createSourceFile(
      absolutePath,
      sourceText,
      ts.ScriptTarget.Latest,
      true,
      scriptKind
    );

    entries.push(
      ...createAstEntryCollector(
        sourceFile,
        sourceMeta.route,
        sourceMeta.section,
        sourceMeta.file
      )
    );
  }

  return entries;
}

function sortEntries(entries) {
  return [...entries].sort((a, b) => {
    const routeDiff = (ROUTE_ORDER.get(a.route) ?? 999) - (ROUTE_ORDER.get(b.route) ?? 999);
    if (routeDiff !== 0) return routeDiff;

    const sectionDiff = a.section.localeCompare(b.section);
    if (sectionDiff !== 0) return sectionDiff;

    const sourceDiff = a.source.localeCompare(b.source);
    if (sourceDiff !== 0) return sourceDiff;

    const keyDiff = a.key.localeCompare(b.key);
    if (keyDiff !== 0) return keyDiff;

    return (a.line ?? 0) - (b.line ?? 0);
  });
}

function yamlKey(key) {
  return `'${key.replace(/'/g, "''")}'`;
}

function yamlScalar(text) {
  if (text.includes("\n")) {
    return ["|-", ...text.split("\n").map((line) => `  ${line}`)];
  }

  return JSON.stringify(text);
}

function groupEntries(entries) {
  const groups = new Map();

  for (const entry of entries) {
    const groupKey = `${entry.route}__${entry.section}__${entry.source}`;
    if (!groups.has(groupKey)) {
      groups.set(groupKey, {
        route: entry.route,
        section: entry.section,
        source: entry.source,
        entries: [],
      });
    }

    groups.get(groupKey).entries.push(entry);
  }

  return sortEntries(
    Array.from(groups.values()).flatMap((group, index) =>
      group.entries.map((entry) => ({ ...entry, __groupIndex: index }))
    )
  );
}

function renderMarkdown(entries) {
  const groups = [];
  const groupMap = new Map();

  for (const entry of entries) {
    const groupKey = `${entry.route}__${entry.section}__${entry.source}`;
    if (!groupMap.has(groupKey)) {
      const nextGroup = {
        route: entry.route,
        section: entry.section,
        source: entry.source,
        entries: [],
      };
      groupMap.set(groupKey, nextGroup);
      groups.push(nextGroup);
    }

    groupMap.get(groupKey).entries.push(entry);
  }

  groups.sort((a, b) => {
    const routeDiff = (ROUTE_ORDER.get(a.route) ?? 999) - (ROUTE_ORDER.get(b.route) ?? 999);
    if (routeDiff !== 0) return routeDiff;

    const sectionDiff = a.section.localeCompare(b.section);
    if (sectionDiff !== 0) return sectionDiff;

    return a.source.localeCompare(b.source);
  });

  const lines = [];
  const dictionaryCount = entries.filter((entry) => entry.sourceType === "dictionary").length;
  const projectCount = entries.filter((entry) => entry.sourceType === "project").length;
  const hardcodedCount = entries.filter((entry) => entry.sourceType === "hardcoded").length;
  const sources = new Set(entries.map((entry) => entry.source));

  lines.push("# Copy Inventory");
  lines.push("");
  lines.push("Generated by `pnpm extract:copy`.");
  lines.push("");
  lines.push("Scope:");
  lines.push("- Visible page copy from the active route components");
  lines.push("- Localized dictionary keys that are actually referenced in the UI");
  lines.push("- Project and case-study data that is rendered on cards/detail pages");
  lines.push("- Legacy/unmounted components like `ProjectsGrid` and `ExpandableCard` are intentionally excluded");
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Total entries: ${entries.length}`);
  lines.push(`- Dictionary entries: ${dictionaryCount}`);
  lines.push(`- Project data entries: ${projectCount}`);
  lines.push(`- Hardcoded component/page entries: ${hardcodedCount}`);
  lines.push(`- Source files covered: ${sources.size}`);
  lines.push("");

  let currentRoute = null;
  for (const group of groups) {
    if (group.route !== currentRoute) {
      currentRoute = group.route;
      lines.push(`## ${group.route}`);
      lines.push("");
    }

    lines.push(`### ${group.section}`);
    lines.push("");
    lines.push(`Source: \`${group.source}\``);
    lines.push("");
    lines.push("```yaml");

    group.entries.forEach((entry) => {
      const value = yamlScalar(entry.text);
      if (Array.isArray(value)) {
        lines.push(`${yamlKey(entry.key)}: ${value[0]}`);
        lines.push(...value.slice(1));
      } else {
        lines.push(`${yamlKey(entry.key)}: ${value}`);
      }
    });

    lines.push("```");
    lines.push("");
  }

  return lines.join("\n");
}

async function main() {
  const [{ dictionaries }, { projects }] = await Promise.all([
    loadTsModule(DICTIONARY_SOURCE),
    loadTsModule(PROJECTS_SOURCE),
  ]);

  const entries = sortEntries([
    ...collectDictionaryEntries(dictionaries),
    ...collectProjectEntries(projects),
    ...(await collectHardcodedEntries()),
  ]);

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(
    OUTPUT_JSON,
    `${JSON.stringify({ generatedAt: new Date().toISOString(), entries }, null, 2)}\n`
  );
  await fs.writeFile(OUTPUT_MD, `${renderMarkdown(entries)}\n`);

  console.log(`Wrote ${entries.length} entries to ${toPosix(path.relative(ROOT, OUTPUT_JSON))}`);
  console.log(`Wrote ${entries.length} entries to ${toPosix(path.relative(ROOT, OUTPUT_MD))}`);
}

await main();
