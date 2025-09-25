# 🛡️ PROTOCOLO DE TRABAJO SEGURO - LYD WEBSITE

## 🚨 REGLAS OBLIGATORIAS PARA EVITAR PÉRDIDAS

### ✅ ANTES DE CUALQUIER CAMBIO:
1. **PREGUNTAR ESPECÍFICAMENTE** qué se va a cambiar
2. **UNA COSA A LA VEZ** - Nunca cambios múltiples simultáneos
3. **LEER el archivo** antes de editarlo
4. **VERIFICAR** que el cambio no rompa otras funcionalidades

### 🔍 PROCESO DE VERIFICACIÓN:
```
1. Leer archivo actual ✅
2. Identificar la sección exacta a cambiar ✅
3. Hacer cambio mínimo necesario ✅
4. Verificar que no afecte otras partes ✅
5. Confirmar con usuario antes de continuar ✅
```

### ❌ NUNCA HACER:
- Cambios masivos sin consultar
- Modificar múltiples archivos a la vez
- Asumir qué quiere el usuario
- Sobrescribir estructuras que funcionan
- Cambiar CSS variables sin verificar impacto

### ✅ SIEMPRE HACER:
- Cambios incrementales
- Un archivo a la vez
- Verificar funcionamiento después de cada cambio
- Mantener backup actualizado

---

## 📋 CHECKLIST PRE-CAMBIO

Antes de cualquier modificación, verificar:

- [ ] ¿Entiendo exactamente qué quiere cambiar el usuario?
- [ ] ¿Este cambio puede afectar otras páginas?
- [ ] ¿He leído el archivo actual completamente?
- [ ] ¿Es un cambio mínimo y específico?
- [ ] ¿Tengo claro cómo revertir si algo sale mal?

---

## 🔒 ARCHIVOS CRÍTICOS - MÁXIMA PRECAUCIÓN

### 🚨 EXTREMA PRECAUCIÓN:
- **Todos los archivos .html** (contienen trabajo de 4+ horas)
- **CSS embebido** en headers
- **Estructura de navegación**
- **Variables CSS**

### 🛠️ CAMBIOS PERMITIDOS SIN CONSULTA:
- Corrección de typos simples
- Ajustes de texto menor
- Corrección de enlaces rotos

### ⛔ CAMBIOS QUE REQUIEREN APROBACIÓN:
- Modificación de estructura HTML
- Cambios en CSS responsivo
- Alteración de grid layouts
- Modificación de header
- Cambios en navegación

---

## 💾 SISTEMA DE BACKUP

### 📅 BACKUP AUTOMÁTICO:
- Actualizar `BACKUP-STATUS.md` después de cambios importantes
- Documentar estado actual siempre
- Mantener lista de funcionalidades activas

### 🔄 FRECUENCIA:
- Después de cada funcionalidad completada
- Antes de cambios estructurales
- Al final de cada sesión de trabajo

---

## 🚨 EN CASO DE EMERGENCIA

### Si algo se rompe:
1. **PARAR inmediatamente**
2. **NO hacer más cambios**
3. **Consultar BACKUP-STATUS.md**
4. **Revertir al estado documentado**
5. **Informar al usuario del problema**

### Información de recuperación:
- **Estado funcional**: Documentado en BACKUP-STATUS.md
- **Archivos críticos**: Todos los .html
- **Configuración**: CSS variables en cada archivo

---

## ✅ ESTE PROTOCOLO ES OBLIGATORIO

### 🎯 Objetivo: CERO pérdidas de información
### 🔒 Método: Cambios controlados y documentados
### 📋 Verificación: Siempre consultar antes de modificar