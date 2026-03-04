import Link from 'next/link'
import { Play, Radio, Calendar, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getGameDisplayName } from '@/lib/utils'
import matchesData from '@/data/matches.json'
import { SOCIAL_LINKS } from '@/config/social-links'

export const metadata = {
  title: 'Live - Tempest eSports',
  description: 'Watch Tempest eSports live streams and matches.',
}

export default function LivePage() {
  const liveMatches = matchesData.filter(m => m.status === 'live')
  const upcomingMatches = matchesData
    .filter(m => m.status === 'upcoming')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-black">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <Radio className="h-10 w-10 text-cyan-500" />
              {liveMatches.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-500 rounded-full animate-pulse" />
              )}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white">
              LIVE
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl">
            Watch Tempest eSports compete in real-time. Catch every play, 
            every clutch, every victory.
          </p>
        </div>
      </section>

      {liveMatches.length > 0 ? (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse" />
              <h2 className="text-2xl font-black text-white">LIVE NOW</h2>
            </div>
            <div className="space-y-6">
              {liveMatches.map((match) => (
                <div key={match.id} className="bg-cyan-950/30 border-2 border-cyan-500/50 rounded-xl p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-cyan-600 text-white animate-pulse">LIVE</Badge>
                        <Badge className="bg-gray-800 text-white">
                          {getGameDisplayName(match.game)}
                        </Badge>
                      </div>
                      <h3 className="text-3xl font-black text-white">
                        Tempest vs {match.opponent}
                      </h3>
                      <p className="text-gray-400">{match.tournament}</p>
                      {match.maps && match.maps.length > 0 && (
                        <div className="flex items-center gap-4 text-sm">
                          {match.maps.map((map, i) => (
                            <span key={i} className="text-gray-300">
                              {map.name}: <span className="text-cyan-500 font-bold">{map.scoreTeam}</span> - <span className="font-bold">{map.scoreOpp}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    {match.stream && (
                      <Button
                        size="lg"
                        className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-8 shrink-0"
                        asChild
                      >
                        <a href={match.stream} target="_blank" rel="noopener noreferrer">
                          <Play className="mr-2 h-5 w-5" />
                          WATCH NOW
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
              <Play className="h-16 w-16 text-gray-600 mx-auto mb-6" />
              <h2 className="text-2xl font-black text-white mb-3">NO LIVE MATCHES</h2>
              <p className="text-gray-400 mb-8">
                There are no live matches right now. Check out the upcoming schedule below 
                or watch our latest content on Twitch and YouTube.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold" asChild>
                  <a href={SOCIAL_LINKS.twitch} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Watch on Twitch
                  </a>
                </Button>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold" asChild>
                  <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Watch on YouTube
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="pb-20 border-t border-gray-800 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-white flex items-center gap-3">
              <Calendar className="h-6 w-6 text-cyan-500" />
              UPCOMING MATCHES
            </h2>
            <Button variant="outline" className="border-gray-700 text-gray-300" asChild>
              <Link href="/matches">Full Schedule</Link>
            </Button>
          </div>
          <div className="space-y-3">
            {upcomingMatches.map((match) => (
              <div
                key={match.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-900/50 border border-gray-800 rounded-lg p-4 gap-3"
              >
                <div className="flex items-center gap-4">
                  <Badge className="bg-gray-800 text-white text-xs">
                    {getGameDisplayName(match.game)}
                  </Badge>
                  <span className="font-bold text-white">
                    Tempest vs {match.opponent}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">{match.tournament}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(match.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  </span>
                  {match.stream && (
                    <Button size="sm" variant="ghost" className="text-cyan-500" asChild>
                      <a href={match.stream} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
