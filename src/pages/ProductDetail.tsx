import { navigate, useRouteParams } from '@/lib/router'
import { getProductBySlug } from '@/lib/products-data'
import NotFound from './NotFound'

export default function ProductDetail() {
  const { slug } = useRouteParams('/products/:slug')
  const product = slug ? getProductBySlug(slug) : undefined

  if (!product) {
    return <NotFound />
  }

  return (
    <div className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/products')}
            className="text-sm text-blue-400 hover:text-blue-300 mb-4"
          >
            ← Back to Products
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-white/70">{product.tagline}</p>
        </div>

        {/* Description */}
        <div className="mb-16 p-6 rounded-lg bg-white/5 border border-white/10">
          <p className="text-base leading-relaxed text-white/80">{product.description}</p>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {product.features.map((feature) => (
              <div key={feature.title} className="p-5 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Highlights</h2>
          <ul className="space-y-3">
            {product.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="text-blue-400 flex-shrink-0">•</span>
                <span className="text-white/80">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQs */}
        {product.faqs.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {product.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="p-4 rounded-lg bg-white/5 border border-white/10 cursor-pointer"
                >
                  <summary className="font-semibold text-white">{faq.question}</summary>
                  <p className="mt-3 text-sm text-white/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="flex gap-4 pt-8 border-t border-white/10">
          <button
            onClick={() => navigate(product.cta.primary.href)}
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            {product.cta.primary.label}
          </button>
          {product.cta.secondary && (
            <button
              onClick={() => navigate(product.cta.secondary!.href)}
              className="px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition"
            >
              {product.cta.secondary.label}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
