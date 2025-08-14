"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Video, Pill, FileText, Shield, Clock, Users, Heart, Stethoscope } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ServicesPage() {
  const router = useRouter()

  const services = [
    {
      icon: Calendar,
      title: "Online Appointment Booking",
      description: "Schedule appointments with doctors across various specialties with real-time availability.",
      features: ["Real-time scheduling", "Specialty selection", "Reminder notifications", "Easy rescheduling"],
      image: "/doctor-appointment-booking.png",
    },
    {
      icon: Video,
      title: "Telemedicine Consultations",
      description: "Connect with healthcare professionals through secure video calls from anywhere.",
      features: ["HD video quality", "Screen sharing", "Digital prescriptions", "Session recordings"],
      image: "/doctor-patient-video-call.png",
    },
    {
      icon: Pill,
      title: "Online Pharmacy",
      description: "Order medicines online with prescription verification and home delivery.",
      features: ["Prescription verification", "Same-day delivery", "Medicine reminders", "Refill automation"],
      image: "/placeholder-68vf2.png",
    },
    {
      icon: FileText,
      title: "Digital Health Records",
      description: "Secure, centralized storage of your medical history and health documents.",
      features: ["Secure cloud storage", "Easy sharing", "Medical history tracking", "Lab results integration"],
      image: "/placeholder-7nh73.png",
    },
    {
      icon: Shield,
      title: "Health Insurance Integration",
      description: "Seamless integration with major health insurance providers for easy claims.",
      features: ["Insurance verification", "Direct billing", "Claims tracking", "Coverage details"],
      image: "/health-insurance-integration.png",
    },
    {
      icon: Heart,
      title: "Wellness Programs",
      description: "Personalized wellness programs and health monitoring for preventive care.",
      features: ["Personalized plans", "Progress tracking", "Health insights", "Expert guidance"],
      image: "/wellness-health-tracking.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold">
              <span className="neon-text">Our</span> <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive healthcare solutions designed to make your health journey seamless, accessible, and
              personalized to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="glass neon-glow border-primary/20 overflow-hidden group hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="font-serif text-xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-serif font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with compassionate care to deliver exceptional healthcare experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Round-the-clock access to healthcare services and emergency support.",
              },
              {
                icon: Users,
                title: "Expert Medical Team",
                description: "Board-certified doctors and specialists across 50+ medical fields.",
              },
              {
                icon: Stethoscope,
                title: "Personalized Care",
                description: "Tailored treatment plans based on your unique health profile and needs.",
              },
            ].map((feature, index) => (
              <Card
                key={feature.title}
                className="glass neon-glow border-primary/20 text-center p-8 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <Card className="glass neon-glow border-primary/20 p-12">
            <CardContent className="space-y-6">
              <h2 className="text-3xl font-serif font-bold neon-text">Ready to Experience Better Healthcare?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of satisfied patients who have transformed their healthcare experience with our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="transition-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                  onClick={() => router.push("/signup")}
                >
                  Get Started Today
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass border-primary/20 hover:bg-primary/5 bg-transparent"
                  onClick={() => router.push("/contact")}
                >
                  Contact Us
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
