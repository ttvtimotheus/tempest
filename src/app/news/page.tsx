import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import newsData from '@/data/news.json'

export const metadata = {
  title: 'News - Tempest eSports',
  description: 'Latest news, announcements, and updates from Tempest eSports.',
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Tournament: 'bg-blue-600',
    Announcement: 'bg-yellow-600',
    Partnership: 'bg-purple-600',
    Content: 'bg-cyan-600',
  }
  return colors[category] || 'bg-cyan-600'
}

export default function NewsPage() {
  const featuredArticle = newsData.find(n => n.featured) || newsData[0]
  const otherArticles = newsData.filter(n => n.id !== featuredArticle?.id)

  return (
    <div className="min-h-screen bg-black">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
            NEWS
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Stay up to date with the latest from Tempest eSports. Tournament results, 
            roster changes, partnerships, and more.
          </p>
        </div>
      </section>

      {featuredArticle && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/news/${featuredArticle.slug}`} className="group block">
              <div className="relative rounded-2xl overflow-hidden bg-gray-900">
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${featuredArticle.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 ${getCategoryColor(featuredArticle.category)} text-white text-xs font-bold rounded`}>
                        {featuredArticle.category}
                      </span>
                      <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-bold rounded">
                        FEATURED
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-white group-hover:text-cyan-500 transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{featuredArticle.author}</span>
                      <span>•</span>
                      <span>{new Date(featuredArticle.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article) => (
              <Link key={article.id} href={`/news/${article.slug}`} className="group block">
                <article className="bg-gray-900 rounded-xl overflow-hidden hover:ring-1 hover:ring-cyan-500/50 transition-all duration-300">
                  <div className="relative aspect-[16/9]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${article.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 ${getCategoryColor(article.category)} text-white text-xs font-bold rounded`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-500 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
