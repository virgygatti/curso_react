import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider')
  return ctx
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    if (quantity <= 0) return
    setCart((prev) => {
      const existing = prev.find((e) => e.item.id === item.id)
      if (existing) {
        const newQty = Math.min(existing.quantity + quantity, item.stock)
        if (newQty <= 0) return prev.filter((e) => e.item.id !== item.id)
        return prev.map((e) =>
          e.item.id === item.id ? { ...e, quantity: newQty } : e
        )
      }
      return [...prev, { item, quantity: Math.min(quantity, item.stock) }]
    })
  }

  const removeItem = (itemId) => {
    setCart((prev) => prev.filter((e) => e.item.id !== itemId))
  }

  const clearCart = () => setCart([])

  const getTotalQuantity = () =>
    cart.reduce((acc, entry) => acc + entry.quantity, 0)

  const getTotalPrice = () =>
    cart.reduce((acc, entry) => acc + entry.item.price * entry.quantity, 0)

  const value = {
    cart,
    addItem,
    removeItem,
    clearCart,
    getTotalQuantity,
    getTotalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
