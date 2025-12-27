import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import winston from 'winston';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: { origin: process.env.FRONTEND_URL || 'http://localhost:5173' }
});

// Logger setup
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

// Security middleware
app.use(helmet());
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    founder: 'Hassan S. Mohamed',
    platform: 'DataFogStudios'
  });
});

// API Routes (to be implemented)
app.use('/api/auth', require('./routes/auth.js').default);
app.use('/api/courses', require('./routes/courses.js').default);
app.use('/api/users', require('./routes/users.js').default);
app.use('/api/payments', require('./routes/payments.js').default);
app.use('/api/admin', require('./routes/admin.js').default);

// Socket.io connection handler
io.on('connection', (socket) => {
  logger.info(`User connected: ${socket.id}`);
  
  socket.on('join_room', (data) => {
    socket.join(data.roomId);
    socket.emit('message', {
      content: 'You joined the room',
      sender: 'System',
      timestamp: new Date()
    });
  });
  
  socket.on('send_message', async (data) => {
    try {
      // Save message and broadcast
      io.to(data.roomId).emit('receive_message', {
        ...data,
        timestamp: new Date()
      });
    } catch (error) {
      logger.error('Message error:', error);
      socket.emit('error', { message: 'Failed to send message' });
    }
  });
  
  socket.on('typing', (data) => {
    socket.broadcast.emit('user_typing', {
      userId: data.userId,
      userName: data.userName
    });
  });
  
  socket.on('disconnect', () => {
    logger.info(`User disconnected: ${socket.id}`);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error('Error:', err);
  
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production' 
      ? 'Internal Server Error' 
      : err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Server startup
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  logger.info(`
    ╔════════════════════════════════════╗
    ║    DataFogStudios API Server      ║
    ║    Founded by Hassan S. Mohamed   ║
    ╚════════════════════════════════════╝
    
    🚀 Server running on port ${PORT}
    📍 Environment: ${process.env.NODE_ENV || 'development'}
    🔒 CORS enabled
    ⚠️  Rate limiting active
    
    API: http://localhost:${PORT}
    Health: http://localhost:${PORT}/health
  `);
});

export default server;
