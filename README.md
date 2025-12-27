# DataFogStudios - Learn Programming, Build Community

**Founded by Hassan S. Mohamed**

A comprehensive, full-featured learning platform designed to teach the top 10 programming languages through interactive courses, real-time community chat, and gamified learning. Built with modern technologies, beautiful UI, and accessibility at its core.

## 📋 Project Overview

DataFogStudios is an innovative online learning platform featuring:

- **Top 10 Programming Languages**: Python, JavaScript, Java, C++, Go, TypeScript, Rust, Kotlin, Swift, PHP
- **Integrated Chat System**: Real-time messaging (Facebook-style) + Email threading (Gmail-style)
- **Community Groups**: Create and manage learning communities
- **Monetization**:
  - 📜 Completion Certificates
  - 📺 Non-intrusive Ads (Google AdSense)
  - 💝 Donations (Multiple payment methods)
- **Beautiful UI**: Responsive, modern design with Tailwind CSS
- **Accessibility**: WCAG 2.1 AA compliant

## 🛠️ Tech Stack

### Frontend
- **React 19** - Component-based UI
- **Vite** - Fast build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Socket.io Client** - Real-time chat
- **Redux** - State management
- **Axios** - HTTP client

### Backend
- **Node.js + Express.js** - API server
- **PostgreSQL** - Relational database (users, courses, progress)
- **MongoDB** - NoSQL database (chat messages, real-time data)
- **Socket.io** - WebSocket-based real-time messaging
- **JWT** - Authentication & authorization
- **Stripe API** - Payment processing (certificates, donations)
- **Coinbase Commerce** - Cryptocurrency donations
- **Redis** - Caching layer

### DevOps & Tools
- **Docker** - Containerization
- **GitHub Actions** - CI/CD pipeline
- **Sentry** - Error monitoring & tracking
- **AWS/Vercel** - Hosting & deployment

## 📁 Project Structure

```
DataFogStudios/
├── frontend/                  # React application
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── pages/             # Page components
│   │   ├── stores/            # Redux slices
│   │   ├── services/          # API & Socket.io integration
│   │   └── styles/            # Global styles
│   ├── package.json
│   └── vite.config.js
├── backend/                   # Express.js API
│   ├── src/
│   │   ├── routes/            # API routes
│   │   ├── controllers/       # Business logic
│   │   ├── models/            # Database models
│   │   ├── middleware/        # Custom middleware
│   │   ├── services/          # External services (Stripe, etc)
│   │   └── utils/             # Helper functions
│   ├── package.json
│   └── server.js
├── docs/                      # Documentation & roadmap
├── .gitignore
├── .env.example
└── docker-compose.yml

```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- MongoDB 5+
- Docker & Docker Compose (optional)

### Installation

1. **Clone and Setup**
```bash
cd DataFogStudios
npm install  # Root dependencies

# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

2. **Environment Variables**
```bash
# Create .env files in frontend/ and backend/
cp .env.example .env
```

3. **Database Setup**
```bash
# PostgreSQL
createdb datafogstudios

# Run migrations (from backend folder)
npm run migrate
```

4. **Start Development**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

5. **Access the Platform**
- Frontend: http://localhost:5173
- API: http://localhost:5000
- Admin: http://localhost:5173/admin

## 📚 Features

### Learning Paths
- Comprehensive courses for 10 programming languages
- Interactive code editors & terminals
- Video tutorials & documentation
- Quizzes & progress tracking
- Real-time code execution sandbox

### Chat & Community
- Direct messaging (Gmail-style threading)
- Group chats for communities
- Rich text editor with emoji support
- File sharing & code snippets
- Notification system

### Monetization
- **Certificates**: Issue digital certificates upon course completion
- **Ads**: Non-intrusive Google AdSense integration
- **Donations**: Multiple payment methods
  - Credit/Debit Cards (Stripe)
  - PayPal
  - Apple Pay / Google Pay
  - Cryptocurrency (Bitcoin, Ethereum via Coinbase)
  - Bank Transfers

### Admin Dashboard
- User management
- Course analytics
- Revenue tracking
- Content moderation
- System health monitoring

## 🔐 Security

- JWT authentication with refresh tokens
- HTTPS encryption
- Input validation & sanitization
- SQL injection prevention
- CSRF protection
- Rate limiting on API endpoints
- Secure password hashing (bcrypt)

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Screen reader optimized
- Keyboard navigation
- High contrast mode
- Alt text for images
- Semantic HTML

## 📊 Roadmap

### Phase 1: MVP (Weeks 1-8)
- [ ] Core course infrastructure
- [ ] User authentication
- [ ] Basic chat system
- [ ] Certificates

### Phase 2: Enhanced Features (Weeks 9-16)
- [ ] Advanced chat with groups
- [ ] Gamification system
- [ ] Donations integration
- [ ] Admin dashboard

### Phase 3: Scale & Optimize (Weeks 17-24)
- [ ] Performance optimization
- [ ] Mobile app (React Native)
- [ ] Advanced analytics
- [ ] Marketing tools

### Phase 4: Launch & Growth (Weeks 25+)
- [ ] Production deployment
- [ ] Marketing campaigns
- [ ] User acquisition
- [ ] Continuous improvement

## 💰 Monetization Strategy

1. **Certificates**: $49 - $199 per certificate
2. **Ads Revenue**: ~$1000-5000/month (estimated)
3. **Donations**: Variable (target $500+/month)

**Revenue Model**: ~$15,000-30,000 annually at scale

## 👨‍💼 About Hassan S. Mohamed

Founder and lead architect of DataFogStudios. Passionate about making quality programming education accessible to everyone. Hassan brings expertise in full-stack development, system design, and product management.

## 📄 License

MIT License - Feel free to use, modify, and distribute.

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./docs/CONTRIBUTING.md).

## 📧 Support

- Email: support@datafogstudios.com
- Discord: [Community Server]
- GitHub Issues: Report bugs and request features

---

**DataFogStudios** - Where coding dreams become reality.

Built with ❤️ by Hassan S. Mohamed and the community.
