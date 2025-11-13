export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  content: Record<string, unknown>[];
  author: string;
  category: string;
  publishedAt: string;
  points?: string[];
}
