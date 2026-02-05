/**
 * Script para analizar el Instagram de PukaDog y generar datos para la página web
 * Este script procesa el JSON generado por instagram_analyzer.py
 */

const fs = require('fs');
const path = require('path');

function analyzePukaDogInstagram(analysisFile) {
  try {
    const analysisPath = path.join(__dirname, '../ig-analyzer', analysisFile);
    
    if (!fs.existsSync(analysisPath)) {
      console.log('⚠️  Archivo de análisis no encontrado. Usando datos de ejemplo.');
      return getDefaultData();
    }

    const analysis = JSON.parse(fs.readFileSync(analysisPath, 'utf-8'));
    
    // Extraer información relevante
    const extractedData = {
      profile: {
        username: analysis.username,
        fullName: analysis.full_name,
        biography: analysis.biography,
        followers: analysis.followers,
        profilePic: analysis.profile_pic_url,
      },
      posts: (analysis.posts || []).map(post => ({
        ...post,
        image_urls: post.image_urls?.map(img => 
          img.replace('../public', '').replace('public/', '/images/instagram/')
        ) || []
      })),
      colors: extractColors(analysis),
      products: extractProducts(analysis).map(product => ({
        ...product,
        image: product.image?.replace('../public', '').replace('public/', '/images/instagram/') || null
      })),
      style: extractStyle(analysis),
    };

    return extractedData;
  } catch (error) {
    console.error('Error analizando datos:', error);
    return getDefaultData();
  }
}

function extractColors(analysis) {
  // Colores típicos de puka dogs: naranjas, rojos, amarillos
  // Estos se pueden ajustar basándose en las imágenes descargadas
  return {
    primary: '#f97316', // Naranja
    secondary: '#ef4444', // Rojo
    accent: '#fbbf24', // Amarillo (mostaza)
    background: '#fff7ed', // Crema claro
  };
}

function extractProducts(analysis) {
  const products = [];
  const keywords = {
    'clasico': ['clásico', 'clasico', 'tradicional', 'simple'],
    'especial': ['especial', 'premium', 'deluxe'],
    'bbq': ['bbq', 'barbacoa', 'barbecue'],
    'mexicano': ['mexicano', 'mexicana', 'jalapeño', 'nachos'],
    'hawaiano': ['hawaiano', 'hawaiana', 'piña', 'pineapple'],
    'vegetariano': ['vegetariano', 'vegetariana', 'vegano', 'vegan'],
    'combo': ['combo', 'promo', 'promoción'],
  };

  analysis.posts?.forEach((post) => {
    const caption = (post.caption || '').toLowerCase();
    
    Object.keys(keywords).forEach((type) => {
      if (keywords[type].some(keyword => caption.includes(keyword))) {
        products.push({
          type,
          name: extractProductName(post.caption),
          description: post.caption?.substring(0, 150) || '',
          image: post.image_urls?.[0] || null,
          likes: post.likes,
          shortcode: post.shortcode,
        });
      }
    });
  });

  return products;
}

function extractProductName(caption) {
  if (!caption) return 'Puka Dog';
  
  // Intentar extraer el nombre del producto del caption
  const lines = caption.split('\n');
  const firstLine = lines[0] || '';
  
  // Buscar patrones comunes
  const patterns = [
    /🌭\s*(.+)/i,
    /hot\s*dog\s*(.+)/i,
    /(.+)\s*🌭/i,
  ];

  for (const pattern of patterns) {
    const match = firstLine.match(pattern);
    if (match && match[1]) {
      return match[1].trim();
    }
  }

  return firstLine.substring(0, 50) || 'Puka Dog';
}

function extractStyle(analysis) {
  return {
    isCasual: true,
    isColorful: true,
    hasFoodFocus: true,
    tone: 'amigable y apetitoso',
  };
}

function getDefaultData() {
  return {
    profile: {
      username: 'pukadogcolombia',
      fullName: 'PukaDog Colombia',
      biography: 'Los mejores puka dogs de Manizales 🌭',
      followers: 0,
      profilePic: null,
    },
    posts: [],
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
  };
}

// Si se ejecuta directamente
if (require.main === module) {
  const data = analyzePukaDogInstagram('pukadogcolombia_analysis.json');
  const outputPath = path.join(__dirname, '../data/instagram-analysis.json');
  
  // Crear directorio si no existe
  const dataDir = path.dirname(outputPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log('✅ Datos extraídos y guardados en:', outputPath);
}

module.exports = { analyzePukaDogInstagram };
