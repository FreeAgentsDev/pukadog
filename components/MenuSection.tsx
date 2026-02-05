'use client'

import { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  popular?: boolean
}

interface MenuSectionProps {
  onAddToCart: (item: any) => void
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Puka Dog Vegetariano',
    description: 'Pan integral, chorizo vegetariano, tres salsas naturales. Una propuesta sin excesos',
    price: 14000,
    image: '/images/instagram/pukadogcolombia_DUCMq0UDJXQ_1.jpg',
    category: 'vegetarianos',
    popular: true,
  },
  {
    id: '2',
    name: 'Puka Dog Premium con Pollo',
    description: 'Pollo premium, queso ricotta, salsa de piña con pimentones asados. Una combinación única y deliciosa',
    price: 16000,
    image: '/images/instagram/pukadogcolombia_DTl5rnijADs.jpg',
    category: 'especiales',
    popular: true,
  },
  {
    id: '3',
    name: 'Puka Dog Artesanal',
    description: 'Pan artesanal de masa madre tipo Brioche, harina integral cero azúcar, salsas naturales e ingredientes frescos',
    price: 15000,
    image: '/images/instagram/pukadogcolombia_DUERoqCksP1.jpg',
    category: 'clasicos',
    popular: true,
  },
  {
    id: '4',
    name: 'Puka Dog Clásico',
    description: 'Pan integral, salchicha vegetariana, salsas naturales. Ideal para quienes buscan un sabor delicioso sin excesos',
    price: 12000,
    image: '/images/instagram/pukadogcolombia_DT8t0Leko1N.jpg',
    category: 'clasicos',
  },
  {
    id: '5',
    name: 'Puka Dog con Salsa de Piña',
    description: 'Salsa de piña artesanal con ingredientes de calidad. Una salsa que realza el sabor de ingredientes premium',
    price: 15000,
    image: '/images/instagram/pukadogcolombia_DSvWmVnkgfq_1.jpg',
    category: 'especiales',
  },
  {
    id: '6',
    name: 'Kombucha',
    description: 'Bebida probiótica fermentada, saludable y refrescante',
    price: 5000,
    image: '/images/instagram/pukadogcolombia_DTyokHQDMGV.jpg',
    category: 'bebidas',
  },
  {
    id: '7',
    name: 'Snacks Saludables',
    description: 'Snacks saludables para acompañar tu puka dog',
    price: 6000,
    image: '/images/instagram/pukadogcolombia_DS0sCHdkqoV.jpg',
    category: 'acompanamientos',
  },
  {
    id: '8',
    name: 'Cóctel Sin Licor',
    description: 'Refrescante cóctel sin alcohol, perfecto para cualquier momento',
    price: 8000,
    image: '/images/instagram/pukadogcolombia_DS2hIsnjWHL_1.jpg',
    category: 'bebidas',
  },
]

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
  const categories = ['todos', 'clasicos', 'especiales', 'vegetarianos', 'bebidas', 'acompanamientos']
  const [activeCategory, setActiveCategory] = useState('todos')

  const filteredItems =
    activeCategory === 'todos'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section id="menu" className="py-20 bg-pukadog-beigeLight">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nuestro menú</h2>
        <p className="section-subtitle">
          Ingredientes frescos, salsas naturales y pan artesanal. Calidad sin excesos.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-pukadog-ink text-pukadog-beige'
                  : 'bg-white/80 text-pukadog-inkLight hover:bg-pukadog-beigeDark/30 border border-pukadog-beigeDark/20'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="card group">
              {item.popular && (
                <div className="absolute top-4 right-4 z-10 bg-pukadog-ink text-pukadog-beige px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                  Popular
                </div>
              )}
              
              {/* Image */}
              <div className="relative h-48 bg-pukadog-beigeDark/20 overflow-hidden">
                {item.image && item.image.startsWith('/images/instagram/') ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">🌭</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-pukadog-ink mb-2 font-display">{item.name}</h3>
                <p className="text-pukadog-inkLight mb-4 text-sm">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-pukadog-ink">
                    {formatPrice(item.price)}
                  </span>
                  <button
                    onClick={() => onAddToCart({
                      ...item,
                      quantity: 1,
                    })}
                    className="btn-primary flex items-center gap-2 py-2 px-4 text-sm"
                  >
                    <FiShoppingCart className="w-4 h-4" />
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
