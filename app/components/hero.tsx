import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-pink-100 to-pink-200 py-20 text-center">
      <h1 className="mb-4 text-4xl font-bold text-pink-800">Welcome to SAAHSP</h1>
      <p className="mb-8 text-xl text-pink-600">South African Association of Health and Skincare Professionals</p>
      <Button className="bg-pink-500 hover:bg-pink-600 text-white">Join Now</Button>
    </div>
  )
}

