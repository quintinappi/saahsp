"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { PageHeader } from "@/components/PageHeader"
import { useState } from "react"

interface Event {
  id: number
  title: string
  date: string
  location: string
  description: string
}

const events: Event[] = [
  {
    id: 1,
    title: "Annual SAAHSP Conference",
    date: "2024-03-15",
    location: "Cape Town International Convention Centre",
    description: "Join us for the largest gathering of health and skincare professionals in South Africa."
  },
  {
    id: 2,
    title: "Skincare Innovation Workshop",
    date: "2024-02-20",
    location: "Johannesburg Business Centre",
    description: "Learn about the latest innovations in skincare technology and treatments."
  },
  {
    id: 3,
    title: "Beauty Industry Networking Event",
    date: "2024-04-10",
    location: "Durban Beachfront Hotel",
    description: "Network with industry leaders and discover new opportunities in the beauty sector."
  }
]

export default function EventsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container mx-auto py-10">
      <PageHeader title="Events Calendar" />
      <div className="space-y-6">
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
                  <CardDescription className="text-pink-600">
                    {event.date} | {event.location}
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
