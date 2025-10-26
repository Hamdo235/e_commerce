export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  category: string
  image: string
  images: string[]
  rating: number
  reviews: number
  inStock: boolean
  featured?: boolean
  popular?: boolean
  new?: boolean
}

export interface Category {
  id: string
  name: string
  icon: string
  slug: string
}

export interface Review {
  id: string
  productId: string
  userName: string
  rating: number
  comment: string
  date: string
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  shippingAddress: ShippingAddress
  paymentMethod: string
  createdAt: string
}

export interface CartItem {
  productId: string
  quantity: number
  product: Product
}

export interface ShippingAddress {
  fullName: string
  address: string
  city: string
  country: string
  phone: string
  postalCode: string
}

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: "user" | "admin"
}

export const categories: Category[] = [
  { id: "1", name: "Électronique", icon: "💻", slug: "electronique" },
  { id: "2", name: "Mode", icon: "👕", slug: "mode" },
  { id: "3", name: "Maison", icon: "🏠", slug: "maison" },
  { id: "4", name: "Beauté", icon: "💄", slug: "beaute" },
  { id: "5", name: "Sports", icon: "⚽", slug: "sports" },
  { id: "6", name: "Livres", icon: "📚", slug: "livres" },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Smartphone Pro Max",
    description:
      "Le dernier smartphone avec un écran OLED de 6.7 pouces, processeur ultra-rapide et caméra professionnelle de 108MP.",
    price: 899,
    originalPrice: 1099,
    discount: 18,
    category: "Électronique",
    image: "/modern-smartphone.png",
    images: ["/modern-smartphone-front.jpg", "/modern-smartphone-back.jpg", "/modern-smartphone-side.jpg"],
    rating: 4.8,
    reviews: 342,
    inStock: true,
    featured: true,
    popular: true,
  },
  {
    id: "2",
    name: "Casque Audio Sans Fil",
    description: "Casque premium avec réduction de bruit active, autonomie de 30h et son haute fidélité.",
    price: 249,
    originalPrice: 299,
    discount: 17,
    category: "Électronique",
    image: "/wireless-headphones.png",
    images: ["/black-wireless-headphones.png", "/wireless-headphones-folded.jpg"],
    rating: 4.6,
    reviews: 189,
    inStock: true,
    popular: true,
  },
  {
    id: "3",
    name: "Montre Connectée Sport",
    description: "Montre intelligente avec suivi fitness, GPS intégré et résistance à l'eau.",
    price: 199,
    category: "Électronique",
    image: "/smartwatch-sport.jpg",
    images: ["/smartwatch-sport-black.jpg", "/smartwatch-sport-display.jpg"],
    rating: 4.5,
    reviews: 267,
    inStock: true,
    new: true,
  },
  {
    id: "4",
    name: "T-Shirt Premium Coton",
    description: "T-shirt en coton bio de haute qualité, coupe moderne et confortable.",
    price: 29,
    originalPrice: 39,
    discount: 26,
    category: "Mode",
    image: "/premium-cotton-tshirt.jpg",
    images: ["/premium-white-tshirt.png", "/premium-cotton-tshirt-black.jpg"],
    rating: 4.7,
    reviews: 523,
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "Jean Slim Fit",
    description: "Jean moderne avec coupe ajustée, tissu stretch confortable et durable.",
    price: 59,
    category: "Mode",
    image: "/slim-fit-jeans.png",
    images: ["/slim-fit-jeans-blue.jpg", "/slim-fit-jeans-detail.png"],
    rating: 4.4,
    reviews: 198,
    inStock: true,
  },
  {
    id: "6",
    name: "Cafetière Électrique",
    description: "Cafetière programmable avec système de maintien au chaud et arrêt automatique.",
    price: 79,
    originalPrice: 99,
    discount: 20,
    category: "Maison",
    image: "/electric-coffee-maker.jpg",
    images: ["/electric-coffee-maker-front.jpg", "/electric-coffee-maker-brewing.jpg"],
    rating: 4.6,
    reviews: 412,
    inStock: true,
    popular: true,
  },
  {
    id: "7",
    name: "Aspirateur Robot",
    description: "Robot aspirateur intelligent avec navigation laser et contrôle via application.",
    price: 299,
    category: "Maison",
    image: "/robot-vacuum-cleaner.png",
    images: ["/robot-vacuum-cleaner-top.jpg", "/robot-vacuum-cleaner-cleaning.jpg"],
    rating: 4.7,
    reviews: 289,
    inStock: true,
    new: true,
  },
  {
    id: "8",
    name: "Sérum Visage Anti-Âge",
    description: "Sérum concentré avec acide hyaluronique et vitamine C pour une peau éclatante.",
    price: 45,
    category: "Beauté",
    image: "/anti-aging-serum.jpg",
    images: ["/anti-aging-serum-bottle.jpg", "/anti-aging-serum-application.jpg"],
    rating: 4.8,
    reviews: 634,
    inStock: true,
    featured: true,
  },
]

export const reviews: Review[] = [
  {
    id: "1",
    productId: "1",
    userName: "Marie Dubois",
    rating: 5,
    comment: "Excellent smartphone ! La qualité de l'appareil photo est incroyable.",
    date: "2024-01-15",
  },
  {
    id: "2",
    productId: "1",
    userName: "Pierre Martin",
    rating: 4,
    comment: "Très bon produit, mais un peu cher. La batterie tient toute la journée.",
    date: "2024-01-10",
  },
  {
    id: "3",
    productId: "2",
    userName: "Sophie Laurent",
    rating: 5,
    comment: "Le meilleur casque que j'ai jamais eu. La réduction de bruit est parfaite.",
    date: "2024-01-12",
  },
]

// Mock users and orders for demo pages
export const users: User[] = [
  { id: "u1", email: "jane@example.com", name: "Jane Doe", role: "user" },
  { id: "u2", email: "admin@example.com", name: "Admin", role: "admin" },
]

export const currentUser: User = users[0]

export const orders: Order[] = [
  {
    id: "ORD-2025001",
    userId: "u1",
    items: [
      { productId: "1", quantity: 1, product: products.find((p) => p.id === "1") as Product },
      { productId: "4", quantity: 2, product: products.find((p) => p.id === "4") as Product },
    ],
    total: 899 + 2 * 29,
    status: "delivered",
    shippingAddress: {
      fullName: "Jane Doe",
      address: "12 rue de la Paix",
      city: "Paris",
      country: "France",
      phone: "+33 6 12 34 56 78",
      postalCode: "75000",
    },
    paymentMethod: "card",
    createdAt: "2025-10-01",
  },
  {
    id: "ORD-2025002",
    userId: "u1",
    items: [{ productId: "2", quantity: 1, product: products.find((p) => p.id === "2") as Product }],
    total: 249,
    status: "processing",
    shippingAddress: {
      fullName: "Jane Doe",
      address: "12 rue de la Paix",
      city: "Paris",
      country: "France",
      phone: "+33 6 12 34 56 78",
      postalCode: "75000",
    },
    paymentMethod: "card",
    createdAt: "2025-10-15",
  },
]
