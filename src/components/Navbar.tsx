import { navigate } from '@/lib/router'
import { useTheme } from '@/lib/theme-context'
import { Moon, Sun } from 'lucide-react'

export function Navbar({ pathname }: { pathname: string }) {
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Magazine', path: '/magazine' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
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

            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
