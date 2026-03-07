export default function About() {
  const team = [
    {
      name: 'Hassan Warsame',
      title: 'Founder & Editor-in-Chief',
      bio: 'Former technology editor at a top-tier publication. Passionate about editorial excellence and publishing infrastructure.',
    },
    {
      name: 'Sarah Chen',
      title: 'VP of Products',
      bio: 'Platform builder with 10+ years in editorial tech. Led product at two venture-backed publishing platforms.',
    },
    {
      name: 'David Kim',
      title: 'VP of Engineering',
      bio: 'Full-stack engineer focused on publishing infrastructure. Previously built systems at major news outlets.',
    },
    {
      name: 'Jessica Martinez',
      title: 'Head of Growth',
      bio: 'Growth marketer and former publisher. Organic growth expert with focus on direct audience relationships.',
    },
  ]

  return (
    <div className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Datafog Studios</h1>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <p className="text-lg">
            Datafog Studios is a diversified publishing company combining world-class editorial, engaged audiences, and sophisticated underlying technology. We publish Datafog Magazine, build infrastructure for publishers, and provide strategic guidance to media companies.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p>
              We believe that publishing infrastructure and editorial quality are equally important. Great platforms enable great editorial. Great editorial needs thoughtful platforms. Our mission is to build both.
            </p>
            <p className="mt-3">
              We're creating a model for sustainable, independent publishing in the digital age—one that prioritizes reader value, editorial excellence, and long-term thinking over short-term metrics gaming.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
            <ul className="space-y-3">
              <li>
                <strong className="text-white">Publish Datafog Magazine</strong> - Premium editorial content on publishing, technology, and digital media. Weekly editions with 50,000+ subscribers.
              </li>
              <li>
                <strong className="text-white">Build Publishing Infrastructure</strong> - Scalable systems for content pipelines, metadata management, and multi-channel distribution.
              </li>
              <li>
                <strong className="text-white">Provide Analytics & Monetization Tools</strong> - Audience intelligence, membership platforms, and newsletter distribution for publishers.
              </li>
              <li>
                <strong className="text-white">Strategic Advisory</strong> - Help media companies think through technology, business model, and editorial strategy decisions.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
            <ul className="space-y-3">
              <li>
                <strong className="text-white">Quality First</strong> - We publish less, but publish better. Excellence doesn't scale.
              </li>
              <li>
                <strong className="text-white">Infrastructure Matters</strong> - Design systems thoughtfully. Technology amplifies human judgment.
              </li>
              <li>
                <strong className="text-white">Transparency</strong> - We share what we learn openly. The industry rises when knowledge is distributed.
              </li>
              <li>
                <strong className="text-white">Sustainability</strong> - Building for the long term, not short-term metric gains. Real value compounds.
              </li>
              <li>
                <strong className="text-white">Direct Relationships</strong> - Own your audience relationships. Email, not algorithms, is the future.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Team</h2>
            <div className="grid gap-6">
              {team.map((member) => (
                <div key={member.name} className="border-l-2 border-blue-500 pl-4">
                  <h3 className="text-white font-semibold">{member.name}</h3>
                  <p className="text-blue-400 text-sm mb-2">{member.title}</p>
                  <p className="text-white/70 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why We Built This</h2>
            <p>
              We started Datafog Studios because we believe the publishing industry needs different approaches to product, technology, and business model. Most publishing tools are built by people who don't understand journalism. Most editorial companies don't think strategically about technology.
            </p>
            <p className="mt-3">
              We're building something different. A company that understands both sides, and brings that integrated perspective to everything we do.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Get In Touch</h2>
            <p>
              Questions? We'd love to hear from you. Email us at <strong>hello@datafogstudios.com</strong> or press <strong>partnerships@datafogstudios.com</strong> for business inquiries.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm">
              Datafog Studios is an independent publishing company independent of venture capital. © 2026 Datafog Studios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
