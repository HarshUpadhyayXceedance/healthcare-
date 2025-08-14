"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Shield, Target, Zap } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We believe healthcare should be delivered with empathy, understanding, and genuine care for every patient.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Your health data and privacy are our top priorities, protected by industry-leading security measures.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously embrace new technologies to improve healthcare accessibility and quality.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for the highest standards in everything we do, from patient care to platform performance.",
    },
  ]

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "/professional-female-doctor-headshot.png",
      bio: "Board-certified physician with 15+ years in digital health innovation.",
    },
    {
      name: "Michael Chen",
      role: "CEO & Founder",
      image: "/professional-ceo-headshot.png",
      bio: "Healthcare technology entrepreneur passionate about accessible care.",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Head of Patient Experience",
      image: "/professional-female-doctor-headshot.png",
      bio: "Specialist in patient-centered care and healthcare service design.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
                  <span className="neon-text">Transforming</span>
                  <br />
                  <span className="text-primary">Healthcare Together</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We're on a mission to make quality healthcare accessible, affordable, and convenient for everyone. Our
                  platform connects patients with expert medical professionals through innovative technology.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Patients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Medical Professionals</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <img
                src="/diverse-medical-team.png"
                alt="Our Medical Team"
                className="rounded-2xl shadow-2xl glass border border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="glass neon-glow border-primary/20 p-12 animate-fade-in-up">
            <CardContent className="text-center space-y-6">
              <h2 className="text-3xl font-serif font-bold neon-text">Our Mission</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To democratize healthcare by leveraging technology to break down barriers between patients and quality
                medical care. We believe everyone deserves access to expert healthcare professionals, regardless of
                their location or circumstances.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our patients and partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="glass neon-glow border-primary/20 text-center p-8 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-serif font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced team combines medical expertise with technology innovation to deliver exceptional
              healthcare solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="glass neon-glow border-primary/20 overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-serif font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="glass neon-glow border-primary/20 p-12 animate-fade-in-up">
            <CardContent>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-muted-foreground">Platform Uptime</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                  <div className="text-muted-foreground">Patient Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Medical Specialties</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Support Available</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <Card className="glass neon-glow border-primary/20 p-12">
            <CardContent className="space-y-6">
              <h2 className="text-3xl font-serif font-bold neon-text">Join Our Healthcare Revolution</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Be part of the future of healthcare. Whether you're a patient seeking better care or a medical
                professional looking to expand your practice, we're here to support your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="transition-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                  onClick={() => router.push("/signup")}
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass border-primary/20 hover:bg-primary/5 bg-transparent"
                  onClick={() => router.push("/contact")}
                >
                  Learn More
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
