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
      'High-quality storytelling about technology, publishing systems, and digital innovation. Datafog Magazine is our flagship editorial product exploring the intersection of journalism, technology, and business.',
    category: 'product',
    status: 'available',
    features: [
      {
        title: 'Feature Stories',
        description: 'In-depth, curated articles with strong editorial perspective written by industry experts',
      },
      {
        title: 'Quality First',
        description: 'We publish less, but publish better. Editorial integrity is paramount in everything we do.',
      },
      {
        title: 'Smart Discoverability',
        description: 'Rich metadata and intelligent tagging make finding relevant content effortless',
      },
      {
        title: 'Email Integration',
        description: 'Subscribe to weekly digests delivered straight to your inbox with personalized recommendations',
      },
    ],
    highlights: [
      'Weekly feature stories published every Friday',
      'Freely accessible to all readers worldwide',
      'Archive of 100+ in-depth articles',
      'Active community of 50,000+ subscribers',
    ],
    faqs: [
      {
        question: 'Is there a cost to read Datafog Magazine?',
        answer: 'No. All editorial content is completely free and accessible to everyone. We believe quality journalism should be open.',
      },
      {
        question: 'How often do you publish?',
        answer: 'We publish new feature stories weekly on Fridays at 9 AM EST. We also publish occasional breaking analysis throughout the week.',
      },
      {
        question: 'Can I submit guest articles?',
        answer: 'Yes. We welcome pitches from journalists and experts. Contact us at submissions@datafogstudios.com with your story idea.',
      },
      {
        question: 'Do you offer syndication?',
        answer: 'Yes, we offer content syndication for qualified publications. Reach out to partnerships@datafogstudios.com for details.',
      },
    ],
    cta: {
      primary: { label: 'Read Latest Stories', href: '/magazine' },
      secondary: { label: 'Subscribe to Newsletter', href: '#newsletter' },
    },
    meta: {
      title: 'Datafog Magazine | Premium Editorial Content',
      description: 'In-depth editorial content covering publishing technology, digital media, and industry innovation',
    },
  },
  {
    slug: 'publishing-platform',
    name: 'Publishing Platform',
    tagline: 'Enterprise infrastructure for scalable editorial products',
    description:
      'The operational backbone powering Datafog Magazine and modern editorial operations. A comprehensive platform for content pipelines, metadata management, multi-channel distribution, and analytics.',
    category: 'platform',
    status: 'available',
    features: [
      {
        title: 'Content Pipelines',
        description: 'Structured workflows from ideation, drafting, editing, review, to publication with role-based permissions',
      },
      {
        title: 'Workflow Automation',
        description: 'Smart systems that handle routing, notifications, and repetitive tasks without sacrificing quality control',
      },
      {
        title: 'Metadata Management',
        description: 'Rich, queryable content metadata including tags, categories, authors, and relationships for SEO and discoverability',
      },
      {
        title: 'Multi-Channel Publishing',
        description: 'Publish once, distribute everywhere—web, email, RSS, social media, and partner platforms',
      },
    ],
    highlights: [
      'Handle 100,000+ viral articles per month',
      'API-first architecture for custom integrations',
      'Built-in analytics and audience insights',
      'Enterprise-grade security and compliance',
    ],
    faqs: [
      {
        question: 'Is this available for other publishers?',
        answer: 'We are exploring strategic partnerships with forward-thinking publishers. Contact our business team at partnerships@datafogstudios.com',
      },
      {
        question: 'Can it integrate with existing systems?',
        answer: 'Yes. The platform supports REST APIs and webhooks. We integrate with Shopify, Stripe, Mailchimp, WordPress, and many others.',
      },
      {
        question: 'What about data migration?',
        answer: 'We provide full data migration support. Our team handles the technical lift and ensures zero content loss.',
      },
      {
        question: 'Is there a minimum commitment?',
        answer: 'Enterprise plans start at variable pricing based on volume. We offer flexible scaling for growing operations.',
      },
    ],
    cta: {
      primary: { label: 'Request Demo', href: '#contact' },
      secondary: { label: 'View Case Studies', href: '/products' },
    },
    meta: {
      title: 'Publishing Platform | Enterprise Editorial Infrastructure',
      description: 'Scalable platform for content operations, multi-channel publishing, and editorial workflow automation',
    },
  },
  {
    slug: 'analytics-suite',
    name: 'Analytics Suite',
    tagline: 'Audience intelligence for editorial products',
    description:
      'Understand your readers deeply with our comprehensive analytics platform designed specifically for editorial businesses. Track engagement, revenue impact, and content performance across all channels.',
    category: 'platform',
    status: 'available',
    features: [
      {
        title: 'Real-time Dashboards',
        description: 'Live metrics on article performance, traffic sources, and audience behavior with real-time updates',
      },
      {
        title: 'Engagement Tracking',
        description: 'Measure not just pageviews, but meaningful engagement: reading time, scroll depth, and return visits',
      },
      {
        title: 'Revenue Attribution',
        description: 'See which articles drive subscriptions, memberships, and direct sales for better business decisions',
      },
      {
        title: 'Audience Segmentation',
        description: 'Understand your readers by behavior, source, and preferences to optimize content and marketing',
      },
    ],
    highlights: [
      'GDPR and privacy-first data collection',
      'Custom event tracking and funnels',
      'Predictive content recommendations',
      'Cohort analysis and retention tracking',
    ],
    faqs: [
      {
        question: 'How long is analytics data retained?',
        answer: 'All historical data is retained indefinitely. You have lifetime access to your analytics history.',
      },
      {
        question: 'Is analytics data owned by Datafog?',
        answer: 'Your data is completely owned by you. We never analyze it for our own purposes or share it with third parties.',
      },
      {
        question: 'Can I export the data?',
        answer: 'Complete data exports are available in CSV, JSON, and BigQuery formats for advanced analysis.',
      },
      {
        question: 'What integrations are available?',
        answer: 'We integrate with Google Sheets, Looker, Tableau, and all major JavaScript analytics libraries.',
      },
    ],
    cta: {
      primary: { label: 'Start Free Trial', href: '#contact' },
    },
    meta: {
      title: 'Analytics Suite | Editorial Analytics Platform',
      description: 'Advanced analytics and audience intelligence tools built for modern editorial businesses',
    },
  },
  {
    slug: 'email-builder',
    name: 'Email Builder',
    tagline: 'Newsletter creation and distribution made simple',
    description:
      'Create beautiful, engaging newsletters without coding. Pre-built templates, drag-and-drop editor, send automation, and detailed performance tracking all in one intuitive platform.',
    category: 'product',
    status: 'available',
    features: [
      {
        title: 'Drag-and-Drop Editor',
        description: 'No coding required. Visually build emails with professionally designed components and templates',
      },
      {
        title: 'Smart Templates',
        description: 'Pre-built email templates optimized for articles, news briefs, product launches, and promotions',
      },
      {
        title: 'Send Automation',
        description: 'Schedule sends, trigger emails based on user behavior, and run complex campaigns automatically',
      },
      {
        title: 'Detailed Analytics',
        description: 'Track opens, clicks, unsubscribes, and conversions with visual performance reporting',
      },
    ],
    highlights: [
      'Send to 10M+ subscribers without throttling',
      '99.9% delivery rate guaranteed',
      'A/B testing built-in',
      'Subscriber list management with segmentation',
    ],
    faqs: [
      {
        question: 'How much does it cost?',
        answer: 'Pricing starts at $299/month for up to 100,000 subscribers. Enterprise plans available for larger lists.',
      },
      {
        question: 'Can I use my own domain?',
        answer: 'Yes. Custom domain sending, branded unsubscribe pages, and white-label options are available on all plans.',
      },
      {
        question: 'Do you have spam compliance?',
        answer: 'Absolutely. We handle ISP reputation, list hygiene, and full CAN-SPAM compliance automatically.',
      },
      {
        question: 'Can I import from another service?',
        answer: 'Yes. We have one-click imports from Mailchimp, ConvertKit, Substack, and other services.',
      },
    ],
    cta: {
      primary: { label: 'Create Free Account', href: '#contact' },
    },
    meta: {
      title: 'Email Builder | Newsletter Platform',
      description: 'Simple, powerful email marketing platform built for publishers and content creators',
    },
  },
  {
    slug: 'membership-pro',
    name: 'Membership Pro',
    tagline: 'Monetize editorial with membership and subscriptions',
    description:
      'Powerful membership tools to build sustainable revenue. Manage multiple subscription tiers, fan support, and community access all from one unified platform with seamless payment processing.',
    category: 'platform',
    status: 'available',
    features: [
      {
        title: 'Flexible Tiers',
        description: 'Create unlimited subscription tiers with different features, pricing, and content access levels',
      },
      {
        title: 'Paywall Management',
        description: 'Smart paywalls that show metered access, hard paywalls, or dynamic pricing based on user behavior',
      },
      {
        title: 'Payment Processing',
        description: 'Built-in Stripe integration for credit cards, ACH, and local payment methods worldwide',
      },
      {
        title: 'Community Features',
        description: 'Member-only forums, exclusive events, and direct author access to build loyal communities',
      },
    ],
    highlights: [
      'Works with 60+ payment methods',
      'Churn prediction and retention tools',
      'Gift subscriptions and promotional codes',
      'Lifetime member analytics and cohort tracking',
    ],
    faqs: [
      {
        question: 'What payment methods do you support?',
        answer: 'We support credit/debit cards, Apple Pay, Google Pay, ACH transfers, and local methods in 150+ countries.',
      },
      {
        question: 'What is your processing fee?',
        answer: 'Stripe processes payments at 2.9% + $0.30 for cards. We take no additional platform fee for Membership Pro.',
      },
      {
        question: 'Can I offer annual subscriptions?',
        answer: 'Yes. You can offer monthly, annual, or custom billing cycles with discounts and introductory pricing.',
      },
      {
        question: 'Do you handle refunds?',
        answer: 'You maintain full control over refunds. We provide tools to process them easily and track them for accounting.',
      },
    ],
    cta: {
      primary: { label: 'Schedule Demo', href: '#contact' },
    },
    meta: {
      title: 'Membership Pro | Subscription Platform',
      description: 'Flexible membership and subscription tools to monetize editorial content and build sustainable revenue',
    },
  },
]

export function getProductBySlug(slug: string): ProductDetails | undefined {
  return productDetails.find((p) => p.slug === slug)
}

export function getAllProducts(): ProductDetails[] {
  return productDetails
}
