import { restaurantInfo, locationInfo, teamMembers, achievements, statistics } from '../data/about.js'

export function renderAboutPage() {
  return `
    <div class="pt-20 min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div class="container-custom py-16">
          <div class="text-center">
            <h1 class="text-4xl md:text-6xl font-heading font-bold mb-4">
              About ${restaurantInfo.name}
            </h1>
            <p class="text-xl md:text-2xl mb-6 opacity-90">
              ${restaurantInfo.tagline}
            </p>
            <div class="text-lg opacity-80">
              Proudly serving our community since ${restaurantInfo.established}
            </div>
          </div>
        </div>
      </div>

      <!-- Statistics Section -->
      <div class="bg-white py-12">
        <div class="container-custom">
          <div class="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
            <div class="p-4">
              <div class="text-3xl font-bold text-orange-600">${statistics.yearsInBusiness}+</div>
              <div class="text-sm text-gray-600">Years in Business</div>
            </div>
            <div class="p-4">
              <div class="text-3xl font-bold text-orange-600">${statistics.happyCustomers}</div>
              <div class="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div class="p-4">
              <div class="text-3xl font-bold text-orange-600">${statistics.dishesServed}</div>
              <div class="text-sm text-gray-600">Dishes Served</div>
            </div>
            <div class="p-4">
              <div class="text-3xl font-bold text-orange-600">${statistics.teamMembers}</div>
              <div class="text-sm text-gray-600">Team Members</div>
            </div>
            <div class="p-4">
              <div class="text-3xl font-bold text-orange-600">${statistics.awards}</div>
              <div class="text-sm text-gray-600">Awards Won</div>
            </div>
            <div class="p-4">
              <div class="text-3xl font-bold text-orange-600">${statistics.communityEvents}</div>
              <div class="text-sm text-gray-600">Community Events</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Our Story Section -->
      <div class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
              Our Story
            </h2>
            <div class="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 class="text-2xl font-heading font-semibold mb-6">The Beginning</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">${restaurantInfo.story.intro}</p>
              <p class="text-gray-600 mb-6 leading-relaxed">${restaurantInfo.story.heritage}</p>
            </div>
            <div class="relative">
              <div class="bg-orange-100 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
                <span class="text-8xl">🏛️</span>
                <div class="absolute top-4 right-4 text-3xl opacity-30">🍝</div>
                <div class="absolute bottom-4 left-4 text-3xl opacity-30">🍷</div>
                <div class="absolute top-1/2 left-4 text-2xl opacity-20">⭐</div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <div class="bg-orange-100 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
                <span class="text-8xl">👨‍🍳</span>
                <div class="absolute top-4 left-4 text-3xl opacity-30">❤️</div>
                <div class="absolute bottom-4 right-4 text-3xl opacity-30">🏆</div>
                <div class="absolute top-1/2 right-4 text-2xl opacity-20">🌟</div>
              </div>
            </div>
            <div class="order-1 lg:order-2">
              <h3 class="text-2xl font-heading font-semibold mb-6">Our Philosophy</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">${restaurantInfo.story.philosophy}</p>
              <p class="text-gray-600 leading-relaxed">${restaurantInfo.story.future}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Mission & Values Section -->
      <div class="section-padding bg-white">
        <div class="container-custom">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
              Our Mission & Values
            </h2>
            <div class="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              ${restaurantInfo.mission}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${restaurantInfo.values.map(value => `
              <div class="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div class="text-5xl mb-4 group-hover:scale-110 transition-transform">${value.icon}</div>
                <h3 class="text-xl font-heading font-semibold mb-4 text-gray-800">${value.title}</h3>
                <p class="text-gray-600 leading-relaxed">${value.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <div class="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate people behind every exceptional dining experience at Bella Vista.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${teamMembers.map(member => `
              <div class="card p-6 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div class="text-6xl mb-4 group-hover:scale-110 transition-transform">${member.image}</div>
                <h3 class="text-xl font-heading font-semibold mb-2 text-gray-800">${member.name}</h3>
                <div class="text-orange-600 font-medium mb-3">${member.position}</div>
                <div class="text-sm text-gray-500 mb-4">${member.experience} experience</div>
                <p class="text-gray-600 text-sm leading-relaxed mb-4">${member.bio}</p>
                <div class="flex flex-wrap gap-2 justify-center">
                  ${member.specialties.map(specialty => `
                    <span class="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">${specialty}</span>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Location & Hours Section -->
      <div class="section-padding bg-white">
        <div class="container-custom">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
              Visit Us
            </h2>
            <div class="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Location Info -->
            <div class="card p-8">
              <h3 class="text-2xl font-heading font-semibold mb-6 text-gray-800 flex items-center">
                <span class="text-3xl mr-3">📍</span>
                Location & Contact
              </h3>

              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <span class="text-orange-600 mr-3 mt-1">🏠</span>
                  <div>
                    <div class="font-medium">Address</div>
                    <div class="text-gray-600">
                      ${locationInfo.address.street}<br>
                      ${locationInfo.address.city}, ${locationInfo.address.state} ${locationInfo.address.zipCode}
                    </div>
                  </div>
                </div>

                <div class="flex items-center">
                  <span class="text-orange-600 mr-3">📞</span>
                  <div>
                    <div class="font-medium">Phone</div>
                    <div class="text-gray-600">${locationInfo.contact.phone}</div>
                  </div>
                </div>

                <div class="flex items-center">
                  <span class="text-orange-600 mr-3">📧</span>
                  <div>
                    <div class="font-medium">Email</div>
                    <div class="text-gray-600">${locationInfo.contact.email}</div>
                  </div>
                </div>
              </div>

              <div class="bg-orange-50 rounded-lg p-4">
                <h4 class="font-semibold mb-2 text-orange-800">Special Hours</h4>
                ${locationInfo.specialHours.map(special => `
                  <div class="text-sm text-orange-700">${special.date}: ${special.status}</div>
                `).join('')}
              </div>
            </div>

            <!-- Hours -->
            <div class="card p-8">
              <h3 class="text-2xl font-heading font-semibold mb-6 text-gray-800 flex items-center">
                <span class="text-3xl mr-3">🕒</span>
                Operating Hours
              </h3>

              <div class="space-y-3">
                ${Object.entries(locationInfo.hours).map(([day, hours]) => `
                  <div class="flex justify-between items-center py-2 border-b border-gray-100">
                    <div class="font-medium capitalize">${day}</div>
                    <div class="text-gray-600">
                      ${hours.closed ? 'Closed' : `${hours.open} - ${hours.close}`}
                    </div>
                  </div>
                `).join('')}
              </div>

              <div class="mt-6 p-4 bg-green-50 rounded-lg">
                <div class="text-green-800 font-medium mb-1">🎉 Weekend Brunch</div>
                <div class="text-green-700 text-sm">Saturday & Sunday: 10:00 AM - 2:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Awards & Recognition Section -->
      <div class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
              Awards & Recognition
            </h2>
            <div class="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              We're honored to be recognized by our community and industry peers for our commitment to excellence.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${achievements.map(achievement => `
              <div class="card p-6 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                <div class="text-2xl font-bold text-orange-600 mb-2">${achievement.year}</div>
                <h4 class="font-semibold mb-2 text-gray-800">${achievement.title}</h4>
                <div class="text-sm text-gray-600 mb-2">${achievement.organization}</div>
                <div class="text-xs text-gray-500">${achievement.description}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Call to Action Section -->
      <div class="section-padding bg-orange-600 text-white">
        <div class="container-custom text-center">
          <h2 class="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Experience Bella Vista?
          </h2>
          <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our family for an unforgettable dining experience. We can't wait to welcome you to our table.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" class="btn-secondary bg-white text-orange-600 hover:bg-orange-50 transform hover:scale-105 transition-all">
              Make a Reservation
            </a>
            <a href="#menu" class="btn-secondary border-white text-white hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all">
              View Our Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  `
}
