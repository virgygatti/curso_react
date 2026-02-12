import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getItems } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

function ItemListContainer() {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getItems(categoryId || undefined)
      .then((data) => setItems(data))
      .catch(() => setItems([]))
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <main className="item-list-container container-fluid py-4">
      <div className="container-fluid">
        <h2 className="h5 mb-3 text-muted">
          {categoryId
            ? `Categoría: ${categoryId}`
            : 'Desde aquí podrás ver un listado de todas las categorías'}
        </h2>
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : items.length === 0 ? (
          <p className="text-muted">No hay productos en esta categoría.</p>
        ) : (
          <ItemList items={items} />
        )}
      </div>
    </main>
  )
}

export default ItemListContainer
