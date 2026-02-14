import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'
import './CartWidget.css'

function CartWidget() {
  const { getTotalQuantity } = useCart()
  const total = getTotalQuantity()

  return (
    <Link to="/cart" className="cart-widget d-flex align-items-center gap-1 text-decoration-none text-white">
      <FaShoppingCart className="cart-widget__icon" size={24} />
      {total > 0 && (
        <span className="badge bg-danger rounded-pill">{total}</span>
      )}
    </Link>
  )
}

export default CartWidget
