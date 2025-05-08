import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SearchNotFoundPageProps {
  searchParams: { query?: string }
}

export default function SearchNotFoundPage({ searchParams }: SearchNotFoundPageProps) {
  const query = searchParams.query || ""

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold mb-4 text-primary">Search Not Found</h1>
          <p className="text-gray-700 max-w-3xl">
            We couldn't find any categories matching "{query}". Please try a different search or browse all tools.
          </p>
        </div>

        <div className="text-center py-16 border rounded-lg bg-secondary/20">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">No matching categories found</h2>
            <p className="text-gray-600 mb-8">
              Try searching for specific needs like "content writing", "image generation", or "coding assistance".
            </p>
            <Link href="/all-tools">
              <Button className="bg-primary hover:bg-primary/90 text-white">Browse All Tools</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
