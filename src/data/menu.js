// Restaurant Menu Data
export const menuData = {
  appetizers: [
    {
      id: 1,
      name: "Bruschetta Trio",
      description: "Three varieties of our signature bruschetta: classic tomato basil, mushroom truffle, and goat cheese with honey",
      price: 12.99,
      image: "🍞",
      dietary: ["vegetarian"],
      popular: true,
      spicy: false
    },
    {
      id: 2,
      name: "Calamari Fritti",
      description: "Crispy fried squid rings served with marinara sauce and lemon aioli",
      price: 14.99,
      image: "🦑",
      dietary: [],
      popular: false,
      spicy: false
    },
    {
      id: 3,
      name: "Antipasto Platter",
      description: "Selection of cured meats, artisanal cheeses, olives, and roasted vegetables",
      price: 18.99,
      image: "🧀",
      dietary: ["gluten-free"],
      popular: true,
      spicy: false
    },
    {
      id: 4,
      name: "Buffalo Wings",
      description: "Crispy chicken wings tossed in our signature buffalo sauce, served with celery and blue cheese",
      price: 13.99,
      image: "🍗",
      dietary: [],
      popular: true,
      spicy: true
    },
    {
      id: 5,
      name: "Stuffed Mushrooms",
      description: "Button mushrooms stuffed with Italian sausage, breadcrumbs, and parmesan cheese",
      price: 11.99,
      image: "🍄",
      dietary: [],
      popular: false,
      spicy: false
    }
  ],
  
  mains: [
    {
      id: 6,
      name: "Signature Pasta Bella Vista",
      description: "Handmade fettuccine with our secret family sauce, fresh basil, and aged parmesan",
      price: 18.99,
      image: "🍝",
      dietary: ["vegetarian"],
      popular: true,
      spicy: false
    },
    {
      id: 7,
      name: "Grilled Ribeye Steak",
      description: "12oz premium ribeye grilled to perfection, served with garlic mashed potatoes and seasonal vegetables",
      price: 32.99,
      image: "🥩",
      dietary: ["gluten-free"],
      popular: true,
      spicy: false
    },
    {
      id: 8,
      name: "Pan-Seared Salmon",
      description: "Atlantic salmon with lemon herb butter, quinoa pilaf, and grilled asparagus",
      price: 26.99,
      image: "🐟",
      dietary: ["gluten-free"],
      popular: true,
      spicy: false
    },
    {
      id: 9,
      name: "Chicken Parmigiana",
      description: "Breaded chicken breast topped with marinara sauce and melted mozzarella, served with spaghetti",
      price: 22.99,
      image: "🍗",
      dietary: [],
      popular: true,
      spicy: false
    },
    {
      id: 10,
      name: "Margherita Pizza",
      description: "Wood-fired pizza with fresh mozzarella, tomato sauce, and basil on our signature crust",
      price: 16.99,
      image: "🍕",
      dietary: ["vegetarian"],
      popular: true,
      spicy: false
    },
    {
      id: 11,
      name: "Seafood Risotto",
      description: "Creamy arborio rice with shrimp, scallops, and mussels in a white wine sauce",
      price: 28.99,
      image: "🍤",
      dietary: ["gluten-free"],
      popular: false,
      spicy: false
    },
    {
      id: 12,
      name: "Spicy Arrabbiata",
      description: "Penne pasta in a spicy tomato sauce with garlic, red peppers, and fresh herbs",
      price: 17.99,
      image: "🌶️",
      dietary: ["vegetarian", "vegan"],
      popular: false,
      spicy: true
    }
  ],
  
  desserts: [
    {
      id: 13,
      name: "Classic Tiramisu",
      description: "Traditional Italian dessert with coffee-soaked ladyfingers, mascarpone, and cocoa",
      price: 8.99,
      image: "🍰",
      dietary: ["vegetarian"],
      popular: true,
      spicy: false
    },
    {
      id: 14,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, served with vanilla ice cream",
      price: 9.99,
      image: "🍫",
      dietary: ["vegetarian"],
      popular: true,
      spicy: false
    },
    {
      id: 15,
      name: "Cannoli Siciliani",
      description: "Crispy pastry shells filled with sweet ricotta and chocolate chips",
      price: 7.99,
      image: "🥐",
      dietary: ["vegetarian"],
      popular: false,
      spicy: false
    },
    {
      id: 16,
      name: "Gelato Selection",
      description: "Three scoops of our house-made gelato: vanilla, chocolate, and pistachio",
      price: 6.99,
      image: "🍨",
      dietary: ["vegetarian", "gluten-free"],
      popular: true,
      spicy: false
    }
  ],
  
  drinks: [
    {
      id: 17,
      name: "House Wine Selection",
      description: "Red, white, or rosé from our carefully curated wine list",
      price: 8.99,
      image: "🍷",
      dietary: ["vegetarian", "gluten-free"],
      popular: true,
      spicy: false
    },
    {
      id: 18,
      name: "Craft Beer",
      description: "Local and imported beers on tap and in bottles",
      price: 5.99,
      image: "🍺",
      dietary: [],
      popular: true,
      spicy: false
    },
    {
      id: 19,
      name: "Italian Soda",
      description: "Sparkling water with your choice of fruit syrup",
      price: 3.99,
      image: "🥤",
      dietary: ["vegetarian", "vegan", "gluten-free"],
      popular: false,
      spicy: false
    },
    {
      id: 20,
      name: "Espresso",
      description: "Rich, authentic Italian espresso",
      price: 2.99,
      image: "☕",
      dietary: ["vegetarian", "vegan", "gluten-free"],
      popular: true,
      spicy: false
    },
    {
      id: 21,
      name: "Fresh Juice",
      description: "Orange, apple, or cranberry juice",
      price: 3.49,
      image: "🧃",
      dietary: ["vegetarian", "vegan", "gluten-free"],
      popular: false,
      spicy: false
    }
  ]
}

export const menuCategories = [
  { id: 'all', name: 'All Items', icon: '🍽️' },
  { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
  { id: 'mains', name: 'Main Courses', icon: '🍝' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' },
  { id: 'drinks', name: 'Beverages', icon: '🍷' }
]

export const dietaryFilters = [
  { id: 'all', name: 'All Dietary', icon: '🍽️' },
  { id: 'vegetarian', name: 'Vegetarian', icon: '🥬' },
  { id: 'vegan', name: 'Vegan', icon: '🌱' },
  { id: 'gluten-free', name: 'Gluten Free', icon: '🌾' }
]
