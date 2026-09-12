import copy from '../data/copy.json';

/**
 * Site copy lives in `src/data/copy.json` rather than in the markup, so a
 * page renders whatever its subtree happens to contain. Dotted-key lookup;
 * a missing key returns the key itself so it is obvious on the page.
 */
export function t(key: string): string {
  let cur: unknown = copy;
  for (const part of key.split('.')) {
    if (typeof cur !== 'object' || cur === null || !(part in cur)) return key;
    cur = (cur as Record<string, unknown>)[part];
  }
  return typeof cur === 'string' ? cur : key;
}
