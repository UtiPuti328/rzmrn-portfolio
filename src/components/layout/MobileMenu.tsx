"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-10 w-10 items-center justify-center"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
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

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background">
          <nav className="flex h-full flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={cn(
                  "font-heading text-4xl font-semibold transition-colors",
                  pathname === link.href
                    ? "text-text-primary"
                    : "text-text-muted hover:text-text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
