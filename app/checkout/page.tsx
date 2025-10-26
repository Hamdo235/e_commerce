"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart } from "@/lib/cart-context"

export default function CheckoutPage() {
  const { items, totalPrice } = useCart()
  const shippingCost = totalPrice >= 50 ? 0 : 5.99
  const finalTotal = totalPrice + shippingCost

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-6 text-3xl font-bold text-foreground">Paiement</h1>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6 grid gap-4">
                  <h2 className="text-xl font-semibold text-foreground">Adresse de livraison</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstname">Prénom</Label>
                      <Input id="firstname" placeholder="Jean" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname">Nom</Label>
                      <Input id="lastname" placeholder="Dupont" />
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                      <Label htmlFor="address">Adresse</Label>
                      <Input id="address" placeholder="12 rue de la Paix" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Ville</Label>
                      <Input id="city" placeholder="Paris" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">Code postal</Label>
                      <Input id="zip" placeholder="75000" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 grid gap-4">
                  <h2 className="text-xl font-semibold text-foreground">Paiement</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="cardnumber">Numéro de carte</Label>
                      <Input id="cardnumber" placeholder="4242 4242 4242 4242" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom sur la carte</Label>
                      <Input id="name" placeholder="Jean Dupont" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="exp">Expiration</Label>
                      <Input id="exp" placeholder="12/28" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                  <Button size="lg" className="mt-2">Payer maintenant</Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-xl font-semibold text-foreground">Résumé de la commande</h2>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sous-total</span>
                      <span className="font-medium text-foreground">{totalPrice.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Livraison</span>
                      <span className="font-medium text-foreground">{shippingCost === 0 ? "Gratuit" : `${shippingCost.toFixed(2)}€`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground font-bold">Total</span>
                      <span className="text-foreground font-bold">{finalTotal.toFixed(2)}€</span>
                    </div>
                  </div>

                  <Button variant="outline" className="mt-4 w-full bg-transparent" asChild>
                    <Link href="/cart">Retour au panier</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {items.length === 0 && (
            <p className="mt-6 text-sm text-muted-foreground">Votre panier est vide.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
