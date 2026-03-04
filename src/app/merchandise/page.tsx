import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import productsData from '@/data/products.json'

export const metadata = {
  title: 'Merchandise - Tempest eSports',
  description: 'Official Tempest eSports merchandise. Jerseys, hoodies, accessories and more.',
}

export default function MerchandisePage() {
  const categories = [...new Set(productsData.map(p => p.category))]

  return (
    <div className="min-h-screen bg-black">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <ShoppingBag className="h-10 w-10 text-red-500" />
            <h1 className="text-5xl md:text-7xl font-black text-white">
              MERCH
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl">
            Rep the team with official Tempest eSports gear. Premium quality, 
            designed for fans and gamers.
          </p>
        </div>
      </section>

      {categories.map((category) => {
        const categoryProducts = productsData.filter(p => p.category === category)
        return (
          <section key={category} className="pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-black text-white mb-8 uppercase">{category}</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/merchandise/${product.id}`}
                    className="group block"
                  >
                    <div className="space-y-4">
                      <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-900">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                        {product.featured && (
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-red-600 text-white text-xs">NEW</Badge>
                          </div>
                        )}
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <span className="text-white font-bold">SOLD OUT</span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-white group-hover:text-red-500 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-400 font-bold text-lg">{product.price}</p>
                        {product.sizes.length > 1 && (
                          <p className="text-gray-600 text-xs">
                            {product.sizes.join(' / ')}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-black text-white">
            WANT CUSTOM <span className="text-red-500">TEAM GEAR</span>?
          </h2>
          <p className="text-gray-400 text-lg">
            Looking for bulk orders or custom merchandise for your team or event? 
            Get in touch with our merchandise team.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            CONTACT US
          </Link>
        </div>
      </section>
    </div>
  )
}
