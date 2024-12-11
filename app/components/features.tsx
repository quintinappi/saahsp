import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      title: "Member Management",
      description: "Easy-to-use branded registration system and on-boarding portal."
    },
    {
      title: "CPD Exam Facilitation",
      description: "Access to exam modules and automated exam scheduling."
    },
    {
      title: "Continuing Education",
      description: "Recommendations for courses based on industry trends."
    },
    {
      title: "SETA Training System",
      description: "Personalized learning paths and virtual training assistants."
    }
  ]

  return (
    <div className="py-20 px-4">
      <h2 className="mb-12 text-3xl font-bold text-center text-pink-800">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="bg-white border-pink-200">
            <CardHeader>
              <CardTitle className="text-pink-600">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-pink-700">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

