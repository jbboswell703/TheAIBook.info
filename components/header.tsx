"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Menu, Search, X } from "lucide-react"
import { categories } from "@/lib/data"
import { processSearchQuery } from "@/lib/actions"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const router = useRouter()

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!searchQuery.trim()) return

    setIsSearching(true)

    try {
      // Process the search query to find the most relevant category
      const result = await processSearchQuery(searchQuery)

      // Redirect based on the result
      if (result.categorySlug) {
        router.push(`/categories/${result.categorySlug}`)
      } else {
        // If no category matches, redirect to a search results page
        router.push(`/search-not-found?query=${encodeURIComponent(searchQuery)}`)
      }
    } catch (error) {
      console.error("Search error:", error)
    } finally {
      setIsSearching(false)
      setIsSearchOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-xl font-bold text-primary">
            The AI Book
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/all-tools" className="text-gray-700 hover:text-primary transition-colors">
              All Tools
            </Link>
            <Link href="/categories/agent-builders" className="text-gray-700 hover:text-primary transition-colors">
              AI Agent Builders
            </Link>
            <Link href="/categories/workflow-automation" className="text-gray-700 hover:text-primary transition-colors">
              Workflow Automation
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-700 hover:text-primary transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white border rounded-md shadow-lg p-2">
                  <form onSubmit={handleSearch}>
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for AI tools..."
                        className="flex-1 p-2 text-sm border-none focus:outline-none"
                        disabled={isSearching}
                      />
                      {searchQuery && (
                        <button
                          type="button"
                          onClick={() => setSearchQuery("")}
                          className="p-1 text-gray-500 hover:text-gray-700"
                          aria-label="Clear search"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 mr-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden py-3 border-t">
            <form onSubmit={handleSearch}>
              <div className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for AI tools..."
                  className="flex-1 p-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  disabled={isSearching}
                />
                <button type="submit" className="p-2 ml-2 bg-primary text-white rounded-md" disabled={isSearching}>
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/all-tools"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                All Tools
              </Link>
              <Link
                href="/categories/agent-builders"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Agent Builders
              </Link>
              <Link
                href="/categories/workflow-automation"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Workflow Automation
              </Link>
              <div className="pt-2 border-t">
                <p className="text-sm font-medium text-gray-500 mb-2">Categories</p>
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/categories/${category.slug}`}
                    className="block py-2 text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
