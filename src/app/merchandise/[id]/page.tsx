import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ShoppingBag, Truck, Shield, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import productsData from '@/data/products.json'

export async function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id.toString(),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = productsData.find(p => p.id.toString() === id)
  if (!product) return { title: 'Product Not Found' }
  return {
    title: `${product.name} - Tempest eSports Merch`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = productsData.find(p => p.id.toString() === id)

  if (!product) {
    notFound()
  }

  const relatedProducts = productsData
    .filter(p => p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" size="sm" asChild className="text-gray-400 hover:text-white mb-8">
          <Link href="/merchandise">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Merch
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-900">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.featured && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-cyan-600 text-white">NEW RELEASE</Badge>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-cyan-500 text-sm font-bold uppercase tracking-wider">
                {product.category}
              </p>
              <h1 className="text-4xl font-black text-white">{product.name}</h1>
              <p className="text-3xl font-bold text-white">{product.price}</p>
              <p className="text-gray-400 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {product.sizes.length > 1 && (
              <div className="space-y-3">
                <p className="text-sm font-bold text-white uppercase">Size</p>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border border-gray-700 rounded-lg text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-colors font-medium"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button
              size="lg"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-6 text-lg"
              disabled={!product.inStock}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              {product.inStock ? 'ADD TO CART' : 'SOLD OUT'}
            </Button>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-800">
              <div className="text-center space-y-2">
                <Truck className="h-6 w-6 text-cyan-500 mx-auto" />
                <p className="text-xs text-gray-400">Free Shipping over $50</p>
              </div>
              <div className="text-center space-y-2">
                <Shield className="h-6 w-6 text-cyan-500 mx-auto" />
                <p className="text-xs text-gray-400">Official Licensed Gear</p>
              </div>
              <div className="text-center space-y-2">
                <RotateCcw className="h-6 w-6 text-cyan-500 mx-auto" />
                <p className="text-xs text-gray-400">30-Day Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="py-16 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white mb-8">YOU MIGHT ALSO LIKE</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((related) => (
                <Link key={related.id} href={`/merchandise/${related.id}`} className="group block">
                  <div className="space-y-3">
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-900">
                      <Image
                        src={related.image}
                        alt={related.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-white group-hover:text-cyan-500 transition-colors">
                        {related.name}
                      </h3>
                      <p className="text-gray-400 font-bold">{related.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
