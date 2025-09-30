import { HeroSection } from "@/components/features/hero-section"
import { TeamsShowcase } from "@/components/features/teams-showcase"
import { LatestVideos } from "@/components/features/latest-videos"
import { NewsGrid } from "@/components/features/news-grid"
import { MerchShowcase } from "@/components/features/merch-showcase"
import { SponsorsSection } from "@/components/features/sponsors-section"
import { EventsCalendar } from "@/components/features/events-calendar"
import { CommunitySection } from "@/components/features/community-section"

export default function Home() {
  return (
    <div className="flex flex-col bg-black min-h-screen">
      {/* Hero Section with Video Background */}
      <HeroSection />
      
      {/* Teams Showcase */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
              OUR <span className="text-red-500">TEAMS</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Dominating across multiple titles with world-class players
            </p>
          </div>
          <TeamsShowcase />
        </div>
      </section>
      
      {/* Latest Videos Section */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
              LATEST <span className="text-red-500">CONTENT</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Highlights, behind the scenes, and exclusive content
            </p>
          </div>
          <LatestVideos />
        </div>
      </section>
      
      {/* News & Updates Grid */}
      <section className="relative py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
              NEWS & <span className="text-red-500">UPDATES</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Match reports, announcements, and team updates
            </p>
          </div>
          <NewsGrid />
        </div>
      </section>
      
      {/* Merchandise Showcase */}
      <section className="relative py-24 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
              OFFICIAL <span className="text-red-500">MERCH</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Rep the team with our exclusive collection
            </p>
          </div>
          <MerchShowcase />
        </div>
      </section>
      
      {/* Events Calendar */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
              UPCOMING <span className="text-red-500">EVENTS</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Tournaments, watch parties, and community nights
            </p>
          </div>
          <EventsCalendar />
        </div>
      </section>
      
      {/* Community Section */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
              JOIN THE <span className="text-red-500">COMMUNITY</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Connect with fans worldwide
            </p>
          </div>
          <CommunitySection />
        </div>
      </section>
      
      {/* Partners & Sponsors */}
      <section className="relative py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
              OUR <span className="text-red-500">PARTNERS</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Powered by industry leaders
            </p>
          </div>
          <SponsorsSection />
        </div>
      </section>
    </div>
  )
}
