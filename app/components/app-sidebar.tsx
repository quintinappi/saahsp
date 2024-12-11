"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useSidebar } from './ui/sidebar'
import { Users, BookOpen, Calendar, Award, Settings } from 'lucide-react'

export function AppSidebar() {
  const { isOpen } = useSidebar()

  return (
    <aside className={`fixed left-0 top-0 z-40 h-screen transition-transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } w-64 bg-white border-r border-gray-200`}>
      <div className="h-full px-3 py-4 overflow-y-auto">
        <div className="mb-5 flex justify-center">
          <Image
            src="/logo.png"
            alt="SAAHSP Logo"
            width={150}
            height={60}
            priority
            className="object-contain"
          />
        </div>
        <ul className="space-y-2 font-medium">
          <li>
            <Link href="/" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <Users className="w-6 h-6" />
              <span className="ml-3">Members</span>
            </Link>
          </li>
          <li>
            <Link href="/training" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <BookOpen className="w-6 h-6" />
              <span className="ml-3">Training</span>
            </Link>
          </li>
          <li>
            <Link href="/events" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <Calendar className="w-6 h-6" />
              <span className="ml-3">Events</span>
            </Link>
          </li>
          <li>
            <Link href="/exams" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <Award className="w-6 h-6" />
              <span className="ml-3">Exams</span>
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <Settings className="w-6 h-6" />
              <span className="ml-3">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}
