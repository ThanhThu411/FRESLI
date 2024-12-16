// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderDate: {
    type: Date,
    default: Date.now,  // Lấy thời điểm hiện tại khi tạo đơn
  },
  products: [{
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },  // Giá của sản phẩm
  }],
  totalPrice: { type: Number, required: true },  // Tổng tiền đơn hàng
  shippingAddress: { type: String, required: true },
  userId: {type: String},
  status: 
  { type: String, 
    enum: ['Pending', 'Processing', 'Delivering', 'Delivered', 'Cancelled'],
    default: 'Pending' },  // Trạng thái mặc định là 'pending'
});

module.exports = mongoose.model('Order', orderSchema);
