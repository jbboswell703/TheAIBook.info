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

interface AgentToolsSectionProps {
  tools: Tool[]
}

export default function AgentToolsSection({ tools }: AgentToolsSectionProps) {
  return (
    <section className="py-12 bg-accent/10 rounded-lg my-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-4">Build Your Own AI Agents and Automation Workflows</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Create powerful AI agents and automate complex workflows with these cutting-edge tools and frameworks.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.slice(0, 6).map((tool) => (
            <ToolCard
              key={tool.name}
              name={tool.name}
              description={tool.description}
              logo={tool.logo}
              website={tool.website}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/categories/agent-tools">
            <Button variant="accent">
              View All Agent Tools <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
