'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function UpcomingMatches() {
  const matches = [
    {
      id: 1,
      game: 'VALORANT',
      tournament: 'VCT Challengers',
      opponent: 'Team Liquid',
      opponentLogo: '/images/teams/opponent-1.png',
      date: '2024-02-15',
      time: '18:00 CET',
      live: true,
    },
    {
      id: 2,
      game: 'CS2',
      tournament: 'ESL Pro League',
      opponent: 'FaZe Clan',
      opponentLogo: '/images/teams/opponent-2.png',
      date: '2024-02-20',
      time: '19:00 CET',
    },
    {
      id: 3,
      game: 'League of Legends',
      tournament: 'LEC Spring',
      opponent: 'G2 Esports',
      opponentLogo: '/images/teams/opponent-3.png',
      date: '2024-02-22',
      time: '20:00 CET',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Matches List - Clean Table Style */}
      <div className="space-y-3">
        {matches.map((match, index) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="group bg-gray-900/50 hover:bg-gray-900 border border-gray-800 hover:border-red-500/30 rounded-lg p-4 transition-all duration-300"
          >
            <div className="flex items-center justify-between gap-4">
              {/* Left - Match Info */}
              <div className="flex items-center gap-6 flex-1">
                {/* Date */}
                <div className="hidden sm:block text-center min-w-[60px]">
                  <p className="text-2xl font-black text-white">
                    {new Date(match.date).getDate()}
                  </p>
                  <p className="text-xs text-gray-500 uppercase">
                    {new Date(match.date).toLocaleDateString('en-US', { month: 'short' })}
                  </p>
                </div>
                
                {/* Divider */}
                <div className="hidden sm:block w-px h-12 bg-gray-800" />
                
                {/* Teams */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-black text-sm">T</span>
                    </div>
                    <span className="font-bold text-white hidden md:inline">TEMPEST</span>
                  </div>
                  
                  <span className="text-gray-500 font-bold text-sm">VS</span>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">
                        {match.opponent.charAt(0)}
                      </span>
                    </div>
                    <span className="font-bold text-white hidden md:inline">{match.opponent}</span>
                  </div>
                </div>
              </div>
              
              {/* Right - Meta & Action */}
              <div className="flex items-center gap-4">
                <div className="text-right hidden lg:block">
                  <p className="text-sm text-gray-400">{match.tournament}</p>
                  <p className="text-xs text-gray-600">{match.game}</p>
                </div>
                
                {match.live ? (
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full animate-pulse">
                    LIVE
                  </span>
                ) : (
                  <span className="text-sm text-gray-500 font-medium">
                    {match.time}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
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
          href="/matches"
          className="inline-flex items-center gap-2 text-red-500 font-bold hover:gap-3 transition-all"
        >
          VIEW SCHEDULE <ArrowRight className="h-5 w-5" />
        </Link>
      </motion.div>
    </div>
  )
}

export function EventsCalendar() {
  return <UpcomingMatches />
}
