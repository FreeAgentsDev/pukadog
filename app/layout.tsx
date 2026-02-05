import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pukadog Manizales - Hotdogs. Menos excesos, más bienestar',
  description: 'Hotdogs con salsas naturales, ingredientes frescos y pan artesanal. Menos excesos, más bienestar.',
  keywords: 'pukadog, hotdogs, manizales, comida consciente, bienestar',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
