import type { Metadata } from "next";

const SITE_URL = "https://rzmrn.com";
const SITE_NAME = "RZMRN";
const SITE_TITLE = "RZMRN — Filmmaker & Creative Technologist";
const SITE_DESCRIPTION =
  "I produce content and build AI systems to scale it 10x. Cinematic editing, motion design, AI-driven production pipelines.";

interface CreateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}

export function createMetadata(overrides: CreateMetadataOptions = {}): Metadata {
  const title = overrides.title
    ? `${overrides.title} — ${SITE_NAME}`
    : SITE_TITLE;

  const description = overrides.description ?? SITE_DESCRIPTION;
  const url = overrides.path ? `${SITE_URL}${overrides.path}` : SITE_URL;
  const ogImage = overrides.ogImage ?? "/og-image.png";

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
      url,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
