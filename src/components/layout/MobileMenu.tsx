"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/provider";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { dict, locale } = useI18n();
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = "mobile-menu";

  const NAV_LINKS = [
    { label: dict.nav.projects, href: `/${locale}/projects` },
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  // Close on route change (derive during render, not in effect)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus trap + Escape to close
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Focus first link when menu opens
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector<HTMLElement>("a[href]");
      setTimeout(() => firstLink?.focus(), 100);
    }
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-11 w-11 items-center justify-center"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls={menuId}
      >
        <div className="flex w-5 flex-col gap-1.5">
          <span
            className={cn(
              "h-px w-full bg-text-primary transition-transform duration-[--duration-normal]",
              isOpen && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-px w-full bg-text-primary transition-transform duration-[--duration-normal]",
              isOpen && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </div>
      </button>

      <div
        ref={menuRef}
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "absolute left-0 top-full -z-10 w-full border-b border-border/40 bg-background/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-4 opacity-0 invisible"
        )}
      >
        <nav className="flex flex-col items-center justify-center gap-8 py-10">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "font-heading text-3xl font-semibold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isOpen
                  ? "translate-y-0 opacity-100 blur-none"
                  : "-translate-y-4 opacity-0 blur-sm",
                pathname === link.href
                  ? "text-text-primary"
                  : "text-text-muted hover:text-text-primary"
              )}
              style={{ transitionDelay: isOpen ? `${150 + i * 75}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
