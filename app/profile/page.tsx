import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-6 text-3xl font-bold text-foreground">Mon profil</h1>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6 space-y-2">
                <h2 className="text-xl font-semibold text-foreground">Informations</h2>
                <p className="text-muted-foreground">Nom: Jane Doe</p>
                <p className="text-muted-foreground">Email: jane@example.com</p>
                <Button variant="outline" className="bg-transparent">Modifier</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <h2 className="text-xl font-semibold text-foreground">Commandes</h2>
                <p className="text-muted-foreground">Consultez l'historique de vos commandes.</p>
                <Button asChild>
                  <Link href="/profile/orders">Voir mes commandes</Link>
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
