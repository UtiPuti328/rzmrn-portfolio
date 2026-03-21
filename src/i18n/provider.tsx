"use client";

import { createContext, useContext, ReactNode } from "react";
import type { Dictionary } from "./dictionaries";
import type { Locale } from "./config";

interface I18nContextType {
  dict: Dictionary;
  locale: Locale;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
  children,
  dictionary,
  locale,
}: {
  children: ReactNode;
  dictionary: Dictionary;
  locale: Locale;
}) {
  return (
    <I18nContext.Provider value={{ dict: dictionary, locale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
