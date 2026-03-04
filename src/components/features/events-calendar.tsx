'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import matchesData from '@/data/matches.json'
import { getGameDisplayName } from '@/lib/utils'

export function EventsCalendar() {
  const matches = matchesData
    .filter(match => match.status === 'upcoming' || match.status === 'live')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3)

  if (matches.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No upcoming matches scheduled.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {matches.map((match, index) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="group bg-gray-900/50 hover:bg-gray-900 border border-gray-800 hover:border-cyan-500/30 rounded-lg p-4 transition-all duration-300"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-6 flex-1">
                <div className="hidden sm:block text-center min-w-[60px]">
                  <p className="text-2xl font-black text-white">
                    {new Date(match.date).getDate()}
                  </p>
                  <p className="text-xs text-gray-500 uppercase">
                    {new Date(match.date).toLocaleDateString('en-US', { month: 'short' })}
                  </p>
                </div>
                
                <div className="hidden sm:block w-px h-12 bg-gray-800" />
                
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center p-1.5">
                      <Image
                        src="/images/tempest-logo.svg"
                        alt="Tempest"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain brightness-0 invert"
                      />
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
              
              <div className="flex items-center gap-4">
                <div className="text-right hidden lg:block">
                  <p className="text-sm text-gray-400">{match.tournament}</p>
                  <p className="text-xs text-gray-600">{getGameDisplayName(match.game)}</p>
                </div>
                
                {match.status === 'live' ? (
                  <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-bold rounded-full animate-pulse">
                    LIVE
                  </span>
                ) : (
                  <span className="text-sm text-gray-500 font-medium">
                    {new Date(match.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin' })}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
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
          href="/matches"
          className="inline-flex items-center gap-2 text-cyan-500 font-bold hover:gap-3 transition-all"
        >
          VIEW SCHEDULE <ArrowRight className="h-5 w-5" />
        </Link>
      </motion.div>
    </div>
  )
}
