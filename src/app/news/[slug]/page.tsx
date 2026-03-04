import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import newsData from '@/data/news.json'

export async function generateStaticParams() {
  return newsData.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = newsData.find(a => a.slug === slug)
  if (!article) return { title: 'Article Not Found' }
  return {
    title: `${article.title} - Tempest eSports`,
    description: article.excerpt,
  }
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = newsData.find(a => a.slug === slug)
  
  if (!article) {
    notFound()
  }

  const relatedArticles = newsData
    .filter(a => a.id !== article.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${article.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-300">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                {article.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" asChild className="mb-8 text-gray-400 hover:text-white">
            <Link href="/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
          </Button>
          
          <div className="prose prose-invert prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="py-16 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-white mb-8">MORE NEWS</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((related) => (
                <Link key={related.id} href={`/news/${related.slug}`} className="group block">
                  <article className="bg-gray-900 rounded-xl overflow-hidden hover:ring-1 hover:ring-red-500/50 transition-all">
                    <div className="relative aspect-[16/9]">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${related.image})` }}
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="p-5 space-y-2">
                      <h3 className="font-bold text-white group-hover:text-red-500 transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {new Date(related.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
