# DataFogStudios - Backend

Node.js + Express API server for DataFogStudios.

## 📁 Project Structure

```
src/
├── routes/         # API endpoint definitions
├── controllers/    # Business logic
├── models/         # Database models
├── middleware/     # Express middleware
├── services/       # External service integrations
├── utils/          # Helper functions
├── config/         # Configuration files
└── server.js       # Entry point
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

The API will be available at `http://localhost:5000`

## 📦 Dependencies

- Express.js (web framework)
- PostgreSQL (relational database)
- MongoDB (document database)
- Socket.io (real-time communication)
- JWT (authentication)
- Stripe (payments)
- Redis (caching)

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh token

### Courses
- `GET /api/courses` - List all courses
- `GET /api/courses/:id` - Get course details
- `POST /api/courses` - Create course (admin)

### Chat (WebSocket)
- `WS /ws/chat/:userId` - Connect to chat

### Payments
- `POST /api/payments/create-intent` - Create payment intent
- `POST /api/payments/confirm` - Confirm payment

## 🔐 Security

- HTTPS enforced in production
- JWT token-based authentication
- Rate limiting on all endpoints
- Input validation with Joi
- CORS configured
- Helmet.js security headers

## 🧪 Testing

```bash
npm test
```

## 📊 Database

### PostgreSQL (Users, Courses, Progress)

```sql
-- Key tables
- users
- courses
- user_progress
- certificates
- transactions
```

### MongoDB (Chat, Real-Time Data)

```javascript
// Key collections
- messages
- groups
- notifications
```

## 🔄 Real-Time Features

Socket.io enables:
- Direct messaging
- Group chat
- Typing indicators
- Online status
- Notifications

## 💳 Payment Integration

- **Stripe**: Cards, PayPal, Apple Pay
- **Coinbase Commerce**: Cryptocurrency

## 📜 License

MIT - See LICENSE file

## 👨‍💼 About

Founded by Hassan S. Mohamed

---

For more information, see the main [README.md](../README.md)
