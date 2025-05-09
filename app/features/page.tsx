import React from "react";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/feature-card";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-gray-700 hover:text-primary hover:bg-primary/5">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6 text-primary">Our Features</h1>
        <p className="text-gray-700">
          Discover the powerful features that make our platform stand out from the competition. We've designed our tools to be intuitive, powerful, and flexible to meet all your website design needs.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <FeatureCard 
          title="Responsive Design" 
          description="Our templates are fully responsive and look great on any device, from mobile to desktop."
          icon="Smartphone"
        />
        <FeatureCard 
          title="Color Harmony" 
          description="Carefully selected color palettes that create visual harmony and enhance user experience."
          icon="Palette"
        />
        <FeatureCard 
          title="Easy Customization" 
          description="Simple tools to customize your website without needing any coding knowledge."
          icon="Settings"
        />
        <FeatureCard 
          title="SEO Optimization" 
          description="Built-in SEO tools to help your website rank higher in search engine results."
          icon="Search"
        />
        <FeatureCard 
          title="Fast Performance" 
          description="Optimized code and assets for lightning-fast loading times and smooth performance."
          icon="Zap"
        />
        <FeatureCard 
          title="Regular Updates" 
          description="Continuous improvements and new features to keep your website up-to-date with the latest design trends and technologies."
          icon="RefreshCw"
        />
      </div>

      <div className="bg-primary/10 rounded-lg p-8 md:p-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Advanced Features</h2>
            <p className="text-gray-700 mb-6">
              Our platform includes a range of advanced features designed for professionals and businesses who need more power and flexibility.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                <span className="text-gray-700">Custom code injection for advanced customization</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                <span className="text-gray-700">API access for integrating with other tools and services</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                <span className="text-gray-700">Advanced analytics and reporting capabilities</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                <span className="text-gray-700">Team collaboration tools with role-based permissions</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                <span className="text-gray-700">White-label options for agencies and resellers</span>
              </li>
            </ul>
            
            <Button className="mt-8 bg-primary hover:bg-primary/90 text-white">
              Explore Advanced Features
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-primary/10">
            <h3 className="text-xl font-semibold mb-4 text-primary">Feature Comparison</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 pb-2 border-gray-200">
                <div className="font-medium text-gray-800">Feature</div>
                <div className="font-medium text-gray-800 text-center">Basic</div>
                <div className="font-medium text-gray-800 text-center">Pro</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
