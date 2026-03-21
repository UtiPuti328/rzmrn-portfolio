"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/provider";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
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

  useEffect(() => {
    setMounted(true);
  }, []);

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

      {mounted && createPortal(
        <>
          {/* 
            CURTAIN BACKGROUND 
            Slides perfectly down from the top. Safari handles `transform` on masked+blurred layers flawlessly.
            This avoids the infamous Safari `opacity` + `mask` jump/pop glitch.
          */}
          <div
            className={cn(
              "fixed left-0 top-0 w-full h-[100dvh] z-30 pointer-events-none transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
              isOpen ? "translate-y-0" : "-translate-y-full"
            )}
          >
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)"
              }}
            />
          </div>

          {/* 
            FOREGROUND LINKS 
            Transition opacity safely because this layer contains strictly no CSS masks or nested blurs.
          */}
          <div
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className={cn(
              "fixed inset-0 z-40 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
          >
            <nav className="relative flex h-full flex-col items-center justify-start pt-32 gap-10">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-heading text-4xl font-semibold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-4 opacity-0",
                    pathname === link.href
                      ? "text-text-primary"
                      : "text-text-muted hover:text-text-primary"
                  )}
                  style={{ 
                    transitionDelay: isOpen ? `${100 + i * 50}ms` : "0ms",
                    WebkitTransform: "translateZ(0)",
                    transform: "translateZ(0)"
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </>,
        document.body
      )}
    </div>
  );
}
