export type ProductDetails = {
  slug: string
  name: string
  tagline: string
  description: string
  category: 'product' | 'platform'
  status: 'available' | 'beta'
  features: Array<{ title: string; description: string }>
  highlights: string[]
  faqs: Array<{ question: string; answer: string }>
  cta: {
    primary: { label: string; href: string }
    secondary?: { label: string; href: string }
  }
  meta: {
    title: string
    description: string
  }
}

export const productDetails: ProductDetails[] = [
  {
    slug: 'datafog-magazine',
    name: 'Datafog Magazine',
    tagline: 'Premium editorial platform for modern media',
    description:
      'High-quality storytelling about technology, publishing systems, and digital innovation. Datafog Magazine is our flagship editorial product.',
    category: 'product',
    status: 'available',
    features: [
      {
        title: 'Feature Stories',
        description: 'In-depth, curated articles with strong editorial perspective',
      },
      {
        title: 'Quality First',
        description: 'We publish less, but publish better. Editorial integrity is paramount.',
      },
      {
        title: 'Discoverable',
        description: 'Rich metadata and tagging make finding relevant content effortless',
      },
      {
        title: 'Newsletter Integration',
        description: 'Subscribe to get weekly articles delivered to your inbox',
      },
    ],
    highlights: [
      'Weekly feature stories published',
      'Freely accessible to all readers',
      'Built on scalable publishing infrastructure',
      'Structured archival system',
    ],
    faqs: [
      {
        question: 'Is there a cost to read Datafog Magazine?',
        answer: 'No. All editorial content is freely available to everyone.',
      },
      {
        question: 'How often do you publish?',
        answer: 'We publish new feature stories weekly, typically on Fridays.',
      },
      {
        question: 'Can I submit guest articles?',
        answer: 'Yes. Contact us at hello@datafogstudios.com with your pitch.',
      },
    ],
    cta: {
      primary: { label: 'Read Latest Stories', href: '/magazine' },
    },
    meta: {
      title: 'Datafog Magazine | Editorial Platform',
      description: 'Premium editorial content on publishing, technology, and digital media',
    },
  },
  {
    slug: 'publishing-platform',
    name: 'Publishing Platform',
    tagline: 'Infrastructure for scalable editorial products',
    description:
      'The operational backbone powering Datafog Magazine. A reusable platform for content pipelines, metadata management, and multi-channel distribution.',
    category: 'platform',
    status: 'available',
    features: [
      {
        title: 'Content Pipelines',
        description: 'Structured workflows from ideation through publication',
      },
      {
        title: 'Automation',
        description: 'Smart systems that handle repetitive tasks without sacrificing quality',
      },
      {
        title: 'Metadata Management',
        description: 'Rich, queryable content metadata for better discoverability',
      },
      {
        title: 'Multi-Product Ready',
        description: 'Designed to scale to new editorial products and initiatives',
      },
    ],
    highlights: [
      'Automation-first workflows',
      'API-first architecture',
      'Built-in analytics',
      'Future-proof design',
    ],
    faqs: [
      {
        question: 'Is this available for other publishers?',
        answer: 'We are exploring partnerships. Contact us to discuss',
      },
      {
        question: 'Can it integrate with existing CMS systems?',
        answer: 'Yes. The platform supports integrations with major CMS solutions',
      },
    ],
    cta: {
      primary: { label: 'Learn More', href: '#' },
    },
    meta: {
      title: 'Publishing Platform | Datafog Studios',
      description: 'Scalable infrastructure for editorial products and content operations',
    },
  },
]

export function getProductBySlug(slug: string): ProductDetails | undefined {
  return productDetails.find((p) => p.slug === slug)
}

export function getAllProducts(): ProductDetails[] {
  return productDetails
}
