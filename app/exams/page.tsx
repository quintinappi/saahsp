"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { PageHeader } from "@/components/PageHeader"
import { AnimatedNumber } from "@/components/ui/animated-number"
import { BookOpen, Users, Award, Calendar } from "lucide-react"

const exams = [
  { id: 1, title: "Advanced Skincare Techniques", date: "2024-01-15", status: "Upcoming", registrations: 25 },
  { id: 2, title: "Facial Treatment Specialist", date: "2024-01-20", status: "Open", registrations: 18 },
  { id: 3, title: "Body Treatment Professional", date: "2024-02-01", status: "Upcoming", registrations: 30 },
  { id: 4, title: "Massage Therapy Advanced", date: "2024-02-15", status: "Draft", registrations: 0 },
]

const registrationData = [
  { exam: "AST", registrations: 25 },
  { exam: "FTS", registrations: 18 },
  { exam: "BTP", registrations: 30 },
  { exam: "MTA", registrations: 0 },
]

export default function ExamsPage() {
  const totalRegistrations = exams.reduce((sum, exam) => sum + exam.registrations, 0)
  const upcomingExams = exams.filter(exam => exam.status === "Upcoming").length
  const openExams = exams.filter(exam => exam.status === "Open").length
  const draftExams = exams.filter(exam => exam.status === "Draft").length

  return (
    <div className="container mx-auto py-10">
      <PageHeader title="CPD Exams" />
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-white border-pink-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-pink-600">Total Registrations</CardTitle>
              <Users className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent>
              <AnimatedNumber 
                end={totalRegistrations} 
                className="text-2xl font-bold text-pink-800" 
              />
            </CardContent>
          </Card>
          <Card className="bg-white border-pink-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-pink-600">Upcoming Exams</CardTitle>
              <Calendar className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent>
              <AnimatedNumber 
                end={upcomingExams} 
                className="text-2xl font-bold text-pink-800" 
              />
            </CardContent>
          </Card>
          <Card className="bg-white border-pink-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-pink-600">Open Exams</CardTitle>
              <BookOpen className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent>
              <AnimatedNumber 
                end={openExams} 
                className="text-2xl font-bold text-pink-800" 
              />
            </CardContent>
          </Card>
          <Card className="bg-white border-pink-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-pink-600">Draft Exams</CardTitle>
              <Award className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent>
              <AnimatedNumber 
                end={draftExams} 
                className="text-2xl font-bold text-pink-800" 
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-white border-pink-200 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-pink-800">Upcoming Exams</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-pink-600">Title</TableHead>
                    <TableHead className="text-pink-600">Date</TableHead>
                    <TableHead className="text-pink-600">Status</TableHead>
                    <TableHead className="text-pink-600">Registrations</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exams.map((exam) => (
                    <TableRow key={exam.id}>
                      <TableCell className="font-medium text-pink-700">{exam.title}</TableCell>
                      <TableCell className="text-pink-700">{new Date(exam.date).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          exam.status === "Upcoming" ? "bg-yellow-100 text-yellow-800" :
                          exam.status === "Open" ? "bg-green-100 text-green-800" :
                          "bg-gray-100 text-gray-800"
                        }`}>
                          {exam.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-pink-700">
                        <AnimatedNumber end={exam.registrations} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="bg-white border-pink-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-pink-800">Registration Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={registrationData}>
                    <XAxis dataKey="exam" stroke="#FDA4AF" />
                    <YAxis stroke="#FDA4AF" />
                    <Tooltip 
                      contentStyle={{ 
                        background: "#fff",
                        border: "1px solid #FDA4AF",
                        borderRadius: "8px"
                      }}
                    />
                    <Bar dataKey="registrations" fill="#DB2777" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
