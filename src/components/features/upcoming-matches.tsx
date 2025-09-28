"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ExternalLink, Download } from "lucide-react"
import { formatDateTime, getGameDisplayName, getGameColor, isLive } from "@/lib/utils"
import matchesData from "@/data/matches.json"

const upcomingMatches = matchesData
  .filter(match => match.status === "upcoming" || match.status === "live")
  .slice(0, 3)
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

export function UpcomingMatches() {
  if (upcomingMatches.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No upcoming matches scheduled.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {upcomingMatches.map((match) => (
        <Card key={match.id} className="overflow-hidden bg-card/80 backdrop-blur-sm hover:bg-card transition-colors">
          <CardContent className="p-6">
            {/* Game Badge and Status */}
            <div className="flex items-center justify-between mb-4">
              <Badge 
                variant="game" 
                className={`${getGameColor(match.game)} bg-current/10 border-current/20`}
              >
                {getGameDisplayName(match.game)}
              </Badge>
              {isLive(match.date) ? (
                <Badge variant="live">LIVE</Badge>
              ) : (
                <Badge variant="outline">
                  <Clock className="w-3 h-3 mr-1" />
                  Upcoming
                </Badge>
              )}
            </div>
            
            {/* Tournament */}
            <div className="text-sm text-muted-foreground mb-2">
              {match.tournament}
            </div>
            
            {/* Match Details */}
            <div className="mb-4">
              <div className="font-semibold text-lg text-foreground mb-1">
                Tempest vs {match.opponent}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDateTime(match.date)}
              </div>
            </div>
            
            {/* Stream Link */}
            {match.stream && (
              <div className="mb-4">
                <a
                  href={match.stream}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-cyan hover:text-neon-cyan/80 text-sm flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Watch Stream
                </a>
              </div>
            )}
            
            {/* Actions */}
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="outline" 
                className="flex-1"
                asChild
              >
                <Link href={`/matches/${match.id}`}>
                  View Details
                </Link>
              </Button>
              <Button 
                size="sm" 
                variant="ghost"
                onClick={() => {
                  // This would trigger ICS download
                  console.log('Download calendar event for:', match.id)
                }}
              >
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
