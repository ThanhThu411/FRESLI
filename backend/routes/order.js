const express = require('express');
const Product = require('../models/Product');  // Model sản phẩm
const Order = require('../models/Order');  // Model đơn hàng
const { protect, customer, admin} = require('../middleware/authMiddleware');  // Middleware bảo vệ quyền truy cập
const router = express.Router();

// API tạo đơn hàng
router.post('/add', protect, customer, async (req, res) => {
  const { products, shippingAddress } = req.body;
  const userId = req.user.userId;
  // Kiểm tra nếu không có sản phẩm hoặc địa chỉ giao hàng
  if (!products || !shippingAddress) {
    return res.status(400).json({ message: 'Cần có sản phẩm và địa chỉ giao hàng' });
  }

  try {
    let totalPrice = 0;
    const productDetails = [];

    // Lấy thông tin giá sản phẩm từ database và tính tổng tiền
    for (const item of products) {
      const product = await Product.findOne({ 'Tên sản phẩm': item.name });  // Tra cứu sản phẩm theo tên

      if (!product) {
        return res.status(404).json({ message: `Sản phẩm ${item.name} không tồn tại` });
      }
      product['Số lượng đã bán'] += parseInt(item.quantity);
      await product.save();
      const itemTotalPrice = product['Giá'] * item.quantity;  // Tính giá sản phẩm * số lượng
      totalPrice += itemTotalPrice;

      // Thêm thông tin sản phẩm vào mảng productDetails
      productDetails.push({
        name: item.name,
        quantity: item.quantity,
        price: product['Giá'],
      });
    }

    // Tạo đơn hàng mới
    const newOrder = new Order({
      userId: userId,
      products: productDetails,
      totalPrice,
      shippingAddress,
    });

    // Lưu đơn hàng vào database
    await newOrder.save();

    res.status(201).json({ message: 'Đơn hàng đã được tạo thành công', order: newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã có lỗi xảy ra khi tạo đơn hàng' });
  }
});

router.get('/filter', protect, async (req, res) => {
    const { status } = req.query; // Lấy giá trị status từ query parameters (ví dụ: /filter?status=Pending)
  
    try {
      // Tìm các đơn hàng của người dùng hiện tại
      const query = { user: req.user.id }; // Lọc theo user ID từ token
  
      // Nếu có filter theo status, thêm vào điều kiện
      if (status) {
        query.status = status;
      }
  
      // Tìm các đơn hàng theo điều kiện trên
      const orders = await Order.find(query);
  
      if (orders.length === 0) {
        return res.status(404).json({ message: 'Không có đơn hàng nào.' });
      }
  
      // Trả về danh sách đơn hàng
      res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Lỗi khi lấy đơn hàng.' });
    }
  });


// API xóa đơn hàng
router.delete('/delete/:id', protect, customer, async (req, res) => {
  const { id } = req.params;

  try {
    // Tìm đơn hàng theo ID
    const order = await Order.findById(id);

    // Kiểm tra nếu đơn hàng không tồn tại
    if (!order) {
      return res.status(404).json({ message: 'Đơn hàng không tồn tại.' });
    }

    // Kiểm tra nếu đơn hàng đã hoàn thành hoặc bị huỷ
    if (order.status !== 'Pending') {
      return res.status(400).json({ message: 'Không thể xóa đơn hàng khi đơn đã hoàn thành hoặc bị huỷ.' });
    }

    // Xóa đơn hàng
    await order.remove();
    res.status(200).json({ message: 'Đơn hàng đã được xóa thành công.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Có lỗi xảy ra khi xóa đơn hàng.' });
  }
});

router.patch('/update-status/:id', protect, admin, async (req, res) => {
    const { id } = req.params;   
    try {
      // Tìm đơn hàng theo ID
      const order = await Order.findById(id);
  
      if (!order) {
        return res.status(404).json({ message: 'Đơn hàng không tồn tại.' });
      }
      if (order.status === 'Pending'){
        order.status = 'Processing';
      }
      else if (order.status ==='Processing'){
        order.status ='Delivering';
      }
      else if (order.status ==='Delivering'){
        order.status ='Delivered';
      }
      else if (order.status ==='Delivering'){
        order.status ='Delivered';
      }
      else if (order.status ==='Delivered'){
        order.status ='Cancelled';
      }
      else if (order.status ==='Cancelled'){
        order.status ='Pending';
      }
      else {
        return res.json(400)({message: "Bad status"});
      }
      await order.save();
  
      res.status(200).json({ message: 'Cập nhật trạng thái đơn hàng thành công.', order });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Lỗi server. Không thể cập nhật trạng thái đơn hàng.' });
    }
});

router.get('/list', protect,admin,  async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json({ orders });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Có lỗi xảy ra khi lấy danh sách đơn hàng' });
    }
});



module.exports = router;
