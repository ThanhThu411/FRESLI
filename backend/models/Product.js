const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  'Tên sản phẩm': { type: String, required: true },
  'Mô tả': { type: String, required: true },
  'Công dụng': { type: String, required: true },
  'Giá': { type: Number, required: true },
  'Phân loại': { type: [String], required: true }, // Dạng mảng để lưu các loại phân loại sản phẩm
  'Dung tích': { type: String, required: true },
  'Số lượng đã bán': {type: Number, default: 0}
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;