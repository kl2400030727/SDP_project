const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

console.log('✅ Auth routes loaded!');

// In-memory user storage for testing
let users = [];

// Test endpoint
router.get('/test', (req, res) => {
  res.json({
    success: true,
    message: 'Auth routes are working!'
  });
});

// Working Register endpoint
router.post('/register', async (req, res) => {
  try {
    console.log('📝 Registration request received');
    console.log('Request body:', req.body);
    
    const { studentId, email, password, fullName, department, semester, phone } = req.body;

    // Validate required fields
    if (!studentId || !email || !password || !fullName || !department || !semester || !phone) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Check if user already exists (in memory)
    const existingUser = users.find(u => u.studentId === studentId || u.email === email);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this email or student ID'
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      studentId,
      email,
      password: hashedPassword,
      fullName,
      department,
      semester,
      phone
    };

    users.push(newUser);
    console.log('✅ User registered successfully:', studentId);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token: 'jwt-token-' + Date.now(),
      user: {
        id: newUser.id,
        studentId: newUser.studentId,
        fullName: newUser.fullName,
        email: newUser.email,
        department: newUser.department,
        semester: newUser.semester
      }
    });

  } catch (error) {
    console.error('❌ Registration error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error: ' + error.message
    });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { studentId, password } = req.body;

    if (!studentId || !password) {
      return res.status(400).json({
        success: false,
        message: 'Student ID and password are required'
      });
    }

    // Find user
    const user = users.find(u => u.studentId === studentId);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid student ID or password'
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Invalid student ID or password'
      });
    }

    res.json({
      success: true,
      message: 'Login successful',
      token: 'jwt-token-' + Date.now(),
      user: {
        id: user.id,
        studentId: user.studentId,
        fullName: user.fullName,
        email: user.email,
        department: user.department,
        semester: user.semester
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login'
    });
  }
});

// Get all users (for testing)
router.get('/users', (req, res) => {
  res.json({
    success: true,
    users: users.map(u => ({
      studentId: u.studentId,
      fullName: u.fullName,
      email: u.email
    }))
  });
});

module.exports = router;