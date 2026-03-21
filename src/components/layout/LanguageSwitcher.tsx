"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/i18n/provider";

export default function LanguageSwitcher() {
  const { locale } = useI18n();
  const pathname = usePathname(); // e.g., "/en/projects"

  // Remove the current locale prefix to construct the alternate URL
  // We grab everything after the first slash-locale (e.g. "/en")
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");
  const isEn = locale === "en";

  return (
    <div className="flex items-center gap-2 font-mono text-xs uppercase text-text-muted">
      <Link
        href={`/en${pathWithoutLocale}`}
        className={`transition-colors hover:text-text-primary ${
          isEn ? "font-bold text-text-primary" : ""
        }`}
      >
        EN
      </Link>
      <span>/</span>
      <Link
        href={`/pl${pathWithoutLocale}`}
        className={`transition-colors hover:text-text-primary ${
          !isEn ? "font-bold text-text-primary" : ""
        }`}
      >
        PL
      </Link>
    </div>
  );
}
