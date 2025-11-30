const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Direct MongoDB connection
const MONGODB_URI = 'mongodb://localhost:27017/lms_database';

console.log('🚀 Starting server...');
console.log('🔗 Connecting to MongoDB...');

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB Connected Successfully!');
    console.log('📊 Database:', mongoose.connection.name);
    console.log('📍 Host:', mongoose.connection.host);
  })
  .catch((error) => {
    console.error('❌ MongoDB Connection Failed:', error.message);
  });

// Debug route loading
console.log('🔄 Loading routes...');

// Import and use routes with better error handling
try {
  const authRoutesPath = path.join(__dirname, 'routes', 'auth.js');
  console.log('Looking for auth routes at:', authRoutesPath);
  
  const authRoutes = require(authRoutesPath);
  console.log('✅ Auth routes imported successfully');
  
  app.use('/api/auth', authRoutes);
  console.log('✅ Auth routes mounted at /api/auth');
  
} catch (error) {
  console.error('❌ Error loading auth routes:', error.message);
  console.error('Error details:', error);
}

// Basic health check
app.get('/api/health', (req, res) => {
  const dbConnected = mongoose.connection.readyState === 1;
  res.json({ 
    success: true, 
    message: 'LMS Server is running',
    database: dbConnected ? 'Connected' : 'Disconnected',
    timestamp: new Date().toISOString()
  });
});

// Test if basic routing works
app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'Basic routing is working!',
    endpoint: '/api/test'
  });
});

// Direct test endpoint in server.js
app.get('/api/auth/test-direct', (req, res) => {
  res.json({
    success: true,
    message: 'Direct auth test endpoint working!',
    endpoint: '/api/auth/test-direct'
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`\n🎉 Server running on port ${PORT}`);
  console.log(`📍 Health: http://localhost:${PORT}/api/health`);
  console.log(`📍 Test: http://localhost:${PORT}/api/test`);
  console.log(`📍 Direct Auth Test: http://localhost:${PORT}/api/auth/test-direct`);
  console.log(`📍 Auth Test: http://localhost:${PORT}/api/auth/test`);
  console.log(`\n📋 Available endpoints:`);
  console.log(`   GET  /api/health`);
  console.log(`   GET  /api/test`);
  console.log(`   GET  /api/auth/test-direct`);
  console.log(`   GET  /api/auth/test`);
  console.log(`   POST /api/auth/register`);
  console.log(`   POST /api/auth/login`);
});