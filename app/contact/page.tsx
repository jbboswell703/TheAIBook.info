import Link from "next/link"
import { ArrowLeft, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-primary">Contact Us</h1>

          <p className="text-gray-700 mb-8">
            Have questions, suggestions, or feedback? We'd love to hear from you! Fill out the form below or reach out
            to us directly.
          </p>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <Button type="submit">Send Message</Button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-lg font-semibold">Email Us</h2>
              </div>
              <p className="text-gray-700 mb-2">For general inquiries:</p>
              <a href="mailto:theaibook.directory@gmail.com" className="text-primary hover:text-primary/80">
                info@theaibook.com
              </a>
              <p className="text-gray-700 mt-4 mb-2">For tool submissions:</p>
              <a href="mailto:theaibook.directtory@gmail.com" className="text-primary hover:text-primary/80">
                submit@theaibook.com
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-lg font-semibold">Connect With Us</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Follow us on social media for the latest updates on new AI tools and features.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80">
                  Twitter
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  LinkedIn
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  Facebook
                </a>
              </div>
            </div>
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
