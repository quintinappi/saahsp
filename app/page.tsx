"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Users, BookOpen, Calendar, Award } from 'lucide-react'
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./components/ui/chart"

const membershipData = [
  { month: "Jan", members: 100 },
  { month: "Feb", members: 120 },
  { month: "Mar", members: 150 },
  { month: "Apr", members: 180 },
  { month: "May", members: 220 },
  { month: "Jun", members: 250 },
]

const examData = [
  { month: "Jan", exams: 5 },
  { month: "Feb", exams: 8 },
  { month: "Mar", exams: 12 },
  { month: "Apr", exams: 10 },
  { month: "May", exams: 15 },
  { month: "Jun", exams: 20 },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-pink-800">Welcome to SAAHSP Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-pink-600">Total Members</CardTitle>
            <Users className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-pink-800">1,234</div>
          </CardContent>
        </Card>
        <Card className="bg-white border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-pink-600">Upcoming Exams</CardTitle>
            <BookOpen className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-pink-800">5</div>
          </CardContent>
        </Card>
        <Card className="bg-white border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-pink-600">Scheduled Events</CardTitle>
            <Calendar className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-pink-800">3</div>
          </CardContent>
        </Card>
        <Card className="bg-white border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-pink-600">Certifications Issued</CardTitle>
            <Award className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-pink-800">789</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border-pink-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-pink-800">Membership Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                members: {
                  label: "Members",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={membershipData}>
                  <XAxis dataKey="month" stroke="#FDA4AF" />
                  <YAxis stroke="#FDA4AF" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="members" stroke="var(--color-members)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-white border-pink-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-pink-800">Exams Conducted</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                exams: {
                  label: "Exams",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={examData}>
                  <XAxis dataKey="month" stroke="#FDA4AF" />
                  <YAxis stroke="#FDA4AF" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="exams" fill="var(--color-exams)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white border-pink-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-pink-800">Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="text-pink-700">New member registration: Jane Doe</li>
            <li className="text-pink-700">Upcoming CPD exam: Advanced Skincare Techniques</li>
            <li className="text-pink-700">Event scheduled: Annual SAAHSP Conference</li>
            <li className="text-pink-700">Certification issued to: John Smith</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
