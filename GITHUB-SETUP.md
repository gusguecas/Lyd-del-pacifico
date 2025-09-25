# 🚀 Guía Completa para Crear Repositorio GitHub - LYD Husqvarna

Esta guía te llevará paso a paso para crear y configurar tu repositorio GitHub para el sitio web de LYD Husqvarna.

---

## 📋 Requisitos Previos

- [ ] Cuenta de GitHub (gratuita): [github.com](https://github.com)
- [ ] Git instalado en tu computadora: [git-scm.com](https://git-scm.com)
- [ ] Acceso a los archivos del proyecto LYD Husqvarna

---

## 🏗️ Paso 1: Crear el Repositorio en GitHub

### 1.1 Iniciar sesión en GitHub
- Ve a [github.com](https://github.com)
- Inicia sesión con tu cuenta

### 1.2 Crear nuevo repositorio
- Haz click en el botón verde **"New"** o **"+"** > **"New repository"**
- Completa la información:

```
Repository name: lyd-husqvarna-website
Description: Sitio web oficial de LYD - Distribuidor autorizado Husqvarna en México
Visibility: ✅ Public (recomendado) o Private (si prefieres privado)
Initialize repository: ❌ NO marcar ninguna opción por ahora
```

- Haz click en **"Create repository"**

---

## 💻 Paso 2: Preparar tu Computadora

### 2.1 Instalar Git (si no lo tienes)

**Windows:**
- Descarga Git desde [git-scm.com](https://git-scm.com)
- Instala con configuración por defecto

**Mac:**
```bash
# Usando Homebrew (recomendado)
brew install git

# O descarga desde git-scm.com
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install git
```

### 2.2 Configurar Git (primera vez)
```bash
# Configura tu nombre y email
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

---

## 📁 Paso 3: Preparar los Archivos del Proyecto

### 3.1 Organizar archivos
Asegúrate de tener todos los archivos del proyecto en una carpeta:

```
lyd-husqvarna-website/
├── index.html
├── motosierras.html
├── motocultivadores.html
├── podadoras.html
├── contacto.html
├── sobre-nosotros.html
├── husqvarna-tf338.html
├── husqvarna-tr262.html
├── sorteo-instagram.html
├── test-search-internal.html
├── css/
├── js/
│   ├── main.js
│   └── search-internal.js
├── images/
├── README.md
├── INSTALL.md
├── CONTRIBUTING.md
├── LICENSE
├── .gitignore
└── GITHUB-SETUP.md (este archivo)
```

---

## 🔗 Paso 4: Conectar con GitHub

### 4.1 Abrir terminal en la carpeta del proyecto
```bash
# Navega a tu carpeta del proyecto
cd ruta/a/tu/lyd-husqvarna-website
```

### 4.2 Inicializar Git
```bash
# Inicializar repositorio Git
git init

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "Initial commit: LYD Husqvarna website complete"
```

### 4.3 Conectar con GitHub
```bash
# Reemplaza [tu-usuario] con tu username de GitHub
git remote add origin https://github.com/[tu-usuario]/lyd-husqvarna-website.git

# Verificar conexión
git remote -v
```

### 4.4 Subir archivos a GitHub
```bash
# Crear rama main y subir archivos
git branch -M main
git push -u origin main
```

---

## ✅ Paso 5: Verificar que todo funcionó

### 5.1 Revisar en GitHub
- Ve a tu repositorio: `https://github.com/[tu-usuario]/lyd-husqvarna-website`
- Deberías ver todos tus archivos listados
- El README.md se mostrará automáticamente en la página principal

### 5.2 Configurar GitHub Pages (opcional)
Para tener tu sitio web live gratis:

1. En tu repositorio, ve a **Settings**
2. Scroll hacia abajo a **Pages**
3. En **Source** selecciona: **Deploy from a branch**
4. Branch: **main** / Folder: **/ (root)**
5. Click **Save**
6. Tu sitio estará disponible en: `https://[tu-usuario].github.io/lyd-husqvarna-website`

---

## 🚀 Paso 6: Deploy Profesional (Recomendado)

### Opción A: Netlify (Gratis y Fácil)

1. **Ve a [netlify.com](https://netlify.com)**
2. **Sign up con GitHub**
3. **"New site from Git"**
4. **Conecta tu repositorio GitHub**
5. **Deploy settings:**
   ```
   Branch: main
   Build command: (dejar vacío)
   Publish directory: (dejar vacío)
   ```
6. **Deploy!**
7. **Configurar dominio personalizado (opcional)**

### Opción B: Vercel (También gratis)

1. **Ve a [vercel.com](https://vercel.com)**
2. **Sign up con GitHub**
3. **"New Project"**
4. **Import tu repositorio**
5. **Deploy automático**

---

## 🔄 Paso 7: Workflow para Actualizaciones

### Hacer cambios al sitio web:

```bash
# 1. Hacer tus cambios en los archivos HTML/CSS/JS
# 2. Agregar cambios a Git
git add .

# 3. Commit con mensaje descriptivo
git commit -m "fix: corregir motor de búsqueda en móvil"

# 4. Subir a GitHub
git push origin main

# 5. Si usas Netlify/Vercel, se actualiza automáticamente
```

### Tipos de commits recomendados:
```bash
git commit -m "feat: agregar nueva sección de productos"
git commit -m "fix: corregir problema de responsive design"
git commit -m "docs: actualizar información de contacto"
git commit -m "style: mejorar colores y tipografía"
```

---

## 🛡️ Paso 8: Configuraciones de Seguridad

### 8.1 Proteger información sensible
- ✅ Ya incluimos `.gitignore` para proteger archivos sensibles
- ✅ No incluyas passwords, API keys o información privada
- ✅ El archivo LICENSE protege tu contenido comercial

### 8.2 Configurar branch protection (opcional)
En GitHub > Settings > Branches:
- Protect main branch
- Require pull requests
- Require status checks

---

## 🎯 Paso 9: Promocionar tu Repositorio

### 9.1 Mejorar visibilidad
- Agregar topics relevantes: `husqvarna`, `website`, `mexico`, `distribuidor`
- Escribir descripción clara
- Mantener README.md actualizado

### 9.2 Invitar colaboradores
- Settings > Manage access > Invite a collaborator
- Enviar link del repositorio a tu equipo

---

## 📞 Soporte

### Si tienes problemas:

**Errores de Git:**
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Help](https://docs.github.com)

**Errores específicos:**
- Crea un issue en tu repositorio
- Consulta [Stack Overflow](https://stackoverflow.com)

**Contacto directo:**
- Email: ventas@global3g.com
- WhatsApp: +52 667 329 8505

---

## ✨ ¡Listo!

Tu repositorio GitHub está configurado y tu sitio web está:
- ✅ Versionado en GitHub
- ✅ Respaldado en la nube
- ✅ Listo para colaboración
- ✅ Deployado automáticamente (si elegiste Netlify/Vercel)
- ✅ Profesionalmente documentado

**Próximos pasos recomendados:**
1. Configurar dominio personalizado
2. Configurar analytics
3. Configurar monitoring
4. Invitar colaboradores
5. Planear futuras mejoras

¡Felicitaciones! 🎉 Ahora tienes un repositorio GitHub profesional para tu sitio web LYD Husqvarna.