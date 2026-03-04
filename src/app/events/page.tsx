import Link from 'next/link'
import { Calendar, MapPin, Trophy, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getGameDisplayName } from '@/lib/utils'
import matchesData from '@/data/matches.json'

export const metadata = {
  title: 'Events - Tempest eSports',
  description: 'Upcoming tournaments, events, and competitions featuring Tempest eSports teams.',
}

const tournaments = [
  {
    id: 'vct-2025',
    name: 'VCT Challengers EU 2025',
    game: 'valorant',
    startDate: '2025-02-01',
    endDate: '2025-03-15',
    location: 'Berlin, Germany',
    status: 'upcoming' as const,
    prizePool: '$200,000',
    description: 'The premier VALORANT competition in Europe. Top teams battle for supremacy and a spot at VCT International.',
    link: 'https://valorantesports.com',
  },
  {
    id: 'esl-pro-league',
    name: 'ESL Pro League Season 19',
    game: 'cs2',
    startDate: '2025-03-01',
    endDate: '2025-04-20',
    location: 'Cologne, Germany',
    status: 'upcoming' as const,
    prizePool: '$750,000',
    description: 'One of the most prestigious CS2 leagues in the world. 24 teams compete in a round-robin format.',
    link: 'https://pro.eslgaming.com',
  },
  {
    id: 'erl-spring-2025',
    name: 'ERL Spring Split 2025',
    game: 'lol',
    startDate: '2025-01-20',
    endDate: '2025-04-05',
    location: 'Online + Finals LAN',
    status: 'ongoing' as const,
    prizePool: '$100,000',
    description: 'European Regional League competition for the best teams outside of LEC. Gateway to EU Masters.',
    link: 'https://lolesports.com',
  },
  {
    id: 'blast-premier',
    name: 'BLAST Premier Spring 2025',
    game: 'cs2',
    startDate: '2025-01-27',
    endDate: '2025-02-02',
    location: 'Copenhagen, Denmark',
    status: 'ongoing' as const,
    prizePool: '$425,000',
    description: 'BLAST Premier brings together the top CS2 teams in a high-stakes group stage format.',
    link: 'https://blastpremier.com',
  },
  {
    id: 'iem-katowice-2025',
    name: 'IEM Katowice 2025',
    game: 'cs2',
    startDate: '2025-02-05',
    endDate: '2025-02-16',
    location: 'Katowice, Poland',
    status: 'upcoming' as const,
    prizePool: '$1,000,000',
    description: 'The legendary IEM Katowice returns with the biggest CS2 prize pool of the year.',
    link: 'https://iem.gg',
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'ongoing':
      return <Badge className="bg-green-600 text-white">Ongoing</Badge>
    case 'upcoming':
      return <Badge className="bg-blue-600 text-white">Upcoming</Badge>
    case 'completed':
      return <Badge className="bg-gray-600 text-white">Completed</Badge>
    default:
      return null
  }
}

export default function EventsPage() {
  const upcomingMatches = matchesData
    .filter(m => m.status === 'upcoming' || m.status === 'live')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-black">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
            EVENTS
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Tournaments and competitions where Tempest eSports teams are competing. 
            Follow our journey across the biggest events in esports.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-8">TOURNAMENTS</h2>
          <div className="space-y-6">
            {tournaments.map((event) => (
              <div
                key={event.id}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 lg:p-8 hover:border-red-500/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge className="bg-red-600 text-white">
                        {getGameDisplayName(event.game)}
                      </Badge>
                      {getStatusBadge(event.status)}
                    </div>
                    <h3 className="text-2xl font-black text-white">{event.name}</h3>
                    <p className="text-gray-400">{event.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(event.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(event.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Trophy className="h-4 w-4" />
                        {event.prizePool}
                      </span>
                    </div>
                  </div>
                  <Button
                    className="bg-red-600 hover:bg-red-700 text-white font-bold shrink-0"
                    asChild
                  >
                    <a href={event.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Event Details
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 border-t border-gray-800 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-white">NEXT MATCHES</h2>
            <Button variant="outline" className="border-gray-700 text-gray-300" asChild>
              <Link href="/matches">View Full Schedule</Link>
            </Button>
          </div>
          <div className="space-y-3">
            {upcomingMatches.map((match) => (
              <div
                key={match.id}
                className="flex items-center justify-between bg-gray-900/50 border border-gray-800 rounded-lg p-4"
              >
                <div className="flex items-center gap-4">
                  <Badge className="bg-red-600 text-white text-xs">
                    {getGameDisplayName(match.game)}
                  </Badge>
                  <span className="font-bold text-white">
                    Tempest vs {match.opponent}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{match.tournament}</span>
                  <span>{new Date(match.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
