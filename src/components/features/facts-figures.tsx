'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import statsData from '@/data/stats.json'

export function FactsFigures() {
  const highlights = statsData.highlights
  const socialFans = statsData.socialFans

  return (
    <section className="relative bg-cyan-600 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white">
            FACTS & FIGURES
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {highlights.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className={index < 2 ? 'col-span-2 lg:col-span-1' : ''}
            >
              <div className="space-y-2">
                <div className={index < 2 ? 'flex items-end gap-4' : ''}>
                  <span className={`${index < 2 ? 'text-8xl md:text-9xl' : 'text-7xl md:text-8xl'} font-black text-white leading-none`}>
                    {stat.value}
                  </span>
                  {index === 1 && <ArrowRight className="h-12 w-12 text-white mb-4" />}
                </div>
                <div className="text-white/90">
                  <p className={`${index < 2 ? 'text-xl' : 'text-lg'} font-bold uppercase tracking-wider`}>
                    {stat.label}
                  </p>
                  <p className="text-sm text-white/70">{stat.sublabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-white/20"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="space-y-2">
              <span className="text-8xl md:text-[12rem] font-black text-white leading-none">
                {socialFans}
              </span>
              <p className="text-2xl font-bold text-white uppercase tracking-wider">
                Social Fans
              </p>
            </div>
            
            <div className="flex items-center justify-center w-32 h-32 lg:w-48 lg:h-48 bg-white/10 rounded-xl p-4">
              <Image
                src="/images/tempest-logo.svg"
                alt="Tempest eSports"
                width={180}
                height={180}
                className="w-full h-auto brightness-0 invert"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
