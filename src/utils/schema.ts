/**
 * Shared JSON-LD builders for structured data (schema.org).
 */

interface ArticleSchemaInput {
  headline: string;
  description: string;
  datePublished: Date;
  dateModified?: Date;
  authorName: string;
  authorUrl?: string;
  publisherName: string;
  publisherUrl?: string;
  image: string;
  url: string;
  locale?: string;
  keywords?: string[];
  articleSection?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildArticleSchema(input: ArticleSchemaInput): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished.toISOString(),
    dateModified: (input.dateModified ?? input.datePublished).toISOString(),
    author: {
      "@type": "Person",
      name: input.authorName,
      ...(input.authorUrl && { url: input.authorUrl }),
    },
    publisher: {
      "@type": "Person",
      name: input.publisherName,
      ...(input.publisherUrl && { url: input.publisherUrl }),
    },
    image: input.image,
    url: input.url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.url,
    },
    inLanguage: input.locale ?? "et",
    ...(input.keywords?.length && { keywords: input.keywords.join(", ") }),
    ...(input.articleSection && { articleSection: input.articleSection }),
  };
}
