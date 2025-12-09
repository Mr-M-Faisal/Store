// In-memory orders for demo
let orders = [];

// Create order
const createOrder = async (req, res) => {
    try {
        const { items, shippingAddress, paymentMethod, subtotal, shippingCost, tax, total } = req.body;

        const order = {
            _id: Date.now().toString(),
            user: req.userId || null,
            items,
            shippingAddress,
            paymentMethod,
            paymentStatus: 'pending',
            subtotal,
            shippingCost: shippingCost || 0,
            tax: tax || 0,
            total,
            status: 'pending',
            createdAt: new Date().toISOString()
        };

        orders.push(order);

        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get user orders
const getUserOrders = async (req, res) => {
    const userOrders = orders.filter(o => o.user === req.userId);
    res.json(userOrders);
};

// Get order by ID
const getOrderById = async (req, res) => {
    const order = orders.find(o => o._id === req.params.id);

    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
};

// Update order status (admin)
const updateOrderStatus = async (req, res) => {
    const orderIndex = orders.findIndex(o => o._id === req.params.id);

    if (orderIndex !== -1) {
        const { status, paymentStatus, trackingNumber } = req.body;

        if (status) orders[orderIndex].status = status;
        if (paymentStatus) orders[orderIndex].paymentStatus = paymentStatus;
        if (trackingNumber) orders[orderIndex].trackingNumber = trackingNumber;

        res.json(orders[orderIndex]);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
};

module.exports = { createOrder, getUserOrders, getOrderById, updateOrderStatus };
