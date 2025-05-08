import type { LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: keyof typeof LucideIcons
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const Icon = LucideIcons[icon] as LucideIcon

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
