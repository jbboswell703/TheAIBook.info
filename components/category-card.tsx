import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CategoryCardProps {
  title: string
  description: string
  slug: string
  count: number
}

export default function CategoryCard({ title, description, slug, count }: CategoryCardProps) {
  return (
    <Link href={`/categories/${slug}`}>
      <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
        <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{count} tools</span>
          <span className="text-primary flex items-center text-sm font-medium">
            Explore <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}
