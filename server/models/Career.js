const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  department: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'],
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: [String],
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Career', careerSchema);
