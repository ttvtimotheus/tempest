'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Play, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "WE ARE TEMPEST",
      subtitle: "WE LIVE ESPORTS",
      description: "Dominating the digital battlefield across multiple titles",
      video: "/videos/hero-1.mp4",
      image: "/images/hero-1.jpg"
    },
    {
      title: "CHAMPIONS",
      subtitle: "SINCE 2020",
      description: "15+ tournament wins, 50+ professional players",
      video: "/videos/hero-2.mp4",
      image: "/images/hero-2.jpg"
    },
    {
      title: "JOIN THE STORM",
      subtitle: "BECOME LEGENDARY",
      description: "Be part of something greater",
      video: "/videos/hero-3.mp4",
      image: "/images/hero-3.jpg"
    }
  ]
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Fallback to image if video doesn't exist */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image || '/images/hero-bg.jpg'})`
              }}
            />
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={slide.video || '/videos/hero-bg.mp4'} type="video/mp4" />
            </video>
          </div>
        ))}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto space-y-8"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter"
          >
            {slides[currentSlide].title.split(' ').map((word, i) => (
              <span key={i} className={i === slides[currentSlide].title.split(' ').length - 1 ? 'text-red-500' : ''}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 tracking-wider"
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            {slides[currentSlide].description}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-6 text-lg group transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/teams">
                VIEW OUR TEAMS
                <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-10 py-6 text-lg transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/merchandise">
                SHOP MERCH
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 transition-all duration-300 ${
                index === currentSlide
                  ? 'w-12 bg-red-500'
                  : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-8 w-8 text-white/50" />
        </motion.div>
      </div>
      
      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-black text-red-500">50+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Players</p>
            </div>
            <div>
              <p className="text-3xl font-black text-red-500">15</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Championships</p>
            </div>
            <div>
              <p className="text-3xl font-black text-red-500">5</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Games</p>
            </div>
            <div>
              <p className="text-3xl font-black text-red-500">2M+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Fans</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
