const express = require('express');
const router = express.Router();
const { createOrder, getUserOrders, getOrderById, updateOrderStatus } = require('../controllers/orderController');
const { protect } = require('../middleware/auth');

// Order routes
router.post('/', createOrder); // Allow guest checkout
router.get('/my-orders', protect, getUserOrders);
router.get('/:id', getOrderById);
router.put('/:id', protect, updateOrderStatus);

module.exports = router;
