import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAllTools } from "@/lib/data"

export default function AllToolsPage() {
  const allTools = getAllTools()

  // Sort tools alphabetically by name
  const sortedTools = [...allTools].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold mb-4 text-primary">All AI Tools</h1>
          <p className="text-gray-700 max-w-3xl">
            Browse our complete directory of AI tools, organized alphabetically for easy reference.
          </p>
        </div>

        {/* Ad Space */}
        <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-4 mb-8 text-center">
          <p className="text-gray-500 text-sm">Advertisement Space</p>
        </div>

        {/* Simple Vertical List */}
        <div className="space-y-4">
          {sortedTools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6 flex items-start md:items-center">
                <div className="relative w-12 h-12 mr-4 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src={tool.logo || "/placeholder.svg?height=48&width=48"}
                    alt={`${tool.name} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{tool.name}</h3>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a href={tool.website} target="_blank" rel="noopener noreferrer">
                    <Button>
                      Visit Tool <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ad Space */}
        <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-4 mt-8 text-center">
          <p className="text-gray-500 text-sm">Advertisement Space</p>
        </div>
      </div>
    </div>
  )
}
