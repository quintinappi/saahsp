"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { PageHeader } from "@/components/PageHeader"
import { useState } from "react"
import { AnimatedNumber } from "@/components/ui/animated-number"
import { CalendarDays, MapPin, Users, Clock } from "lucide-react"
import { format } from "date-fns"

interface Event {
  id: number
  title: string
  date: string
  location: string
  description: string
  attendees: number
}

const events: Event[] = [
  {
    id: 1,
    title: "Annual SAAHSP Conference",
    date: "2024-03-15",
    location: "Cape Town International Convention Centre",
    description: "Join us for the largest gathering of health and skincare professionals in South Africa.",
    attendees: 250
  },
  {
    id: 2,
    title: "Skincare Innovation Workshop",
    date: "2024-02-20",
    location: "Johannesburg Business Centre",
    description: "Learn about the latest innovations in skincare technology and treatments.",
    attendees: 120
  },
  {
    id: 3,
    title: "Beauty Industry Networking Event",
    date: "2024-04-10",
    location: "Durban Beachfront Hotel",
    description: "Network with industry leaders and discover new opportunities in the beauty sector.",
    attendees: 180
  }
]

export default function EventsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  
  const totalAttendees = events.reduce((sum, event) => sum + event.attendees, 0)
  const upcomingEvents = events.length
  const nextEventDate = new Date(Math.min(...events.map(e => new Date(e.date).getTime())))
  const daysUntilNextEvent = Math.ceil((nextEventDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))

  return (
    <div className="container mx-auto py-10">
      <PageHeader title="Events Calendar" />
      <div className="space-y-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-white border-pink-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-pink-600">Total Attendees</CardTitle>
              <Users className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent>
              <AnimatedNumber 
                end={totalAttendees} 
                className="text-2xl font-bold text-pink-800" 
              />
            </CardContent>
          </Card>
          
          <Card className="bg-white border-pink-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-pink-600">Upcoming Events</CardTitle>
              <CalendarDays className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent>
              <AnimatedNumber 
                end={upcomingEvents} 
                className="text-2xl font-bold text-pink-800" 
              />
            </CardContent>
          </Card>

          <Card className="bg-white border-pink-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-pink-600">Days Until Next Event</CardTitle>
              <Clock className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent>
              <AnimatedNumber 
                end={daysUntilNextEvent} 
                suffix=" days"
                className="text-2xl font-bold text-pink-800" 
              />
            </CardContent>
          </Card>

          <Card className="bg-white border-pink-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-pink-600">Average Attendance</CardTitle>
              <Users className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent>
              <AnimatedNumber 
                end={Math.round(totalAttendees / events.length)} 
                className="text-2xl font-bold text-pink-800" 
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white border-pink-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-pink-800">Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border border-pink-200"
              />
            </CardContent>
          </Card>

          <div className="space-y-4">
            {events.map((event) => (
              <Card key={event.id} className="bg-white border-pink-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-pink-700">{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-pink-600">
                    <CalendarDays className="h-4 w-4" />
                    {format(new Date(event.date), 'MMMM d, yyyy')}
                  </CardDescription>
                  <CardDescription className="flex items-center gap-2 text-pink-600">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </CardDescription>
                  <CardDescription className="flex items-center gap-2 text-pink-600">
                    <Users className="h-4 w-4" />
                    <AnimatedNumber end={event.attendees} /> attendees
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-pink-700">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
