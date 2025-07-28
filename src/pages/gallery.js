import { galleryData, galleryCategories, galleryStats } from '../data/gallery.js'

export function renderGalleryPage() {
  return `
    <div class="pt-20 min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div class="container-custom py-16">
          <div class="text-center">
            <h1 class="text-4xl md:text-6xl font-heading font-bold mb-4">
              Gallery
            </h1>
            <p class="text-xl md:text-2xl mb-6 opacity-90">
              A Visual Journey Through Bella Vista
            </p>
            <div class="text-lg opacity-80">
              Discover our culinary artistry, elegant spaces, and memorable moments
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery Stats -->
      <div class="bg-white py-8">
        <div class="container-custom">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div class="p-4">
              <div class="text-3xl font-bold text-purple-600">${galleryStats.totalPhotos}</div>
              <div class="text-sm text-gray-600">Total Photos</div>
            </div>
            <div class="p-4">
              <div class="text-3xl font-bold text-purple-600">${galleryStats.featuredPhotos}</div>
              <div class="text-sm text-gray-600">Featured</div>
            </div>
            <div class="p-4">
              <div class="text-3xl font-bold text-purple-600">${galleryStats.categories}</div>
              <div class="text-sm text-gray-600">Categories</div>
            </div>
            <div class="p-4">
              <div class="text-3xl font-bold text-purple-600">2024</div>
              <div class="text-sm text-gray-600">Latest Update</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery Filters -->
      <div class="container-custom py-8">
        <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div class="text-center mb-6">
            <h2 class="text-2xl font-heading font-semibold mb-4">Browse Our Collection</h2>
            <p class="text-gray-600">Filter by category to explore different aspects of our restaurant</p>
          </div>

          <!-- Category Filters -->
          <div class="flex flex-wrap justify-center gap-3" id="gallery-filters">
            ${galleryCategories.map(category => `
              <button
                class="gallery-filter px-6 py-3 rounded-full border-2 border-purple-200 text-purple-600 hover:bg-purple-50 transition-all duration-300 ${category.id === 'all' ? 'active bg-purple-500 text-white border-purple-500' : ''}"
                data-category="${category.id}"
              >
                <span class="mr-2 text-lg">${category.icon}</span>
                <span class="font-medium">${category.name}</span>
                <span class="ml-2 text-sm opacity-75">(${category.count})</span>
              </button>
            `).join('')}
          </div>

          <!-- View Options -->
          <div class="flex justify-center mt-6 gap-4">
            <button id="grid-view" class="view-toggle active px-4 py-2 rounded-lg bg-purple-100 text-purple-700">
              <span class="mr-2">⊞</span>Grid View
            </button>
            <button id="list-view" class="view-toggle px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
              <span class="mr-2">☰</span>List View
            </button>
            <button id="featured-only" class="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
              <span class="mr-2">⭐</span>Featured Only
            </button>
          </div>
        </div>

        <!-- Gallery Grid -->
        <div id="gallery-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <!-- Gallery items will be populated by JavaScript -->
        </div>

        <!-- No Results Message -->
        <div id="no-gallery-results" class="text-center py-12 hidden">
          <div class="text-6xl mb-4">🔍</div>
          <h3 class="text-xl font-semibold mb-2">No photos found</h3>
          <p class="text-gray-600">Try selecting a different category</p>
        </div>
      </div>

      <!-- Lightbox Modal -->
      <div id="lightbox-modal" class="fixed inset-0 bg-black bg-opacity-90 z-50 hidden flex items-center justify-center p-4">
        <div class="relative max-w-4xl w-full">
          <!-- Close Button -->
          <button id="lightbox-close" class="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10">
            ✕
          </button>

          <!-- Navigation Arrows -->
          <button id="lightbox-prev" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10">
            ‹
          </button>
          <button id="lightbox-next" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10">
            ›
          </button>

          <!-- Image Container -->
          <div class="bg-white rounded-lg overflow-hidden">
            <div id="lightbox-image" class="h-96 flex items-center justify-center text-8xl bg-gray-100">
              <!-- Image will be displayed here -->
            </div>

            <!-- Image Info -->
            <div class="p-6">
              <h3 id="lightbox-title" class="text-2xl font-heading font-semibold mb-2"></h3>
              <p id="lightbox-description" class="text-gray-600 mb-4"></p>
              <div id="lightbox-tags" class="flex flex-wrap gap-2">
                <!-- Tags will be populated here -->
              </div>
            </div>
          </div>

          <!-- Image Counter -->
          <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            <span id="lightbox-counter">1 of 20</span>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="bg-white mt-12">
        <div class="container-custom py-12">
          <div class="text-center">
            <h2 class="text-3xl font-heading font-bold text-gray-800 mb-4">
              Experience It Yourself
            </h2>
            <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
              These photos only tell part of our story. Come dine with us and create your own memorable moments at Bella Vista.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" class="btn-primary">
                Make a Reservation
              </a>
              <a href="#menu" class="btn-secondary">
                View Our Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}
