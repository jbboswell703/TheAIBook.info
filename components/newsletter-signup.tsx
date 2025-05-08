import { Button } from "@/components/ui/button"

export default function NewsletterSignup() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
      <p className="text-white/90 max-w-2xl mx-auto mb-8">
        Subscribe to our newsletter to receive the latest updates, tips, and special offers.
      </p>
      <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-md focus:outline-none text-gray-800"
        />
        <Button className="bg-primary hover:bg-primary/90 text-white whitespace-nowrap">Subscribe</Button>
      </div>
    </div>
  )
}
