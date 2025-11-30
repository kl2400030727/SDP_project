const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use environment variable or fallback to local MongoDB
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lms_database';
    
    console.log('🔗 Connecting to MongoDB...');
    console.log('Connection string:', mongoURI);
    
    // Simplified connection for Mongoose 7.x
    const conn = await mongoose.connect(mongoURI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    console.log('\n💡 Troubleshooting:');
    console.log('1. Make sure MongoDB service is running');
    console.log('2. Try: net start MongoDB');
    console.log('3. Or start MongoDB manually: mongod');
    process.exit(1);
  }
};

module.exports = connectDB;