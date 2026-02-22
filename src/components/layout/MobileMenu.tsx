"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

const NAV_LINKS: NavLink[] = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = "mobile-menu";

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
          "fixed inset-0 z-40 bg-background transition-[opacity,visibility] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        )}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "font-heading text-4xl font-semibold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
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
