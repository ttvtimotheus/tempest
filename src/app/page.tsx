import { HeroSection } from "@/components/features/hero-section"
import { TeamsShowcase } from "@/components/features/teams-showcase"
import { NewsGrid } from "@/components/features/news-grid"
import { MerchShowcase } from "@/components/features/merch-showcase"
import { SponsorsSection } from "@/components/features/sponsors-section"
import { EventsCalendar } from "@/components/features/events-calendar"
import { FactsFigures } from "@/components/features/facts-figures"

export default function Home() {
  return (
    <div className="flex flex-col bg-black min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Partners Bar - Clean minimal like MOUZ */}
      <section className="bg-black border-y border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SponsorsSection />
        </div>
      </section>
      
      {/* Upcoming Matches */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-8">
            Upcoming matches
          </h2>
          <EventsCalendar />
        </div>
      </section>

      {/* News Section */}
      <section className="bg-black py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-8">
            NEWS
          </h2>
          <NewsGrid />
        </div>
      </section>

      {/* Teams Section - G2 Style */}
      <section className="bg-gradient-to-b from-black to-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-red-500 text-sm font-bold uppercase tracking-wider">
                Our Rosters
              </span>
              <h2 className="text-4xl font-black text-white mt-2">
                TEMPEST TEAMS
              </h2>
            </div>
          </div>
          <TeamsShowcase />
        </div>
      </section>

      {/* Facts & Figures - MOUZ Style Red Section */}
      <FactsFigures />

      {/* Merch Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <MerchShowcase />
        </div>
      </section>

      {/* Bottom Partners */}
      <section className="bg-gray-950 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
            Powered by
          </p>
          <SponsorsSection />
        </div>
      </section>
    </div>
  )
}
