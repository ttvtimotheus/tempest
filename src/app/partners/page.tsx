import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Handshake, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import sponsorsData from '@/data/sponsors.json'

export const metadata = {
  title: 'Partners - Tempest eSports',
  description: 'Our valued partners and sponsors who support Tempest eSports.',
}

const tierLabels: Record<string, string> = {
  title: 'Title Partner',
  major: 'Major Partner',
  supporting: 'Supporting Partner',
}

const tierColors: Record<string, string> = {
  title: 'bg-yellow-600',
  major: 'bg-cyan-600',
  supporting: 'bg-gray-600',
}

export default function PartnersPage() {
  const tiers = ['title', 'major', 'supporting'] as const

  return (
    <div className="min-h-screen bg-black">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Handshake className="h-10 w-10 text-cyan-500" />
            <h1 className="text-5xl md:text-7xl font-black text-white">
              PARTNERS
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl">
            Tempest eSports is proud to work with industry-leading brands who 
            share our passion for competitive gaming excellence.
          </p>
        </div>
      </section>

      {tiers.map((tier) => {
        const tierSponsors = sponsorsData.filter(s => s.tier === tier)
        if (tierSponsors.length === 0) return null

        return (
          <section key={tier} className="pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <Badge className={`${tierColors[tier]} text-white`}>
                  {tierLabels[tier]}
                </Badge>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tierSponsors.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-cyan-500/30 transition-all group"
                  >
                    <div className="flex items-center justify-center h-20 mb-6">
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        width={160}
                        height={60}
                        className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white text-center">{sponsor.name}</h3>
                      <p className="text-sm text-gray-500 text-center">{sponsor.category}</p>
                      <p className="text-gray-400 text-sm text-center">{sponsor.description}</p>
                      
                      <div className="pt-4 border-t border-gray-800">
                        <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Partnership Benefits</h4>
                        <ul className="space-y-1">
                          {sponsor.partnership.benefits.map((benefit, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                              <span className="text-cyan-500 mt-1">•</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <Button variant="outline" size="sm" className="w-full border-gray-700" asChild>
                          <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visit Website
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-black text-white">
            BECOME A <span className="text-cyan-500">PARTNER</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Interested in partnering with Tempest eSports? We offer a range of 
            partnership opportunities to connect your brand with millions of esports fans.
          </p>
          <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-8 py-4" asChild>
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              GET IN TOUCH
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
