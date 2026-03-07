import { Suspense, useEffect } from 'react'
import { MainLayout } from '@/layouts/MainLayout'
import { normalizePath, usePathname, matchRoute } from '@/lib/router'
import { routes, routeComponents } from '@/routes/Router'
import { updateMetaTags, injectStructuredData, createOrganizationSchema } from '@/lib/seo-utils'
import NotFound from '@/pages/NotFound'

function App() {
  const pathname = usePathname()
  const normalizedPath = normalizePath(pathname)

  // Find matching route (supports both exact and parameterized matches)
  let currentRoute = routes.find((route) => route.path === normalizedPath)
  if (!currentRoute) {
    // Try pattern matching for dynamic routes
    currentRoute = routes.find((route) => matchRoute(normalizedPath, route.path).matched)
  }

  const Page = currentRoute ? routeComponents[currentRoute.path] : NotFound

  useEffect(() => {
    const title = currentRoute?.meta.title ?? 'Page not found | Datafog Studios'
    const description =
      currentRoute?.meta.description ??
      'The requested page could not be found on the Datafog Studios website.'

    // Update meta tags using SEO utility
    updateMetaTags({
      title,
      description,
      url: window.location.href,
      type: currentRoute ? 'website' : 'error',
    })

    // Scroll to top when route changes
    window.scrollTo(0, 0)
  }, [currentRoute, pathname])

  // Inject organization schema on mount
  useEffect(() => {
    injectStructuredData(createOrganizationSchema())
  }, [])

  // Track page views with simple events
  useEffect(() => {
    // Placeholder for Google Analytics or other tracking
    // In production, add: gtag('config', 'GA_MEASUREMENT_ID', { page_path: pathname });
    console.log('Page view:', pathname)
  }, [pathname])

  return (
    <MainLayout pathname={pathname}>
      <Suspense
        fallback={
          <div className="px-5 py-24 text-center text-sm text-white/55 md:px-8">
            Loading page...
          </div>
        }
      >
        <Page />
      </Suspense>
    </MainLayout>
  )
}

export default App
