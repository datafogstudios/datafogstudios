import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

type MainLayoutProps = {
  pathname: string
  children: React.ReactNode
}

export function MainLayout({ pathname, children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar pathname={pathname} />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  )
}
