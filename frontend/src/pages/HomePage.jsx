import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, Users, BookOpen, Zap, Target, Award, MessageCircle, Video, Cpu } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code2 className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">DataFogStudios</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium">Features</a>
            <a href="#languages" className="text-gray-600 hover:text-blue-600 font-medium">Languages</a>
            <a href="#community" className="text-gray-600 hover:text-blue-600 font-medium">Community</a>
            <a href="#resources" className="text-gray-600 hover:text-blue-600 font-medium">Resources</a>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6">
                <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                  🚀 Learn to Code Smarter
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Learn Programming from Experts
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Master 10 programming languages with interactive tutorials, real-time code editors, 
                live community support, and industry-standard projects. Start coding in minutes.
              </p>

              <div className="flex flex-col md:flex-row gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  Start Learning Free <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-bold hover:border-blue-600 hover:text-blue-600 transition"
                >
                  Watch Demo
                </motion.button>
              </div>

              <div className="flex gap-12 text-sm">
                <div>
                  <div className="text-3xl font-bold text-orange-600">50K+</div>
                  <div className="text-gray-600">Active Learners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">10</div>
                  <div className="text-gray-600">Languages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-gray-600">Courses</div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-orange-100 rounded-3xl blur-3xl opacity-50"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-orange-500 rounded-3xl p-8 text-white">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Code2 className="w-6 h-6" />
                      <span className="font-mono">python_tips.py</span>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4 font-mono text-sm leading-relaxed">
                      <div className="text-green-300">{'# Learning made simple'}</div>
                      <div><span className="text-blue-300">def</span> <span className="text-yellow-300">master_coding</span>():</div>
                      <div className="ml-4">print(<span className="text-yellow-300">"Start today!"</span>)</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive learning platform with all the tools to master programming
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Interactive Code Editor",
                desc: "Write, test, and debug code in real-time with syntax highlighting",
                color: "from-blue-600 to-blue-400"
              },
              {
                icon: <Video className="w-8 h-8" />,
                title: "Expert Video Tutorials",
                desc: "Learn from industry professionals with step-by-step guidance",
                color: "from-orange-600 to-orange-400"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Live Community Chat",
                desc: "Connect with learners, get instant help, and share projects",
                color: "from-green-600 to-green-400"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Personalized Paths",
                desc: "AI-powered learning recommendations based on your goals",
                color: "from-purple-600 to-purple-400"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Earn Certificates",
                desc: "Get recognized credentials upon course completion",
                color: "from-red-600 to-red-400"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Gamification",
                desc: "Earn XP, badges, and compete on leaderboards",
                color: "from-yellow-600 to-yellow-400"
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-xl p-8 transition"
              >
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Master These Languages</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Learn the most in-demand programming languages with comprehensive courses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { name: 'Python', icon: '🐍', color: 'from-blue-500 to-blue-600' },
              { name: 'JavaScript', icon: '⚡', color: 'from-yellow-500 to-yellow-600' },
              { name: 'Java', icon: '☕', color: 'from-orange-500 to-orange-600' },
              { name: 'C++', icon: '⚙️', color: 'from-red-500 to-red-600' },
              { name: 'Go', icon: '🐹', color: 'from-cyan-500 to-cyan-600' },
              { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-700' },
              { name: 'Rust', icon: '🦀', color: 'from-orange-600 to-orange-700' },
              { name: 'Kotlin', icon: '📱', color: 'from-purple-500 to-purple-600' },
              { name: 'Swift', icon: '🍎', color: 'from-orange-400 to-orange-500' },
              { name: 'PHP', icon: '🔵', color: 'from-indigo-500 to-indigo-600' },
            ].map((lang, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${lang.color} rounded-xl p-6 text-center cursor-pointer hover:shadow-xl transition`}
              >
                <div className="text-4xl mb-3">{lang.icon}</div>
                <h3 className="font-bold text-white">{lang.name}</h3>
                <p className="text-white/80 text-sm mt-2">Expert courses</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Community</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Learn alongside thousands of developers. Ask questions, share projects, 
                collaborate on challenges, and grow together with mentors and peers.
              </p>
              <ul className="space-y-4">
                {[
                  "24/7 live community chat support",
                  "Weekly coding challenges and contests",
                  "Peer-to-peer code reviews",
                  "Industry mentor guidance",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition"
              >
                Join Our Discord
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-8 hidden md:block"
            >
              <div className="space-y-6">
                {[
                  { name: "Alex Johnson", role: "Frontend Developer", text: "Transformed my career in 3 months!" },
                  { name: "Maria Chen", role: "Data Scientist", text: "Best learning platform ever" },
                  { name: "James Wilson", role: "Full Stack Dev", text: "Community is incredibly supportive" },
                ].map((testimonial, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-700 mb-3">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="resources" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Simple, Flexible Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that works best for you</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: "0",
                features: ["5 beginner courses", "Community access", "Basic progress tracking"],
                color: "border-gray-300"
              },
              {
                name: "Pro",
                price: "9.99",
                features: ["All 500+ courses", "Premium support", "Certificate programs", "Code reviews"],
                color: "border-blue-600",
                featured: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Team licensing", "Priority support", "Custom curriculum"],
                color: "border-orange-600"
              },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className={`border-2 ${plan.color} rounded-2xl p-8 ${plan.featured ? 'bg-gradient-to-br from-blue-50 to-orange-50 transform scale-105' : 'bg-white'} transition`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-bold transition ${
                    plan.featured
                      ? 'bg-gradient-to-r from-blue-600 to-orange-600 text-white hover:shadow-lg'
                      : 'border-2 border-gray-300 text-gray-900 hover:border-gray-400'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">Ready to Start Learning?</h2>
            <p className="text-2xl mb-8 text-white/90">Join thousands of developers learning programming today</p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Start Learning Free
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">DataFogStudios</h4>
              <p className="text-sm">Learn programming the smart way</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Learn</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Courses</a></li>
                <li><a href="#" className="hover:text-white">Tutorials</a></li>
                <li><a href="#" className="hover:text-white">Challenges</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Discord</a></li>
                <li><a href="#" className="hover:text-white">Forums</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 DataFogStudios. Founded by Hassan S. Mohamed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
