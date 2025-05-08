import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-primary/10">
      <Quote className="h-8 w-8 text-primary/30 mb-4" />
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
          <span className="text-primary font-medium text-sm">
            {author
              .split(" ")
              .map((name) => name[0])
              .join("")}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{author}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  )
}
