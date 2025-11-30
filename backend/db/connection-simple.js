const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = 'mongodb://localhost:27017/lms_database';
    console.log('Connecting to MongoDB at:', mongoURI);
    
    await mongoose.connect(mongoURI);
    console.log('✅ MongoDB Connected Successfully!');
    
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;