const productos = [
  {
    id: '1',
    title: 'Notebook Pro',
    description: 'Laptop 15", 16GB RAM, 512GB SSD. Ideal para trabajo y estudio.',
    price: 89900,
    pictureUrl: '/images/productos/electronica/notebook-pro.jpg',
    category: 'electronica',
    stock: 5,
  },
  {
    id: '2',
    title: 'Auriculares inalámbricos',
    description: 'Sonido envolvente, cancelación de ruido, 20h de batería.',
    price: 15900,
    pictureUrl: '/images/productos/electronica/auriculares-inalambricos.jpg',
    category: 'electronica',
    stock: 12,
  },
  {
    id: '3',
    title: 'El principito',
    description: 'Edición ilustrada del clásico de Antoine de Saint-Exupéry.',
    price: 4500,
    pictureUrl: '/images/productos/libros/el-principito.jpg',
    category: 'libros',
    stock: 20,
  },
  {
    id: '4',
    title: 'Cien años de soledad',
    description: 'Gabriel García Márquez. Realismo mágico latinoamericano.',
    price: 6200,
    pictureUrl: '/images/productos/libros/cien-anos-de-soledad.jpg',
    category: 'libros',
    stock: 8,
  },
  {
    id: '5',
    title: 'Juego de té',
    description: 'Tetera con 6 tazas de cerámica.',
    price: 125000,
    pictureUrl: '/images/productos/hogar/juego-de-te.jpg',
    category: 'hogar',
    stock: 3,
  },
  {
    id: '6',
    title: 'Olla',
    description: 'Olla de fundición de hierro.',
    price: 89000,
    pictureUrl: '/images/productos/hogar/olla.jpg',
    category: 'hogar',
    stock: 4,
  },
]

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const getItems = (categoryId) => {
  return delay(800).then(() => {
    if (!categoryId) return productos
    return productos.filter((p) => p.category === categoryId)
  })
}

export const getItemById = (id) => {
  return delay(500).then(() => {
    const item = productos.find((p) => p.id === id)
    if (!item) throw new Error('Producto no encontrado')
    return item
  })
}
