'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Trophy, Twitch, Youtube } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function EventsCalendar() {
  const events = [
    {
      id: 1,
      title: 'VCT Challengers - Round 2',
      game: 'VALORANT',
      date: '2024-02-15',
      time: '18:00 CET',
      type: 'tournament',
      location: 'Online',
      stream: 'twitch',
      opponent: 'Team Liquid',
      featured: true
    },
    {
      id: 2,
      title: 'Community Watch Party',
      game: 'CS2',
      date: '2024-02-18',
      time: '20:00 CET',
      type: 'community',
      location: 'Berlin Gaming Arena',
      capacity: '500 seats'
    },
    {
      id: 3,
      title: 'ESL Pro League',
      game: 'CS2',
      date: '2024-02-20',
      time: '19:00 CET',
      type: 'tournament',
      location: 'Online',
      stream: 'youtube',
      opponent: 'FaZe Clan'
    },
    {
      id: 4,
      title: 'Fan Meet & Greet',
      game: 'All Games',
      date: '2024-02-22',
      time: '14:00 CET',
      type: 'meetup',
      location: 'Tempest HQ, Berlin'
    },
    {
      id: 5,
      title: 'RLCS Regional Finals',
      game: 'Rocket League',
      date: '2024-02-25',
      time: '17:00 CET',
      type: 'tournament',
      location: 'Amsterdam RAI',
      stream: 'twitch',
      tickets: true
    },
    {
      id: 6,
      title: 'Community Tournament',
      game: 'APEX Legends',
      date: '2024-02-28',
      time: '16:00 CET',
      type: 'community',
      location: 'Online',
      prizePool: '$5,000'
    }
  ]

  const getEventTypeStyle = (type: string) => {
    switch (type) {
      case 'tournament':
        return 'bg-red-600 text-white'
      case 'community':
        return 'bg-blue-600 text-white'
      case 'meetup':
        return 'bg-green-600 text-white'
      default:
        return 'bg-gray-600 text-white'
    }
  }

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'tournament':
        return <Trophy className="h-5 w-5" />
      case 'community':
        return <Users className="h-5 w-5" />
      case 'meetup':
        return <Users className="h-5 w-5" />
      default:
        return <Calendar className="h-5 w-5" />
    }
  }

  return (
    <div className="space-y-8">
      {/* Featured Event */}
      {events.filter(e => e.featured).map(event => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-pink-600 p-1"
        >
          <div className="relative bg-gray-900 rounded-lg p-8">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-yellow-500 text-black text-xs font-black rounded-full uppercase">
                Next Match
              </span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded text-sm font-bold ${getEventTypeStyle(event.type)}`}>
                    {event.type.toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-400">{event.game}</span>
                </div>
                
                <h3 className="text-3xl font-black text-white">
                  {event.title}
                </h3>
                
                {event.opponent && (
                  <div className="flex items-center gap-4">
                    <span className="text-xl text-white font-bold">VS</span>
                    <span className="text-xl text-red-500 font-bold">{event.opponent}</span>
                  </div>
                )}
                
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center space-y-4">
                <div className="text-center lg:text-right">
                  <p className="text-5xl font-black text-white">{event.time}</p>
                  <p className="text-gray-400 mt-2">Central European Time</p>
                </div>
                
                <div className="flex gap-3 justify-center lg:justify-end">
                  {event.stream === 'twitch' && (
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      <Twitch className="mr-2 h-4 w-4" />
                      Watch on Twitch
                    </Button>
                  )}
                  {event.stream === 'youtube' && (
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      <Youtube className="mr-2 h-4 w-4" />
                      Watch on YouTube
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Events List */}
      <div className="grid gap-4">
        {events.filter(e => !e.featured).map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-red-500/50 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-start gap-4">
                {/* Date Box */}
                <div className="flex-shrink-0 w-16 text-center">
                  <p className="text-2xl font-black text-red-500">
                    {new Date(event.date).getDate()}
                  </p>
                  <p className="text-xs text-gray-500 uppercase">
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                  </p>
                </div>
                
                {/* Event Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold ${getEventTypeStyle(event.type)}`}>
                      {getEventIcon(event.type)}
                      {event.type.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-400">{event.game}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors">
                    {event.title}
                  </h4>
                  
                  {event.opponent && (
                    <p className="text-gray-400">
                      vs <span className="text-white font-semibold">{event.opponent}</span>
                    </p>
                  )}
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </span>
                    {event.capacity && (
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {event.capacity}
                      </span>
                    )}
                    {event.prizePool && (
                      <span className="flex items-center gap-1 text-green-500 font-semibold">
                        <Trophy className="h-3 w-3" />
                        {event.prizePool}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex items-center gap-3">
                {event.stream && (
                  <Button size="sm" variant="outline" className="border-gray-700 hover:border-red-500">
                    {event.stream === 'twitch' ? (
                      <Twitch className="mr-2 h-4 w-4" />
                    ) : (
                      <Youtube className="mr-2 h-4 w-4" />
                    )}
                    Stream
                  </Button>
                )}
                {event.tickets && (
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    Get Tickets
                  </Button>
                )}
                {event.type === 'community' && !event.prizePool && (
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Join Event
                  </Button>
                )}
                {event.prizePool && (
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                    Register
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* View All Events */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center pt-8"
      >
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-8"
          asChild
        >
          <Link href="/events">
            VIEW FULL CALENDAR
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
