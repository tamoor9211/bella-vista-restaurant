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
      @apply text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors duration-200;
    }
    .nav-link.active {
      @apply text-orange-600 font-semibold;
    }
    .mobile-nav-link {
      @apply text-gray-600 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors duration-200;
    }
    .mobile-nav-link.active {
      @apply text-orange-600 font-semibold;
    }
  `
  document.head.appendChild(style)

  // Handle navigation clicks
  document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
      e.preventDefault()
      const targetPage = e.target.getAttribute('href').substring(1)
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
    if (!e.target.closest('#mobile-menu') && !e.target.closest('#mobile-menu-btn')) {
      mobileMenu?.classList.add('hidden')
    }
  })
}

// Navigation function
function navigateToPage(page) {
  currentPage = page
  updateActiveNavLinks()
  renderCurrentPage()

  // Close mobile menu
  document.getElementById('mobile-menu')?.classList.add('hidden')

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' })
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

  switch (currentPage) {
    case 'home':
      app.innerHTML = renderHomePage()
      // Initialize homepage features after rendering
      setTimeout(() => {
        initHomepageFeatures()
      }, 100)
      break
    case 'menu':
      app.innerHTML = renderMenuPage()
      // Initialize menu page features after rendering
      setTimeout(() => {
        initMenuPage()
      }, 100)
      break
    case 'about':
      app.innerHTML = renderAboutPage()
      // Initialize about page features after rendering
      setTimeout(() => {
        initAboutPage()
      }, 100)
      break
    case 'gallery':
      app.innerHTML = renderGalleryPage()
      // Initialize gallery page features after rendering
      setTimeout(() => {
        initGalleryPage()
      }, 100)
      break
    case 'contact':
      app.innerHTML = renderContactPage()
      // Initialize contact page features after rendering
      setTimeout(() => {
        initContactPage()
      }, 100)
      break
    case 'mobile-test':
      app.innerHTML = renderMobileTestPage()
      // Initialize mobile test page features after rendering
      setTimeout(() => {
        initMobileTestPage()
      }, 100)
      break
    default:
      app.innerHTML = renderHomePage()
      setTimeout(() => {
        initHomepageFeatures()
      }, 100)
  }
}

// Initialize app
function initApp() {
  initNavigation()
  renderCurrentPage()
  updateActiveNavLinks()

  // Initialize mobile testing and optimizations
  initMobileTesting()

  // Initialize performance optimizations
  initPerformanceOptimizations()

  // Initialize SEO optimizations
  initSEOOptimizations()

  // Initialize analytics tracking
  initAnalytics()
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp)
