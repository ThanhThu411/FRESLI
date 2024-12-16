// backend/server.js
const express = require('express');
const { connect } = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth.js');  
const productRoutes = require('./routes/product.js');
const voucherRoutes = require('./routes/voucher.js');
const ordeRoutes = require('./routes/order.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Kết nối MongoDB
connect('mongodb+srv://dungnguyendung4869:dung4869@cluster0.jeu3q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(bodyParser.json()); 
app.use(cors());
// API routes
app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);
app.use('/api/voucher', voucherRoutes);
app.use('/api/order', ordeRoutes);
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
