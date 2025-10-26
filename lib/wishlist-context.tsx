"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { Product } from "./mock-data"

interface WishlistItem {
  productId: string
  product: Product
}

interface WishlistContextType {
  items: WishlistItem[]
  add: (product: Product) => void
  remove: (productId: string) => void
  toggle: (product: Product) => void
  has: (productId: string) => boolean
  clear: () => void
  totalItems: number
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("wishlist")
    if (saved) setItems(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(items))
  }, [items])

  const add = (product: Product) => {
    setItems((curr) => (curr.some((i) => i.productId === product.id) ? curr : [...curr, { productId: product.id, product }]))
  }

  const remove = (productId: string) => {
    setItems((curr) => curr.filter((i) => i.productId !== productId))
  }

  const toggle = (product: Product) => {
    setItems((curr) =>
      curr.some((i) => i.productId === product.id)
        ? curr.filter((i) => i.productId !== product.id)
        : [...curr, { productId: product.id, product }],
    )
  }

  const has = (productId: string) => items.some((i) => i.productId === productId)

  const clear = () => setItems([])

  const totalItems = items.length

  return (
    <WishlistContext.Provider value={{ items, add, remove, toggle, has, clear, totalItems }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error("useWishlist must be used within a WishlistProvider")
  return ctx
}
