"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Badge } from "../components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog"

const courses = [
  {
    id: 1,
    title: "Advanced Skincare Techniques",
    description: "Learn cutting-edge skincare techniques and technologies.",
    duration: "4 weeks",
    price: 2500,
    startDate: "2024-03-01",
    spots: 20,
  },
  {
    id: 2,
    title: "Holistic Massage Therapy",
    description: "Comprehensive training in various massage techniques and their health benefits.",
    duration: "6 weeks",
    price: 3500,
    startDate: "2024-04-15",
    spots: 15,
  },
  {
    id: 3,
    title: "Cosmetic Chemistry for Professionals",
    description: "Understand the science behind skincare products and formulations.",
    duration: "8 weeks",
    price: 4000,
    startDate: "2024-05-01",
    spots: 25,
  },
  {
    id: 4,
    title: "Business Management for Beauty Professionals",
    description: "Learn how to start and grow your own beauty business.",
    duration: "5 weeks",
    price: 3000,
    startDate: "2024-06-01",
    spots: 30,
  },
]

export default function TrainingPage() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-pink-800">Training Registration</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="bg-white border-pink-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-pink-700">{course.title}</CardTitle>
              <CardDescription className="text-pink-600">
                Duration: {course.duration} | Start Date: {course.startDate}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-pink-700 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                  {course.spots} spots left
                </Badge>
                <span className="font-bold text-pink-800">R{course.price}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                    onClick={() => setSelectedCourse(course)}
                  >
                    Register
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white">
                  <DialogHeader>
                    <DialogTitle className="text-pink-800">Register for {selectedCourse?.title}</DialogTitle>
                    <DialogDescription className="text-pink-600">
                      Please fill in your details to register for this course.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right text-pink-700">
                        Name
                      </Label>
                      <Input id="name" className="col-span-3 border-pink-200" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right text-pink-700">
                        Email
                      </Label>
                      <Input id="email" type="email" className="col-span-3 border-pink-200" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white">
                      Confirm Registration
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
