import { HeroSection } from "@/components/features/hero-section"
import { UpcomingMatches } from "@/components/features/upcoming-matches"
import { LatestNews } from "@/components/features/latest-news"
import { SponsorsSection } from "@/components/features/sponsors-section"
import { StatsSection } from "@/components/features/stats-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Overview */}
      <StatsSection />
      
      {/* Upcoming Matches */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Upcoming <span className="text-neon-cyan">Matches</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don&apos;t miss our upcoming matches across all games. Support the team!
            </p>
          </div>
          <UpcomingMatches />
        </div>
      </section>
      
      {/* Latest News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Latest <span className="text-neon-cyan">News</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay updated with the latest news from Tempest eSports
            </p>
          </div>
          <LatestNews />
        </div>
      </section>
      
      {/* Sponsors */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our <span className="text-neon-cyan">Partners</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Proud to be supported by industry-leading brands
            </p>
          </div>
          <SponsorsSection />
        </div>
      </section>
    </div>
  )
}
