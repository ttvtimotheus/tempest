'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function MerchShowcase() {
  const products = [
    {
      id: 1,
      name: 'Pro Team Jersey 2025',
      price: '$89.99',
      image: '/images/merch/jersey-1.jpg',
    },
    {
      id: 2,
      name: 'Championship Hoodie',
      price: '$69.99',
      image: '/images/merch/hoodie-1.jpg',
    },
    {
      id: 3,
      name: 'Gaming Mousepad XL',
      price: '$39.99',
      image: '/images/merch/mousepad-1.jpg',
    },
    {
      id: 4,
      name: 'Team Cap - Black Edition',
      price: '$29.99',
      image: '/images/merch/cap-1.jpg',
    }
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Left - Featured Collection Header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6 lg:sticky lg:top-32"
      >
        <div className="space-y-4">
          <span className="text-red-500 text-sm font-bold uppercase tracking-wider">
            Shop Now
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            FEATURED
            <br />
            COLLECTION
          </h2>
          <p className="text-gray-400 text-lg max-w-md">
            Rep the team with our latest championship gear. Limited edition items available.
          </p>
        </div>
        
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-500 text-white font-bold group"
          asChild
        >
          <Link href="/merchandise">
            SHOP ALL
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>

      {/* Right - Products Grid */}
      <div className="grid grid-cols-2 gap-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link href={`/merchandise/${product.id}`} className="block space-y-3">
              {/* Product Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-900">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
              
              {/* Product Info */}
              <div className="space-y-1">
                <h4 className="font-semibold text-white group-hover:text-red-500 transition-colors text-sm">
                  {product.name}
                </h4>
                <p className="text-gray-400 font-bold">
                  {product.price}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
