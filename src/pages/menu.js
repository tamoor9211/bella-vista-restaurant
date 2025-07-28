import { menuData, menuCategories, dietaryFilters } from '../data/menu.js'

export function renderMenuPage() {
  return `
    <div class="pt-20 min-h-screen bg-gray-50">
      <!-- Header Section -->
      <div class="bg-white shadow-sm">
        <div class="container-custom py-12">
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
              Our Menu
            </h1>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Discover our carefully crafted dishes made with the finest ingredients and traditional recipes.
            </p>
            <div class="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
        </div>
      </div>

      <!-- Search and Filters -->
      <div class="container-custom py-8">
        <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
          <!-- Search Bar -->
          <div class="mb-6">
            <div class="relative max-w-md mx-auto">
              <input
                type="text"
                id="menu-search"
                placeholder="Search menu items..."
                class="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              >
              <div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          </div>

          <!-- Category Filters -->
          <div class="mb-6">
            <h3 class="text-lg font-semibold mb-4 text-center">Categories</h3>
            <div class="flex flex-wrap justify-center gap-2" id="category-filters">
              ${menuCategories.map(category => `
                <button
                  class="category-filter px-4 py-2 rounded-full border-2 border-orange-200 text-orange-600 hover:bg-orange-50 transition-colors ${category.id === 'all' ? 'active bg-orange-500 text-white border-orange-500' : ''}"
                  data-category="${category.id}"
                >
                  <span class="mr-2">${category.icon}</span>
                  ${category.name}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Dietary Filters -->
          <div class="mb-4">
            <h3 class="text-lg font-semibold mb-4 text-center">Dietary Options</h3>
            <div class="flex flex-wrap justify-center gap-2" id="dietary-filters">
              ${dietaryFilters.map(filter => `
                <button
                  class="dietary-filter px-3 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors text-sm ${filter.id === 'all' ? 'active bg-gray-500 text-white border-gray-500' : ''}"
                  data-dietary="${filter.id}"
                >
                  <span class="mr-1">${filter.icon}</span>
                  ${filter.name}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Additional Filters -->
          <div class="flex flex-wrap justify-center gap-4 text-sm">
            <label class="flex items-center">
              <input type="checkbox" id="popular-only" class="mr-2 rounded">
              <span>⭐ Popular Items Only</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" id="spicy-only" class="mr-2 rounded">
              <span>🌶️ Spicy Items Only</span>
            </label>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div class="text-2xl font-bold text-orange-600" id="total-items">21</div>
              <div class="text-sm text-gray-600">Total Items</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-green-600" id="vegetarian-items">8</div>
              <div class="text-sm text-gray-600">Vegetarian</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-blue-600" id="popular-items">10</div>
              <div class="text-sm text-gray-600">Popular</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-purple-600" id="showing-items">21</div>
              <div class="text-sm text-gray-600">Showing</div>
            </div>
          </div>
        </div>

        <!-- Menu Items Grid -->
        <div id="menu-items" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Menu items will be populated by JavaScript -->
        </div>

        <!-- No Results Message -->
        <div id="no-results" class="text-center py-12 hidden">
          <div class="text-6xl mb-4">🔍</div>
          <h3 class="text-xl font-semibold mb-2">No items found</h3>
          <p class="text-gray-600">Try adjusting your search or filters</p>
        </div>
      </div>

      <!-- Menu Footer -->
      <div class="bg-white mt-12">
        <div class="container-custom py-12">
          <div class="text-center">
            <h2 class="text-3xl font-heading font-bold text-gray-800 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p class="text-gray-600 mb-6">
              Our chefs are happy to accommodate special requests and dietary restrictions.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" class="btn-primary">
                Contact Us
              </a>
              <button onclick="downloadMenu()" class="btn-secondary">
                📄 Download PDF Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating Quick Order Cart -->
      <div id="floating-cart" class="fixed bottom-6 right-6 bg-orange-500 text-white rounded-full p-4 shadow-lg cursor-pointer hover:bg-orange-600 transition-colors hidden" onclick="toggleCart()">
        <div class="flex items-center">
          <span class="text-xl mr-2">🛒</span>
          <span class="font-semibold" id="cart-count">0</span>
        </div>
      </div>

      <!-- Quick Order Modal -->
      <div id="quick-order-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4">
        <div class="bg-white rounded-xl max-w-md w-full p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-heading font-bold">Quick Order</h3>
            <button onclick="toggleCart()" class="text-gray-500 hover:text-gray-700">✕</button>
          </div>
          <div id="cart-items" class="mb-6">
            <!-- Cart items will be populated here -->
          </div>
          <div class="border-t pt-4">
            <div class="flex justify-between items-center mb-4">
              <span class="font-semibold">Total:</span>
              <span class="text-xl font-bold text-orange-600" id="cart-total">$0.00</span>
            </div>
            <div class="flex gap-2">
              <button onclick="clearCart()" class="btn-secondary flex-1">Clear Cart</button>
              <button onclick="proceedToOrder()" class="btn-primary flex-1">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}
