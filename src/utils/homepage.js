// Homepage interactive functionality

export function initHomepageFeatures() {
  // Smooth scrolling for anchor links
  document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
      e.preventDefault()
      const targetId = e.target.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  })

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
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.card, .section-padding > div')
  animateElements.forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
    observer.observe(el)
  })

  // Add hover effects to feature cards
  const featureCards = document.querySelectorAll('.card')
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px) scale(1.02)'
    })
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)'
    })
  })

  // Add click tracking for buttons (for analytics)
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary')
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      console.log('Button clicked:', e.target.textContent.trim())
      // Here you could add analytics tracking
    })
  })

  // Add parallax effect to hero section
  const hero = document.querySelector('section')
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      hero.style.transform = `translateY(${rate}px)`
    })
  }

  // Add typing effect to hero title (optional)
  const heroTitle = document.querySelector('h1')
  if (heroTitle && heroTitle.textContent.includes('Bella Vista')) {
    const text = heroTitle.innerHTML
    heroTitle.innerHTML = ''
    let i = 0
    
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.innerHTML += text.charAt(i)
        i++
        setTimeout(typeWriter, 50)
      }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500)
  }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHomepageFeatures)
} else {
  initHomepageFeatures()
}
