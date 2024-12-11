"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PageHeader } from "@/components/PageHeader"

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
  return (
    <div className="container mx-auto py-10">
      <PageHeader title="CPD Exams" />
      <div className="space-y-6">
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
                      <TableCell className="text-pink-700">{exam.date}</TableCell>
                      <TableCell className="text-pink-700">{exam.status}</TableCell>
                      <TableCell className="text-pink-700">{exam.registrations}</TableCell>
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
              <ChartContainer
                config={{
                  registrations: {
                    label: "Registrations",
                    color: "#DB2777",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={registrationData}>
                    <XAxis dataKey="exam" stroke="#FDA4AF" />
                    <YAxis stroke="#FDA4AF" />
                    <ChartTooltip content={<ChartTooltipContent />} />
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
