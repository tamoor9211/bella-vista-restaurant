// Contact page functionality
export function initContactPage() {
  let currentForm = 'contact'

  // Form validation rules
  const validationRules = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[\+]?[1-9][\d]{0,15}$/,
    name: /^[a-zA-Z\s]{2,50}$/
  }

  // Switch between forms
  function switchForm(formType) {
    currentForm = formType
    
    // Update tab states
    document.querySelectorAll('.form-tab').forEach(tab => {
      tab.classList.remove('active', 'bg-green-500', 'text-white')
      tab.classList.add('text-gray-600')
    })
    
    const activeTab = document.getElementById(`${formType}-tab`)
    if (activeTab) {
      activeTab.classList.add('active', 'bg-green-500', 'text-white')
      activeTab.classList.remove('text-gray-600')
    }
    
    // Show/hide form containers
    document.querySelectorAll('.form-container').forEach(container => {
      container.classList.add('hidden')
    })
    
    const activeContainer = document.getElementById(`${formType}-form-container`)
    if (activeContainer) {
      activeContainer.classList.remove('hidden')
    }
  }

  // Validate form field
  function validateField(field) {
    const value = field.value.trim()
    const name = field.name
    const type = field.type
    
    // Clear previous errors
    clearFieldError(field)
    
    // Required field validation
    if (field.required && !value) {
      showFieldError(field, 'This field is required')
      return false
    }
    
    // Type-specific validation
    if (value) {
      switch (type) {
        case 'email':
          if (!validationRules.email.test(value)) {
            showFieldError(field, 'Please enter a valid email address')
            return false
          }
          break
        case 'tel':
          if (!validationRules.phone.test(value.replace(/[\s\-\(\)]/g, ''))) {
            showFieldError(field, 'Please enter a valid phone number')
            return false
          }
          break
        case 'text':
          if (name === 'name' && !validationRules.name.test(value)) {
            showFieldError(field, 'Please enter a valid name (2-50 characters, letters only)')
            return false
          }
          break
        case 'date':
          const selectedDate = new Date(value)
          const today = new Date()
          today.setHours(0, 0, 0, 0)
          
          if (selectedDate < today) {
            showFieldError(field, 'Please select a future date')
            return false
          }
          break
      }
    }
    
    return true
  }

  // Show field error
  function showFieldError(field, message) {
    field.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500')
    field.classList.remove('border-gray-300', 'focus:ring-green-500', 'focus:border-green-500')
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message')
    if (existingError) {
      existingError.remove()
    }
    
    // Add error message
    const errorDiv = document.createElement('div')
    errorDiv.className = 'error-message text-red-500 text-sm mt-1'
    errorDiv.textContent = message
    field.parentNode.appendChild(errorDiv)
  }

  // Clear field error
  function clearFieldError(field) {
    field.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500')
    field.classList.add('border-gray-300', 'focus:ring-green-500', 'focus:border-green-500')
    
    const errorMessage = field.parentNode.querySelector('.error-message')
    if (errorMessage) {
      errorMessage.remove()
    }
  }

  // Validate entire form
  function validateForm(form) {
    const fields = form.querySelectorAll('input, select, textarea')
    let isValid = true
    
    fields.forEach(field => {
      if (!validateField(field)) {
        isValid = false
      }
    })
    
    return isValid
  }

  // Handle form submission
  function handleFormSubmit(e) {
    e.preventDefault()
    
    const form = e.target
    const formType = form.id.replace('-form', '')
    
    // Validate form
    if (!validateForm(form)) {
      // Scroll to first error
      const firstError = form.querySelector('.border-red-500')
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
        firstError.focus()
      }
      return
    }
    
    // Collect form data
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent
    submitBtn.textContent = 'Sending...'
    submitBtn.disabled = true
    
    // Simulate form submission
    setTimeout(() => {
      console.log(`${formType} form submitted:`, data)
      
      // Reset form
      form.reset()
      
      // Show success modal
      showSuccessModal(formType)
      
      // Reset button
      submitBtn.textContent = originalText
      submitBtn.disabled = false
      
      // Clear any remaining errors
      form.querySelectorAll('.error-message').forEach(error => error.remove())
      form.querySelectorAll('input, select, textarea').forEach(field => clearFieldError(field))
      
    }, 1500) // Simulate network delay
  }

  // Show success modal
  function showSuccessModal(formType) {
    const modal = document.getElementById('success-modal')
    if (modal) {
      const title = modal.querySelector('h3')
      const message = modal.querySelector('p')
      
      if (formType === 'reservation') {
        title.textContent = 'Reservation Request Sent!'
        message.textContent = 'Thank you for your reservation request. We\'ll confirm your booking within 2 hours.'
      } else {
        title.textContent = 'Message Sent!'
        message.textContent = 'Thank you for contacting us. We\'ll get back to you within 24 hours.'
      }
      
      modal.classList.remove('hidden')
      document.body.style.overflow = 'hidden'
    }
  }

  // Close success modal
  function closeSuccessModal() {
    const modal = document.getElementById('success-modal')
    if (modal) {
      modal.classList.add('hidden')
      document.body.style.overflow = 'auto'
    }
  }

  // Open directions
  function openDirections() {
    const address = "123 Main Street, Downtown, CA 90210"
    const encodedAddress = encodeURIComponent(address)
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
    window.open(url, '_blank')
  }

  // Initialize event listeners
  function initEventListeners() {
    // Form tab switching
    const contactTab = document.getElementById('contact-tab')
    const reservationTab = document.getElementById('reservation-tab')
    
    if (contactTab) {
      contactTab.addEventListener('click', () => switchForm('contact'))
    }
    
    if (reservationTab) {
      reservationTab.addEventListener('click', () => switchForm('reservation'))
    }
    
    // Form submissions
    const contactForm = document.getElementById('contact-form')
    const reservationForm = document.getElementById('reservation-form')
    
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit)
    }
    
    if (reservationForm) {
      reservationForm.addEventListener('submit', handleFormSubmit)
    }
    
    // Real-time validation
    document.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('blur', () => validateField(field))
      field.addEventListener('input', () => {
        if (field.classList.contains('border-red-500')) {
          validateField(field)
        }
      })
    })
    
    // Modal close
    const modal = document.getElementById('success-modal')
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeSuccessModal()
        }
      })
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSuccessModal()
      }
    })
  }

  // Set minimum date for reservation form
  function setMinimumDate() {
    const dateInput = document.querySelector('input[name="date"]')
    if (dateInput) {
      const today = new Date()
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)
      dateInput.min = tomorrow.toISOString().split('T')[0]
    }
  }

  // Make functions globally available
  window.closeSuccessModal = closeSuccessModal
  window.openDirections = openDirections

  // Initialize the contact page
  function init() {
    initEventListeners()
    setMinimumDate()
    switchForm('contact') // Start with contact form
  }

  setTimeout(init, 100)
}
