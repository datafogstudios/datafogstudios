import { lazy } from 'react'
import type { RouteDefinition } from '@/lib/router'

export const routes: RouteDefinition[] = [
  {
    path: '/',
    loader: () => import('@/pages/Home'),
    meta: {
      title: 'Datafog Studios | Premium Publishing Platform',
      description: 'Datafog Studios is a modern publishing studio focused on premium editorial products, AI-assisted workflows, and scalable media infrastructure.',
    },
  },
  {
    path: '/products',
    loader: () => import('@/pages/Products'),
    meta: {
      title: 'Products | Datafog Studios',
      description: 'Explore our flagship products and publishing infrastructure',
    },
  },
  {
    path: '/products/:slug',
    loader: () => import('@/pages/ProductDetail'),
    meta: {
      title: 'Product | Datafog Studios',
      description: 'Explore this Datafog Studios product in detail.',
    },
  },
  {
    path: '/magazine',
    loader: () => import('@/pages/Magazine'),
    meta: {
      title: 'Magazine | Datafog Studios',
      description: 'Premium editorial content on publishing systems, media technology, and digital storytelling.',
    },
  },
  {
    path: '/magazine/:slug',
    loader: () => import('@/pages/MagazineArticle'),
    meta: {
      title: 'Article | Datafog Studios',
      description: 'Read this article from Datafog Magazine.',
    },
  },
  {
    path: '/about',
    loader: () => import('@/pages/About'),
    meta: {
      title: 'About | Datafog Studios',
      description: 'Learn about Datafog Studios, our mission, and vision.',
    },
  },
  {
    path: '/contact',
    loader: () => import('@/pages/Contact'),
    meta: {
      title: 'Contact | Datafog Studios',
      description: 'Get in touch with Datafog Studios. We\'d love to hear from you.',
    },
  },
]

export const routeComponents = Object.fromEntries(
  routes.map((route) => [route.path, lazy(route.loader)]),
)
