'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingBag, Star, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function MerchShowcase() {
  const products = [
    {
      id: 1,
      name: 'Pro Team Jersey 2025',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/images/merch/jersey-1.jpg',
      category: 'Apparel',
      badge: 'New',
      rating: 4.8,
      reviews: 234,
      bestseller: true
    },
    {
      id: 2,
      name: 'Championship Hoodie',
      price: '$69.99',
      image: '/images/merch/hoodie-1.jpg',
      category: 'Apparel',
      rating: 4.9,
      reviews: 189
    },
    {
      id: 3,
      name: 'Gaming Mousepad XL',
      price: '$39.99',
      image: '/images/merch/mousepad-1.jpg',
      category: 'Accessories',
      badge: 'Limited',
      rating: 4.7,
      reviews: 456
    },
    {
      id: 4,
      name: 'Team Cap - Black Edition',
      price: '$29.99',
      image: '/images/merch/cap-1.jpg',
      category: 'Accessories',
      rating: 4.6,
      reviews: 123
    }
  ]

  return (
    <div className="space-y-12">
      {/* Featured Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative h-64 md:h-80 rounded-xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600" />
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/merch/banner.jpg')" }}
        />
        
        <div className="relative h-full flex items-center justify-center text-center px-8">
          <div className="max-w-2xl space-y-4">
            <h3 className="text-4xl md:text-5xl font-black text-white">
              EXCLUSIVE MERCH DROP
            </h3>
            <p className="text-lg md:text-xl text-white/90">
              Limited Edition Championship Collection - Available Now
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-bold px-8 py-3 transform hover:scale-105 transition-all"
              asChild
            >
              <Link href="/merchandise">
                <ShoppingBag className="mr-2 h-5 w-5" />
                SHOP NOW
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300"
          >
            <Link href={`/merchandise/${product.id}`}>
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-800">
                <Image
                  src={product.image || '/images/merch-placeholder.jpg'}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.badge && (
                    <span className={`px-3 py-1 text-xs font-bold text-white rounded ${
                      product.badge === 'New' ? 'bg-green-600' : 
                      product.badge === 'Limited' ? 'bg-purple-600' : 'bg-red-600'
                    }`}>
                      {product.badge}
                    </span>
                  )}
                  {product.bestseller && (
                    <span className="px-3 py-1 bg-yellow-600 text-black text-xs font-bold rounded flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      Bestseller
                    </span>
                  )}
                </div>
                
                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-bold">
                    Quick View
                  </Button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4 space-y-3">
                {/* Category */}
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {product.category}
                </span>
                
                {/* Name */}
                <h4 className="font-bold text-white group-hover:text-red-500 transition-colors">
                  {product.name}
                </h4>
                
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    ({product.reviews})
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                
                {/* Add to Cart Button */}
                <Button
                  className="w-full bg-gray-800 hover:bg-red-600 text-white font-semibold transition-all"
                  size="sm"
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      {/* Shop Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
      >
        <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
          <p className="text-2xl font-black text-red-500">500+</p>
          <p className="text-sm text-gray-400">Products</p>
        </div>
        <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
          <p className="text-2xl font-black text-red-500">50K+</p>
          <p className="text-sm text-gray-400">Happy Customers</p>
        </div>
        <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
          <p className="text-2xl font-black text-red-500">4.8★</p>
          <p className="text-sm text-gray-400">Average Rating</p>
        </div>
        <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
          <p className="text-2xl font-black text-red-500">24/7</p>
          <p className="text-sm text-gray-400">Support</p>
        </div>
      </motion.div>
    </div>
  )
}
