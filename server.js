import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Data storage (in production, use a real database)
const DATA_DIR = path.join(__dirname, 'data')

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
}

// Helper functions for file-based storage
function saveToFile(filename, data) {
  const filePath = path.join(DATA_DIR, filename)
  const existing = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf-8')) : []
  existing.push({
    ...data,
    timestamp: new Date().toISOString(),
    id: `${filename.split('.')[0]}_${Date.now()}`,
  })
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2))
  return existing[existing.length - 1]
}

// Validation helpers
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validateWaitlistSignup(data) {
  const errors = []
  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Valid email is required')
  }
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters')
  }
  return errors
}

function validateNewsletterSignup(data) {
  const errors = []
  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Valid email is required')
  }
  if (data.newsletter_type && !['weekly', 'daily', 'monthly'].includes(data.newsletter_type)) {
    errors.push('Invalid newsletter type')
  }
  return errors
}

function validateContactForm(data) {
  const errors = []
  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Valid email is required')
  }
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters')
  }
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters')
  }
  if (!data.subject || data.subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters')
  }
  return errors
}

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Waitlist endpoint
app.post('/api/waitlist', (req, res) => {
  try {
    const errors = validateWaitlistSignup(req.body)
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors })
    }

    const entry = saveToFile('waitlist.json', {
      email: req.body.email.toLowerCase(),
      name: req.body.name.trim(),
      refer_source: req.body.refer_source || 'direct',
      comment: req.body.comment || '',
    })

    // Log to console in development
    console.log('📝 Waitlist signup:', entry.email, entry.name)

    res.status(201).json({
      success: true,
      message: 'Thank you for joining the waitlist!',
      id: entry.id,
    })
  } catch (error) {
    console.error('Waitlist error:', error)
    res.status(500).json({ success: false, error: 'Server error' })
  }
})

// Newsletter endpoint
app.post('/api/newsletter', (req, res) => {
  try {
    const errors = validateNewsletterSignup(req.body)
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors })
    }

    const entry = saveToFile('newsletter.json', {
      email: req.body.email.toLowerCase(),
      newsletter_type: req.body.newsletter_type || 'weekly',
      full_name: req.body.full_name || '',
      preferences: req.body.preferences || [],
    })

    console.log('📬 Newsletter signup:', entry.email, entry.newsletter_type)

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter! Check your email for confirmation.',
      id: entry.id,
    })
  } catch (error) {
    console.error('Newsletter error:', error)
    res.status(500).json({ success: false, error: 'Server error' })
  }
})

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  try {
    const errors = validateContactForm(req.body)
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors })
    }

    const entry = saveToFile('contact.json', {
      email: req.body.email.toLowerCase(),
      name: req.body.name.trim(),
      subject: req.body.subject.trim(),
      message: req.body.message.trim(),
      inquiry_type: req.body.inquiry_type || 'general',
    })

    console.log('💬 Contact form submission from:', entry.email, entry.name)

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      id: entry.id,
    })
  } catch (error) {
    console.error('Contact error:', error)
    res.status(500).json({ success: false, error: 'Server error' })
  }
})

// Get submissions (admin endpoint - in production, add auth)
app.get('/api/submissions/:type', (req, res) => {
  try {
    const { type } = req.params
    const validTypes = ['waitlist', 'newsletter', 'contact']

    if (!validTypes.includes(type)) {
      return res.status(400).json({ error: 'Invalid submission type' })
    }

    const filePath = path.join(DATA_DIR, `${type}.json`)
    if (!fs.existsSync(filePath)) {
      return res.json([])
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    res.json(data)
  } catch (error) {
    console.error('Submissions error:', error)
    res.status(500).json({ error: 'Server error' })
  }
})

// Error handling
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`🚀 Datafog Studios API running on http://localhost:${PORT}`)
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`)
})
