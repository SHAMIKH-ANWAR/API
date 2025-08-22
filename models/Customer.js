const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  zipCodes: {
    type: [Number],
    required: true
  }
}, {
  timestamps: true
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;