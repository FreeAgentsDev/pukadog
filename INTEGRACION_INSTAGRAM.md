# 📸 Integración con Instagram Analyzer

Este proyecto está integrado con el repositorio [ig-analyzer-page-creator](https://github.com/FreeAgentsDev/ig-analyzer-page-creator) para analizar el Instagram de PukaDog y personalizar automáticamente la página web.

## 🎯 ¿Qué hace el analizador?

El analizador de Instagram extrae información real del perfil de PukaDog para:

1. **Obtener datos del perfil**: Biografía, nombre completo, seguidores
2. **Descargar imágenes**: Imágenes de los últimos posts para usar en la página
3. **Identificar productos**: Detecta productos mencionados en los captions
4. **Extraer paleta de colores**: Analiza el estilo visual del perfil
5. **Generar datos estructurados**: Crea un JSON con toda la información

## 🚀 Uso Rápido

### Paso 1: Instalar dependencias de Python

```bash
cd ig-analyzer
pip install -r requirements.txt
```

### Paso 2: Ejecutar análisis

```bash
# Opción 1: Usando npm script
npm run analyze:ig

# Opción 2: Directamente con Python
cd ig-analyzer
python3 instagram_analyzer.py pukadogcolombia -d -o ../public/images/instagram
```

Esto:
- Analiza el perfil `@pukadogcolombia`
- Descarga las imágenes de los últimos 12 posts
- Genera `pukadogcolombia_analysis.json`

### Paso 3: Procesar datos para la web

```bash
# Opción 1: Usando npm script
npm run process:ig

# Opción 2: Directamente con Node
node scripts/analyze-pukadog.js
```

Esto procesa el JSON y crea `data/instagram-analysis.json` con datos estructurados.

### Paso 4: La página web usa los datos automáticamente

La página web consulta `/api/instagram` que lee `data/instagram-analysis.json` y:
- Actualiza la biografía en el Hero
- Muestra imágenes reales en la galería de Instagram
- Ajusta colores según el estilo del perfil
- Identifica productos mencionados en los posts

## 📁 Estructura de Archivos

```
pukadog/
├── ig-analyzer/                    # Repositorio clonado del analizador
│   ├── instagram_analyzer.py       # Script principal
│   ├── requirements.txt            # Dependencias Python
│   └── pukadogcolombia_analysis.json  # JSON generado (no se commitea)
├── scripts/
│   ├── analyze-pukadog.js          # Procesa el JSON para la web
│   └── README.md                   # Documentación de scripts
├── data/
│   └── instagram-analysis.json     # Datos procesados para la web (no se commitea)
├── public/
│   └── images/
│       └── instagram/              # Imágenes descargadas (no se commitea)
└── app/
    └── api/
        └── instagram/
            └── route.ts            # API que sirve los datos
```

## 🔄 Flujo de Datos

```
Instagram Profile (@pukadogcolombia)
    ↓
instagram_analyzer.py (Python)
    ↓
pukadogcolombia_analysis.json
    ↓
analyze-pukadog.js (Node.js)
    ↓
data/instagram-analysis.json
    ↓
/api/instagram (Next.js API Route)
    ↓
Componentes React (Hero, InstagramGallery, etc.)
```

## ⚠️ Limitaciones y Soluciones

### Rate Limiting de Instagram

Instagram puede limitar las solicitudes. Si ves errores como:
```
401 Unauthorized - "Please wait a few minutes before you try again"
```

**Solución**: Espera 5-10 minutos y vuelve a intentar.

### Perfil Privado

El analizador solo funciona con perfiles públicos.

**Solución**: Asegúrate de que el perfil `@pukadogcolombia` sea público.

### Sin Datos Disponibles

Si no hay datos del análisis, la página usa valores por defecto basados en el estilo típico de puka dogs.

## 🎨 Personalización Manual

Si prefieres personalizar manualmente sin usar el analizador:

1. Edita `data/instagram-analysis.json` directamente
2. Agrega imágenes en `public/images/instagram/`
3. Actualiza los colores en `tailwind.config.js`
4. Modifica los productos en `components/MenuSection.tsx`

## 📊 Datos Extraídos

El analizador extrae:

- **Perfil**: username, fullName, biography, followers, profilePic
- **Posts**: shortcode, url, caption, likes, comments, image_urls, timestamp
- **Colores**: primary, secondary, accent, background
- **Productos**: Productos identificados por keywords en los captions
- **Estilo**: Características visuales (casual, colorido, enfoque en comida)

## 🔧 Troubleshooting

### Error: "No module named 'instaloader'"

```bash
cd ig-analyzer
pip install -r requirements.txt
```

### Error: "FileNotFoundError: data/instagram-analysis.json"

El archivo se crea automáticamente al ejecutar `npm run process:ig`. Si no existe, la API usa datos por defecto.

### Las imágenes no se muestran

1. Verifica que las imágenes se descargaron en `public/images/instagram/`
2. Asegúrate de que las rutas en el JSON sean correctas
3. Revisa la consola del navegador para errores de carga

## 📝 Notas Finales

- Los archivos generados (`*_analysis.json`, imágenes) no se commitean (están en `.gitignore`)
- Ejecuta el análisis periódicamente para mantener los datos actualizados
- El analizador respeta los términos de servicio de Instagram
- Las imágenes descargadas pertenecen a sus respectivos propietarios

---

**¿Preguntas?** Revisa la documentación del repositorio original: https://github.com/FreeAgentsDev/ig-analyzer-page-creator
