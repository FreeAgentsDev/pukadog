'use client'

import Image from 'next/image'
import { FiInstagram, FiPhone } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-pukadog-ink text-pukadog-beige">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Pukadog"
                width={44}
                height={44}
                className="object-contain"
              />
              <div>
                <h3 className="text-xl font-bold font-display tracking-tight">
                  Pukadog
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-pukadog-beige/80">Hotdogs</p>
              </div>
            </div>
            <p className="slogan-serif text-sm not-italic text-pukadog-beige/90">
              Menos excesos, más bienestar.
            </p>
            <p className="text-sm text-pukadog-beige/70 mt-2">
              Manizales · Ingredientes frescos, salsas naturales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 font-display">Enlaces</h4>
            <ul className="space-y-2">
              {['Inicio', 'Menú', 'Armar Pedido', 'Nosotros', 'Contacto'].map((label, i) => {
                const hrefs = ['#inicio', '#menu', '#armar-pedido', '#nosotros', '#contacto']
                return (
                  <li key={label}>
                    <a
                      href={hrefs[i]}
                      className="text-pukadog-beige/80 hover:text-pukadog-beige transition-colors text-sm"
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 font-display">Síguenos</h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/pukadogcolombia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pukadog-beige/80 hover:text-pukadog-beige transition-colors text-sm"
              >
                <FiInstagram className="w-5 h-5" />
                @pukadogcolombia
              </a>
              <a
                href="https://wa.me/message/UIEXFFM63W4BO1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pukadog-beige/80 hover:text-pukadog-beige transition-colors text-sm"
              >
                <FiPhone className="w-5 h-5" />
                318 850 7284
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-pukadog-beige/20 pt-8 text-center">
          <p className="text-sm text-pukadog-beige/60">
            © {currentYear} Pukadog Manizales. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
