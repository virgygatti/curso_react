import Item from '../Item/Item'
import './ItemList.css'

function ItemList({ items }) {
  return (
    <div className="item-list row g-3">
      {items.map((item) => (
        <div key={item.id} className="col-12 col-sm-6 col-lg-4">
          <Item
            id={item.id}
            title={item.title}
            price={item.price}
            pictureUrl={item.pictureUrl}
            stock={item.stock}
          />
        </div>
      ))}
    </div>
  )
}

export default ItemList
