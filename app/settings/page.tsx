"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { PageHeader } from "@/components/PageHeader"

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-10">
      <PageHeader title="Settings" />
      <div className="space-y-6">
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
              <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                Save Changes
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-pink-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-pink-800">Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications" className="text-pink-800">Email Notifications</Label>
                <Switch 
                  id="email-notifications" 
                  defaultChecked 
                  className="data-[state=checked]:bg-pink-600 data-[state=unchecked]:bg-pink-200"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="exam-reminders" className="text-pink-800">Exam Reminders</Label>
                <Switch 
                  id="exam-reminders" 
                  defaultChecked 
                  className="data-[state=checked]:bg-pink-600 data-[state=unchecked]:bg-pink-200"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="event-updates" className="text-pink-800">Event Updates</Label>
                <Switch 
                  id="event-updates" 
                  defaultChecked 
                  className="data-[state=checked]:bg-pink-600 data-[state=unchecked]:bg-pink-200"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="member-alerts" className="text-pink-800">Member Alerts</Label>
                <Switch 
                  id="member-alerts" 
                  defaultChecked 
                  className="data-[state=checked]:bg-pink-600 data-[state=unchecked]:bg-pink-200"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-pink-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-pink-800">System Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode" className="text-pink-800">Dark Mode</Label>
                <Switch 
                  id="dark-mode" 
                  className="data-[state=checked]:bg-pink-600 data-[state=unchecked]:bg-pink-200"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="analytics" className="text-pink-800">Analytics Tracking</Label>
                <Switch 
                  id="analytics" 
                  defaultChecked 
                  className="data-[state=checked]:bg-pink-600 data-[state=unchecked]:bg-pink-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language" className="text-pink-800">Language</Label>
                <select id="language" className="w-full border rounded-md p-2 border-pink-200 text-pink-800">
                  <option>English</option>
                  <option>Afrikaans</option>
                  <option>Zulu</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
