"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import sponsorsData from "@/data/sponsors.json"

export function SponsorsSection() {
  const allSponsors = sponsorsData

  return (
    <div className="space-y-8">
      {/* Clean horizontal logo bar - MOUZ style */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
      >
        {allSponsors.map((sponsor, index) => (
          <motion.a
            key={sponsor.id}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group relative grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              width={100}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </motion.a>
        ))}
      </motion.div>
    </div>
  )
}
