import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Users, Trophy, Calendar, MapPin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getGameDisplayName, getGameColor } from '@/lib/utils'
import teamsData from '@/data/teams.json'
import matchesData from '@/data/matches.json'

export async function generateStaticParams() {
  return teamsData.map((team) => ({
    game: team.game,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ game: string }> }) {
  const { game } = await params
  const team = teamsData.find(t => t.game === game)
  if (!team) return { title: 'Team Not Found' }
  return {
    title: `${team.name} - Tempest eSports`,
    description: team.description,
  }
}

const countryFlags: Record<string, string> = {
  UK: '🇬🇧', ES: '🇪🇸', RU: '🇷🇺', FR: '🇫🇷', KR: '🇰🇷',
  US: '🇺🇸', CA: '🇨🇦', RS: '🇷🇸', DK: '🇩🇰', DE: '🇩🇪',
  PL: '🇵🇱', SE: '🇸🇪', IT: '🇮🇹', NO: '🇳🇴', PT: '🇵🇹',
  CN: '🇨🇳',
}

export default async function TeamDetailPage({ params }: { params: Promise<{ game: string }> }) {
  const { game } = await params
  const team = teamsData.find(t => t.game === game)

  if (!team) {
    notFound()
  }

  const teamMatches = matchesData
    .filter(m => m.game === game)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)

  const wins = matchesData.filter(m => m.game === game && m.result === 'W').length
  const losses = matchesData.filter(m => m.game === game && m.result === 'L').length

  return (
    <div className="min-h-screen bg-black">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" asChild className="text-gray-400 hover:text-white mb-8">
            <Link href="/teams">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Teams
            </Link>
          </Button>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="space-y-4">
              <Badge className={`${getGameColor(team.game)} bg-current/10 border-current/20`}>
                {getGameDisplayName(team.game)}
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black text-white">{team.name}</h1>
              <p className="text-xl text-gray-400 max-w-2xl">{team.description}</p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {team.region}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Est. {team.founded}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {team.roster.length} Players
                </span>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-3xl font-black text-green-500">{wins}</p>
                <p className="text-xs text-gray-500 uppercase">Wins</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-red-500">{losses}</p>
                <p className="text-xs text-gray-500 uppercase">Losses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-8">ROSTER</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.roster.map((player) => (
              <div
                key={player.id}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-500/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-black text-red-500">
                      {player.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-2xl">{countryFlags[player.country] || '🏳️'}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-white">{player.name}</h3>
                  <p className="text-sm text-gray-400">{player.realName}</p>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="border-gray-700 text-gray-300">
                      {player.role}
                    </Badge>
                    <span className="text-xs text-gray-500">Age {player.age}</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Joined {new Date(player.joinDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {team.staff.length > 0 && (
        <section className="py-16 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white mb-8">COACHING STAFF</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.staff.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg">{countryFlags[member.country] || '🏳️'}</span>
                  </div>
                  <h3 className="font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-red-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {team.achievements.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
              <Trophy className="h-6 w-6 text-yellow-500" />
              ACHIEVEMENTS
            </h2>
            <div className="space-y-3">
              {team.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                >
                  <Trophy className="h-5 w-5 text-yellow-500 shrink-0" />
                  <span className="text-white font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {teamMatches.length > 0 && (
        <section className="py-16 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-white">RECENT MATCHES</h2>
              <Button variant="outline" className="border-gray-700 text-gray-300" asChild>
                <Link href="/matches">Full Schedule</Link>
              </Button>
            </div>
            <div className="space-y-3">
              {teamMatches.map((match) => (
                <div
                  key={match.id}
                  className="flex items-center justify-between bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-white">
                      Tempest vs {match.opponent}
                    </span>
                    {match.result && (
                      <Badge className={match.result === 'W' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}>
                        {match.result === 'W' ? 'WIN' : 'LOSS'}
                      </Badge>
                    )}
                    {match.status === 'live' && (
                      <Badge className="bg-red-600 text-white animate-pulse">LIVE</Badge>
                    )}
                    {match.status === 'upcoming' && (
                      <Badge variant="outline" className="border-gray-700">Upcoming</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{match.tournament}</span>
                    <span>{new Date(match.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
