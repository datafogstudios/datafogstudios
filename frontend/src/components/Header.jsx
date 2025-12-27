import React from 'react'
import { Link } from 'react-router-dom'
import { Code2 } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white hover:text-blue-400">
          <Code2 className="w-8 h-8" />
          <span>DataFogStudios</span>
        </Link>
        
        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
          <Link to="/courses" className="text-gray-300 hover:text-white transition">Courses</Link>
          <Link to="/chat" className="text-gray-300 hover:text-white transition">Chat</Link>
          <Link to="/gamification" className="text-gray-300 hover:text-white transition">Gamification</Link>
          <Link to="/donate" className="text-gray-300 hover:text-white transition">Donate</Link>
        </div>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg">
          Sign In
        </button>
      </nav>
    </header>
  )
}
