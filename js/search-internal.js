// Motor de Búsqueda Interna - LYD Husqvarna
// Búsqueda exclusiva dentro del sitio web, sin opciones externas

// Función principal de búsqueda interna
function performInternalSearch(searchTerm) {
    const searchInput = document.getElementById('searchInput');
    
    // Base de datos completa de productos disponibles en el sitio web
    const internalSearchDatabase = {
        // Motosierras específicas (IDs reales del HTML)
        '120': {
            name: 'Husqvarna 120',
            page: 'motosierras.html',
            targetId: 'husqvarna-120',
            type: 'product'
        },
        '135': {
            name: 'Husqvarna 135',
            page: 'motosierras.html', 
            targetId: 'husqvarna-135',
            type: 'product'
        },
        '445': {
            name: 'Husqvarna 445',
            page: 'motosierras.html',
            targetId: 'husqvarna-445',
            type: 'product'
        },
        't435': {
            name: 'Husqvarna T435',
            page: 'motosierras.html',
            targetId: 'husqvarna-t435',
            type: 'product'
        },
        '525pt5s': {
            name: 'Husqvarna 525PT5S',
            page: 'motosierras.html',
            targetId: 'husqvarna-525pt5s',
            type: 'product'
        },
        '353': {
            name: 'Husqvarna 353',
            page: 'motosierras.html',
            targetId: 'husqvarna-353',
            type: 'product'
        },
        '281xp': {
            name: 'Husqvarna 281XP',
            page: 'motosierras.html',
            targetId: 'husqvarna-281xp',
            type: 'product'
        },
        '281': {
            name: 'Husqvarna 281XP',
            page: 'motosierras.html',
            targetId: 'husqvarna-281xp',
            type: 'product'
        },
        '61': {
            name: 'Husqvarna 61',
            page: 'motosierras.html',
            targetId: 'husqvarna-61',
            type: 'product'
        },
        '272xp': {
            name: 'Husqvarna 272XP',
            page: 'motosierras.html',
            targetId: 'husqvarna-272xp',
            type: 'product'
        },
        '272': {
            name: 'Husqvarna 272XP',
            page: 'motosierras.html',
            targetId: 'husqvarna-272xp',
            type: 'product'
        },
        '395xp': {
            name: 'Husqvarna 395XP',
            page: 'motosierras.html',
            targetId: 'husqvarna-395xp',
            type: 'product'
        },
        '395': {
            name: 'Husqvarna 395XP',
            page: 'motosierras.html',
            targetId: 'husqvarna-395xp',
            type: 'product'
        },
        
        // Motocultivadores específicos
        'tf338': {
            name: 'Husqvarna TF338',
            page: 'motocultivadores.html',
            targetId: 'tf338',
            type: 'product'
        },
        'tr262': {
            name: 'Husqvarna TR262',
            page: 'motocultivadores.html',
            targetId: 'tr262',
            type: 'product'
        },
        
        // Páginas individuales específicas
        'tf338 completo': {
            name: 'Husqvarna TF338 - Página Completa',
            page: 'husqvarna-tf338.html',
            targetId: null,
            type: 'individual_page'
        },
        'tr262 completo': {
            name: 'Husqvarna TR262 - Página Completa', 
            page: 'husqvarna-tr262.html',
            targetId: null,
            type: 'individual_page'
        },
        
        // Categorías de productos
        'motosierra': {
            name: 'Motosierras Husqvarna',
            page: 'motosierras.html',
            targetId: null,
            type: 'category'
        },
        'motosierras': {
            name: 'Motosierras Husqvarna',
            page: 'motosierras.html',
            targetId: null,
            type: 'category'
        },
        'motocultivador': {
            name: 'Motocultivadores Husqvarna',
            page: 'motocultivadores.html',
            targetId: null,
            type: 'category'
        },
        'motocultivadores': {
            name: 'Motocultivadores Husqvarna',
            page: 'motocultivadores.html',
            targetId: null,
            type: 'category'
        },
        'podadora': {
            name: 'Podadoras Husqvarna',
            page: 'podadoras.html',
            targetId: null,
            type: 'category'
        },
        'podadoras': {
            name: 'Podadoras Husqvarna',
            page: 'podadoras.html',
            targetId: null,
            type: 'category'
        },
        
        // Navegación de páginas
        'inicio': {
            name: 'Página de Inicio',
            page: 'index.html',
            targetId: null,
            type: 'page'
        },
        'contacto': {
            name: 'Página de Contacto',
            page: 'contacto.html',
            targetId: null,
            type: 'page'
        },
        'sobre nosotros': {
            name: 'Sobre Nosotros',
            page: 'sobre-nosotros.html',
            targetId: null,
            type: 'page'
        },
        
        // Términos alternativos en inglés
        'chainsaw': {
            name: 'Motosierras Husqvarna',
            page: 'motosierras.html',
            targetId: null,
            type: 'category'
        },
        'tiller': {
            name: 'Motocultivadores Husqvarna',
            page: 'motocultivadores.html',
            targetId: null,
            type: 'category'
        }
    };
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    let bestMatch = null;
    
    // Buscar coincidencias exactas primero
    for (let key in internalSearchDatabase) {
        if (lowerSearchTerm === key) {
            bestMatch = internalSearchDatabase[key];
            break;
        }
    }
    
    // Si no hay coincidencia exacta, buscar coincidencias parciales
    if (!bestMatch) {
        for (let key in internalSearchDatabase) {
            if (lowerSearchTerm.includes(key) || key.includes(lowerSearchTerm)) {
                bestMatch = internalSearchDatabase[key];
                break;
            }
        }
    }
    
    // Ejecutar navegación
    if (bestMatch) {
        navigateToProduct(bestMatch);
    } else {
        showSearchNotFound(searchTerm);
    }
    
    // Limpiar input de búsqueda
    searchInput.value = '';
}

// Función para navegar directamente al producto encontrado
function navigateToProduct(product) {
    showNotification(`Navegando a: ${product.name}`, 'success');
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Si necesitamos cambiar de página
    if (currentPage !== product.page) {
        // Navegar a la página correcta
        if (product.targetId) {
            // Con ancla específica
            window.location.href = `${product.page}#${product.targetId}`;
        } else {
            // Solo a la página
            window.location.href = product.page;
        }
    } else {
        // Estamos en la misma página, hacer scroll suave
        if (product.targetId) {
            scrollToElement(product.targetId);
        } else {
            // Scroll al inicio de la página
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}

// Función para hacer scroll suave a un elemento específico
function scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId);
    
    if (targetElement) {
        // Scroll suave al elemento
        targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
        
        // Destacar brevemente el elemento
        const originalBg = targetElement.style.backgroundColor;
        targetElement.style.backgroundColor = '#fff3cd';
        targetElement.style.transition = 'background-color 0.3s ease';
        
        setTimeout(() => {
            targetElement.style.backgroundColor = originalBg;
            setTimeout(() => {
                targetElement.style.transition = '';
            }, 300);
        }, 2000);
        
        showNotification('Producto encontrado', 'success');
    } else {
        // Si no se encuentra el elemento específico, scroll al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showNotification('Navegando a la sección', 'info');
    }
}

// Función cuando no se encuentra el producto
function showSearchNotFound(searchTerm) {
    showNotification(`No se encontró "${searchTerm}" en nuestro catálogo`, 'warning');
    
    // Sugerir alternativas
    const suggestions = [
        'Intenta buscar: "motosierra", "motocultivador" o "podadora"',
        'Busca por modelo: "135", "TF338", "455"',
        'O navega por nuestras categorías desde el menú'
    ];
    
    setTimeout(() => {
        showNotification(suggestions[0], 'info');
    }, 2000);
}

// Función mejorada de inicialización de búsqueda interna
function initializeInternalSearch() {
    const searchForm = document.getElementById('headerSearchForm');
    const searchInput = document.getElementById('searchInput');
    
    if (searchForm && searchInput) {
        // Reemplazar el manejador anterior
        searchForm.removeEventListener('submit', performProductSearch);
        
        // Agregar nuevo manejador para búsqueda interna
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const searchTerm = searchInput.value.trim();
            
            if (searchTerm.length < 2) {
                showNotification('Ingresa al menos 2 caracteres para buscar', 'warning');
                return;
            }
            
            // Ejecutar búsqueda interna
            performInternalSearch(searchTerm);
        });
        
        // Búsqueda en vivo (opcional)
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.trim();
            if (searchTerm.length >= 3) {
                // Cambiar borde para indicar que está listo para buscar
                this.style.borderColor = '#FF6600';
            } else {
                this.style.borderColor = '';
            }
        });
        
        // Limpiar estilos al hacer blur
        searchInput.addEventListener('blur', function() {
            this.style.borderColor = '';
        });
        
        console.log('✅ Motor de búsqueda interna inicializado');
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Esperar un poco para asegurarse de que main.js se haya cargado
    setTimeout(initializeInternalSearch, 500);
});