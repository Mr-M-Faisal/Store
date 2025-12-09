const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// In-memory users for demo
let users = [
    {
        _id: 'admin1',
        name: 'Admin User',
        email: 'admin@techvault.com',
        password: '$2a$10$N9qo8uLOickgx2ZMRZoMy.MqDL6x3Z5qQvxM5VeqZy.Xw.QVz9hEe', // password: admin123
        role: 'admin'
    }
];

// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret', {
        expiresIn: '30d'
    });
};

// Register user
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user exists
        const userExists = users.find(u => u.email === email);
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = {
            _id: Date.now().toString(),
            name,
            email,
            password: hashedPassword,
            role: 'user'
        };

        users.push(user);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login user
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = users.find(u => u.email === email);

        if (user && await bcrypt.compare(password, user.password)) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get user profile
const getProfile = async (req, res) => {
    const user = users.find(u => u._id === req.userId);

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

// Update user profile
const updateProfile = async (req, res) => {
    const userIndex = users.findIndex(u => u._id === req.userId);

    if (userIndex !== -1) {
        const { name, email } = req.body;

        if (name) users[userIndex].name = name;
        if (email) users[userIndex].email = email;

        res.json({
            _id: users[userIndex]._id,
            name: users[userIndex].name,
            email: users[userIndex].email,
            role: users[userIndex].role
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

module.exports = { register, login, getProfile, updateProfile };
