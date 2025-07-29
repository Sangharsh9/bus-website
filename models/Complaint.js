// models/Complaint.js
const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  busNumber: {
    type: String,
    required: true
  },
  busTitle: {
    type: String,
    required: true
  },
  busDescription: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Complaint', complaintSchema);
