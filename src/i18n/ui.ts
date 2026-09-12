import en from './locales/en.json';
import it from './locales/it.json';

export const locales = ['en', 'it'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const dictionaries: Record<Locale, unknown> = { en, it };

export const localeNames: Record<Locale, string> = { en: 'EN', it: 'IT' };

function lookup(dict: unknown, key: string): string | undefined {
  let cur: unknown = dict;
  for (const part of key.split('.')) {
    if (typeof cur !== 'object' || cur === null || !(part in cur)) return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return typeof cur === 'string' ? cur : undefined;
}

/**
 * Dotted-key lookup against the locale JSON, falling back to English.
 * The Italian dictionary is genuinely incomplete (no contact/news/D-SQL
 * sections), so the fallback is load-bearing rather than defensive.
 */
export function useTranslations(locale: Locale) {
  return function t(key: string): string {
    return lookup(dictionaries[locale], key) ?? lookup(dictionaries[defaultLocale], key) ?? key;
  };
}

/** True when this key has no translation in `locale` and is showing English. */
export function isUntranslated(locale: Locale, key: string): boolean {
  return locale !== defaultLocale && lookup(dictionaries[locale], key) === undefined;
}

/** Prefix a root-relative path with the locale segment (default locale stays bare). */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return `/${locale}${clean === '/' ? '' : clean}`;
}

/** Strip a leading locale segment, giving the canonical English path. */
export function stripLocale(pathname: string): string {
  for (const l of locales) {
    if (l === defaultLocale) continue;
    if (pathname === `/${l}` || pathname === `/${l}/`) return '/';
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname || '/';
}

/** The two locale route params Astro builds every page for. */
export function localeParams() {
  return locales.map((locale) => ({
    params: { locale: locale === defaultLocale ? undefined : locale },
    props: { locale },
  }));
}
