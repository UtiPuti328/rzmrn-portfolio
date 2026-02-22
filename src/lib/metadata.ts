import type { Metadata } from "next";

const SITE_URL = "https://rzmrn.com";
const SITE_NAME = "RZMRN";
const SITE_DESCRIPTION =
  "RZMRN — Director of Post-Production & Motion Designer. Cinematic editing, motion graphics, visual storytelling & AI-driven content automation.";

export function createMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const title = overrides.title
    ? `${overrides.title} — ${SITE_NAME}`
    : `${SITE_NAME} — Director of Post-Production & Motion Designer`;

  return {
    title,
    description: (overrides.description as string) ?? SITE_DESCRIPTION,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title,
      description: (overrides.description as string) ?? SITE_DESCRIPTION,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      ...(overrides.openGraph as Record<string, unknown>),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: (overrides.description as string) ?? SITE_DESCRIPTION,
    },
    robots: {
      index: true,
      follow: true,
    },
    ...overrides,
  };
}
