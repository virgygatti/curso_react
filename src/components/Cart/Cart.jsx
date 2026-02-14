import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './Cart.css'

function Cart() {
  const { cart, removeItem, clearCart, getTotalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <main className="cart-container container py-5">
        <h2 className="h4 mb-3">Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary">
          Ver catálogo
        </Link>
      </main>
    )
  }

  return (
    <main className="cart-container container py-4">
      <h2 className="h4 mb-4">Carrito de compras</h2>

      <div className="cart-list mb-4">
        {cart.map(({ item, quantity }) => (
          <div key={item.id} className="cart-item card mb-2 shadow-sm">
            <div className="card-body d-flex flex-wrap align-items-center gap-3">
              <img
                src={item.pictureUrl}
                alt={item.title}
                className="cart-item__img rounded"
              />
              <div className="flex-grow-1">
                <h3 className="h6 mb-1">{item.title}</h3>
                <p className="text-muted small mb-0">
                  ${item.price.toLocaleString('es-AR')} × {quantity} = $
                  {(item.price * quantity).toLocaleString('es-AR')}
                </p>
              </div>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => removeItem(item.id)}
                aria-label="Eliminar"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer d-flex flex-wrap align-items-center justify-content-between gap-3 border-top pt-3">
        <p className="fw-bold fs-5 mb-0">
          Total: ${getTotalPrice().toLocaleString('es-AR')}
        </p>
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={clearCart}
          >
            Vaciar carrito
          </button>
          <Link to="/checkout" className="btn btn-primary">
            Ir a checkout
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Cart
