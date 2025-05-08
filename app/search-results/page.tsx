import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAllTools, categories } from "@/lib/data"

interface SearchResultsPageProps {
  searchParams: { query?: string }
}

export default function SearchResultsPage({ searchParams }: SearchResultsPageProps) {
  const query = searchParams.query || ""
  const allTools = getAllTools()

  // Filter tools based on the search query
  const filteredTools = allTools.filter((tool) => {
    // Check if tool name or description matches
    const nameDescMatch =
      tool.name.toLowerCase().includes(query.toLowerCase()) ||
      tool.description.toLowerCase().includes(query.toLowerCase())

    return nameDescMatch
  })

  // Group tools by category for better organization
  const toolsByCategory: Record<string, typeof allTools> = {}

  filteredTools.forEach((tool) => {
    // Find which categories this tool belongs to
    categories.forEach((category) => {
      const categoryTools = getCategoryTools(category.slug)
      const toolInCategory = categoryTools.some((catTool) => catTool.name === tool.name)

      if (toolInCategory) {
        if (!toolsByCategory[category.slug]) {
          toolsByCategory[category.slug] = []
        }

        // Avoid duplicates
        if (!toolsByCategory[category.slug].some((t) => t.name === tool.name)) {
          toolsByCategory[category.slug].push(tool)
        }
      }
    })
  })

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Search Results for "{query}"</h1>
        <p className="text-slate-600 max-w-3xl">
          {filteredTools.length > 0
            ? `Found ${filteredTools.length} tools matching your search.`
            : "No tools found matching your search. Try a different query or browse all tools."}
        </p>
      </div>

      {Object.entries(toolsByCategory).length > 0 ? (
        <div className="space-y-10">
          {Object.entries(toolsByCategory).map(([catSlug, tools]) => {
            const category = categories.find((c) => c.slug === catSlug)
            if (!category) return null

            return (
              <div key={catSlug} className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
                <div className="space-y-4">
                  {tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-start md:items-center justify-between p-4 border rounded-lg hover:shadow-sm transition-shadow bg-white"
                    >
                      <div className="flex items-start md:items-center flex-1">
                        <div className="relative w-12 h-12 rounded-md overflow-hidden mr-4 flex-shrink-0">
                          <Image
                            src={tool.logo || "/placeholder.svg?height=48&width=48"}
                            alt={`${tool.name} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{tool.name}</h3>
                          <p className="text-slate-600 text-sm mt-1">{tool.description}</p>
                        </div>
                      </div>
                      <a href={tool.website} target="_blank" rel="noopener noreferrer" className="ml-4 flex-shrink-0">
                        <Button>
                          Visit <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-12 border rounded-lg bg-secondary/20">
          <p className="text-slate-600 mb-6">No tools found matching your search criteria.</p>
          <Link href="/all-tools">
            <Button className="bg-primary hover:bg-primary/90">Browse All Tools</Button>
          </Link>
        </div>
      )}
    </main>
  )
}

// Helper function to get tools for a specific category
function getCategoryTools(slug: string) {
  // Import here to avoid circular dependency
  const { tools } = require("@/lib/data")
  return tools[slug] || []
}
