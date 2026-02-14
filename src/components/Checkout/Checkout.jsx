import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './Checkout.css'

function Checkout() {
  const { cart, getTotalPrice, clearCart } = useCart()
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [orderId, setOrderId] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = `ORD-${Date.now()}`
    setOrderId(id)
    clearCart()
  }

  if (cart.length === 0 && !orderId) {
    return (
      <main className="checkout-container container py-5">
        <h2 className="h4 mb-3">No hay productos en el carrito</h2>
        <Link to="/" className="btn btn-primary">
          Ver catálogo
        </Link>
      </main>
    )
  }

  if (orderId) {
    return (
      <main className="checkout-container container py-5">
        <div className="card shadow-sm p-4 text-center">
          <h2 className="h4 text-success mb-2">¡Orden confirmada!</h2>
          <p className="text-muted mb-3">
            Tu número de orden es: <strong>{orderId}</strong>
          </p>
          <Link to="/" className="btn btn-primary">
            Seguir comprando
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="checkout-container container py-4">
      <h2 className="h4 mb-4">Checkout</h2>

      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-header">
              <h3 className="h6 mb-0">Datos del comprador</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nombre y apellido
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Confirmar compra
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div className="card-header">
              <h3 className="h6 mb-0">Resumen de compra (Brief)</h3>
            </div>
            <ul className="list-group list-group-flush">
              {cart.map(({ item, quantity }) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between">
                  <span>
                    {item.title} × {quantity}
                  </span>
                  <span>${(item.price * quantity).toLocaleString('es-AR')}</span>
                </li>
              ))}
            </ul>
            <div className="card-footer fw-bold">
              Total: ${getTotalPrice().toLocaleString('es-AR')}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Checkout
