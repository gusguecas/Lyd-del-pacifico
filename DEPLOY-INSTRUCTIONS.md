# 🚀 INSTRUCCIONES PARA DEPLOY EN NETLIFY

## 📋 PASO A PASO COMPLETO

### 1️⃣ **CREAR CARPETA EN TU COMPUTADORA**
```
📁 lyd-website/
├── index.html
├── sobre-nosotros.html  
├── contacto.html
├── motosierras.html
├── motocultivadores.html
├── podadoras.html
├── husqvarna-tf338.html
├── husqvarna-tr262.html
├── index-universal.html
├── index-standalone.html
├── README.md
├── BACKUP-STATUS.md
└── PROTOCOLO-SEGURO.md
```

### 2️⃣ **DESCARGAR TODOS LOS ARCHIVOS**
- Ve a cada página del proyecto
- Copia y pega el contenido completo
- Guarda cada archivo con su nombre exacto

### 3️⃣ **CREAR REPOSITORIO EN GITHUB**
1. Ve a github.com
2. Click en "New repository" 
3. Nombre: `lyd-website` (o el que prefieras)
4. ✅ Marcar "Public" 
5. ✅ Marcar "Add README file"
6. Click "Create repository"

### 4️⃣ **SUBIR ARCHIVOS A GITHUB**
**Opción A - Interface web:**
1. Click en "uploading an existing file"
2. Arrastra todos los archivos .html
3. Write commit message: "Initial deploy - LYD website"
4. Click "Commit changes"

**Opción B - Git comandos:**
```bash
git clone [tu-repo-url]
cd lyd-website
# Copiar todos los archivos aquí
git add .
git commit -m "Initial deploy - LYD website"
git push origin main
```

### 5️⃣ **CONECTAR NETLIFY**
1. Ve a netlify.com
2. Click "New site from Git"
3. Choose GitHub
4. Selecciona tu repositorio `lyd-website`
5. Deploy settings:
   - Branch: `main`
   - Build command: (dejar vacío)
   - Publish directory: (dejar vacío)
6. Click "Deploy site"

### 6️⃣ **CONFIGURAR DOMINIO (OPCIONAL)**
1. En Netlify dashboard, click "Domain settings"
2. Click "Add custom domain"
3. Ingresa tu dominio (ej: lyd-distribucion.com)
4. Sigue las instrucciones de DNS

---

## ✅ RESULTADO FINAL
- ✅ **Sitio live** en URL de Netlify
- ✅ **Backups automáticos** en GitHub
- ✅ **Updates instantáneos** al hacer push
- ✅ **Rollback fácil** si algo sale mal
- ✅ **HTTPS automático**
- ✅ **CDN global**

---

## 🔄 WORKFLOW FUTURO
1. **Trabajamos cambios aquí** ↓
2. **Tú descargas archivos actualizados** ↓  
3. **Subes a GitHub** ↓
4. **Netlify autodeploya** ↓
5. **Sitio actualizado automáticamente** ✅

---

## 🆘 SOPORTE
Si tienes problemas:
- Netlify docs: docs.netlify.com
- GitHub docs: docs.github.com
- O me preguntas directamente

## 🎯 PRIORIDAD: HACER ESTO ANTES QUE NADA MÁS