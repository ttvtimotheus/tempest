'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Trophy, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function TeamsShowcase() {
  const teams = [
    {
      id: 'valorant',
      name: 'VALORANT',
      description: 'Competing in VCT Challengers',
      image: '/images/teams/valorant.jpg',
      logo: '/images/games/valorant.png',
      players: 6,
      achievements: '3x Regional Champions',
      color: 'from-red-600 to-red-800',
      link: '/teams/valorant'
    },
    {
      id: 'cs2',
      name: 'COUNTER-STRIKE 2',
      description: 'ESL Pro League Team',
      image: '/images/teams/cs2.jpg',
      logo: '/images/games/cs2.png',
      players: 5,
      achievements: '2x Major Qualifiers',
      color: 'from-red-700 to-red-900',
      link: '/teams/cs2'
    },
    {
      id: 'league',
      name: 'LEAGUE OF LEGENDS',
      description: 'LEC Challenger Team',
      image: '/images/teams/league.jpg',
      logo: '/images/games/league.png',
      players: 7,
      achievements: 'Spring Split Winners',
      color: 'from-red-500 to-red-700',
      link: '/teams/league'
    },
    {
      id: 'rocket-league',
      name: 'ROCKET LEAGUE',
      description: 'RLCS Contenders',
      image: '/images/teams/rocket-league.jpg',
      logo: '/images/games/rocket-league.png',
      players: 3,
      achievements: 'Regional Finals',
      color: 'from-red-800 to-gray-900',
      link: '/teams/rocket-league'
    },
    {
      id: 'apex',
      name: 'APEX LEGENDS',
      description: 'ALGS Pro League',
      image: '/images/teams/apex.jpg',
      logo: '/images/games/apex.png',
      players: 3,
      achievements: '5x Tournament Wins',
      color: 'from-red-600 to-black',
      link: '/teams/apex'
    }
  ]

  return (
    <div className="relative">
      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teams.map((team, index) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:border-red-500/50 transition-all duration-300"
          >
            <Link href={team.link}>
              {/* Background Image with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${team.image || '/images/team-placeholder.jpg'})`
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${team.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                
                {/* Game Logo */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-black/50 rounded-lg p-2 backdrop-blur-sm">
                  <Image
                    src={team.logo || '/images/game-logo.png'}
                    alt={team.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Achievement Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  <span className="text-xs text-white font-medium">{team.achievements}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative p-6 space-y-4 bg-gray-900">
                {/* Team Name */}
                <h3 className="text-2xl font-black text-white group-hover:text-red-500 transition-colors">
                  {team.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400">{team.description}</p>
                
                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{team.players} Players</span>
                  </div>
                  
                  <span className="flex items-center gap-2 text-red-500 font-medium text-sm group-hover:translate-x-1 transition-transform">
                    View Team
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      {/* View All Teams Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 text-lg group transition-all duration-300"
          asChild
        >
          <Link href="/teams">
            VIEW ALL TEAMS
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
