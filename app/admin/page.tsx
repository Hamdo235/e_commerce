import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-6 text-3xl font-bold text-foreground">Administration</h1>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 space-y-2">
                <h2 className="text-lg font-semibold text-foreground">Produits</h2>
                <p className="text-muted-foreground">Gérer le catalogue produits.</p>
                <Button variant="outline" className="bg-transparent" asChild>
                  <Link href="/admin/products">Ouvrir</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <h2 className="text-lg font-semibold text-foreground">Commandes</h2>
                <p className="text-muted-foreground">Suivre et traiter les commandes.</p>
                <Button variant="outline" className="bg-transparent" asChild>
                  <Link href="/admin/orders">Ouvrir</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <h2 className="text-lg font-semibold text-foreground">Utilisateurs</h2>
                <p className="text-muted-foreground">Gérer les comptes clients.</p>
                <Button variant="outline" className="bg-transparent" asChild>
                  <Link href="/admin/users">Ouvrir</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
