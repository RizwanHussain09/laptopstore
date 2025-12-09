"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="border rounded-lg p-3" />
                  <input type="text" placeholder="Last Name" className="border rounded-lg p-3" />
                </div>
                <input type="email" placeholder="Email" className="w-full border rounded-lg p-3" />
                <input type="tel" placeholder="Phone" className="w-full border rounded-lg p-3" />
                <input type="text" placeholder="Street Address" className="w-full border rounded-lg p-3" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="City" className="border rounded-lg p-3" />
                  <input type="text" placeholder="State" className="border rounded-lg p-3" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="ZIP Code" className="border rounded-lg p-3" />
                  <input type="text" placeholder="Country" className="border rounded-lg p-3" />
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-6">Payment Method</h2>
              <div className="space-y-4">
                <label className="border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                  <input type="radio" name="payment" defaultChecked />
                  <span className="ml-3 font-medium">Cash on Delivery</span>
                </label>
              </div>

              <Link href="/order-confirmation">
                <Button className="w-full mt-8 bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                  Place Order
                </Button>
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold mb-6">Order Summary</h3>
                <div className="space-y-3 mb-6 border-b pb-6">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>$0.00</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Total</span>
                  <span className="text-2xl font-bold text-primary">$0.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
