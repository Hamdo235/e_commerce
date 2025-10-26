import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { products, categories } from "@/lib/mock-data"
import { ArrowRight, TrendingUp, Sparkles, Clock } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured)
  const popularProducts = products.filter((p) => p.popular)
  const newProducts = products.filter((p) => p.new)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4 bg-accent text-accent-foreground">Offres spéciales</Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl text-balance">
                Découvrez les meilleures offres
              </h1>
              <p className="mb-8 text-lg text-muted-foreground text-pretty">
                Des milliers de produits de qualité aux meilleurs prix. Livraison rapide et gratuite dès 50€.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/products">
                    Voir les produits
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/deals">Offres du jour</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b bg-card py-8">
          <div className="container mx-auto px-4">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/products?category=${category.slug}`}
                  className="flex min-w-[120px] flex-col items-center gap-2 rounded-lg border bg-background p-4 transition-all hover:border-primary hover:shadow-md"
                >
                  <span className="text-3xl">{category.icon}</span>
                  <span className="text-sm font-medium text-foreground">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        {featuredProducts.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground md:text-3xl">Produits en vedette</h2>
                </div>
                <Button variant="ghost" asChild>
                  <Link href="/products">
                    Voir tout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Popular Products */}
        {popularProducts.length > 0 && (
          <section className="bg-muted/30 py-12">
            <div className="container mx-auto px-4">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground md:text-3xl">Produits populaires</h2>
                </div>
                <Button variant="ghost" asChild>
                  <Link href="/products">
                    Voir tout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {popularProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* New Products */}
        {newProducts.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground md:text-3xl">Nouveautés</h2>
                </div>
                <Button variant="ghost" asChild>
                  <Link href="/products">
                    Voir tout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {newProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Promo Banner */}
        <section className="bg-gradient-to-r from-primary to-accent py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
              Inscrivez-vous à notre newsletter
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90 text-pretty">
              Recevez nos meilleures offres et nouveautés directement dans votre boîte mail
            </p>
            <div className="mx-auto flex max-w-md gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 rounded-lg border-0 px-4 py-3 text-foreground"
              />
              <Button size="lg" variant="secondary">
                S'inscrire
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
