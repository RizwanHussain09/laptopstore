"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Headphones, Truck, Sparkles, ChevronRight, Star, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const featuredProducts = [
    {
      id: 1,
      name: "UltraBook Pro 16",
      price: 249900, // PKR
      image: "/premium-laptop.jpg",
      specs: "16GB RAM, 512GB SSD, Intel i7",
      badge: "Best Seller",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Creator Elite X",
      price: 329900, // PKR
      image: "/professional-laptop.jpg",
      specs: "32GB RAM, 1TB SSD, Intel i9",
      badge: "Premium",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Business Standard",
      price: 129900, // PKR
      image: "/business-laptop.jpg",
      specs: "8GB RAM, 256GB SSD, Intel i5",
      badge: "Popular",
      rating: 4.7,
    },
  ]

  const features = [
    {
      icon: Zap,
      title: "Premium Quality",
      description: "Handpicked from top manufacturers, tested for perfection",
      color: "from-blue-500 to-cyan-400",
    },
    { 
      icon: Truck, 
      title: "Fast Shipping", 
      description: "Quick delivery to your doorstep nationwide",
      color: "from-green-500 to-emerald-400",
    },
    { 
      icon: Shield, 
      title: "Secure Checkout", 
      description: "Safe and encrypted transactions with SSL",
      color: "from-purple-500 to-violet-400",
    },
    { 
      icon: Headphones, 
      title: "24/7 Support", 
      description: "Expert customer service always available",
      color: "from-orange-500 to-amber-400",
    },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const formatPrice = (price: number) => {
    return `PKR ${price.toLocaleString()}`
  }

  return (
    <>
      <Header />
      <main>
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-background to-primary/10" />
            
            {/* Floating particles */}
            {mounted && [...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent/30 rounded-full"
                initial={{ 
                  x: Math.random() * 100 + 'vw',
                  y: Math.random() * 100 + 'vh',
                  scale: 0
                }}
                animate={{
                  y: [null, `-${Math.random() * 100 + 20}px`],
                  x: [null, `${Math.random() * 40 - 20}px`],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          {/* Floating laptop mockup - Fixed with real image */}
          <motion.div
            className="absolute right-10 top-1/4 w-96 h-96 hidden lg:block"
            initial={{ opacity: 0, x: 100, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="absolute top-4 left-4 right-4 h-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-t-lg"></div>
                <div className="absolute top-12 left-8 right-8 bottom-8 bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden">
                  {/* Real laptop image */}
                  <img 
                    src="/workstation-laptop.png" 
                    alt="Premium Laptop"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-8"
              >
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Premium Laptop Collection</span>
                <ChevronRight className="w-4 h-4 text-accent" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
                  Excellence
                </span>
                <br />
                <span className="text-foreground">In Every Byte</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl mb-10 text-muted-foreground max-w-xl leading-relaxed"
              >
                Discover the perfect laptop for your needs. From professional workstations to portable ultrabooks, 
                all curated with authentic Islamic values at our core.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link href="/shop">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-2xl shadow-primary/25 px-8 py-6 text-lg"
                  >
                    <span className="relative z-10 flex items-center">
                      Shop Premium Collection
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary/20 hover:border-primary/40 bg-background/50 backdrop-blur-sm px-8 py-6 text-lg hover:bg-primary/5"
                  >
                    Our Story
                    <Sparkles className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/10 to-green-400/20 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/10 to-blue-400/20 flex items-center justify-center">
                    <Star className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4.9/5</div>
                    <div className="text-sm text-muted-foreground">Average Rating</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/10 to-purple-400/20 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24h</div>
                    <div className="text-sm text-muted-foreground">Fast Delivery</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-primary rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-4">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The <span className="text-accent">Bismillah</span> Difference
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine premium quality with exceptional service and Islamic integrity
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-muted/50 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300" />
                    <div className="relative p-8 rounded-3xl border border-white/20 bg-gradient-to-b from-white/80 to-white/20 backdrop-blur-sm overflow-hidden">
                      {/* Animated background */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${feature.color} transition-opacity duration-500`} />
                      
                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-4">
                <Star className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Featured Collection</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium Selection</h2>
              <p className="text-lg text-muted-foreground">Expertly curated laptops for every lifestyle</p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              {featuredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                  whileHover={{ y: -15 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-muted/50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500" />
                  <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-white/90 to-white/40 backdrop-blur-sm">
                    {/* Product Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                      {product.badge && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="absolute top-4 right-4 z-10"
                        >
                          <span className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            {product.badge}
                          </span>
                        </motion.div>
                      )}
                      {/* Real laptop images */}
                      <div className="w-full h-full flex items-center justify-center overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating!) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">({product.rating})</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-6 font-medium">{product.specs}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {formatPrice(product.price)}
                          </span>
                        </div>
                        <Link href={`/product/${product.id}`}>
                          <Button 
                            size="sm" 
                            className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg"
                          >
                            <span className="relative z-10">View Details</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "0%" }}
                              transition={{ duration: 0.3 }}
                            />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link href="/shop">
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-2 border-primary/20 hover:border-primary/40 bg-background/50 backdrop-blur-sm px-10 py-6 text-lg"
                >
                  <span className="relative z-10 flex items-center">
                    Explore All Products
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
          
          {/* Animated elements */}
          {mounted && [...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full border border-primary/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 mb-8"
              >
                <Sparkles className="w-12 h-12 text-accent" />
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
                  Ready to Upgrade
                </span>
                <br />
                <span className="text-foreground">Your Experience?</span>
              </h2>
              
              <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Discover the perfect laptop today and experience the difference premium quality 
                and authentic service make.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/shop">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-2xl shadow-primary/25 px-12 py-7 text-lg font-semibold"
                  >
                    <span className="relative z-10 flex items-center">
                      Start Shopping Now
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}