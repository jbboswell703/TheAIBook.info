import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { agentTools } from "@/lib/data"

export default function AgentToolsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold mb-4 text-primary">AI Agents and Automation Workflows</h1>
          <p className="text-gray-700 max-w-3xl">
            Tools and frameworks for building AI agents and automating complex workflows to enhance productivity and
            solve problems.
          </p>
        </div>

        <div className="space-y-6">
          {agentTools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row items-start md:items-center"
            >
              <div className="relative w-16 h-16 rounded-md overflow-hidden mb-4 md:mb-0 md:mr-6">
                <Image src={tool.logo || "/placeholder.svg"} alt={`${tool.name} logo`} fill className="object-cover" />
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
                >
                  Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
