export interface NewsItem {
  id?: string;
  slug: string;
  title: string;
  date: string;
  description: string;
  hero_image?: string;
  content: string;
  tags?: string[];
}

export interface NewsResponse {
  content: NewsItem[];
}

const API_URL = "https://api.estopia.net/admin/v1/cms/public/tempest/content/news";

interface RawNewsItem {
  id: string;
  slug: string;
  published_at: string;
  data: {
    title: string;
    date: string;
    description: string;
    hero_image?: string;
    content: string;
    tags?: string[];
  };
}

export async function getNews(): Promise<NewsItem[]> {
  try {
    const res = await fetch(API_URL, { next: { revalidate: 60 } });
    if (!res.ok) {
      throw new Error(`Failed to fetch news: ${res.statusText}`);
    }
    const data: { content: RawNewsItem[] } = await res.json();
    return (data.content || []).map((item) => ({
      id: item.id,
      slug: item.slug,
      title: item.data.title,
      date: item.data.date,
      description: item.data.description,
      hero_image: item.data.hero_image,
      content: item.data.content,
      tags: item.data.tags,
    }));
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

export async function getNewsItem(slug: string): Promise<NewsItem | undefined> {
  const allNews = await getNews();
  return allNews.find((item) => item.slug === slug);
}
