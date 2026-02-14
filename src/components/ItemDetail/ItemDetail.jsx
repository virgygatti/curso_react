import { useEffect, useState } from 'react'
import { useCart } from '../../context/CartContext'
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector'
import './ItemDetail.css'

function ItemDetail({ item }) {
  const { title, description, price, pictureUrl, stock } = item
  const [quantity, setQuantity] = useState(1)
  const { cart, addItem } = useCart()
  const [showAddedFeedback, setShowAddedFeedback] = useState(false)

  const inCartQty = cart.find((e) => e.item.id === item.id)?.quantity ?? 0
  const remainingStock = Math.max(0, stock - inCartQty)

  useEffect(() => {
    setQuantity(1)
    setShowAddedFeedback(false)
  }, [item.id])

  useEffect(() => {
    setQuantity((q) => {
      if (remainingStock === 0) return 1
      return Math.min(Math.max(1, q), remainingStock)
    })
  }, [remainingStock])

  useEffect(() => {
    if (!showAddedFeedback) return
    const t = setTimeout(() => setShowAddedFeedback(false), 3500)
    return () => clearTimeout(t)
  }, [showAddedFeedback])

  const handleAddToCart = () => {
    addItem(item, quantity)
    setShowAddedFeedback(true)
  }

  return (
    <article className="item-detail card shadow-sm">
      <div className="row g-0">
        <div className="col-md-5">
          <img src={pictureUrl} className="item-detail__img img-fluid rounded-start" alt={title} />
        </div>
        <div className="col-md-7">
          <div className="card-body p-4">
            <h1 className="card-title h4">{title}</h1>
            <p className="card-text text-muted item-detail__description">{description}</p>
            <p className="fw-bold fs-4 mb-2">${price.toLocaleString('es-AR')}</p>
            <p className="small text-muted mb-3">
              Stock disponible: {remainingStock}
              {inCartQty > 0 && (
                <span className="d-block mt-1">
                  En tu carrito: {inCartQty}
                </span>
              )}
            </p>

            {stock === 0 ? (
              <p className="small text-body-secondary mb-0">Sin stock disponible.</p>
            ) : remainingStock === 0 ? (
              <p className="small text-body-secondary mb-0">
                Ya agregaste todo el stock disponible al carrito.
              </p>
            ) : (
              <ItemQuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
                max={remainingStock}
              />
            )}

            <div className="mt-3 d-flex flex-column gap-2 align-items-start">
              {showAddedFeedback && (
                <p
                  className="item-detail__feedback alert alert-success py-2 px-3 mb-0 small"
                  role="status"
                  aria-live="polite"
                >
                  Agregado al carrito
                </p>
              )}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddToCart}
                disabled={remainingStock === 0}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ItemDetail
