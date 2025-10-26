import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/mock-data"
import { Sparkles } from "lucide-react"
import Link from "next/link"

export default function DealsPage() {
  const deals = products.filter((p) => p.discount)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent" />
              <h1 className="text-3xl font-bold text-foreground">Offres du jour</h1>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/products">Voir tous les produits</Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {deals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {deals.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">Aucune offre pour le moment.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
