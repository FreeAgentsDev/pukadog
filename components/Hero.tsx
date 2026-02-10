'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FiArrowDown } from 'react-icons/fi'
import { useInstagramData } from '@/hooks/useInstagramData'

export default function Hero() {
  const { data } = useInstagramData()
  const scrollToMenu = () => {
    const element = document.querySelector('#menu')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-pukadog-beige pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="Pukadog"
              width={120}
              height={120}
              className="object-contain drop-shadow-sm"
              priority
            />
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="block w-12 h-px bg-pukadog-ink/30" />
            <span className="text-xs uppercase tracking-[0.25em] text-pukadog-inkLight font-light">
              Manizales
            </span>
            <span className="block w-12 h-px bg-pukadog-ink/30" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-pukadog-ink mb-4 font-display tracking-tight">
            Pukadog
          </h1>
          <p className="text-xl md:text-2xl uppercase tracking-widest text-pukadog-ink font-light mb-8">
            Hotdogs
          </p>

          {/* Slogan en serif - "Menos excesos más bienestar" */}
          <p className="slogan-serif text-xl md:text-2xl mb-10 max-w-xl mx-auto">
            Menos excesos, más bienestar
          </p>

          {/* Descripción */}
          <p className="text-lg text-pukadog-inkLight mb-10 max-w-2xl mx-auto">
            {data?.profile?.biography || 'Hotdogs con salsas naturales, ingredientes frescos y pan artesanal. Una pausa consciente en cada bocado.'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToMenu}
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              Ver Menú
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#armar-pedido')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
            >
              Armar mi pedido
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToMenu}
            className="animate-bounce text-pukadog-inkMuted hover:text-pukadog-ink transition-colors"
            aria-label="Bajar al menú"
          >
            <FiArrowDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  )
}
