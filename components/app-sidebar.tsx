"use client"

import { Home, Users, BookOpen, Calendar, Settings, CreditCard, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarToggle,
  SidebarFooter
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const router = useRouter()

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (isMobileOpen) {
        const sidebar = document.querySelector('[data-sidebar]')
        const toggle = document.querySelector('[data-sidebar-toggle]')
        if (
          sidebar &&
          toggle &&
          !sidebar.contains(event.target as Node) &&
          !toggle.contains(event.target as Node)
        ) {
          setIsMobileOpen(false)
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [isMobileOpen])

  const handleNavigation = (href: string) => {
    setIsMobileOpen(false)
    router.push(href)
  }

  return (
    <>
      <SidebarToggle 
        onClick={() => setIsMobileOpen(!isMobileOpen)} 
        data-sidebar-toggle
      />
      <Sidebar 
        className="border-r border-pink-200" 
        isMobileOpen={isMobileOpen}
        data-sidebar
      >
        <SidebarHeader className="p-4">
          <h1 className="text-2xl font-bold text-pink-800">SAAHSP</h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/" onClick={() => handleNavigation("/")}>
                  <Home className="mr-2" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/members" onClick={() => handleNavigation("/members")}>
                  <Users className="mr-2" />
                  <span>Members</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/exams" onClick={() => handleNavigation("/exams")}>
                  <BookOpen className="mr-2" />
                  <span>CPD Exams</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/events" onClick={() => handleNavigation("/events")}>
                  <Calendar className="mr-2" />
                  <span>Events</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/booking" onClick={() => handleNavigation("/booking")}>
                  <CreditCard className="mr-2" />
                  <span>Booking & Payment</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/training" onClick={() => handleNavigation("/training")}>
                  <GraduationCap className="mr-2" />
                  <span>Training</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/settings" onClick={() => handleNavigation("/settings")}>
                  <Settings className="mr-2" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <p className="text-sm text-pink-600"> 2024 SAAHSP</p>
        </SidebarFooter>
      </Sidebar>
    </>
  )
}
