const productos = [
  {
    id: '1',
    title: 'Notebook Pro',
    description: 'Laptop 15", 16GB RAM, 512GB SSD. Ideal para trabajo y estudio.',
    price: 89900,
    pictureUrl: 'https://picsum.photos/seed/notebook/400/300',
    category: 'electronica',
    stock: 5,
  },
  {
    id: '2',
    title: 'Auriculares inalámbricos',
    description: 'Sonido envolvente, cancelación de ruido, 20h de batería.',
    price: 15900,
    pictureUrl: 'https://picsum.photos/seed/auriculares/400/300',
    category: 'electronica',
    stock: 12,
  },
  {
    id: '3',
    title: 'El principito',
    description: 'Edición ilustrada del clásico de Antoine de Saint-Exupéry.',
    price: 4500,
    pictureUrl: 'https://picsum.photos/seed/principito/400/300',
    category: 'libros',
    stock: 20,
  },
  {
    id: '4',
    title: 'Cien años de soledad',
    description: 'Gabriel García Márquez. Realismo mágico latinoamericano.',
    price: 6200,
    pictureUrl: 'https://picsum.photos/seed/cien/400/300',
    category: 'libros',
    stock: 8,
  },
  {
    id: '5',
    title: 'Bicicleta urbana',
    description: 'Cuadro aluminio, 21 velocidades, frenos a disco.',
    price: 125000,
    pictureUrl: 'https://picsum.photos/seed/bici/400/300',
    category: 'vehiculos',
    stock: 3,
  },
  {
    id: '6',
    title: 'Monopatín eléctrico',
    description: 'Autonomía 25 km, velocidad máxima 25 km/h.',
    price: 89000,
    pictureUrl: 'https://picsum.photos/seed/mono/400/300',
    category: 'vehiculos',
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
