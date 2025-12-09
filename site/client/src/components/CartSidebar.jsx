import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './CartSidebar.css'

const CartSidebar = ({ isOpen, onClose }) => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()

    return (
        <>
            <div className={`cart-sidebar ${isOpen ? 'active' : ''}`}>
                <div className="cart-header">
                    <h3>Your Cart</h3>
                    <button className="cart-close" onClick={onClose}>&times;</button>
                </div>

                <div className="cart-items">
                    {cart.length === 0 ? (
                        <div className="cart-empty">
                            <div className="cart-empty-icon">🛒</div>
                            <p>Your cart is empty</p>
                            <Link to="/products" className="btn btn-primary" onClick={onClose}>
                                Start Shopping
                            </Link>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item._id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h4 className="cart-item-name">{item.name}</h4>
                                    <p className="cart-item-price">${item.price.toLocaleString()}</p>
                                    <div className="cart-item-quantity">
                                        <button
                                            className="qty-btn"
                                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                        >
                                            −
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            className="qty-btn"
                                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    className="cart-item-remove"
                                    onClick={() => removeFromCart(item._id)}
                                >
                                    ×
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Total:</span>
                            <span>${cartTotal.toLocaleString()}</span>
                        </div>
                        <Link to="/checkout" className="checkout-btn" onClick={onClose}>
                            Proceed to Checkout
                        </Link>
                    </div>
                )}
            </div>

            <div
                className={`cart-overlay ${isOpen ? 'active' : ''}`}
                onClick={onClose}
            ></div>
        </>
    )
}

export default CartSidebar
