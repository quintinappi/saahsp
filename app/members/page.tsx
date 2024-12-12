"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { PageHeader } from "../components/PageHeader"

const members = [
  { id: 1, name: "Jane Doe", email: "jane@example.com", status: "Active" },
  { id: 2, name: "John Smith", email: "john@example.com", status: "Pending" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", status: "Active" },
  { id: 4, name: "Bob Williams", email: "bob@example.com", status: "Inactive" },
]

const memberStatusData = [
  { name: "Active", value: 65 },
  { name: "Pending", value: 25 },
  { name: "Inactive", value: 10 },
]

const COLORS = ['#FF9999', '#FFD699', '#99FF99']

export default function MembersPage() {
  return (
    <div className="container mx-auto py-10">
      <PageHeader title="Members" />
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-white border-pink-200 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-pink-800">Member List</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-pink-600">Name</TableHead>
                    <TableHead className="text-pink-600">Email</TableHead>
                    <TableHead className="text-pink-600">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {members.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium text-pink-700">{member.name}</TableCell>
                      <TableCell className="text-pink-700">{member.email}</TableCell>
                      <TableCell className="text-pink-700">{member.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="bg-white border-pink-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-pink-800">Member Status</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={memberStatusData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {memberStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        background: "#fff",
                        border: "1px solid #FDA4AF",
                        borderRadius: "8px"
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-4">
                {memberStatusData.map((entry, index) => (
                  <div key={entry.name} className="flex items-center mt-2">
                    <div className="w-4 h-4 mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                    <span className="text-pink-700">{entry.name}: {entry.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
