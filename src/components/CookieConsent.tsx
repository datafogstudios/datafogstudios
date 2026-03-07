import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsented = localStorage.getItem('cookie-consent')
    if (!hasConsented) {
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowConsent(false)
  }

  const handleDeny = () => {
    localStorage.setItem('cookie-consent', 'denied')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg border border-white/20 bg-slate-900/95 backdrop-blur p-4 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-white mb-2">Cookie Preferences</h3>
              <p className="text-sm text-white/70">
                We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. By clicking "Accept", you consent to the use of cookies. You can change your preferences anytime.
              </p>
            </div>
            <button
              onClick={handleDeny}
              className="mt-1"
              aria-label="Close cookie consent"
            >
              <X size={20} className="text-white/50 hover:text-white" />
            </button>
          </div>

          <div className="flex gap-3 mt-4 flex-wrap">
            <button
              onClick={handleAccept}
              className="px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
              Accept All
            </button>
            <button
              onClick={handleDeny}
              className="px-6 py-2 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition"
            >
              Decline
            </button>
            <a
              href="#privacy"
              className="px-6 py-2 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
