import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-gray-700 hover:text-primary hover:bg-primary/5">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6 text-primary">Simple, Transparent Pricing</h1>
          <p className="text-gray-700">
            Choose the plan that's right for you. All plans include a 14-day free trial with no credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {/* Basic Plan */}
          <div className="bg-white rounded-lg shadow-sm border border-primary/10 overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">Basic</h3>
              <p className="text-gray-600 mb-6">Perfect for individuals and small projects</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-800">$19</span>
                <span className="text-gray-600">/month</span>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white mb-6">Start Free Trial</Button>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">1 website</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">5 color palettes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">Basic analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">24/7 support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-lg shadow-md border-2 border-accent relative">
            <div className="bg-accent text-white text-center py-2 text-sm font-medium">MOST POPULAR</div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">Pro</h3>
              <p className="text-gray-600 mb-6">Ideal for businesses and professionals</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-800">$49</span>
                <span className="text-gray-600">/month</span>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-white mb-6">Start Free Trial</Button>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">5 websites</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">Unlimited color palettes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">Advanced analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">Priority support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">Custom code injection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">Team collaboration (3 users)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-sm border border-primary/10 overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large organizations and agencies</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-800">$99</span>
                <span className="text-gray-600">/month</span>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white mb-6">Start Free Trial</Button>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">Unlimited websites</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">Unlimited color palettes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">Advanced analytics & reporting</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">Dedicated support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">API access</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">Unlimited team members</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-700">White labeling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 rounded-lg p-8 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-primary">Need a Custom Plan?</h2>
          <p className="text-gray-700 mb-6">
            We offer custom solutions for large enterprises and agencies with specific requirements. Contact our sales
            team to discuss your needs.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white">Contact Sales</Button>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-primary text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Can I change plans later?</h3>
              <p className="text-gray-700">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing
                cycle.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Is there a long-term contract?</h3>
              <p className="text-gray-700">
                No, all our plans are month-to-month with no long-term commitment. You can cancel anytime.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Do you offer discounts for annual billing?</h3>
              <p className="text-gray-700">
                Yes, you can save 20% by choosing annual billing instead of monthly billing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">What payment methods do you accept?</h3>
              <p className="text-gray-700">
                We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Is my data secure?</h3>
              <p className="text-gray-700">
                Yes, we take security seriously. All data is encrypted and stored securely. We never share your
                information with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
