"use client"

import { Card, GamingCard } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, Users, Calendar } from "lucide-react"

const stats = [
  {
    label: "Tournament Wins",
    value: "23",
    icon: Trophy,
    color: "text-yellow-400",
    description: "Major tournaments won across all games"
  },
  {
    label: "Win Rate",
    value: "68%",
    icon: Target,
    color: "text-green-400",
    description: "Overall match win percentage"
  },
  {
    label: "Active Players",
    value: "15",
    icon: Users,
    color: "text-blue-400",
    description: "Professional players on roster"
  },
  {
    label: "Years Active",
    value: "2",
    icon: Calendar,
    color: "text-purple-400",
    description: "Years competing professionally"
  }
]

const achievements = [
  {
    game: "VALORANT",
    achievement: "VCT Challengers EU Runner-up 2024",
    color: "text-red-400"
  },
  {
    game: "CS2",
    achievement: "IEM Katowice 2024 Quarter-finals",
    color: "text-orange-400"
  },
  {
    game: "LoL",
    achievement: "ERL Spring Split Finals 2024",
    color: "text-blue-400"
  }
]

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <GamingCard key={stat.label} glowing className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-muted-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </GamingCard>
          ))}
        </div>
        
        {/* Recent Achievements */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Recent <span className="text-neon-cyan">Achievements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-accent/20">
                <Badge variant="game" className={`mb-3 ${achievement.color} bg-current/10`}>
                  {achievement.game}
                </Badge>
                <p className="text-sm font-medium text-foreground">
                  {achievement.achievement}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
