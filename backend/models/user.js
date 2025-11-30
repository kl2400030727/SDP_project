const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  studentId: { 
    type: String, 
    required: [true, 'Student ID is required'],
    unique: true,
    trim: true
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true
  },
  password: { 
    type: String, 
    required: [true, 'Password is required'],
    minlength: 6
  },
  fullName: { 
    type: String, 
    required: [true, 'Full name is required'],
    trim: true
  },
  department: { 
    type: String, 
    required: [true, 'Department is required'],
    trim: true
  },
  semester: { 
    type: Number, 
    required: [true, 'Semester is required'],
    min: 1,
    max: 8
  },
  phone: { 
    type: String, 
    required: [true, 'Phone number is required'],
    trim: true
  }
}, { 
  timestamps: true 
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);