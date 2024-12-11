import { Home, Users, BookOpen, Calendar, Settings, CreditCard, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-pink-200">
      <SidebarHeader className="p-4">
        <h1 className="text-2xl font-bold text-pink-800">SAAHSP</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Home className="mr-2" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/members">
                <Users className="mr-2" />
                <span>Members</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/exams">
                <BookOpen className="mr-2" />
                <span>CPD Exams</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/events">
                <Calendar className="mr-2" />
                <span>Events</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/booking">
                <CreditCard className="mr-2" />
                <span>Booking & Payment</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/training">
                <GraduationCap className="mr-2" />
                <span>Training</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/settings">
                <Settings className="mr-2" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <p className="text-sm text-pink-600">© 2024 SAAHSP</p>
      </SidebarFooter>
    </Sidebar>
  )
}

