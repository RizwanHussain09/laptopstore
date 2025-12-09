"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Filter, Search, Star, Heart, X, ChevronRight, Check, Zap, Loader2 } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function ShopPage() {
  const [sortBy, setSortBy] = useState("featured")
  const [priceRange, setPriceRange] = useState([0, 500000]) // PKR range
  const [selectedBrand, setSelectedBrand] = useState<string[]>([])
  const [selectedCondition, setSelectedCondition] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [wishlist, setWishlist] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const brands = ["TechPro", "DesignMax", "PowerMax", "BasicTech", "UltraBook", "ProSeries"]
  const conditions = ["New", "Refurbished", "Premium", "Like New", "Open Box"]

  const products = [
    {
      id: 1,
      name: "UltraBook Pro 16",
      brand: "TechPro",
      condition: "New",
      price: 249900, // PKR
      image: "/modern-laptop-workspace.png",
      specs: "16GB RAM, 512GB SSD, Intel i7",
      rating: 4.8,
      reviews: 128,
      tags: ["Best Seller", "Thin & Light"],
      stock: 12,
    },
    {
      id: 2,
      name: "Creator Elite X",
      brand: "DesignMax",
      condition: "New",
      price: 329900, // PKR
      image: "/professional-laptop.jpg",
      specs: "32GB RAM, 1TB SSD, Intel i9",
      rating: 4.9,
      reviews: 89,
      tags: ["Premium", "4K Display"],
      stock: 8,
    },
    {
      id: 3,
      name: "Business Standard",
      brand: "TechPro",
      condition: "New",
      price: 129900, // PKR
      image: "/business-laptop.jpg",
      specs: "8GB RAM, 256GB SSD, Intel i5",
      rating: 4.6,
      reviews: 256,
      tags: ["Popular", "Value"],
      stock: 25,
    },
    {
      id: 4,
      name: "Gaming Beast Pro",
      brand: "PowerMax",
      condition: "Refurbished",
      price: 189900, // PKR
      image: "/gaming-laptop.png",
      specs: "16GB RAM, 512GB SSD, RTX 3060",
      rating: 4.7,
      reviews: 167,
      tags: ["Gaming", "RGB"],
      stock: 6,
    },
    {
      id: 5,
      name: "Student Essentials",
      brand: "BasicTech",
      condition: "New",
      price: 79900, // PKR
      image: "/compact-laptop.jpg",
      specs: "4GB RAM, 128GB SSD, Intel i3",
      rating: 4.4,
      reviews: 312,
      tags: ["Budget", "Student"],
      stock: 42,
    },
    {
      id: 6,
      name: "Workstation Pro",
      brand: "DesignMax",
      condition: "Premium",
      price: 429900, // PKR
      image: "/workstation-laptop.png",
      specs: "64GB RAM, 2TB SSD, Intel Xeon",
      rating: 4.95,
      reviews: 45,
      tags: ["Workstation", "Professional"],
      stock: 3,
    },
    {
      id: 7,
      name: "ZenBook Ultra",
      brand: "UltraBook",
      condition: "Like New",
      price: 159900, // PKR
      image: "/modern-laptop-workspace.png",
      specs: "12GB RAM, 512GB SSD, AMD Ryzen 7",
      rating: 4.5,
      reviews: 78,
      tags: ["OLED", "Portable"],
      stock: 15,
    },
    {
      id: 8,
      name: "ProBook X1",
      brand: "ProSeries",
      condition: "Open Box",
      price: 279900, // PKR
      image: "/business-laptop.jpg",
      specs: "24GB RAM, 1TB SSD, Intel i9",
      rating: 4.8,
      reviews: 92,
      tags: ["Business", "Secure"],
      stock: 7,
    },
    {
      id: 9,
      name: "ChromeBook Plus",
      brand: "BasicTech",
      condition: "New",
      price: 49900, // PKR
      image: "/compact-laptop.jpg",
      specs: "8GB RAM, 64GB eMMC, MediaTek",
      rating: 4.2,
      reviews: 189,
      tags: ["Cloud", "Education"],
      stock: 38,
    },
  ]

  // Simulate loading
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [selectedBrand, selectedCondition, priceRange])

  const filteredProducts = products
    .filter((product) => {
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      const matchesBrand = selectedBrand.length === 0 || selectedBrand.includes(product.brand)
      const matchesCondition = selectedCondition.length === 0 || selectedCondition.includes(product.condition)
      const matchesSearch = searchQuery === "" || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specs.toLowerCase().includes(searchQuery.toLowerCase())
      
      return matchesPrice && matchesBrand && matchesCondition && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return 0
      }
    })

  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const toggleBrand = (brand: string) => {
    setSelectedBrand(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    )
  }

  const toggleCondition = (condition: string) => {
    setSelectedCondition(prev =>
      prev.includes(condition) ? prev.filter(c => c !== condition) : [...prev, condition]
    )
  }

  const clearAllFilters = () => {
    setPriceRange([0, 500000])
    setSelectedBrand([])
    setSelectedCondition([])
    setSearchQuery("")
  }

  // Create active filters array
  const activeFilters: string[] = []
  
  // Add brand filters
  selectedBrand.forEach(brand => {
    activeFilters.push(`Brand: ${brand}`)
  })
  
  // Add condition filters
  selectedCondition.forEach(condition => {
    activeFilters.push(`Condition: ${condition}`)
  })
  
  // Add price filters
  if (priceRange[0] > 0) {
    activeFilters.push(`Min: PKR ${priceRange[0].toLocaleString()}`)
  }
  
  if (priceRange[1] < 500000) {
    activeFilters.push(`Max: PKR ${priceRange[1].toLocaleString()}`)
  }

  const removeFilter = (filter: string) => {
    if (filter.startsWith("Brand:")) {
      const brand = filter.replace("Brand: ", "")
      setSelectedBrand(prev => prev.filter(b => b !== brand))
    } else if (filter.startsWith("Condition:")) {
      const condition = filter.replace("Condition: ", "")
      setSelectedCondition(prev => prev.filter(c => c !== condition))
    } else if (filter.startsWith("Min:")) {
      setPriceRange([0, priceRange[1]])
    } else if (filter.startsWith("Max:")) {
      setPriceRange([priceRange[0], 500000])
    }
  }

  const formatPrice = (price: number) => {
    return `PKR ${price.toLocaleString()}`
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="container mx-auto px-4 py-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Premium Laptops
                </span>
                <br />
                <span className="text-foreground">For Every Need</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Browse our carefully curated collection of premium laptops, from budget-friendly options to professional workstations.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search laptops by name, brand, or specs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 pb-16">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex items-center justify-between mb-6">
            <Button
              onClick={() => setShowMobileFilters(true)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
              {activeFilters.length > 0 && (
                <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {activeFilters.length}
                </span>
              )}
            </Button>
            <p className="text-sm text-muted-foreground">
              {filteredProducts.length} products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Desktop Filters */}
            <div className="hidden md:block md:col-span-1">
              <div className="sticky top-24 space-y-8 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-sm">
                <div>
                  <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Filters
                  </h3>
                </div>

                {/* Price Range */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent" />
                    Price Range (PKR)
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-2">
                        <span>PKR {priceRange[0].toLocaleString()}</span>
                        <span>PKR {priceRange[1].toLocaleString()}</span>
                      </div>
                      <div className="relative h-2">
                        <div className="absolute inset-0 bg-muted rounded-full"></div>
                        <div 
                          className="absolute h-2 bg-gradient-to-r from-primary to-accent rounded-full"
                          style={{
                            left: `${(priceRange[0] / 500000) * 100}%`,
                            right: `${100 - (priceRange[1] / 500000) * 100}%`,
                          }}
                        ></div>
                        <input
                          type="range"
                          min="0"
                          max="500000"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                          className="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
                        />
                        <input
                          type="range"
                          min="0"
                          max="500000"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                          className="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brand Filter */}
                <div>
                  <h4 className="font-semibold text-sm mb-3">Brand</h4>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => toggleBrand(brand)}
                        className={`flex items-center gap-2 w-full text-left p-2 rounded-lg transition-colors ${selectedBrand.includes(brand) ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                      >
                        <div className={`w-4 h-4 border rounded flex items-center justify-center ${selectedBrand.includes(brand) ? 'bg-primary border-primary' : 'border-muted-foreground'}`}>
                          {selectedBrand.includes(brand) && <Check className="w-3 h-3 text-primary-foreground" />}
                        </div>
                        <span className="text-sm">{brand}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Condition Filter */}
                <div>
                  <h4 className="font-semibold text-sm mb-3">Condition</h4>
                  <div className="space-y-2">
                    {conditions.map((condition) => (
                      <button
                        key={condition}
                        onClick={() => toggleCondition(condition)}
                        className={`flex items-center gap-2 w-full text-left p-2 rounded-lg transition-colors ${selectedCondition.includes(condition) ? 'bg-accent/10 text-accent' : 'hover:bg-muted'}`}
                      >
                        <div className={`w-4 h-4 border rounded flex items-center justify-center ${selectedCondition.includes(condition) ? 'bg-accent border-accent' : 'border-muted-foreground'}`}>
                          {selectedCondition.includes(condition) && <Check className="w-3 h-3 text-accent-foreground" />}
                        </div>
                        <span className="text-sm">{condition}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={clearAllFilters}
                  variant="outline"
                  className="w-full mt-4"
                  disabled={activeFilters.length === 0}
                >
                  Clear All Filters
                </Button>
              </div>
            </div>

            {/* Products Section */}
            <div className="md:col-span-3">
              {/* Active Filters & Sort */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 mb-6 border border-primary/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {activeFilters.map((filter, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {filter}
                          <button
                            onClick={() => removeFilter(filter)}
                            className="ml-1 hover:text-primary/70"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </motion.div>
                      ))}
                      {activeFilters.length > 0 && (
                        <button
                          onClick={clearAllFilters}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          Clear all
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Loading...
                        </span>
                      ) : (
                        `${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} found`
                      )}
                    </p>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="p-2 border border-primary/20 rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="bg-muted/50 h-48 rounded-xl mb-4"></div>
                      <div className="h-4 bg-muted/50 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-muted/50 rounded w-1/2 mb-3"></div>
                      <div className="h-8 bg-muted/50 rounded w-full"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ y: -5 }}
                        className="group"
                      >
                        <div className="bg-gradient-to-b from-white to-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/10 shadow-sm hover:shadow-xl transition-all duration-300">
                          {/* Product Image */}
                          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-muted/50 to-muted/30">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10" />
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            
                            {/* Wishlist Button */}
                            <button
                              onClick={() => toggleWishlist(product.id)}
                              className="absolute top-3 right-3 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                            >
                              <Heart 
                                className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
                              />
                            </button>

                            {/* Tags */}
                            <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-2">
                              {product.tags.map((tag, idx) => (
                                <span 
                                  key={idx}
                                  className="px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Condition Badge */}
                            <span className={`absolute bottom-3 left-3 z-20 px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${
                              product.condition === "New" 
                                ? "bg-green-500/90 text-green-50" 
                                : product.condition === "Premium"
                                ? "bg-purple-500/90 text-purple-50"
                                : "bg-blue-500/90 text-blue-50"
                            }`}>
                              {product.condition}
                            </span>

                            {/* Stock Indicator */}
                            <div className="absolute bottom-3 right-3 z-20">
                              {product.stock < 5 ? (
                                <span className="text-xs bg-red-500/90 text-white px-2 py-1 rounded-full">
                                  Only {product.stock} left
                                </span>
                              ) : product.stock < 10 ? (
                                <span className="text-xs bg-orange-500/90 text-white px-2 py-1 rounded-full">
                                  Low Stock
                                </span>
                              ) : null}
                            </div>
                          </div>

                          {/* Product Info */}
                          <div className="p-5">
                            <div className="mb-3">
                              <p className="text-xs text-muted-foreground font-medium mb-1">{product.brand}</p>
                              <h3 className="font-bold text-lg mb-1 line-clamp-1">{product.name}</h3>
                              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.specs}</p>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                <span className="font-semibold">{product.rating}</span>
                                <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                              </div>
                              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {formatPrice(product.price)}
                              </span>
                            </div>

                            <Link href={`/product/${product.id}`}>
                              <Button className="w-full group/btn bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg">
                                <span className="flex items-center justify-center">
                                  View Details
                                  <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </span>
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}

              {/* Empty State */}
              {filteredProducts.length === 0 && !isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10"
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
                    <Search className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Try adjusting your filters or search terms to find what you're looking for.
                  </p>
                  <Button
                    onClick={clearAllFilters}
                    variant="outline"
                    className="gap-2"
                  >
                    <X className="w-4 h-4" />
                    Clear all filters
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filters Modal */}
        <AnimatePresence>
          {showMobileFilters && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setShowMobileFilters(false)}
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30 }}
                className="absolute right-0 top-0 h-full w-full max-w-sm bg-background shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="h-full overflow-y-auto p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Filters</h3>
                    <button
                      onClick={() => setShowMobileFilters(false)}
                      className="p-2 hover:bg-muted rounded-lg"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Mobile Filter Content - same as desktop but scrollable */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Price Range (PKR)</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs text-muted-foreground mb-2">
                            <span>PKR {priceRange[0].toLocaleString()}</span>
                            <span>PKR {priceRange[1].toLocaleString()}</span>
                          </div>
                          <div className="relative h-2">
                            <div className="absolute inset-0 bg-muted rounded-full"></div>
                            <div 
                              className="absolute h-2 bg-gradient-to-r from-primary to-accent rounded-full"
                              style={{
                                left: `${(priceRange[0] / 500000) * 100}%`,
                                right: `${100 - (priceRange[1] / 500000) * 100}%`,
                              }}
                            ></div>
                            <input
                              type="range"
                              min="0"
                              max="500000"
                              value={priceRange[0]}
                              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                              className="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
                            />
                            <input
                              type="range"
                              min="0"
                              max="500000"
                              value={priceRange[1]}
                              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                              className="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Brand</h4>
                      <div className="space-y-2">
                        {brands.map((brand) => (
                          <button
                            key={brand}
                            onClick={() => toggleBrand(brand)}
                            className={`flex items-center gap-2 w-full text-left p-2 rounded-lg transition-colors ${selectedBrand.includes(brand) ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                          >
                            <div className={`w-4 h-4 border rounded flex items-center justify-center ${selectedBrand.includes(brand) ? 'bg-primary border-primary' : 'border-muted-foreground'}`}>
                              {selectedBrand.includes(brand) && <Check className="w-3 h-3 text-primary-foreground" />}
                            </div>
                            <span className="text-sm">{brand}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Condition</h4>
                      <div className="space-y-2">
                        {conditions.map((condition) => (
                          <button
                            key={condition}
                            onClick={() => toggleCondition(condition)}
                            className={`flex items-center gap-2 w-full text-left p-2 rounded-lg transition-colors ${selectedCondition.includes(condition) ? 'bg-accent/10 text-accent' : 'hover:bg-muted'}`}
                          >
                            <div className={`w-4 h-4 border rounded flex items-center justify-center ${selectedCondition.includes(condition) ? 'bg-accent border-accent' : 'border-muted-foreground'}`}>
                              {selectedCondition.includes(condition) && <Check className="w-3 h-3 text-accent-foreground" />}
                            </div>
                            <span className="text-sm">{condition}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    <Button
                      onClick={() => {
                        setShowMobileFilters(false)
                        clearAllFilters()
                      }}
                      variant="outline"
                      className="w-full"
                    >
                      Clear All Filters
                    </Button>
                    <Button
                      onClick={() => setShowMobileFilters(false)}
                      className="w-full bg-gradient-to-r from-primary to-accent"
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}