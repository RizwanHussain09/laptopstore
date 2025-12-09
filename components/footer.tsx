import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">Bismillah Enterprises</h3>
              <p className="text-accent font-semibold text-sm mb-4">Premium Laptops • Islamic Integrity</p>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              Delivering premium laptops with authentic Islamic values. We believe in honest transactions, quality
              products, and exceptional customer service.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/shop" className="opacity-90 hover:text-accent transition">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-90 hover:text-accent transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-90 hover:text-accent transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" className="opacity-90 hover:text-accent transition">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="opacity-90 hover:text-accent transition">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-90 hover:text-accent transition">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-90 hover:text-accent transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-90 hover:text-accent transition">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="opacity-90">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="opacity-90">info@bismillah.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="opacity-90">123 Tech Avenue, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="text-center md:text-left opacity-80">
              <p>&copy; 2025 Bismillah Enterprises. All rights reserved.</p>
            </div>
            <div className="flex justify-center gap-6 text-sm">
              <Link href="#" className="opacity-80 hover:text-accent transition">
                Privacy Policy
              </Link>
              <Link href="#" className="opacity-80 hover:text-accent transition">
                Terms of Service
              </Link>
            </div>
            <div className="text-center md:text-right opacity-80 text-xs">
              <p>Made with integrity and care</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
