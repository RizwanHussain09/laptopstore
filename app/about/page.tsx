"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle2, Heart, Target, Users, Shield, Clock, Award, Sparkles, Star, MapPin, Globe } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Islamic Integrity",
      description: "We conduct business with honesty, transparency, and adherence to Islamic principles in every transaction.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Quality Excellence",
      description: "Every laptop is carefully selected, tested, and verified to meet our stringent quality standards.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our mission. We provide 24/7 support and stand behind every product we sell.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Secure transactions and reliable service with complete peace of mind for every customer.",
      color: "from-purple-500 to-violet-500",
    },
  ]

  const milestones = [
    { number: "2,500+", label: "Satisfied Customers", icon: Users, color: "text-blue-500" },
    { number: "1,200+", label: "Premium Laptops Sold", icon: Award, color: "text-green-500" },
    { number: "24/7", label: "Customer Support", icon: Clock, color: "text-orange-500" },
    { number: "99.8%", label: "Satisfaction Rate", icon: Star, color: "text-yellow-500" },
  ]

  const teamMembers = [
    {
      name: "Muhammad Ali",
      role: "Founder & CEO",
      description: "With over 15 years in tech industry, ensures quality and Islamic principles guide every decision.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Fatima Khan",
      role: "Head of Quality",
      description: "Oversees rigorous testing and quality assurance for every laptop in our collection.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Ahmed Raza",
      role: "Technical Director",
      description: "Ensures all technical specifications meet industry standards and customer expectations.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w-200&h=200&fit=crop&crop=face",
    },
    {
      name: "Aisha Malik",
      role: "Customer Experience",
      description: "Leads our support team to provide exceptional service and build lasting relationships.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    },
  ]

  const features = [
    {
      icon: Globe,
      title: "Serving Pakistan",
      description: "Proudly serving customers across all major cities in Pakistan with reliable delivery.",
    },
    {
      icon: MapPin,
      title: "Karachi Headquarters",
      description: "Based in the heart of Karachi, we understand the needs of Pakistani tech consumers.",
    },
    {
      icon: Shield,
      title: "Warranty Support",
      description: "Comprehensive warranty and after-sales service from our Karachi service center.",
    },
    {
      icon: Sparkles,
      title: "Local Expertise",
      description: "Deep understanding of local market needs, power requirements, and usage patterns.",
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

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
          <div className="container mx-auto px-4 py-24 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-8"
              >
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Established 2015</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
                  Bismillah
                </span>
                <br />
                <span className="text-foreground">Enterprises</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Delivering premium laptops with Islamic values, authentic service, and unwavering commitment to excellence since 2015.
              </motion.p>

              {/* Stats Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-8"
              >
                {milestones.slice(0, 2).map((milestone, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {milestone.number}
                    </div>
                    <p className="text-sm text-muted-foreground">{milestone.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-16 items-center mb-20"
            >
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Our Mission</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                  Making Premium Technology<br />
                  <span className="text-accent">Accessible to All</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Bismillah Enterprises exists to make premium technology accessible to everyone while maintaining the 
                    integrity and Islamic values we hold dear. We believe that exceptional quality and honest business 
                    practices are not mutually exclusive—they must go hand in hand.
                  </p>
                  <p>
                    Every laptop we offer has been personally inspected and tested. We stand behind our products and our 
                    promises to you.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl transform -rotate-3"></div>
                <div className="relative bg-gradient-to-b from-white to-white/80 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Our Promise to You</h3>
                  <ul className="space-y-4">
                    {[
                      { text: "100% Authentic Products", icon: CheckCircle2 },
                      { text: "Fair & Transparent Pricing", icon: CheckCircle2 },
                      { text: "Halal Business Practices", icon: CheckCircle2 },
                      { text: "Secure & Ethical Transactions", icon: CheckCircle2 },
                      { text: "Premium Quality Assurance", icon: CheckCircle2 },
                      { text: "Lifetime Technical Support", icon: CheckCircle2 },
                    ].map((promise, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                          <promise.icon className="w-4 h-4 text-green-500" />
                        </div>
                        <span className="font-medium">{promise.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInUp} className="relative order-2 md:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-gradient-to-b from-white to-white/80 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Our Vision for Pakistan</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We envision a Pakistan where quality technology meets Islamic principles—where customers can shop 
                      with confidence, knowing every transaction reflects our commitment to honesty and excellence.
                    </p>
                    <p>
                      Our goal is to become the trusted choice for professionals, students, and families seeking 
                      premium laptops backed by authentic values and exceptional service.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
                  <Globe className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">Our Vision</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                  Building Trust in<br />
                  <span className="text-primary">Pakistan's Tech Market</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    We're committed to transforming Pakistan's laptop market by introducing standards of quality, 
                    transparency, and Islamic business ethics that set new benchmarks for the industry.
                  </p>
                  <p>
                    Through education, exceptional service, and unwavering integrity, we aim to empower Pakistan's 
                    youth and professionals with the tools they need to succeed.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-4">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Guiding Principles</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide every decision we make and every interaction we have
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-muted/50 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300" />
                    <div className="relative p-8 rounded-3xl border border-white/20 bg-gradient-to-b from-white/80 to-white/20 backdrop-blur-sm overflow-hidden">
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${value.color} transition-opacity duration-500`} />
                      
                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} mb-6 shadow-lg`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Making an Impact</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Our journey in numbers—each milestone represents trust built and promises kept
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm mb-6 mx-auto group-hover:scale-110 transition-transform">
                      <Icon className={`w-10 h-10 ${milestone.color}`} />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold mb-2 gold-text">{milestone.number}</div>
                    <p className="text-primary-foreground/90">{milestone.label}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Local Features */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-4">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Pakistan Focus</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Serving Pakistan</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tailored solutions for Pakistani consumers and businesses
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-b from-white to-white/80 backdrop-blur-sm rounded-2xl border border-primary/10 p-6 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dedicated professionals committed to excellence and Islamic values
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-gradient-to-b from-white to-white/80 backdrop-blur-sm rounded-2xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                      <p className="text-accent font-medium mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Journey</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Bismillah Enterprises was founded in 2015 with a simple yet powerful belief: that technology and 
                  integrity must coexist in the marketplace. In a world where shortcuts were common and quality often 
                  took a back seat, we chose to stand firm on our Islamic principles.
                </p>
                <p>
                  We started by recognizing a critical gap in Pakistan's tech market—customers who wanted premium 
                  laptops without compromising on ethical business practices. From our humble beginnings in a small 
                  Karachi office, we built our reputation one satisfied customer at a time.
                </p>
                <p>
                  Each laptop was personally tested, each customer was treated like family, and each transaction was 
                  conducted with complete transparency. Word spread quickly about our commitment to quality and integrity.
                </p>
                <p>
                  Today, with thousands of satisfied customers across Pakistan and a near-perfect satisfaction rate, 
                  we continue to grow. But growth means nothing if we lose sight of our values. That's why every team 
                  member at Bismillah Enterprises is committed to upholding the same principles that guided us from day one.
                </p>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10"
                >
                  <p className="text-xl font-semibold text-primary text-center">
                    We don't just sell laptops. We build relationships based on trust, quality, and Islamic integrity.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}