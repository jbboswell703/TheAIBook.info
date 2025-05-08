"use server"

type SearchResult = {
  categorySlug: string | null
}

export async function processSearchQuery(query: string): Promise<SearchResult> {
  // Use keyword matching approach
  return keywordBasedCategoryMatch(query)
}

// Function that uses keyword matching to find the most relevant category
function keywordBasedCategoryMatch(query: string): SearchResult {
  const queryLower = query.toLowerCase()

  // Define keywords for each category
  const categoryKeywords: Record<string, string[]> = {
    "content-creation": [
      "content",
      "writing",
      "blog",
      "article",
      "text",
      "copy",
      "write",
      "content creation",
      "copywriting",
      "writer",
      "essay",
      "story",
    ],
    "image-generation": [
      "image",
      "art",
      "picture",
      "photo",
      "drawing",
      "illustration",
      "design",
      "generate image",
      "create image",
      "artwork",
      "graphic",
      "visual",
    ],
    coding: [
      "code",
      "programming",
      "developer",
      "development",
      "software",
      "app",
      "application",
      "website",
      "coding",
      "program",
      "javascript",
      "python",
    ],
    chatbots: [
      "chat",
      "chatbot",
      "conversation",
      "support",
      "customer service",
      "assistant",
      "help",
      "messaging",
      "bot",
      "virtual assistant",
    ],
    "video-audio": [
      "video",
      "audio",
      "sound",
      "music",
      "voice",
      "podcast",
      "recording",
      "edit",
      "editing",
      "movie",
      "film",
      "soundtrack",
      "voiceover",
    ],
    productivity: [
      "productivity",
      "workflow",
      "automation",
      "efficient",
      "organize",
      "task",
      "management",
      "time",
      "schedule",
      "planner",
      "calendar",
    ],
    education: [
      "education",
      "learn",
      "teaching",
      "study",
      "student",
      "course",
      "tutor",
      "school",
      "academic",
      "learning",
      "teacher",
      "classroom",
    ],
    research: [
      "research",
      "data",
      "analysis",
      "paper",
      "study",
      "academic",
      "science",
      "scientific",
      "information",
      "statistics",
      "analytics",
    ],
    business: [
      "business",
      "marketing",
      "sales",
      "customer",
      "client",
      "lead",
      "analytics",
      "market",
      "company",
      "startup",
      "entrepreneur",
      "brand",
    ],
    design: [
      "design",
      "ui",
      "ux",
      "interface",
      "graphic",
      "layout",
      "web design",
      "product design",
      "visual",
      "wireframe",
      "prototype",
      "user experience",
    ],
    "agent-builders": [
      "agent",
      "automation",
      "workflow",
      "bot",
      "autonomous",
      "automate",
      "build agent",
      "create agent",
      "ai agent",
      "workflow automation",
    ],
    "workflow-automation": [
      "workflow",
      "automation",
      "automate",
      "process",
      "task",
      "integration",
      "connect",
      "zapier",
      "make",
      "n8n",
      "workflow automation",
      "automated workflow",
    ],
  }

  // Score each category based on keyword matches
  const scores: Record<string, number> = {}

  for (const [categorySlug, keywords] of Object.entries(categoryKeywords)) {
    scores[categorySlug] = 0

    for (const keyword of keywords) {
      if (queryLower.includes(keyword)) {
        scores[categorySlug] += 1
      }
    }
  }

  // Find the category with the highest score
  let bestCategory = null
  let highestScore = 0

  for (const [categorySlug, score] of Object.entries(scores)) {
    if (score > highestScore) {
      highestScore = score
      bestCategory = categorySlug
    }
  }

  // If no good match or very low confidence, return null
  if (highestScore === 0) {
    return {
      categorySlug: null,
    }
  }

  return {
    categorySlug: bestCategory,
  }
}
