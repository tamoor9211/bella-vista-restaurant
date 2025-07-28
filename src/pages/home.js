export function renderHomePage() {
  return `
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center bg-gradient-to-r from-orange-600 to-orange-800 text-white overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 text-6xl">🍽️</div>
        <div class="absolute top-40 right-20 text-4xl">🍷</div>
        <div class="absolute bottom-40 left-20 text-5xl">🍝</div>
        <div class="absolute bottom-20 right-10 text-3xl">🥗</div>
        <div class="absolute top-60 left-1/3 text-4xl">🍰</div>
        <div class="absolute bottom-60 right-1/3 text-5xl">🥩</div>
      </div>

      <div class="absolute inset-0 bg-black/30"></div>
      <div class="relative z-10 text-center container-custom">
        <div class="animate-fade-in">
          <h1 class="text-5xl md:text-7xl font-heading font-bold mb-6">
            Welcome to <span class="text-yellow-300">Bella Vista</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience authentic flavors in a warm, welcoming atmosphere where every dish tells a story of tradition and passion.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#menu" class="btn-primary text-lg px-8 py-4 transform hover:scale-105 transition-transform">
              View Our Menu
            </a>
            <a href="#contact" class="btn-secondary text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-transform">
              Make Reservation
            </a>
          </div>

          <!-- Quick Info -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div class="text-center">
              <div class="text-3xl mb-2">📍</div>
              <h3 class="font-semibold mb-1">Location</h3>
              <p class="text-sm opacity-90">123 Main Street, Downtown</p>
            </div>
            <div class="text-center">
              <div class="text-3xl mb-2">🕒</div>
              <h3 class="font-semibold mb-1">Hours</h3>
              <p class="text-sm opacity-90">Mon-Sun: 11AM - 10PM</p>
            </div>
            <div class="text-center">
              <div class="text-3xl mb-2">📞</div>
              <h3 class="font-semibold mb-1">Call Us</h3>
              <p class="text-sm opacity-90">(555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- Featured Dishes Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
            Chef's Featured Dishes
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our chef's signature creations, crafted with the finest ingredients and time-honored techniques.
          </p>
          <div class="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="card p-6 text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div class="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
              <span class="text-3xl">🍝</span>
            </div>
            <h3 class="text-xl font-heading font-semibold mb-2">Signature Pasta</h3>
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">Handmade pasta with our secret family sauce, passed down through generations. Served with fresh basil and parmesan.</p>
            <div class="flex justify-between items-center">
              <span class="text-orange-600 font-bold text-lg">$18.99</span>
              <span class="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</span>
            </div>
            <div class="mt-3 text-xs text-gray-500">
              <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2">Vegetarian</span>
              <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Popular</span>
            </div>
          </div>

          <div class="card p-6 text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div class="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
              <span class="text-3xl">🥩</span>
            </div>
            <h3 class="text-xl font-heading font-semibold mb-2">Grilled Ribeye</h3>
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">Premium cut ribeye steak grilled to perfection with seasonal vegetables, garlic mashed potatoes, and red wine reduction.</p>
            <div class="flex justify-between items-center">
              <span class="text-orange-600 font-bold text-lg">$32.99</span>
              <span class="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</span>
            </div>
            <div class="mt-3 text-xs text-gray-500">
              <span class="bg-red-100 text-red-800 px-2 py-1 rounded-full mr-2">Premium</span>
              <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Chef's Choice</span>
            </div>
          </div>

          <div class="card p-6 text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div class="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
              <span class="text-3xl">🍰</span>
            </div>
            <h3 class="text-xl font-heading font-semibold mb-2">Tiramisu</h3>
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone. Made fresh daily in our kitchen.</p>
            <div class="flex justify-between items-center">
              <span class="text-orange-600 font-bold text-lg">$8.99</span>
              <span class="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</span>
            </div>
            <div class="mt-3 text-xs text-gray-500">
              <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full mr-2">Dessert</span>
              <span class="bg-orange-100 text-orange-800 px-2 py-1 rounded-full">House Made</span>
            </div>
          </div>
        </div>

        <!-- Additional Featured Items -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <div class="text-2xl mb-2">🍤</div>
            <h4 class="font-semibold text-sm">Garlic Shrimp</h4>
            <p class="text-orange-600 font-bold">$24.99</p>
          </div>
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <div class="text-2xl mb-2">🥗</div>
            <h4 class="font-semibold text-sm">Caesar Salad</h4>
            <p class="text-orange-600 font-bold">$12.99</p>
          </div>
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <div class="text-2xl mb-2">🍕</div>
            <h4 class="font-semibold text-sm">Margherita Pizza</h4>
            <p class="text-orange-600 font-bold">$16.99</p>
          </div>
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <div class="text-2xl mb-2">🍷</div>
            <h4 class="font-semibold text-sm">Wine Selection</h4>
            <p class="text-orange-600 font-bold">$8-45</p>
          </div>
        </div>

        <div class="text-center">
          <a href="#menu" class="btn-primary">
            View Full Menu
          </a>
        </div>
      </div>
    </section>

    <!-- About Preview Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
              Our Story
            </h2>
            <div class="w-16 h-1 bg-orange-500 mb-6"></div>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 25 years, Bella Vista has been serving the community with authentic,
              home-style cooking that brings families together. Our recipes have been passed
              down through generations, ensuring every bite is filled with tradition and love.
            </p>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              We believe that great food is more than just a meal – it's an experience that
              creates lasting memories with the people you care about most.
            </p>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 mb-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-orange-600">25+</div>
                <div class="text-sm text-gray-600">Years Serving</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-orange-600">50k+</div>
                <div class="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-orange-600">100+</div>
                <div class="text-sm text-gray-600">Menu Items</div>
              </div>
            </div>

            <a href="#about" class="btn-primary">
              Learn More About Us
            </a>
          </div>
          <div class="relative">
            <div class="bg-orange-100 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
              <span class="text-6xl">🏪</span>
              <!-- Decorative elements -->
              <div class="absolute top-4 right-4 text-2xl opacity-30">🍽️</div>
              <div class="absolute bottom-4 left-4 text-2xl opacity-30">👨‍🍳</div>
              <div class="absolute top-1/2 left-4 text-xl opacity-20">⭐</div>
              <div class="absolute top-1/4 right-8 text-xl opacity-20">🍷</div>
            </div>
            <!-- Awards/Badges -->
            <div class="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 text-center">
              <div class="text-yellow-500 text-lg">🏆</div>
              <div class="text-xs font-semibold">Best Local</div>
              <div class="text-xs text-gray-600">Restaurant 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
            What Our Guests Say
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Don't just take our word for it - hear from our valued customers about their dining experiences.
          </p>
          <div class="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <span class="text-lg">👩</span>
              </div>
              <div>
                <h4 class="font-semibold">Sarah Johnson</h4>
                <div class="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <p class="text-gray-600 italic mb-4">
              "Absolutely amazing experience! The pasta was incredible and the service was top-notch.
              This is definitely our new favorite restaurant."
            </p>
            <div class="text-sm text-gray-500">Visited last week</div>
          </div>

          <div class="card p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <span class="text-lg">👨</span>
              </div>
              <div>
                <h4 class="font-semibold">Mike Chen</h4>
                <div class="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <p class="text-gray-600 italic mb-4">
              "The ribeye steak was cooked to perfection! Great atmosphere for a date night.
              We'll definitely be coming back soon."
            </p>
            <div class="text-sm text-gray-500">Regular customer</div>
          </div>

          <div class="card p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <span class="text-lg">👵</span>
              </div>
              <div>
                <h4 class="font-semibold">Maria Rodriguez</h4>
                <div class="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <p class="text-gray-600 italic mb-4">
              "Feels like home! The family recipes and warm atmosphere remind me of my grandmother's cooking.
              Highly recommend the tiramisu!"
            </p>
            <div class="text-sm text-gray-500">Family celebration</div>
          </div>
        </div>

        <div class="text-center mt-12">
          <div class="inline-flex items-center space-x-4 bg-white rounded-lg p-4 shadow-sm">
            <div class="text-2xl font-bold text-orange-600">4.9</div>
            <div>
              <div class="text-yellow-500">⭐⭐⭐⭐⭐</div>
              <div class="text-sm text-gray-600">Based on 500+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Offers Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
            Special Offers
          </h2>
          <div class="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div class="absolute top-4 right-4 text-4xl opacity-20">🍽️</div>
            <h3 class="text-2xl font-heading font-bold mb-4">Happy Hour Special</h3>
            <p class="mb-4">Join us Monday-Friday 3-6 PM for 50% off appetizers and $5 cocktails!</p>
            <div class="text-sm opacity-90">Valid until end of month</div>
          </div>

          <div class="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div class="absolute top-4 right-4 text-4xl opacity-20">🎂</div>
            <h3 class="text-2xl font-heading font-bold mb-4">Birthday Celebration</h3>
            <p class="mb-4">Celebrate your special day with us! Free dessert for the birthday person.</p>
            <div class="text-sm opacity-90">Advance reservation required</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="section-padding bg-orange-600 text-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 text-4xl animate-pulse">✨</div>
        <div class="absolute top-20 right-20 text-3xl animate-pulse" style="animation-delay: 1s;">🍴</div>
        <div class="absolute bottom-20 left-20 text-4xl animate-pulse" style="animation-delay: 2s;">🥂</div>
        <div class="absolute bottom-10 right-10 text-3xl animate-pulse" style="animation-delay: 0.5s;">🌟</div>
      </div>

      <div class="container-custom text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-heading font-bold mb-6">
          Ready to Dine With Us?
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Join us for an unforgettable dining experience. Reserve your table today
          or explore our full menu to see what awaits you.
        </p>

        <!-- Contact Info -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="text-2xl mb-2">📞</div>
            <h4 class="font-semibold mb-1">Call Us</h4>
            <p class="text-orange-100">(555) 123-4567</p>
          </div>
          <div class="text-center">
            <div class="text-2xl mb-2">📧</div>
            <h4 class="font-semibold mb-1">Email</h4>
            <p class="text-orange-100">info@bellavista.com</p>
          </div>
          <div class="text-center">
            <div class="text-2xl mb-2">📍</div>
            <h4 class="font-semibold mb-1">Visit Us</h4>
            <p class="text-orange-100">123 Main Street, Downtown</p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" class="btn-secondary bg-white text-orange-600 hover:bg-orange-50 transform hover:scale-105 transition-all">
            Make a Reservation
          </a>
          <a href="#menu" class="btn-secondary border-white text-white hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all">
            View Full Menu
          </a>
        </div>

        <!-- Social Media Links -->
        <div class="mt-8">
          <p class="text-orange-100 mb-4">Follow us on social media</p>
          <div class="flex justify-center space-x-4">
            <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <span class="text-lg">📘</span>
            </a>
            <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <span class="text-lg">📷</span>
            </a>
            <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <span class="text-lg">🐦</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `
}
