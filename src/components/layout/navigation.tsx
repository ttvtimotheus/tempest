"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Teams",
    href: "/teams",
    children: [
      { name: "VALORANT", href: "/teams/valorant" },
      { name: "Counter-Strike 2", href: "/teams/cs2" },
      { name: "League of Legends", href: "/teams/lol" },
    ],
  },
  { name: "Players", href: "/players" },
  { name: "Matches", href: "/matches" },
  { name: "News", href: "/news" },
  { name: "About", href: "/about" },
  { name: "Partners", href: "/partners" },
  { name: "Merch", href: "/merch" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="bg-background/80 backdrop-blur-xl border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-20">
          {/* Logo - Minimal and sophisticated */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-2xl font-bold tracking-tighter">
                TEMPEST
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        isActive(item.href)
                          ? "text-neon-cyan bg-accent"
                          : "text-foreground hover:text-neon-cyan hover:bg-accent"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-popover border border-border rounded-md shadow-lg z-50">
                        <div className="py-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={cn(
                                "block px-4 py-2 text-sm transition-colors",
                                isActive(child.href)
                                  ? "text-neon-cyan bg-accent"
                                  : "text-popover-foreground hover:text-neon-cyan hover:bg-accent"
                              )}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "text-neon-cyan bg-accent"
                        : "text-foreground hover:text-neon-cyan hover:bg-accent"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }
                      className={cn(
                        "flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors",
                        isActive(item.href)
                          ? "text-neon-cyan bg-accent"
                          : "text-foreground hover:text-neon-cyan hover:bg-accent"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          openDropdown === item.name && "rotate-180"
                        )}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                              isActive(child.href)
                                ? "text-neon-cyan bg-accent"
                                : "text-muted-foreground hover:text-neon-cyan hover:bg-accent"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                      isActive(item.href)
                        ? "text-neon-cyan bg-accent"
                        : "text-foreground hover:text-neon-cyan hover:bg-accent"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
