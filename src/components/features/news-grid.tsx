'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Tag } from 'lucide-react'

export function NewsGrid() {
  const news = [
    {
      id: 1,
      title: 'Tempest Signs New VALORANT Roster for 2025 Season',
      excerpt: 'We are excited to announce our new VALORANT roster featuring world-class talent from across the globe.',
      image: '/images/news/news-1.jpg',
      category: 'Announcement',
      date: '2024-01-15',
      featured: true,
      author: 'Tempest Staff'
    },
    {
      id: 2,
      title: 'Championship Victory: CS2 Team Takes Home Major Trophy',
      excerpt: 'Our Counter-Strike 2 team dominates the competition to secure their first major championship.',
      image: '/images/news/news-2.jpg',
      category: 'Tournament',
      date: '2024-01-12',
      author: 'John Doe'
    },
    {
      id: 3,
      title: 'Behind the Scenes: Training Camp Documentary',
      excerpt: 'Get an exclusive look at how our teams prepare for major tournaments.',
      image: '/images/news/news-3.jpg',
      category: 'Content',
      date: '2024-01-10',
      author: 'Media Team'
    },
    {
      id: 4,
      title: 'New Partnership with Gaming Peripheral Giant',
      excerpt: 'Tempest eSports partners with leading gaming hardware manufacturer for 2025.',
      image: '/images/news/news-4.jpg',
      category: 'Partnership',
      date: '2024-01-08',
      author: 'Business Team'
    },
    {
      id: 5,
      title: 'Player Interview: Life as a Pro Gamer',
      excerpt: 'Exclusive interview with our star player about the challenges and rewards of professional gaming.',
      image: '/images/news/news-5.jpg',
      category: 'Interview',
      date: '2024-01-05',
      author: 'Sarah Smith'
    },
    {
      id: 6,
      title: 'Community Tournament Announcement',
      excerpt: 'Join our community tournament with a $10,000 prize pool. Registration now open!',
      image: '/images/news/news-6.jpg',
      category: 'Community',
      date: '2024-01-03',
      author: 'Community Team'
    }
  ]

  const featuredNews = news.find(n => n.featured) || news[0]
  const otherNews = news.filter(n => n.id !== featuredNews.id)

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Announcement': 'bg-red-600',
      'Tournament': 'bg-red-700',
      'Content': 'bg-red-800',
      'Partnership': 'bg-red-500',
      'Interview': 'bg-red-900',
      'Community': 'bg-red-400'
    }
    return colors[category] || 'bg-gray-600'
  }

  return (
    <div className="space-y-8">
      {/* Featured Article */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative group overflow-hidden rounded-xl bg-gray-900 border border-gray-800"
      >
        <Link href={`/news/${featuredNews.id}`}>
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-64 lg:h-96 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${featuredNews.image || '/images/news-placeholder.jpg'})`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              
              {/* Category Badge */}
              <div className={`absolute top-4 left-4 ${getCategoryColor(featuredNews.category)} px-3 py-1 rounded`}>
                <span className="text-white text-xs font-bold uppercase">{featuredNews.category}</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-black text-white group-hover:text-red-500 transition-colors">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-400 text-lg line-clamp-3">
                  {featuredNews.excerpt}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(featuredNews.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span>•</span>
                  <span>{featuredNews.author}</span>
                </div>
                
                {/* Read More */}
                <div className="pt-4">
                  <span className="inline-flex items-center gap-2 text-red-500 font-semibold group-hover:gap-3 transition-all">
                    Read Full Article
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
      
      {/* News Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherNews.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300"
          >
            <Link href={`/news/${article.id}`}>
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${article.image || '/images/news-placeholder.jpg'})`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                
                {/* Category */}
                <div className={`absolute top-3 left-3 ${getCategoryColor(article.category)} px-2 py-1 rounded text-xs text-white font-bold`}>
                  {article.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {article.excerpt}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                  <span className="text-xs text-gray-500">
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="text-xs text-gray-500">
                    {article.author}
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
      
      {/* Load More Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center pt-8"
      >
        <Link
          href="/news"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
        >
          View All News
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  )
}
