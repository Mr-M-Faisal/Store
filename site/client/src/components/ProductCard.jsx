import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

const ProductCard = ({ product }) => {
    const { addToCart } = useCart()

    const handleAddToCart = (e) => {
        e.preventDefault()
        e.stopPropagation()
        addToCart(product)
    }

    return (
        <Link to={`/product/${product._id}`} className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
                {product.badge && (
                    <span className={`product-badge ${product.badge}`}>
                        {product.badge === 'new' ? 'NEW' : 'SALE'}
                    </span>
                )}
                <button className="product-wishlist" onClick={(e) => e.preventDefault()}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
                <div className="product-actions">
                    <button className="add-to-cart-btn" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                    <span className="stars">
                        {'★'.repeat(Math.floor(product.rating))}
                        {'☆'.repeat(5 - Math.floor(product.rating))}
                    </span>
                    <span className="rating-count">({product.reviews?.toLocaleString()})</span>
                </div>
                <div className="product-price">
                    <span className="current-price">${product.price.toLocaleString()}</span>
                    {product.originalPrice > product.price && (
                        <span className="original-price">${product.originalPrice.toLocaleString()}</span>
                    )}
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
