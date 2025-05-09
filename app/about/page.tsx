import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-primary">About The AI Book</h1>

          <div className="prose prose-lg">
            <p className="text-gray-700">
              The AI Book is a comprehensive resource designed to help you discover the best AI tools for your specific
              needs. Our mission is to make AI tools more accessible and easier to find, so you can enhance your
              productivity, creativity, and workflow.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">Our Mission</h2>
            <p className="text-gray-700">
              In the rapidly evolving landscape of artificial intelligence, finding the right tools can be overwhelming.
              AI Tools Directory aims to simplify this process by curating and categorizing the best AI tools available,
              providing clear descriptions and direct links to help you make informed decisions.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">How We Select Tools</h2>
            <p className="text-gray-700">
              Our team carefully evaluates each tool based on functionality, user experience, reliability, and value. We
              regularly update our directory to ensure we're featuring the most current and effective AI solutions
              across various categories.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">Contact Us</h2>
            <p className="text-gray-700">
              Have suggestions for tools we should include? Questions about our directory? We'd love to hear from you!
              Please reach out to us at{" "}
              <a href="mailto:theaibook.directory@gmail.com" className="text-primary hover:text-primary/80">
                theaibook.directory@gmail.com
              </a>
              .
            </p>
          </div>
        </div>

        {/* Ad Space */}
        <div className="max-w-3xl mx-auto bg-secondary/20 border border-secondary/30 rounded-lg p-4 mt-8 text-center">
          <p className="text-gray-500 text-sm">Advertisement Space</p>
        </div>
      </div>
    </div>
  )
}
