import './ItemQuantitySelector.css'

function ItemQuantitySelector({ quantity, onQuantityChange, max }) {
  const handleDecrement = () => {
    if (quantity > 1) onQuantityChange(quantity - 1)
  }

  const handleIncrement = () => {
    if (quantity < max) onQuantityChange(quantity + 1)
  }

  return (
    <div className="item-quantity-selector d-flex align-items-center gap-2">
      <span className="small text-muted">Cantidad:</span>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm"
          onClick={handleDecrement}
          disabled={quantity <= 1}
          aria-label="Restar"
        >
          −
        </button>
        <span className="btn btn-outline-secondary btn-sm disabled px-3">
          {quantity}
        </span>
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm"
          onClick={handleIncrement}
          disabled={quantity >= max}
          aria-label="Sumar"
        >
          +
        </button>
      </div>
      <span className="small text-muted">(máx. {max})</span>
    </div>
  )
}

export default ItemQuantitySelector
