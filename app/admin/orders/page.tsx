import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { orders } from "@/lib/mock-data"

export default function AdminOrdersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-6 text-3xl font-bold text-foreground">Commandes</h1>
          <div className="space-y-4">
            {orders.map((o) => (
              <Card key={o.id}>
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{o.id}</p>
                    <p className="text-sm text-muted-foreground">{o.createdAt} • {o.items.reduce((s,i)=>s+i.quantity,0)} article(s)</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground">{o.total.toFixed(2)}€</p>
                    <p className="text-sm text-muted-foreground">{o.status}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
            {orders.length === 0 && (
              <p className="text-muted-foreground">Aucune commande.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
