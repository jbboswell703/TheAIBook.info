import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ToolCardProps {
  name: string
  description: string
  logo: string
  website: string
}

export default function ToolCard({ name, description, logo, website }: ToolCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-4">
          <div className="relative w-12 h-12 mr-4 rounded-md overflow-hidden bg-gray-100">
            <Image
              src={logo || "/placeholder.svg?height=48&width=48"}
              alt={`${name} logo`}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="p-4 pt-0">
        <a href={website} target="_blank" rel="noopener noreferrer">
          <Button className="w-full">
            Visit Tool <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  )
}
