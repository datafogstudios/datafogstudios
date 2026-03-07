import { useState } from 'react'
import toast from 'react-hot-toast'

interface NewsletterSignupProps {
  className?: string
  variant?: 'inline' | 'card'
}

export default function NewsletterSignup({ className = '', variant = 'inline' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`${apiUrl}/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          full_name: fullName,
          newsletter_type: 'weekly',
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast.success('Successfully subscribed!')
        setEmail('')
        setFullName('')
        setSubscribed(true)
        setTimeout(() => setSubscribed(false), 3000)
      } else {
        toast.error(data.errors?.[0] || 'Failed to subscribe')
      }
    } catch (error) {
      console.error('Newsletter signup error:', error)
      toast.error('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (variant === 'card') {
    return (
      <div className={`rounded-lg border border-white/10 bg-slate-900/50 p-6 ${className}`}>
        <h3 className="mb-2 text-lg font-semibold text-white">Weekly Newsletter</h3>
        <p className="mb-4 text-sm text-white/60">Get the latest stories delivered to your inbox.</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Your name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded border border-white/10 bg-slate-950 px-3 py-2 text-white placeholder-white/40 focus:border-blue-500 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border border-white/10 bg-slate-950 px-3 py-2 text-white placeholder-white/40 focus:border-blue-500 focus:outline-none"
            required
          />
          <button
            type="submit"
            disabled={loading || subscribed}
            className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Subscribing...' : subscribed ? 'Subscribed! 🎉' : 'Subscribe'}
          </button>
        </form>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded border border-white/10 bg-slate-950 px-4 py-2 text-white placeholder-white/40 focus:border-blue-500 focus:outline-none"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded bg-blue-600 px-6 py-2 font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  )
}
