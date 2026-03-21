import type { Metadata } from "next";
import { spaceGrotesk, inter, jetbrainsMono } from "@/lib/fonts";
import { createMetadata } from "@/lib/metadata";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WebGLLoader from "@/components/webgl/WebGLLoader";
import { locales, getValidatedLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { I18nProvider } from "@/i18n/provider";
import "../globals.css";

export const metadata: Metadata = createMetadata();

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;
  const locale = getValidatedLocale(resolvedParams.locale);
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "RZMRN",
              jobTitle: "Filmmaker & Creative Director — Motion, Post-Production & AI",
              url: "https://rzmrn.com",
              sameAs: [],
              knowsAbout: [
                "Video Editing",
                "Motion Design",
                "Color Grading",
                "Visual Effects",
                "Post-Production",
                "AI Automation",
                "Content Pipelines",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-background text-text-primary antialiased">
        <I18nProvider dictionary={dict} locale={locale}>
          <SmoothScroll>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </SmoothScroll>
          <WebGLLoader />
        </I18nProvider>
      </body>
    </html>
  );
}
