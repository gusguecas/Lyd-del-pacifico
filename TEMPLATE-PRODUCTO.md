# 📋 TEMPLATE PARA AGREGAR PRODUCTOS

## 🎯 Cómo usar este template:

1. Copia el bloque HTML de abajo
2. Reemplaza los textos entre `{{  }}` con tu información
3. Pégalo en la sección correspondiente del HTML

---

## 📦 PRODUCTOS QUE NECESITAS AGREGAR:

### GENERADORES (en generadores.html):
- ✅ G8500P - Listo para agregar
- ✅ G5500P - Listo para agregar
- ✅ G3200P - Listo para agregar
- ✅ G2500P - Listo para agregar
- ✅ G1300P - Listo para agregar

### MOTORES (en generadores.html):
- ✅ HH389MP - Listo para agregar
- ✅ HH270MP - Listo para agregar
- ✅ HH196MP - Listo para agregar

### PODADORA (en podadoras.html):
- ✅ GX560 - Listo para agregar

---

## 📄 TEMPLATE HTML PARA UN PRODUCTO:

```html
<!-- Producto: {{NOMBRE DEL MODELO}} -->
<section class="product-card" id="{{id-modelo}}" style="margin-bottom: 60px; background: white; border-radius: 12px; padding: 40px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
    <div class="product-container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start;">

        <!-- Columna Izquierda: Imagen Principal -->
        <div class="product-left-column">
            <div class="product-image-section">
                <h2 style="color: #ff6600; font-size: 2rem; margin-bottom: 20px;">{{NOMBRE COMPLETO DEL PRODUCTO}}</h2>

                <!-- Imagen Principal - AGREGA TU FOTO AQUÍ -->
                <div class="main-image" style="text-align: center; background: #f8faff; padding: 30px; border-radius: 12px; margin-bottom: 20px;">
                    <img src="images/{{nombre-imagen}}.jpg" alt="{{NOMBRE PRODUCTO}}" style="max-width: 100%; height: auto; max-height: 400px;">
                </div>

                <!-- Descripción Breve -->
                <div style="background: linear-gradient(135deg, #253967 0%, #1e2c5a 100%); color: white; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
                    <p style="line-height: 1.8; margin: 0;">{{DESCRIPCIÓN DEL PRODUCTO}}</p>
                </div>
            </div>
        </div>

        <!-- Columna Derecha: Especificaciones y Botones -->
        <div class="product-right-column">

            <!-- Logo Husqvarna -->
            <div style="text-align: center; margin-bottom: 30px;">
                <img src="images/husqvarna-logo-hd.png" alt="Husqvarna" style="height: 80px;">
            </div>

            <!-- Precio (OPCIONAL - solo si tienes) -->
            <!-- <div style="text-align: center; margin-bottom: 30px;">
                <div style="background: linear-gradient(135deg, #ff6600, #dc143c); color: white; padding: 20px; border-radius: 12px;">
                    <div style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 5px;">Precio</div>
                    <div style="font-size: 2.5rem; font-weight: bold;">${{PRECIO}} MXN</div>
                </div>
            </div> -->

            <!-- Tabs de Información -->
            <div class="product-tabs">
                <div class="tabs-navigation" style="display: flex; background: #f8f9fa; border-bottom: 1px solid #ddd; border-radius: 8px 8px 0 0;">
                    <button class="tab-nav-btn active" data-tab="descripcion-{{id}}" style="flex: 1; padding: 15px; border: none; background: transparent; cursor: pointer; font-weight: 600; color: #253967; border-bottom: 3px solid #ff6600;">Descripción</button>
                    <button class="tab-nav-btn" data-tab="especificaciones-{{id}}" style="flex: 1; padding: 15px; border: none; background: transparent; cursor: pointer; font-weight: 600; color: #666;">Especificaciones</button>
                    <button class="tab-nav-btn" data-tab="incluye-{{id}}" style="flex: 1; padding: 15px; border: none; background: transparent; cursor: pointer; font-weight: 600; color: #666;">Qué Incluye</button>
                </div>

                <div class="tabs-container">
                    <!-- Tab: Descripción -->
                    <div class="tab-content-panel active" id="descripcion-{{id}}" style="padding: 30px; display: block;">
                        <h3 style="color: #253967; margin-bottom: 15px;">Descripción del Producto</h3>
                        <p style="color: #666; line-height: 1.8;">{{DESCRIPCIÓN EXTENDIDA}}</p>
                    </div>

                    <!-- Tab: Especificaciones -->
                    <div class="tab-content-panel" id="especificaciones-{{id}}" style="padding: 30px; display: none;">
                        <h3 style="color: #253967; margin-bottom: 20px;">Especificaciones Técnicas</h3>
                        <div style="display: grid; gap: 15px;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; padding: 12px; background: #f8faff; border-left: 3px solid #ff6600;">
                                <strong style="color: #253967;">Cilindrada:</strong>
                                <span style="color: #666;">{{CILINDRADA}}</span>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; padding: 12px; background: #f8faff; border-left: 3px solid #ff6600;">
                                <strong style="color: #253967;">Potencia nominal:</strong>
                                <span style="color: #666;">{{POTENCIA}}</span>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; padding: 12px; background: #f8faff; border-left: 3px solid #ff6600;">
                                <strong style="color: #253967;">Capacidad tanque:</strong>
                                <span style="color: #666;">{{CAPACIDAD}}</span>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; padding: 12px; background: #f8faff; border-left: 3px solid #ff6600;">
                                <strong style="color: #253967;">Peso:</strong>
                                <span style="color: #666;">{{PESO}}</span>
                            </div>
                            <!-- AGREGA MÁS SPECS SEGÚN NECESITES -->
                        </div>
                    </div>

                    <!-- Tab: Qué Incluye -->
                    <div class="tab-content-panel" id="incluye-{{id}}" style="padding: 30px; display: none;">
                        <h3 style="color: #253967; margin-bottom: 20px;">Artículos Incluidos</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">✓ {{ITEM 1}}</li>
                            <li style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">✓ {{ITEM 2}}</li>
                            <li style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">✓ {{ITEM 3}}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Botones de Compra -->
            <div style="margin-top: 30px; display: flex; flex-direction: column; gap: 15px;">
                <!-- Botón Coppel (si tienes link) -->
                <!-- <a href="{{LINK_COPPEL}}" target="_blank" style="background: #1e4c8c; color: white; padding: 15px; text-align: center; border-radius: 8px; text-decoration: none; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 10px;">
                    <i class="fas fa-shopping-cart"></i>
                    Comprar en Coppel
                </a> -->

                <!-- Botón WhatsApp -->
                <a href="https://wa.me/526673298505?text=Hola, me interesa el {{NOMBRE PRODUCTO}}" target="_blank" style="background: #25d366; color: white; padding: 15px; text-align: center; border-radius: 8px; text-decoration: none; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 10px;">
                    <i class="fab fa-whatsapp"></i>
                    Consultar por WhatsApp
                </a>
            </div>
        </div>
    </div>
</section>
```

---

## 🎨 EJEMPLO COMPLETO: Generador G8500P

```html
<!-- Producto: Generador Husqvarna G8500P -->
<section class="product-card" id="g8500p" style="margin-bottom: 60px; background: white; border-radius: 12px; padding: 40px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
    <div class="product-container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start;">

        <div class="product-left-column">
            <div class="product-image-section">
                <h2 style="color: #ff6600; font-size: 2rem; margin-bottom: 20px;">Generador Husqvarna G8500P</h2>

                <div class="main-image" style="text-align: center; background: #f8faff; padding: 30px; border-radius: 12px; margin-bottom: 20px;">
                    <img src="images/generador-g8500p.jpg" alt="Generador Husqvarna G8500P" style="max-width: 100%; height: auto; max-height: 400px;">
                </div>

                <div style="background: linear-gradient(135deg, #253967 0%, #1e2c5a 100%); color: white; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
                    <p style="line-height: 1.8; margin: 0;">El generador Husqvarna G8500P fue creado para proporcionar energía eléctrica a sitios de trabajo y hogares que cuenten con un suministro eléctrico limitado. Este generador es grande, potente y eficiente, su diseño ergonómico y su tablero fácil de usar le garantizan al usuario una portabilidad y facilidad de uso en condiciones difíciles.</p>
                </div>
            </div>
        </div>

        <div class="product-right-column">
            <div style="text-align: center; margin-bottom: 30px;">
                <img src="images/husqvarna-logo-hd.png" alt="Husqvarna" style="height: 80px;">
            </div>

            <div class="product-tabs">
                <div class="tabs-navigation" style="display: flex; background: #f8f9fa; border-bottom: 1px solid #ddd; border-radius: 8px 8px 0 0;">
                    <button class="tab-nav-btn active" data-tab="descripcion-g8500p" style="flex: 1; padding: 15px; border: none; background: transparent; cursor: pointer; font-weight: 600; color: #253967; border-bottom: 3px solid #ff6600;">Descripción</button>
                    <button class="tab-nav-btn" data-tab="especificaciones-g8500p" style="flex: 1; padding: 15px; border: none; background: transparent; cursor: pointer; font-weight: 600; color: #666;">Especificaciones</button>
                    <button class="tab-nav-btn" data-tab="incluye-g8500p" style="flex: 1; padding: 15px; border: none; background: transparent; cursor: pointer; font-weight: 600; color: #666;">Qué Incluye</button>
                </div>

                <div class="tabs-container">
                    <div class="tab-content-panel active" id="descripcion-g8500p" style="padding: 30px; display: block;">
                        <h3 style="color: #253967; margin-bottom: 15px;">Descripción del Producto</h3>
                        <p style="color: #666; line-height: 1.8;">Generador de alta potencia diseñado para proporcionar energía confiable en sitios de trabajo y hogares. Con 8 kVA de potencia nominal y 8.5 kVA máxima, es ideal para aplicaciones que requieren energía constante y confiable.</p>
                    </div>

                    <div class="tab-content-panel" id="especificaciones-g8500p" style="padding: 30px; display: none;">
                        <h3 style="color: #253967; margin-bottom: 20px;">Especificaciones Técnicas</h3>
                        <div style="display: grid; gap: 15px;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; padding: 12px; background: #f8faff; border-left: 3px solid #ff6600;">
                                <strong style="color: #253967;">Cilindrada:</strong>
                                <span style="color: #666;">458 cc</span>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; padding: 12px; background: #f8faff; border-left: 3px solid #ff6600;">
                                <strong style="color: #253967;">Voltaje nominal:</strong>
                                <span style="color: #666;">120/240 V CA</span>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; padding: 12px; background: #f8faff; border-left: 3px solid #ff6600;">
                                <strong style="color: #253967;">Frecuencia:</strong>
                                <span style="color: #666;">60 Hz</span>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; padding: 12px; background: #f8faff; border-left: 3px solid #ff6600;">
                                <strong style="color: #253967;">Potencia nominal:</strong>
                                <span style="color: #666;">8 kVA</span>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; padding: 12px; background: #f8faff; border-left: 3px solid #ff6600;">
                                <strong style="color: #253967;">Potencia máxima:</strong>
                                <span style="color: #666;">8.5 kVA</span>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; padding: 12px; background: #f8faff; border-left: 3px solid #ff6600;">
                                <strong style="color: #253967;">Salidas CA:</strong>
                                <span style="color: #666;">3</span>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; padding: 12px; background: #f8faff; border-left: 3px solid #ff6600;">
                                <strong style="color: #253967;">Capacidad tanque:</strong>
                                <span style="color: #666;">27 L</span>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; padding: 12px; background: #f8faff; border-left: 3px solid #ff6600;">
                                <strong style="color: #253967;">Dimensiones:</strong>
                                <span style="color: #666;">72 x 56 x 58.5 cm</span>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; padding: 12px; background: #f8faff; border-left: 3px solid #ff6600;">
                                <strong style="color: #253967;">Peso:</strong>
                                <span style="color: #666;">91 kg</span>
                            </div>
                        </div>
                    </div>

                    <div class="tab-content-panel" id="incluye-g8500p" style="padding: 30px; display: none;">
                        <h3 style="color: #253967; margin-bottom: 20px;">Artículos Incluidos</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">✓ 1 Juego de herramienta</li>
                            <li style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">✓ 2 Clavijas 2 polos</li>
                            <li style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">✓ 1 Clavija 3 polos</li>
                            <li style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">✓ 1 Batería</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div style="margin-top: 30px; display: flex; flex-direction: column; gap: 15px;">
                <a href="https://wa.me/526673298505?text=Hola, me interesa el Generador Husqvarna G8500P" target="_blank" style="background: #25d366; color: white; padding: 15px; text-align: center; border-radius: 8px; text-decoration: none; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 10px;">
                    <i class="fab fa-whatsapp"></i>
                    Consultar por WhatsApp
                </a>
            </div>
        </div>
    </div>
</section>
```

---

## 📍 DÓNDE PEGAR LOS PRODUCTOS:

1. Abre el archivo HTML correspondiente (generadores.html, podadoras.html, etc.)
2. Busca la sección que dice: `<!-- Sección Modelos Disponibles -->`
3. **ANTES** de los botones placeholder, pega el código HTML del producto
4. Repite para cada producto

---

## ⚠️ IMPORTANTE:

- Cada producto necesita un **ID único** (ejemplo: `g8500p`, `g5500p`, `motor-hh389mp`)
- Las tabs también necesitan IDs únicos (agrega el sufijo del producto)
- Agrega las fotos en la carpeta `images/` con nombres descriptivos
- Si no tienes link de Coppel, comenta esa sección (o bórrala)

---

¿Necesitas que cree los 9 productos completos ahora o prefieres usar este template para agregarlos tú mismo?
