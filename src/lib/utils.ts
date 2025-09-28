import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}

export function formatDateTime(date: Date | string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Europe/Berlin",
  }).format(new Date(date))
}

export function formatTime(date: Date | string) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Europe/Berlin",
  }).format(new Date(date))
}

export function isUpcoming(date: Date | string) {
  return new Date(date) > new Date()
}

export function isLive(date: Date | string, durationMinutes = 180) {
  const now = new Date()
  const matchDate = new Date(date)
  const endTime = new Date(matchDate.getTime() + durationMinutes * 60000)
  
  return matchDate <= now && now <= endTime
}

export function getGameDisplayName(game: string) {
  const gameNames: Record<string, string> = {
    valorant: "VALORANT",
    cs2: "Counter-Strike 2",
    lol: "League of Legends",
  }
  return gameNames[game] || game
}

export function getGameColor(game: string) {
  const gameColors: Record<string, string> = {
    valorant: "text-red-400",
    cs2: "text-orange-400",
    lol: "text-blue-400",
  }
  return gameColors[game] || "text-primary"
}

export function generateICSFile(match: {
  id: string
  game: string
  tournament: string
  opponent: string
  date: string
}) {
  const startDate = new Date(match.date)
  const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000) // 3 hours duration
  
  const formatICSDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  }
  
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Tempest eSports//Match Calendar//EN',
    'BEGIN:VEVENT',
    `UID:${match.id}@tempestesports.com`,
    `DTSTART:${formatICSDate(startDate)}`,
    `DTEND:${formatICSDate(endDate)}`,
    `SUMMARY:${getGameDisplayName(match.game)} vs ${match.opponent}`,
    `DESCRIPTION:${match.tournament} - ${getGameDisplayName(match.game)} match against ${match.opponent}`,
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    'DESCRIPTION:Match starting in 30 minutes',
    'TRIGGER:-PT30M',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n')
  
  return icsContent
}

export function downloadICS(content: string, filename: string) {
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(link.href)
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function truncate(text: string, maxLength: number) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}
