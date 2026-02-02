import { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const categorias = [
  { id: 'electronica', nombre: 'Electrónica' },
  { id: 'libros', nombre: 'Libros' },
  { id: 'vehiculos', nombre: 'Vehículos' },
]

function NavBar() {
  const [categoriaActiva, setCategoriaActiva] = useState(null)

  const handleClickCategoria = (id) => {
    setCategoriaActiva(id)
    // En PreEntrega 2 aquí irá la navegación con react-router
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">
          Mi Tienda
        </a>
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
                <button
                  type="button"
                  className={`nav-link btn btn-link ${categoriaActiva === cat.id ? 'active fw-bold' : ''}`}
                  onClick={() => handleClickCategoria(cat.id)}
                >
                  {cat.nombre}
                </button>
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
