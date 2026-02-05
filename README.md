# PukaDog Manizales - Página Web Completa

Página web completa para PukaDog Manizales con menú integrado y constructor de pedidos personalizado.

## 🚀 Características

- **Menú Integrado**: Catálogo completo de productos con categorías
- **Constructor de Pedidos**: Sistema interactivo para personalizar puka dogs
- **Carrito de Compras**: Gestión de pedidos con integración a WhatsApp
- **Diseño Responsive**: Optimizado para móviles, tablets y desktop
- **Tailwind CSS**: Diseño moderno y estético
- **Next.js 14**: Framework React con App Router

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio o navega al directorio del proyecto:
```bash
cd pukadog
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
pukadog/
├── app/
│   ├── globals.css          # Estilos globales y Tailwind
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── components/
│   ├── Header.tsx           # Navegación y menú
│   ├── Hero.tsx             # Sección hero
│   ├── MenuSection.tsx      # Catálogo de productos
│   ├── OrderBuilder.tsx     # Constructor de pedidos
│   ├── Cart.tsx             # Carrito de compras
│   ├── AboutSection.tsx     # Sección sobre nosotros
│   ├── ContactSection.tsx   # Información de contacto
│   └── Footer.tsx           # Pie de página
├── public/                  # Archivos estáticos (imágenes)
└── package.json
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`. Puedes modificar:
- `primary`: Color principal (naranja)
- `secondary`: Color secundario (rojo)

### Productos del Menú

Edita el array `menuItems` en `components/MenuSection.tsx` para agregar o modificar productos.

### Constructor de Pedidos

Personaliza los ingredientes y opciones en `components/OrderBuilder.tsx`:
- `baseOptions`: Opciones de salchicha y pan
- `ingredients`: Lista de ingredientes disponibles
- `salsas`: Salsas disponibles

### Integración WhatsApp

En `components/Cart.tsx`, modifica el número de teléfono en la función de "Realizar Pedido":
```typescript
const whatsappUrl = `https://wa.me/TU_NUMERO_AQUI?text=${encodeURIComponent(message)}`
```

## 📱 Secciones de la Página

1. **Hero**: Presentación principal con CTAs
2. **Menú**: Catálogo de productos con filtros por categoría
3. **Constructor de Pedidos**: Personalización interactiva
4. **Sobre Nosotros**: Información de la empresa
5. **Contacto**: Información de contacto y ubicación
6. **Footer**: Enlaces y redes sociales

## 🚀 Build para Producción

```bash
npm run build
npm start
```

## 📊 Análisis de Instagram

Este proyecto incluye un analizador de Instagram que extrae información real del perfil de PukaDog para personalizar la página web.

### Usar el Analizador

1. **Instalar dependencias de Python:**
```bash
cd ig-analyzer
pip install -r requirements.txt
```

2. **Ejecutar análisis:**
```bash
# Análisis con descarga de imágenes
python3 instagram_analyzer.py pukadogcolombia -d -o ../public/images/instagram
```

3. **Procesar datos para la web:**
```bash
node scripts/analyze-pukadog.js
```

Esto generará `data/instagram-analysis.json` con:
- Información del perfil
- Paleta de colores extraída
- Productos identificados en los posts
- Imágenes descargadas

La página web usará automáticamente estos datos a través de la API `/api/instagram`.

### Notas sobre el Analizador

- Instagram puede limitar solicitudes (rate limiting). Si ocurre, espera unos minutos y vuelve a intentar.
- Funciona mejor con perfiles públicos.
- Las imágenes se guardan en `public/images/instagram/`.
- Los datos se actualizan automáticamente en la página.

## 📝 Notas

- Las imágenes de productos son placeholders. Reemplázalas con imágenes reales en la carpeta `public/images/`
- Actualiza la información de contacto con los datos reales del negocio
- Personaliza los precios según tu menú actual
- Ajusta los horarios en la sección de contacto
- Usa el analizador de Instagram para obtener datos reales del negocio

## 📄 Licencia

Este proyecto fue creado para PukaDog Manizales.

---

**Desarrollado con ❤️ para PukaDog Manizales**
