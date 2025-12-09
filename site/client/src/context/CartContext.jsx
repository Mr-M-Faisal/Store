import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('techvault_cart')
        return saved ? JSON.parse(saved) : []
    })
    const [toastMessage, setToastMessage] = useState('')
    const [showToast, setShowToast] = useState(false)

    useEffect(() => {
        localStorage.setItem('techvault_cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => item._id === product._id)
            if (existing) {
                return prev.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...prev, { ...product, quantity: 1 }]
        })
        showToastMessage(`${product.name} added to cart!`)
    }

    const removeFromCart = (productId) => {
        const item = cart.find(i => i._id === productId)
        setCart(prev => prev.filter(item => item._id !== productId))
        if (item) {
            showToastMessage(`${item.name} removed from cart`)
        }
    }

    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId)
            return
        }
        setCart(prev =>
            prev.map(item =>
                item._id === productId ? { ...item, quantity } : item
            )
        )
    }

    const clearCart = () => {
        setCart([])
    }

    const showToastMessage = (message) => {
        setToastMessage(message)
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
    }

    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal,
            cartCount,
            showToastMessage,
            toastMessage,
            showToast
        }}>
            {children}
        </CartContext.Provider>
    )
}
