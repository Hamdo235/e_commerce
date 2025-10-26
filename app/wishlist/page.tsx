"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useWishlist } from "@/lib/wishlist-context"
import { ProductCard } from "@/components/product-card"

export default function WishlistPage() {
  const { items } = useWishlist()
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-6 text-3xl font-bold text-foreground">Mes favoris</h1>
          {items.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="mb-4 text-muted-foreground">Votre liste de souhaits est vide.</p>
                <Button asChild>
                  <Link href="/products">Parcourir les produits</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((w) => (
                <ProductCard key={w.productId} product={w.product} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
