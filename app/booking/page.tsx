"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AnimatedNumber } from "@/components/ui/animated-number"
import { CreditCard, QrCode } from "lucide-react"
import { PageHeader } from "@/components/PageHeader"
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
    <div className="container mx-auto py-10">
      <PageHeader title="Booking & Payment" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border-pink-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-pink-800">Book a Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="service">Select Service</Label>
              <div className="relative">
                <Select 
                  onValueChange={(value) => setSelectedService(services.find(s => s.id === parseInt(value)) || services[0])}
                >
                  <SelectTrigger className="w-full border-pink-200">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="z-50">
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id.toString()}>
                        {service.name} - R{service.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
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
            <CardDescription className="text-2xl font-bold text-pink-600">
              Total Amount: R<AnimatedNumber end={selectedService.price} />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <QrCode className="h-4 w-4 text-pink-600" />
                <Label>Scan QR Code to Pay</Label>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[200px] h-[200px] border-2 border-pink-200 rounded-lg overflow-hidden">
                  <Image
                    src="/qr-code-placeholder.svg"
                    alt="QR Code for Payment"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="h-4 w-4 text-pink-600" />
                <Label>Or Pay with Card</Label>
              </div>
              <div className="space-y-4">
                <Input placeholder="Card Number" className="border-pink-200" />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="MM/YY" className="border-pink-200" />
                  <Input placeholder="CVV" className="border-pink-200" type="password" maxLength={3} />
                </div>
                <Button className="bg-pink-500 hover:bg-pink-600 text-white w-full">
                  Pay Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
