import { navigate } from '@/lib/router'
import { getAllProducts } from '@/lib/products-data'
import { getAllArticles } from '@/lib/magazine-data'
import NewsletterSignup from '@/components/NewsletterSignup'
import WaitlistSignup from '@/components/WaitlistSignup'

export default function Home() {
  const products = getAllProducts().slice(0, 3)
  const recentArticles = getAllArticles().slice(0, 3)

  return (
    <div className="px-5 md:px-8">
      {/* Hero */}
      <section className="py-20 md:py-32 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Publishing Platform
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Thoughtful editorial infrastructure for modern media companies. Premium tools for publishing, audience engagement, and monetization.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => navigate('/products')}
              className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Explore Products
            </button>
            <button
              onClick={() => navigate('/magazine')}
              className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition"
            >
              Read Magazine
            </button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <button
              onClick={() => navigate('/products')}
              className="text-blue-400 hover:text-blue-300 text-sm font-semibold"
            >
              View all →
            </button>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.slug}
                onClick={() => navigate(`/products/${product.slug}`)}
                className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer transition"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-900/50 text-blue-300 border border-blue-800">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-white/70 mb-4 text-sm">{product.tagline}</p>
                <button className="text-blue-400 text-sm font-semibold">Learn more →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Latest from Datafog Magazine</h2>
            <button
              onClick={() => navigate('/magazine')}
              className="text-blue-400 hover:text-blue-300 text-sm font-semibold"
            >
              View all →
            </button>
          </div>

          <div className="space-y-6">
            {recentArticles.map((article) => (
              <div
                key={article.slug}
                onClick={() => navigate(`/magazine/${article.slug}`)}
                className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer transition"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <span className="text-blue-400 font-medium">{article.category}</span>
                    <span>•</span>
                    <span>{article.readingTime} min read</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 hover:text-blue-400 transition">
                  {article.title}
                </h3>

                <p className="text-white/70">{article.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30 p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-white/70 mb-8">
              Get weekly stories on publishing, technology, and digital media delivered to your inbox.
            </p>
            <NewsletterSignup className="max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-white/70 mb-8">
            Join our community of forward-thinking publishers and media companies. Get early access to new features.
          </p>
          <div className="rounded-xl bg-white/5 border border-white/10 p-8 max-w-md mx-auto">
            <WaitlistSignup />
          </div>
        </div>
      </section>
    </div>
  )
}
