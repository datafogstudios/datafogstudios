import { useState } from 'react'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    inquiry_type: 'general',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        toast.success('Message sent successfully! We'll get back to you soon.')
        setFormData({
          name: '',
          email: '',
          subject: '',
          inquiry_type: 'general',
          message: '',
        })
      } else {
        toast.error(data.errors?.[0] || 'Failed to send message')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
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
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-white">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Message subject"
            className="w-full rounded border border-white/10 bg-slate-950 px-4 py-2 text-white placeholder-white/40 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-white">Inquiry Type</label>
          <select
            name="inquiry_type"
            value={formData.inquiry_type}
            onChange={handleChange}
            className="w-full rounded border border-white/10 bg-slate-950 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
          >
            <option value="general">General Inquiry</option>
            <option value="partnership">Partnership</option>
            <option value="press">Press</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your inquiry..."
          rows={6}
          className="w-full rounded border border-white/10 bg-slate-950 px-4 py-2 text-white placeholder-white/40 focus:border-blue-500 focus:outline-none"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
