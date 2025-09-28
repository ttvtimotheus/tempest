"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, ExternalLink, Download, Filter, Search, Trophy, Play } from "lucide-react"
import { formatDateTime, formatTime, getGameDisplayName, getGameColor, isLive, isUpcoming, generateICSFile, downloadICS } from "@/lib/utils"
import matchesData from "@/data/matches.json"

const games = ["all", "valorant", "cs2", "lol"]
const statuses = ["all", "upcoming", "live", "finished"]

export default function MatchesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGame, setSelectedGame] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [view, setView] = useState<"list" | "calendar">("list")

  const filteredMatches = useMemo(() => {
    return matchesData
      .filter(match => {
        const matchesSearch = searchTerm === "" || 
          match.opponent.toLowerCase().includes(searchTerm.toLowerCase()) ||
          match.tournament.toLowerCase().includes(searchTerm.toLowerCase())
        
        const matchesGame = selectedGame === "all" || match.game === selectedGame
        const matchesStatus = selectedStatus === "all" || match.status === selectedStatus
        
        return matchesSearch && matchesGame && matchesStatus
      })
      .sort((a, b) => {
        // Sort by date, most recent first for finished matches, upcoming first for future matches
        if (a.status === "finished" && b.status === "finished") {
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        }
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      })
  }, [searchTerm, selectedGame, selectedStatus])

  const handleDownloadCalendar = (match: any) => {
    const icsContent = generateICSFile(match)
    downloadICS(icsContent, `tempest-vs-${match.opponent.replace(/\s+/g, '-').toLowerCase()}.ics`)
  }

  const getStatusBadge = (match: any) => {
    if (isLive(match.date)) {
      return <Badge variant="live">LIVE</Badge>
    } else if (match.status === "upcoming") {
      return <Badge variant="outline"><Clock className="w-3 h-3 mr-1" />Upcoming</Badge>
    } else if (match.result === "W") {
      return <Badge variant="success"><Trophy className="w-3 h-3 mr-1" />Won</Badge>
    } else if (match.result === "L") {
      return <Badge variant="destructive">Lost</Badge>
    } else {
      return <Badge variant="secondary">Draw</Badge>
    }
  }

  const getResultDisplay = (match: any) => {
    if (match.status === "finished" && match.maps && match.maps.length > 0) {
      return (
        <div className="text-sm text-muted-foreground">
          {match.maps.map((map: any, index: number) => (
            <div key={index} className="flex justify-between">
              <span>{map.name}</span>
              <span className={match.result === "W" ? "text-green-400" : "text-red-400"}>
                {map.scoreTeam} - {map.scoreOpp}
              </span>
            </div>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Match <span className="text-neon-cyan">Schedule</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow all Tempest eSports matches across VALORANT, Counter-Strike 2, 
              and League of Legends. Never miss a game with our interactive schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 border-b border-border bg-background/80 backdrop-blur-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search matches..."
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                  className="pl-9 w-full sm:w-64"
                />
              </div>
              
              <Select value={selectedGame} onValueChange={setSelectedGame}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Games</SelectItem>
                  {games.slice(1).map(game => (
                    <SelectItem key={game} value={game}>
                      {getGameDisplayName(game)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="live">Live</SelectItem>
                  <SelectItem value="finished">Finished</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Toggle */}
            <Tabs value={view} onValueChange={(v: string) => setView(v as "list" | "calendar")}>
              <TabsList>
                <TabsTrigger value="list">List View</TabsTrigger>
                <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Matches Content */}
      <section className="py-8 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={view} className="space-y-6">
            <TabsContent value="list" className="space-y-4">
              {filteredMatches.length === 0 ? (
                <div className="text-center py-12">
                  <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No matches found with current filters.</p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {filteredMatches.map((match) => (
                    <Card key={match.id} className="overflow-hidden bg-card/80 backdrop-blur-sm hover:bg-card transition-colors">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          {/* Match Info */}
                          <div className="flex-1 space-y-3">
                            <div className="flex items-center gap-3 flex-wrap">
                              <Badge 
                                variant="game" 
                                className={`${getGameColor(match.game)} bg-current/10 border-current/20`}
                              >
                                {getGameDisplayName(match.game)}
                              </Badge>
                              {getStatusBadge(match)}
                              <span className="text-sm text-muted-foreground">
                                {match.tournament}
                              </span>
                            </div>
                            
                            <div className="space-y-1">
                              <h3 className="text-lg font-semibold text-foreground">
                                Tempest vs {match.opponent}
                              </h3>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4 mr-1" />
                                {formatDateTime(match.date)}
                              </div>
                            </div>

                            {/* Maps/Results */}
                            {getResultDisplay(match)}
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2">
                            {match.stream && (isLive(match.date) ? (
                              <Button size="sm" variant="neon" asChild>
                                <a href={match.stream} target="_blank" rel="noopener noreferrer">
                                  <Play className="w-4 h-4 mr-1" />
                                  Watch Live
                                </a>
                              </Button>
                            ) : isUpcoming(match.date) && (
                              <Button size="sm" variant="outline" asChild>
                                <a href={match.stream} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-1" />
                                  Stream
                                </a>
                              </Button>
                            ))}
                            
                            {match.vod && (
                              <Button size="sm" variant="ghost" asChild>
                                <a href={match.vod} target="_blank" rel="noopener noreferrer">
                                  <Play className="w-4 h-4 mr-1" />
                                  VOD
                                </a>
                              </Button>
                            )}
                            
                            <Button 
                              size="sm" 
                              variant="ghost"
                              onClick={() => handleDownloadCalendar(match)}
                            >
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="calendar" className="space-y-4">
              <div className="text-center py-12">
                <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Calendar view coming soon!</p>
                <p className="text-sm text-muted-foreground mt-2">
                  For now, use list view and download individual match events.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
