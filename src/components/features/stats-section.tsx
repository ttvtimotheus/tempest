"use client"

import { GlowCard } from "@/components/ui/spotlight-card"
import { Trophy, Target, Crown, Swords, GamepadIcon } from "lucide-react"

const stats = [
  {
    label: "Tournaments Won",
    value: "27",
    icon: Crown,
    glowColor: "orange" as const,
    description: "Major championship victories",
    suffix: "",
    highlight: "Elite Status"
  },
  {
    label: "Win Rate",
    value: "73",
    icon: Target,
    glowColor: "green" as const,
    description: "Match win percentage",
    suffix: "%",
    highlight: "Dominance"
  },
  {
    label: "Pro Players",
    value: "15",
    icon: Swords,
    glowColor: "blue" as const,
    description: "World-class roster",
    suffix: "",
    highlight: "Active Roster"
  },
  {
    label: "Years Elite",
    value: "3",
    icon: GamepadIcon,
    glowColor: "purple" as const,
    description: "Professional excellence",
    suffix: "",
    highlight: "Experience"
  }
]

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-background/50 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Championship
            </span>
            <br />
            <span className="text-primary">Statistics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that define our excellence across competitive gaming
          </p>
        </div>

        {/* Stats Grid with GlowCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <GlowCard
                key={stat.label}
                glowColor={stat.glowColor}
                customSize={true}
                className="w-full h-64 flex flex-col justify-between"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Value */}
                  <div>
                    <div className="text-5xl font-bold text-foreground mb-1">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm uppercase tracking-wider text-primary font-medium">
                      {stat.highlight}
                    </div>
                  </div>
                </div>
                
                {/* Bottom section */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </GlowCard>
            )
          })}
        </div>

        {/* Additional Achievement Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-card/50 border border-border/50 rounded-full">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium">
              <span className="text-muted-foreground">Latest Achievement:</span>
              <span className="ml-2 text-foreground">VCT Challengers EU Finals 2024</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
