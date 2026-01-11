'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function FactsFigures() {
  return (
    <section className="relative bg-red-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Section Title */}
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

        {/* Stats Grid - MOUZ Style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Stat 1 - Large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-2 lg:col-span-1"
          >
            <div className="space-y-2">
              <span className="text-8xl md:text-9xl font-black text-white leading-none">
                27
              </span>
              <div className="text-white/90">
                <p className="text-xl font-bold uppercase tracking-wider">Titles</p>
                <p className="text-sm text-white/70">Won</p>
              </div>
            </div>
          </motion.div>

          {/* Stat 2 - With Arrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-2 lg:col-span-1"
          >
            <div className="space-y-2">
              <div className="flex items-end gap-4">
                <span className="text-8xl md:text-9xl font-black text-white leading-none">
                  5
                </span>
                <ArrowRight className="h-12 w-12 text-white mb-4" />
              </div>
              <div className="text-white/90">
                <p className="text-xl font-bold uppercase tracking-wider">Active</p>
                <p className="text-sm text-white/70">Game Titles</p>
              </div>
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <span className="text-7xl md:text-8xl font-black text-white leading-none">
                50+
              </span>
              <div className="text-white/90">
                <p className="text-lg font-bold uppercase tracking-wider">Pro</p>
                <p className="text-sm text-white/70">Players</p>
              </div>
            </div>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <span className="text-7xl md:text-8xl font-black text-white leading-none">
                3
              </span>
              <div className="text-white/90">
                <p className="text-lg font-bold uppercase tracking-wider">Years</p>
                <p className="text-sm text-white/70">Of Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Large Social Stat */}
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
                2M+
              </span>
              <p className="text-2xl font-bold text-white uppercase tracking-wider">
                Social Fans
              </p>
            </div>
            
            {/* Tempest Logo Placeholder */}
            <div className="flex items-center justify-center w-32 h-32 lg:w-48 lg:h-48 bg-white/10 rounded-xl">
              <span className="text-6xl lg:text-8xl font-black text-white">T</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
