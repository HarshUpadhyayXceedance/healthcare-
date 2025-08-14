"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Video, DollarSign, Users, ArrowLeft, Phone, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function DoctorDashboard() {
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null)

  const todayAppointments = [
    {
      id: 1,
      patient: "John Doe",
      time: "09:00 AM",
      type: "Consultation",
      status: "confirmed",
      symptoms: "Chest pain and shortness of breath",
      meetingLink: "https://zoom.us/j/123456789",
    },
    {
      id: 2,
      patient: "Jane Smith",
      time: "10:30 AM",
      type: "Follow-up",
      status: "confirmed",
      symptoms: "Blood pressure monitoring",
      meetingLink: "https://meet.google.com/abc-defg-hij",
    },
    {
      id: 3,
      patient: "Mike Johnson",
      time: "02:00 PM",
      type: "Consultation",
      status: "pending",
      symptoms: "Headaches and dizziness",
      meetingLink: "https://zoom.us/j/987654321",
    },
  ]

  const earnings = {
    today: 450,
    thisWeek: 2100,
    thisMonth: 8500,
    total: 45000,
  }

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
              <h1 className="text-2xl font-black text-slate-800">Doctor Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-blue-100 text-blue-700">Dr. Sarah Johnson</Badge>
              <Button variant="outline">Sign Out</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Today's Appointments</p>
                  <p className="text-3xl font-bold text-blue-600">8</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Total Patients</p>
                  <p className="text-3xl font-bold text-green-600">247</p>
                </div>
                <Users className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Today's Earnings</p>
                  <p className="text-3xl font-bold text-purple-600">${earnings.today}</p>
                </div>
                <DollarSign className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Video Calls</p>
                  <p className="text-3xl font-bold text-cyan-600">5</p>
                </div>
                <Video className="w-8 h-8 text-cyan-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="appointments" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="appointments" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Appointments</span>
            </TabsTrigger>
            <TabsTrigger value="earnings" className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4" />
              <span>Earnings</span>
            </TabsTrigger>
            <TabsTrigger value="patients" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Patients</span>
            </TabsTrigger>
          </TabsList>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Today's Schedule</CardTitle>
                <CardDescription>Manage your appointments and video consultations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {todayAppointments.map((appointment) => (
                  <Card
                    key={appointment.id}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      selectedAppointment?.id === appointment.id ? "ring-2 ring-blue-500 bg-blue-50" : "bg-white/50"
                    }`}
                    onClick={() => setSelectedAppointment(appointment)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-4">
                            <h3 className="font-bold text-lg">{appointment.patient}</h3>
                            <Badge
                              className={
                                appointment.status === "confirmed"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }
                            >
                              {appointment.status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-slate-600">
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{appointment.time}</span>
                            </span>
                            <span>{appointment.type}</span>
                          </div>
                          <p className="text-sm text-slate-600">{appointment.symptoms}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Phone className="w-4 h-4 mr-2" />
                            Call
                          </Button>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Video className="w-4 h-4 mr-2" />
                            Start Video
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            {selectedAppointment && (
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-in slide-in-from-bottom-4 duration-500">
                <CardHeader>
                  <CardTitle>Patient Details - {selectedAppointment.patient}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Patient Information</h4>
                        <div className="space-y-2 text-sm">
                          <p>
                            <span className="font-medium">Name:</span> {selectedAppointment.patient}
                          </p>
                          <p>
                            <span className="font-medium">Age:</span> 45 years
                          </p>
                          <p>
                            <span className="font-medium">Gender:</span> Male
                          </p>
                          <p>
                            <span className="font-medium">Phone:</span> +1 (555) 123-4567
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Medical History</h4>
                        <div className="space-y-1 text-sm text-slate-600">
                          <p>• Hypertension (2019)</p>
                          <p>• Diabetes Type 2 (2020)</p>
                          <p>• No known allergies</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Current Symptoms</h4>
                        <p className="text-sm text-slate-600">{selectedAppointment.symptoms}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Actions</h4>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <Video className="w-4 h-4 mr-2" />
                            Join Video Call
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Send Message
                          </Button>
                        </div>
                        <p className="text-xs text-slate-500">Meeting Link: {selectedAppointment.meetingLink}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Earnings Tab */}
          <TabsContent value="earnings" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <p className="text-green-100">Today</p>
                    <p className="text-3xl font-bold">${earnings.today}</p>
                    <p className="text-sm text-green-100">+12% from yesterday</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <p className="text-blue-100">This Week</p>
                    <p className="text-3xl font-bold">${earnings.thisWeek}</p>
                    <p className="text-sm text-blue-100">+8% from last week</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <p className="text-purple-100">This Month</p>
                    <p className="text-3xl font-bold">${earnings.thisMonth}</p>
                    <p className="text-sm text-purple-100">+15% from last month</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <p className="text-cyan-100">Total Earnings</p>
                    <p className="text-3xl font-bold">${earnings.total}</p>
                    <p className="text-sm text-cyan-100">All time</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { patient: "John Doe", amount: 150, date: "Dec 15, 2024", type: "Consultation" },
                    { patient: "Jane Smith", amount: 120, date: "Dec 15, 2024", type: "Follow-up" },
                    { patient: "Mike Johnson", amount: 180, date: "Dec 14, 2024", type: "Consultation" },
                  ].map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
                      <div className="space-y-1">
                        <p className="font-semibold">{transaction.patient}</p>
                        <p className="text-sm text-slate-600">
                          {transaction.type} • {transaction.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">+${transaction.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patients Tab */}
          <TabsContent value="patients" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Patient Management</CardTitle>
                <CardDescription>View and manage your patient records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "John Doe", lastVisit: "Dec 15, 2024", condition: "Hypertension", status: "Active" },
                    { name: "Jane Smith", lastVisit: "Dec 10, 2024", condition: "Diabetes", status: "Active" },
                    { name: "Mike Johnson", lastVisit: "Dec 8, 2024", condition: "Migraine", status: "Follow-up" },
                  ].map((patient, index) => (
                    <Card key={index} className="bg-white/50 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h3 className="font-semibold">{patient.name}</h3>
                            <p className="text-sm text-slate-600">Last visit: {patient.lastVisit}</p>
                            <p className="text-sm text-slate-600">Condition: {patient.condition}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge
                              className={
                                patient.status === "Active"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }
                            >
                              {patient.status}
                            </Badge>
                            <Button size="sm" variant="outline">
                              View Records
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
