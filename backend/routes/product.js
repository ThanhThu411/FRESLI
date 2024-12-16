const express = require('express');
const Product = require('../models/Product');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');

// Thêm sản phẩm
router.post('/add', protect, admin, async (req, res) => {
    const { 'Tên sản phẩm': name, 'Mô tả': description, 'Công dụng': benefits, 'Giá': price, 'Phân loại': category, 'Dung tích': volume } = req.body;
  
    if (!name || !description || !benefits || !price || !category || !volume) {
      return res.status(400).json({ message: 'Tất cả các trường đều phải được cung cấp.' });
    }
  
    try {
      const newProduct = new Product({
        'Tên sản phẩm': name,
        'Mô tả': description,
        'Công dụng': benefits,
        'Giá': price,
        'Phân loại': category,
        'Dung tích': volume,
      });
  
      await newProduct.save();
      res.status(201).json({ message: 'Sản phẩm đã được thêm thành công', product: newProduct });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Lỗi khi thêm sản phẩm', error: error.message });
    }
});

router.patch('/update/:id', protect, admin, async (req, res) => {
    const { id } = req.params; // Lấy ID sản phẩm từ URL
    const { 'Tên sản phẩm': name, 'Mô tả': description, 'Công dụng': benefits, 'Giá': price, 'Phân loại': category, 'Dung tích': volume } = req.body;

    // Kiểm tra nếu không có trường nào trong body thì trả về lỗi
    if (!name && !description && !benefits && !price && !category && !volume) {
        return res.status(400).json({ message: 'Vui lòng cung cấp ít nhất một trường để cập nhật.' });
    }

    try {
        // Tìm sản phẩm theo ID
        const product = await Product.findById(id);

        // Nếu sản phẩm không tồn tại, trả về lỗi
        if (!product) {
            return res.status(404).json({ message: 'Sản phẩm không tìm thấy.' });
        }

        // Cập nhật các trường
        if (name) product['Tên sản phẩm'] = name;
        if (description) product['Mô tả'] = description;
        if (benefits) product['Công dụng'] = benefits;
        if (price) product['Giá'] = price;
        if (category) product['Phân loại'] = category;
        if (volume) product['Dung tích'] = volume;

        // Lưu sản phẩm đã cập nhật
        const updatedProduct = await product.save();

        // Trả về thông tin sản phẩm đã cập nhật
        res.status(200).json({ message: 'Sản phẩm đã được cập nhật thành công.', updatedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Có lỗi xảy ra khi cập nhật sản phẩm.' });
    }
});

router.delete('/delete/:id',protect,admin, async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findByIdAndDelete(id);
  
      if (!product) {
        return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
      }
  
      res.status(200).json({ message: 'Sản phẩm đã được xóa thành công' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Có lỗi xảy ra khi xóa sản phẩm.' });
    }
});

router.get('/view/:id', async (req, res) => {
    const { id } = req.params;  
    try {
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
      }
      res.status(200).json({ product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Có lỗi xảy ra khi lấy thông tin sản phẩm.' });
    }
});

  // Lấy tất cả sản phẩm
router.get('/list', async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json({ products });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Có lỗi xảy ra khi lấy danh sách sản phẩm.' });
    }
});

router.get('/top-selling-products', async (req, res) => {
    let n = parseInt(req.query.n);  
  
    if (!n || n <= 0) {
        n = 10;
    }
  
    try {
      const products = await Product.find()
        .sort({ 'Số lượng đã bán': -1 })  // Sắp xếp giảm dần theo 'Số lượng đã bán'
        .limit(n);  // Giới hạn số lượng kết quả trả về theo tham số n
  
      res.status(200).json(products);  // Trả về danh sách sản phẩm bán chạy nhất
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Có lỗi khi truy vấn dữ liệu sản phẩm.' });
    }
});



module.exports = router;
