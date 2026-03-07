import { navigate } from '@/lib/router'
import { getAllArticles, getCategories } from '@/lib/magazine-data'

export default function Magazine() {
  const articles = getAllArticles()
  const categories = getCategories()

  return (
    <div className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Datafog Magazine</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Thoughtful editorial on publishing, technology, and digital media
          </p>
        </div>

        {/* Articles */}
        <div className="mb-16 space-y-6">
          {articles.map((article) => (
            <div
              key={article.slug}
              onClick={() => navigate(`/magazine/${article.slug}`)}
              className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer transition"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3 text-xs text-white/60">
                  <span className="font-semibold">{article.category}</span>
                  <span>•</span>
                  <span>{article.readingTime} min read</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-2 hover:text-blue-400 transition">
                {article.title}
              </h2>

              <p className="text-white/70 mb-4 line-clamp-2">{article.excerpt}</p>

              <div className="flex items-center justify-between text-xs text-white/60">
                <span>{article.date}</span>
                <span className="text-blue-400">Read →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="pt-12 border-t border-white/10">
            <h3 className="font-semibold mb-6">Categories</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 rounded-full border border-white/20 text-sm text-white/70 hover:border-white/40 hover:text-white transition"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
