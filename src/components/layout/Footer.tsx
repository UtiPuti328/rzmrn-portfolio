"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/provider";

export default function Footer() {
  const { dict, locale } = useI18n();
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
        <Link
          href={`/${locale}`}
          className="font-heading text-sm font-bold tracking-tight text-text-primary"
        >
          RZMRN
        </Link>

        <p className="font-mono text-sm text-text-muted">
          {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
