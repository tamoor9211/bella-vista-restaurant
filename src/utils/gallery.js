import { galleryData } from '../data/gallery.js'

// Gallery page functionality
export function initGalleryPage() {
  let currentCategory = 'all'
  let currentView = 'grid'
  let showFeaturedOnly = false
  let currentLightboxIndex = 0
  let filteredImages = []

  // Get all gallery items as a flat array
  function getAllGalleryItems() {
    const allItems = []
    Object.keys(galleryData).forEach(category => {
      galleryData[category].forEach(item => {
        allItems.push(item)
      })
    })
    return allItems
  }

  // Filter gallery items based on current filters
  function getFilteredItems() {
    let items = getAllGalleryItems()

    // Category filter
    if (currentCategory !== 'all') {
      items = items.filter(item => item.category === currentCategory)
    }

    // Featured filter
    if (showFeaturedOnly) {
      items = items.filter(item => item.featured)
    }

    return items
  }

  // Render gallery items
  function renderGalleryItems() {
    const container = document.getElementById('gallery-container')
    const noResults = document.getElementById('no-gallery-results')
    filteredImages = getFilteredItems()

    if (filteredImages.length === 0) {
      if (container) container.innerHTML = ''
      if (noResults) noResults.classList.remove('hidden')
      return
    }

    if (noResults) noResults.classList.add('hidden')
    
    if (container) {
      if (currentView === 'grid') {
        container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
        container.innerHTML = filteredImages.map((item, index) => `
          <div class="gallery-item card overflow-hidden cursor-pointer group hover:transform hover:scale-105 transition-all duration-300" 
               data-index="${index}" onclick="openLightbox(${index})">
            <div class="relative">
              <div class="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                ${item.image}
              </div>
              ${item.featured ? '<div class="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">⭐ Featured</div>' : ''}
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="text-2xl">🔍</span>
                </div>
              </div>
            </div>
            <div class="p-4">
              <h3 class="font-heading font-semibold mb-2 text-gray-800">${item.title}</h3>
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">${item.description}</p>
              <div class="flex flex-wrap gap-1">
                ${item.tags.slice(0, 2).map(tag => `
                  <span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">${tag}</span>
                `).join('')}
                ${item.tags.length > 2 ? `<span class="text-xs text-gray-500">+${item.tags.length - 2} more</span>` : ''}
              </div>
            </div>
          </div>
        `).join('')
      } else {
        // List view
        container.className = 'space-y-4'
        container.innerHTML = filteredImages.map((item, index) => `
          <div class="gallery-item card p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-300" 
               data-index="${index}" onclick="openLightbox(${index})">
            <div class="flex items-center space-x-6">
              <div class="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                ${item.image}
              </div>
              <div class="flex-1">
                <div class="flex items-center mb-2">
                  <h3 class="font-heading font-semibold text-gray-800 mr-3">${item.title}</h3>
                  ${item.featured ? '<span class="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">⭐ Featured</span>' : ''}
                </div>
                <p class="text-gray-600 mb-3">${item.description}</p>
                <div class="flex flex-wrap gap-2">
                  ${item.tags.map(tag => `
                    <span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">${tag}</span>
                  `).join('')}
                </div>
              </div>
              <div class="text-purple-600 text-2xl">
                🔍
              </div>
            </div>
          </div>
        `).join('')
      }
    }
  }

  // Update filter button states
  function updateFilterStates() {
    document.querySelectorAll('.gallery-filter').forEach(btn => {
      if (btn.dataset.category === currentCategory) {
        btn.classList.add('active', 'bg-purple-500', 'text-white', 'border-purple-500')
        btn.classList.remove('text-purple-600', 'border-purple-200')
      } else {
        btn.classList.remove('active', 'bg-purple-500', 'text-white', 'border-purple-500')
        btn.classList.add('text-purple-600', 'border-purple-200')
      }
    })

    // Update view toggle states
    document.querySelectorAll('.view-toggle').forEach(btn => {
      btn.classList.remove('active', 'bg-purple-100', 'text-purple-700')
      btn.classList.add('text-gray-600')
    })
    
    const activeViewBtn = document.getElementById(`${currentView}-view`)
    if (activeViewBtn) {
      activeViewBtn.classList.add('active', 'bg-purple-100', 'text-purple-700')
      activeViewBtn.classList.remove('text-gray-600')
    }
  }

  // Lightbox functionality
  function openLightbox(index) {
    currentLightboxIndex = index
    const modal = document.getElementById('lightbox-modal')
    if (modal) {
      modal.classList.remove('hidden')
      updateLightboxContent()
      document.body.style.overflow = 'hidden'
    }
  }

  function closeLightbox() {
    const modal = document.getElementById('lightbox-modal')
    if (modal) {
      modal.classList.add('hidden')
      document.body.style.overflow = 'auto'
    }
  }

  function updateLightboxContent() {
    const item = filteredImages[currentLightboxIndex]
    if (!item) return

    const imageEl = document.getElementById('lightbox-image')
    const titleEl = document.getElementById('lightbox-title')
    const descEl = document.getElementById('lightbox-description')
    const tagsEl = document.getElementById('lightbox-tags')
    const counterEl = document.getElementById('lightbox-counter')

    if (imageEl) {
      imageEl.innerHTML = `<div class="text-8xl">${item.image}</div>`
    }
    if (titleEl) titleEl.textContent = item.title
    if (descEl) descEl.textContent = item.description
    if (tagsEl) {
      tagsEl.innerHTML = item.tags.map(tag => `
        <span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">${tag}</span>
      `).join('')
    }
    if (counterEl) {
      counterEl.textContent = `${currentLightboxIndex + 1} of ${filteredImages.length}`
    }
  }

  function nextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredImages.length
    updateLightboxContent()
  }

  function prevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredImages.length) % filteredImages.length
    updateLightboxContent()
  }

  // Initialize event listeners
  function initEventListeners() {
    // Category filters
    document.querySelectorAll('.gallery-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        currentCategory = btn.dataset.category
        updateFilterStates()
        renderGalleryItems()
      })
    })

    // View toggles
    const gridViewBtn = document.getElementById('grid-view')
    const listViewBtn = document.getElementById('list-view')
    const featuredBtn = document.getElementById('featured-only')

    if (gridViewBtn) {
      gridViewBtn.addEventListener('click', () => {
        currentView = 'grid'
        updateFilterStates()
        renderGalleryItems()
      })
    }

    if (listViewBtn) {
      listViewBtn.addEventListener('click', () => {
        currentView = 'list'
        updateFilterStates()
        renderGalleryItems()
      })
    }

    if (featuredBtn) {
      featuredBtn.addEventListener('click', () => {
        showFeaturedOnly = !showFeaturedOnly
        featuredBtn.classList.toggle('bg-yellow-100')
        featuredBtn.classList.toggle('text-yellow-700')
        renderGalleryItems()
      })
    }

    // Lightbox controls
    const lightboxClose = document.getElementById('lightbox-close')
    const lightboxPrev = document.getElementById('lightbox-prev')
    const lightboxNext = document.getElementById('lightbox-next')
    const lightboxModal = document.getElementById('lightbox-modal')

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox)
    }

    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', prevImage)
    }

    if (lightboxNext) {
      lightboxNext.addEventListener('click', nextImage)
    }

    if (lightboxModal) {
      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
          closeLightbox()
        }
      })
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      const modal = document.getElementById('lightbox-modal')
      if (modal && !modal.classList.contains('hidden')) {
        switch (e.key) {
          case 'Escape':
            closeLightbox()
            break
          case 'ArrowLeft':
            prevImage()
            break
          case 'ArrowRight':
            nextImage()
            break
        }
      }
    })
  }

  // Make functions globally available
  window.openLightbox = openLightbox

  // Initialize the gallery page
  function init() {
    initEventListeners()
    renderGalleryItems()
    updateFilterStates()
  }

  setTimeout(init, 100)
}
