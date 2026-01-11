'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function NewsGrid() {
  const news = [
    {
      id: 1,
      title: 'Tempest Signs New VALORANT Roster for 2025 Season',
      image: '/images/news/news-1.jpg',
      category: 'Announcement',
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'Championship Victory: CS2 Team Takes Home Major Trophy',
      image: '/images/news/news-2.jpg',
      category: 'Tournament',
      date: '2024-01-12',
    },
    {
      id: 3,
      title: 'Behind the Scenes: Training Camp Documentary',
      image: '/images/news/news-3.jpg',
      category: 'Content',
      date: '2024-01-10',
    },
    {
      id: 4,
      title: 'New Partnership with Gaming Peripheral Giant',
      image: '/images/news/news-4.jpg',
      category: 'Partnership',
      date: '2024-01-08',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Clean News Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link href={`/news/${article.id}`} className="block space-y-4">
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-900">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                
                {/* Category Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">
                    {article.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-2">
                <span className="text-sm text-gray-500">
                  {new Date(article.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
      
      {/* View All Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-right"
      >
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-red-500 font-bold hover:gap-3 transition-all"
        >
          MORE NEWS <ArrowRight className="h-5 w-5" />
        </Link>
      </motion.div>
    </div>
  )
}
