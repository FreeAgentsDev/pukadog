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
    <section id="nosotros" className="py-20 bg-pukadog-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-title">Sobre Pukadog</h2>
          <p className="slogan-serif text-xl md:text-2xl mb-4">
            Menos excesos, más bienestar
          </p>
          <p className="section-subtitle mb-0">
            Reinventamos el hotdog con salsas naturales, ingredientes frescos, 
            pan artesanal de masa madre y opciones vegetarianas. Comer rico también puede ser consciente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pukadog-ink text-pukadog-beige rounded-full mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-pukadog-ink mb-2 font-display">{feature.title}</h3>
              <p className="text-pukadog-inkLight">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-12 bg-white/90">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-pukadog-ink mb-4 font-display">
                  Nuestra filosofía
                </h3>
                <p className="text-pukadog-inkLight mb-4 font-serif italic">
                  Comer en Pukadog es un ritual. Es relentizar, saborear, 
                  sentir cada ingrediente. Una pausa consciente; un oasis 
                  en un mundo de excesos.
                </p>
                <p className="text-pukadog-inkLight mb-4">
                  Pan artesanal de masa madre tipo brioche, harina integral sin azúcar, 
                  salsas naturales y salchichas vegetarianas llenas de sabor.
                </p>
                <p className="text-pukadog-inkLight">
                  Delicioso, consciente y sin culpas. Una propuesta sin excesos para disfrutar cada bocado.
                </p>
              </div>
              <div className="relative h-64 md:h-80 bg-pukadog-beigeDark/30 rounded-xl overflow-hidden">
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
