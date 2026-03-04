import { Trophy, Users, Target, Heart, Globe, Gamepad2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import aboutData from '@/data/about.json'

export const metadata = {
  title: 'About - Tempest eSports',
  description: 'Learn about Tempest eSports, our mission, values, and leadership team.',
}

const iconMap: Record<string, React.ReactNode> = {
  trophy: <Trophy className="h-8 w-8" />,
  users: <Users className="h-8 w-8" />,
  target: <Target className="h-8 w-8" />,
  heart: <Heart className="h-8 w-8" />,
}

export default function AboutPage() {
  const { stats, values, team, mission } = aboutData

  return (
    <div className="min-h-screen bg-black">
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/about-hero.svg')" }}
        />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              WE ARE <span className="text-cyan-500">TEMPEST</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Forging champions, building community, living esports
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-black text-cyan-500">{stat.value}</p>
                <p className="text-gray-400 uppercase tracking-wider mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-white">
                OUR <span className="text-cyan-500">MISSION</span>
              </h2>
              {mission.paragraphs.map((paragraph, index) => (
                <p key={index} className={`${index === 0 ? 'text-xl text-gray-300' : 'text-lg text-gray-400'} leading-relaxed`}>
                  {paragraph}
                </p>
              ))}
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold" size="lg" asChild>
                <Link href="/contact">
                  <Gamepad2 className="mr-2 h-5 w-5" />
                  JOIN THE TEAM
                </Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden bg-gray-900">
              <Image
                src="/images/mission.svg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-white text-center mb-16">
            OUR <span className="text-cyan-500">VALUES</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex p-4 bg-cyan-600/10 rounded-full text-cyan-500">
                  {iconMap[value.icon]}
                </div>
                <h3 className="text-xl font-bold text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-white text-center mb-16">
            LEADERSHIP <span className="text-cyan-500">TEAM</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-800">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-cyan-500">{member.role}</p>
                  <p className="text-sm text-gray-500 mt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Globe className="h-16 w-16 text-cyan-500 mx-auto mb-8" />
          <h2 className="text-4xl font-black text-white mb-6">
            GLOBAL <span className="text-cyan-500">PRESENCE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            With teams competing across Europe, North America, and Asia, Tempest eSports 
            is truly a global organization. We speak the universal language of gaming.
          </p>
        </div>
      </section>
    </div>
  )
}
