import Link from "next/link"
import { ArrowRight } from "lucide-react"
import CategoryCard from "@/components/category-card"
import { categories, getToolCount } from "@/lib/data"

export default function Home() {
  // Featured categories
  const featuredCategories = ["agent-builders", "workflow-automation"]
  const regularCategories = categories.filter((cat) => !featuredCategories.includes(cat.slug))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6 text-primary">Discover the Best AI Tools</h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">
            Your comprehensive directory of AI tools to enhance productivity, creativity, and workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/all-tools">
              <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Browse All Tools
              </button>
            </Link>
            <Link href="/categories">
              <button className="bg-white text-primary border border-primary px-6 py-3 rounded-md font-medium hover:bg-primary/5 transition-colors">
                Explore Categories
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-primary">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories
              .filter((cat) => featuredCategories.includes(cat.slug))
              .map((category) => (
                <CategoryCard
                  key={category.slug}
                  title={category.title}
                  description={category.description}
                  slug={category.slug}
                  count={getToolCount(category.slug)}
                />
              ))}
          </div>
        </div>
      </section>

      {/* All Categories Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-primary">All Categories</h2>
            <Link href="/categories" className="text-primary flex items-center hover:underline">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularCategories.map((category) => (
              <CategoryCard
                key={category.slug}
                title={category.title}
                description={category.description}
                slug={category.slug}
                count={getToolCount(category.slug)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
