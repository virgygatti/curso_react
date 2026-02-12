import { Link } from 'react-router-dom'
import './Item.css'

function Item({ id, title, price, pictureUrl, stock }) {
  return (
    <article className="item card h-100 shadow-sm">
      <img src={pictureUrl} className="card-img-top item__img" alt={title} />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title h6">{title}</h3>
        <p className="card-text text-muted small mb-2">Stock disponible: {stock}</p>
        <p className="mt-auto mb-2 fw-bold">${price.toLocaleString('es-AR')}</p>
        <Link to={`/item/${id}`} className="btn btn-primary btn-sm">
          Ver detalle del producto
        </Link>
      </div>
    </article>
  )
}

export default Item
