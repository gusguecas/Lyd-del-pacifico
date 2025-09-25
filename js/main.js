// Husqvarna Website JavaScript
// Main functionality for the Husqvarna equipment website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeNavigation();
    initializeContactForm();
    initializeScrollAnimations();
    initializeProductCards();
    initializeCoppelLinks();
    initializeProductSearch();
});

// Navigation Functionality
function initializeNavigation() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close dropdown menu after clicking (mobile)
                const dropdown = this.closest('.nav-dropdown');
                if (dropdown) {
                    dropdown.classList.remove('active');
                }
            }
        });
    });
    
    // Dropdown menu functionality for mobile
    initializeDropdownMenu();
    
    // Mobile menu toggle (if needed for future mobile menu)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuToggle && navList) {
        mobileMenuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }
}

// Dropdown Menu Functionality
function initializeDropdownMenu() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.nav-dropdown');
    
    if (dropdownToggle && dropdown) {
        // Handle dropdown toggle on mobile
        dropdownToggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                dropdown.classList.remove('active');
            }
        });
    }
}

// Contact Form Functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            
            for (let [key, value] of formData.entries()) {
                formObject[key] = value;
            }
            
            // Validate form
            if (validateForm(formObject)) {
                // Send form data via WhatsApp
                sendWhatsAppMessage(formObject);
                
                // Show success message
                showNotification('¡Mensaje enviado! Te contactaremos pronto.', 'success');
                
                // Reset form
                contactForm.reset();
            } else {
                showNotification('Por favor, completa todos los campos requeridos.', 'error');
            }
        });
    }
}

// Form validation
function validateForm(data) {
    const requiredFields = ['name', 'email', 'phone', 'product'];
    
    for (let field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            return false;
        }
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return false;
    }
    
    return true;
}

// Send WhatsApp message with form data
function sendWhatsAppMessage(data) {
    const phoneNumber = '526673298505';
    const productNames = {
        '525iB': 'Husqvarna 525iB - Sopladora',
        'LC151-fumigadora': 'Husqvarna LC151 - Fumigadora',
        'LC151-podadora': 'Husqvarna LC151 - Podadora',
        'otro': 'Otro producto'
    };
    
    const message = `¡Hola! Me interesa cotizar un equipo Husqvarna:

👤 *Nombre:* ${data.name}
📧 *Email:* ${data.email}
📱 *Teléfono:* ${data.phone}
🛠️ *Producto:* ${productNames[data.product] || data.product}
💬 *Mensaje:* ${data.message || 'Sin mensaje adicional'}

Por favor, envíenme información sobre precios y disponibilidad.

¡Gracias!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Product Cards Functionality
function initializeProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Add click tracking for analytics (if needed)
        const productName = card.querySelector('h3').textContent;
        card.addEventListener('click', function(e) {
            // Only track if not clicking on buttons
            if (!e.target.closest('.btn')) {
                console.log('Product viewed:', productName);
                // Here you could send analytics data
            }
        });
    });
    
    // WhatsApp buttons functionality
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            console.log('WhatsApp inquiry for:', productName);
        });
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    // Create intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.product-card, .service-card, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Parallax effect for hero section (subtle)
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero && scrolled < hero.offsetHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#007bff'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 300px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add animation styles to head if not exists
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 10px;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideInRight 0.3s ease-out reverse';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', function() {
        notification.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
}

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    }).format(price);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    // Mexican phone number validation (basic)
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

// Product Quick Actions
function initializeQuickActions() {
    // Quick WhatsApp buttons
    document.addEventListener('click', function(e) {
        if (e.target.matches('.quick-whatsapp')) {
            e.preventDefault();
            const productName = e.target.getAttribute('data-product');
            const message = `Hola, me interesa el producto: ${productName}. ¿Podrían darme más información?`;
            const whatsappUrl = `https://wa.me/526673298505?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }
        
        if (e.target.matches('.quick-coppel')) {
            e.preventDefault();
            window.open('https://www.coppel.com', '_blank');
        }
    });
}

// Track Coppel.com clicks and provide search fallback URLs
function initializeCoppelLinks() {
    // Update product links to use search URLs for better reliability
    const productLinks = {
        '525iB': 'https://www.coppel.com/buscar?q=husqvarna+525ib+sopladora',
        'LC151-fumigadora': 'https://www.coppel.com/buscar?q=husqvarna+lc151+fumigadora+mochila',
        'LC151-podadora': 'https://www.coppel.com/buscar?q=husqvarna+lc151+podadora+cesped'
    };
    
    const coppelLinks = document.querySelectorAll('a[href*="coppel.com"][data-product]');
    
    coppelLinks.forEach(link => {
        const productName = link.getAttribute('data-product');
        
        // Update the link to use search URL for better reliability
        if (productLinks[productName]) {
            link.href = productLinks[productName];
        }
        
        link.addEventListener('click', function(e) {
            const productCode = this.getAttribute('data-product');
            
            // Track the click for analytics
            console.log('Coppel search initiated for:', productCode);
            
            // Show notification to user
            setTimeout(() => {
                showNotification(
                    `Buscando ${productCode} en Coppel.com. Si no encuentras el producto exacto, contacta por WhatsApp.`, 
                    'info'
                );
            }, 1000);
        });
    });
}

// Initialize quick actions
initializeQuickActions();

// Performance optimization
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Call lazy loading if there are images with data-src
if (document.querySelectorAll('img[data-src]').length > 0) {
    lazyLoadImages();
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// Product Search Functionality
function initializeProductSearch() {
    const searchForm = document.getElementById('headerSearchForm');
    const searchInput = document.getElementById('searchInput');
    
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const searchTerm = searchInput.value.trim();
            
            if (searchTerm.length < 2) {
                showNotification('Por favor, ingresa al menos 2 caracteres para buscar.', 'warning');
                return;
            }
            
            // Perform search
            performProductSearch(searchTerm);
        });
        
        // Search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchForm.dispatchEvent(new Event('submit'));
            }
        });
        
        // Live search suggestions (optional)
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.trim();
            if (searchTerm.length >= 2) {
                showSearchSuggestions(searchTerm);
            } else {
                hideSearchSuggestions();
            }
        });
    }
}

// Perform product search
function performProductSearch(searchTerm) {
    const searchInput = document.getElementById('searchInput');
    
    // Base de datos de productos disponibles en el sitio web LYD
    const searchDatabase = {
        // Motosierras específicas
        '120': {
            name: 'Husqvarna 120',
            page: 'motosierras.html',
            type: 'product'
        },
        '135': {
            name: 'Husqvarna 135',
            page: 'motosierras.html',
            type: 'product'
        },
        '440e': {
            name: 'Husqvarna 440e II - Motosierra',
            page: 'motosierras.html',
            elementId: 'husqvarna-440e',
            section: '#motosierras-section',
            type: 'product'
        },
        '450e': {
            name: 'Husqvarna 450e II - Motosierra',
            page: 'motosierras.html',
            elementId: 'husqvarna-450e',
            section: '#motosierras-section',
            type: 'product'
        },
        '455': {
            name: 'Husqvarna 455 Rancher - Motosierra',
            page: 'motosierras.html',
            elementId: 'husqvarna-455',
            section: '#motosierras-section',
            type: 'product'
        },
        'rancher': {
            name: 'Husqvarna 455 Rancher - Motosierra',
            page: 'motosierras.html',
            elementId: 'husqvarna-455',
            section: '#motosierras-section',
            type: 'product'
        },
        '545': {
            name: 'Husqvarna 545 Mark II - Motosierra',
            page: 'motosierras.html',
            elementId: 'husqvarna-545',
            section: '#motosierras-section',
            type: 'product'
        },
        '272xp': {
            name: 'Husqvarna 272XP - Motosierra',
            page: 'motosierras.html',
            elementId: 'husqvarna-272xp',
            section: '#motosierras-section',
            type: 'product'
        },
        '272': {
            name: 'Husqvarna 272XP - Motosierra',
            page: 'motosierras.html',
            elementId: 'husqvarna-272xp',
            section: '#motosierras-section',
            type: 'product'
        },
        '281xp': {
            name: 'Husqvarna 281XP - Motosierra',
            page: 'motosierras.html',
            elementId: 'husqvarna-281xp',
            section: '#motosierras-section',
            type: 'product'
        },
        '281': {
            name: 'Husqvarna 281XP - Motosierra',
            page: 'motosierras.html',
            elementId: 'husqvarna-281xp',
            section: '#motosierras-section',
            type: 'product'
        },
        '61': {
            name: 'Husqvarna 61 - Motosierra',
            page: 'motosierras.html',
            elementId: 'husqvarna-61',
            section: '#motosierras-section',
            type: 'product'
        },
        '353': {
            name: 'Husqvarna 353 - Motosierra',
            page: 'motosierras.html',
            elementId: 'husqvarna-353',
            section: '#motosierras-section',
            type: 'product'
        },
        '365': {
            name: 'Husqvarna 365 - Motosierra',
            page: 'motosierras.html',
            elementId: 'husqvarna-365',
            section: '#motosierras-section',
            type: 'product'
        },
        '562xp': {
            name: 'Husqvarna 562XP - Motosierra',
            page: 'motosierras.html',
            elementId: 'husqvarna-562xp',
            section: '#motosierras-section',
            type: 'product'
        },
        '562': {
            name: 'Husqvarna 562XP - Motosierra',
            page: 'motosierras.html',
            elementId: 'husqvarna-562xp',
            section: '#motosierras-section',
            type: 'product'
        },
        
        // Motocultivadores específicos
        'tf338': {
            name: 'Husqvarna TF338 - Motocultivador',
            page: 'motocultivadores.html',
            elementId: 'husqvarna-tf338',
            section: '#motocultivadores-section',
            type: 'product'
        },
        'tr262': {
            name: 'Husqvarna TR262 - Motocultivador',
            page: 'motocultivadores.html',
            elementId: 'husqvarna-tr262',
            section: '#motocultivadores-section',
            type: 'product'
        },
        
        // Categorías generales
        'motosierra': {
            name: 'Motosierras Husqvarna',
            page: 'motosierras.html',
            section: '#hero-section',
            type: 'category'
        },
        'motosierras': {
            name: 'Motosierras Husqvarna',
            page: 'motosierras.html',
            section: '#hero-section',
            type: 'category'
        },
        'motocultivador': {
            name: 'Motocultivadores Husqvarna',
            page: 'motocultivadores.html',
            section: '#hero-section',
            type: 'category'
        },
        'motocultivadores': {
            name: 'Motocultivadores Husqvarna',
            page: 'motocultivadores.html',
            section: '#hero-section',
            type: 'category'
        },
        'podadora': {
            name: 'Podadoras Husqvarna',
            page: 'podadoras.html',
            section: '#hero-section',
            type: 'category'
        },
        'podadoras': {
            name: 'Podadoras Husqvarna',
            page: 'podadoras.html',
            section: '#hero-section',
            type: 'category'
        },
        
        // Términos alternativos
        'chainsaw': {
            name: 'Motosierras Husqvarna',
            page: 'motosierras.html',
            section: '#hero-section',
            type: 'category'
        },
        'sierra': {
            name: 'Motosierras Husqvarna',
            page: 'motosierras.html',
            section: '#hero-section',
            type: 'category'
        },
        'tiller': {
            name: 'Motocultivadores Husqvarna',
            page: 'motocultivadores.html',
            section: '#hero-section',
            type: 'category'
        }
    };
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    let found = false;
    
    // Search for exact matches first
    for (let key in searchDatabase) {
        if (lowerSearchTerm.includes(key)) {
            const result = searchDatabase[key];
            found = true;
            
            // Show search result options
            showSearchResults(searchTerm, result);
            break;
        }
    }
    
    // If no exact match, show no results message
    if (!found) {
        showNoResultsMessage(searchTerm);
    }
    
    // Clear search input
    searchInput.value = '';
    hideSearchSuggestions();
}

// Navigate directly to search results in our website
function showSearchResults(searchTerm, result) {
    showNotification(`Encontré: ${result.name} - Navegando...`, 'success');
    
    // Check if we need to navigate to a different page
    const currentPage = window.location.pathname.split('/').pop();
    
    if (result.page && currentPage !== result.page) {
        // Navigate to the specific page
        if (result.elementId) {
            // Add hash for specific element
            window.location.href = `${result.page}#${result.elementId}`;
        } else {
            // Just navigate to page
            window.location.href = result.page;
        }
    } else {
        // Same page - scroll to element
        if (result.elementId) {
            const targetElement = document.getElementById(result.elementId);
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
                // Highlight the product briefly
                targetElement.style.backgroundColor = '#fff3cd';
                setTimeout(() => {
                    targetElement.style.backgroundColor = '';
                }, 2000);
            } else if (result.section) {
                const sectionElement = document.querySelector(result.section);
                if (sectionElement) {
                    sectionElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        } else if (result.section) {
            const sectionElement = document.querySelector(result.section);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        
        showNotification(`Mostrando: ${result.name}`, 'success');
    }
}

// Show general search results
function showGeneralSearchResults(searchTerm) {
    const message = `¿Cómo quieres buscar "${searchTerm}"?`;
    
    if (confirm(message + '\n\nOK = Buscar en Coppel.com\nCancelar = Contactar por WhatsApp')) {
        // Search in Coppel
        const coppelUrl = `https://www.coppel.com/buscar?q=husqvarna+${encodeURIComponent(searchTerm)}`;
        window.open(coppelUrl, '_blank');
        showNotification(`Buscando "${searchTerm}" en Coppel.com`, 'info');
    } else {
        // Contact via WhatsApp
        const whatsappMessage = `Hola, estoy buscando: ${searchTerm}. ¿Podrían ayudarme?`;
        const whatsappUrl = `https://wa.me/526673298505?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        showNotification('Contactando por WhatsApp...', 'success');
    }
}

// Show search suggestions (basic implementation)
function showSearchSuggestions(searchTerm) {
    // This could be expanded to show a dropdown with suggestions
    // For now, we'll just add a subtle visual feedback
    const searchInput = document.getElementById('searchInput');
    searchInput.style.borderColor = 'var(--primary-orange)';
}

// Hide search suggestions
function hideSearchSuggestions() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.style.borderColor = '';
    }
}

// Product Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing product page...');
    // Initialize product page specific functionality
    initializeProductTabs(); // Habilitado para los tabs de producto
    // initializeQuantityControls(); // No se usa - no hay e-commerce
    initializeImageGallery();
    console.log('Product page initialization complete');
});

// Product Tabs Functionality
function initializeProductTabs() {
    const tabButtons = document.querySelectorAll('.tab-nav-btn');
    

    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');
                const tabsContainer = this.closest('.product-tabs');
                

                
                if (tabsContainer) {
                    // Remove active class from all buttons and panels within this container
                    const allButtons = tabsContainer.querySelectorAll('.tab-nav-btn');
                    const allPanels = tabsContainer.querySelectorAll('.tab-content-panel');
                    
                    allButtons.forEach(btn => btn.classList.remove('active'));
                    allPanels.forEach(panel => panel.classList.remove('active'));
                    
                    // Add active class to clicked button and corresponding panel
                    this.classList.add('active');
                    const targetPanel = document.getElementById(targetTab);
                    if (targetPanel) {
                        targetPanel.classList.add('active');

                    } else {

                    }
                } else {

                }
            });
        });
    }
}

// Quantity Controls Functionality
function initializeQuantityControls() {
    const quantityControls = document.querySelectorAll('.quantity-controls');
    
    quantityControls.forEach(control => {
        const quantityInput = control.querySelector('input[type="number"]');
        const minusBtn = control.querySelector('.qty-btn.minus');
        const plusBtn = control.querySelector('.qty-btn.plus');
        
        if (quantityInput && minusBtn && plusBtn) {
            // Minus button
            minusBtn.addEventListener('click', function() {
                let currentValue = parseInt(quantityInput.value);
                if (currentValue > 1) {
                    quantityInput.value = currentValue - 1;
                }
            });
            
            // Plus button
            plusBtn.addEventListener('click', function() {
                let currentValue = parseInt(quantityInput.value);
                const maxValue = parseInt(quantityInput.getAttribute('max')) || 10;
                if (currentValue < maxValue) {
                    quantityInput.value = currentValue + 1;
                }
            });
            
            // Direct input validation
            quantityInput.addEventListener('input', function() {
                let value = parseInt(this.value);
                const min = parseInt(this.getAttribute('min')) || 1;
                const max = parseInt(this.getAttribute('max')) || 10;
                
                if (isNaN(value) || value < min) {
                    this.value = min;
                } else if (value > max) {
                    this.value = max;
                }
            });
        }
    });
}

// Image Gallery Functionality
function initializeImageGallery() {
    // Use event delegation to handle clicks on thumbnails
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('thumbnail')) {
            e.preventDefault();
            console.log('Thumbnail clicked via delegation!');
            
            const targetId = e.target.getAttribute('data-target');
            console.log('Target ID:', targetId);
            
            // Remove active class from all images and thumbnails
            const allImages = document.querySelectorAll('.product-image');
            const allThumbnails = document.querySelectorAll('.thumbnail');
            
            console.log('Images found:', allImages.length, 'Thumbnails found:', allThumbnails.length);
            
            allImages.forEach(img => img.classList.remove('active'));
            allThumbnails.forEach(thumb => thumb.classList.remove('active'));
            
            // Add active class to target image and clicked thumbnail
            const targetImage = document.getElementById(targetId);
            if (targetImage) {
                targetImage.classList.add('active');
                console.log('Image switched to:', targetId);
            } else {
                console.log('Target image not found:', targetId);
            }
            e.target.classList.add('active');
        }
    });
    
    // Initialize zoom effect with mouse tracking
    initializeImageZoom();
    
    console.log('Image gallery event delegation set up');
}

// Advanced Image Zoom Effect
function initializeImageZoom() {
    const mainImageContainers = document.querySelectorAll('.main-image');
    
    mainImageContainers.forEach(mainImageContainer => {
        mainImageContainer.addEventListener('mousemove', function(e) {
            const activeImage = this.querySelector('.product-image.active');
            if (activeImage) {
                const rect = this.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                
                // Transform origin based on mouse position
                activeImage.style.transformOrigin = `${x}% ${y}%`;
            }
        });
        
        mainImageContainer.addEventListener('mouseleave', function() {
            const activeImage = this.querySelector('.product-image.active');
            if (activeImage) {
                // Reset transform origin to center
                activeImage.style.transformOrigin = 'center center';
            }
        });
    });
    
    console.log(`Advanced zoom effect initialized for ${mainImageContainers.length} galleries`);
}



// Product Variant Selector Functionality
function initializeVariantSelector() {
    console.log('Initializing variant selectors...');
    
    // 281XP Variant Selector
    const variantButtons281XP = document.querySelectorAll('.variant-btn');
    
    if (variantButtons281XP.length > 0) {
        console.log('Found 281XP variant buttons:', variantButtons281XP.length);
        
        variantButtons281XP.forEach(button => {
            button.addEventListener('click', function() {
                const variant = this.getAttribute('data-variant');
                const price = this.getAttribute('data-price');
                const coppelUrl = this.getAttribute('data-url');
                
                console.log('Variant selected:', variant, 'Price:', price);
                
                // Update active button
                variantButtons281XP.forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.border = '2px solid #ddd';
                    btn.style.backgroundColor = '#fff';
                    btn.style.color = '#666';
                });
                
                this.classList.add('active');
                this.style.border = '2px solid #ff6600';
                this.style.backgroundColor = '#ff6600';
                this.style.color = '#fff';
                
                // Update price display
                const priceElement = document.getElementById('price-281xp');
                if (priceElement) {
                    priceElement.textContent = price;
                    console.log('Price updated to:', price);
                }
                
                // Update Coppel button URL
                const coppelButton = document.getElementById('coppel-btn-281xp');
                if (coppelButton && coppelUrl) {
                    coppelButton.setAttribute('onclick', `window.open('${coppelUrl}', '_blank')`);
                    console.log('Coppel URL updated to:', coppelUrl);
                }
                
                // Update WhatsApp message
                const whatsappButton = document.getElementById('whatsapp-btn-281xp');
                if (whatsappButton) {
                    const productName = `Husqvarna 281XP-${variant}" Profesional`;
                    const whatsappMessage = `Hola, me interesa la Motosierra ${productName} (${price} m.n.). Necesito información y/o cotización para venta directa. ¿Podrían ayudarme?`;
                    const whatsappUrl = `https://wa.me/526673298505?text=${encodeURIComponent(whatsappMessage)}`;
                    whatsappButton.setAttribute('onclick', `window.open('${whatsappUrl}', '_blank')`);
                    console.log('WhatsApp message updated for variant:', variant);
                }
                
                // Update bar length specification
                const barLengthElement = document.getElementById('bar-length-281xp');
                if (barLengthElement) {
                    barLengthElement.textContent = `Barra sólida de ${variant}" incluida`;
                    console.log('Bar length specification updated to:', variant + '"');
                }
                
                // Update components list items
                const barItemElement = document.getElementById('bar-item-281xp');
                const chainItemElement = document.getElementById('chain-item-281xp');
                
                if (barItemElement) {
                    barItemElement.textContent = `1 Barra Husqvarna ${variant}" sólida 3/8" .058"`;
                    console.log('Bar item updated to:', variant + '"');
                }
                
                if (chainItemElement) {
                    chainItemElement.textContent = `1 Cadena Husqvarna ${variant}" 3/8" .058"`;
                    console.log('Chain item updated to:', variant + '"');
                }
                
                // Visual feedback
                showNotification(`Seleccionado: 281XP con barra de ${variant}" - ${price}`, 'success');
            });
        });
        
        console.log('281XP variant selector initialized successfully');
    }
    
    // 61 Variant Selector
    const variantButtons61 = document.querySelectorAll('#husqvarna-61 .variant-btn');
    
    if (variantButtons61.length > 0) {
        console.log('Found 61 variant buttons:', variantButtons61.length);
        
        variantButtons61.forEach(button => {
            button.addEventListener('click', function() {
                const variant = this.getAttribute('data-variant');
                const price = this.getAttribute('data-price');
                const coppelUrl = this.getAttribute('data-url');
                
                console.log('61 Variant selected:', variant, 'Price:', price);
                
                // Update active button
                variantButtons61.forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.border = '2px solid #ddd';
                    btn.style.backgroundColor = '#fff';
                    btn.style.color = '#666';
                });
                
                this.classList.add('active');
                this.style.border = '2px solid #ff6600';
                this.style.backgroundColor = '#ff6600';
                this.style.color = '#fff';
                
                // Update price display
                const priceElement = document.getElementById('price-61');
                if (priceElement) {
                    priceElement.textContent = price;
                    console.log('61 Price updated to:', price);
                }
                
                // Update Coppel button URL
                const coppelButton = document.getElementById('coppel-btn-61');
                if (coppelButton && coppelUrl) {
                    coppelButton.setAttribute('onclick', `window.open('${coppelUrl}', '_blank')`);
                    console.log('61 Coppel URL updated to:', coppelUrl);
                }
                
                // Update WhatsApp message
                const whatsappButton = document.getElementById('whatsapp-btn-61');
                if (whatsappButton) {
                    const productName = `Husqvarna 61-${variant}" Naranja Multiusos`;
                    const whatsappMessage = `Hola, me interesa la Motosierra ${productName} (${price}). Necesito información y/o cotización para venta directa. ¿Podrían ayudarme?`;
                    const whatsappUrl = `https://wa.me/526673298505?text=${encodeURIComponent(whatsappMessage)}`;
                    whatsappButton.setAttribute('onclick', `window.open('${whatsappUrl}', '_blank')`);
                    console.log('61 WhatsApp message updated for variant:', variant);
                }
                
                // Update components list items
                const barItemElement = document.getElementById('bar-item-61');
                const chainItemElement = document.getElementById('chain-item-61');
                
                if (barItemElement) {
                    barItemElement.textContent = `1 Barra Husqvarna ${variant}" sólida 3/8" .058"`;
                    console.log('61 Bar item updated to:', variant + '"');
                }
                
                if (chainItemElement) {
                    chainItemElement.textContent = `1 Cadena Husqvarna ${variant}" 3/8" .058"`;
                    console.log('61 Chain item updated to:', variant + '"');
                }
                
                // Visual feedback
                showNotification(`Seleccionado: 61 con barra de ${variant}" - ${price}`, 'success');
            });
        });
        
        console.log('61 variant selector initialized successfully');
    }
    
    // 365 Variant Selector
    const variantButtons365 = document.querySelectorAll('#husqvarna-365 .variant-btn');
    
    if (variantButtons365.length > 0) {
        console.log('Found 365 variant buttons:', variantButtons365.length);
        
        variantButtons365.forEach(button => {
            button.addEventListener('click', function() {
                const variant = this.getAttribute('data-variant');
                const price = this.getAttribute('data-price');
                const coppelUrl = this.getAttribute('data-url');
                
                console.log('365 Variant selected:', variant, 'Price:', price);
                
                // Update active button
                variantButtons365.forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.border = '2px solid #ddd';
                    btn.style.backgroundColor = '#fff';
                    btn.style.color = '#666';
                });
                
                this.classList.add('active');
                this.style.border = '2px solid #ff6600';
                this.style.backgroundColor = '#ff6600';
                this.style.color = '#fff';
                
                // Update price display
                const priceElement = document.getElementById('price-365');
                if (priceElement) {
                    priceElement.textContent = price;
                    console.log('365 Price updated to:', price);
                }
                
                // Update Coppel button URL
                const coppelButton = document.getElementById('coppel-btn-365');
                if (coppelButton && coppelUrl) {
                    coppelButton.setAttribute('onclick', `window.open('${coppelUrl}', '_blank')`);
                    console.log('365 Coppel URL updated to:', coppelUrl);
                }
                
                // Update WhatsApp message
                const whatsappButton = document.getElementById('whatsapp-btn-365');
                if (whatsappButton) {
                    const productName = `Husqvarna 365-${variant}" Profesional`;
                    const whatsappMessage = `Hola, me interesa la Motosierra ${productName} (${price}). Necesito información y/o cotización para venta directa. ¿Podrían ayudarme?`;
                    const whatsappUrl = `https://wa.me/526673298505?text=${encodeURIComponent(whatsappMessage)}`;
                    whatsappButton.setAttribute('onclick', `window.open('${whatsappUrl}', '_blank')`);
                    console.log('365 WhatsApp message updated for variant:', variant);
                }
                
                // Update components list items if they exist
                const barItemElement = document.getElementById('bar-item-365');
                const chainItemElement = document.getElementById('chain-item-365');
                
                if (barItemElement) {
                    barItemElement.textContent = `1 Barra Husqvarna ${variant}" sólida 3/8" .058"`;
                    console.log('365 Bar item updated to:', variant + '"');
                }
                
                if (chainItemElement) {
                    chainItemElement.textContent = `1 Cadena Husqvarna ${variant}" 3/8" .058"`;
                    console.log('365 Chain item updated to:', variant + '"');
                }
                
                // Visual feedback
                showNotification(`Seleccionado: 365 con barra de ${variant}" - ${price}`, 'success');
            });
        });
        
        console.log('365 variant selector initialized successfully');
    }
    
    // 562XP Variant Selector
    const variantButtons562XP = document.querySelectorAll('#husqvarna-562xp .variant-btn');
    
    if (variantButtons562XP.length > 0) {
        console.log('Found 562XP variant buttons:', variantButtons562XP.length);
        
        variantButtons562XP.forEach(button => {
            button.addEventListener('click', function() {
                const variant = this.getAttribute('data-variant');
                const price = this.getAttribute('data-price');
                const coppelUrl = this.getAttribute('data-url');
                
                console.log('562XP Variant selected:', variant, 'Price:', price);
                
                // Update active button
                variantButtons562XP.forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.border = '2px solid #ddd';
                    btn.style.backgroundColor = '#fff';
                    btn.style.color = '#666';
                });
                
                this.classList.add('active');
                this.style.border = '2px solid #ff6600';
                this.style.backgroundColor = '#ff6600';
                this.style.color = '#fff';
                
                // Update price display
                const priceElement = document.getElementById('price-562xp');
                if (priceElement) {
                    priceElement.textContent = price;
                    console.log('562XP Price updated to:', price);
                }
                
                // Update Coppel button URL
                const coppelButton = document.getElementById('coppel-btn-562xp');
                if (coppelButton && coppelUrl) {
                    coppelButton.setAttribute('onclick', `window.open('${coppelUrl}', '_blank')`);
                    console.log('562XP Coppel URL updated to:', coppelUrl);
                }
                
                // Update WhatsApp message
                const whatsappButton = document.getElementById('whatsapp-btn-562xp');
                if (whatsappButton) {
                    const productName = `Husqvarna 562XP-${variant}" Profesional`;
                    const whatsappMessage = `Hola, me interesa la Motosierra ${productName} (${price}). Necesito información y/o cotización para venta directa. ¿Podrían ayudarme?`;
                    const whatsappUrl = `https://wa.me/526673298505?text=${encodeURIComponent(whatsappMessage)}`;
                    whatsappButton.setAttribute('onclick', `window.open('${whatsappUrl}', '_blank')`);
                    console.log('562XP WhatsApp message updated for variant:', variant);
                }
                
                // Update components list items if they exist
                const barItemElement = document.getElementById('bar-item-562XP');
                const chainItemElement = document.getElementById('chain-item-562XP');
                
                if (barItemElement) {
                    barItemElement.textContent = `1 Barra Husqvarna ${variant}" profesional 3/8" .058"`;
                    console.log('562XP Bar item updated to:', variant + '"');
                }
                
                if (chainItemElement) {
                    chainItemElement.textContent = `1 Cadena Husqvarna ${variant}" 3/8" .058"`;
                    console.log('562XP Chain item updated to:', variant + '"');
                }
                
                // Visual feedback
                showNotification(`Seleccionado: 562XP con barra de ${variant}" - ${price}`, 'success');
            });
        });
        
        console.log('562XP variant selector initialized successfully');
    }
    
    // 353 Variant Selector
    const variantButtons353 = document.querySelectorAll('#husqvarna-353 .variant-btn');
    
    if (variantButtons353.length > 0) {
        console.log('Found 353 variant buttons:', variantButtons353.length);
        
        variantButtons353.forEach(button => {
            button.addEventListener('click', function() {
                const variant = this.getAttribute('data-variant');
                const price = this.getAttribute('data-price');
                const coppelUrl = this.getAttribute('data-url');
                
                console.log('353 Variant selected:', variant, 'Price:', price);
                
                // Update active button
                variantButtons353.forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.border = '2px solid #ddd';
                    btn.style.backgroundColor = '#fff';
                    btn.style.color = '#666';
                });
                
                this.classList.add('active');
                this.style.border = '2px solid #ff6600';
                this.style.backgroundColor = '#ff6600';
                this.style.color = '#fff';
                
                // Update price display
                const priceElement = document.getElementById('price-353');
                if (priceElement) {
                    priceElement.textContent = price;
                    console.log('353 Price updated to:', price);
                }
                
                // Update Coppel button URL
                const coppelButton = document.getElementById('coppel-btn-353');
                if (coppelButton && coppelUrl) {
                    coppelButton.setAttribute('onclick', `window.open('${coppelUrl}', '_blank')`);
                    console.log('353 Coppel URL updated to:', coppelUrl);
                }
                
                // Update WhatsApp message
                const whatsappButton = document.getElementById('whatsapp-btn-353');
                if (whatsappButton) {
                    const productName = `Husqvarna 353-${variant}" Multiusos`;
                    const whatsappMessage = `Hola, me interesa la Motosierra ${productName} (${price} m.n.). Necesito información y/o cotización para venta directa. ¿Podrían ayudarme?`;
                    const whatsappUrl = `https://wa.me/526673298505?text=${encodeURIComponent(whatsappMessage)}`;
                    whatsappButton.setAttribute('onclick', `window.open('${whatsappUrl}', '_blank')`);
                    console.log('353 WhatsApp message updated for variant:', variant);
                }
                
                // Update components list items if they exist
                const barItemElement = document.getElementById('bar-item-353');
                const chainItemElement = document.getElementById('chain-item-353');
                
                if (barItemElement) {
                    barItemElement.textContent = `1 Barra Husqvarna ${variant}" estrella .325" .058"`;
                    console.log('353 Bar item updated to:', variant + '"');
                }
                
                if (chainItemElement) {
                    chainItemElement.textContent = `1 Cadena Husqvarna ${variant}" .325" .058"`;
                    console.log('353 Chain item updated to:', variant + '"');
                }
                
                // Visual feedback
                showNotification(`Seleccionado: 353 con barra de ${variant}" - ${price}`, 'success');
            });
        });
        
        console.log('353 variant selector initialized successfully');
    }
}

// Initialize variant selectors when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add variant selector to existing initialization
    setTimeout(() => {
        initializeVariantSelector();
    }, 100); // Small delay to ensure DOM is fully ready
});

// Console welcome message
console.log('🌱 LYD - Husqvarna Equipment Website');
console.log('📞 Contact: 667 329 8505 | ✉️ ventas@global3g.com');