import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ToolCard from "@/components/tool-card"
import { getCategoryBySlug, getCategoryTools } from "@/lib/data"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.category)
  const tools = getCategoryTools(params.category)

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold mb-4 text-primary">{category.title}</h1>
          <p className="text-gray-700 max-w-3xl">{category.description}</p>
        </div>

        {/* Ad Space */}
        <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-4 mb-8 text-center">
          <p className="text-gray-500 text-sm">Advertisement Space</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.name}
              name={tool.name}
              description={tool.description}
              logo={tool.logo}
              website={tool.website}
            />
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
