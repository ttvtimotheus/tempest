"use client"

import { useState, useEffect } from "react"
import { Play } from "lucide-react"
import { StarBorder } from "@/components/ui/star-border"

export function HeroSection() {
  const [currentGame, setCurrentGame] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const games = ["VALORANT", "CS2", "LEAGUE"]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGame((prev) => (prev + 1) % games.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20 
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden -mt-24 pt-24">
      {/* Sophisticated animated background with parallax */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        </div>
        
        {/* Subtle grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Live Indicator - Premium */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs uppercase tracking-wider text-red-400 font-medium">Match Live Now</span>
            </div>
            
            {/* Premium Typography */}
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium">
                  Professional eSports Organization
                </p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.9]">
                  <span className="block bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                    TEMPEST
                  </span>
                </h1>
              </div>
              
              {/* Dynamic game switcher with better animation */}
              <div className="h-14 flex items-center">
                <span className="text-xl text-muted-foreground mr-3">Excellence in</span>
                <span className="text-xl font-bold text-primary relative">
                  <span className="absolute inset-0 bg-primary/20 blur-xl"></span>
                  <span className="relative">{games[currentGame]}</span>
                </span>
              </div>
              
              <p className="text-lg text-muted-foreground/80 max-w-xl leading-relaxed">
                Three world-class rosters. Fifteen elite players. 
                Competing at the highest level of professional gaming.
              </p>
            </div>
            
            {/* Premium CTAs with StarBorder */}
            <div className="flex flex-wrap gap-4 pt-4">
              <StarBorder 
                as="a"
                href="https://twitch.tv/tempestesports"
                target="_blank"
                rel="noopener noreferrer"
                color="hsl(var(--primary))"
                speed="4s"
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  <span className="text-sm uppercase tracking-wider font-medium">Watch Live</span>
                </div>
              </StarBorder>
              
              <a 
                href="/teams"
                className="group px-8 py-4 border border-border/50 hover:border-muted-foreground/50 transition-all duration-300"
              >
                <span className="text-sm uppercase tracking-wider font-medium">Explore Teams</span>
              </a>
            </div>
          </div>
          
          {/* Right side - Stats or graphic */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2 text-center">
                <div className="text-4xl font-bold text-primary">23</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Trophies</div>
              </div>
              <div className="space-y-2 text-center">
                <div className="text-4xl font-bold text-primary">68%</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Win Rate</div>
              </div>
              <div className="space-y-2 text-center">
                <div className="text-4xl font-bold text-primary">#1</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">EU Rank</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground/50 to-transparent"></div>
      </div>
    </section>
  )
}
