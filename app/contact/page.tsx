"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "021-34567890 (Karachi Office)",
        "0300-1234567 (Sales)",
        "0312-9876543 (Support)"
      ],
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: [
        "info@bismillahenterprises.pk",
        "sales@bismillahenterprises.pk",
        "support@bismillahenterprises.pk"
      ],
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "Plot 45, Street 7, Block 8",
        "Clifton, Karachi",
        "Sindh 75600, Pakistan"
      ],
      color: "from-purple-500 to-violet-400"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 7:00 PM",
        "Saturday: 10:00 AM - 5:00 PM",
        "Sunday: 11:00 AM - 3:00 PM"
      ],
      color: "from-orange-500 to-amber-400"
    }
  ]

  const departments = [
    { name: "General Inquiries", email: "info@bismillahenterprises.pk", phone: "021-34567891" },
    { name: "Sales Department", email: "sales@bismillahenterprises.pk", phone: "021-34567892" },
    { name: "Technical Support", email: "support@bismillahenterprises.pk", phone: "021-34567893" },
    { name: "Warranty & Service", email: "service@bismillahenterprises.pk", phone: "021-34567894" }
  ]

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
              className="max-w-3xl text-center mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Get in Touch
                </span>
                <br />
                <span className="text-foreground">With Our Team</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Have questions about our laptops? Our team in Karachi is ready to help you find the perfect device for your needs.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form - Even More Compact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-b from-white to-white/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg p-5"
            >
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-accent" />
                  Send Us a Message
                </h2>
                <p className="text-xs text-muted-foreground">
                  We'll get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-2" />
                  <h3 className="text-lg font-bold mb-1">Message Sent!</h3>
                  <p className="text-xs text-muted-foreground">
                    Thank you for contacting us.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full p-2 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full p-2 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium mb-1">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="03XX-XXXXXXX"
                        required
                        className="w-full p-2 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-2 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-xs"
                      >
                        <option value="">Select subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="sales">Product Sales</option>
                        <option value="support">Technical Support</option>
                        <option value="warranty">Warranty & Service</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={2}
                      placeholder="How can we help you?"
                      required
                      className="w-full p-2 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-xs resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-md py-3 text-sm font-semibold mt-1"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-3 h-3" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-b from-white to-white/80 backdrop-blur-sm rounded-xl border border-primary/10 shadow-sm p-6"
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-3">{info.title}</h3>
                      <div className="space-y-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Departments */}
              <div className="bg-gradient-to-b from-white to-white/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-6">Contact by Department</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border border-primary/10 hover:bg-primary/5 transition-colors"
                    >
                      <div>
                        <h4 className="font-semibold mb-1">{dept.name}</h4>
                        <p className="text-sm text-muted-foreground">{dept.email}</p>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <p className="text-sm font-medium">{dept.phone}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Map/Address Section */}
              <div className="bg-gradient-to-b from-white to-white/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-6">Visit Our Store</h3>
                <div className="space-y-4">
                  <div className="h-48 bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-3" />
                      <p className="text-muted-foreground">Interactive map would appear here</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold">Bismillah Enterprises</p>
                    <p className="text-sm text-muted-foreground">
                      Plot 45, Street 7, Block 8, Clifton<br />
                      Karachi, Sindh 75600<br />
                      Pakistan
                    </p>
                  </div>
                  <div className="pt-4 border-t border-primary/10">
                    <p className="text-sm text-muted-foreground mb-2">Directions:</p>
                    <p className="text-sm">
                      Located in the heart of Clifton, easily accessible from Shahrah-e-Firdousi. 
                      Ample parking available. Near Dolmen Mall Clifton.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-2xl border border-primary/10 p-6 text-center">
                <h3 className="font-bold text-lg mb-2">Need Immediate Assistance?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Call us now for instant support
                </p>
                <a 
                  href="tel:+922134567890"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: 021-34567890
                </a>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 bg-gradient-to-b from-white to-white/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-sm p-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Do you offer home delivery?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes! We offer free delivery within Karachi for all orders above PKR 50,000. 
                    For other cities, we partner with trusted courier services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What are your payment options?</h4>
                  <p className="text-sm text-muted-foreground">
                    We accept cash on delivery, bank transfers, credit/debit cards, and also offer installment plans through partnerships with major banks.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Do you provide after-sales service?</h4>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! We have a dedicated service center in Karachi and provide warranty support for all our products. Extended warranty options are also available.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Can I visit your showroom?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, our showroom in Clifton is open during business hours. 
                    You can see and test all our laptop models in person before making a purchase.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Do you offer bulk discounts?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, we offer special pricing for educational institutions, corporate clients, 
                    and bulk purchases. Contact our sales team for customized quotations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What is your return policy?</h4>
                  <p className="text-sm text-muted-foreground">
                    We offer a 7-day return policy for unused products in original packaging. 
                    For defective items, our standard warranty applies with service center support.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}