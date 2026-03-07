export default function About() {
  return (
    <div className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Datafog Studios</h1>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <p>
            Datafog Studios is a publishing platform and editorial company focused on creating
            high-quality content and infrastructure for modern media.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p>
              We believe that publishing infrastructure and editorial quality are equally important.
              Great platforms enable great editorial. Great editorial needs thoughtful platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
            <ul className="space-y-3">
              <li>• Publish Datafog Magazine - premium editorial content on publishing and technology</li>
              <li>• Build publishing infrastructure - scalable systems for content pipelines</li>
              <li>• Consult on editorial strategy - helping media companies scale thoughtfully</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
            <ul className="space-y-3">
              <li>
                <strong>Quality First</strong> - We publish less, but publish better
              </li>
              <li>
                <strong>Infrastructure Matters</strong> - Systems enable editorial excellence
              </li>
              <li>
                <strong>Transparency</strong> - We share what we learn openly
              </li>
              <li>
                <strong>Sustainability</strong> - Building for the long term, not short-term gains
              </li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm">
              Datafog Studios is an independent publishing company. © 2026 Datafog Studios.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
