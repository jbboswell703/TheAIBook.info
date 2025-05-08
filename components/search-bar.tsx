"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SearchBar() {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", query)
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-3xl mx-auto relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-500" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for AI tools, categories, or capabilities..."
        className="w-full pl-12 pr-24 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
      />
      <Button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
        Search
      </Button>
    </form>
  )
}
