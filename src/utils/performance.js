// Performance optimization utilities
export function initPerformanceOptimizations() {
  
  // Lazy loading for images and content
  function initLazyLoading() {
    // Create intersection observer for lazy loading
    const lazyLoadObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target
          
          // Handle images
          if (element.tagName === 'IMG') {
            if (element.dataset.src) {
              element.src = element.dataset.src
              element.removeAttribute('data-src')
            }
            element.classList.remove('lazy-loading')
            element.classList.add('lazy-loaded')
          }
          
          // Handle background images
          if (element.dataset.bgSrc) {
            element.style.backgroundImage = `url(${element.dataset.bgSrc})`
            element.removeAttribute('data-bg-src')
          }
          
          // Handle content sections
          if (element.classList.contains('lazy-content')) {
            element.classList.add('content-loaded')
          }
          
          lazyLoadObserver.unobserve(element)
        }
      })
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    })
    
    // Observe all lazy elements
    document.querySelectorAll('[data-src], [data-bg-src], .lazy-content').forEach(el => {
      lazyLoadObserver.observe(el)
    })
  }

  // Optimize animations and transitions
  function optimizeAnimations() {
    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    if (prefersReducedMotion.matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms')
      document.documentElement.style.setProperty('--transition-duration', '0.01ms')
      
      // Disable complex animations
      const style = document.createElement('style')
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      `
      document.head.appendChild(style)
    }
    
    // Use transform and opacity for better performance
    const animatedElements = document.querySelectorAll('.card, .menu-item, .gallery-item')
    animatedElements.forEach(el => {
      el.style.willChange = 'transform, opacity'
    })
  }

  // Optimize scroll performance
  function optimizeScrolling() {
    let ticking = false
    
    function updateScrollElements() {
      // Update scroll-dependent elements efficiently
      const scrollY = window.pageYOffset
      
      // Parallax elements
      const parallaxElements = document.querySelectorAll('.parallax')
      parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 0.5
        el.style.transform = `translateY(${scrollY * speed}px)`
      })
      
      // Fade elements
      const fadeElements = document.querySelectorAll('.fade-on-scroll')
      fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect()
        const opacity = Math.max(0, Math.min(1, 1 - (rect.top / window.innerHeight)))
        el.style.opacity = opacity
      })
      
      ticking = false
    }
    
    function requestScrollUpdate() {
      if (!ticking) {
        requestAnimationFrame(updateScrollElements)
        ticking = true
      }
    }
    
    // Use passive listeners for better performance
    window.addEventListener('scroll', requestScrollUpdate, { passive: true })
  }

  // Preload critical resources
  function preloadCriticalResources() {
    const criticalResources = [
      { href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap', as: 'style' }
    ]
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource.href
      link.as = resource.as
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin
      document.head.appendChild(link)
    })
  }

  // Optimize images
  function optimizeImages() {
    const images = document.querySelectorAll('img')
    
    images.forEach(img => {
      // Add loading="lazy" for native lazy loading
      if (!img.hasAttribute('loading')) {
        img.loading = 'lazy'
      }
      
      // Add proper alt text if missing
      if (!img.alt) {
        img.alt = 'Restaurant image'
      }
      
      // Optimize image dimensions
      img.addEventListener('load', function() {
        if (this.naturalWidth > this.clientWidth * 2) {
          console.warn(`Image ${this.src} is larger than needed`)
        }
      })
    })
  }

  // Memory management
  function optimizeMemory() {
    // Clean up unused event listeners
    const cleanupFunctions = []
    
    // Store cleanup functions for later use
    window.performanceCleanup = () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
    
    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
      window.performanceCleanup()
    })
  }

  // Bundle size optimization
  function optimizeBundleSize() {
    // Dynamic imports for non-critical features
    const loadFeatureOnDemand = async (featureName) => {
      try {
        switch (featureName) {
          case 'gallery':
            return await import('./gallery.js')
          case 'contact':
            return await import('./contact.js')
          case 'menu':
            return await import('./menu.js')
          default:
            return null
        }
      } catch (error) {
        console.warn(`Failed to load feature ${featureName}:`, error)
        return null
      }
    }
    
    // Make available globally
    window.loadFeature = loadFeatureOnDemand
  }

  // Performance monitoring
  function initPerformanceMonitoring() {
    // Core Web Vitals monitoring
    function measureCoreWebVitals() {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]
        console.log('LCP:', lastEntry.startTime)
        
        // Report if LCP is poor (>2.5s)
        if (lastEntry.startTime > 2500) {
          console.warn('Poor LCP performance detected')
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] })
      
      // First Input Delay (FID) - measure on first interaction
      let firstInputDelay = null
      const measureFID = (event) => {
        if (firstInputDelay === null) {
          firstInputDelay = performance.now() - event.timeStamp
          console.log('FID:', firstInputDelay)
          
          if (firstInputDelay > 100) {
            console.warn('Poor FID performance detected')
          }
          
          // Remove listener after first measurement
          ['mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(type => {
            document.removeEventListener(type, measureFID, true)
          })
        }
      }
      
      ['mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(type => {
        document.addEventListener(type, measureFID, true)
      })
      
      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        }
        console.log('CLS:', clsValue)
        
        if (clsValue > 0.1) {
          console.warn('Poor CLS performance detected')
        }
      }).observe({ entryTypes: ['layout-shift'] })
    }
    
    // Resource timing
    function monitorResourceTiming() {
      window.addEventListener('load', () => {
        const resources = performance.getEntriesByType('resource')
        
        resources.forEach(resource => {
          if (resource.duration > 1000) {
            console.warn(`Slow resource: ${resource.name} (${resource.duration}ms)`)
          }
        })
        
        // Monitor total page load time
        const navigation = performance.getEntriesByType('navigation')[0]
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart
        
        console.log(`Page load time: ${loadTime}ms`)
        
        if (loadTime > 3000) {
          console.warn('Slow page load detected')
        }
      })
    }
    
    measureCoreWebVitals()
    monitorResourceTiming()
  }

  // Cache optimization
  function optimizeCaching() {
    // Service worker registration for caching
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration)
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError)
          })
      })
    }
    
    // Local storage optimization
    try {
      // Cache frequently used data
      const cacheData = (key, data, ttl = 3600000) => { // 1 hour default
        const item = {
          data: data,
          timestamp: Date.now(),
          ttl: ttl
        }
        localStorage.setItem(key, JSON.stringify(item))
      }
      
      const getCachedData = (key) => {
        const item = localStorage.getItem(key)
        if (!item) return null
        
        const parsed = JSON.parse(item)
        if (Date.now() - parsed.timestamp > parsed.ttl) {
          localStorage.removeItem(key)
          return null
        }
        
        return parsed.data
      }
      
      // Make available globally
      window.cacheData = cacheData
      window.getCachedData = getCachedData
      
    } catch (error) {
      console.warn('Local storage not available')
    }
  }

  // Initialize all optimizations
  function init() {
    initLazyLoading()
    optimizeAnimations()
    optimizeScrolling()
    preloadCriticalResources()
    optimizeImages()
    optimizeMemory()
    optimizeBundleSize()
    initPerformanceMonitoring()
    optimizeCaching()
    
    console.log('🚀 Performance optimizations initialized')
  }

  // Start initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
}

// Performance testing utilities
export function runPerformanceTests() {
  const tests = []
  
  // Test 1: Page load time
  const navigation = performance.getEntriesByType('navigation')[0]
  const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0
  tests.push({
    name: 'Page Load Time',
    value: `${loadTime.toFixed(0)}ms`,
    passed: loadTime < 3000,
    target: '< 3000ms'
  })
  
  // Test 2: Resource count
  const resources = performance.getEntriesByType('resource')
  tests.push({
    name: 'Resource Count',
    value: resources.length,
    passed: resources.length < 50,
    target: '< 50 resources'
  })
  
  // Test 3: Bundle size estimation
  const scripts = document.querySelectorAll('script[src]')
  const styles = document.querySelectorAll('link[rel="stylesheet"]')
  tests.push({
    name: 'External Resources',
    value: `${scripts.length} JS, ${styles.length} CSS`,
    passed: scripts.length < 10 && styles.length < 5,
    target: '< 10 JS, < 5 CSS'
  })
  
  return tests
}
