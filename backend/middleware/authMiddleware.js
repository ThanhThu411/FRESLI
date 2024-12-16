const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Cần đăng nhập trước' });
  }

  try {
    const decoded = jwt.verify(token, 'secretkey'); // 'secretkey' nên thay bằng giá trị an toàn
    req.user = decoded; // Lưu thông tin user vào req.user
    next();
  } catch (err) {
    res.status(401).json({ message: 'Phiên đăng nhập đã hết hạn' });
  }
};

const admin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Bạn không phải là admin' });
  }
  next();
};

const customer = (req, res, next) => {
  if (req.user.role !== 'customer') {
    return res.status(403).json({ message: 'Bạn không phải là khách hàng' });
  }
  next();
};

module.exports = { protect, admin, customer };
