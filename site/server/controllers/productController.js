// In-memory product data for demo (works without MongoDB)
const products = [
    {
        _id: '1',
        name: "iPhone 15 Pro Max",
        slug: "iphone-15-pro-max",
        description: "The most powerful iPhone ever with A17 Pro chip, titanium design, and advanced camera system.",
        category: "smartphones",
        price: 1199,
        originalPrice: 1299,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
        rating: 4.9,
        reviews: 2847,
        stock: 50,
        badge: "new",
        features: ["A17 Pro chip", "Titanium design", "48MP camera", "USB-C"],
        isActive: true
    },
    {
        _id: '2',
        name: "MacBook Pro 16\" M3",
        slug: "macbook-pro-16-m3",
        description: "Supercharged by M3 Pro or M3 Max, MacBook Pro takes its power and efficiency further than ever.",
        category: "laptops",
        price: 2499,
        originalPrice: 2799,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 1923,
        stock: 30,
        badge: "sale",
        features: ["M3 Pro chip", "16\" Liquid Retina XDR", "22hr battery", "Space Black"],
        isActive: true
    },
    {
        _id: '3',
        name: "Sony WH-1000XM5",
        slug: "sony-wh-1000xm5",
        description: "Industry-leading noise canceling headphones with exceptional sound quality and comfort.",
        category: "audio",
        price: 349,
        originalPrice: 399,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 3421,
        stock: 100,
        badge: "sale",
        features: ["Industry-leading ANC", "30hr battery", "Multipoint connection", "Speak-to-Chat"],
        isActive: true
    },
    {
        _id: '4',
        name: "PlayStation 5 Pro",
        slug: "playstation-5-pro",
        description: "The ultimate PlayStation experience with enhanced graphics and lightning-fast loading.",
        category: "gaming",
        price: 699,
        originalPrice: 749,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
        rating: 4.9,
        reviews: 5632,
        stock: 25,
        badge: "new",
        features: ["8K gaming", "4TB SSD", "Ray tracing", "DualSense controller"],
        isActive: true
    },
    {
        _id: '5',
        name: "Samsung Galaxy S24 Ultra",
        slug: "samsung-galaxy-s24-ultra",
        description: "The ultimate Galaxy experience with AI-powered features and S Pen.",
        category: "smartphones",
        price: 1099,
        originalPrice: 1299,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 2156,
        stock: 45,
        badge: "sale",
        features: ["Galaxy AI", "200MP camera", "S Pen included", "Titanium frame"],
        isActive: true
    },
    {
        _id: '6',
        name: "Dell XPS 15 OLED",
        slug: "dell-xps-15-oled",
        description: "Stunning 3.5K OLED display with Intel Core i9 processor for creators.",
        category: "laptops",
        price: 1899,
        originalPrice: 2199,
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 892,
        stock: 20,
        badge: null,
        features: ["3.5K OLED display", "Intel Core i9", "32GB RAM", "1TB SSD"],
        isActive: true
    },
    {
        _id: '7',
        name: "AirPods Pro 2",
        slug: "airpods-pro-2",
        description: "Rebuilt from the sound up with Apple H2 chip and Adaptive Audio.",
        category: "audio",
        price: 249,
        originalPrice: 279,
        image: "https://images.unsplash.com/photo-1600294037681-c980c2ca7e1f?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 4521,
        stock: 150,
        badge: "sale",
        features: ["H2 chip", "Adaptive Audio", "USB-C charging", "6hr battery"],
        isActive: true
    },
    {
        _id: '8',
        name: "Xbox Series X",
        slug: "xbox-series-x",
        description: "The fastest, most powerful Xbox ever with 12 teraflops of processing power.",
        category: "gaming",
        price: 499,
        originalPrice: 549,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 3867,
        stock: 35,
        badge: null,
        features: ["12 teraflops", "1TB SSD", "4K gaming", "Quick Resume"],
        isActive: true
    },
    {
        _id: '9',
        name: "Google Pixel 8 Pro",
        slug: "google-pixel-8-pro",
        description: "The best of Google AI with the most advanced Pixel camera yet.",
        category: "smartphones",
        price: 899,
        originalPrice: 999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 1234,
        stock: 40,
        badge: "new",
        features: ["Tensor G3", "AI features", "7 years updates", "Pro camera"],
        isActive: true
    },
    {
        _id: '10',
        name: "ASUS ROG Strix G16",
        slug: "asus-rog-strix-g16",
        description: "Ultimate gaming laptop with RTX 4070 and 240Hz display.",
        category: "laptops",
        price: 1599,
        originalPrice: 1799,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 756,
        stock: 15,
        badge: "sale",
        features: ["RTX 4070", "240Hz display", "Intel i9", "RGB lighting"],
        isActive: true
    },
    {
        _id: '11',
        name: "Bose QuietComfort Ultra",
        slug: "bose-quietcomfort-ultra",
        description: "Immersive Audio meets world-class noise cancellation.",
        category: "audio",
        price: 429,
        originalPrice: 499,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 1892,
        stock: 60,
        badge: "new",
        features: ["Immersive Audio", "CustomTune", "24hr battery", "Snapdragon Sound"],
        isActive: true
    },
    {
        _id: '12',
        name: "Nintendo Switch OLED",
        slug: "nintendo-switch-oled",
        description: "Vibrant 7-inch OLED screen with enhanced audio and wired LAN port.",
        category: "gaming",
        price: 349,
        originalPrice: 399,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop",
        rating: 4.9,
        reviews: 6234,
        stock: 80,
        badge: "sale",
        features: ["7\" OLED screen", "64GB storage", "Enhanced audio", "Wide adjustable stand"],
        isActive: true
    },
    {
        _id: '13',
        name: "Apple Watch Ultra 2",
        slug: "apple-watch-ultra-2",
        description: "The most rugged and capable Apple Watch with precision dual-frequency GPS.",
        category: "wearables",
        price: 799,
        originalPrice: 899,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 1567,
        stock: 40,
        badge: "new",
        features: ["S9 chip", "Dual-frequency GPS", "Titanium case", "36hr battery"],
        isActive: true
    },
    {
        _id: '14',
        name: "Amazon Echo Show 10",
        slug: "amazon-echo-show-10",
        description: "Smart display with motion that follows you around the room.",
        category: "smart-home",
        price: 249,
        originalPrice: 299,
        image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 2341,
        stock: 70,
        badge: "sale",
        features: ["Motion tracking", "10\" HD screen", "Alexa built-in", "Smart home hub"],
        isActive: true
    },
    {
        _id: '15',
        name: "Samsung Galaxy Watch 6",
        slug: "samsung-galaxy-watch-6",
        description: "Advanced health monitoring with sleek design and long battery life.",
        category: "wearables",
        price: 329,
        originalPrice: 399,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 1823,
        stock: 55,
        badge: null,
        features: ["BioActive sensor", "Sapphire crystal", "40hr battery", "Sleep coaching"],
        isActive: true
    },
    {
        _id: '16',
        name: "Google Nest Hub Max",
        slug: "google-nest-hub-max",
        description: "The biggest, most helpful smart display with Nest camera built-in.",
        category: "smart-home",
        price: 229,
        originalPrice: 279,
        image: "https://images.unsplash.com/photo-1512446816042-444d641267d4?w=400&h=400&fit=crop",
        rating: 4.4,
        reviews: 1456,
        stock: 45,
        badge: null,
        features: ["10\" HD display", "Nest cam built-in", "Google Assistant", "Video calls"],
        isActive: true
    }
];

const categories = [
    { id: 'smartphones', name: 'Smartphones', icon: '📱', description: 'Latest flagship phones', count: 3 },
    { id: 'laptops', name: 'Laptops', icon: '💻', description: 'Power & portability', count: 3 },
    { id: 'audio', name: 'Audio', icon: '🎧', description: 'Immersive sound', count: 3 },
    { id: 'gaming', name: 'Gaming', icon: '🎮', description: 'Level up your setup', count: 3 },
    { id: 'wearables', name: 'Wearables', icon: '⌚', description: 'Smart accessories', count: 2 },
    { id: 'smart-home', name: 'Smart Home', icon: '🏠', description: 'Connected living', count: 2 }
];

// Get all products
const getProducts = (req, res) => {
    let result = [...products];

    // Filter by category
    if (req.query.category) {
        result = result.filter(p => p.category === req.query.category);
    }

    // Filter by badge
    if (req.query.badge) {
        result = result.filter(p => p.badge === req.query.badge);
    }

    // Search
    if (req.query.search) {
        const search = req.query.search.toLowerCase();
        result = result.filter(p =>
            p.name.toLowerCase().includes(search) ||
            p.description.toLowerCase().includes(search)
        );
    }

    // Sort
    if (req.query.sort) {
        switch (req.query.sort) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                result.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0));
                break;
        }
    }

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedResult = result.slice(startIndex, endIndex);

    res.json({
        products: paginatedResult,
        page,
        pages: Math.ceil(result.length / limit),
        total: result.length
    });
};

// Get single product
const getProductById = (req, res) => {
    const product = products.find(p => p._id === req.params.id || p.slug === req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

// Get products by category
const getProductsByCategory = (req, res) => {
    const result = products.filter(p => p.category === req.params.category);
    res.json(result);
};

// Get featured products (for homepage)
const getFeaturedProducts = (req, res) => {
    const featured = products.filter(p => p.badge === 'new' || p.badge === 'sale').slice(0, 8);
    res.json(featured);
};

// Get deals
const getDeals = (req, res) => {
    const deals = products.filter(p => p.originalPrice > p.price);
    res.json(deals);
};

// Get all categories
const getCategories = (req, res) => {
    res.json(categories);
};

module.exports = {
    getProducts,
    getProductById,
    getProductsByCategory,
    getFeaturedProducts,
    getDeals,
    getCategories
};
