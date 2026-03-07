import { Suspense } from 'react'
import { MainLayout } from '@/layouts/MainLayout'
import { normalizePath, usePathname, matchRoute } from '@/lib/router'
import { routes, routeComponents } from '@/routes/Router'
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

  React.useEffect(() => {
    const title = currentRoute?.meta.title ?? 'Page not found | Datafog Studios'
    const description =
      currentRoute?.meta.description ??
      'The requested page could not be found on the Datafog Studios website.'

    document.title = title

    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta')
      descriptionMeta.setAttribute('name', 'description')
      document.head.appendChild(descriptionMeta)
    }
    descriptionMeta.setAttribute('content', description)
  }, [currentRoute])

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
