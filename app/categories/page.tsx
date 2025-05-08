import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import CategoryCard from "@/components/category-card"
import { categories, getToolCount } from "@/lib/data"

export default function CategoriesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold mb-4 text-primary">All Categories</h1>
          <p className="text-gray-700 max-w-3xl">
            Browse our categories to find the perfect AI tools for your specific needs.
          </p>
        </div>

        {/* Ad Space */}
        <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-4 mb-8 text-center">
          <p className="text-gray-500 text-sm">Advertisement Space</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              title={category.title}
              description={category.description}
              slug={category.slug}
              count={getToolCount(category.slug)}
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
