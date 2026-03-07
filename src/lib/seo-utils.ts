// SEO utilities for structured data and JSON-LD

export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Datafog Studios',
    url: 'https://datafogstudios.com',
    description: 'Premium publishing platform and editorial content for modern media companies',
    logo: 'https://datafogstudios.com/logo.png',
    sameAs: [
      'https://twitter.com/datafogstudios',
      'https://linkedin.com/company/datafog-studios',
    ],
    email: 'hello@datafogstudios.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
  }
}

export function createArticleSchema(article: {
  title: string
  excerpt: string
  author: string
  date: string
  slug: string
  content: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: new Date(article.date).toISOString(),
    url: `https://datafogstudios.com/magazine/${article.slug}`,
    image: 'https://datafogstudios.com/og-image.png',
  }
}

export function createProductSchema(product: {
  name: string
  tagline: string
  description: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    url: `https://datafogstudios.com/products/${product.slug}`,
    brand: {
      '@type': 'Brand',
      name: 'Datafog Studios',
    },
  }
}

export function injectStructuredData(schema: Record<string, any>) {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.innerHTML = JSON.stringify(schema)
  document.head.appendChild(script)
}

export function updateMetaTags(meta: {
  title: string
  description: string
  image?: string
  url?: string
  type?: string
}) {
  // Update title
  document.title = meta.title

  // Update or create description meta tag
  let descMeta = document.querySelector('meta[name="description"]')
  if (!descMeta) {
    descMeta = document.createElement('meta')
    descMeta.setAttribute('name', 'description')
    document.head.appendChild(descMeta)
  }
  descMeta.setAttribute('content', meta.description)

  // Update OG tags
  const ogTags = [
    { property: 'og:title', content: meta.title },
    { property: 'og:description', content: meta.description },
    { property: 'og:url', content: meta.url || window.location.href },
    { property: 'og:type', content: meta.type || 'website' },
  ]

  if (meta.image) {
    ogTags.push({ property: 'og:image', content: meta.image })
  }

  ogTags.forEach(({ property, content }) => {
    let tag = document.querySelector(`meta[property="${property}"]`)
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('property', property)
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
  })

  // Update Twitter tags
  const twitterTags = [
    { name: 'twitter:title', content: meta.title },
    { name: 'twitter:description', content: meta.description },
  ]

  if (meta.image) {
    twitterTags.push({ name: 'twitter:image', content: meta.image })
  }

  twitterTags.forEach(({ name, content }) => {
    let tag = document.querySelector(`meta[name="${name}"]`)
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', name)
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
  })

  // Update canonical link
  let canonicalLink = document.querySelector('link[rel="canonical"]')
  if (!canonicalLink) {
    canonicalLink = document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalLink)
  }
  canonicalLink.setAttribute('href', meta.url || window.location.href)
}
