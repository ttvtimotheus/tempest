'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 lg:px-20 py-32 w-full lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/50 rounded-full">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">
                Live Now — VCT Challengers
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight">
              WE ARE
              <br />
              <span className="text-red-500">TEMPEST</span>
            </h1>

            {/* Subline */}
            <p className="text-xl md:text-2xl text-gray-400 max-w-xl leading-relaxed">
              Dominating esports across VALORANT, CS2, League of Legends, and more. 
              Join the storm.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-6 text-base group"
                asChild
              >
                <Link href="/teams">
                  EXPLORE TEAMS
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-black font-bold px-8 py-6 text-base group"
                asChild
              >
                <Link href="/matches">
                  <Play className="mr-2 h-5 w-5" />
                  WATCH LIVE
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Featured News Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center w-2/5 pr-20"
        >
          <Link href="/news/latest" className="group block">
            <div className="relative w-[400px] aspect-[3/4] rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('/images/news/featured.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded">
                  FEATURED
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                  VALORANT Team Advances to VCT Finals
                </h3>
                <p className="text-gray-400 text-sm">
                  Our squad dominates the competition in an incredible playoff run.
                </p>
                <span className="inline-flex items-center text-red-500 font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                  Read More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Stats Bar - Clean Minimal */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-4 divide-x divide-white/10">
            {[
              { value: '27', label: 'Championships' },
              { value: '50+', label: 'Pro Players' },
              { value: '5', label: 'Game Titles' },
              { value: '2M+', label: 'Fans Worldwide' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="py-6 text-center"
              >
                <p className="text-2xl md:text-3xl font-black text-white">{stat.value}</p>
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
