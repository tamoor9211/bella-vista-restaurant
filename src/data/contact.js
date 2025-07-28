// Contact page data
export const contactInfo = {
  restaurant: {
    name: "Bella Vista",
    tagline: "Your table awaits",
    description: "We'd love to hear from you! Whether you're planning a special celebration, have dietary questions, or simply want to make a reservation, our team is here to help."
  },
  
  location: {
    address: {
      street: "123 Main Street",
      city: "Downtown",
      state: "CA",
      zipCode: "90210",
      country: "United States",
      full: "123 Main Street, Downtown, CA 90210"
    },
    coordinates: {
      lat: 34.0522,
      lng: -118.2437
    },
    landmarks: [
      "Next to City Hall",
      "2 blocks from Metro Station",
      "Free parking available"
    ]
  },
  
  contact: {
    phone: {
      main: "(555) 123-4567",
      reservations: "(555) 123-4567",
      events: "(555) 123-4568"
    },
    email: {
      general: "info@bellavista.com",
      reservations: "reservations@bellavista.com",
      events: "events@bellavista.com",
      catering: "catering@bellavista.com"
    },
    social: {
      facebook: "facebook.com/bellavista",
      instagram: "@bellavista_restaurant",
      twitter: "@bellavista"
    }
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
  
  services: [
    {
      name: "Dine-In",
      description: "Full restaurant experience with table service",
      icon: "🍽️",
      available: true
    },
    {
      name: "Takeout",
      description: "Order ahead for quick pickup",
      icon: "🥡",
      available: true
    },
    {
      name: "Delivery",
      description: "We deliver within 5 miles",
      icon: "🚗",
      available: true
    },
    {
      name: "Catering",
      description: "Full-service catering for events",
      icon: "🎉",
      available: true
    },
    {
      name: "Private Events",
      description: "Private dining room available",
      icon: "🥂",
      available: true
    },
    {
      name: "Cooking Classes",
      description: "Learn from our expert chefs",
      icon: "👨‍🍳",
      available: true
    }
  ]
}

export const formFields = {
  contact: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Enter your full name"
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "your.email@example.com"
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      required: false,
      placeholder: "(555) 123-4567"
    },
    {
      name: "subject",
      label: "Subject",
      type: "select",
      required: true,
      options: [
        { value: "", label: "Select a subject" },
        { value: "reservation", label: "Reservation Inquiry" },
        { value: "event", label: "Private Event" },
        { value: "catering", label: "Catering Request" },
        { value: "feedback", label: "Feedback" },
        { value: "other", label: "Other" }
      ]
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      required: true,
      placeholder: "Tell us how we can help you..."
    }
  ],
  
  reservation: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Enter your full name"
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "your.email@example.com"
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      required: true,
      placeholder: "(555) 123-4567"
    },
    {
      name: "date",
      label: "Preferred Date",
      type: "date",
      required: true,
      placeholder: ""
    },
    {
      name: "time",
      label: "Preferred Time",
      type: "select",
      required: true,
      options: [
        { value: "", label: "Select time" },
        { value: "11:00", label: "11:00 AM" },
        { value: "11:30", label: "11:30 AM" },
        { value: "12:00", label: "12:00 PM" },
        { value: "12:30", label: "12:30 PM" },
        { value: "13:00", label: "1:00 PM" },
        { value: "13:30", label: "1:30 PM" },
        { value: "14:00", label: "2:00 PM" },
        { value: "18:00", label: "6:00 PM" },
        { value: "18:30", label: "6:30 PM" },
        { value: "19:00", label: "7:00 PM" },
        { value: "19:30", label: "7:30 PM" },
        { value: "20:00", label: "8:00 PM" },
        { value: "20:30", label: "8:30 PM" },
        { value: "21:00", label: "9:00 PM" }
      ]
    },
    {
      name: "guests",
      label: "Number of Guests",
      type: "select",
      required: true,
      options: [
        { value: "", label: "Select party size" },
        { value: "1", label: "1 Guest" },
        { value: "2", label: "2 Guests" },
        { value: "3", label: "3 Guests" },
        { value: "4", label: "4 Guests" },
        { value: "5", label: "5 Guests" },
        { value: "6", label: "6 Guests" },
        { value: "7", label: "7 Guests" },
        { value: "8", label: "8 Guests" },
        { value: "8+", label: "8+ Guests (Large Party)" }
      ]
    },
    {
      name: "occasion",
      label: "Special Occasion",
      type: "select",
      required: false,
      options: [
        { value: "", label: "No special occasion" },
        { value: "birthday", label: "Birthday" },
        { value: "anniversary", label: "Anniversary" },
        { value: "date", label: "Date Night" },
        { value: "business", label: "Business Dinner" },
        { value: "celebration", label: "Celebration" },
        { value: "other", label: "Other" }
      ]
    },
    {
      name: "requests",
      label: "Special Requests",
      type: "textarea",
      required: false,
      placeholder: "Any dietary restrictions, seating preferences, or special requests..."
    }
  ]
}
