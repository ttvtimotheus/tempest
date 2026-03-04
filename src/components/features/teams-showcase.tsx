'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import teamsData from '@/data/teams.json'

const teamImages: Record<string, string> = {
  valorant: '/images/teams/valorant.svg',
  cs2: '/images/teams/cs2.svg',
  lol: '/images/teams/league.svg',
}

export function TeamsShowcase() {
  const teams = teamsData.map(team => ({
    id: team.game,
    name: team.name.replace('Tempest ', ''),
    image: teamImages[team.game] || '/images/teams/valorant.svg',
    link: `/teams/${team.game}`
  }))

  if (teams.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No teams available.</p>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
        {teams.map((team, index) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-shrink-0 snap-center first:pl-0"
          >
            <Link href={team.link} className="group block">
              <div className="relative w-[280px] md:w-[320px] aspect-[3/4] rounded-xl overflow-hidden bg-gray-900">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${team.image})` }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-cyan-500 transition-colors">
                    {team.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-cyan-500 group-hover:gap-3 transition-all">
                    View Roster <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-8 text-right"
      >
        <Link 
          href="/teams" 
          className="inline-flex items-center gap-2 text-cyan-500 font-bold hover:gap-3 transition-all"
        >
          VIEW ALL TEAMS <ArrowRight className="h-5 w-5" />
        </Link>
      </motion.div>
    </div>
  )
}
