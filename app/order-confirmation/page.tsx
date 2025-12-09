"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function OrderConfirmationPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <CheckCircle className="w-16 h-16 text-accent" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for your purchase. Your order has been placed successfully.
            </p>

            <div className="bg-primary/5 rounded-lg p-8 mb-8">
              <div className="text-left space-y-4">
                <div className="flex justify-between border-b pb-4">
                  <span className="font-semibold">Order Number:</span>
                  <span>#ORD-2025-001234</span>
                </div>
                <div className="flex justify-between border-b pb-4">
                  <span className="font-semibold">Order Date:</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between border-b pb-4">
                  <span className="font-semibold">Estimated Delivery:</span>
                  <span>{new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Status:</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground rounded text-sm font-semibold">
                    Processing
                  </span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-8">
              A confirmation email has been sent to your email address. You can track your order status anytime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 bg-transparent">
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
