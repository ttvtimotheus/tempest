'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import newsData from '@/data/news.json'

export function NewsGrid() {
  const news = newsData.slice(0, 4)

  if (news.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No news articles available.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
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
            <Link href={`/news/${article.slug}`} className="block space-y-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-900">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-cyan-600 text-white text-xs font-bold rounded">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <span className="text-sm text-gray-500">
                  {new Date(article.publishedAt).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-500 transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-right"
      >
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-cyan-500 font-bold hover:gap-3 transition-all"
        >
          MORE NEWS <ArrowRight className="h-5 w-5" />
        </Link>
      </motion.div>
    </div>
  )
}
