// Analytics and tracking utilities
export function initAnalytics() {
  
  // Basic analytics tracking
  const analytics = {
    sessionId: generateSessionId(),
    userId: getUserId(),
    startTime: Date.now(),
    pageViews: [],
    events: [],
    performance: {}
  }
  
  function generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
  }
  
  function getUserId() {
    let userId = localStorage.getItem('bella_vista_user_id')
    if (!userId) {
      userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
      localStorage.setItem('bella_vista_user_id', userId)
    }
    return userId
  }
  
  // Track page views
  function trackPageView(page) {
    const pageView = {
      page: page,
      timestamp: Date.now(),
      url: window.location.href,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      screenResolution: `${screen.width}x${screen.height}`,
      viewportSize: `${window.innerWidth}x${window.innerHeight}`
    }
    
    analytics.pageViews.push(pageView)
    
    // Send to analytics service (placeholder)
    sendAnalyticsData('pageview', pageView)
    
    console.log('📊 Page view tracked:', page)
  }
  
  // Track custom events
  function trackEvent(category, action, label = '', value = 0) {
    const event = {
      category: category,
      action: action,
      label: label,
      value: value,
      timestamp: Date.now(),
      page: getCurrentPage()
    }
    
    analytics.events.push(event)
    
    // Send to analytics service (placeholder)
    sendAnalyticsData('event', event)
    
    console.log('📊 Event tracked:', category, action, label)
  }
  
  // Track user interactions
  function initInteractionTracking() {
    // Track button clicks
    document.addEventListener('click', (e) => {
      const button = e.target.closest('button, .btn-primary, .btn-secondary')
      if (button) {
        const buttonText = button.textContent.trim()
        const buttonClass = button.className
        trackEvent('Button', 'Click', buttonText, 1)
      }
      
      // Track navigation clicks
      const navLink = e.target.closest('a[href^="#"]')
      if (navLink) {
        const destination = navLink.getAttribute('href').slice(1)
        trackEvent('Navigation', 'Click', destination, 1)
      }
      
      // Track external links
      const externalLink = e.target.closest('a[href^="http"]')
      if (externalLink) {
        const url = externalLink.getAttribute('href')
        trackEvent('External Link', 'Click', url, 1)
      }
    })
    
    // Track form submissions
    document.addEventListener('submit', (e) => {
      const form = e.target
      const formId = form.id || 'unknown-form'
      trackEvent('Form', 'Submit', formId, 1)
    })
    
    // Track scroll depth
    let maxScrollDepth = 0
    let scrollDepthMarkers = [25, 50, 75, 100]
    let trackedMarkers = []
    
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent
        
        scrollDepthMarkers.forEach(marker => {
          if (scrollPercent >= marker && !trackedMarkers.includes(marker)) {
            trackedMarkers.push(marker)
            trackEvent('Scroll Depth', 'Reached', `${marker}%`, marker)
          }
        })
      }
    })
    
    // Track time on page
    let timeOnPage = 0
    const timeTracker = setInterval(() => {
      timeOnPage += 10
      
      // Track engagement milestones
      if (timeOnPage === 30) {
        trackEvent('Engagement', 'Time on Page', '30 seconds', 30)
      } else if (timeOnPage === 60) {
        trackEvent('Engagement', 'Time on Page', '1 minute', 60)
      } else if (timeOnPage === 300) {
        trackEvent('Engagement', 'Time on Page', '5 minutes', 300)
      }
    }, 10000) // Every 10 seconds
    
    // Clear timer on page unload
    window.addEventListener('beforeunload', () => {
      clearInterval(timeTracker)
      trackEvent('Engagement', 'Time on Page', 'Final', timeOnPage)
    })
  }
  
  // Track performance metrics
  function trackPerformance() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0]
        
        if (perfData) {
          const performanceMetrics = {
            loadTime: perfData.loadEventEnd - perfData.loadEventStart,
            domReady: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
            firstByte: perfData.responseStart - perfData.requestStart,
            dnsLookup: perfData.domainLookupEnd - perfData.domainLookupStart,
            tcpConnect: perfData.connectEnd - perfData.connectStart,
            serverResponse: perfData.responseEnd - perfData.responseStart
          }
          
          analytics.performance = performanceMetrics
          
          // Track performance events
          trackEvent('Performance', 'Page Load Time', 'milliseconds', performanceMetrics.loadTime)
          trackEvent('Performance', 'DOM Ready Time', 'milliseconds', performanceMetrics.domReady)
          
          // Track Core Web Vitals
          trackCoreWebVitals()
          
          console.log('📊 Performance metrics tracked:', performanceMetrics)
        }
      }, 0)
    })
  }
  
  // Track Core Web Vitals
  function trackCoreWebVitals() {
    // Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const lastEntry = entries[entries.length - 1]
      trackEvent('Core Web Vitals', 'LCP', 'milliseconds', lastEntry.startTime)
    }).observe({ entryTypes: ['largest-contentful-paint'] })
    
    // First Input Delay (FID)
    let firstInputDelay = null
    const measureFID = (event) => {
      if (firstInputDelay === null) {
        firstInputDelay = performance.now() - event.timeStamp
        trackEvent('Core Web Vitals', 'FID', 'milliseconds', firstInputDelay)
        
        // Remove listeners after first measurement
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
      trackEvent('Core Web Vitals', 'CLS', 'score', clsValue)
    }).observe({ entryTypes: ['layout-shift'] })
  }
  
  // Track errors
  function trackErrors() {
    window.addEventListener('error', (e) => {
      trackEvent('Error', 'JavaScript Error', e.message, 1)
      console.error('📊 JavaScript error tracked:', e.message)
    })
    
    window.addEventListener('unhandledrejection', (e) => {
      trackEvent('Error', 'Promise Rejection', e.reason, 1)
      console.error('📊 Promise rejection tracked:', e.reason)
    })
  }
  
  // Restaurant-specific tracking
  function trackRestaurantEvents() {
    // Track menu interactions
    document.addEventListener('click', (e) => {
      // Menu item clicks
      if (e.target.closest('.menu-item')) {
        const menuItem = e.target.closest('.menu-item')
        const itemName = menuItem.querySelector('h3')?.textContent || 'Unknown Item'
        trackEvent('Menu', 'Item View', itemName, 1)
      }
      
      // Add to cart clicks
      if (e.target.textContent.includes('Add to Cart')) {
        trackEvent('Menu', 'Add to Cart', 'Item Added', 1)
      }
      
      // Gallery image clicks
      if (e.target.closest('.gallery-item')) {
        const galleryItem = e.target.closest('.gallery-item')
        const itemTitle = galleryItem.querySelector('h3')?.textContent || 'Unknown Image'
        trackEvent('Gallery', 'Image View', itemTitle, 1)
      }
      
      // Contact form interactions
      if (e.target.closest('#contact-form, #reservation-form')) {
        const formType = e.target.closest('#contact-form') ? 'Contact' : 'Reservation'
        trackEvent('Contact', 'Form Interaction', formType, 1)
      }
    })
    
    // Track phone number clicks
    document.addEventListener('click', (e) => {
      const phoneLink = e.target.closest('a[href^="tel:"]')
      if (phoneLink) {
        trackEvent('Contact', 'Phone Click', phoneLink.getAttribute('href'), 1)
      }
    })
    
    // Track email clicks
    document.addEventListener('click', (e) => {
      const emailLink = e.target.closest('a[href^="mailto:"]')
      if (emailLink) {
        trackEvent('Contact', 'Email Click', emailLink.getAttribute('href'), 1)
      }
    })
  }
  
  // Send data to analytics service
  function sendAnalyticsData(type, data) {
    // In a real application, you would send this to your analytics service
    // For now, we'll just store it locally and log it
    
    const analyticsData = {
      type: type,
      data: data,
      sessionId: analytics.sessionId,
      userId: analytics.userId,
      timestamp: Date.now()
    }
    
    // Store in local storage for demo purposes
    try {
      const existingData = JSON.parse(localStorage.getItem('bella_vista_analytics') || '[]')
      existingData.push(analyticsData)
      
      // Keep only last 100 events
      if (existingData.length > 100) {
        existingData.splice(0, existingData.length - 100)
      }
      
      localStorage.setItem('bella_vista_analytics', JSON.stringify(existingData))
    } catch (error) {
      console.warn('Failed to store analytics data:', error)
    }
    
    // In production, you would send to your analytics service:
    // fetch('/api/analytics', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(analyticsData)
    // })
  }
  
  // Get current page
  function getCurrentPage() {
    return window.location.hash.slice(1) || 'home'
  }
  
  // Public API
  window.analytics = {
    trackEvent: trackEvent,
    trackPageView: trackPageView,
    getAnalyticsData: () => analytics,
    exportData: () => {
      const data = JSON.parse(localStorage.getItem('bella_vista_analytics') || '[]')
      console.log('Analytics Data:', data)
      return data
    }
  }
  
  // Initialize all tracking
  function init() {
    initInteractionTracking()
    trackPerformance()
    trackErrors()
    trackRestaurantEvents()
    
    // Track initial page view
    trackPageView(getCurrentPage())
    
    // Track page changes
    window.addEventListener('hashchange', () => {
      trackPageView(getCurrentPage())
    })
    
    console.log('📊 Analytics tracking initialized')
  }
  
  // Start initialization
  setTimeout(init, 100)
}
