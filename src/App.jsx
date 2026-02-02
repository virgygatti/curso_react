import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Mi Tienda — Desde aquí podrás ver el catálogo de productos." />
    </>
  )
}

export default App
