import { useState } from 'react'
import toast from 'react-hot-toast'

export default function WaitlistSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    refer_source: 'direct',
  })
  const [loading, setLoading] = useState(false)
  const [joined, setJoined] = useState(false)

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`${apiUrl}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        toast.success('Successfully joined the waitlist!')
        setFormData({ name: '', email: '', refer_source: 'direct' })
        setJoined(true)
        setTimeout(() => setJoined(false), 3000)
      } else {
        toast.error(data.errors?.[0] || 'Failed to join waitlist')
      }
    } catch (error) {
      console.error('Waitlist signup error:', error)
      toast.error('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-white">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full rounded border border-white/10 bg-slate-950 px-4 py-2 text-white placeholder-white/40 focus:border-blue-500 focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full rounded border border-white/10 bg-slate-950 px-4 py-2 text-white placeholder-white/40 focus:border-blue-500 focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white">How did you hear about us?</label>
        <select
          name="refer_source"
          value={formData.refer_source}
          onChange={handleChange}
          className="w-full rounded border border-white/10 bg-slate-950 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
        >
          <option value="direct">Direct</option>
          <option value="twitter">Twitter</option>
          <option value="linkedin">LinkedIn</option>
          <option value="referral">Referral</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading || joined}
        className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Joining...' : joined ? 'Joined! 🎉' : 'Join Waitlist'}
      </button>
    </form>
  )
}
