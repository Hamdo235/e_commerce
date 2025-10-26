import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { orders as allOrders, currentUser } from "@/lib/mock-data"

export default function OrdersPage() {
  const orders = allOrders.filter((o) => o.userId === currentUser.id)
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-6 text-3xl font-bold text-foreground">Mes commandes</h1>
          <div className="space-y-4">
            {orders.map((o) => (
              <Card key={o.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{o.id}</p>
                      <p className="text-sm text-muted-foreground">{o.createdAt} • {o.items.reduce((s,i)=>s+i.quantity,0)} article(s)</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">{o.total.toFixed(2)}€</p>
                      <p className="text-sm text-muted-foreground">{o.status}</p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <p className="text-sm text-muted-foreground">Détails de la commande à venir…</p>
                </CardContent>
              </Card>
            ))}
            {orders.length === 0 && (
              <p className="text-muted-foreground">Aucune commande pour le moment.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
