require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' })); // Increased limit for Base64 images

// MongoDB Connection
// REPLACE 'YOUR_MONGO_URI' with your actual connection string (local or Atlas)
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/bottlecraft').then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Schema
const OrderSchema = new mongoose.Schema({
  customerName: String,
  customerPhone: String,
  quantity: Number,
  totalCost: Number,
  designImage: String, // Storing Base64 for MVP (Use Cloudinary for Production)
  status: { type: String, default: 'Pending Payment' },
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', OrderSchema);

// Routes
app.post('/api/orders', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json({ message: "Order Placed", order: savedOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/orders', async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));