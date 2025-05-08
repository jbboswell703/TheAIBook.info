import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ToolCard from "@/components/tool-card"

interface Tool {
  name: string
  description: string
  logo: string
  website: string
}

interface CategorySectionProps {
  title: string
  slug: string
  tools: Tool[]
}

export default function CategorySection({ title, slug, tools }: CategorySectionProps) {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">{title}</h2>
          <Link href={`/categories/${slug}`}>
            <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5">
              Explore More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
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
      </div>
    </section>
  )
}
