import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import api from '../services/api'
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [productsRes, categoriesRes] = await Promise.all([
                    api.get('/products/featured'),
                    api.get('/products/categories')
                ])
                setProducts(productsRes.data)
                setCategories(categoriesRes.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="home-page">
            {/* Hero Section - Fixed Layout */}
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-badge">🔥 Black Friday Sale - Up to 50% Off</div>
                        <h1 className="hero-title">
                            <span className="gradient-text">Next-Gen Tech</span>
                            <br />At Your Fingertips
                        </h1>
                        <p className="hero-description">
                            Discover cutting-edge electronics and gadgets. From premium smartphones to immersive gaming gear,
                            find everything you need to stay ahead of the curve.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/products" className="btn btn-primary">
                                <span>Shop Now</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link to="/categories" className="btn btn-secondary">Explore Categories</Link>
                        </div>
                        <div className="hero-stats">
                            <div className="stat">
                                <span className="stat-number">50K+</span>
                                <span className="stat-label">Products</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">100K+</span>
                                <span className="stat-label">Happy Customers</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Support</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=600&fit=crop"
                                alt="Premium Smartphone"
                                className="hero-main-image"
                            />
                            <div className="hero-floating-card card-1">
                                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop" alt="Headphones" />
                            </div>
                            <div className="hero-floating-card card-2">
                                <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=150&h=150&fit=crop" alt="Smart Watch" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="categories-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Browse</span>
                        <h2 className="section-title">Shop by Category</h2>
                        <p className="section-subtitle">Find exactly what you're looking for</p>
                    </div>
                    <div className="category-grid">
                        {categories.map(category => (
                            <Link
                                key={category.id}
                                to={`/products?category=${category.id}`}
                                className="category-card"
                            >
                                <div className="category-icon">{category.icon}</div>
                                <h3>{category.name}</h3>
                                <p>{category.description}</p>
                                <span className="category-count">{category.count} Products</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="featured-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Featured</span>
                        <h2 className="section-title">Trending Products</h2>
                        <p className="section-subtitle">Our most popular items this week</p>
                    </div>
                    {loading ? (
                        <div className="loading-grid">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="product-skeleton">
                                    <div className="skeleton skeleton-image"></div>
                                    <div className="skeleton skeleton-text"></div>
                                    <div className="skeleton skeleton-text short"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="products-grid">
                            {products.map(product => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                    )}
                    <div className="section-footer">
                        <Link to="/products" className="btn btn-outline">View All Products</Link>
                    </div>
                </div>
            </section>

            {/* Deals Banner */}
            <section className="deals-section">
                <div className="container">
                    <div className="deals-content">
                        <div className="deals-text">
                            <span className="deals-tag">⚡ Limited Time Offer</span>
                            <h2>Flash Sale</h2>
                            <p>Get up to 40% off on selected items. Don't miss out on these amazing deals!</p>
                            <Link to="/deals" className="btn btn-primary">Shop Flash Deals</Link>
                        </div>
                        <div className="deals-image">
                            <img
                                src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop"
                                alt="MacBook Deal"
                            />
                            <div className="deals-badge">-40%</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🚚</div>
                            <h3>Free Shipping</h3>
                            <p>On orders over $50</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔒</div>
                            <h3>Secure Payment</h3>
                            <p>100% protected</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">↩️</div>
                            <h3>Easy Returns</h3>
                            <p>30-day policy</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💬</div>
                            <h3>24/7 Support</h3>
                            <p>Always here to help</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter-section">
                <div className="container">
                    <div className="newsletter-content">
                        <div className="newsletter-text">
                            <h2>Stay Updated</h2>
                            <p>Subscribe to our newsletter for exclusive deals and tech news</p>
                        </div>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
