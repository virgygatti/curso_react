# Mi Tienda — E-commerce en React

Proyecto final de e-commerce desarrollado con **React** y **Vite**. Incluye catálogo por categorías, detalle de producto, carrito de compras y checkout con resumen de orden.

## Tecnologías

- **React 19** + **Vite 7**
- **React Router DOM** (BrowserRouter) para navegación
- **Bootstrap 5** para estilos
- **react-icons** para íconos (carrito, etc.)

## Requisitos

- Node.js 18+ y npm

## Instalación

```bash
npm install
```

## Scripts

| Comando        | Descripción                    |
|----------------|--------------------------------|
| `npm run dev`  | Servidor de desarrollo (HMR)   |
| `npm run build`| Build de producción            |
| `npm run preview` | Vista previa del build      |
| `npm run lint` | Ejecutar ESLint                |

## Cómo correr el proyecto

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Estructura del proyecto

```
src/
├── components/
│   ├── NavBar/           # Barra de navegación (brand, categorías, CartWidget)
│   ├── CartWidget/       # Ícono de carrito + cantidad
│   ├── ItemListContainer/# Contenedor del catálogo (por categoría o todo)
│   ├── ItemList/         # Grilla de productos
│   ├── Item/             # Card de producto con link al detalle
│   ├── ItemDetailContainer/
│   ├── ItemDetail/       # Detalle + selector de cantidad + agregar al carrito
│   ├── ItemQuantitySelector/
│   ├── Cart/             # Vista del carrito (listado, totales, vaciar, checkout)
│   └── Checkout/         # Formulario + Brief + confirmación de orden
├── context/
│   └── CartContext.jsx   # Estado global del carrito
├── data/
│   └── asyncMock.js      # Productos y funciones getItems / getItemById
├── App.jsx
├── main.jsx
└── index.css
```

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Catálogo (todos los productos) |
| `/category/:categoryId` | Catálogo filtrado por categoría (`electronica`, `libros`, `hogar`) |
| `/item/:id` | Detalle de un producto |
| `/cart` | Carrito de compras |
| `/checkout` | Formulario y confirmación de compra |

## Flujo de la aplicación

1. **Catálogo** — Listado de productos; se puede filtrar por categoría desde el navbar.
2. **Detalle** — Al hacer clic en "Ver detalle" se muestra el producto con selector de cantidad y botón "Agregar al carrito".
3. **Carrito** — Se accede desde el ícono del navbar; se pueden eliminar ítems, vaciar el carrito o ir a checkout.
4. **Checkout** — Formulario (nombre, email, teléfono) + resumen de compra (Brief). Al confirmar se muestra el número de orden.

## Entregas (Coderhouse)

- **PreEntrega 1:** Landing + NavBar + CartWidget + ItemListContainer
- **PreEntrega 2:** Routing + catálogo + detalle con async-mocks
- **Entrega final:** CartContext, carrito, ItemQuantitySelector, Checkout con Brief
