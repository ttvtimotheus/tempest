'use client'

import { motion } from 'framer-motion'
import { Play, Eye, Clock } from 'lucide-react'
import Link from 'next/link'

export function LatestVideos() {
  const videos = [
    {
      id: 1,
      title: 'INSANE 1v5 ACE - VCT Highlights',
      thumbnail: '/images/videos/thumb-1.jpg',
      duration: '10:23',
      views: '125K',
      date: '2 days ago',
      category: 'VALORANT',
      featured: true
    },
    {
      id: 2,
      title: 'Road to Major: Behind the Scenes',
      thumbnail: '/images/videos/thumb-2.jpg',
      duration: '25:47',
      views: '89K',
      date: '5 days ago',
      category: 'CS2'
    },
    {
      id: 3,
      title: 'The Trophy Room - Documentary',
      thumbnail: '/images/videos/thumb-3.jpg',
      duration: '45:12',
      views: '203K',
      date: '1 week ago',
      category: 'DOCUMENTARY'
    },
    {
      id: 4,
      title: 'Team Liquid vs Tempest - Finals',
      thumbnail: '/images/videos/thumb-4.jpg',
      duration: '1:23:45',
      views: '456K',
      date: '2 weeks ago',
      category: 'LEAGUE'
    },
    {
      id: 5,
      title: 'Rocket League Championship Recap',
      thumbnail: '/images/videos/thumb-5.jpg',
      duration: '15:30',
      views: '67K',
      date: '3 weeks ago',
      category: 'ROCKET LEAGUE'
    },
    {
      id: 6,
      title: 'APEX Legends Tournament Win',
      thumbnail: '/images/videos/thumb-6.jpg',
      duration: '18:45',
      views: '92K',
      date: '1 month ago',
      category: 'APEX'
    }
  ]

  const featuredVideo = videos.find(v => v.featured) || videos[0]
  const otherVideos = videos.filter(v => v.id !== featuredVideo.id)

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Featured Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative group cursor-pointer overflow-hidden rounded-lg"
      >
        <Link href={`/videos/${featuredVideo.id}`}>
          <div className="relative aspect-video bg-gray-900">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url(${featuredVideo.thumbnail || '/images/video-placeholder.jpg'})`
              }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500">
                <Play className="h-8 w-8 text-white ml-1 fill-current" />
              </div>
            </div>
            
            {/* Duration */}
            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-2 py-1 rounded">
              <span className="text-white text-sm font-medium">{featuredVideo.duration}</span>
            </div>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded">
              <span className="text-white text-xs font-bold uppercase">{featuredVideo.category}</span>
            </div>
          </div>
          
          {/* Video Info */}
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
        </Link>
      </motion.div>
      
      {/* Video Grid */}
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
            <Link href={`/videos/${video.id}`}>
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${video.thumbnail || '/images/video-placeholder.jpg'})`
                  }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                
                {/* Small Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Play className="h-5 w-5 text-white ml-0.5 fill-current" />
                  </div>
                </div>
                
                {/* Duration */}
                <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-xs text-white">
                  {video.duration}
                </div>
                
                {/* Category */}
                <div className="absolute top-2 left-2 bg-red-600/90 px-2 py-0.5 rounded text-xs text-white font-bold">
                  {video.category}
                </div>
              </div>
              
              {/* Video Info */}
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
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
