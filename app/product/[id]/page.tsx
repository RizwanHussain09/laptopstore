"use client"

import React, { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Star, Check, Truck, Shield, RotateCcw } from "lucide-react"
import Link from "next/link"

// Type definition for product specs
type ProductSpecs = {
  processor: string
  ram: string
  storage: string
  display: string
  graphics: string
  battery: string
  weight: string
  ports: string
}

type Product = {
  id: number
  name: string
  brand: string
  price: number
  condition: string
  rating: number
  reviews: number
  image: string
  specs: ProductSpecs
  description: string
  features: string[]
}

// Sample products data - Updated prices to PKR
const products: { [key: string]: Product } = {
  "1": {
    id: 1,
    name: "UltraBook Pro 16",
    brand: "TechPro",
    price: 249900, // PKR
    condition: "New",
    rating: 4.8,
    reviews: 234,
    image: "/modern-laptop-workspace.png",
    specs: {
      processor: "Intel Core i7-13700K",
      ram: "16GB DDR5",
      storage: "512GB NVMe SSD",
      display: "16-inch QHD (2560x1600)",
      graphics: "NVIDIA RTX 4070",
      battery: "Up to 12 hours",
      weight: "1.9 kg (4.2 lbs)",
      ports: "Thunderbolt 4, USB-A, HDMI",
    },
    description: "The ultimate ultrabook for professionals. Combines power, portability, and premium build quality.",
    features: [
      "Intel 13th Gen Processor",
      "Premium Aluminum Chassis",
      "Vibrant QHD Display",
      "All-day Battery Life",
      "3-Year Warranty",
      "Free Shipping",
    ],
  },
  "2": {
    id: 2,
    name: "Creator Elite X",
    brand: "DesignMax",
    price: 329900, // PKR
    condition: "New",
    rating: 4.9,
    reviews: 312,
    image: "/professional-laptop.jpg",
    specs: {
      processor: "Intel Core i9-13900K",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      display: "17-inch 4K (3840x2160)",
      graphics: "NVIDIA RTX 4090",
      battery: "Up to 10 hours",
      weight: "2.3 kg (5.1 lbs)",
      ports: "Thunderbolt 4 x2, USB-A x2, HDMI, SD Card",
    },
    description:
      "Professional workstation for content creators. Unmatched performance for video editing, 3D rendering, and more.",
    features: [
      "Intel Core i9 Processor",
      "4K Professional Display",
      "32GB RAM for Multitasking",
      "RTX 4090 GPU",
      "Thunderbolt 4 Connectivity",
      "5-Year Warranty",
    ],
  },
  "3": {
    id: 3,
    name: "Business Standard",
    brand: "TechPro",
    price: 129900, // PKR
    condition: "New",
    rating: 4.6,
    reviews: 156,
    image: "/business-laptop.jpg",
    specs: {
      processor: "Intel Core i5-1340P",
      ram: "8GB DDR4",
      storage: "256GB SSD",
      display: "14-inch FHD (1920x1080)",
      graphics: "Intel Iris Xe",
      battery: "Up to 10 hours",
      weight: "1.6 kg (3.5 lbs)",
      ports: "USB-C, USB-A, HDMI",
    },
    description: "Reliable and affordable laptop perfect for business users and everyday computing.",
    features: [
      "Intel i5 Processor",
      "Lightweight Design",
      "Great Battery Life",
      "Business-focused Features",
      "2-Year Warranty",
      "Free Technical Support",
    ],
  },
  "4": {
    id: 4,
    name: "Gaming Beast Pro",
    brand: "PowerMax",
    price: 189900, // PKR
    condition: "Refurbished",
    rating: 4.7,
    reviews: 167,
    image: "/gaming-laptop.png",
    specs: {
      processor: "Intel Core i7-13700H",
      ram: "16GB DDR5",
      storage: "512GB NVMe SSD",
      display: "15.6-inch FHD 144Hz",
      graphics: "NVIDIA RTX 3060",
      battery: "Up to 8 hours",
      weight: "2.4 kg (5.3 lbs)",
      ports: "USB-C, USB-A x3, HDMI, Ethernet",
    },
    description: "High-performance gaming laptop with excellent graphics and smooth gameplay experience.",
    features: [
      "RTX 3060 Graphics",
      "144Hz Refresh Rate",
      "RGB Keyboard",
      "Advanced Cooling System",
      "1-Year Warranty",
      "Gaming Bundle Included",
    ],
  },
  "5": {
    id: 5,
    name: "Student Essentials",
    brand: "BasicTech",
    price: 79900, // PKR
    condition: "New",
    rating: 4.4,
    reviews: 312,
    image: "/compact-laptop.jpg",
    specs: {
      processor: "Intel Core i3-1215U",
      ram: "4GB DDR4",
      storage: "128GB SSD",
      display: "13.3-inch HD (1366x768)",
      graphics: "Intel UHD Graphics",
      battery: "Up to 9 hours",
      weight: "1.4 kg (3.1 lbs)",
      ports: "USB-C, USB-A, HDMI",
    },
    description: "Perfect budget-friendly laptop for students with essential features for online classes and assignments.",
    features: [
      "Lightweight & Portable",
      "Long Battery Life",
      "Student Discount Available",
      "Education Software Bundle",
      "1-Year Warranty",
      "Carrying Case Included",
    ],
  },
  "6": {
    id: 6,
    name: "Workstation Pro",
    brand: "DesignMax",
    price: 429900, // PKR
    condition: "Premium",
    rating: 4.95,
    reviews: 45,
    image: "/workstation-laptop.png",
    specs: {
      processor: "Intel Xeon W-1390P",
      ram: "64GB ECC DDR5",
      storage: "2TB NVMe SSD",
      display: "17-inch 4K (3840x2160)",
      graphics: "NVIDIA RTX A5000",
      battery: "Up to 6 hours",
      weight: "3.1 kg (6.8 lbs)",
      ports: "Thunderbolt 4 x4, HDMI, Ethernet, SD Card",
    },
    description: "Professional workstation for engineers, architects, and scientists requiring maximum performance.",
    features: [
      "Xeon Processor",
      "ECC Memory",
      "Professional RTX Graphics",
      "Color-Accurate Display",
      "5-Year Warranty",
      "Priority Support",
    ],
  },
  "7": {
    id: 7,
    name: "ZenBook Ultra",
    brand: "UltraBook",
    price: 159900, // PKR
    condition: "Like New",
    rating: 4.5,
    reviews: 78,
    image: "/modern-laptop-workspace.png",
    specs: {
      processor: "AMD Ryzen 7 5800U",
      ram: "12GB DDR4",
      storage: "512GB NVMe SSD",
      display: "14-inch OLED (2880x1800)",
      graphics: "AMD Radeon Graphics",
      battery: "Up to 14 hours",
      weight: "1.3 kg (2.9 lbs)",
      ports: "USB-C x2, USB-A, HDMI",
    },
    description: "Sleek ultrabook with stunning OLED display and exceptional battery life for productivity on the go.",
    features: [
      "OLED Display",
      "Ultra-Thin Design",
      "14-Hour Battery",
      "Fingerprint Reader",
      "2-Year Warranty",
      "Slim Carrying Case",
    ],
  },
  "8": {
    id: 8,
    name: "ProBook X1",
    brand: "ProSeries",
    price: 279900, // PKR
    condition: "Open Box",
    rating: 4.8,
    reviews: 92,
    image: "/business-laptop.jpg",
    specs: {
      processor: "Intel Core i9-13900H",
      ram: "24GB DDR5",
      storage: "1TB NVMe SSD",
      display: "16-inch 2.5K (2560x1600)",
      graphics: "Intel Iris Xe",
      battery: "Up to 11 hours",
      weight: "1.8 kg (4.0 lbs)",
      ports: "Thunderbolt 4, USB-A x2, HDMI, Ethernet",
    },
    description: "Professional business laptop with enterprise-grade security features and premium build quality.",
    features: [
      "Enterprise Security",
      "Military-Grade Durability",
      "Privacy Screen Option",
      "Business Support 24/7",
      "3-Year Warranty",
      "IT Management Tools",
    ],
  },
  "9": {
    id: 9,
    name: "ChromeBook Plus",
    brand: "BasicTech",
    price: 49900, // PKR
    condition: "New",
    rating: 4.2,
    reviews: 189,
    image: "/compact-laptop.jpg",
    specs: {
      processor: "MediaTek Kompanio 828",
      ram: "8GB LPDDR4X",
      storage: "64GB eMMC",
      display: "14-inch FHD (1920x1080)",
      graphics: "ARM Mali-G57",
      battery: "Up to 12 hours",
      weight: "1.5 kg (3.3 lbs)",
      ports: "USB-C x2, USB-A, MicroSD",
    },
    description: "Cloud-focused laptop perfect for education and basic computing tasks with Chrome OS simplicity.",
    features: [
      "Chrome OS",
      "Google Workspace Ready",
      "Touchscreen Display",
      "Long Battery Life",
      "1-Year Warranty",
      "Google One Trial",
    ],
  },
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const [quantity, setQuantity] = useState(1)
  
  // Unwrap the params promise using React.use()
  const unwrappedParams = React.use(params)
  const productId = unwrappedParams.id
  const product = products[productId]

  if (!product) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <Link href="/shop">
            <Button className="mt-4">Back to Shop</Button>
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  // Get related products (same brand or similar price range)
  const relatedProducts = Object.values(products)
    .filter(p => 
      p.id !== product.id && 
      (p.brand === product.brand || 
       Math.abs(p.price - product.price) < 100000)
    )
    .slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-primary transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl overflow-hidden h-[400px] lg:h-[500px] flex items-center justify-center">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-2 mt-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-20 h-20 rounded-lg bg-muted/50 border border-primary/10 cursor-pointer hover:border-primary/30 transition-colors"
                  />
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                  {product.brand}
                </span>
                <h1 className="text-4xl font-bold mb-3">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} • {product.reviews} reviews
                  </span>
                  <span className="px-2 py-1 bg-green-500/10 text-green-600 text-xs font-medium rounded">
                    {product.condition}
                  </span>
                </div>
              </div>

              {/* Price & Condition */}
              <div className="mb-6 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      PKR {product.price.toLocaleString()}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">Inclusive of all taxes</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground mb-8 text-lg leading-relaxed">{product.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-start gap-2 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-primary/10">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4 mb-8">
                <div className="flex items-center border border-primary/20 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 py-3 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors"
                  >
                    +
                  </button>
                </div>
                <Button size="lg" className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg">
                  Add to Cart
                </Button>
              </div>

              {/* Shipping & Returns Info */}
              <div className="space-y-4 border-t pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Free Shipping</p>
                    <p className="text-sm text-muted-foreground">Delivery within 3-5 business days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <RotateCcw className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">30-Day Returns</p>
                    <p className="text-sm text-muted-foreground">Easy returns with no questions asked</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">Warranty Included</p>
                    <p className="text-sm text-muted-foreground">2-5 years manufacturer warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center p-6 border-b border-r border-primary/10 hover:bg-white/30 transition-colors">
                    <span className="font-semibold text-sm text-muted-foreground">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                    <span className="text-foreground font-medium text-sm">{value as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-8">You Might Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((related) => (
                  <div key={related.id} className="bg-gradient-to-b from-white to-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/10 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 bg-gradient-to-br from-muted/50 to-muted/30">
                      <img
                        src={related.image || "/placeholder.svg"}
                        alt={related.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded">
                        {related.condition}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-2 line-clamp-1">{related.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{related.brand}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          PKR {related.price.toLocaleString()}
                        </span>
                        <Link href={`/product/${related.id}`}>
                          <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}