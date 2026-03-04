'use client'

import { useState } from 'react'
import { Mail, MapPin, MessageSquare, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SOCIAL_LINKS } from '@/config/social-links'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send')
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
            CONTACT
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Get in touch with the Tempest eSports team. We&apos;d love to hear from you 
            about partnerships, media inquiries, or anything else.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-white">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      placeholder="Your name"
                      className="bg-gray-900 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-white">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      placeholder="your@email.com"
                      className="bg-gray-900 border-gray-700 text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-white">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    required
                    placeholder="What is this about?"
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                    rows={6}
                    placeholder="Your message..."
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-8 py-6 text-lg disabled:opacity-50"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </Button>
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-sm">Message sent successfully! We&apos;ll get back to you soon.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-cyan-400 text-sm">Something went wrong. Please try again or email us directly.</p>
                )}
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-6">
                <h3 className="text-lg font-bold text-white">GET IN TOUCH</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-cyan-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Email</p>
                      <a href="mailto:contact@tempestesports.com" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                        contact@tempestesports.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-cyan-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Location</p>
                      <p className="text-sm text-gray-400">Berlin, Germany</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-cyan-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Discord</p>
                      <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-cyan-500 transition-colors">
                        Join our server
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-white">INQUIRIES</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500 uppercase text-xs font-bold">Partnerships</p>
                    <a href="mailto:partners@tempestesports.com" className="text-gray-400 hover:text-cyan-500 transition-colors">
                      partners@tempestesports.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-xs font-bold">Media / Press</p>
                    <a href="mailto:media@tempestesports.com" className="text-gray-400 hover:text-cyan-500 transition-colors">
                      media@tempestesports.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-xs font-bold">Careers</p>
                    <a href="mailto:careers@tempestesports.com" className="text-gray-400 hover:text-cyan-500 transition-colors">
                      careers@tempestesports.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
