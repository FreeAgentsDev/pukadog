'use client'

import { FiMapPin, FiPhone, FiMail, FiInstagram, FiClock } from 'react-icons/fi'

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contáctanos</h2>
        <p className="section-subtitle">
          Estamos aquí para servirte. Visítanos o contáctanos para hacer tu pedido
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FiMapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ubicación</h3>
                    <p className="text-gray-600">
                      Calle 63 # 24-41, Barrio Palogrande
                      <br />
                      <span className="text-sm">Cerca al coliseo, Manizales</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FiPhone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfono / WhatsApp</h3>
                    <a
                      href="https://wa.me/message/UIEXFFM63W4BO1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      318 850 7284
                    </a>
                    <br />
                    <a
                      href="https://wa.me/message/UIEXFFM63W4BO1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-500 hover:text-primary-600 mt-1 inline-block"
                    >
                      Abrir WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FiInstagram className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Instagram</h3>
                    <a
                      href="https://www.instagram.com/pukadogcolombia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      @pukadogcolombia
                    </a>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FiClock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Horarios</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Lunes - Viernes: 11:00 AM - 9:00 PM</p>
                      <p>Sábados: 12:00 PM - 10:00 PM</p>
                      <p>Domingos: 12:00 PM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="card p-6 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Encuéntranos</h3>
              <div className="relative h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <FiMapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Calle 63 # 24-41</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Barrio Palogrande, Manizales
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="https://www.instagram.com/pukadogcolombia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                >
                  Ver en Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
