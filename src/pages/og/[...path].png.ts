/**
 * Build-time OG image endpoint. getStaticPaths mirrors every real route in
 * the site 1:1, so BaseLayout.astro can default `ogImage` to `/og${path}.png`
 * for any page without each page needing to compute or pass one itself.
 */

import type { APIRoute, GetStaticPaths } from 'astro';
import { getConfig } from '@/utils/config';
import {
  getAllPosts,
  getAllNotes,
  getAllPages,
  getAllEntries,
  getPostSlugPath,
  getNoteSlugPath,
  getPageSlugPath,
} from '@/utils/content';
import { getMetaValues, getYears } from '@/utils/browse';
import { renderOgImage } from '@/utils/og-image';

export const prerender = true;

interface CardProps {
  eyebrow: string;
  title:   string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const siteConfig = await getConfig();
  const indexes = siteConfig.browse?.indexes ?? [];

  const [allPosts, allNotes, allPages, allEntries] = await Promise.all([
    getAllPosts(),
    getAllNotes(),
    getAllPages(),
    getAllEntries(),
  ]);

  const entries: { params: { path: string }; props: CardProps }[] = [];

  const add = (path: string, props: CardProps) => {
    entries.push({ params: { path }, props });
  };

  // ── Fixed routes ────────────────────────────────────────────────────────
  add('home', { eyebrow: siteConfig.tagline || siteConfig.title, title: siteConfig.title });
  add('posts', { eyebrow: siteConfig.title, title: 'Artiklid' });
  add('notes', { eyebrow: siteConfig.title, title: 'Märkmed' });
  add('archive', { eyebrow: siteConfig.title, title: 'Arhiiv' });
  add('browse', { eyebrow: siteConfig.title, title: 'Sirvi' });
  add('browse/years', { eyebrow: 'Sirvi', title: 'Aastad' });

  // ── Browse: years ───────────────────────────────────────────────────────
  for (const year of getYears(allEntries)) {
    add(`browse/years/${year}`, { eyebrow: 'Sirvi — aasta', title: year });
  }

  // ── Browse: configured indexes + values ─────────────────────────────────
  for (const index of indexes) {
    add(`browse/${index.slug}`, { eyebrow: 'Sirvi', title: index.title });

    for (const { value, slug } of getMetaValues(allEntries, index.key)) {
      add(`browse/${index.slug}/${slug}`, { eyebrow: `Sirvi — ${index.title}`, title: value });
    }
  }

  // ── Posts ───────────────────────────────────────────────────────────────
  for (const post of allPosts) {
    add(`posts/${getPostSlugPath(post.id, post.filePath)}`, {
      eyebrow: post.data.category ?? 'Artikkel',
      title:   post.data.title,
    });
  }

  // ── Notes ───────────────────────────────────────────────────────────────
  for (const note of allNotes) {
    add(`notes/${getNoteSlugPath(note.id, note.filePath)}`, {
      eyebrow: note.data.category ?? 'Märge',
      title:   note.data.title,
    });
  }

  // ── Pages ───────────────────────────────────────────────────────────────
  for (const page of allPages) {
    add(getPageSlugPath(page.id, page.filePath), {
      eyebrow: 'Leht',
      title:   page.data.title,
    });
  }

  return entries;
};

export const GET: APIRoute = async ({ props }) => {
  const siteConfig = await getConfig();
  const { eyebrow, title } = props as CardProps;

  const png = await renderOgImage({ eyebrow, title, site: siteConfig.title });

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};
