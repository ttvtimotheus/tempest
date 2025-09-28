"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Home, Users, Calendar, Gamepad2, Newspaper, Mail, Trophy, ShoppingBag } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

const navigationItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Teams", url: "/teams", icon: Users },
  { name: "Matches", url: "/matches", icon: Calendar },
  { name: "Players", url: "/players", icon: Trophy },
  { name: "News", url: "/news", icon: Newspaper },
  { name: "Partners", url: "/partners", icon: Gamepad2 },
  { name: "Merch", url: "/merch", icon: ShoppingBag },
  { name: "Contact", url: "/contact", icon: Mail },
]

export function Navigation() {
  return (
    <>
      {/* Top Logo Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-center py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/tempest-logo.svg"
                alt="Tempest eSports"
                width={200}
                height={50}
                className="h-10 w-auto filter brightness-100 hover:brightness-110 transition-all duration-300"
                priority
              />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Tubelight Navigation */}
      <NavBar items={navigationItems} className="mt-20" />
    </>
  )
}
