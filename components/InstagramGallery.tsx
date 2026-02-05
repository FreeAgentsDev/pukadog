'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiInstagram, FiHeart, FiMessageCircle } from 'react-icons/fi'

interface InstagramPost {
  shortcode: string
  url: string
  caption: string
  likes: number
  comments: number
  image_urls: string[]
  timestamp: string
  is_video?: boolean
}

export default function InstagramGallery() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/instagram')
        const data = await response.json()
        
        // Si hay posts en el análisis, filtrar solo los que tienen imágenes (no videos)
        if (data.posts && data.posts.length > 0) {
          const imagePosts = data.posts
            .filter((post: InstagramPost) => 
              !post.is_video && 
              post.image_urls && 
              post.image_urls.length > 0
            )
            .slice(0, 6) // Mostrar solo 6 posts
          setPosts(imagePosts)
        }
      } catch (error) {
        console.error('Error fetching Instagram posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="py-12 text-center">
        <p className="text-pukadog-inkLight">Cargando publicaciones de Instagram...</p>
      </div>
    )
  }

  if (posts.length === 0) {
    return null // No mostrar si no hay posts
  }

  return (
    <section className="py-20 bg-pukadog-beigeLight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-px bg-pukadog-ink/20" />
            <FiInstagram className="w-6 h-6 text-pukadog-ink" />
            <span className="block w-8 h-px bg-pukadog-ink/20" />
          </div>
          <h2 className="text-4xl font-bold text-pukadog-ink font-display mb-2">
            Síguenos en Instagram
          </h2>
          <p className="text-pukadog-inkLight">
            @pukadogcolombia
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, index) => (
            <a
              key={post.shortcode}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg bg-pukadog-beigeDark/20 hover:opacity-95 transition-opacity border border-pukadog-beigeDark/10"
            >
              {post.image_urls && post.image_urls[0] ? (
                <Image
                  src={post.image_urls[0].startsWith('/') 
                    ? post.image_urls[0] 
                    : `/images/instagram/${post.image_urls[0].split('/').pop()}`}
                  alt={post.caption?.substring(0, 50) || 'Post de Instagram'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                />
              ) : (
                <div className="w-full h-full bg-pukadog-beigeDark/20 flex items-center justify-center">
                  <span className="text-4xl">🌭</span>
                </div>
              )}
              
              {/* Overlay con estadísticas */}
              <div className="absolute inset-0 bg-pukadog-ink/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-pukadog-beige">
                <div className="flex items-center gap-1">
                  <FiHeart className="w-5 h-5" />
                  <span className="font-semibold">{post.likes.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiMessageCircle className="w-5 h-5" />
                  <span className="font-semibold">{post.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/pukadogcolombia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <FiInstagram className="w-5 h-5" />
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
