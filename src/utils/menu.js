import { menuData } from '../data/menu.js'

// Menu page functionality
export function initMenuPage() {
  let currentCategory = 'all'
  let currentDietary = 'all'
  let searchTerm = ''
  let showPopularOnly = false
  let showSpicyOnly = false
  let cart = []

  // Get all menu items as a flat array
  function getAllMenuItems() {
    const allItems = []
    Object.keys(menuData).forEach(category => {
      menuData[category].forEach(item => {
        allItems.push({ ...item, category })
      })
    })
    return allItems
  }

  // Filter menu items based on current filters
  function getFilteredItems() {
    let items = getAllMenuItems()

    if (currentCategory !== 'all') {
      items = items.filter(item => item.category === currentCategory)
    }

    if (currentDietary !== 'all') {
      items = items.filter(item => item.dietary.includes(currentDietary))
    }

    if (searchTerm) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (showPopularOnly) {
      items = items.filter(item => item.popular)
    }

    if (showSpicyOnly) {
      items = items.filter(item => item.spicy)
    }

    return items
  }

  // Update stats display
  function updateStats() {
    const allItems = getAllMenuItems()
    const filteredItems = getFilteredItems()
    const vegetarianItems = allItems.filter(item => item.dietary.includes('vegetarian'))
    const popularItems = allItems.filter(item => item.popular)

    const totalEl = document.getElementById('total-items')
    const vegEl = document.getElementById('vegetarian-items')
    const popEl = document.getElementById('popular-items')
    const showingEl = document.getElementById('showing-items')

    if (totalEl) totalEl.textContent = allItems.length
    if (vegEl) vegEl.textContent = vegetarianItems.length
    if (popEl) popEl.textContent = popularItems.length
    if (showingEl) showingEl.textContent = filteredItems.length
  }

  // Render menu items
  function renderMenuItems() {
    const container = document.getElementById('menu-items')
    const noResults = document.getElementById('no-results')
    const items = getFilteredItems()

    updateStats()

    if (items.length === 0) {
      if (container) container.innerHTML = ''
      if (noResults) noResults.classList.remove('hidden')
      return
    }

    if (noResults) noResults.classList.add('hidden')

    if (container) {
      container.innerHTML = items.map(item => `
        <div class="card p-6 menu-item" data-item-id="${item.id}">
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center">
              <div class="text-4xl mr-4">${item.image}</div>
              <div>
                <h3 class="text-xl font-heading font-semibold text-gray-800">${item.name}</h3>
                <div class="flex items-center mt-1">
                  ${item.popular ? '<span class="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full mr-2">⭐ Popular</span>' : ''}
                  ${item.spicy ? '<span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full mr-2">🌶️ Spicy</span>' : ''}
                </div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-2xl font-bold text-orange-600">$${item.price}</div>
            </div>
          </div>
          <p class="text-gray-600 mb-4 leading-relaxed">${item.description}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            ${item.dietary.map(diet => {
              const icons = { 'vegetarian': '🥬', 'vegan': '🌱', 'gluten-free': '🌾' }
              return `<span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                ${icons[diet]} ${diet.charAt(0).toUpperCase() + diet.slice(1).replace('-', ' ')}
              </span>`
            }).join('')}
          </div>
          <div class="flex justify-between items-center">
            <button class="btn-secondary text-sm px-4 py-2" onclick="addToFavorites(${item.id})">
              ❤️ Favorite
            </button>
            <button class="btn-primary text-sm px-4 py-2" onclick="addToCart(${item.id})">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      `).join('')
    }
  }

  // Update filter button states
  function updateFilterStates() {
    document.querySelectorAll('.category-filter').forEach(btn => {
      if (btn.dataset.category === currentCategory) {
        btn.classList.add('active', 'bg-orange-500', 'text-white', 'border-orange-500')
        btn.classList.remove('text-orange-600', 'border-orange-200')
      } else {
        btn.classList.remove('active', 'bg-orange-500', 'text-white', 'border-orange-500')
        btn.classList.add('text-orange-600', 'border-orange-200')
      }
    })

    document.querySelectorAll('.dietary-filter').forEach(btn => {
      if (btn.dataset.dietary === currentDietary) {
        btn.classList.add('active', 'bg-gray-500', 'text-white', 'border-gray-500')
        btn.classList.remove('text-gray-600', 'border-gray-300')
      } else {
        btn.classList.remove('active', 'bg-gray-500', 'text-white', 'border-gray-500')
        btn.classList.add('text-gray-600', 'border-gray-300')
      }
    })
  }

  // Initialize event listeners
  function initEventListeners() {
    const searchInput = document.getElementById('menu-search')
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value
        renderMenuItems()
      })
    }

    document.querySelectorAll('.category-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        currentCategory = btn.dataset.category
        updateFilterStates()
        renderMenuItems()
      })
    })

    document.querySelectorAll('.dietary-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        currentDietary = btn.dataset.dietary
        updateFilterStates()
        renderMenuItems()
      })
    })

    const popularCheckbox = document.getElementById('popular-only')
    if (popularCheckbox) {
      popularCheckbox.addEventListener('change', (e) => {
        showPopularOnly = e.target.checked
        renderMenuItems()
      })
    }

    const spicyCheckbox = document.getElementById('spicy-only')
    if (spicyCheckbox) {
      spicyCheckbox.addEventListener('change', (e) => {
        showSpicyOnly = e.target.checked
        renderMenuItems()
      })
    }
  }

  // Cart functionality
  function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count')
    const floatingCart = document.getElementById('floating-cart')

    if (cartCount) cartCount.textContent = cart.length
    if (floatingCart) {
      if (cart.length > 0) {
        floatingCart.classList.remove('hidden')
      } else {
        floatingCart.classList.add('hidden')
      }
    }
  }

  // Make cart functions available globally
  window.addToCart = function(itemId) {
    const allItems = getAllMenuItems()
    const item = allItems.find(item => item.id === itemId)
    if (item) {
      cart.push(item)
      updateCartDisplay()

      const button = event.target
      const originalText = button.textContent
      button.textContent = '✓ Added!'
      button.style.backgroundColor = '#10b981'
      setTimeout(() => {
        button.textContent = originalText
        button.style.backgroundColor = ''
      }, 1000)
    }
  }

  // Initialize
  function init() {
    initEventListeners()
    renderMenuItems()
    updateFilterStates()
    updateCartDisplay()
  }

  setTimeout(init, 100)
}

// Global functions
window.addToFavorites = function(itemId) {
  const button = event.target
  const originalText = button.textContent
  button.textContent = '💖 Favorited!'
  button.style.backgroundColor = '#ec4899'
  setTimeout(() => {
    button.textContent = originalText
    button.style.backgroundColor = ''
  }, 1500)
}

window.downloadMenu = function() {
  alert('PDF menu download coming soon!')
}