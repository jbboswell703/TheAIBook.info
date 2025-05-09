import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">The AI Book</h3>
            <p className="text-primary-foreground/80 text-sm">
              Your comprehensive resource for discovering the best AI tools for your needs.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories/content-creation" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="/categories/image-generation" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Image Generation
                </Link>
              </li>
              <li>
                <Link href="/categories/coding" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Coding Assistance
                </Link>
              </li>
              <li>
                <Link href="/categories/agent-builders" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  AI Agent Builders
                </Link>
              </li>
              <li>
                <Link href="/categories/workflow-automation" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Workflow Automation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/all-tools" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  All Tools
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy.txt" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms.txt" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Contact Us</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <Link href="/contact">
              <button className="bg-white text-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/90 transition-colors">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} The AI Book. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

