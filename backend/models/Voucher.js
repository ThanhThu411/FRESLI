// models/Voucher.js
const mongoose = require('mongoose');

const voucherSchema = new mongoose.Schema({
  'Tên': {
    type: String,
    required: true
  },
  'Nội dung': {
    type: String,
    required: true
  }
}, {
  timestamps: true // Tự động thêm createdAt và updatedAt
});

const Voucher = mongoose.model('Voucher', voucherSchema);

module.exports = Voucher;
