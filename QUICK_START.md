# DataFogStudios - Quick Reference Guide

## 🚀 Quick Start Commands

### Option 1: Local Development (Recommended for Development)

```bash
# Navigate to project
cd C:\Users\Admin\DataFogStudios

# Terminal 1 - Start Backend
cd backend
npm install
npm run dev

# Terminal 2 - Start Frontend
cd frontend
npm install
npm run dev
```

**Access:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

### Option 2: Docker (Recommended for Production-like Testing)

```bash
# From project root
cd C:\Users\Admin\DataFogStudios

# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

---

## 📁 Important Files

| File | Purpose | Location |
|------|---------|----------|
| README.md | Project overview | Root |
| SETUP.md | Detailed setup guide | Root |
| PRODUCTION_ROADMAP.md | 26-week plan | docs/ |
| PROJECT_STATUS.md | Current status & checklist | Root |
| .env.example | Environment template | Root |
| docker-compose.yml | Container orchestration | Root |

---

## 🔧 Development Commands

### Backend

```bash
cd backend

# Start development server
npm run dev

# Start production server
npm start

# Run tests
npm test

# Lint code
npm run lint

# Database migrations
npm run migrate
```

### Frontend

```bash
cd frontend

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Lint code
npm run lint
```

---

## 🗄️ Database

### PostgreSQL

```bash
# Create database
createdb datafogstudios

# Connect to database
psql datafogstudios

# Run migrations
npm run migrate
```

### MongoDB

```bash
# Start MongoDB (if installed locally)
mongod

# Connect via CLI
mongosh

# Database name: datafogstudios
```

### Redis

```bash
# Start Redis (if installed locally)
redis-server

# Connect via CLI
redis-cli
```

---

## 🔐 API Testing

### Get Health Status

```bash
curl http://localhost:5000/health
```

Expected Response:
```json
{
  "status": "OK",
  "timestamp": "2025-12-27T...",
  "founder": "Hassan S. Mohamed",
  "platform": "DataFogStudios"
}
```

### Register User (Once Implemented)

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePass123",
    "fullName": "John Doe"
  }'
```

### Login User (Once Implemented)

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePass123"
  }'
```

---

## 📚 Folder Structure at a Glance

```
DataFogStudios/
├── frontend/               React application
│   ├── src/
│   │   ├── components/     Reusable UI components
│   │   ├── pages/          Page components
│   │   └── services/       API & Socket integration
│   ├── package.json
│   └── vite.config.js
│
├── backend/                Node.js API
│   ├── src/
│   │   ├── routes/         API endpoints
│   │   ├── controllers/    Business logic
│   │   └── server.js       Main app file
│   └── package.json
│
├── docs/                   Documentation
│   └── PRODUCTION_ROADMAP.md
│
├── README.md               Main documentation
├── SETUP.md                Setup guide
├── PROJECT_STATUS.md       Status & checklist
├── .env.example            Environment template
└── docker-compose.yml      Container config
```

---

## 🌐 Frontend Pages

| Page | Route | Status |
|------|-------|--------|
| Home | / | ✅ Created |
| Courses | /courses | ✅ Placeholder |
| Chat | /chat | ✅ Placeholder |
| Donate | /donate | ✅ Placeholder |
| Admin | /admin | ✅ Placeholder |

---

## 🔌 API Routes (To Implement)

```
Auth:
  POST /api/auth/register
  POST /api/auth/login
  POST /api/auth/refresh

Courses:
  GET  /api/courses
  POST /api/courses (admin)
  PUT  /api/courses/:id (admin)

Users:
  GET  /api/users/:id
  PUT  /api/users/:id

Payments:
  POST /api/payments/create-intent
  POST /api/payments/confirm

Admin:
  GET  /api/admin/users
  GET  /api/admin/analytics

WebSocket:
  WS   /ws/chat/:userId
```

---

## 📦 Tech Stack Quick Reference

### Frontend
- React 19 - UI Framework
- Vite 5 - Build Tool
- Tailwind CSS - Styling
- Framer Motion - Animations
- Socket.io Client - Real-time Chat
- React Router - Navigation

### Backend
- Node.js 18 - Runtime
- Express - Web Framework
- PostgreSQL - Main Database
- MongoDB - Chat Storage
- Socket.io - WebSocket Server
- JWT - Authentication
- Stripe - Payment Processing

---

## 🔍 Debugging Tips

### Frontend Issues

**Blank page?**
- Check console (F12)
- Verify backend is running
- Check environment variables in `.env`

**API errors?**
- Check backend is running on port 5000
- Verify `VITE_API_URL` in `.env`
- Check CORS settings

**Styling not working?**
- Clear browser cache
- Restart dev server
- Check Tailwind config

### Backend Issues

**Port already in use?**
```bash
lsof -i :5000
kill -9 <PID>
```

**Database connection failed?**
```bash
# Check PostgreSQL
pg_isready

# Check MongoDB
mongosh

# Check Redis
redis-cli ping
```

**Dependencies not installed?**
```bash
npm install
npm audit fix
```

---

## 📈 Performance Optimization

### Frontend

```bash
# Analyze bundle size
npm run build
# Check with Lighthouse (DevTools)
```

### Backend

```bash
# Monitor performance
# Enable in .env: DEBUG=*
npm run dev
```

---

## 🚢 Deployment Checklist

- [ ] Update all environment variables
- [ ] Run full test suite
- [ ] Build frontend: `npm run build`
- [ ] Check for console errors
- [ ] Test all API endpoints
- [ ] Verify database backups
- [ ] Set up monitoring
- [ ] Configure SSL/HTTPS
- [ ] Test on staging first
- [ ] Deploy to production

---

## 💡 Pro Tips

1. **Hot Reload Development**
   - Frontend automatically reloads on file changes
   - Backend requires manual restart (use `npm run dev` for watch mode)

2. **Use Docker for Consistency**
   - Ensures same environment across team
   - Easy to reset with `docker-compose down -v`

3. **Environment Variables**
   - Never commit `.env` file
   - Use `.env.example` as template
   - Update for each environment

4. **Testing First**
   - Write tests before implementation
   - Aim for 80%+ coverage
   - Use `npm test`

5. **Commit Messages**
   - Use conventional commits: `feat:`, `fix:`, `docs:`
   - Keep commits small and focused

---

## 📞 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port 5000 in use | `lsof -i :5000` then kill process |
| CORS errors | Check backend CORS config |
| Database won't connect | Verify credentials in `.env` |
| Dependencies missing | Run `npm install` |
| Hot reload not working | Restart dev server |
| Socket.io not connecting | Check WebSocket proxy in vite.config.js |

---

## 🎯 Next Immediate Steps

1. **Read Documentation**
   - [ ] README.md
   - [ ] SETUP.md
   - [ ] PRODUCTION_ROADMAP.md

2. **Setup Environment**
   - [ ] Install Node.js 18+
   - [ ] Install PostgreSQL
   - [ ] Install MongoDB
   - [ ] Configure .env files

3. **Start Development**
   - [ ] Start backend: `npm run dev`
   - [ ] Start frontend: `npm run dev`
   - [ ] Open http://localhost:5173

4. **Begin Implementation**
   - [ ] Follow PRODUCTION_ROADMAP.md
   - [ ] Start with authentication
   - [ ] Implement courses
   - [ ] Add chat system
   - [ ] Build payments

---

## 📚 Additional Resources

- **Node.js Docs**: https://nodejs.org/docs/
- **React Docs**: https://react.dev/
- **Express Docs**: https://expressjs.com/
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Socket.io Docs**: https://socket.io/docs/

---

## 🎉 Success Indicators

You'll know everything is working when:

✅ Frontend loads at http://localhost:5173  
✅ Backend responds at http://localhost:5000/health  
✅ No console errors in browser  
✅ No errors in backend terminal  
✅ Homepage displays with styling  
✅ Navigation links work  

---

**DataFogStudios** - Where coding dreams become reality.

Founded by Hassan S. Mohamed.

---

*Last Updated: December 27, 2025*
