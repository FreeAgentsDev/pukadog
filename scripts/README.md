# Scripts de Análisis de Instagram

Este directorio contiene scripts para analizar el Instagram de PukaDog y extraer datos para la página web.

## Uso del Analizador de Instagram

### 1. Instalar dependencias de Python

```bash
cd ig-analyzer
pip install -r requirements.txt
```

### 2. Ejecutar análisis

```bash
# Análisis básico (sin descargar imágenes)
python3 instagram_analyzer.py pukadogcolombia

# Análisis con descarga de imágenes
python3 instagram_analyzer.py pukadogcolombia -d -o ../public/images/instagram
```

Esto generará un archivo `pukadogcolombia_analysis.json` con toda la información del perfil.

### 3. Procesar datos para la página web

```bash
node scripts/analyze-pukadog.js
```

Esto procesará el JSON y creará `data/instagram-analysis.json` con datos estructurados para usar en la página.

## Estructura de Datos

El script `analyze-pukadog.js` extrae:

- **Perfil**: Información básica del perfil (nombre, biografía, seguidores)
- **Colores**: Paleta de colores extraída del estilo visual
- **Productos**: Productos identificados en los posts
- **Estilo**: Características del estilo visual

## Notas

- Instagram puede limitar las solicitudes (rate limiting)
- El análisis funciona mejor con perfiles públicos
- Las imágenes se guardan en `public/images/instagram/`
- Los datos procesados se usan automáticamente en la página web a través de `/api/instagram`
