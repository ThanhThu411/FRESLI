// routes/voucher.js
const express = require('express');
const Voucher = require('../models/Voucher');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add', protect, admin, async (req, res) => {
  const { 'Tên': name, 'Nội dung': content } = req.body;
  if (!name || !content) {
    return res.status(400).json({ message: 'Tên và Nội dung là bắt buộc' });
  }
  try {
    const newVoucher = new Voucher({ 'Tên': name, 'Nội dung': content });
    await newVoucher.save();
    res.status(201).json({ message: 'Voucher đã được thêm thành công', voucher: newVoucher });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm voucher', error: error.message });
  }
});

router.patch('/update/:id', protect, admin, async (req, res) => {
    const { id } = req.params;
    const { 'Tên': name, 'Nội dung': content } = req.body;
  
    if (!name && !content) {
      return res.status(400).json({ message: 'Cần ít nhất một trường để cập nhật.' });
    }
    try {
      const voucher = await Voucher.findById(id);
      if (!voucher) {
        return res.status(404).json({ message: 'Voucher không tìm thấy' });
      }
      // Cập nhật các trường nếu có giá trị mới
      if (name) voucher['Tên'] = name;
      if (content) voucher['Nội dung'] = content;
  
      await voucher.save();
      res.status(200).json({ message: 'Voucher đã được cập nhật thành công', voucher });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Đã xảy ra lỗi khi cập nhật voucher', error: error.message });
    }
});

router.delete('/delete/:id', protect, admin, async (req, res) => {
    const { id } = req.params;
    try {
      const voucher = await Voucher.findByIdAndDelete(id);
      if (!voucher) {
        return res.status(404).json({ message: 'Voucher không tìm thấy' });
      }
      res.status(200).json({ message: 'Voucher đã được xóa thành công' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Đã xảy ra lỗi khi xóa voucher', error: error.message });
    }
});

router.get('/view/:id', async (req, res) => {
    const { id } = req.params;  
    try {
      const voucher = await Voucher.findById(id);
      if (!voucher) {
        return res.status(404).json({ message: 'Voucher không tồn tại' });
      }
      res.status(200).json({ product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Có lỗi xảy ra khi lấy thông tin voucher.' });
    }
});

router.get('/list', async (req, res) => {
    try {
      const products = await Voucher.find();
      res.status(200).json({ products });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Có lỗi xảy ra khi lấy danh sách voucher' });
    }
});



module.exports = router;
