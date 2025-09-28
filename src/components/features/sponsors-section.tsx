"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Handshake } from "lucide-react"
import sponsorsData from "@/data/sponsors.json"

const getTierColor = (tier: string) => {
  const colors: Record<string, string> = {
    title: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    major: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    supporting: "text-green-400 bg-green-400/10 border-green-400/20",
  }
  return colors[tier] || "text-muted-foreground bg-muted"
}

const getTierLabel = (tier: string) => {
  const labels: Record<string, string> = {
    title: "Title Partner",
    major: "Major Partner", 
    supporting: "Supporting Partner",
  }
  return labels[tier] || tier
}

export function SponsorsSection() {
  // Group sponsors by tier
  const titleSponsors = sponsorsData.filter(sponsor => sponsor.tier === "title")
  const majorSponsors = sponsorsData.filter(sponsor => sponsor.tier === "major")
  const supportingSponsors = sponsorsData.filter(sponsor => sponsor.tier === "supporting")

  return (
    <div className="space-y-12">
      {/* Title Sponsors */}
      {titleSponsors.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-center mb-8 text-muted-foreground">
            Title Partner
          </h3>
          <div className="flex justify-center">
            {titleSponsors.map((sponsor) => (
              <Card 
                key={sponsor.id} 
                className="p-8 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-yellow-400/20 max-w-sm"
              >
                <div className="text-center">
                  <Badge className={`${getTierColor(sponsor.tier)} mb-4`}>
                    {getTierLabel(sponsor.tier)}
                  </Badge>
                  <div className="w-32 h-16 bg-muted/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-muted-foreground">
                      {sponsor.name}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {sponsor.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {sponsor.description}
                  </p>
                  <Button size="sm" variant="outline" asChild>
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Visit Website
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Major Sponsors */}
      {majorSponsors.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-center mb-8 text-muted-foreground">
            Major Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {majorSponsors.map((sponsor) => (
              <Card 
                key={sponsor.id} 
                className="p-6 bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-colors border-blue-400/10"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-muted/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-muted-foreground">
                      {sponsor.name.substring(0, 2)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-lg font-semibold text-foreground">
                        {sponsor.name}
                      </h4>
                      <Badge className={getTierColor(sponsor.tier)}>
                        {sponsor.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {sponsor.description}
                    </p>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Learn More
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Supporting Sponsors - Logo Wall */}
      {supportingSponsors.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-center mb-8 text-muted-foreground">
            Supporting Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
            {supportingSponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-24 h-12 bg-muted/20 rounded-lg flex items-center justify-center group-hover:bg-muted/40 transition-colors">
                  <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground">
                    {sponsor.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="text-center pt-8 border-t border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Interested in Partnering with Us?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join our growing family of partners and reach the passionate esports community. 
          Let&apos;s create something amazing together.
        </p>
        <Button variant="neon" size="lg" asChild>
          <Link href="/partners">
            <Handshake className="w-5 h-5 mr-2" />
            Become a Partner
          </Link>
        </Button>
      </div>
    </div>
  )
}
