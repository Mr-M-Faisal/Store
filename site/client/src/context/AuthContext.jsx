import { createContext, useContext, useState, useEffect } from 'react'
import api from '../services/api'

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('techvault_user')
        return saved ? JSON.parse(saved) : null
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (user) {
            localStorage.setItem('techvault_user', JSON.stringify(user))
        } else {
            localStorage.removeItem('techvault_user')
        }
    }, [user])

    const login = async (email, password) => {
        setLoading(true)
        setError(null)
        try {
            const response = await api.post('/auth/login', { email, password })
            setUser(response.data)
            localStorage.setItem('techvault_token', response.data.token)
            return response.data
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed')
            throw err
        } finally {
            setLoading(false)
        }
    }

    const register = async (name, email, password) => {
        setLoading(true)
        setError(null)
        try {
            const response = await api.post('/auth/register', { name, email, password })
            setUser(response.data)
            localStorage.setItem('techvault_token', response.data.token)
            return response.data
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed')
            throw err
        } finally {
            setLoading(false)
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('techvault_token')
        localStorage.removeItem('techvault_user')
    }

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            error,
            login,
            register,
            logout,
            isAuthenticated: !!user
        }}>
            {children}
        </AuthContext.Provider>
    )
}
