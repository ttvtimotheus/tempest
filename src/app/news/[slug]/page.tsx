import { getNews, getNewsItem } from "@/lib/api";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const posts = await getNews();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function NewsLayout({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getNewsItem(slug);

  if (!post) notFound();

  return (
    <article className="container mx-auto py-12 px-4 max-w-3xl">
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 capitalize">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-500">
          <time dateTime={post.date}>
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
      </header>
      
      {post.hero_image && (
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
          <img 
            src={post.hero_image} 
            alt={post.title} 
            className="w-full h-auto"
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
