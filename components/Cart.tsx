'use client'

import { FiX, FiTrash2, FiShoppingBag, FiMinus, FiPlus } from 'react-icons/fi'

interface CartItem {
  id: string
  name: string
  description: string
  price: number
  quantity?: number
}

interface CartProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onRemove: (index: number) => void
  onClear: () => void
  total: number
}

export default function Cart({
  isOpen,
  onClose,
  items,
  onRemove,
  onClear,
  total,
}: CartProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <FiShoppingBag className="w-6 h-6" />
              Carrito
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <FiShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                <p className="text-gray-500 text-lg">Tu carrito está vacío</p>
                <p className="text-gray-400 text-sm mt-2">
                  Agrega productos del menú o arma tu puka dog personalizado
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        {item.description && (
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => onRemove(index)}
                        className="ml-2 p-1 hover:bg-red-100 rounded text-red-600 transition-colors"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-lg font-bold text-primary-600">
                        {formatPrice(item.price)}
                      </span>
                      {item.quantity && item.quantity > 1 && (
                        <span className="text-sm text-gray-500">
                          Cantidad: {item.quantity}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-6 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-primary-600">
                  {formatPrice(total)}
                </span>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    // Integración con WhatsApp real de PukaDog
                    const message = `Hola, quiero hacer un pedido:\n\n${items
                      .map(
                        (item, i) =>
                          `${i + 1}. ${item.name} - ${formatPrice(item.price)}`
                      )
                      .join('\n')}\n\nTotal: ${formatPrice(total)}`
                    const whatsappUrl = `https://wa.me/message/UIEXFFM63W4BO1?text=${encodeURIComponent(
                      message
                    )}`
                    window.open(whatsappUrl, '_blank')
                  }}
                  className="btn-primary w-full"
                >
                  Realizar Pedido
                </button>
                <button
                  onClick={onClear}
                  className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium"
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
