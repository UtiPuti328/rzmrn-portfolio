"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/i18n/provider";

export default function Header() {
  const pathname = usePathname();
  const { dict, locale } = useI18n();

  const NAV_LINKS = [
    { label: dict.nav.projects, href: `/${locale}/projects` },
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-sm" style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10">
        <Link
          href={`/${locale}`}
          className="font-heading text-xl font-bold tracking-tight text-text-primary transition-colors duration-[--duration-normal] hover:text-accent"
        >
          RZMRN
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-[--duration-normal]",
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-text-primary"
                  : "text-text-muted hover:text-text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block ml-8 border-l border-border/50 pl-8">
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
