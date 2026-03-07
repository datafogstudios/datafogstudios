export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black/50 py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-bold text-white mb-4">Datafog Studios</h3>
            <p className="text-sm text-white/60">Premium publishing platform and products.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Products</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="/products" className="hover:text-white">All Products</a></li>
              <li><a href="/magazine" className="hover:text-white">Magazine</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Connect</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>&copy; {currentYear} Datafog Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
