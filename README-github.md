# 🌱 LYD - Logística y Distribución Nacional

## Sitio Web Oficial - Distribuidor Husqvarna México

[![Website Status](https://img.shields.io/badge/website-online-brightgreen)](https://lyd-husqvarna.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-2.1-orange.svg)](CHANGELOG.md)
[![Made with](https://img.shields.io/badge/made%20with-HTML%2FCSS%2FJS-yellow.svg)](https://github.com/topics/html)

> Sitio web profesional para LYD (Logística y Distribución Nacional), distribuidor oficial de equipos Husqvarna en México. Incluye catálogos completos, motor de búsqueda interna y funcionalidad comercial completa.

![LYD Husqvarna Banner](https://i.ibb.co/p60cXvdb/Captura-de-pantalla-2025-09-16-a-la-s-6-41-38-p-m.png)

---

## 🚀 Características Principales

### ✅ **Motor de Búsqueda Interno Avanzado**
- 🔍 **Navegación 100% interna** - Búsqueda exclusiva dentro del sitio
- 🎯 **Navegación directa** - Lleva automáticamente al producto buscado
- ✨ **Resaltado visual** - Destaca el producto encontrado
- 🌊 **Scroll suave** - Animación fluida hacia el producto
- 🔄 **Cambio automático de páginas** - Navega entre secciones según necesidad

### 🛠️ **Productos Implementados**
- **10 Motosierras Husqvarna** con selectores dinámicos de variantes
- **2 Motocultivadores** con especificaciones técnicas completas
- **Páginas de categorías** optimizadas para SEO
- **Sistema de pestañas** interactivo (Descripción, Especificaciones, Incluye)

### 💼 **Funcionalidades Comerciales**
- **Precios actualizados** en pesos mexicanos (MXN)
- **Selectores de variantes** con actualización automática de precios
- **Integración WhatsApp Business** para contacto directo
- **Galerías de imágenes** interactivas con zoom

---

## 📋 Tabla de Contenidos

- [🚀 Características](#-características-principales)
- [⚡ Inicio Rápido](#-inicio-rápido)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🔧 Instalación](#-instalación)
- [🎯 Funcionalidades](#-funcionalidades-detalladas)
- [🛒 Productos](#-catálogo-de-productos)
- [📱 Responsive Design](#-diseño-responsive)
- [🔍 Motor de Búsqueda](#-motor-de-búsqueda)
- [🚀 Deployment](#-deployment)
- [🤝 Contribuir](#-contribuir)
- [📞 Contacto](#-contacto)
- [📄 Licencia](#-licencia)

---

## ⚡ Inicio Rápido

### 🔗 Acceso Directo
**Sitio en vivo:** [https://lyd-husqvarna.com](https://lyd-husqvarna.com)

### 💻 Ejecutar Localmente

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/lyd-husqvarna-website.git

# Entrar al directorio
cd lyd-husqvarna-website

# Abrir con Live Server (VS Code) o servir con cualquier servidor web
# Ejemplo con Python:
python -m http.server 8000

# O con Node.js:
npx serve .
```

**Abrir en navegador:** `http://localhost:8000`

---

## 📁 Estructura del Proyecto

```
lyd-husqvarna-website/
├── 📄 index.html                     # Página principal
├── 🪚 motosierras.html               # Catálogo motosierras (10 modelos)
├── 🚜 motocultivadores.html          # Catálogo motocultivadores
├── 🌿 podadoras.html                 # Catálogo podadoras
├── ℹ️  sobre-nosotros.html           # Página corporativa
├── 📞 contacto.html                  # Información de contacto
├── 🎯 husqvarna-tf338.html           # Página individual TF338
├── 🎯 husqvarna-tr262.html           # Página individual TR262
├── 🎨 sorteo-instagram.html          # Diseño sorteo Instagram
├── 🧪 test-search-internal.html      # Pruebas motor búsqueda
├── 📂 css/
│   └── style.css                     # Estilos principales
├── 📂 js/
│   ├── main.js                       # JavaScript principal
│   └── search-internal.js            # Motor búsqueda interna
├── 📂 images/
│   ├── husqvarna-giveaway-instagram.png  # Sorteo Instagram
│   └── [galería productos]
├── 📋 README.md                      # Documentación del proyecto
├── 🚫 .gitignore                     # Archivos excluidos de Git
└── 📄 LICENSE                        # Licencia del proyecto
```

---

## 🔧 Instalación

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional para desarrollo)

### Pasos de Instalación

1. **Descargar/Clonar el proyecto**
   ```bash
   git clone https://github.com/tu-usuario/lyd-husqvarna-website.git
   ```

2. **No requiere instalación de dependencias**
   - Proyecto en HTML/CSS/JS vanilla
   - Librerías cargadas desde CDN

3. **Abrir en navegador**
   - Directamente: Abrir `index.html`
   - Con servidor: Usar Live Server, Python, Node.js, etc.

---

## 🎯 Funcionalidades Detalladas

### 🔍 **Motor de Búsqueda Interno**
```javascript
// Ejemplo de uso
// El usuario busca "135" → Navega a motosierras.html#husqvarna-135
// El usuario busca "TF338" → Navega a motocultivadores.html#tf338
// El usuario busca "motosierra" → Navega a motosierras.html
```

**Características:**
- ✅ Búsqueda por modelo específico
- ✅ Búsqueda por categoría
- ✅ Navegación automática entre páginas
- ✅ Resaltado visual del producto encontrado
- ✅ Sugerencias cuando no se encuentra resultado

### 🛒 **Selectores de Variantes Dinámicos**
```javascript
// Productos con múltiples variantes:
// - Husqvarna 281XP: 2 variantes (24" y 28")
// - Husqvarna 61: 3 variantes (20", 24" y 28")
// - Husqvarna 353: 2 variantes (18" y 20")
```

**Funcionalidades:**
- ✅ Actualización automática de precios
- ✅ URLs específicas para cada variante
- ✅ Mensajes personalizados de WhatsApp
- ✅ Notificaciones visuales de selección

### 📱 **Sistema de Pestañas Interactivo**
- **Descripción:** Información detallada del producto
- **Especificaciones:** Datos técnicos completos
- **Qué Incluye:** Componentes y accesorios

---

## 🛒 Catálogo de Productos

### 🪚 **Motosierras Husqvarna** (10 modelos)

| Modelo | Precio Base | Variantes | Características |
|--------|-------------|-----------|-----------------|
| **120** | $4,419 MXN | Fijo | Compacta, 35cc, ideal hogar |
| **135** | $5,499 MXN | Fijo | Portátil, 40cc, uso doméstico |
| **445** | $8,979 MXN | Fijo | Semi-profesional, 45cc |
| **T435** | $10,799 MXN | Fijo | Poda profesional, 35cc |
| **353** | $12,900+ MXN | 2 variantes | Profesional, 50cc |
| **281XP** | $16,999+ MXN | 2 variantes | Profesional, 81cc |
| **61** | $12,999+ MXN | 3 variantes | Clásica, 61cc |
| **272XP** | $15,461 MXN | Fijo | Profesional, 72cc |
| **395XP** | Variable | Fijo | Industrial, 95cc |
| **525PT5S** | Variable | Fijo | Podadora altura, 25cc |

### 🚜 **Motocultivadores Husqvarna** (2 modelos)

| Modelo | Características | Motor | Uso |
|--------|-----------------|-------|-----|
| **TF338** | Profesional, Briggs & Stratton | Gasolina 4T | Terrenos grandes |
| **TR262** | Compacto, alta eficiencia | Gasolina 4T | Jardines medianos |

---

## 📱 Diseño Responsive

### 📊 **Breakpoints**
```css
/* Mobile First Approach */
🔸 Mobile: 320px - 768px
🔸 Tablet: 768px - 1024px  
🔸 Desktop: 1024px+
```

### ✅ **Características Responsive**
- **Header adaptativo** con menú colapsable
- **Navegación touch-friendly** para móviles
- **Galerías optimizadas** para pantallas táctiles
- **Botones de contacto** accesibles en móvil
- **Formularios adaptivos** para todos los tamaños

---

## 🔍 Motor de Búsqueda

### 🎯 **Términos Disponibles**

**Motosierras:**
```
120, 135, 445, T435, 353, 281XP, 61, 272XP, 395XP, 525PT5S
```

**Motocultivadores:**
```
TF338, TR262
```

**Categorías:**
```
motosierra, motocultivador, podadora, chainsaw, tiller
```

**Páginas:**
```
inicio, contacto, sobre nosotros
```

### 🔧 **API de Búsqueda**
```javascript
// Función principal
performInternalSearch(searchTerm)

// Navegación directa
navigateToProduct(product)

// Resaltado visual
scrollToElement(elementId)
```

---

## 🚀 Deployment

### 🌐 **Opciones de Hosting**

1. **GitHub Pages** (Recomendado)
   ```bash
   # Configurar GitHub Pages desde Settings → Pages
   # Seleccionar branch main / docs folder
   ```

2. **Netlify**
   ```bash
   # Conectar repositorio GitHub
   # Deploy automático en cada push
   ```

3. **Vercel**
   ```bash
   # Import desde GitHub
   # Zero-config deployment
   ```

4. **Hosting Tradicional**
   ```bash
   # Subir archivos por FTP
   # Configurar dominio personalizado
   ```

### ⚙️ **Variables de Entorno**
```bash
# Para futuras integraciones
WHATSAPP_NUMBER=526673298505
COMPANY_EMAIL=ventas@global3g.com
SITE_URL=https://lyd-husqvarna.com
```

---

## 🤝 Contribuir

### 📋 **Guía de Contribución**

1. **Fork** el repositorio
2. **Crear** feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. **Push** al branch (`git push origin feature/nueva-funcionalidad`)
5. **Crear** Pull Request

### 🔧 **Desarrollo Local**

```bash
# Configurar entorno de desarrollo
git clone https://github.com/tu-usuario/lyd-husqvarna-website.git
cd lyd-husqvarna-website

# Instalar Live Server (VS Code extension) o usar:
python -m http.server 8000
```

### ✅ **Checklist antes del PR**
- [ ] Código limpio y comentado
- [ ] Responsive en móvil y desktop
- [ ] Motor de búsqueda funcional
- [ ] Sin errores de consola
- [ ] README actualizado si es necesario

---

## 📞 Contacto

### 🏢 **LYD - Logística y Distribución Nacional**

- 📧 **Email:** [ventas@global3g.com](mailto:ventas@global3g.com)
- 📱 **WhatsApp:** [+52 667 329 8505](https://wa.me/526673298505)
- 🌐 **Website:** [https://lyd-husqvarna.com](https://lyd-husqvarna.com)
- 📍 **Ubicación:** México

### 👨‍💻 **Equipo de Desarrollo**

- **Desarrollador Principal:** [Tu Nombre](https://github.com/tu-usuario)
- **Diseño UX/UI:** LYD Team
- **Gestión de Producto:** LYD Management

---

## 📊 Estadísticas del Proyecto

![GitHub repo size](https://img.shields.io/github/repo-size/tu-usuario/lyd-husqvarna-website)
![GitHub last commit](https://img.shields.io/github/last-commit/tu-usuario/lyd-husqvarna-website)
![GitHub issues](https://img.shields.io/github/issues/tu-usuario/lyd-husqvarna-website)
![GitHub pull requests](https://img.shields.io/github/issues-pr/tu-usuario/lyd-husqvarna-website)

---

## 🏆 Logros y Reconocimientos

- ✅ **Sitio Web 100% Funcional** - Todas las características implementadas
- ✅ **Motor de Búsqueda Avanzado** - Navegación interna exclusiva
- ✅ **Diseño Responsive Completo** - Optimizado para todos los dispositivos
- ✅ **SEO Optimizado** - Estructura semántica y meta tags
- ✅ **Performance Optimizado** - Carga rápida y eficiente

---

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2024 LYD - Logística y Distribución Nacional

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software")...
```

---

## 🔄 Changelog

### Version 2.1.0 - 2024-09-19
- ✅ **NEW:** Motor de búsqueda interna exclusivo
- ✅ **NEW:** Navegación directa a productos
- ✅ **NEW:** Resaltado visual y scroll suave
- ✅ **FIX:** Pestañas de productos reparadas
- ✅ **FIX:** Consistencia de logos LYD
- ✅ **NEW:** Diseño de sorteo Instagram

### Version 2.0.0 - 2024-09-17
- ✅ Restauración completa del sitio web
- ✅ 12 motosierras con selectores de variantes
- ✅ Integración comercial completa
- ✅ CSS embebido para compatibilidad

---

<div align="center">

### 🌟 ¡Gracias por visitar nuestro proyecto! 🌟

**Si te gusta este proyecto, por favor danos una ⭐ en GitHub**

[⭐ Star en GitHub](https://github.com/tu-usuario/lyd-husqvarna-website) | 
[🐛 Reportar Bug](https://github.com/tu-usuario/lyd-husqvarna-website/issues) | 
[💡 Sugerir Funcionalidad](https://github.com/tu-usuario/lyd-husqvarna-website/issues)

---

**Hecho con ❤️ por el equipo LYD**

![LYD Logo](https://i.ibb.co/p60cXvdb/Captura-de-pantalla-2025-09-16-a-la-s-6-41-38-p-m.png)

</div>