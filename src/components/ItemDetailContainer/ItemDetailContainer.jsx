import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getItemById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    getItemById(id)
      .then((data) => setItem(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <main className="item-detail-container container-fluid py-4">
      <div className="container">
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        )}
        {error && (
          <div className="alert alert-warning" role="alert">
            {error}
          </div>
        )}
        {!loading && item && <ItemDetail item={item} />}
      </div>
    </main>
  )
}

export default ItemDetailContainer
