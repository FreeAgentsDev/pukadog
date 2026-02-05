'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MenuSection from '@/components/MenuSection'
import OrderBuilder from '@/components/OrderBuilder'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import InstagramGallery from '@/components/InstagramGallery'
import Footer from '@/components/Footer'
import Cart from '@/components/Cart'

export default function Home() {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (item: any) => {
    setCartItems([...cartItems, item])
    setIsCartOpen(true)
  }

  const removeFromCart = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <main className="min-h-screen bg-pukadog-beige">
      <Header cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <MenuSection onAddToCart={addToCart} />
      <OrderBuilder onAddToCart={addToCart} />
      <InstagramGallery />
      <AboutSection />
      <ContactSection />
      <Footer />
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
        onClear={clearCart}
        total={cartTotal}
      />
    </main>
  )
}
