# 🤝 Guía de Contribución - LYD Husqvarna Website

¡Gracias por tu interés en contribuir al sitio web oficial de LYD Husqvarna! Esta guía te ayudará a entender cómo puedes colaborar de manera efectiva.

---

## 📋 Antes de Contribuir

### Familiarízate con el proyecto
- Lee el [README.md](README.md) completo
- Revisa la [Guía de Instalación](INSTALL.md)
- Explora el sitio web en funcionamiento
- Entiende la estructura del proyecto

### Requisitos técnicos
- Conocimiento de HTML5, CSS3, JavaScript ES6+
- Experiencia con Git y GitHub
- Comprensión de diseño responsive
- Familiaridad con prácticas de accesibilidad web

---

## 🎯 Tipos de Contribuciones Bienvenidas

### 🐛 Reporte de Bugs
- Problemas de funcionalidad
- Errores de responsive design
- Issues con el motor de búsqueda
- Problemas de compatibilidad entre navegadores

### ✨ Nuevas Funcionalidades
- Mejoras al motor de búsqueda interna
- Nuevas secciones de productos
- Optimizaciones de rendimiento
- Mejoras de UX/UI

### 📚 Documentación
- Mejoras al README
- Actualización de guías de instalación
- Documentación de código
- Ejemplos de uso

### 🎨 Diseño y UX
- Mejoras visuales
- Optimizaciones de usabilidad
- Actualizaciones de diseño responsive
- Mejoras de accesibilidad

---

## 🚀 Proceso de Contribución

### 1. Fork y Clone
```bash
# Fork el repositorio en GitHub
# Luego clona tu fork
git clone https://github.com/[tu-usuario]/lyd-husqvarna-website.git
cd lyd-husqvarna-website
```

### 2. Crear Branch para tu Feature
```bash
# Crear branch descriptiva
git checkout -b feature/nueva-funcionalidad
# o
git checkout -b bugfix/corregir-problema
# o
git checkout -b docs/actualizar-readme
```

### 3. Realizar Cambios
- Mantén los cambios enfocados y específicos
- Sigue las convenciones de código existentes
- Testa tus cambios en múltiples navegadores
- Verifica que el responsive funcione correctamente

### 4. Commit y Push
```bash
# Agregar archivos modificados
git add .

# Commit descriptivo
git commit -m "feat: agregar nueva funcionalidad de filtros de productos"
# o
git commit -m "fix: corregir problema de navegación en móvil"
# o
git commit -m "docs: actualizar guía de instalación"

# Push a tu fork
git push origin feature/nueva-funcionalidad
```

### 5. Crear Pull Request
- Ve a GitHub y crea un Pull Request
- Usa un título descriptivo
- Explica qué cambios realizaste y por qué
- Incluye screenshots si hay cambios visuales
- Referencia issues relacionados si existen

---

## 📝 Convenciones de Código

### HTML
```html
<!-- Usar indentación de 4 espacios -->
<section class="product-section">
    <div class="container">
        <h2 class="section-title">Título de Sección</h2>
        <div class="product-grid">
            <!-- Contenido -->
        </div>
    </div>
</section>
```

### CSS
```css
/* Usar variables CSS cuando sea posible */
:root {
    --primary-orange: #FF6600;
    --secondary-blue: #253967;
}

/* Nomenclatura BEM preferida */
.product-card {
    background: white;
    border-radius: 8px;
}

.product-card__title {
    font-size: 1.2rem;
    color: var(--secondary-blue);
}

.product-card--featured {
    border: 2px solid var(--primary-orange);
}
```

### JavaScript
```javascript
// Usar const/let en lugar de var
// Funciones descriptivas
function initializeProductSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (!searchInput) {
        console.warn('Search input not found');
        return;
    }
    
    // Lógica de búsqueda
}

// Comentarios para funciones complejas
/**
 * Navega directamente al producto especificado
 * @param {Object} product - Objeto con información del producto
 * @param {string} product.name - Nombre del producto
 * @param {string} product.page - Página donde está el producto
 * @param {string} product.targetId - ID del elemento objetivo
 */
function navigateToProduct(product) {
    // Implementación
}
```

---

## 🧪 Testing

### Antes de enviar tu PR, verifica:

#### Funcionalidad
- [ ] Motor de búsqueda funciona correctamente
- [ ] Navegación entre páginas funciona
- [ ] Formularios se envían correctamente
- [ ] Enlaces externos abren correctamente

#### Responsive Design
- [ ] Mobile (320px - 768px)
- [ ] Tablet (768px - 1024px) 
- [ ] Desktop (1024px+)
- [ ] Menú hamburguesa funciona en móvil

#### Navegadores
- [ ] Chrome (últimas 2 versiones)
- [ ] Firefox (últimas 2 versiones)
- [ ] Safari (últimas 2 versiones)
- [ ] Edge (últimas 2 versiones)

#### Rendimiento
- [ ] Imágenes optimizadas
- [ ] No hay errores en Console
- [ ] Tiempos de carga razonables

---

## 📁 Estructura del Proyecto

```
lyd-husqvarna-website/
├── index.html                    # Página principal
├── motosierras.html              # Catálogo de motosierras
├── motocultivadores.html         # Catálogo de motocultivadores
├── podadoras.html                # Página de podadoras
├── contacto.html                 # Formulario de contacto
├── sobre-nosotros.html           # Información corporativa
├── css/
├── js/
│   ├── main.js                   # JavaScript principal
│   └── search-internal.js        # Motor de búsqueda interna
├── images/
├── README.md
├── INSTALL.md
└── CONTRIBUTING.md
```

---

## 🚨 Qué NO hacer

- ❌ No cambies la funcionalidad del motor de búsqueda sin consultar
- ❌ No agregues dependencias externas sin justificación
- ❌ No modifiques URLs de WhatsApp o contacto sin autorización
- ❌ No hagas commits directamente a main/master
- ❌ No incluyas archivos personales o de configuración local
- ❌ No agregues código que rompa la compatibilidad existente

---

## 🎨 Guía de Diseño

### Colores principales
- **Naranja Husqvarna:** `#FF6600`
- **Azul LYD:** `#253967`
- **Gris claro:** `#f8f9fa`
- **Blanco:** `#ffffff`

### Tipografía
- **Principal:** Arial, sans-serif
- **Títulos:** Peso 600-700
- **Texto:** Peso 400
- **Tamaños responsive**

### Espaciado
- **Pequeño:** 0.5rem (8px)
- **Medio:** 1rem (16px)
- **Grande:** 2rem (32px)
- **Extra grande:** 4rem (64px)

---

## 📞 Contacto para Contribuidores

### Preguntas técnicas
- Crear un issue en GitHub con la etiqueta `question`
- Email técnico: [especificar si tienes uno]

### Propuestas de mejora
- Crear un issue con la etiqueta `enhancement`
- Describir el problema que resuelve
- Incluir mockups o ejemplos si es posible

---

## 🏆 Reconocimientos

Los contribuidores serán reconocidos en:
- Lista de colaboradores en README.md
- Releases notes cuando sea apropiado
- Comentarios de agradecimiento en PRs

---

¡Gracias por contribuir al crecimiento del sitio web de LYD Husqvarna! 🌟