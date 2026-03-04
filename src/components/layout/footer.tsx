'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Twitter, Youtube, Twitch, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = {
  teams: [
    { name: "VALORANT", href: "/teams/valorant" },
    { name: "Counter-Strike 2", href: "/teams/cs2" },
    { name: "League of Legends", href: "/teams/lol" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Imprint", href: "/legal/imprint" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/tempestesports",
      icon: Twitter,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@tempestesports",
      icon: Youtube,
    },
    {
      name: "Twitch",
      href: "https://twitch.tv/tempestesports",
      icon: Twitch,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/tempestesports",
      icon: Instagram,
    },
  ],
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (response.ok) {
        setSubscribed(true)
        setEmail('')
      }
    } catch {
      // Silently handle error
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/tempest-logo.svg"
                alt="Tempest eSports"
                width={180}
                height={45}
                className="h-10 w-auto filter brightness-100"
              />
            </div>
            <p className="text-muted-foreground text-base">
              Professional gaming organization competing at the highest level
              across VALORANT, Counter-Strike 2, and League of Legends.
            </p>
            
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">
                Stay Updated
              </h3>
              {subscribed ? (
                <p className="text-green-400 text-sm">Thanks for subscribing!</p>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-3 py-2 bg-input border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
                  />
                  <Button size="sm" variant="neon" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? '...' : 'Subscribe'}
                  </Button>
                </form>
              )}
            </div>
            
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-neon-cyan transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                  Teams
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.teams.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-muted-foreground hover:text-neon-cyan transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-muted-foreground hover:text-neon-cyan transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1">
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-muted-foreground hover:text-neon-cyan transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-base text-muted-foreground">
              &copy; {new Date().getFullYear()} Tempest eSports. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <a
                href="mailto:contact@tempestesports.com"
                className="text-muted-foreground hover:text-neon-cyan transition-colors flex items-center space-x-1"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@tempestesports.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
