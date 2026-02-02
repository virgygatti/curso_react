import { FaShoppingCart } from 'react-icons/fa'
import './CartWidget.css'

function CartWidget() {
  const cantidad = 3 // número hardcodeado para PreEntrega 1

  return (
    <div className="cart-widget d-flex align-items-center gap-1">
      <FaShoppingCart className="cart-widget__icon" size={24} />
      <span className="badge bg-danger rounded-pill">{cantidad}</span>
    </div>
  )
}

export default CartWidget
