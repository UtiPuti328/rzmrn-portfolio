export const locales = ["en", "pl"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function getValidatedLocale(loc: string | undefined): Locale {
  if (!loc) return defaultLocale;
  if (locales.includes(loc as Locale)) {
    return loc as Locale;
  }
  return defaultLocale;
}
