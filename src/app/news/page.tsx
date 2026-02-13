import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getNews } from "@/lib/api";

export const revalidate = 60;

export default async function NewsPage() {
  const news = await getNews();
  const sortedNews = news.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">News</h1>
      {sortedNews.length === 0 ? (
        <p className="text-gray-500">No news available at the moment.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedNews.map((item) => (
            <article key={item.slug} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {item.hero_image && (
                <div className="aspect-video relative bg-gray-100">
                  <img 
                    src={item.hero_image} 
                    alt={item.title} 
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <time dateTime={item.date}>
                    {format(parseISO(item.date), "LLLL d, yyyy")}
                  </time>
                  {item.tags && item.tags.length > 0 && (
                    <>
                      <span>•</span>
                      <span className="capitalize">{item.tags[0]}</span>
                    </>
                  )}
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  <Link href={`/news/${item.slug}`} className="hover:text-blue-600 transition-colors">
                    {item.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <Link 
                  href={`/news/${item.slug}`}
                  className="text-blue-600 font-medium hover:underline inline-flex items-center"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
