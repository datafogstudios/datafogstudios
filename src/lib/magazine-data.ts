export type MagazineArticle = {
  slug: string
  title: string
  category: string
  date: string
  author: string
  excerpt: string
  content: string
  readingTime: number
  featured?: boolean
}

export const magazineArticles: MagazineArticle[] = [
  {
    slug: 'building-publishing-infrastructure',
    title: 'Building Publishing Infrastructure That Scales',
    category: 'Publishing',
    date: 'March 7, 2026',
    author: 'Hassan Warsame',
    excerpt:
      'How thoughtful infrastructure enables editorial teams to move faster and publish better.',
    readingTime: 8,
    featured: true,
    content: `Publishing infrastructure is the invisible backbone of great editorial products. When infrastructure is well-designed, editors and writers can focus on what they do best: creating great content.

## Why Infrastructure Matters

Too many publishers treat infrastructure as an afterthought. They focus on the front-end experience, the design, the brand—all important things. But beneath the surface lies a complex system of workflows, data management, and distribution channels.

When this system is poorly designed, it creates friction. Writers are slowed down. Editors spend time on logistics instead of editing. Readers can't find what they're looking for.

## The Three Pillars

Great publishing infrastructure rests on three pillars:

1. **Content pipelines** - Clear, structured workflows from idea to publication
2. **Metadata systems** - Rich data that describes and connects your content
3. **Distribution networks** - Getting content to readers wherever they are

Each of these requires intentional design and ongoing refinement.

## Building for the Future

Infrastructure decisions made today shape what you can do tomorrow. Choose poorly, and you'll find yourself rebuilding in two years. Choose well, and your infrastructure becomes a competitive advantage.

The best infrastructure feels like it doesn't exist. Writers and editors don't think about it. They just write, edit, and publish. The system handles the rest.`,
  },
  {
    slug: 'future-of-editorial-technology',
    title: 'The Future of Editorial Technology is Open',
    category: 'Technology',
    date: 'March 1, 2026',
    author: 'Hassan Warsame',
    excerpt:
      'Why proprietary editorial platforms are losing. Open, modular systems are the future.',
    readingTime: 10,
    featured: true,
    content: `Editorial technology has been dominated by a few large vendors. Proprietary platforms lock publishers into specific workflows and limit flexibility.

## The Shift is Happening

Progressive publishers are moving away from monolithic CMSs toward modular, composable systems:

- Headless CMS for content management
- Static site generators for publishing
- Modern JavaScript frameworks for frontend experiences
- Best-of-breed tools for analytics, email, commerce

This is the future. And publishers who recognize this early will have a significant advantage.

## What This Means for You

If you're evaluating editorial technology today, look for:

1. **Open standards** - Can you export your content easily?
2. **API-first design** - Can you integrate with other best-of-breed tools?
3. **No vendor lock-in** - Are you building on established platforms and frameworks?
4. **Community** - Is there an active community around the tools?

The editorial technology landscape is shifting. The winners will be those who embrace openness and modularity.`,
  },
  {
    slug: 'newsletter-strategies-that-work',
    title: 'Newsletter Strategies That Work in 2026',
    category: 'Growth',
    date: 'February 22, 2026',
    author: 'Hassan Warsame',
    excerpt: 'What we learned from building a newsletter program from zero to thousands of subscribers.',
    readingTime: 6,
    featured: false,
    content: `Building a newsletter program requires more than just asking people to sign up. Here's what actually works.

## Segment Your Audience

Not all subscribers are the same. Some are casually interested. Others are deeply engaged. Your communications should reflect this.

Use segmentation to send:

- **Welcome series** for new subscribers
- **Engagement tracks** for active readers
- **Re-engagement campaigns** for lapsed subscribers
- **VIP content** for your most engaged audience

## Consistency is Key

Pick a schedule and stick to it. Whether it's weekly, bi-weekly, or monthly, consistency is what builds trust.

Your subscribers come to expect your newsletter at a specific time. Don't break that expectation.

## Focus on Value

Every email should have a clear purpose. Are you educating? Entertaining? Promoting? Asking for feedback?

Make it clear to your subscribers why they should open this email and what they'll get out of it.

The newsletters that work are the ones that respect the reader's time and deliver real value.`,
  },
]

export function getArticleBySlug(slug: string): MagazineArticle | undefined {
  return magazineArticles.find((a) => a.slug === slug)
}

export function getAllArticles(): MagazineArticle[] {
  return magazineArticles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export function getFeaturedArticles(): MagazineArticle[] {
  return getAllArticles().filter((a) => a.featured)
}

export function getCategories(): string[] {
  const categories = new Set(magazineArticles.map((a) => a.category))
  return Array.from(categories).sort()
}
