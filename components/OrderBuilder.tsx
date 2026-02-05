'use client'

import { useState } from 'react'
import { FiPlus, FiMinus, FiShoppingCart, FiCheck } from 'react-icons/fi'

interface OrderBuilderProps {
  onAddToCart: (item: any) => void
}

interface Ingredient {
  id: string
  name: string
  category: string
  price: number
}

const baseOptions = {
  salchicha: [
    { id: '1', name: 'Salchicha Premium', price: 0 },
    { id: '2', name: 'Salchicha Vegetal', price: 2000 },
    { id: '3', name: 'Salchicha Ahumada', price: 1500 },
  ],
  pan: [
    { id: '1', name: 'Pan Clásico', price: 0 },
    { id: '2', name: 'Pan Integral', price: 1000 },
    { id: '3', name: 'Pan Ajo', price: 1500 },
  ],
}

const ingredients: Ingredient[] = [
  { id: '1', name: 'Queso Cheddar', category: 'quesos', price: 2000 },
  { id: '2', name: 'Queso Mozzarella', category: 'quesos', price: 2000 },
  { id: '3', name: 'Tocineta', category: 'carnes', price: 3000 },
  { id: '4', name: 'Jamón', category: 'carnes', price: 2500 },
  { id: '5', name: 'Cebolla Caramelizada', category: 'vegetales', price: 1500 },
  { id: '6', name: 'Cebolla Cruda', category: 'vegetales', price: 0 },
  { id: '7', name: 'Tomate', category: 'vegetales', price: 0 },
  { id: '8', name: 'Lechuga', category: 'vegetales', price: 0 },
  { id: '9', name: 'Jalapeños', category: 'vegetales', price: 1000 },
  { id: '10', name: 'Champiñones', category: 'vegetales', price: 2000 },
  { id: '11', name: 'Aguacate', category: 'vegetales', price: 2500 },
  { id: '12', name: 'Piña', category: 'vegetales', price: 2000 },
  { id: '13', name: 'Nachos', category: 'extras', price: 2000 },
  { id: '14', name: 'Aros de Cebolla', category: 'extras', price: 3000 },
  { id: '15', name: 'Papas Fritas', category: 'extras', price: 3000 },
]

const salsas = [
  { id: '1', name: 'Salsa de Tomate', price: 0 },
  { id: '2', name: 'Mostaza', price: 0 },
  { id: '3', name: 'Mayonesa', price: 0 },
  { id: '4', name: 'Salsa BBQ', price: 0 },
  { id: '5', name: 'Salsa Picante', price: 0 },
  { id: '6', name: 'Salsa Especial', price: 1000 },
  { id: '7', name: 'Guacamole', price: 2000 },
]

export default function OrderBuilder({ onAddToCart }: OrderBuilderProps) {
  const [selectedSalchicha, setSelectedSalchicha] = useState(baseOptions.salchicha[0].id)
  const [selectedPan, setSelectedPan] = useState(baseOptions.pan[0].id)
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
  const [selectedSalsas, setSelectedSalsas] = useState<string[]>(['1', '2', '3'])
  const [quantity, setQuantity] = useState(1)

  const toggleIngredient = (id: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const toggleSalsa = (id: string) => {
    setSelectedSalsas((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const calculatePrice = () => {
    const salchichaPrice = baseOptions.salchicha.find((s) => s.id === selectedSalchicha)?.price || 0
    const panPrice = baseOptions.pan.find((p) => p.id === selectedPan)?.price || 0
    const ingredientsPrice = selectedIngredients.reduce(
      (sum, id) => sum + (ingredients.find((i) => i.id === id)?.price || 0),
      0
    )
    const salsasPrice = selectedSalsas.reduce(
      (sum, id) => sum + (salsas.find((s) => s.id === id)?.price || 0),
      0
    )
    const basePrice = 10000
    return (basePrice + salchichaPrice + panPrice + ingredientsPrice + salsasPrice) * quantity
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleAddToCart = () => {
    const salchichaName = baseOptions.salchicha.find((s) => s.id === selectedSalchicha)?.name || ''
    const panName = baseOptions.pan.find((p) => p.id === selectedPan)?.name || ''
    const ingredientsNames = selectedIngredients
      .map((id) => ingredients.find((i) => i.id === id)?.name)
      .filter(Boolean)
    const salsasNames = selectedSalsas
      .map((id) => salsas.find((s) => s.id === id)?.name)
      .filter(Boolean)

    const customItem = {
      id: `custom-${Date.now()}`,
      name: 'Puka Dog Personalizado',
      description: `${salchichaName}, ${panName}. Ingredientes: ${ingredientsNames.join(', ') || 'Ninguno'}. Salsas: ${salsasNames.join(', ')}`,
      price: calculatePrice(),
      quantity,
      custom: true,
    }

    onAddToCart(customItem)
  }

  const ingredientCategories = ['quesos', 'carnes', 'vegetales', 'extras']

  return (
    <section id="armar-pedido" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Arma Tu Puka Dog</h2>
        <p className="section-subtitle">
          Personaliza tu puka dog con tus ingredientes favoritos. ¡Crea la combinación perfecta!
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Builder Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Base Options */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Base</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Salchicha
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {baseOptions.salchicha.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setSelectedSalchicha(option.id)}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            selectedSalchicha === option.id
                              ? 'border-primary-600 bg-primary-50'
                              : 'border-gray-200 hover:border-primary-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{option.name}</span>
                            {selectedSalchicha === option.id && (
                              <FiCheck className="w-5 h-5 text-primary-600" />
                            )}
                          </div>
                          {option.price > 0 && (
                            <span className="text-xs text-gray-600 mt-1">
                              +{formatPrice(option.price)}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pan
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {baseOptions.pan.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setSelectedPan(option.id)}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            selectedPan === option.id
                              ? 'border-primary-600 bg-primary-50'
                              : 'border-gray-200 hover:border-primary-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{option.name}</span>
                            {selectedPan === option.id && (
                              <FiCheck className="w-5 h-5 text-primary-600" />
                            )}
                          </div>
                          {option.price > 0 && (
                            <span className="text-xs text-gray-600 mt-1">
                              +{formatPrice(option.price)}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ingredientes</h3>
                <div className="space-y-4">
                  {ingredientCategories.map((category) => {
                    const categoryIngredients = ingredients.filter(
                      (i) => i.category === category
                    )
                    return (
                      <div key={category}>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2 capitalize">
                          {category}
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {categoryIngredients.map((ingredient) => (
                            <button
                              key={ingredient.id}
                              onClick={() => toggleIngredient(ingredient.id)}
                              className={`p-2 rounded-lg border-2 transition-all text-left ${
                                selectedIngredients.includes(ingredient.id)
                                  ? 'border-primary-600 bg-primary-50'
                                  : 'border-gray-200 hover:border-primary-300'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">{ingredient.name}</span>
                                {selectedIngredients.includes(ingredient.id) && (
                                  <FiCheck className="w-4 h-4 text-primary-600 flex-shrink-0" />
                                )}
                              </div>
                              {ingredient.price > 0 && (
                                <span className="text-xs text-gray-600">
                                  +{formatPrice(ingredient.price)}
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Salsas */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Salsas</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {salsas.map((salsa) => (
                    <button
                      key={salsa.id}
                      onClick={() => toggleSalsa(salsa.id)}
                      className={`p-2 rounded-lg border-2 transition-all ${
                        selectedSalsas.includes(salsa.id)
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{salsa.name}</span>
                        {selectedSalsas.includes(salsa.id) && (
                          <FiCheck className="w-4 h-4 text-primary-600" />
                        )}
                      </div>
                      {salsa.price > 0 && (
                        <span className="text-xs text-gray-600">
                          +{formatPrice(salsa.price)}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary Panel */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Resumen</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Salchicha seleccionada:</p>
                    <p className="font-medium">
                      {baseOptions.salchicha.find((s) => s.id === selectedSalchicha)?.name}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Pan seleccionado:</p>
                    <p className="font-medium">
                      {baseOptions.pan.find((p) => p.id === selectedPan)?.name}
                    </p>
                  </div>

                  {selectedIngredients.length > 0 && (
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Ingredientes extras:</p>
                      <ul className="text-sm space-y-1">
                        {selectedIngredients.map((id) => {
                          const ing = ingredients.find((i) => i.id === id)
                          return ing ? <li key={id}>• {ing.name}</li> : null
                        })}
                      </ul>
                    </div>
                  )}

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Salsas:</p>
                    <ul className="text-sm space-y-1">
                      {selectedSalsas.map((id) => {
                        const salsa = salsas.find((s) => s.id === id)
                        return salsa ? <li key={id}>• {salsa.name}</li> : null
                      })}
                    </ul>
                  </div>
                </div>

                <div className="border-t pt-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">Cantidad:</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-1 rounded-lg border border-gray-300 hover:bg-gray-100"
                      >
                        <FiMinus className="w-4 h-4" />
                      </button>
                      <span className="font-bold text-lg w-8 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-1 rounded-lg border border-gray-300 hover:bg-gray-100"
                      >
                        <FiPlus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-primary-600">
                      {formatPrice(calculatePrice())}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <FiShoppingCart className="w-5 h-5" />
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
