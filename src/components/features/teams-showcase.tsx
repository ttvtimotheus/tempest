'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function TeamsShowcase() {
  const teams = [
    {
      id: 'valorant',
      name: 'VALORANT',
      image: '/images/teams/valorant.jpg',
      link: '/teams/valorant'
    },
    {
      id: 'cs2',
      name: 'CS2',
      image: '/images/teams/cs2.jpg',
      link: '/teams/cs2'
    },
    {
      id: 'league',
      name: 'LEAGUE OF LEGENDS',
      image: '/images/teams/league.jpg',
      link: '/teams/league'
    },
    {
      id: 'rocket-league',
      name: 'ROCKET LEAGUE',
      image: '/images/teams/rocket-league.jpg',
      link: '/teams/rocket-league'
    },
    {
      id: 'apex',
      name: 'APEX LEGENDS',
      image: '/images/teams/apex.jpg',
      link: '/teams/apex'
    }
  ]

  return (
    <div className="relative">
      {/* Horizontal Scrolling Teams - G2 Style */}
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
                {/* Character/Team Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${team.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                {/* Red accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-red-500 transition-colors">
                    {team.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-red-500 group-hover:gap-3 transition-all">
                    View Roster <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View All Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-8 text-right"
      >
        <Link 
          href="/teams" 
          className="inline-flex items-center gap-2 text-red-500 font-bold hover:gap-3 transition-all"
        >
          VIEW ALL TEAMS <ArrowRight className="h-5 w-5" />
        </Link>
      </motion.div>
    </div>
  )
}
