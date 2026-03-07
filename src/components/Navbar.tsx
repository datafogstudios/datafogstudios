import { navigate } from '@/lib/router'

export function Navbar({ pathname }: { pathname: string }) {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Magazine', path: '/magazine' },
    { label: 'About', path: '/about' },
  ]

  return (
    <nav className="border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 py-4 md:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="text-xl font-bold text-white hover:text-blue-400 transition"
          >
            Datafog
          </button>

          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`text-sm transition ${
                  pathname === item.path
                    ? 'text-blue-400 font-semibold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
