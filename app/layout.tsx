import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { SidebarProvider } from "./components/ui/sidebar"
import { AppSidebar } from './components/app-sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SAAHSP Dashboard',
  description: 'South African Association of Health and Skincare Professionals Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="min-h-screen bg-gray-50">
            <AppSidebar />
            <main className="p-4 sm:ml-64">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
