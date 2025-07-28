// About page functionality
export function initAboutPage() {
  
  // Add scroll-based animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
        
        // Special animation for statistics
        if (entry.target.classList.contains('stat-number')) {
          animateNumber(entry.target)
        }
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.card, .section-padding > div > div')
  animateElements.forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
    observer.observe(el)
  })

  // Animate statistics numbers
  function animateNumber(element) {
    const finalNumber = element.textContent
    const isPlus = finalNumber.includes('+')
    const numericPart = parseInt(finalNumber.replace(/[^\d]/g, ''))
    
    if (isNaN(numericPart)) return
    
    let current = 0
    const increment = Math.ceil(numericPart / 50)
    const timer = setInterval(() => {
      current += increment
      if (current >= numericPart) {
        current = numericPart
        clearInterval(timer)
      }
      
      let displayText = current.toLocaleString()
      if (finalNumber.includes('K')) displayText += 'K'
      if (isPlus) displayText += '+'
      
      element.textContent = displayText
    }, 30)
  }

  // Add hover effects to team cards
  const teamCards = document.querySelectorAll('.card')
  teamCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)'
      card.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    })
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)'
      card.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    })
  })

  // Add click tracking for buttons
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary')
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      console.log('About page button clicked:', e.target.textContent.trim())
      
      // Add ripple effect
      const ripple = document.createElement('span')
      ripple.classList.add('ripple')
      button.appendChild(ripple)
      
      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })

  // Add parallax effect to hero section
  const hero = document.querySelector('.bg-gradient-to-r')
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.3
      hero.style.transform = `translateY(${rate}px)`
    })
  }

  // Current time display for hours
  function updateCurrentTime() {
    const now = new Date()
    const currentDay = now.toLocaleLowerCase().substring(0, 3)
    const currentTime = now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
    
    // Highlight current day
    const dayElements = document.querySelectorAll('.capitalize')
    dayElements.forEach(el => {
      if (el.textContent.toLowerCase().includes(currentDay)) {
        el.parentElement.classList.add('bg-orange-50', 'border-orange-200')
        el.parentElement.style.borderWidth = '2px'
      }
    })
  }

  // Add interactive elements
  function addInteractiveElements() {
    // Add "Currently Open/Closed" indicator
    const hoursSection = document.querySelector('.card p')
    if (hoursSection) {
      const now = new Date()
      const currentHour = now.getHours()
      const isOpen = currentHour >= 11 && currentHour < 22
      
      const statusIndicator = document.createElement('div')
      statusIndicator.className = `inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
        isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`
      statusIndicator.innerHTML = `
        <span class="w-2 h-2 rounded-full ${isOpen ? 'bg-green-400' : 'bg-red-400'} mr-2"></span>
        ${isOpen ? 'Currently Open' : 'Currently Closed'}
      `
      
      // Insert after hours title
      const hoursTitle = document.querySelector('h3:contains("Operating Hours")')
      if (hoursTitle) {
        hoursTitle.parentNode.insertBefore(statusIndicator, hoursTitle.nextSibling)
      }
    }
  }

  // Add team member modal functionality
  function initTeamModals() {
    const teamCards = document.querySelectorAll('.card')
    teamCards.forEach((card, index) => {
      card.style.cursor = 'pointer'
      card.addEventListener('click', () => {
        showTeamMemberModal(index)
      })
    })
  }

  function showTeamMemberModal(memberIndex) {
    // This would show a modal with more detailed team member information
    console.log('Show team member modal for index:', memberIndex)
    // Implementation would go here for a detailed modal
  }

  // Initialize all functionality
  function init() {
    updateCurrentTime()
    addInteractiveElements()
    initTeamModals()
    
    // Update time every minute
    setInterval(updateCurrentTime, 60000)
  }

  // Start initialization after a short delay
  setTimeout(init, 100)
}

// Global functions for about page interactions
window.showTeamMember = function(memberId) {
  console.log('Show team member details:', memberId)
  // Could implement a modal or expanded view
}

window.contactTeamMember = function(memberId) {
  console.log('Contact team member:', memberId)
  // Could implement contact functionality
}

window.shareAboutPage = function() {
  if (navigator.share) {
    navigator.share({
      title: 'About Bella Vista Restaurant',
      text: 'Learn about our story, team, and values at Bella Vista Restaurant',
      url: window.location.href
    })
  } else {
    // Fallback for browsers that don't support Web Share API
    navigator.clipboard.writeText(window.location.href)
    alert('Page URL copied to clipboard!')
  }
}
