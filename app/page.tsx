"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Users, BookOpen, Calendar, Award } from 'lucide-react'
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./components/ui/chart"
import { PageHeader } from "./components/PageHeader"

const membershipData = [
  { month: "Jan", members: 180 },
  { month: "Feb", members: 200 },
  { month: "Mar", members: 230 },
  { month: "Apr", members: 245 },
  { month: "May", members: 255 },
  { month: "Jun", members: 260 }
]

const examsData = [
  { month: "Jan", exams: 5 },
  { month: "Feb", exams: 8 },
  { month: "Mar", exams: 12 },
  { month: "Apr", exams: 10 },
  { month: "May", exams: 15 },
  { month: "Jun", exams: 20 }
]

export default function Dashboard() {
  return (
    <div className="container mx-auto py-10">
      <PageHeader title="Welcome to SAAHSP Dashboard" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-pink-600">Total Members</CardTitle>
            <Users className="h-4 w-4 text-pink-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-pink-800">1,234</div>
          </CardContent>
        </Card>
        <Card className="bg-white border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-pink-600">Upcoming Exams</CardTitle>
            <BookOpen className="h-4 w-4 text-pink-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-pink-800">5</div>
          </CardContent>
        </Card>
        <Card className="bg-white border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-pink-600">Scheduled Events</CardTitle>
            <Calendar className="h-4 w-4 text-pink-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-pink-800">3</div>
          </CardContent>
        </Card>
        <Card className="bg-white border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-pink-600">Certifications Issued</CardTitle>
            <Award className="h-4 w-4 text-pink-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-pink-800">789</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 mt-4">
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
                  <Line
                    type="monotone"
                    dataKey="members"
                    stroke="#DB2777"
                    strokeWidth={2}
                    dot={{ fill: "#DB2777", r: 4 }}
                    activeDot={{ r: 6 }}
                  />
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
                <BarChart data={examsData}>
                  <XAxis dataKey="month" stroke="#FDA4AF" />
                  <YAxis stroke="#FDA4AF" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="exams" fill="#DB2777" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
