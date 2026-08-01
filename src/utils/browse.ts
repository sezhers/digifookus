/**
 * Browse utilities.
 *
 * Purely mechanical: these functions read whatever key they're given out of
 * an entry's `meta` object, falling back to a same-named top-level field
 * (e.g. `category`) if `meta` doesn't have it. They assign no meaning to the
 * key themselves — the caller decides what it means (see
 * src/pages/[category]/index.astro).
 */

import type { Post, Note } from "./content";
import { slugify } from "./text";

export type Entry = Post | Note;

export interface BrowseValue {
  value: string;
  slug:  string;
}

function metaValuesOf(entry: Entry, key: string): string[] {
  const raw = entry.data.meta?.[key] ?? (entry.data as Record<string, unknown>)[key];

  if (!raw) return [];

  return Array.isArray(raw) ? raw : [String(raw)];
}

/**
 * Every unique value the given `key` takes across the given entries,
 * sorted alphabetically. Each value carries its slug (for linking to
 * /<valueSlug>).
 */
export function getMetaValues(entries: Entry[], key: string): BrowseValue[] {
  const bySlug = new Map<string, string>();

  for (const entry of entries) {
    for (const value of metaValuesOf(entry, key)) {
      const slug = slugify(value);
      if (slug && !bySlug.has(slug)) {
        bySlug.set(slug, value);
      }
    }
  }

  return Array.from(bySlug, ([slug, value]) => ({ slug, value })).sort(
    (a, b) => a.value.localeCompare(b.value)
  );
}

/** Entries whose `meta[key]` (flattened) includes the given value slug. */
export function filterByMetaSlug(
  entries: Entry[],
  key: string,
  valueSlug: string
): Entry[] {
  return entries.filter((entry) =>
    metaValuesOf(entry, key).some((value) => slugify(value) === valueSlug)
  );
}
