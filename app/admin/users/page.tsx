import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { users } from "@/lib/mock-data"

export default function AdminUsersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-6 text-3xl font-bold text-foreground">Utilisateurs</h1>
          <div className="space-y-4">
            {users.map((u) => (
              <Card key={u.id}>
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{u.name}</p>
                    <p className="text-sm text-muted-foreground">{u.email} • {u.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
            {users.length === 0 && (
              <p className="text-muted-foreground">Aucun utilisateur.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
