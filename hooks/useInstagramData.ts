'use client'

import { useState, useEffect } from 'react'

interface InstagramData {
  profile: {
    username: string
    fullName: string
    biography: string
    followers: number
    profilePic: string | null
  }
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
  }
  products: any[]
  style: {
    isCasual: boolean
    isColorful: boolean
    hasFoodFocus: boolean
    tone: string
  }
}

export function useInstagramData() {
  const [data, setData] = useState<InstagramData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/instagram')
        const instagramData = await response.json()
        // No usar respuesta si es error o no tiene el formato esperado
        if (instagramData?.error || !instagramData?.profile) {
          throw new Error(instagramData?.error || 'Formato de datos inválido')
        }
        setData(instagramData)
      } catch (error) {
        console.error('Error fetching Instagram data:', error)
        // Usar datos por defecto
        setData({
          profile: {
            username: 'pukadogcolombia',
            fullName: 'PukaDog Colombia',
            biography: 'Los mejores puka dogs de Manizales 🌭',
            followers: 0,
            profilePic: null,
          },
          colors: {
            primary: '#f97316',
            secondary: '#ef4444',
            accent: '#fbbf24',
            background: '#fff7ed',
          },
          products: [],
          style: {
            isCasual: true,
            isColorful: true,
            hasFoodFocus: true,
            tone: 'amigable y apetitoso',
          },
        })
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading }
}
