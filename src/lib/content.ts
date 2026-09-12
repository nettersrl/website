import en from '../i18n/locales/en.json';
import it from '../i18n/locales/it.json';
import type { Locale } from '../i18n/ui';

const dictionaries: Record<Locale, unknown> = { en, it };

/** Keys that describe the node itself rather than one of its children. */
const SELF_KEYS = new Set(['title', 'subtitle', 'description', 'name', 'badge']);

export interface ContentNode {
  key: string;
  title: string;
  description?: string;
  items: ContentNode[];
}

export interface ContentSection {
  title?: string;
  subtitle?: string;
  description?: string;
  items: ContentNode[];
}

function resolve(dict: unknown, path: string): unknown {
  let cur: unknown = dict;
  for (const part of path.split('.')) {
    if (typeof cur !== 'object' || cur === null || !(part in cur)) return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return cur;
}

/** The locale's subtree at `path`, falling back to English. */
function subtree(locale: Locale, path: string): Record<string, unknown> | undefined {
  const found = resolve(dictionaries[locale], path) ?? resolve(dictionaries.en, path);
  return typeof found === 'object' && found !== null && !Array.isArray(found)
    ? (found as Record<string, unknown>)
    : undefined;
}

function str(node: Record<string, unknown>, key: string): string | undefined {
  const v = node[key];
  return typeof v === 'string' ? v : undefined;
}

function toNode(key: string, raw: Record<string, unknown>): ContentNode | null {
  const title = str(raw, 'title') ?? str(raw, 'name');
  if (!title) return null;
  return {
    key,
    title,
    description: str(raw, 'description'),
    items: childNodes(raw),
  };
}

function childNodes(raw: Record<string, unknown>): ContentNode[] {
  const out: ContentNode[] = [];
  for (const [key, value] of Object.entries(raw)) {
    if (SELF_KEYS.has(key)) continue;
    if (typeof value !== 'object' || value === null || Array.isArray(value)) continue;
    const node = toNode(key, value as Record<string, unknown>);
    if (node) out.push(node);
  }
  return out;
}

/**
 * Read a content block straight out of the locale JSON. The dictionaries are
 * uniformly `{title, subtitle, ...children{title, description}}`, so every
 * section on the site renders from this one walker rather than a hand-written
 * template per page — no copy is retyped, and Italian falls back per subtree.
 */
export function getSection(locale: Locale, path: string): ContentSection | null {
  const raw = subtree(locale, path);
  if (!raw) return null;
  return {
    title: str(raw, 'title'),
    subtitle: str(raw, 'subtitle'),
    description: str(raw, 'description'),
    items: childNodes(raw),
  };
}

/** Flat list of a block's leaf bullet points (children with no children). */
export function getPoints(locale: Locale, path: string): string[] {
  const section = getSection(locale, path);
  if (!section) return [];
  return section.items.map((i) => i.title);
}

/** True when `path` exists as a content block for this locale or English. */
export function hasSection(locale: Locale, path: string): boolean {
  return subtree(locale, path) !== undefined;
}
