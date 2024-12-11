"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from 'next/image'

const services = [
  { id: 1, name: "Basic Facial", price: 500 },
  { id: 2, name: "Advanced Skincare Treatment", price: 800 },
  { id: 3, name: "Full Body Massage", price: 1000 },
  { id: 4, name: "Manicure & Pedicure", price: 400 },
]

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState(services[0])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-pink-800">Booking & Payment</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border-pink-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-pink-800">Book a Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="service">Select Service</Label>
              <Select onValueChange={(value) => setSelectedService(services.find(s => s.id === parseInt(value)) || services[0])}>
                <SelectTrigger className="border-pink-200">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id.toString()}>
                      {service.name} - R{service.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" className="border-pink-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input id="time" type="time" className="border-pink-200" />
            </div>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white w-full">
              Book Appointment
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white border-pink-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-pink-800">Payment</CardTitle>
            <CardDescription className="text-pink-600">
              Total Amount: R{selectedService.price}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Scan QR Code to Pay</Label>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="QR Code for Payment"
                  width={200}
                  height={200}
                  className="border-2 border-pink-200 rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="card-number">Or Pay with Card</Label>
              <Input id="card-number" placeholder="Card Number" className="border-pink-200" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" className="border-pink-200" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="CVV" className="border-pink-200" />
              </div>
            </div>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white w-full">
              Pay Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

