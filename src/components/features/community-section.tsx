'use client'

import * as Sentry from '@sentry/nextjs'
import { motion } from 'framer-motion'
import { Twitter, Instagram, Youtube, MessageCircle, Users, Heart } from 'lucide-react'
import Link from 'next/link'
import { useState, useCallback, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { SOCIAL_LINKS, INTERNAL_LINKS } from '@/config/social-links'
import type { SocialStat, CommunityFeature, SocialPost, NewsletterFormData } from '@/types/community'

// Custom Discord icon
const Discord = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
)

// Custom Twitch icon
const Twitch = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
<path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>  </svg>
)

export function CommunitySection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const socialStats: SocialStat[] = useMemo(() => [
    {
      platform: 'Discord',
      icon: <Discord className="h-6 w-6" />,
      members: '25K+',
      label: 'Members',
      link: SOCIAL_LINKS.discord,
      color: 'bg-red-800 hover:bg-red-900'
    },
    {
      platform: 'Twitter',
      icon: <Twitter className="h-6 w-6" />,
      members: '150K+',
      label: 'Followers',
      link: SOCIAL_LINKS.twitter,
      color: 'bg-red-700 hover:bg-red-800'
    },
    {
      platform: 'Instagram',
      icon: <Instagram className="h-6 w-6" />,
      members: '200K+',
      label: 'Followers',
      link: SOCIAL_LINKS.instagram,
      color: 'bg-red-600 hover:bg-red-700'
    },
    {
      platform: 'YouTube',
      icon: <Youtube className="h-6 w-6" />,
      members: '500K+',
      label: 'Subscribers',
      link: SOCIAL_LINKS.youtube,
      color: 'bg-red-600 hover:bg-red-700'
    },
    {
      platform: 'Twitch',
      icon: <Twitch className="h-6 w-6" />,
      members: '100K+',
      label: 'Followers',
      link: SOCIAL_LINKS.twitch,
      color: 'bg-red-900 hover:bg-black'
    }
  ], [])

  const communityFeatures: CommunityFeature[] = useMemo(() => [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Active Discord',
      description: 'Join discussions, find teammates, and chat with pros',
      link: INTERNAL_LINKS.discord
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Fan Clubs',
      description: 'Local meetups and watch parties worldwide',
      link: INTERNAL_LINKS.fanClubs
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Exclusive Content',
      description: 'Behind-the-scenes access for community members',
      link: INTERNAL_LINKS.membership
    }
  ], [])

  const latestPosts: SocialPost[] = useMemo(() => [
    {
      platform: 'Twitter',
      content: 'VICTORY! 🏆 Our VALORANT team takes home the championship! GG WP to all teams.',
      image: '/images/social/post-1.jpg',
      likes: '12.5K',
      time: '2 hours ago'
    },
    {
      platform: 'Instagram',
      content: 'Behind the scenes from bootcamp 💪 The grind never stops!',
      image: '/images/social/post-2.jpg',
      likes: '45.2K',
      time: '5 hours ago'
    },
    {
      platform: 'Twitter',
      content: 'New roster announcement coming tomorrow! Who do you think it is? 👀',
      image: '/images/social/post-3.jpg',
      likes: '8.9K',
      time: '1 day ago'
    }
  ], [])

  const handleNewsletterSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    return Sentry.startSpan(
      {
        op: 'ui.action',
        name: 'Newsletter Subscription',
      },
      async (span: Sentry.Span) => {
        try {
          setIsSubmitting(true)
          setSubmitStatus('idle')
          
          // Email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!email || !emailRegex.test(email)) {
            throw new Error('Invalid email address')
          }
          
          span.setAttribute('email_domain', email.split('@')[1])
          
          // API call would go here
          // const response = await fetch('/api/newsletter', { ... })
          
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          setSubmitStatus('success')
          setEmail('')
          
          span.setAttribute('subscription_status', 'success')
        } catch (error) {
          setSubmitStatus('error')
          span.setAttribute('subscription_status', 'error')
          
          Sentry.captureException(error, {
            tags: { feature: 'newsletter' },
            contexts: {
              form: {
                email_provided: !!email,
              }
            }
          })
        } finally {
          setIsSubmitting(false)
        }
      }
    )
  }, [email])

  const handleSocialClick = useCallback((platform: string, link: string) => {
    Sentry.startSpan(
      {
        op: 'ui.click',
        name: 'Social Media Link Click',
      },
      (span: Sentry.Span) => {
        span.setAttribute('platform', platform)
        span.setAttribute('link', link)
      }
    )
  }, [])

  return (
    <div className="space-y-16">
      {/* Social Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {socialStats.map((social, index) => (
          <motion.a
            key={social.platform}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleSocialClick(social.platform, social.link)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-lg ${social.color} p-6 text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black`}
            aria-label={`Visit our ${social.platform} page with ${social.members} ${social.label}`}
          >
            <div className="relative z-10 text-center space-y-2">
              <div className="flex justify-center mb-3">
                {social.icon}
              </div>
              <p className="text-3xl font-black">{social.members}</p>
              <p className="text-sm opacity-90">{social.label}</p>
              <p className="text-xs font-bold uppercase tracking-wider opacity-75">
                {social.platform}
              </p>
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </motion.a>
        ))}
      </motion.div>

      {/* Community Features */}
      <div className="grid md:grid-cols-3 gap-6">
        {communityFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-gray-900 border border-gray-800 rounded-lg p-8 text-center hover:border-red-500/50 transition-all duration-300"
          >
            <Link href={feature.link}>
              <div className="flex justify-center mb-4 text-red-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Discord CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-black p-12"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <Discord className="h-16 w-16 text-white mx-auto" />
          <h3 className="text-4xl font-black text-white">
            JOIN OUR DISCORD SERVER
          </h3>
          <p className="text-xl text-white/90">
            Connect with 25,000+ fans, get exclusive updates, and chat with your favorite players
          </p>
          <Button
            size="lg"
            className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-6 text-lg transform hover:scale-105 transition-all"
            asChild
          >
            <a 
              href={SOCIAL_LINKS.discord} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => handleSocialClick('Discord CTA', SOCIAL_LINKS.discord)}
            >
              JOIN NOW - IT'S FREE
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Social Feed */}
      <div className="space-y-6">
        <h3 className="text-2xl font-black text-white text-center">
          LATEST FROM SOCIAL
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {latestPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300"
            >
              {/* Post Image */}
              <div className="relative h-48 bg-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${post.image || '/images/social-placeholder.jpg'})`
                  }}
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded">
                  <span className="text-xs text-white font-bold">
                    {post.platform}
                  </span>
                </div>
              </div>
              
              {/* Post Content */}
              <div className="p-4 space-y-3">
                <p className="text-white text-sm line-clamp-2">
                  {post.content}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Heart className="h-3 w-3 text-red-500" />
                    {post.likes}
                  </span>
                  <span>{post.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center"
      >
        <h3 className="text-2xl font-black text-white mb-3">
          STAY UPDATED
        </h3>
        <p className="text-gray-400 mb-6">
          Get the latest news, exclusive content, and special offers
        </p>
        <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto space-y-3">
          <div className="flex gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address for newsletter
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={isSubmitting}
              required
              aria-required="true"
              aria-invalid={submitStatus === 'error'}
              aria-describedby={submitStatus !== 'idle' ? 'newsletter-status' : undefined}
              className="flex-1 px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <Button 
              type="submit"
              disabled={isSubmitting || !email}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
            </Button>
          </div>
          {submitStatus !== 'idle' && (
            <p 
              id="newsletter-status"
              role="status"
              aria-live="polite"
              className={`text-sm ${
                submitStatus === 'success' 
                  ? 'text-green-400' 
                  : 'text-red-400'
              }`}
            >
              {submitStatus === 'success' 
                ? '✓ Successfully subscribed! Check your email for confirmation.' 
                : '✗ Something went wrong. Please try again.'}
            </p>
          )}
        </form>
      </motion.div>
    </div>
  )
}
