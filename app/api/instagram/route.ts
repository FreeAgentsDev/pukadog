import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    // Intentar leer el análisis si existe
    const analysisPath = path.join(process.cwd(), 'data', 'instagram-analysis.json')
    
    if (fs.existsSync(analysisPath)) {
      const analysis = JSON.parse(fs.readFileSync(analysisPath, 'utf-8'))
      
      // Corregir rutas de imágenes para Next.js
      if (analysis.posts) {
        analysis.posts = analysis.posts.map((post: any) => ({
          ...post,
          image_urls: post.image_urls?.map((img: string) => 
            img.replace('../public', '').replace('public/', '/')
          ) || []
        }))
      }
      
      if (analysis.products) {
        analysis.products = analysis.products.map((product: any) => ({
          ...product,
          image: product.image?.replace('../public', '').replace('public/', '/') || null
        }))
      }
      
      return NextResponse.json(analysis)
    }

    // Datos por defecto basados en el estilo de PukaDog
    const defaultData = {
      profile: {
        username: 'pukadogcolombia',
        fullName: 'PukaDog Colombia',
        biography: 'Los mejores puka dogs de Manizales 🌭 Deliciosos, frescos y con los mejores ingredientes',
        followers: 0,
        profilePic: null,
      },
      colors: {
        primary: '#f97316', // Naranja vibrante
        secondary: '#ef4444', // Rojo
        accent: '#fbbf24', // Amarillo mostaza
        background: '#fff7ed', // Crema
      },
      products: [],
      style: {
        isCasual: true,
        isColorful: true,
        hasFoodFocus: true,
        tone: 'amigable y apetitoso',
      },
    }

    return NextResponse.json(defaultData)
  } catch (error) {
    console.error('Error reading Instagram analysis:', error)
    return NextResponse.json(
      { error: 'Error al leer análisis de Instagram' },
      { status: 500 }
    )
  }
}
