import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  stock: number
  rating?: number
  brand?: string
  isNewArrival?: boolean
  isTopSelling?: boolean
}

export interface Sale {
  id: string
  customer: string
  product: string
  amount: number
  date: string
  status: 'Pending' | 'Completed' | 'Cancelled'
}

export interface Payment {
  id: string
  amount: number
  status: 'Pending' | 'Completed' | 'Failed'
  method: string
  date: string
  saleId: string
}

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Meta Quest 3',
    description: 'Standalone VR headset with high-resolution display and precise motion tracking.',
    price: 7500000,
    category: 'Virtual Reality',
    image: '/images/products/Vr.svg',
    stock: 50,
    rating: 4.8,
    brand: 'Meta',
    isNewArrival: true
  },
  {
    id: '2',
    name: 'PlayStation VR2',
    description: 'VR headset for PlayStation 5 with haptic feedback and adaptive triggers.',
    price: 8500000,
    category: 'Virtual Reality',
    image: '/images/products/Vr.svg',
    stock: 40,
    rating: 4.7,
    brand: 'Sony',
    isNewArrival: true
  },
  {
    id: '3',
    name: 'Valve Index',
    description: 'Premium VR headset with a high refresh rate and advanced controllers.',
    price: 14000000,
    category: 'Virtual Reality',
    image: '/images/products/Vr.svg',
    stock: 30,
    rating: 4.9,
    brand: 'Valve',
    isTopSelling: true
  },
  {
    id: '4',
    name: 'HTC Vive Pro 2',
    description: 'VR headset with 5K resolution and 3D spatial audio.',
    price: 18000000,
    category: 'Virtual Reality',
    image: '/images/products/Vr.svg',
    stock: 25,
    rating: 4.6,
    brand: 'HTC'
  },
  {
    id: '5',
    name: 'PICO 4',
    description: 'Lightweight all-in-one VR headset with a 4K display.',
    price: 6000000,
    category: 'Virtual Reality',
    image: '/images/products/Vr.svg',
    stock: 45,
    rating: 4.5,
    brand: 'PICO'
  },
  {
    id: '6',
    name: 'Apple Vision Pro',
    description: 'AR/VR headset with transparent display and EyeSight feature.',
    price: 55000000,
    category: '/images/products/Vr.svg',
    image: '/images/products/Vr.svg',
    stock: 20,
    rating: 4.9,
    brand: 'Apple',
    isNewArrival: true
  },
  {
    id: '7',
    name: 'Microsoft HoloLens 2',
    description: 'AR headset with holographic display and hand-tracking interaction.',
    price: 47000000,
    category: 'Augmented Reality',
    image: '/images/products/Vr.svg',
    stock: 15,
    rating: 4.7,
    brand: 'Microsoft',
    isTopSelling: true
  },
  {
    id: '8',
    name: 'Magic Leap 2',
    description: 'AR glasses with a wide field of view and object recognition technology.',
    price: 35000000,
    category: 'Augmented Reality',
    image: '/images/products/Vr.svg',
    stock: 25,
    rating: 4.6,
    brand: 'Magic Leap'
  },
  {
    id: '9',
    name: 'Amazon Echo',
    description: 'Smart speaker with Alexa voice assistant.',
    price: 1500000,
    category: 'AI Gadgets',
    image: '/images/products/Vr.svg',
    stock: 100,
    rating: 4.7,
    brand: 'Amazon',
    isTopSelling: true
  },
  {
    id: '10',
    name: 'Google Nest Hub',
    description: 'Smart display with Google Assistant and smart home control.',
    price: 2000000,
    category: 'AI Gadgets',
    image: '/images/products/Vr.svg',
    stock: 80,
    rating: 4.6,
    brand: 'Google'
  },
  {
    id: '11',
    name: 'Apple Watch Series 8',
    description: 'Smartwatch with advanced health tracking and cellular connectivity.',
    price: 7000000,
    category: 'Smart Wearables',
    image: '/images/products/Vr.svg',
    stock: 75,
    rating: 4.8,
    brand: 'Apple',
    isTopSelling: true
  },
  {
    id: '12',
    name: 'Samsung Galaxy Watch 6',
    description: 'Smartwatch with health monitoring and Samsung ecosystem integration.',
    price: 4500000,
    category: 'Smart Wearables',
    image: '/images/products/Vr.svg',
    stock: 60,
    rating: 4.7,
    brand: 'Samsung'
  },
  {
    id: '13',
    name: 'Philips Hue Starter Kit',
    description: 'Smart lighting system with customizable colors and automation.',
    price: 2500000,
    category: 'Smart Home',
    image: '/images/products/Vr.svg',
    stock: 90,
    rating: 4.8,
    brand: 'Philips',
    isNewArrival: true
  },
  {
    id: '14',
    name: 'Ecovacs Deebot X1 Omni',
    description: 'AI-powered robot vacuum with automatic cleaning features.',
    price: 15000000,
    category: 'Smart Home',
    image: '/images/products/Vr.svg',
    stock: 40,
    rating: 4.7,
    brand: 'Ecovacs',
    isTopSelling: true
  },
  {
    id: '15',
    name: 'Teslasuit',
    description: 'VR suit with full-body haptic feedback and motion tracking.',
    price: 200000000,
    category: 'Gaming & Haptic',
    image: '/images/products/Vr.svg',
    stock: 10,
    rating: 4.9,
    brand: 'Teslasuit',
    isNewArrival: true
  },
  {
    id: '16',
    name: 'bHaptics TactSuit X40',
    description: 'Haptic vest with 40 feedback points for an immersive VR experience.',
    price: 8000000,
    category: 'Gaming & Haptic',
    image: '/images/products/Vr.svg',
    stock: 30,
    rating: 4.7,
    brand: 'bHaptics',
    isTopSelling: true
  }
]

interface AdminState {
  isAuthenticated: boolean
  userRole: 'admin' | 'user' | null
  products: Product[]
  sales: Sale[]
  payments: Payment[]
  
  // Auth
  login: (username: string, password: string) => boolean
  logout: () => void
  
  // Products
  addProduct: (product: Omit<Product, 'id'>) => void
  updateProduct: (product: Product) => void
  deleteProduct: (id: string) => void
  
  // Sales
  addSale: (sale: Omit<Sale, 'id'>) => void
  updateSale: (sale: Sale) => void
  deleteSale: (id: string) => void
  
  // Payments
  addPayment: (payment: Omit<Payment, 'id'>) => void
  updatePayment: (payment: Payment) => void
  deletePayment: (id: string) => void
}

export const useAdminStore = create<AdminState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      userRole: null,
      products: initialProducts,
      sales: [],
      payments: [],
      
      // Auth
      login: (username: string, password: string) => {
        if (username === 'admin123' && password === '12345') {
          set({ isAuthenticated: true, userRole: 'admin' })
          return true
        }
        else if (username === 'user123' && password === '12345') {
          set({ isAuthenticated: true, userRole: 'user' })
          return true
        }
        return false
      },
      logout: () => set({ isAuthenticated: false, userRole: null }),
      
      // Products
      addProduct: (product) =>
        set((state) => ({
          products: [
            ...state.products,
            { ...product, id: Math.random().toString(36).substr(2, 9) },
          ],
        })),
      updateProduct: (updatedProduct) =>
        set((state) => ({
          products: state.products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          ),
        })),
      deleteProduct: (id) =>
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        })),
      
      // Sales
      addSale: (sale) =>
        set((state) => ({
          sales: [
            ...state.sales,
            { ...sale, id: Math.random().toString(36).substr(2, 9) },
          ],
        })),
      updateSale: (updatedSale) =>
        set((state) => ({
          sales: state.sales.map((sale) =>
            sale.id === updatedSale.id ? updatedSale : sale
          ),
        })),
      deleteSale: (id) =>
        set((state) => ({
          sales: state.sales.filter((sale) => sale.id !== id),
        })),
      
      // Payments
      addPayment: (payment) =>
        set((state) => ({
          payments: [
            ...state.payments,
            { ...payment, id: Math.random().toString(36).substr(2, 9) },
          ],
        })),
      updatePayment: (updatedPayment) =>
        set((state) => ({
          payments: state.payments.map((payment) =>
            payment.id === updatedPayment.id ? updatedPayment : payment
          ),
        })),
      deletePayment: (id) =>
        set((state) => ({
          payments: state.payments.filter((payment) => payment.id !== id),
        })),
    }),
    {
      name: 'admin-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)