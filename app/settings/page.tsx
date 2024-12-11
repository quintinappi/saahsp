"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-pink-800">Settings</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border-pink-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-pink-800">Profile Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Admin User" className="border-pink-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="admin@saahsp.com" className="border-pink-200" />
            </div>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white border-pink-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-pink-800">Notification Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch id="email-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="exam-reminders">Exam Reminders</Label>
              <Switch id="exam-reminders" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="event-updates">Event Updates</Label>
              <Switch id="event-updates" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="member-alerts">Member Alerts</Label>
              <Switch id="member-alerts" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-pink-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-pink-800">System Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode">Dark Mode</Label>
              <Switch id="dark-mode" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="analytics">Analytics Tracking</Label>
              <Switch id="analytics" defaultChecked />
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <select id="language" className="w-full border rounded-md p-2 border-pink-200">
                <option>English</option>
                <option>Afrikaans</option>
                <option>Zulu</option>
              </select>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
