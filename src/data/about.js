// About page data
export const restaurantInfo = {
  name: "Bella Vista",
  tagline: "Where Tradition Meets Flavor",
  established: 1999,
  story: {
    intro: "For over 25 years, Bella Vista has been more than just a restaurant – it's been a cornerstone of our community, bringing families together through the universal language of exceptional food.",
    heritage: "Our story began in 1999 when Maria and Giuseppe Rossi, immigrants from the Tuscany region of Italy, decided to share their family's culinary heritage with their new home. What started as a small trattoria with just eight tables has grown into the beloved establishment you see today, while never losing sight of our core values: family, tradition, and authentic flavors.",
    philosophy: "We believe that great food is more than sustenance – it's a celebration of life, love, and community. Every dish we serve carries with it the passion and dedication of our kitchen team, the warmth of our service staff, and the rich traditions passed down through generations.",
    future: "As we look to the future, we remain committed to our founding principles while embracing innovation and sustainability. We source locally when possible, support our community, and continue to create memorable experiences for every guest who walks through our doors."
  },
  mission: "To create exceptional dining experiences that bring people together, honor culinary traditions, and support our local community through authentic flavors and genuine hospitality.",
  values: [
    {
      title: "Authenticity",
      description: "We stay true to traditional recipes while embracing creative innovation",
      icon: "🍝"
    },
    {
      title: "Quality",
      description: "Only the finest ingredients make it to your plate",
      icon: "⭐"
    },
    {
      title: "Community",
      description: "We're proud to be part of this neighborhood's fabric",
      icon: "🏘️"
    },
    {
      title: "Family",
      description: "Every guest is treated like family in our home",
      icon: "❤️"
    },
    {
      title: "Sustainability",
      description: "We care for our environment and source responsibly",
      icon: "🌱"
    },
    {
      title: "Excellence",
      description: "We strive for perfection in every detail",
      icon: "🏆"
    }
  ]
}

export const locationInfo = {
  address: {
    street: "123 Main Street",
    city: "Downtown",
    state: "CA",
    zipCode: "90210",
    country: "United States"
  },
  contact: {
    phone: "(555) 123-4567",
    email: "info@bellavista.com",
    website: "www.bellavista.com"
  },
  hours: {
    monday: { open: "11:00 AM", close: "10:00 PM", closed: false },
    tuesday: { open: "11:00 AM", close: "10:00 PM", closed: false },
    wednesday: { open: "11:00 AM", close: "10:00 PM", closed: false },
    thursday: { open: "11:00 AM", close: "10:00 PM", closed: false },
    friday: { open: "11:00 AM", close: "11:00 PM", closed: false },
    saturday: { open: "10:00 AM", close: "11:00 PM", closed: false },
    sunday: { open: "10:00 AM", close: "9:00 PM", closed: false }
  },
  specialHours: [
    {
      date: "Christmas Day",
      status: "Closed"
    },
    {
      date: "New Year's Day", 
      status: "Closed"
    },
    {
      date: "Thanksgiving",
      status: "Open 12:00 PM - 6:00 PM"
    }
  ]
}

export const teamMembers = [
  {
    id: 1,
    name: "Maria Rossi",
    position: "Owner & Executive Chef",
    bio: "Maria brings over 30 years of culinary expertise from her native Tuscany. Her passion for authentic Italian cuisine and family recipes is the heart of Bella Vista.",
    specialties: ["Traditional Italian", "Pasta Making", "Wine Pairing"],
    image: "👩‍🍳",
    experience: "30+ years"
  },
  {
    id: 2,
    name: "Giuseppe Rossi",
    position: "Owner & General Manager",
    bio: "Giuseppe handles the front of house with warmth and professionalism. His attention to detail ensures every guest feels welcomed and valued.",
    specialties: ["Customer Service", "Wine Selection", "Restaurant Operations"],
    image: "👨‍💼",
    experience: "25+ years"
  },
  {
    id: 3,
    name: "Chef Antonio Martinez",
    position: "Sous Chef",
    bio: "Antonio trained in Rome and brings innovative techniques while respecting traditional methods. He oversees our daily kitchen operations.",
    specialties: ["Modern Italian", "Seafood", "Desserts"],
    image: "👨‍🍳",
    experience: "15+ years"
  },
  {
    id: 4,
    name: "Sofia Chen",
    position: "Pastry Chef",
    bio: "Sofia creates our signature desserts, combining classical French techniques with Italian flavors. Her tiramisu is legendary among our guests.",
    specialties: ["Pastries", "Desserts", "Bread Making"],
    image: "👩‍🍳",
    experience: "12+ years"
  },
  {
    id: 5,
    name: "Marco Benedetti",
    position: "Head Server & Sommelier",
    bio: "Marco's extensive wine knowledge and charismatic personality make him a favorite among guests. He curates our wine list and leads our service team.",
    specialties: ["Wine Service", "Customer Relations", "Staff Training"],
    image: "👨‍💼",
    experience: "18+ years"
  },
  {
    id: 6,
    name: "Isabella Rodriguez",
    position: "Assistant Manager",
    bio: "Isabella ensures smooth daily operations and coordinates special events. Her organizational skills and warm personality keep everything running perfectly.",
    specialties: ["Event Planning", "Operations", "Customer Service"],
    image: "👩‍💼",
    experience: "8+ years"
  }
]

export const achievements = [
  {
    year: 2024,
    title: "Best Local Restaurant",
    organization: "City Food Awards",
    description: "Voted by local community"
  },
  {
    year: 2023,
    title: "Excellence in Service",
    organization: "Restaurant Association",
    description: "Outstanding customer service recognition"
  },
  {
    year: 2022,
    title: "Sustainable Business Award",
    organization: "Green Business Council",
    description: "For environmental responsibility"
  },
  {
    year: 2021,
    title: "25 Years of Excellence",
    organization: "Chamber of Commerce",
    description: "Community service milestone"
  }
]

export const statistics = {
  yearsInBusiness: 25,
  happyCustomers: "50,000+",
  dishesServed: "500,000+",
  teamMembers: 24,
  awards: 12,
  communityEvents: "100+"
}
