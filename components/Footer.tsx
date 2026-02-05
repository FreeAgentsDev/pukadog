'use client'

import { FiInstagram, FiPhone, FiMail } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">PD</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  Puka<span className="text-primary-400">Dog</span>
                </h3>
                <p className="text-xs text-gray-400">Manizales</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Los mejores puka dogs de Manizales. Preparados con amor e ingredientes frescos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Menú
                </a>
              </li>
              <li>
                <a
                  href="#armar-pedido"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Armar Pedido
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Síguenos</h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/pukadogcolombia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                <FiInstagram className="w-5 h-5" />
                @pukadogcolombia
              </a>
              <a
                href="tel:+573001234567"
                className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                <FiPhone className="w-5 h-5" />
                +57 300 123 4567
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} PukaDog Manizales. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
