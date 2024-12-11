"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card"
import { Calendar } from "../components/ui/calendar"

const events = [
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
    title: "Professional Development Seminar",
    date: "2024-04-05",
    location: "Durban Beachfront Hotel",
    description: "Enhance your professional skills with our expert-led seminar."
  }
]

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-pink-800">Events</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border-pink-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-pink-800">Event Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar 
              mode="single"
              className="rounded-md border border-pink-200"
            />
          </CardContent>
        </Card>

        <Card className="bg-white border-pink-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-pink-800">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {events.map((event) => (
              <Card key={event.id} className="border-pink-200">
                <CardHeader>
                  <CardTitle className="text-lg text-pink-700">{event.title}</CardTitle>
                  <CardDescription className="text-pink-600">
                    {event.date} - {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-pink-700">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
