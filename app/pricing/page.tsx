import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const freeFeatures = [
    "City overview",
    "Limited area insights",
    "Basic growth scores",
  ];

  const proFeatures = [
    "Full area intelligence",
    "Detailed risk analysis",
    "AI-powered explanations",
    "Downloadable reports",
    "Historical timeline data",
    "Area comparison tools",
  ];

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 text-balance">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, no
            commissions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Free</h2>
            <div className="mb-6">
              <span className="text-4xl font-bold text-neutral-900">$0</span>
              <span className="text-neutral-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="block w-full text-center px-6 py-3 bg-neutral-100 text-neutral-900 rounded-full font-medium hover:bg-neutral-200 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-purple-pink rounded-2xl border-2 border-transparent p-8 text-white relative shadow-card">
            <div className="absolute top-4 right-4 bg-white text-primary-600 text-xs font-semibold px-3 py-1 rounded-full">
              POPULAR
            </div>
            <h2 className="text-2xl font-bold mb-2">Pro</h2>
            <div className="mb-6">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-white/80">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {proFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="block w-full text-center px-6 py-3 bg-white text-primary-600 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* One-Time Report */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-8 text-center shadow-soft">
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            One-Time City Report
          </h2>
          <p className="text-neutral-600 mb-6">
            Need a comprehensive analysis for a specific city? Get a detailed
            report without a subscription.
          </p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-neutral-900">$99</span>
            <span className="text-neutral-600"> one-time</span>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-purple-pink text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-card"
          >
            Request Report
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-neutral-600 text-sm">
                Yes, you can cancel your subscription at any time. No questions
                asked.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">
                What cities are available?
              </h3>
              <p className="text-neutral-600 text-sm">
                We're currently focused on Bentonville, AR. More cities coming
                soon. Join early access to request your city.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-neutral-600 text-sm">
                Yes, we offer a 30-day money-back guarantee on all paid plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

