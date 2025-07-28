// SEO and accessibility utilities
export function initSEOOptimizations() {
  
  // Dynamic meta tag management
  function updateMetaTags(pageData) {
    const defaults = {
      title: 'Bella Vista Restaurant - Authentic Italian Dining Experience',
      description: 'Experience authentic Italian cuisine at Bella Vista Restaurant. Fresh ingredients, traditional recipes, and warm hospitality in the heart of downtown.',
      keywords: 'restaurant, Italian food, dining, pasta, pizza, authentic cuisine, family restaurant, downtown',
      image: '/images/restaurant-hero.jpg',
      url: window.location.href
    }
    
    const meta = { ...defaults, ...pageData }
    
    // Update title
    document.title = meta.title
    
    // Update or create meta tags
    updateMetaTag('description', meta.description)
    updateMetaTag('keywords', meta.keywords)
    updateMetaTag('author', 'Bella Vista Restaurant')
    updateMetaTag('robots', 'index, follow')
    
    // Open Graph tags
    updateMetaTag('og:title', meta.title, 'property')
    updateMetaTag('og:description', meta.description, 'property')
    updateMetaTag('og:image', meta.image, 'property')
    updateMetaTag('og:url', meta.url, 'property')
    updateMetaTag('og:type', 'website', 'property')
    updateMetaTag('og:site_name', 'Bella Vista Restaurant', 'property')
    updateMetaTag('og:locale', 'en_US', 'property')
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name')
    updateMetaTag('twitter:title', meta.title, 'name')
    updateMetaTag('twitter:description', meta.description, 'name')
    updateMetaTag('twitter:image', meta.image, 'name')
    
    // Local business specific
    updateMetaTag('geo.region', 'US-CA', 'name')
    updateMetaTag('geo.placename', 'Downtown', 'name')
    updateMetaTag('geo.position', '34.0522;-118.2437', 'name')
    updateMetaTag('ICBM', '34.0522, -118.2437', 'name')
  }
  
  function updateMetaTag(name, content, attribute = 'name') {
    let element = document.querySelector(`meta[${attribute}="${name}"]`)
    
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attribute, name)
      document.head.appendChild(element)
    }
    
    element.setAttribute('content', content)
  }
  
  // Structured data for local business
  function addStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Bella Vista Restaurant",
      "description": "Authentic Italian restaurant serving traditional cuisine with fresh ingredients and warm hospitality.",
      "url": window.location.origin,
      "telephone": "+1-555-123-4567",
      "email": "info@bellavista.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "Downtown",
        "addressRegion": "CA",
        "postalCode": "90210",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.0522,
        "longitude": -118.2437
      },
      "openingHours": [
        "Mo-Th 11:00-22:00",
        "Fr 11:00-23:00",
        "Sa 10:00-23:00",
        "Su 10:00-21:00"
      ],
      "servesCuisine": ["Italian", "Mediterranean"],
      "priceRange": "$$",
      "acceptsReservations": true,
      "hasMenu": window.location.origin + "/#menu",
      "image": [
        window.location.origin + "/images/restaurant-exterior.jpg",
        window.location.origin + "/images/restaurant-interior.jpg",
        window.location.origin + "/images/signature-dish.jpg"
      ],
      "sameAs": [
        "https://www.facebook.com/bellavista",
        "https://www.instagram.com/bellavista_restaurant",
        "https://www.twitter.com/bellavista"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sarah Johnson"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Absolutely amazing experience! The pasta was incredible and the service was top-notch."
        }
      ],
      "menu": {
        "@type": "Menu",
        "hasMenuSection": [
          {
            "@type": "MenuSection",
            "name": "Appetizers",
            "hasMenuItem": [
              {
                "@type": "MenuItem",
                "name": "Bruschetta Trio",
                "description": "Three varieties of our signature bruschetta",
                "offers": {
                  "@type": "Offer",
                  "price": "12.99",
                  "priceCurrency": "USD"
                }
              }
            ]
          }
        ]
      }
    }
    
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }
    
    // Add new structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData, null, 2)
    document.head.appendChild(script)
  }
  
  // Accessibility improvements
  function initAccessibility() {
    // Add skip navigation link
    addSkipNavigation()
    
    // Improve focus management
    improveFocusManagement()
    
    // Add ARIA labels and roles
    addARIALabels()
    
    // Improve keyboard navigation
    improveKeyboardNavigation()
    
    // Add screen reader announcements
    addScreenReaderSupport()
  }
  
  function addSkipNavigation() {
    const skipLink = document.createElement('a')
    skipLink.href = '#main-content'
    skipLink.textContent = 'Skip to main content'
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
    skipLink.style.cssText = `
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.cssText = `
        position: absolute;
        top: 1rem;
        left: 1rem;
        z-index: 9999;
        background: #2563eb;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        text-decoration: none;
      `
    })
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.cssText = `
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
      `
    })
    
    document.body.insertBefore(skipLink, document.body.firstChild)
  }
  
  function improveFocusManagement() {
    // Add focus indicators
    const style = document.createElement('style')
    style.textContent = `
      .focus-visible {
        outline: 2px solid #2563eb;
        outline-offset: 2px;
      }
      
      button:focus-visible,
      a:focus-visible,
      input:focus-visible,
      select:focus-visible,
      textarea:focus-visible {
        outline: 2px solid #2563eb;
        outline-offset: 2px;
      }
    `
    document.head.appendChild(style)
    
    // Manage focus for modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal:not(.hidden)')
        if (openModal) {
          const closeBtn = openModal.querySelector('[data-close]') || openModal.querySelector('button')
          if (closeBtn) closeBtn.click()
        }
      }
    })
  }
  
  function addARIALabels() {
    // Add main content landmark
    const mainContent = document.querySelector('#app')
    if (mainContent) {
      mainContent.setAttribute('role', 'main')
      mainContent.setAttribute('id', 'main-content')
    }
    
    // Add navigation landmarks
    const nav = document.querySelector('nav')
    if (nav) {
      nav.setAttribute('role', 'navigation')
      nav.setAttribute('aria-label', 'Main navigation')
    }
    
    // Add form labels
    const inputs = document.querySelectorAll('input, select, textarea')
    inputs.forEach(input => {
      if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        const label = input.closest('div').querySelector('label')
        if (label) {
          const labelId = `label-${Math.random().toString(36).substr(2, 9)}`
          label.id = labelId
          input.setAttribute('aria-labelledby', labelId)
        }
      }
    })
    
    // Add button descriptions
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
      if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
        button.setAttribute('aria-label', 'Button')
      }
    })
  }
  
  function improveKeyboardNavigation() {
    // Make cards keyboard accessible
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
      if (!card.getAttribute('tabindex')) {
        card.setAttribute('tabindex', '0')
        card.setAttribute('role', 'button')
        
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            card.click()
          }
        })
      }
    })
    
    // Improve modal keyboard navigation
    const modals = document.querySelectorAll('[id*="modal"]')
    modals.forEach(modal => {
      modal.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          trapFocus(modal, e)
        }
      })
    })
  }
  
  function trapFocus(container, event) {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]
    
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault()
      lastElement.focus()
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }
  
  function addScreenReaderSupport() {
    // Add live region for announcements
    const liveRegion = document.createElement('div')
    liveRegion.setAttribute('aria-live', 'polite')
    liveRegion.setAttribute('aria-atomic', 'true')
    liveRegion.className = 'sr-only'
    liveRegion.id = 'live-region'
    document.body.appendChild(liveRegion)
    
    // Function to announce messages
    window.announceToScreenReader = (message) => {
      const liveRegion = document.getElementById('live-region')
      if (liveRegion) {
        liveRegion.textContent = message
        setTimeout(() => {
          liveRegion.textContent = ''
        }, 1000)
      }
    }
  }
  
  // Page-specific SEO updates
  function updatePageSEO() {
    const currentHash = window.location.hash.slice(1) || 'home'
    
    const pageData = {
      home: {
        title: 'Bella Vista Restaurant - Authentic Italian Dining Experience',
        description: 'Experience authentic Italian cuisine at Bella Vista Restaurant. Fresh ingredients, traditional recipes, and warm hospitality in downtown.',
        keywords: 'Italian restaurant, authentic cuisine, downtown dining, family restaurant'
      },
      menu: {
        title: 'Menu - Bella Vista Restaurant | Italian Cuisine & Dishes',
        description: 'Explore our authentic Italian menu featuring handmade pasta, wood-fired pizza, fresh seafood, and traditional desserts. View prices and dietary options.',
        keywords: 'Italian menu, pasta, pizza, seafood, desserts, restaurant menu, authentic Italian food'
      },
      about: {
        title: 'About Us - Bella Vista Restaurant | Our Story & Team',
        description: 'Learn about Bella Vista Restaurant\'s 25-year history, our passionate team, and commitment to authentic Italian cuisine and exceptional service.',
        keywords: 'restaurant story, Italian restaurant history, restaurant team, authentic Italian cuisine'
      },
      gallery: {
        title: 'Gallery - Bella Vista Restaurant | Food & Interior Photos',
        description: 'View photos of our delicious Italian dishes, elegant restaurant interior, and memorable dining experiences at Bella Vista Restaurant.',
        keywords: 'restaurant photos, Italian food photos, restaurant interior, dining experience'
      },
      contact: {
        title: 'Contact & Reservations - Bella Vista Restaurant',
        description: 'Contact Bella Vista Restaurant for reservations, private events, or inquiries. Located in downtown with convenient parking and hours.',
        keywords: 'restaurant contact, reservations, private events, downtown restaurant, restaurant hours'
      }
    }
    
    updateMetaTags(pageData[currentHash] || pageData.home)
  }
  
  // Initialize all SEO and accessibility features
  function init() {
    addStructuredData()
    initAccessibility()
    updatePageSEO()
    
    // Update SEO when page changes
    window.addEventListener('hashchange', updatePageSEO)
    
    console.log('🔍 SEO and accessibility optimizations initialized')
  }
  
  // Start initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
}
