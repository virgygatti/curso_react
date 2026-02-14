import { Link, useParams } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const categorias = [
  { id: 'electronica', nombre: 'Electrónica' },
  { id: 'libros', nombre: 'Libros' },
  { id: 'hogar', nombre: 'Hogar' },
]

function NavBar() {
  const { categoryId } = useParams()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Mi Tienda
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {categorias.map((cat) => (
              <li className="nav-item" key={cat.id}>
                <Link
                  className={`nav-link ${categoryId === cat.id ? 'active fw-bold' : ''}`}
                  to={`/category/${cat.id}`}
                >
                  {cat.nombre}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
