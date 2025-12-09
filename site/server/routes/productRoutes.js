const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProductById,
    getProductsByCategory,
    getFeaturedProducts,
    getDeals,
    getCategories
} = require('../controllers/productController');

// Product routes
router.get('/', getProducts);
router.get('/featured', getFeaturedProducts);
router.get('/deals', getDeals);
router.get('/categories', getCategories);
router.get('/category/:category', getProductsByCategory);
router.get('/:id', getProductById);

module.exports = router;
