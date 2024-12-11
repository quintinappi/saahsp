"use client"

import Image from "next/image"
import logo from "@/public/logo.png"

interface PageHeaderProps {
  title: string
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="relative w-[60px] h-[60px] flex-shrink-0">
        <Image
          src={logo}
          alt="SAAHSP Logo"
          placeholder="blur"
          quality={100}
          priority
          className="object-contain"
          fill
        />
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  )
}
