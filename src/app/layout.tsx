import type { Metadata } from "next";
import { spaceGrotesk, inter, jetbrainsMono } from "@/lib/fonts";
import { createMetadata } from "@/lib/metadata";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WebGLLoader from "@/components/webgl/WebGLLoader";
import "./globals.css";

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "RZMRN",
              jobTitle: "Creative Director — Motion, Post-Production & AI Automation",
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
        <SmoothScroll>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
        <WebGLLoader />
      </body>
    </html>
  );
}
