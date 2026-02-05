'use client'

import { FiHeart, FiAward, FiUsers, FiClock } from 'react-icons/fi'

export default function AboutSection() {
  const features = [
    {
      icon: FiHeart,
      title: 'Hecho con Amor',
      description: 'Cada puka dog se prepara con dedicación y los mejores ingredientes frescos',
    },
    {
      icon: FiAward,
      title: 'Calidad Premium',
      description: 'Ingredientes seleccionados de la más alta calidad para garantizar el mejor sabor',
    },
    {
      icon: FiUsers,
      title: 'Para Todos',
      description: 'Opciones para todos los gustos, incluyendo opciones vegetarianas',
    },
    {
      icon: FiClock,
      title: 'Rápido y Fresco',
      description: 'Preparación rápida sin comprometer la calidad y frescura',
    },
  ]

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-title">Sobre PukaDog</h2>
          <p className="section-subtitle">
            "Menos excesos, más bienestar" - Reinventamos el clásico puka dog con salsas naturales, 
            ingredientes frescos, pan artesanal de masa madre y salchichas vegetarianas llenas de sabor. 
            Porque comer rico también puede ser saludable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Nuestra Filosofía
                </h3>
                <p className="text-gray-600 mb-4">
                  Comer algo en PukaDog es más como un ritual. Es relentizar, es saborear, 
                  es sentir cada ingrediente, es una pausa consciente, es como un oasis 
                  en un mundo de excesos.
                </p>
                <p className="text-gray-600 mb-4">
                  Queremos que hagas una pausa para percibir cada ingrediente. Usamos pan 
                  artesanal de masa madre tipo Brioche y harina integral cero azúcar, 
                  salsas naturales y salchichas vegetarianas llenas de sabor.
                </p>
                <p className="text-gray-600">
                  Nuestro compromiso es ofrecerte deliciosos, saludables y sin culpas. 
                  Una propuesta sin excesos para que disfrutes cada bocado.
                </p>
              </div>
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl">🌭</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
