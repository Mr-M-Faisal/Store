import { useCart } from '../context/CartContext'
import './Toast.css'

const Toast = () => {
    const { showToast, toastMessage } = useCart()

    return (
        <div className={`toast ${showToast ? 'active' : ''}`}>
            <div className="toast-content">
                <span className="toast-icon">✓</span>
                <span className="toast-message">{toastMessage}</span>
            </div>
        </div>
    )
}

export default Toast
