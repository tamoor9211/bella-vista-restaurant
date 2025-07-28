import { contactInfo, formFields } from '../data/contact.js'

export function renderContactPage() {
  return `
    <div class="pt-20 min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div class="container-custom py-16">
          <div class="text-center">
            <h1 class="text-4xl md:text-6xl font-heading font-bold mb-4">
              Contact Us
            </h1>
            <p class="text-xl md:text-2xl mb-6 opacity-90">
              ${contactInfo.restaurant.tagline}
            </p>
            <div class="text-lg opacity-80 max-w-2xl mx-auto">
              ${contactInfo.restaurant.description}
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Contact Info -->
      <div class="bg-white py-8">
        <div class="container-custom">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div class="p-4">
              <div class="text-3xl mb-2">📞</div>
              <div class="font-semibold">Call Us</div>
              <div class="text-green-600">${contactInfo.contact.phone.main}</div>
            </div>
            <div class="p-4">
              <div class="text-3xl mb-2">📧</div>
              <div class="font-semibold">Email Us</div>
              <div class="text-green-600">${contactInfo.contact.email.general}</div>
            </div>
            <div class="p-4">
              <div class="text-3xl mb-2">📍</div>
              <div class="font-semibold">Visit Us</div>
              <div class="text-green-600">${contactInfo.location.address.street}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container-custom py-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Forms -->
          <div class="space-y-8">
            <!-- Form Toggle -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <div class="flex justify-center mb-6">
                <div class="bg-gray-100 rounded-lg p-1 flex">
                  <button id="contact-tab" class="form-tab active px-6 py-2 rounded-md font-medium transition-all">
                    General Contact
                  </button>
                  <button id="reservation-tab" class="form-tab px-6 py-2 rounded-md font-medium transition-all">
                    Make Reservation
                  </button>
                </div>
              </div>

              <!-- Contact Form -->
              <div id="contact-form-container" class="form-container">
                <h3 class="text-2xl font-heading font-semibold mb-6 text-center">Send us a Message</h3>
                <form id="contact-form" class="space-y-4">
                  ${formFields.contact.map(field => renderFormField(field)).join('')}

                  <button type="submit" class="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>

              <!-- Reservation Form -->
              <div id="reservation-form-container" class="form-container hidden">
                <h3 class="text-2xl font-heading font-semibold mb-6 text-center">Make a Reservation</h3>
                <form id="reservation-form" class="space-y-4">
                  ${formFields.reservation.map(field => renderFormField(field)).join('')}

                  <button type="submit" class="btn-primary w-full">
                    Request Reservation
                  </button>
                </form>
              </div>
            </div>

            <!-- Services -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h3 class="text-2xl font-heading font-semibold mb-6">Our Services</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${contactInfo.services.map(service => `
                  <div class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span class="text-2xl mr-3">${service.icon}</span>
                    <div>
                      <div class="font-medium">${service.name}</div>
                      <div class="text-sm text-gray-600">${service.description}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Contact Information & Map -->
          <div class="space-y-8">
            <!-- Location & Hours -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h3 class="text-2xl font-heading font-semibold mb-6 flex items-center">
                <span class="text-3xl mr-3">📍</span>
                Location & Hours
              </h3>

              <!-- Address -->
              <div class="mb-6">
                <h4 class="font-semibold mb-2">Address</h4>
                <p class="text-gray-600 mb-2">${contactInfo.location.address.full}</p>
                <div class="text-sm text-gray-500">
                  ${contactInfo.location.landmarks.map(landmark => `<div>• ${landmark}</div>`).join('')}
                </div>
              </div>

              <!-- Hours -->
              <div class="mb-6">
                <h4 class="font-semibold mb-3">Operating Hours</h4>
                <div class="space-y-2">
                  ${Object.entries(contactInfo.hours).map(([day, hours]) => `
                    <div class="flex justify-between py-1 border-b border-gray-100">
                      <span class="capitalize font-medium">${day}</span>
                      <span class="text-gray-600">
                        ${hours.closed ? 'Closed' : `${hours.open} - ${hours.close}`}
                      </span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Contact Methods -->
              <div>
                <h4 class="font-semibold mb-3">Contact Information</h4>
                <div class="space-y-2">
                  <div class="flex items-center">
                    <span class="text-green-600 mr-3">📞</span>
                    <span class="text-sm">Main: ${contactInfo.contact.phone.main}</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-green-600 mr-3">🎉</span>
                    <span class="text-sm">Events: ${contactInfo.contact.phone.events}</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-green-600 mr-3">📧</span>
                    <span class="text-sm">${contactInfo.contact.email.general}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h3 class="text-2xl font-heading font-semibold mb-6 flex items-center">
                <span class="text-3xl mr-3">🗺️</span>
                Find Us
              </h3>
              <div id="map-container" class="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div class="text-center">
                  <div class="text-4xl mb-2">🗺️</div>
                  <div class="font-medium">Interactive Map</div>
                  <div class="text-sm text-gray-600">Click to view directions</div>
                </div>
              </div>
              <div class="mt-4 text-center">
                <button onclick="openDirections()" class="btn-secondary">
                  Get Directions
                </button>
              </div>
            </div>

            <!-- Social Media -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h3 class="text-2xl font-heading font-semibold mb-6">Follow Us</h3>
              <div class="flex justify-center space-x-4">
                <a href="#" class="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                  📘
                </a>
                <a href="#" class="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors">
                  📷
                </a>
                <a href="#" class="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Success Modal -->
      <div id="success-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4">
        <div class="bg-white rounded-xl max-w-md w-full p-6 text-center">
          <div class="text-5xl mb-4">✅</div>
          <h3 class="text-xl font-heading font-bold mb-2">Message Sent!</h3>
          <p class="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>
          <button onclick="closeSuccessModal()" class="btn-primary">
            Close
          </button>
        </div>
      </div>
    </div>
  `
}

function renderFormField(field) {
  switch (field.type) {
    case 'select':
      return `
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">${field.label}${field.required ? ' *' : ''}</label>
          <select name="${field.name}" ${field.required ? 'required' : ''} class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none">
            ${field.options.map(option => `<option value="${option.value}">${option.label}</option>`).join('')}
          </select>
        </div>
      `
    case 'textarea':
      return `
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">${field.label}${field.required ? ' *' : ''}</label>
          <textarea name="${field.name}" ${field.required ? 'required' : ''} rows="4" placeholder="${field.placeholder}" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-vertical"></textarea>
        </div>
      `
    default:
      return `
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">${field.label}${field.required ? ' *' : ''}</label>
          <input type="${field.type}" name="${field.name}" ${field.required ? 'required' : ''} placeholder="${field.placeholder}" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none">
        </div>
      `
  }
}
