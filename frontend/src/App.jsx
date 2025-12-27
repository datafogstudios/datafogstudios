import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// Pages (to be created)
import HomePage from './pages/HomePage'
import CoursesPage from './pages/CoursesPage'
import ChatPage from './pages/ChatPage'
import DonatePage from './pages/DonatePage'
import AdminDashboard from './pages/AdminDashboard'
import GamificationPage from './pages/GamificationPage'
import AssessmentPage from './pages/AssessmentPage'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      <Header />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/gamification" element={<GamificationPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
