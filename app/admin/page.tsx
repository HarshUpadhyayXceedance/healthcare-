"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Building, Pill, DollarSign, ArrowLeft, Plus, Edit, Trash2, Eye } from "lucide-react"
import Link from "next/link"

export default function AdminPanel() {
  const [selectedTab, setSelectedTab] = useState("overview")
  const [isAddDoctorOpen, setIsAddDoctorOpen] = useState(false)
  const [isAddMedicineOpen, setIsAddMedicineOpen] = useState(false)

  const stats = {
    totalDoctors: 45,
    totalPatients: 1250,
    totalMedicines: 350,
    monthlyRevenue: 125000,
  }

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15 years",
      patients: 89,
      rating: 4.9,
      status: "Active",
      joinDate: "2020-01-15",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      experience: "12 years",
      patients: 76,
      rating: 4.8,
      status: "Active",
      joinDate: "2021-03-20",
    },
    {
      id: 3,
      name: "Dr. Emily Davis",
      specialty: "Dermatologist",
      experience: "10 years",
      patients: 65,
      rating: 4.7,
      status: "Inactive",
      joinDate: "2022-06-10",
    },
  ]

  const medicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "Pain Relief",
      stock: 500,
      price: 12.99,
      supplier: "PharmaCorp",
      expiryDate: "2025-12-31",
    },
    {
      id: 2,
      name: "Amoxicillin 250mg",
      category: "Antibiotic",
      stock: 200,
      price: 24.99,
      supplier: "MediSupply",
      expiryDate: "2025-08-15",
    },
    {
      id: 3,
      name: "Vitamin D3 1000IU",
      category: "Supplements",
      stock: 0,
      price: 18.99,
      supplier: "HealthPlus",
      expiryDate: "2026-03-20",
    },
  ]

  const clinics = [
    {
      id: 1,
      name: "Downtown Medical Center",
      address: "123 Main St, City Center",
      doctors: 15,
      status: "Active",
      phone: "+1 (555) 123-4567",
    },
    {
      id: 2,
      name: "Suburban Health Clinic",
      address: "456 Oak Ave, Suburbia",
      doctors: 8,
      status: "Active",
      phone: "+1 (555) 987-6543",
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
              <h1 className="text-2xl font-black text-slate-800">Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-purple-100 text-purple-700">Administrator</Badge>
              <Button variant="outline">Sign Out</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="doctors" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Doctors</span>
            </TabsTrigger>
            <TabsTrigger value="clinics" className="flex items-center space-x-2">
              <Building className="w-4 h-4" />
              <span>Clinics</span>
            </TabsTrigger>
            <TabsTrigger value="medicines" className="flex items-center space-x-2">
              <Pill className="w-4 h-4" />
              <span>Medicines</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100">Total Doctors</p>
                      <p className="text-3xl font-bold">{stats.totalDoctors}</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100">Total Patients</p>
                      <p className="text-3xl font-bold">{stats.totalPatients}</p>
                    </div>
                    <Users className="w-8 h-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100">Medicines</p>
                      <p className="text-3xl font-bold">{stats.totalMedicines}</p>
                    </div>
                    <Pill className="w-8 h-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-cyan-100">Monthly Revenue</p>
                      <p className="text-3xl font-bold">${stats.monthlyRevenue.toLocaleString()}</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-cyan-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: "New doctor registered",
                      details: "Dr. Sarah Johnson joined Cardiology",
                      time: "2 hours ago",
                    },
                    { action: "Medicine stock updated", details: "Paracetamol 500mg restocked", time: "4 hours ago" },
                    { action: "New clinic added", details: "Downtown Medical Center activated", time: "1 day ago" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
                      <div className="space-y-1">
                        <p className="font-semibold">{activity.action}</p>
                        <p className="text-sm text-slate-600">{activity.details}</p>
                      </div>
                      <p className="text-sm text-slate-500">{activity.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Doctors Tab */}
          <TabsContent value="doctors" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Doctor Management</h2>
              <Dialog open={isAddDoctorOpen} onOpenChange={setIsAddDoctorOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-500">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Doctor
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add New Doctor</DialogTitle>
                    <DialogDescription>Enter doctor details to add them to the system</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="doctorName">Full Name</Label>
                      <Input id="doctorName" placeholder="Dr. John Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialty">Specialty</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select specialty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cardiology">Cardiology</SelectItem>
                          <SelectItem value="neurology">Neurology</SelectItem>
                          <SelectItem value="dermatology">Dermatology</SelectItem>
                          <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience (years)</Label>
                      <Input id="experience" type="number" placeholder="10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="consultationFee">Consultation Fee ($)</Label>
                      <Input id="consultationFee" type="number" placeholder="150" />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Add Doctor</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {doctors.map((doctor) => (
                    <Card key={doctor.id} className="bg-white/50 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-4">
                              <h3 className="font-bold text-lg">{doctor.name}</h3>
                              <Badge
                                className={
                                  doctor.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }
                              >
                                {doctor.status}
                              </Badge>
                            </div>
                            <div className="grid md:grid-cols-4 gap-4 text-sm text-slate-600">
                              <span>
                                <strong>Specialty:</strong> {doctor.specialty}
                              </span>
                              <span>
                                <strong>Experience:</strong> {doctor.experience}
                              </span>
                              <span>
                                <strong>Patients:</strong> {doctor.patients}
                              </span>
                              <span>
                                <strong>Rating:</strong> ⭐ {doctor.rating}
                              </span>
                            </div>
                            <p className="text-sm text-slate-500">Joined: {doctor.joinDate}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 hover:text-red-700 bg-transparent"
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Remove
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

          {/* Clinics Tab */}
          <TabsContent value="clinics" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Clinic Management</h2>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500">
                <Plus className="w-4 h-4 mr-2" />
                Add Clinic
              </Button>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {clinics.map((clinic) => (
                    <Card key={clinic.id} className="bg-white/50 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-4">
                              <h3 className="font-bold text-lg">{clinic.name}</h3>
                              <Badge className="bg-green-100 text-green-700">{clinic.status}</Badge>
                            </div>
                            <p className="text-slate-600">{clinic.address}</p>
                            <div className="flex items-center space-x-4 text-sm text-slate-600">
                              <span>
                                <strong>Doctors:</strong> {clinic.doctors}
                              </span>
                              <span>
                                <strong>Phone:</strong> {clinic.phone}
                              </span>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 hover:text-red-700 bg-transparent"
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Remove
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

          {/* Medicines Tab */}
          <TabsContent value="medicines" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Medicine Inventory</h2>
              <Dialog open={isAddMedicineOpen} onOpenChange={setIsAddMedicineOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-500">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Medicine
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add New Medicine</DialogTitle>
                    <DialogDescription>Enter medicine details to add to inventory</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="medicineName">Medicine Name</Label>
                      <Input id="medicineName" placeholder="Paracetamol 500mg" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pain-relief">Pain Relief</SelectItem>
                          <SelectItem value="antibiotic">Antibiotic</SelectItem>
                          <SelectItem value="supplements">Supplements</SelectItem>
                          <SelectItem value="cardiac">Cardiac</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stock">Stock Quantity</Label>
                      <Input id="stock" type="number" placeholder="100" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Price ($)</Label>
                      <Input id="price" type="number" step="0.01" placeholder="12.99" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="supplier">Supplier</Label>
                      <Input id="supplier" placeholder="PharmaCorp" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" type="date" />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Add Medicine</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {medicines.map((medicine) => (
                    <Card key={medicine.id} className="bg-white/50 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-4">
                              <h3 className="font-bold text-lg">{medicine.name}</h3>
                              <Badge className="bg-blue-100 text-blue-700">{medicine.category}</Badge>
                              <Badge
                                className={
                                  medicine.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }
                              >
                                {medicine.stock > 0 ? "In Stock" : "Out of Stock"}
                              </Badge>
                            </div>
                            <div className="grid md:grid-cols-4 gap-4 text-sm text-slate-600">
                              <span>
                                <strong>Stock:</strong> {medicine.stock} units
                              </span>
                              <span>
                                <strong>Price:</strong> ${medicine.price}
                              </span>
                              <span>
                                <strong>Supplier:</strong> {medicine.supplier}
                              </span>
                              <span>
                                <strong>Expires:</strong> {medicine.expiryDate}
                              </span>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 hover:text-red-700 bg-transparent"
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Remove
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
