import './ItemListContainer.css'

function ItemListContainer({ greeting }) {
  return (
    <main className="item-list-container container-fluid py-4">
      <div className="item-list-container__greeting p-4 rounded shadow-sm">
        <h2 className="h4 mb-0">{greeting}</h2>
      </div>
    </main>
  )
}

export default ItemListContainer
