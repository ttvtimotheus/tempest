"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import { formatDate } from "@/lib/utils"

// Mock news data - this would normally come from a CMS or API
const newsData = [
  {
    id: "roster-announcement-valorant",
    title: "New VALORANT Player Joins Tempest",
    excerpt: "We're excited to announce the addition of Jett to our VALORANT roster, bringing fresh talent and aggressive playstyle to the team.",
    category: "Roster Changes",
    author: "Tempest Management",
    publishedAt: "2024-09-25T10:00:00.000Z",
    slug: "new-valorant-player-joins-tempest",
    featured: true
  },
  {
    id: "tournament-results-cs2",
    title: "Quarter-Finals Finish at IEM Katowice",
    excerpt: "Our CS2 team showed incredible resilience reaching the quarter-finals at IEM Katowice 2024, setting the stage for future success.",
    category: "Tournament Results",
    author: "Sarah Chen",
    publishedAt: "2024-09-20T15:30:00.000Z",
    slug: "quarter-finals-finish-iem-katowice",
    featured: false
  },
  {
    id: "partnership-announcement",
    title: "Strategic Partnership with HyperX",
    excerpt: "Tempest eSports announces a major partnership with HyperX, providing cutting-edge gaming peripherals for all our teams.",
    category: "Partnerships",
    author: "Business Development",
    publishedAt: "2024-09-15T12:00:00.000Z",
    slug: "strategic-partnership-hyperx",
    featured: false
  }
]

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "Roster Changes": "text-green-400 bg-green-400/10",
    "Tournament Results": "text-blue-400 bg-blue-400/10",
    "Partnerships": "text-purple-400 bg-purple-400/10",
    "Announcements": "text-yellow-400 bg-yellow-400/10",
  }
  return colors[category] || "text-muted-foreground bg-muted"
}

export function LatestNews() {
  const featuredNews = newsData.find(news => news.featured)
  const otherNews = newsData.filter(news => !news.featured).slice(0, 2)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Featured News */}
      {featuredNews && (
        <Card className="lg:col-span-2 overflow-hidden bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-accent/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2 mb-3">
              <Badge className={getCategoryColor(featuredNews.category)}>
                {featuredNews.category}
              </Badge>
              <Badge variant="neon" className="text-xs">FEATURED</Badge>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2 leading-tight">
              {featuredNews.title}
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              {featuredNews.excerpt}
            </p>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {featuredNews.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(featuredNews.publishedAt)}
                </div>
              </div>
              <Button variant="neon" size="sm" asChild>
                <Link href={`/news/${featuredNews.slug}`}>
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Other News */}
      {otherNews.map((news) => (
        <Card key={news.id} className="overflow-hidden bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-colors">
          <CardHeader className="pb-3">
            <Badge className={getCategoryColor(news.category)}>
              {news.category}
            </Badge>
            <h4 className="text-lg font-semibold text-foreground leading-tight">
              {news.title}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
              {news.excerpt}
            </p>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                {formatDate(news.publishedAt)}
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/news/${news.slug}`}>
                  Read More
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
