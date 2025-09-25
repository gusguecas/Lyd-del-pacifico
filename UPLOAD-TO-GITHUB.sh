#!/bin/bash

echo "🚀 LYD Husqvarna - Upload completo a GitHub"
echo "=============================================="

# Variables
REPO_URL="https://github.com/gusguecas/Lyd-del-pacifico.git"
PROJECT_DIR="lyd-husqvarna-website"

# Paso 1: Descargar proyecto desde Publish tab
echo "📁 Paso 1: Asegúrate de tener todos los archivos del proyecto descargados"
echo "   - Ve a la pestaña 'Publish'"  
echo "   - Descarga todos los archivos"
echo "   - Descomprime en una carpeta llamada '$PROJECT_DIR'"
echo ""
read -p "✅ ¿Ya tienes todos los archivos descargados? (y/n): " confirm

if [ "$confirm" != "y" ]; then
    echo "❌ Primero descarga todos los archivos y ejecuta este script de nuevo"
    exit 1
fi

# Paso 2: Navegar al directorio del proyecto
echo "📂 Paso 2: Navegando al directorio del proyecto..."
cd "$PROJECT_DIR" || {
    echo "❌ Error: No se encontró el directorio '$PROJECT_DIR'"
    echo "   Asegúrate de estar en el directorio correcto"
    exit 1
}

# Paso 3: Inicializar Git si no existe
echo "🔧 Paso 3: Configurando Git..."
if [ ! -d ".git" ]; then
    git init
fi

# Configurar usuario Git
git config user.name "Gus LYD"
git config user.email "gusguecas@gmail.com"

# Paso 4: Conectar con repositorio remoto
echo "🔗 Paso 4: Conectando con GitHub..."
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"

# Paso 5: Agregar todos los archivos
echo "📝 Paso 5: Agregando todos los archivos..."
git add .

# Verificar que hay archivos
if [ -z "$(git diff --cached --name-only)" ]; then
    echo "⚠️  No se encontraron archivos para agregar"
    echo "   Verifica que estés en el directorio correcto con los archivos del proyecto"
    exit 1
fi

# Mostrar archivos que se van a subir
echo "📋 Archivos que se van a subir:"
git diff --cached --name-only | head -20
echo ""

# Paso 6: Crear commit
echo "💾 Paso 6: Creando commit..."
git commit -m "feat: Complete LYD Husqvarna website deployment

✅ Sitio web completo con 15 páginas HTML
✅ Motor de búsqueda interna (100% navegación del sitio)
✅ Pestañas de productos reparadas (Especificaciones/Qué incluye/Descripción)
✅ Logo LYD consistente en todas las páginas
✅ Diseño de sorteo Instagram (1080x1080px)
✅ Diseño responsive para móvil/tablet/desktop
✅ CSS y JavaScript optimizados
✅ Documentación completa para GitHub
✅ Todas las imágenes y assets incluidos

Características principales:
- 10 modelos de motosierras con selectores de variantes
- 2 modelos de motocultivadores con páginas individuales
- Búsqueda interna navega directamente a productos
- Resaltado visual y scroll suave
- Documentación profesional
- Listo para deployment en producción

Páginas incluidas:
- index.html (página principal)
- motosierras.html (catálogo completo) 
- motocultivadores.html (TF338, TR262)
- husqvarna-tf338.html (página individual)
- husqvarna-tr262.html (página individual)
- sorteo-instagram.html (diseño de sorteo)
- test-search-internal.html (pruebas de búsqueda)
- sobre-nosotros.html (información corporativa)
- contacto.html (formulario de contacto)
- podadoras.html (información de podadoras)
- + archivos adicionales y documentación

Tecnologías:
- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript ES6+ para interactividad
- Diseño responsive con CSS Grid/Flexbox
- Motor de búsqueda interno personalizado
- Optimizado para SEO y accesibilidad"

# Paso 7: Subir a GitHub
echo "⬆️ Paso 7: Subiendo a GitHub..."
git branch -M main
git push -u origin main --force

# Verificación final
if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 ¡ÉXITO! Sitio web subido completamente a GitHub"
    echo "=============================================="
    echo "📍 Repositorio: https://github.com/gusguecas/Lyd-del-pacifico"
    echo "🌐 Para habilitar GitHub Pages:"
    echo "   1. Ve a Settings > Pages en tu repositorio"
    echo "   2. Source: Deploy from a branch"  
    echo "   3. Branch: main / (root)"
    echo "   4. Save"
    echo ""
    echo "🚀 Para deploy profesional en Netlify:"
    echo "   1. Ve a netlify.com"
    echo "   2. New site from Git"
    echo "   3. Conecta tu repositorio GitHub"  
    echo "   4. Deploy automático"
    echo ""
    echo "✅ Futuras sesiones: Podremos trabajar directamente desde GitHub"
else
    echo ""
    echo "❌ Error al subir a GitHub"
    echo "Verifica tu conexión a internet y permisos del repositorio"
fi