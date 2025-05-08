export interface Tool {
  id: string
  name: string
  description: string
  logo: string
  website: string
  categories: string[]
}

export interface Category {
  name: string
  slug: string
  description: string
}

export interface SearchResult {
  categorySlug: string | null
  confidence: number
}
