// Gallery data for restaurant photos
export const galleryData = {
  food: [
    {
      id: 1,
      title: "Signature Pasta Bella Vista",
      description: "Our famous handmade fettuccine with secret family sauce",
      image: "🍝",
      category: "food",
      featured: true,
      tags: ["pasta", "signature", "italian"]
    },
    {
      id: 2,
      title: "Grilled Ribeye Perfection",
      description: "Premium ribeye steak grilled to perfection with seasonal vegetables",
      image: "🥩",
      category: "food",
      featured: true,
      tags: ["steak", "grilled", "premium"]
    },
    {
      id: 3,
      title: "Fresh Seafood Risotto",
      description: "Creamy arborio rice with shrimp, scallops, and mussels",
      image: "🍤",
      category: "food",
      featured: false,
      tags: ["seafood", "risotto", "italian"]
    },
    {
      id: 4,
      title: "Classic Tiramisu",
      description: "Traditional Italian dessert made fresh daily",
      image: "🍰",
      category: "food",
      featured: true,
      tags: ["dessert", "tiramisu", "classic"]
    },
    {
      id: 5,
      title: "Margherita Pizza",
      description: "Wood-fired pizza with fresh mozzarella and basil",
      image: "🍕",
      category: "food",
      featured: false,
      tags: ["pizza", "margherita", "wood-fired"]
    },
    {
      id: 6,
      title: "Antipasto Platter",
      description: "Selection of cured meats, cheeses, and olives",
      image: "🧀",
      category: "food",
      featured: false,
      tags: ["appetizer", "antipasto", "cheese"]
    },
    {
      id: 7,
      title: "Pan-Seared Salmon",
      description: "Atlantic salmon with lemon herb butter",
      image: "🐟",
      category: "food",
      featured: true,
      tags: ["salmon", "seafood", "healthy"]
    },
    {
      id: 8,
      title: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center",
      image: "🍫",
      category: "food",
      featured: false,
      tags: ["dessert", "chocolate", "warm"]
    }
  ],
  
  interior: [
    {
      id: 9,
      title: "Main Dining Room",
      description: "Elegant dining space with warm lighting and comfortable seating",
      image: "🏛️",
      category: "interior",
      featured: true,
      tags: ["dining", "elegant", "atmosphere"]
    },
    {
      id: 10,
      title: "Private Dining Area",
      description: "Intimate space perfect for special occasions and events",
      image: "🕯️",
      category: "interior",
      featured: false,
      tags: ["private", "intimate", "events"]
    },
    {
      id: 11,
      title: "Open Kitchen",
      description: "Watch our chefs create culinary masterpieces",
      image: "👨‍🍳",
      category: "interior",
      featured: true,
      tags: ["kitchen", "chefs", "open"]
    },
    {
      id: 12,
      title: "Wine Cellar",
      description: "Extensive collection of fine wines from around the world",
      image: "🍷",
      category: "interior",
      featured: false,
      tags: ["wine", "cellar", "collection"]
    },
    {
      id: 13,
      title: "Bar Area",
      description: "Stylish bar with craft cocktails and local beers",
      image: "🍸",
      category: "interior",
      featured: false,
      tags: ["bar", "cocktails", "drinks"]
    }
  ],
  
  exterior: [
    {
      id: 14,
      title: "Restaurant Entrance",
      description: "Welcoming entrance with traditional Italian charm",
      image: "🏪",
      category: "exterior",
      featured: true,
      tags: ["entrance", "exterior", "charm"]
    },
    {
      id: 15,
      title: "Outdoor Patio",
      description: "Beautiful patio dining with garden views",
      image: "🌿",
      category: "exterior",
      featured: true,
      tags: ["patio", "outdoor", "garden"]
    },
    {
      id: 16,
      title: "Evening Ambiance",
      description: "Romantic evening lighting creates perfect atmosphere",
      image: "🌙",
      category: "exterior",
      featured: false,
      tags: ["evening", "romantic", "lighting"]
    }
  ],
  
  events: [
    {
      id: 17,
      title: "Wedding Reception",
      description: "Celebrating love with exceptional cuisine and service",
      image: "💒",
      category: "events",
      featured: true,
      tags: ["wedding", "celebration", "special"]
    },
    {
      id: 18,
      title: "Birthday Celebration",
      description: "Making birthdays memorable with special touches",
      image: "🎂",
      category: "events",
      featured: false,
      tags: ["birthday", "celebration", "party"]
    },
    {
      id: 19,
      title: "Corporate Event",
      description: "Professional events with impeccable service",
      image: "🤝",
      category: "events",
      featured: false,
      tags: ["corporate", "business", "professional"]
    },
    {
      id: 20,
      title: "Cooking Class",
      description: "Learn from our chefs in hands-on cooking experiences",
      image: "👩‍🍳",
      category: "events",
      featured: true,
      tags: ["cooking", "class", "learning"]
    }
  ]
}

export const galleryCategories = [
  { id: 'all', name: 'All Photos', icon: '📸', count: 20 },
  { id: 'food', name: 'Food & Dishes', icon: '🍽️', count: 8 },
  { id: 'interior', name: 'Interior', icon: '🏛️', count: 5 },
  { id: 'exterior', name: 'Exterior', icon: '🌿', count: 3 },
  { id: 'events', name: 'Events', icon: '🎉', count: 4 }
]

export const galleryStats = {
  totalPhotos: 20,
  featuredPhotos: 8,
  categories: 4,
  lastUpdated: "March 2024"
}
