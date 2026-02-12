import './ItemDetail.css'

function ItemDetail({ item }) {
  const { title, description, price, pictureUrl, stock } = item

  return (
    <article className="item-detail card shadow-sm">
      <div className="row g-0">
        <div className="col-md-5">
          <img src={pictureUrl} className="item-detail__img img-fluid rounded-start" alt={title} />
        </div>
        <div className="col-md-7">
          <div className="card-body p-4">
            <h1 className="card-title h4">{title}</h1>
            <p className="card-text text-muted">{description}</p>
            <p className="fw-bold fs-4 mb-2">${price.toLocaleString('es-AR')}</p>
            <p className="small text-muted mb-0">Stock disponible: {stock}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ItemDetail
