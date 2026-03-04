'use client'

import { motion } from 'framer-motion'
import { Play, Eye, Clock } from 'lucide-react'
import Link from 'next/link'
import videosData from '@/data/videos.json'

export function LatestVideos() {
  const videos = videosData

  const featuredVideo = videos.find(v => v.featured) || videos[0]
  const otherVideos = videos.filter(v => v.id !== featuredVideo.id)

  if (videos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No videos available.</p>
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative group cursor-pointer overflow-hidden rounded-lg"
      >
        <a href={featuredVideo.youtubeUrl} target="_blank" rel="noopener noreferrer">
          <div className="relative aspect-video bg-gray-900">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url(${featuredVideo.thumbnail})`
              }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500">
                <Play className="h-8 w-8 text-white ml-1 fill-current" />
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-2 py-1 rounded">
              <span className="text-white text-sm font-medium">{featuredVideo.duration}</span>
            </div>
            
            <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded">
              <span className="text-white text-xs font-bold uppercase">{featuredVideo.category}</span>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
              {featuredVideo.title}
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {featuredVideo.views} views
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {featuredVideo.date}
              </span>
            </div>
          </div>
        </a>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {otherVideos.slice(0, 4).map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer">
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${video.thumbnail})`
                  }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Play className="h-5 w-5 text-white ml-0.5 fill-current" />
                  </div>
                </div>
                
                <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-xs text-white">
                  {video.duration}
                </div>
                
                <div className="absolute top-2 left-2 bg-red-600/90 px-2 py-0.5 rounded text-xs text-white font-bold">
                  {video.category}
                </div>
              </div>
              
              <div className="mt-2">
                <h4 className="text-sm font-semibold text-white group-hover:text-red-500 transition-colors line-clamp-2">
                  {video.title}
                </h4>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                  <span>{video.views} views</span>
                  <span>•</span>
                  <span>{video.date}</span>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
