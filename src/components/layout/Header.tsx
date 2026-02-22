"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";
import type { NavLink } from "@/types";

const NAV_LINKS: NavLink[] = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-sm" style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
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

        <MobileMenu />
      </div>
    </header>
  );
}
