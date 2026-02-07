'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import { FiX, FiTrash2, FiShoppingBag } from 'react-icons/fi'

// Número WhatsApp Pukadog (Colombia) para enlace universal móvil/desktop
const WHATSAPP_NUMBER = '573188507284'

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

  // URL de WhatsApp con mensaje pre-rellenado (funciona en móvil y desktop)
  const whatsappOrderUrl = useMemo(() => {
    const lines = items.map((item, i) => {
      const qty = item.quantity && item.quantity > 1 ? item.quantity : 1
      const qtyStr = qty > 1 ? `${qty}x ` : ''
      return `${i + 1}. ${qtyStr}${item.name} - ${formatPrice(item.price)}`
    })
    const message = [
      'Hola, quiero hacer un pedido:',
      '',
      ...lines,
      '',
      `Total: ${formatPrice(total)}`,
    ].join('\n')
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  }, [items, total])

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-pukadog-beigeLight shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto border-l border-pukadog-beigeDark/20">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-pukadog-beigeDark/20">
            <h2 className="text-2xl font-bold text-pukadog-ink flex items-center gap-2 font-display">
              <Image src="/logo.png" alt="" width={32} height={32} className="object-contain" />
              <FiShoppingBag className="w-6 h-6" />
              Carrito
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-pukadog-beige rounded-lg transition-colors text-pukadog-ink"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <FiShoppingBag className="w-16 h-16 text-pukadog-beigeDark/40 mb-4" />
                <p className="text-pukadog-inkLight text-lg">Tu carrito está vacío</p>
                <p className="text-pukadog-inkMuted text-sm mt-2">
                  Agrega productos del menú o arma tu Pukadog personalizado
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="bg-white/80 rounded-lg p-4 border border-pukadog-beigeDark/20"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-pukadog-ink">{item.name}</h3>
                        {item.description && (
                          <p className="text-sm text-pukadog-inkLight mt-1 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => onRemove(index)}
                        className="ml-2 p-1 hover:bg-pukadog-beige rounded text-pukadog-ink transition-colors"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-lg font-bold text-pukadog-ink">
                        {formatPrice(item.price)}
                      </span>
                      {item.quantity && item.quantity > 1 && (
                        <span className="text-sm text-pukadog-inkMuted">
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
            <div className="border-t border-pukadog-beigeDark/20 p-6 bg-white/50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-pukadog-ink">Total:</span>
                <span className="text-2xl font-bold text-pukadog-ink">
                  {formatPrice(total)}
                </span>
              </div>
              <div className="space-y-3">
                <a
                  href={whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full inline-flex items-center justify-center"
                >
                  Realizar pedido por WhatsApp
                </a>
                <button
                  onClick={onClear}
                  className="w-full py-2 px-4 border border-pukadog-ink/30 rounded-lg text-pukadog-ink hover:bg-pukadog-beige transition-colors font-medium"
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
