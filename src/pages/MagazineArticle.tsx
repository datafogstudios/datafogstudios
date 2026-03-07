import { navigate, useRouteParams } from '@/lib/router'
import { getArticleBySlug, getAllArticles } from '@/lib/magazine-data'
import NotFound from './NotFound'

export default function MagazineArticle() {
  const { slug } = useRouteParams('/magazine/:slug')
  const article = slug ? getArticleBySlug(slug) : undefined

  if (!article) {
    return <NotFound />
  }

  const relatedArticles = getAllArticles()
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3)

  return (
    <>
      {/* Article Header */}
      <div className="px-5 py-12 md:px-8 border-b border-white/10">
        <div className="mx-auto max-w-3xl">
          <button
            onClick={() => navigate('/magazine')}
            className="text-sm text-blue-400 hover:text-blue-300 mb-6"
          >
            ← Back to Magazine
          </button>

          <div className="mb-6 flex items-center gap-3 text-xs text-white/60">
            <span className="font-semibold uppercase">{article.category}</span>
            <span>•</span>
            <span>{article.readingTime} min read</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>

          <div className="flex items-center gap-3 text-sm">
            <div className="w-10 h-10 rounded-full bg-white/10" />
            <div>
              <p className="font-semibold text-white">{article.author}</p>
              <p className="text-white/60">{article.date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="px-5 py-12 md:px-8">
        <div className="mx-auto max-w-2xl">
          <article className="prose prose-invert max-w-none space-y-6 text-white/80">
            {article.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              if (paragraph.startsWith('-')) {
                return (
                  <ul key={i} className="space-y-2 list-disc list-inside">
                    {paragraph.split('\n').map((item, j) => (
                      <li key={j} className="text-base leading-relaxed">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={i} className="text-base leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </article>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="px-5 py-12 md:px-8 border-t border-white/10">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedArticles.map((related) => (
                <div
                  key={related.slug}
                  onClick={() => navigate(`/magazine/${related.slug}`)}
                  className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer transition"
                >
                  <div className="text-xs text-white/60 mb-2">{related.category}</div>
                  <h3 className="font-semibold mb-2 line-clamp-2 hover:text-blue-400 transition">
                    {related.title}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-2">{related.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
