"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Video, Pill, Upload, CreditCard, Star, ArrowLeft, Search, Filter } from "lucide-react"
import Link from "next/link"

export default function PatientPortal() {
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null)
  const [appointmentDate, setAppointmentDate] = useState("")
  const [appointmentTime, setAppointmentTime] = useState("")

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.9,
      experience: "15 years",
      fee: 150,
      image: "/female-doctor.png",
      available: ["09:00", "10:30", "14:00", "15:30"],
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      rating: 4.8,
      experience: "12 years",
      fee: 180,
      image: "/male-doctor.png",
      available: ["11:00", "13:00", "16:00", "17:30"],
    },
    {
      id: 3,
      name: "Dr. Emily Davis",
      specialty: "Dermatologist",
      rating: 4.7,
      experience: "10 years",
      fee: 120,
      image: "/female-dermatologist.png",
      available: ["09:30", "11:30", "14:30", "16:30"],
    },
  ]

  const medicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      price: 12.99,
      category: "Pain Relief",
      inStock: true,
      image: "/medicine-tablet.png",
    },
    {
      id: 2,
      name: "Amoxicillin 250mg",
      price: 24.99,
      category: "Antibiotic",
      inStock: true,
      image: "/placeholder-ttl7r.png",
    },
    {
      id: 3,
      name: "Vitamin D3 1000IU",
      price: 18.99,
      category: "Supplements",
      inStock: false,
      image: "/vitamin-supplement.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <h1 className="text-2xl font-black text-slate-800">Patient Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-700">Welcome, John Doe</Badge>
              <Button variant="outline">Sign Out</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="appointments" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="appointments" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Appointments</span>
            </TabsTrigger>
            <TabsTrigger value="consultations" className="flex items-center space-x-2">
              <Video className="w-4 h-4" />
              <span>Consultations</span>
            </TabsTrigger>
            <TabsTrigger value="pharmacy" className="flex items-center space-x-2">
              <Pill className="w-4 h-4" />
              <span>Pharmacy</span>
            </TabsTrigger>
            <TabsTrigger value="prescriptions" className="flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>Prescriptions</span>
            </TabsTrigger>
          </TabsList>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Book an Appointment</CardTitle>
                <CardDescription>Choose a doctor and schedule your consultation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-1">
                    <Input placeholder="Search doctors by name or specialty" className="bg-white/50" />
                  </div>
                  <Button variant="outline" size="icon">
                    <Search className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {doctors.map((doctor) => (
                    <Card
                      key={doctor.id}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                        selectedDoctor?.id === doctor.id ? "ring-2 ring-blue-500 bg-blue-50" : "bg-white/50"
                      }`}
                      onClick={() => setSelectedDoctor(doctor)}
                    >
                      <CardHeader className="text-center">
                        <img
                          src={doctor.image || "/placeholder.svg"}
                          alt={doctor.name}
                          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                        />
                        <CardTitle className="text-lg">{doctor.name}</CardTitle>
                        <CardDescription>{doctor.specialty}</CardDescription>
                        <div className="flex items-center justify-center space-x-1 mt-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold">{doctor.rating}</span>
                          <span className="text-sm text-slate-500">({doctor.experience})</span>
                        </div>
                        <Badge className="mt-2 bg-green-100 text-green-700">${doctor.fee} consultation</Badge>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                {selectedDoctor && (
                  <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-4">
                    <h3 className="text-lg font-bold">Schedule with {selectedDoctor.name}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Select Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={appointmentDate}
                          onChange={(e) => setAppointmentDate(e.target.value)}
                          className="bg-white/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Available Times</Label>
                        <div className="grid grid-cols-2 gap-2">
                          {selectedDoctor.available.map((time: string) => (
                            <Button
                              key={time}
                              variant={appointmentTime === time ? "default" : "outline"}
                              size="sm"
                              onClick={() => setAppointmentTime(time)}
                              className={appointmentTime === time ? "bg-blue-600" : ""}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="symptoms">Describe your symptoms</Label>
                      <Textarea
                        id="symptoms"
                        placeholder="Please describe your symptoms or reason for consultation..."
                        className="bg-white/50"
                      />
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                      disabled={!appointmentDate || !appointmentTime}
                    >
                      Book Appointment - ${selectedDoctor.fee}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Video Consultations Tab */}
          <TabsContent value="consultations" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Video Consultations</CardTitle>
                <CardDescription>Join your scheduled video calls with doctors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <h3 className="font-bold text-lg">Dr. Sarah Johnson</h3>
                          <p className="text-slate-600">Cardiology Consultation</p>
                          <div className="flex items-center space-x-4 text-sm text-slate-500">
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>Today, Dec 15</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>2:00 PM</span>
                            </span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Badge className="bg-green-100 text-green-700">Starting Soon</Badge>
                          <div className="flex space-x-2">
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              <Video className="w-4 h-4 mr-2" />
                              Join Zoom
                            </Button>
                            <Button size="sm" variant="outline">
                              <Video className="w-4 h-4 mr-2" />
                              Google Meet
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-50 border-slate-200">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <h3 className="font-bold text-lg">Dr. Michael Chen</h3>
                          <p className="text-slate-600">Neurology Follow-up</p>
                          <div className="flex items-center space-x-4 text-sm text-slate-500">
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>Dec 18, 2024</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>10:30 AM</span>
                            </span>
                          </div>
                        </div>
                        <Badge className="bg-slate-100 text-slate-700">Scheduled</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pharmacy Tab */}
          <TabsContent value="pharmacy" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Online Pharmacy</CardTitle>
                <CardDescription>Order medicines with home delivery</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-1">
                    <Input placeholder="Search medicines..." className="bg-white/50" />
                  </div>
                  <Button variant="outline" size="icon">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {medicines.map((medicine) => (
                    <Card key={medicine.id} className="bg-white/50 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={medicine.image || "/placeholder.svg"}
                            alt={medicine.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1 space-y-2">
                            <h3 className="font-bold">{medicine.name}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {medicine.category}
                            </Badge>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-bold text-blue-600">${medicine.price}</span>
                              {medicine.inStock ? (
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  Add to Cart
                                </Button>
                              ) : (
                                <Button size="sm" variant="outline" disabled>
                                  Out of Stock
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg">Shopping Cart</h3>
                        <p className="text-slate-600">2 items • Total: $37.98</p>
                      </div>
                      <Button className="bg-gradient-to-r from-blue-600 to-cyan-500">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Checkout
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Prescriptions Tab */}
          <TabsContent value="prescriptions" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Upload Prescription</CardTitle>
                <CardDescription>Upload your prescription for verification and medicine ordering</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center bg-blue-50/50">
                  <Upload className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Upload Prescription</h3>
                  <p className="text-slate-600 mb-4">Drag and drop your prescription image or PDF here</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">Choose File</Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold">Recent Prescriptions</h3>
                  <Card className="bg-white/50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h4 className="font-semibold">Prescription #12345</h4>
                          <p className="text-sm text-slate-600">Dr. Sarah Johnson • Dec 10, 2024</p>
                          <Badge className="bg-green-100 text-green-700">Verified</Badge>
                        </div>
                        <Button variant="outline" size="sm">
                          Order Medicines
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
