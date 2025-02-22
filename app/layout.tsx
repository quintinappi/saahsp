import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { Sidebar } from './components/Sidebar'

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
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
