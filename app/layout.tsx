import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PukaDog Manizales - Los Mejores Puka Dogs',
  description: 'Disfruta de los mejores puka dogs en Manizales. Menú completo, personaliza tu pedido y ordena ahora.',
  keywords: 'puka dogs, manizales, comida rápida, pukadog, perros calientes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
