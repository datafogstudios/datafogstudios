import { navigate } from '@/lib/router'
import { getAllProducts } from '@/lib/products-data'

export default function Products() {
  const products = getAllProducts()

  return (
    <div className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Products</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Publishing products and infrastructure designed for modern editorial teams
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.slug}
              onClick={() => navigate(`/products/${product.slug}`)}
              className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] cursor-pointer transition"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-xs font-semibold">
                  {product.category === 'product' ? 'Featured Product' : 'Platform'}
                </span>
              </div>

              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-sm text-white/60 mb-4">{product.tagline}</p>
              <p className="text-base text-white/70 mb-6 line-clamp-3">{product.description}</p>

              <div className="space-y-2 mb-6">
                {product.highlights.slice(0, 3).map((highlight) => (
                  <div key={highlight} className="text-sm text-white/60 flex gap-2">
                    <span>•</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
