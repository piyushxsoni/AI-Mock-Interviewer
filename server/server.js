require('dotenv').config();

const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Routes
const authRoutes = require('./routes/auth');
const interviewRoutes = require('./routes/interview');
const reportRoutes = require('./routes/report');

// --------------------------------------------------
// Connect to MongoDB
// --------------------------------------------------
connectDB();

// --------------------------------------------------
// Express App
// --------------------------------------------------
const app = express();
const server = http.createServer(app);

// --------------------------------------------------
// Environment Variables
// --------------------------------------------------
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// --------------------------------------------------
// Socket.IO Setup
// --------------------------------------------------
const io = new Server(server, {
  cors: {
    origin: CLIENT_URL,
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// --------------------------------------------------
// Middleware
// --------------------------------------------------
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// --------------------------------------------------
// Root Route
// --------------------------------------------------
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'AI Mock Interview API is running 🚀',
  });
});

// --------------------------------------------------
// Health Check
// --------------------------------------------------
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'OK',
    message: 'AI Interview API is healthy 🚀',
    timestamp: new Date().toISOString(),
  });
});

// --------------------------------------------------
// API Routes
// --------------------------------------------------
app.use('/api/auth', authRoutes);
app.use('/api/interview', interviewRoutes);
app.use('/api/report', reportRoutes);

// --------------------------------------------------
// Socket.IO Events
// --------------------------------------------------
io.on('connection', (socket) => {
  console.log(`🔌 Socket connected: ${socket.id}`);

  // Join interview room
  socket.on('join-interview', (interviewId) => {
    if (!interviewId) {
      return;
    }

    socket.join(interviewId);

    console.log(
      `👤 Socket ${socket.id} joined interview room: ${interviewId}`
    );
  });

  // Typing indicator
  socket.on('typing', ({ interviewId, isTyping }) => {
    if (!interviewId) {
      return;
    }

    socket.to(interviewId).emit('user-typing', isTyping);
  });

  // Disconnect
  socket.on('disconnect', () => {
    console.log(`🔌 Socket disconnected: ${socket.id}`);
  });
});

// --------------------------------------------------
// Error Handler
// IMPORTANT: Keep this before the 404 handler
// --------------------------------------------------
app.use(errorHandler);

// --------------------------------------------------
// 404 Handler
// --------------------------------------------------
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
});

// --------------------------------------------------
// Start Server
// --------------------------------------------------
server.listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('========================================');
  console.log('🚀 AI Mock Interview Server Started');
  console.log('========================================');
  console.log(`🌐 Port: ${PORT}`);
  console.log(`📱 Client URL: ${CLIENT_URL}`);
  console.log('🗄️ MongoDB: Connecting...');
  console.log('🤖 Groq AI: Configured');
  console.log('========================================');
  console.log('');
});

// --------------------------------------------------
// Export
// --------------------------------------------------
module.exports = {
  app,
  io,
};
