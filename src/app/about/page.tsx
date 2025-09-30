import { motion } from 'framer-motion'
import { Trophy, Users, Target, Heart, Globe, Gamepad2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  const stats = [
    { value: '2020', label: 'Founded' },
    { value: '50+', label: 'Players' },
    { value: '15', label: 'Championships' },
    { value: '5', label: 'Game Titles' },
  ]

  const values = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every match, pushing boundaries and setting new standards.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'Building a strong, supportive community of players and fans worldwide.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Dedication',
      description: 'Committed to continuous improvement and achieving our goals together.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion',
      description: 'Driven by our love for gaming and competitive esports.'
    }
  ]

  const team = [
    {
      name: 'Michael Chen',
      role: 'CEO & Founder',
      image: '/images/team/ceo.jpg'
    },
    {
      name: 'Sarah Williams',
      role: 'COO',
      image: '/images/team/coo.jpg'
    },
    {
      name: 'David Kim',
      role: 'Head of Esports',
      image: '/images/team/head-esports.jpg'
    },
    {
      name: 'Emma Johnson',
      role: 'Marketing Director',
      image: '/images/team/marketing.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
        />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              WE ARE <span className="text-red-500">TEMPEST</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Forging champions, building community, living esports
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-black text-red-500">{stat.value}</p>
                <p className="text-gray-400 uppercase tracking-wider mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-white">
                OUR <span className="text-red-500">MISSION</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Founded in 2020, Tempest eSports has rapidly grown to become one of the most 
                respected organizations in competitive gaming. We believe in nurturing talent, 
                fostering innovation, and creating opportunities for players to reach their full potential.
              </p>
              <p className="text-lg text-gray-400">
                Our mission is simple: to dominate the digital battlefield while building a 
                legacy that inspires the next generation of esports athletes. We're not just 
                playing games – we're shaping the future of competitive gaming.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold" size="lg">
                <Gamepad2 className="mr-2 h-5 w-5" />
                JOIN THE TEAM
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/mission.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-white text-center mb-16">
            OUR <span className="text-red-500">VALUES</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex p-4 bg-red-600/10 rounded-full text-red-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-white text-center mb-16">
            LEADERSHIP <span className="text-red-500">TEAM</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-800">
                  <Image
                    src={member.image || '/images/placeholder-avatar.jpg'}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-red-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Globe className="h-16 w-16 text-red-500 mx-auto mb-8" />
          <h2 className="text-4xl font-black text-white mb-6">
            GLOBAL <span className="text-red-500">PRESENCE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            With teams competing across Europe, North America, and Asia, Tempest eSports 
            is truly a global organization. We speak the universal language of gaming.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="border-gray-700">
              <Globe className="mr-2 h-4 w-4" />
              English
            </Button>
            <Button variant="outline" className="border-gray-700">
              <Globe className="mr-2 h-4 w-4" />
              Deutsch
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
