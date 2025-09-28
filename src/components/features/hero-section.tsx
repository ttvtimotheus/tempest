"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          {/* Live Badge */}
          <div className="flex justify-center mb-8">
            <Badge variant="live" className="text-sm font-semibold px-4 py-2">
              🔴 LIVE: VALORANT vs Fnatic Academy - VCT Challengers EU
            </Badge>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent glow-text">
              Tempest
            </span>
            <br />
            <span className="text-neon-cyan">eSports</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Professional gaming excellence across{" "}
            <span className="text-red-400 font-semibold">VALORANT</span>,{" "}
            <span className="text-orange-400 font-semibold">Counter-Strike 2</span>, and{" "}
            <span className="text-blue-400 font-semibold">League of Legends</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="xl" variant="neon" className="text-lg" asChild>
              <a href="https://twitch.tv/tempestesports" target="_blank" rel="noopener noreferrer">
                <Play className="w-5 h-5" />
                Watch Live Stream
              </a>
            </Button>
            <Button size="xl" variant="outline" className="text-lg" asChild>
              <a href="/matches">
                <Calendar className="w-5 h-5" />
                View Schedule
              </a>
            </Button>
            <Button size="xl" variant="gaming" className="text-lg" asChild>
              <a href="/teams">
                <Users className="w-5 h-5" />
                Meet the Teams
              </a>
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-cyan mb-2">15</div>
              <div className="text-muted-foreground">Active Players</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-cyan mb-2">127</div>
              <div className="text-muted-foreground">Matches Won</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-cyan mb-2">8</div>
              <div className="text-muted-foreground">Tournaments</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
