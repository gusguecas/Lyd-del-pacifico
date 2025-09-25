# 🚀 Guía de Instalación y Deployment - LYD Husqvarna

## 📋 Requisitos Previos

### Mínimos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web básico (Apache, Nginx, o cualquier hosting)
- Soporte para archivos estáticos HTML/CSS/JS

### Recomendados
- Hosting con soporte SSL/HTTPS
- CDN para mejor rendimiento
- Panel de control con administrador de archivos

---

## ⚡ Instalación Rápida

### Opción 1: Hosting Tradicional (Shared Hosting)

1. **Descargar archivos del repositorio**
   ```bash
   git clone https://github.com/[tu-usuario]/lyd-husqvarna-website.git
   cd lyd-husqvarna-website
   ```

2. **Subir archivos al hosting**
   - Conecta por FTP/SFTP o usa el administrador de archivos
   - Sube TODOS los archivos a la carpeta `public_html/` o equivalente
   - Mantén la estructura de carpetas intacta

3. **Verificar funcionamiento**
   - Accede a tu dominio
   - Verifica que el sitio carga correctamente
   - Prueba el motor de búsqueda interna
   - Revisa que todas las páginas funcionen

### Opción 2: Netlify (Recomendado)

1. **Fork este repositorio en tu GitHub**

2. **Conectar con Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - "New site from Git"
   - Conecta tu repositorio GitHub
   - Build settings: **Deja todo vacío** (es sitio estático)
   - Deploy!

3. **Configuración opcional**
   - Configura dominio personalizado
   - Habilita HTTPS automático
   - Configura redirects si es necesario

### Opción 3: GitHub Pages

1. **Habilitar GitHub Pages**
   - Ve a Settings > Pages en tu repositorio
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Save

2. **Acceder al sitio**
   - URL: `https://[tu-usuario].github.io/lyd-husqvarna-website`
   - Puede tardar unos minutos en estar disponible

### Opción 4: Vercel

1. **Conectar repositorio**
   - Ve a [vercel.com](https://vercel.com)
   - "New Project"
   - Import desde GitHub
   - Deploy automático

---

## 🔧 Configuración Post-Instalación

### 1. Verificar Enlaces y Contactos
- [ ] Actualizar número de WhatsApp en todas las páginas
- [ ] Verificar email de contacto: `ventas@global3g.com`
- [ ] Revisar enlaces a páginas de productos individuales

### 2. Configurar Analytics (Opcional)
```html
<!-- Agregar a todas las páginas antes de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### 3. Optimizar Rendimiento
- [ ] Habilitar compresión GZIP en servidor
- [ ] Configurar cache headers para archivos estáticos
- [ ] Optimizar imágenes si es necesario

---

## 🧪 Testing Post-Deployment

### Funcionalidades Críticas
1. **Motor de Búsqueda**
   - Prueba: "135", "TF338", "motosierra"
   - Debe navegar internamente sin opciones externas

2. **Navegación**
   - Todas las páginas del menú
   - Links entre productos
   - Breadcrumbs

3. **Responsive Design**
   - Prueba en móvil, tablet, desktop
   - Menú hamburguesa en móvil

4. **Formulario de Contacto**
   - Verificar que los datos se envían correctamente

### Páginas Principales a Probar
- ✅ `index.html` - Página principal
- ✅ `motosierras.html` - Catálogo completo
- ✅ `motocultivadores.html` - Catálogo completo
- ✅ `podadoras.html` - Información general
- ✅ `contacto.html` - Formulario de contacto
- ✅ `sobre-nosotros.html` - Información corporativa

---

## 🔄 Actualizaciones y Mantenimiento

### Actualizar Contenido
1. **Agregar nuevos productos**
   - Actualizar HTML con nueva sección de producto
   - Agregar al motor de búsqueda en `js/search-internal.js`
   - Incluir imágenes en carpeta `images/`

2. **Modificar precios**
   - Buscar y reemplazar precios en archivos HTML
   - Actualizar enlaces de Coppel si es necesario

3. **Actualizar información de contacto**
   - Buscar y reemplazar en todos los archivos HTML
   - Verificar footer, header y página de contacto

### Git Workflow Recomendado
```bash
# Hacer cambios
git add .
git commit -m "Descripción del cambio"
git push origin main

# El sitio se actualiza automáticamente en Netlify/Vercel
```

---

## 🆘 Resolución de Problemas

### Problema: Motor de búsqueda no funciona
- **Verificar:** Que `js/main.js` y `js/search-internal.js` se cargan
- **Revisar:** Console del navegador para errores JavaScript
- **Solución:** Verificar que los archivos JS estén en la ubicación correcta

### Problema: Imágenes no cargan
- **Verificar:** Rutas de imágenes en HTML
- **Revisar:** Que las imágenes estén en `images/`
- **Solución:** Corregir rutas relativas

### Problema: Formulario no envía
- **Verificar:** Configuración del servidor de email
- **Revisar:** JavaScript del formulario de contacto
- **Solución:** Configurar servicio de email como Formspree o EmailJS

---

## 📞 Soporte

Para soporte técnico o preguntas sobre el deployment:
- **Email:** ventas@global3g.com
- **WhatsApp:** +52 667 329 8505
- **Issues:** Crear un issue en este repositorio GitHub

---

## 🏆 Checklist de Deployment Exitoso

- [ ] Sitio web carga correctamente
- [ ] Motor de búsqueda interna funciona
- [ ] Todas las páginas son accesibles
- [ ] Responsive design funciona en todos los dispositivos
- [ ] Formulario de contacto envía correctamente
- [ ] WhatsApp y enlaces externos funcionan
- [ ] SSL/HTTPS habilitado
- [ ] Dominio personalizado configurado (si aplica)
- [ ] Analytics configurado (si aplica)

**¡Listo para producción! 🚀**