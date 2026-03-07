import { navigate } from '@/lib/router'

export default function NotFound() {
  return (
    <div className="px-5 py-32 md:px-8 text-center">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-white/70 mb-8">Page not found</p>
        <p className="text-white/60 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  )
}
