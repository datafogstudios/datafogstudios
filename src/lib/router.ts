import type { ComponentType } from 'react'
import { useEffect, useState } from 'react'

export type RouteMeta = {
  title: string
  description: string
  ogImage?: string
  ogType?: string
}

export type RouteDefinition = {
  path: string
  loader: () => Promise<{ default: ComponentType }>
  meta: RouteMeta
}

/**
 * Extracts parameters from a URL path based on a pattern
 * Example: extractParams('/products/datafog-magazine', '/products/:slug') => { slug: 'datafog-magazine' }
 */
export function extractParams(pathname: string, pattern: string): Record<string, string> | null {
  const patternParts = pattern.split('/').filter(Boolean)
  const pathParts = pathname.split('/').filter(Boolean)

  if (patternParts.length !== pathParts.length) {
    return null
  }

  const params: Record<string, string> = {}

  for (let i = 0; i < patternParts.length; i++) {
    const part = patternParts[i]
    const value = pathParts[i]

    if (part.startsWith(':')) {
      const paramName = part.slice(1)
      params[paramName] = value
    } else if (part !== value) {
      return null
    }
  }

  return params
}

/**
 * Checks if a route pattern matches a pathname
 * Supports both exact matches and parameterized patterns like /products/:slug
 */
export function matchRoute(
  pathname: string,
  pattern: string,
): { matched: boolean; params: Record<string, string> } {
  if (pattern === pathname) {
    return { matched: true, params: {} }
  }

  const params = extractParams(pathname, pattern)
  if (params !== null) {
    return { matched: true, params }
  }

  return { matched: false, params: {} }
}

export function normalizePath(pathname: string) {
  if (!pathname || pathname === '/') {
    return '/'
  }

  const normalized = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  return normalized || '/'
}

export function usePathname() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    const handleLocationChange = () => setPathname(normalizePath(window.location.pathname))

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('locationchange', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('locationchange', handleLocationChange)
    }
  }, [])

  return pathname
}

/**
 * Hook to get route parameters from the current path and a pattern
 * Usage: const { slug } = useRouteParams('/products/:slug')
 */
export function useRouteParams(pattern: string): Record<string, string> {
  const pathname = usePathname()
  const { params } = matchRoute(normalizePath(pathname), pattern)
  return params
}

export function navigate(path: string) {
  const next = normalizePath(path)

  if (normalizePath(window.location.pathname) === next) {
    return
  }

  window.history.pushState({}, '', next)
  window.dispatchEvent(new Event('locationchange'))
}
