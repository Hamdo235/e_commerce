import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/mock-data"
import Link from "next/link"

export default function AdminProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Produits</h1>
            <Button variant="outline" className="bg-transparent">Ajouter un produit</Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {products.map((p) => (
              <Card key={p.id}>
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{p.name}</p>
                    <p className="text-sm text-muted-foreground">{p.category} • {p.price}€</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="bg-transparent" asChild>
                      <Link href={`/products/${p.id}`}>Voir</Link>
                    </Button>
                    <Button variant="outline" className="bg-transparent">Éditer</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
