require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// Import routes
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'TechVault API is running' });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
}

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║   ⚡ TechVault API Server                                  ║
║                                                            ║
║   Server running on: http://localhost:${PORT}                 ║
║   Environment: ${process.env.NODE_ENV || 'development'}                              ║
║                                                            ║
║   API Endpoints:                                           ║
║   • GET  /api/products         - All products              ║
║   • GET  /api/products/:id     - Single product            ║
║   • GET  /api/products/deals   - Deal products             ║
║   • GET  /api/products/categories - All categories         ║
║   • POST /api/auth/register    - Register user             ║
║   • POST /api/auth/login       - Login user                ║
║   • POST /api/orders           - Create order              ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
    `);
});

module.exports = app;
