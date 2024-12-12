"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Users, BookOpen, Calendar, Award } from 'lucide-react'
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { ChartContainer } from "./components/ui/chart"
import { PageHeader } from "./components/PageHeader"
import { AnimatedNumber } from "@/components/ui/animated-number"

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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <Card className="bg-white border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-pink-600">Total Members</CardTitle>
            <Users className="h-4 w-4 text-pink-600" />
          </CardHeader>
          <CardContent>
            <AnimatedNumber 
              end={1234} 
              className="text-4xl font-bold text-pink-800" 
            />
          </CardContent>
        </Card>
        <Card className="bg-white border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-pink-600">Upcoming Exams</CardTitle>
            <BookOpen className="h-4 w-4 text-pink-600" />
          </CardHeader>
          <CardContent>
            <AnimatedNumber 
              end={5} 
              className="text-4xl font-bold text-pink-800" 
            />
          </CardContent>
        </Card>
        <Card className="bg-white border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-pink-600">Scheduled Events</CardTitle>
            <Calendar className="h-4 w-4 text-pink-600" />
          </CardHeader>
          <CardContent>
            <AnimatedNumber 
              end={3} 
              className="text-4xl font-bold text-pink-800" 
            />
          </CardContent>
        </Card>
        <Card className="bg-white border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-pink-600">Certifications Issued</CardTitle>
            <Award className="h-4 w-4 text-pink-600" />
          </CardHeader>
          <CardContent>
            <AnimatedNumber 
              end={789} 
              className="text-4xl font-bold text-pink-800" 
            />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 mt-4">
        <Card className="bg-white border-pink-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-pink-800">Membership Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={membershipData}>
                  <XAxis dataKey="month" stroke="#FDA4AF" />
                  <YAxis stroke="#FDA4AF" />
                  <Tooltip 
                    contentStyle={{ 
                      background: "#fff",
                      border: "1px solid #FDA4AF",
                      borderRadius: "8px"
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="members"
                    stroke="#DB2777"
                    strokeWidth={2}
                    dot={false}
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
            <ChartContainer className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={examsData}>
                  <XAxis dataKey="month" stroke="#FDA4AF" />
                  <YAxis stroke="#FDA4AF" />
                  <Tooltip 
                    contentStyle={{ 
                      background: "#fff",
                      border: "1px solid #FDA4AF",
                      borderRadius: "8px"
                    }}
                  />
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
