// Mobile testing and responsiveness utilities
export function initMobileTesting() {
  
  // Device breakpoints for testing
  const breakpoints = {
    mobile: { width: 375, height: 667, name: 'Mobile (iPhone SE)' },
    mobileLarge: { width: 414, height: 896, name: 'Mobile Large (iPhone 11)' },
    tablet: { width: 768, height: 1024, name: 'Tablet (iPad)' },
    tabletLarge: { width: 1024, height: 1366, name: 'Tablet Large (iPad Pro)' },
    desktop: { width: 1440, height: 900, name: 'Desktop' },
    desktopLarge: { width: 1920, height: 1080, name: 'Desktop Large' }
  }

  // Touch interaction improvements
  function initTouchInteractions() {
    // Add touch-friendly classes to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .card, .menu-item, .gallery-item')
    
    interactiveElements.forEach(element => {
      // Ensure minimum touch target size (44px)
      const rect = element.getBoundingClientRect()
      if (rect.height < 44 || rect.width < 44) {
        element.style.minHeight = '44px'
        element.style.minWidth = '44px'
        element.style.display = 'flex'
        element.style.alignItems = 'center'
        element.style.justifyContent = 'center'
      }
      
      // Add touch feedback
      element.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.98)'
        this.style.opacity = '0.8'
      })
      
      element.addEventListener('touchend', function() {
        this.style.transform = ''
        this.style.opacity = ''
      })
    })
  }

  // Optimize navigation for mobile
  function optimizeMobileNavigation() {
    const navbar = document.getElementById('navbar')
    const mobileMenuBtn = document.getElementById('mobile-menu-btn')
    const mobileMenu = document.getElementById('mobile-menu')
    
    if (navbar && window.innerWidth <= 768) {
      // Make navbar more touch-friendly
      navbar.style.minHeight = '60px'
      
      // Improve mobile menu button
      if (mobileMenuBtn) {
        mobileMenuBtn.style.minWidth = '44px'
        mobileMenuBtn.style.minHeight = '44px'
        mobileMenuBtn.style.display = 'flex'
        mobileMenuBtn.style.alignItems = 'center'
        mobileMenuBtn.style.justifyContent = 'center'
      }
      
      // Improve mobile menu items
      if (mobileMenu) {
        const menuLinks = mobileMenu.querySelectorAll('a')
        menuLinks.forEach(link => {
          link.style.minHeight = '48px'
          link.style.display = 'flex'
          link.style.alignItems = 'center'
          link.style.padding = '12px 16px'
        })
      }
    }
  }

  // Fix form inputs for mobile
  function optimizeMobileForms() {
    const inputs = document.querySelectorAll('input, select, textarea')
    
    inputs.forEach(input => {
      // Prevent zoom on iOS
      if (input.type !== 'date' && input.type !== 'time') {
        input.style.fontSize = '16px'
      }
      
      // Improve touch targets
      input.style.minHeight = '44px'
      input.style.padding = '12px 16px'
      
      // Add better focus styles for mobile
      input.addEventListener('focus', function() {
        this.style.borderWidth = '2px'
        this.style.outline = 'none'
      })
      
      input.addEventListener('blur', function() {
        this.style.borderWidth = '1px'
      })
    })
    
    // Optimize form buttons
    const formButtons = document.querySelectorAll('form button')
    formButtons.forEach(button => {
      button.style.minHeight = '48px'
      button.style.fontSize = '16px'
      button.style.fontWeight = '600'
    })
  }

  // Optimize gallery for mobile
  function optimizeMobileGallery() {
    const galleryContainer = document.getElementById('gallery-container')
    const lightboxModal = document.getElementById('lightbox-modal')
    
    if (galleryContainer && window.innerWidth <= 768) {
      // Ensure single column on mobile
      galleryContainer.className = galleryContainer.className.replace(/md:grid-cols-\d+|lg:grid-cols-\d+|xl:grid-cols-\d+/g, '')
      galleryContainer.style.gridTemplateColumns = '1fr'
    }
    
    // Optimize lightbox for mobile
    if (lightboxModal) {
      const lightboxContent = lightboxModal.querySelector('.relative')
      if (lightboxContent && window.innerWidth <= 768) {
        lightboxContent.style.margin = '1rem'
        lightboxContent.style.maxHeight = '90vh'
        lightboxContent.style.overflow = 'auto'
      }
      
      // Make navigation buttons larger on mobile
      const navButtons = lightboxModal.querySelectorAll('#lightbox-prev, #lightbox-next')
      navButtons.forEach(button => {
        if (window.innerWidth <= 768) {
          button.style.fontSize = '3rem'
          button.style.width = '60px'
          button.style.height = '60px'
          button.style.display = 'flex'
          button.style.alignItems = 'center'
          button.style.justifyContent = 'center'
        }
      })
    }
  }

  // Optimize menu page for mobile
  function optimizeMobileMenu() {
    const menuFilters = document.getElementById('category-filters')
    const menuItems = document.getElementById('menu-items')
    
    if (menuFilters && window.innerWidth <= 768) {
      // Make filter buttons more touch-friendly
      const filterButtons = menuFilters.querySelectorAll('button')
      filterButtons.forEach(button => {
        button.style.minHeight = '44px'
        button.style.fontSize = '14px'
        button.style.padding = '8px 12px'
      })
    }
    
    if (menuItems && window.innerWidth <= 768) {
      // Ensure single column layout
      menuItems.style.gridTemplateColumns = '1fr'
      menuItems.style.gap = '1rem'
    }
  }

  // Add swipe gestures for mobile
  function addSwipeGestures() {
    let startX = 0
    let startY = 0
    let endX = 0
    let endY = 0
    
    document.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    })
    
    document.addEventListener('touchend', function(e) {
      endX = e.changedTouches[0].clientX
      endY = e.changedTouches[0].clientY
      handleSwipe()
    })
    
    function handleSwipe() {
      const deltaX = endX - startX
      const deltaY = endY - startY
      const minSwipeDistance = 50
      
      // Only handle horizontal swipes
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        const lightboxModal = document.getElementById('lightbox-modal')
        
        // Swipe navigation in lightbox
        if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
          if (deltaX > 0) {
            // Swipe right - previous image
            const prevBtn = document.getElementById('lightbox-prev')
            if (prevBtn) prevBtn.click()
          } else {
            // Swipe left - next image
            const nextBtn = document.getElementById('lightbox-next')
            if (nextBtn) nextBtn.click()
          }
        }
      }
    }
  }

  // Optimize scroll behavior for mobile
  function optimizeMobileScroll() {
    // Smooth scrolling for mobile
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Prevent horizontal scroll
    document.body.style.overflowX = 'hidden'
    
    // Optimize scroll performance
    const scrollElements = document.querySelectorAll('.section-padding, .card, .menu-item')
    scrollElements.forEach(element => {
      element.style.willChange = 'transform'
    })
  }

  // Add mobile-specific CSS
  function addMobileCSS() {
    const style = document.createElement('style')
    style.textContent = `
      /* Mobile-specific improvements */
      @media (max-width: 768px) {
        /* Ensure text is readable */
        body {
          font-size: 16px;
          line-height: 1.6;
        }
        
        /* Improve button spacing */
        .btn-primary, .btn-secondary {
          min-height: 48px;
          font-size: 16px;
          padding: 12px 24px;
          margin: 8px 4px;
        }
        
        /* Better card spacing */
        .card {
          margin-bottom: 1rem;
          padding: 1rem;
        }
        
        /* Improve form spacing */
        form > div {
          margin-bottom: 1rem;
        }
        
        /* Better navigation */
        .nav-link, .mobile-nav-link {
          min-height: 48px;
          display: flex;
          align-items: center;
          font-size: 16px;
        }
        
        /* Optimize hero sections */
        .text-5xl, .text-6xl, .text-7xl {
          font-size: 2.5rem;
          line-height: 1.2;
        }
        
        /* Better gallery grid */
        .gallery-item {
          margin-bottom: 1rem;
        }
        
        /* Improve modal spacing */
        .modal-content {
          margin: 1rem;
          max-height: 90vh;
          overflow-y: auto;
        }
        
        /* Touch-friendly filters */
        .category-filter, .dietary-filter, .gallery-filter {
          min-height: 44px;
          font-size: 14px;
          margin: 4px;
        }
        
        /* Better table display */
        table {
          font-size: 14px;
        }
        
        /* Improve statistics display */
        .stats-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
      }
      
      /* Touch device optimizations */
      @media (hover: none) and (pointer: coarse) {
        /* Remove hover effects on touch devices */
        .hover\\:scale-105:hover {
          transform: none;
        }
        
        .hover\\:shadow-xl:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        /* Add touch feedback */
        .card:active,
        .menu-item:active,
        .gallery-item:active {
          transform: scale(0.98);
          opacity: 0.8;
        }
      }
    `
    document.head.appendChild(style)
  }

  // Performance monitoring for mobile
  function monitorMobilePerformance() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0]
          const loadTime = perfData.loadEventEnd - perfData.loadEventStart
          
          console.log('Mobile Performance Metrics:')
          console.log(`Page Load Time: ${loadTime}ms`)
          console.log(`DOM Content Loaded: ${perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart}ms`)
          
          // Warn if load time is too slow for mobile
          if (loadTime > 3000) {
            console.warn('Page load time is slow for mobile devices')
          }
        }, 0)
      })
    }
  }

  // Initialize all mobile optimizations
  function init() {
    addMobileCSS()
    initTouchInteractions()
    optimizeMobileNavigation()
    optimizeMobileForms()
    optimizeMobileGallery()
    optimizeMobileMenu()
    addSwipeGestures()
    optimizeMobileScroll()
    monitorMobilePerformance()
    
    // Re-optimize on window resize
    window.addEventListener('resize', () => {
      setTimeout(() => {
        optimizeMobileNavigation()
        optimizeMobileGallery()
        optimizeMobileMenu()
      }, 100)
    })
  }

  // Start initialization
  setTimeout(init, 100)
}

// Mobile test page functionality
export function initMobileTestPage() {
  // Update device info
  function updateDeviceInfo() {
    const screenSize = document.getElementById('screen-size')
    const viewportSize = document.getElementById('viewport-size')
    const deviceType = document.getElementById('device-type')
    const touchSupport = document.getElementById('touch-support')

    if (screenSize) {
      screenSize.textContent = `${screen.width} × ${screen.height}`
    }

    if (viewportSize) {
      viewportSize.textContent = `${window.innerWidth} × ${window.innerHeight}`
    }

    if (deviceType) {
      let type = 'Desktop'
      if (window.innerWidth <= 480) type = 'Mobile'
      else if (window.innerWidth <= 768) type = 'Mobile Large'
      else if (window.innerWidth <= 1024) type = 'Tablet'
      deviceType.textContent = type
    }

    if (touchSupport) {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      touchSupport.textContent = hasTouch ? 'Yes' : 'No'
    }
  }

  // Update performance metrics
  function updatePerformanceMetrics() {
    if ('performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0]

      const loadTime = document.getElementById('load-time')
      const domReady = document.getElementById('dom-ready')
      const firstPaint = document.getElementById('first-paint')
      const connectionType = document.getElementById('connection-type')

      if (loadTime && perfData) {
        const loadDuration = perfData.loadEventEnd - perfData.loadEventStart
        loadTime.textContent = `${loadDuration.toFixed(0)}ms`
        loadTime.className = loadDuration > 3000 ? 'text-red-600' : loadDuration > 1000 ? 'text-yellow-600' : 'text-green-600'
      }

      if (domReady && perfData) {
        const domDuration = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart
        domReady.textContent = `${domDuration.toFixed(0)}ms`
      }

      if (firstPaint) {
        const paintEntries = performance.getEntriesByType('paint')
        const firstPaintEntry = paintEntries.find(entry => entry.name === 'first-paint')
        if (firstPaintEntry) {
          firstPaint.textContent = `${firstPaintEntry.startTime.toFixed(0)}ms`
        }
      }

      if (connectionType && 'connection' in navigator) {
        const conn = navigator.connection
        connectionType.textContent = conn ? `${conn.effectiveType} (${conn.downlink}Mbps)` : 'Unknown'
      }
    }
  }

  // Run comprehensive mobile tests
  function runMobileTests() {
    const results = document.getElementById('test-results')
    if (!results) return

    const tests = []

    // Test 1: Viewport meta tag
    const viewportMeta = document.querySelector('meta[name="viewport"]')
    tests.push({
      name: 'Viewport Meta Tag',
      passed: viewportMeta && viewportMeta.content.includes('width=device-width'),
      message: viewportMeta ? 'Viewport meta tag found' : 'Missing viewport meta tag'
    })

    // Test 2: Touch targets
    const buttons = document.querySelectorAll('button, a, .card')
    let touchTargetsPassed = 0
    buttons.forEach(btn => {
      const rect = btn.getBoundingClientRect()
      if (rect.height >= 44 && rect.width >= 44) {
        touchTargetsPassed++
      }
    })
    tests.push({
      name: 'Touch Targets (44px minimum)',
      passed: touchTargetsPassed / buttons.length > 0.8,
      message: `${touchTargetsPassed}/${buttons.length} elements meet minimum size`
    })

    // Test 3: Font sizes
    const body = document.body
    const bodyFontSize = parseInt(window.getComputedStyle(body).fontSize)
    tests.push({
      name: 'Base Font Size',
      passed: bodyFontSize >= 16,
      message: `Base font size: ${bodyFontSize}px`
    })

    // Test 4: Horizontal scroll
    const hasHorizontalScroll = document.body.scrollWidth > window.innerWidth
    tests.push({
      name: 'No Horizontal Scroll',
      passed: !hasHorizontalScroll,
      message: hasHorizontalScroll ? 'Horizontal scroll detected' : 'No horizontal scroll'
    })

    // Test 5: Performance
    const perfData = performance.getEntriesByType('navigation')[0]
    const loadTime = perfData ? perfData.loadEventEnd - perfData.loadEventStart : 0
    tests.push({
      name: 'Load Performance',
      passed: loadTime < 3000,
      message: `Page load time: ${loadTime.toFixed(0)}ms`
    })

    // Display results
    results.innerHTML = tests.map(test => `
      <div class="flex items-center justify-between p-3 rounded-lg ${test.passed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
        <div class="flex items-center">
          <span class="mr-2">${test.passed ? '✅' : '❌'}</span>
          <span class="font-medium">${test.name}</span>
        </div>
        <span class="text-sm">${test.message}</span>
      </div>
    `).join('')

    // Overall score
    const passedTests = tests.filter(test => test.passed).length
    const score = Math.round((passedTests / tests.length) * 100)

    const scoreDiv = document.createElement('div')
    scoreDiv.className = `mt-4 p-4 rounded-lg text-center font-bold ${score >= 80 ? 'bg-green-100 text-green-800' : score >= 60 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`
    scoreDiv.innerHTML = `
      <div class="text-2xl mb-2">${score >= 80 ? '🎉' : score >= 60 ? '⚠️' : '🚨'}</div>
      <div>Mobile Responsiveness Score: ${score}%</div>
      <div class="text-sm mt-1">${passedTests}/${tests.length} tests passed</div>
    `
    results.appendChild(scoreDiv)
  }

  // Make function globally available
  window.runMobileTests = runMobileTests

  // Initialize
  function init() {
    updateDeviceInfo()
    updatePerformanceMetrics()

    // Update on resize
    window.addEventListener('resize', () => {
      setTimeout(updateDeviceInfo, 100)
    })

    // Run initial tests
    setTimeout(runMobileTests, 1000)
  }

  setTimeout(init, 100)
}

// Utility function to test different screen sizes
export function testResponsiveDesign() {
  const breakpoints = [
    { width: 375, height: 667, name: 'iPhone SE' },
    { width: 414, height: 896, name: 'iPhone 11' },
    { width: 768, height: 1024, name: 'iPad' },
    { width: 1024, height: 1366, name: 'iPad Pro' },
    { width: 1440, height: 900, name: 'Desktop' }
  ]

  console.log('Testing responsive design at different breakpoints:')
  breakpoints.forEach(bp => {
    console.log(`${bp.name}: ${bp.width}x${bp.height}`)
  })
}
