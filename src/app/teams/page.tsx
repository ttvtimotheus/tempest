import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Trophy, Target, Calendar } from "lucide-react"
import { getGameDisplayName, getGameColor } from "@/lib/utils"
import teamsData from "@/data/teams.json"

export const metadata = {
  title: "Teams - Tempest eSports",
  description: "Meet our professional gaming teams competing across VALORANT, Counter-Strike 2, and League of Legends.",
}

export default function TeamsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-neon-cyan">Teams</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the professional gaming teams that represent Tempest eSports 
              across multiple competitive titles. Each team brings dedication, 
              skill, and passion to the highest levels of competition.
            </p>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamsData.map((team) => (
              <Card key={team.id} className="overflow-hidden bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant="game" 
                      className={`${getGameColor(team.game)} bg-current/10 border-current/20`}
                    >
                      {getGameDisplayName(team.game)}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {team.region}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {team.name}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {team.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Team Stats */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-border">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="text-lg font-semibold text-foreground">
                        {team.roster.length}
                      </div>
                      <div className="text-xs text-muted-foreground">Players</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Trophy className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="text-lg font-semibold text-foreground">
                        {team.achievements.length}
                      </div>
                      <div className="text-xs text-muted-foreground">Achievements</div>
                    </div>
                  </div>
                  
                  {/* Latest Achievement */}
                  {team.achievements.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-muted-foreground">
                        Latest Achievement
                      </div>
                      <div className="text-sm text-foreground bg-muted/20 rounded-lg p-3">
                        {team.achievements[0]}
                      </div>
                    </div>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href={`/teams/${team.game}`}>
                        View Team
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/matches" className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Matches
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Support Our <span className="text-neon-cyan">Teams</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Follow our teams&apos; journey to esports excellence. Don&apos;t miss any matches 
            and show your support for Tempest eSports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="neon" asChild>
              <Link href="/matches">
                <Calendar className="w-5 h-5 mr-2" />
                View Match Schedule
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/players">
                <Users className="w-5 h-5 mr-2" />
                Meet the Players
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
