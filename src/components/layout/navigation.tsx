"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Globe, ChevronDown, ShoppingBag, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [language, setLanguage] = React.useState<'en' | 'de'>('en')
  const [showLangDropdown, setShowLangDropdown] = React.useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { name: language === 'en' ? 'HOME' : 'STARTSEITE', url: '/' },
    { name: 'TEAMS', url: '/teams' },
    { name: language === 'en' ? 'NEWS' : 'NACHRICHTEN', url: '/news' },
    { name: language === 'en' ? 'MATCHES' : 'SPIELE', url: '/matches' },
    { name: language === 'en' ? 'EVENTS' : 'VERANSTALTUNGEN', url: '/events' },
    { name: 'MERCH', url: '/merchandise' },
    { name: language === 'en' ? 'PARTNERS' : 'PARTNER', url: '/partners' },
    { name: language === 'en' ? 'ABOUT' : 'ÜBER UNS', url: '/about' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute -inset-1 bg-red-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300" />
              <div className="relative bg-black px-3 py-1 rounded">
                <span className="text-2xl font-black text-white">
                  TEMP<span className="text-red-500">EST</span>
                </span>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className={`px-4 py-2 text-sm font-bold tracking-wider transition-all duration-300 ${
                  pathname === item.url
                    ? 'text-red-500 border-b-2 border-red-500'
                    : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-red-500/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center gap-2 px-3 py-2 bg-gray-900 hover:bg-gray-800 rounded text-white text-sm font-medium transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>{language.toUpperCase()}</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${
                  showLangDropdown ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Language Dropdown */}
              <AnimatePresence>
                {showLangDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-32 bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-xl"
                  >
                    <button
                      onClick={() => {
                        setLanguage('en')
                        setShowLangDropdown(false)
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-800 transition-colors ${
                        language === 'en' ? 'text-red-500 bg-gray-800' : 'text-white'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('de')
                        setShowLangDropdown(false)
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-800 transition-colors ${
                        language === 'de' ? 'text-red-500 bg-gray-800' : 'text-white'
                      }`}
                    >
                      Deutsch
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* CTA Buttons Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white font-bold"
                asChild
              >
                <Link href="/merchandise">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  SHOP
                </Link>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-red-500/50 text-red-500 hover:bg-red-500/10 font-bold"
                asChild
              >
                <Link href="/live">
                  <Play className="mr-2 h-4 w-4" />
                  LIVE
                </Link>
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-red-500 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black border-t border-gray-800"
          >
            <div className="px-4 py-6 space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded text-lg font-bold transition-all ${
                    pathname === item.url
                      ? 'bg-red-600 text-white'
                      : 'text-gray-300 hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-800 space-y-3">
                <Button
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
                  asChild
                >
                  <Link href="/merchandise">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    SHOP
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-red-500/50 text-red-500 hover:bg-red-500/10 font-bold"
                  asChild
                >
                  <Link href="/live">
                    <Play className="mr-2 h-4 w-4" />
                    WATCH LIVE
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
