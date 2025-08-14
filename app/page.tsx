"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context.tsx"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Calendar, Pill, Video, Shield, Users } from "lucide-react"
import Header from "@/components/Header" // Import Header component
import Footer from "@/components/Footer" // Import Footer component

export default function HomePage() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated && user) {
      // Redirect authenticated users to their respective dashboards
      switch (user.role) {
        case "admin":
          router.push("/admin")
          break
        case "doctor":
          router.push("/doctor")
          break
        case "patient":
          router.push("/patient")
          break
      }
    }
  }, [isAuthenticated, user, router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                  <span className="neon-text">Your Health,</span>
                  <br />
                  <span className="text-primary">Simplified</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Experience the future of healthcare with seamless appointments, expert consultations, and medicine
                  delivery—all in one platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="transition-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
                  onClick={() => router.push("/signup")}
                >
                  Get Started Today
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass border-primary/20 hover:bg-primary/5 bg-transparent px-8 py-6 text-lg group"
                  onClick={() => router.push("/services")}
                >
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Expert Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="relative z-10">
                <img
                  src="/modern-doctor-tablet.png"
                  alt="Healthcare Professional"
                  className="rounded-2xl shadow-2xl glass border border-primary/20"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold mb-6">Complete Healthcare Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for modern healthcare, from booking appointments to receiving care, all integrated
              into one seamless platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Smart Appointment Booking",
                description:
                  "Schedule consultations with qualified doctors at your convenience with real-time availability",
              },
              {
                icon: Video,
                title: "HD Video Consultations",
                description: "Connect with doctors through secure, high-quality video calls from anywhere in the world",
              },
              {
                icon: Pill,
                title: "Medicine Delivery",
                description: "Order prescribed medicines with same-day delivery and automatic refill reminders",
              },
              {
                icon: Shield,
                title: "Bank-Level Security",
                description: "Your health data is protected with enterprise-grade encryption and HIPAA compliance",
              },
              {
                icon: Users,
                title: "Expert Medical Team",
                description: "Access to board-certified healthcare professionals across 50+ medical specialties",
              },
              {
                icon: Stethoscope,
                title: "Digital Health Records",
                description: "Secure, centralized health records accessible to you and your healthcare providers",
              },
            ].map((feature, index) => (
              <Card
                key={feature.title}
                className="glass neon-glow border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <Card className="glass neon-glow border-primary/20 p-12">
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-serif font-bold neon-text">
                  Ready to Transform Your Healthcare Experience?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Join thousands of patients and doctors who trust our platform for their healthcare needs. Start your
                  journey to better health today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="transition-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
                  onClick={() => router.push("/signup")}
                >
                  Create Free Account
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass border-primary/20 hover:bg-primary/5 bg-transparent px-8 py-6 text-lg"
                  onClick={() => router.push("/contact")}
                >
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
