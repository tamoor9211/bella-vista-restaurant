import './style.css'

// Import page components
import { renderHomePage } from './pages/home.js'
import { renderMenuPage } from './pages/menu.js'
import { renderAboutPage } from './pages/about.js'
import { renderGalleryPage } from './pages/gallery.js'
import { renderContactPage } from './pages/contact.js'

// Import utilities
import { initHomepageFeatures } from './utils/homepage.js'
import { initMenuPage } from './utils/menu.js'
import { initAboutPage } from './utils/about.js'
import { initGalleryPage } from './utils/gallery.js'
import { initContactPage } from './utils/contact.js'
import { initMobileTesting, initMobileTestPage } from './utils/mobile-testing.js'
import { renderMobileTestPage } from './pages/mobile-test.js'
import { initPerformanceOptimizations } from './utils/performance.js'
import { initSEOOptimizations } from './utils/seo.js'
import { initAnalytics } from './utils/analytics.js'

// App state
let currentPage = 'home'

// Navigation functionality
function initNavigation() {
  // Add navigation styles
  const style = document.createElement('style')
  style.textContent = `
    .nav-link {
      color: #4b5563;
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
      font-weight: 500;
      transition: color 0.2s ease;
      text-decoration: none;
    }
    .nav-link:hover {
      color: #f97316;
    }
    .nav-link.active {
      color: #f97316;
      font-weight: 600;
    }
    .mobile-nav-link {
      color: #4b5563;
      display: block;
      padding: 0.5rem 0.75rem;
      font-size: 1rem;
      font-weight: 500;
      transition: color 0.2s ease;
      text-decoration: none;
    }
    .mobile-nav-link:hover {
      color: #f97316;
    }
    .mobile-nav-link.active {
      color: #f97316;
      font-weight: 600;
    }
  `
  document.head.appendChild(style)

  // Handle navigation clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]')
    if (link) {
      e.preventDefault()
      const targetPage = link.getAttribute('href').substring(1)
      navigateToPage(targetPage)
    }
  })

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn')
  const mobileMenu = document.getElementById('mobile-menu')

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden')
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const mobileMenuElement = document.getElementById('mobile-menu')
    if (!e.target.closest('#mobile-menu') && !e.target.closest('#mobile-menu-btn')) {
      mobileMenuElement?.classList.add('hidden')
    }
  })
}

// Navigation function
function navigateToPage(page) {
  try {
    currentPage = page
    updateActiveNavLinks()
    renderCurrentPage()

    // Close mobile menu
    const mobileMenu = document.getElementById('mobile-menu')
    if (mobileMenu) {
      mobileMenu.classList.add('hidden')
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })

    console.log('Navigated to:', page)
  } catch (error) {
    console.error('Error navigating to page:', page, error)
  }
}

// Update active navigation links
function updateActiveNavLinks() {
  // Remove active class from all nav links
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    link.classList.remove('active')
  })

  // Add active class to current page links
  document.querySelectorAll(`a[href="#${currentPage}"]`).forEach(link => {
    link.classList.add('active')
  })
}

// Render current page
function renderCurrentPage() {
  const app = document.querySelector('#app')

  if (!app) {
    console.error('App element not found!')
    return
  }

  try {
    let content = ''
    let initFunction = null

    switch (currentPage) {
      case 'home':
        content = renderHomePage()
        initFunction = initHomepageFeatures
        break
      case 'menu':
        content = renderMenuPage()
        initFunction = initMenuPage
        break
      case 'about':
        content = renderAboutPage()
        initFunction = initAboutPage
        break
      case 'gallery':
        content = renderGalleryPage()
        initFunction = initGalleryPage
        break
      case 'contact':
        content = renderContactPage()
        initFunction = initContactPage
        break
      case 'mobile-test':
        content = renderMobileTestPage()
        initFunction = initMobileTestPage
        break
      default:
        content = renderHomePage()
        currentPage = 'home'
        initFunction = initHomepageFeatures
    }

    // Set the content
    app.innerHTML = content

    // Initialize page-specific features after a short delay
    if (initFunction) {
      setTimeout(() => {
        try {
          initFunction()
        } catch (error) {
          console.warn('Error initializing page features:', error)
        }
      }, 100)
    }

    console.log('Page rendered:', currentPage)
  } catch (error) {
    console.error('Error rendering page:', error)
    app.innerHTML = `
      <div class="pt-20 min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-2xl font-bold text-red-600 mb-4">Error loading page</h1>
          <p class="text-gray-600">Please try refreshing the page.</p>
        </div>
      </div>
    `
  }
}

// Initialize app
function initApp() {
  console.log('Initializing app...')

  try {
    // First ensure we have the app element
    const app = document.querySelector('#app')
    if (!app) {
      console.error('App element not found!')
      return
    }

    // Initialize navigation first
    initNavigation()

    // Render the current page (should be home by default)
    renderCurrentPage()
    updateActiveNavLinks()

    // Initialize other features
    initMobileTesting()
    initPerformanceOptimizations()
    initSEOOptimizations()
    initAnalytics()

    // Make navigation function globally available for debugging
    window.navigateToPage = navigateToPage
    window.getCurrentPage = () => currentPage

    console.log('App initialized successfully!')
  } catch (error) {
    console.error('Error initializing app:', error)
    // Fallback: render a simple error message
    const app = document.querySelector('#app')
    if (app) {
      app.innerHTML = `
        <div class="pt-20 min-h-screen flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-2xl font-bold text-red-600 mb-4">Error loading application</h1>
            <p class="text-gray-600">Please refresh the page to try again.</p>
          </div>
        </div>
      `
    }
  }
}

// Start the app when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing app...')
    initApp()
  })
} else {
  console.log('DOM already ready, initializing app...')
  initApp()
}
