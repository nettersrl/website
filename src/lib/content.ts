import copy from '../data/copy.json';

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

function resolve(path: string): unknown {
  let cur: unknown = copy;
  for (const part of path.split('.')) {
    if (typeof cur !== 'object' || cur === null || !(part in cur)) return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return cur;
}

/** The copy subtree at `path`, if it is a block rather than a string. */
function subtree(path: string): Record<string, unknown> | undefined {
  const found = resolve(path);
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
 * Read a content block out of copy.json. The file is uniformly
 * `{title, subtitle, ...children{title, description}}`, so every section on
 * the site renders from this one walker rather than a hand-written template
 * per page.
 */
export function getSection(path: string): ContentSection | null {
  const raw = subtree(path);
  if (!raw) return null;
  return {
    title: str(raw, 'title'),
    subtitle: str(raw, 'subtitle'),
    description: str(raw, 'description'),
    items: childNodes(raw),
  };
}

/** True when `path` exists as a content block. */
export function hasSection(path: string): boolean {
  return subtree(path) !== undefined;
}
