/* =============================================
   YV VISUALS FX - Main JavaScript
   Handles all interactions, animations, and functionality
   ============================================= */

// =============================================
// DOM Elements
// =============================================

const loader = document.getElementById('loader');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-menu a');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// =============================================
// Loading Screen
// =============================================

window.addEventListener('load', () => {
    setTimeout(() => {
        if (loader) {
            loader.style.display = 'none';
        }
    }, 2500);
});

// =============================================
// Mobile Menu Toggle
// =============================================

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// =============================================
// Active Navigation Link
// =============================================

function setActiveNav() {
    const currentLocation = location.pathname;
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (currentLocation.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
}

setActiveNav();

// =============================================
// Portfolio Filter
// =============================================

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.classList.add('reveal');
                    }, 10);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// =============================================
// Contact Form Submission
// =============================================

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Basic validation
        if (!data.name || !data.email || !data.message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        if (!isValidEmail(data.email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        try {
            // Simulate form submission (in production, send to backend)
            showFormMessage('Sending your inquiry...', 'success');
            
            // Here you would typically send data to a backend service
            // For now, we'll just show a success message
            setTimeout(() => {
                showFormMessage('✓ Thank you! Your inquiry has been received. We\'ll get back to you within 24 hours.', 'success');
                contactForm.reset();
            }, 1500);

        } catch (error) {
            showFormMessage('Error submitting form. Please try again.', 'error');
            console.error('Form submission error:', error);
        }
    });
}

// =============================================
// Form Helper Functions
// =============================================

function showFormMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        if (type === 'success') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// =============================================
// Scroll Reveal Animation
// =============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all scroll-reveal elements
document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right').forEach(el => {
    observer.observe(el);
});

// =============================================
// Smooth Scroll Behavior
// =============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =============================================
// Navbar Scroll Effect
// =============================================

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    if (navbar) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 50) {
            navbar.style.borderBottomColor = 'rgba(0, 212, 255, 0.3)';
        } else {
            navbar.style.borderBottomColor = 'rgba(0, 212, 255, 0.1)';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
});

// =============================================
// Lazy Loading Images (if needed in future)
// =============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// =============================================
// Parallax Scroll Effect
// =============================================

window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        let scrollPosition = window.pageYOffset;
        element.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});

// =============================================
// Add Reveal Class to Elements on Page Load
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.service-card, .portfolio-item, .pricing-card, .testimonial, .faq-item');
    
    reveals.forEach((el, index) => {
        el.classList.add('reveal');
        el.style.animationDelay = `${index * 0.1}s`;
    });

    // Add scroll-reveal classes for animations
    const elementsToReveal = document.querySelectorAll('section h2, section p, .service-detail, .expertise-card, .process-step');
    elementsToReveal.forEach(el => {
        if (!el.classList.contains('reveal')) {
            el.classList.add('scroll-reveal');
        }
    });
});

// =============================================
// Form Input Focus Effects
// =============================================

const formInputs = document.querySelectorAll('input, select, textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.style.borderColor = 'var(--primary-color)';
    });

    input.addEventListener('blur', () => {
        input.parentElement.style.borderColor = 'rgba(0, 212, 255, 0.3)';
    });
});

// =============================================
// CTA Button Hover Effect
// =============================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// =============================================
// Smooth Page Transitions
// =============================================

window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0.8';
});

// =============================================
// Analytics & Performance Tracking
// =============================================

// Track page views
function trackPageView() {
    const page = document.title;
    console.log(`Page viewed: ${page}`);
    // In production, send to analytics service
}

trackPageView();

// =============================================
// Service Worker Registration (for PWA)
// =============================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js').catch(err => {
        //     console.log('Service Worker registration failed:', err);
        // });
    });
}

// =============================================
// Accessibility Enhancements
// =============================================

// Ensure proper focus management
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Add skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#main-content';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
document.body.insertBefore(skipLink, document.body.firstChild);

// =============================================
// Performance Optimization
// =============================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// =============================================
// Contact Methods (WhatsApp, Email)
// =============================================

// WhatsApp integration
const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
whatsappButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const phoneNumber = '1234567890'; // Replace with actual WhatsApp number
        const message = 'Hi YV VISUALS FX, I\'m interested in your editing services.';
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Open in new tab
        window.open(whatsappURL, '_blank');
    });
});

// =============================================
// Cookie Consent (Optional)
// =============================================

// Check if user has accepted cookies
function checkCookieConsent() {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
        showCookieBanner();
    }
}

function showCookieBanner() {
    // Add cookie banner HTML if needed
    // This is a placeholder for cookie consent functionality
}

// =============================================
// Mobile Optimization
// =============================================

// Detect if mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    document.body.classList.add('mobile-device');
}

// =============================================
// Error Handling
// =============================================

window.addEventListener('error', (event) => {
    console.error('Global error caught:', event.error);
    // In production, send to error tracking service
});

// =============================================
// Console Messages
// =============================================

console.log('%cYV VISUALS FX', 'color: #00d4ff; font-size: 24px; font-weight: bold;');
console.log('%cPremium Video & Photo Editing Services', 'color: #0099cc; font-size: 14px;');
console.log('%cVisit: https://yvvisualsfx.com', 'color: #a0aec0; font-size: 12px;');

// =============================================
// Initialize
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('YV VISUALS FX website loaded successfully!');
    
    // Add smooth scroll class
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize all animations and interactions
    initializeAnimations();
});

function initializeAnimations() {
    // Stagger animation for multiple elements
    const staggerElements = document.querySelectorAll('.service-card, .portfolio-item, .pricing-card');
    
    staggerElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.15}s`;
        element.classList.add('fade-in-up');
    });
}