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
    <div className="pt-20 pb-24 bg-dotted min-h-screen relative">
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 pointer-events-none z-0"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 text-balance leading-tight tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Choose the plan that fits your needs. No hidden fees, no
            commissions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Free Plan */}
          <div className="relative bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 rounded-3xl border border-neutral-200/60 p-8 md:p-10 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Free</h2>
              <div className="mb-6">
                <span className="text-5xl font-bold text-neutral-900">$0</span>
                <span className="text-neutral-600 text-lg">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-neutral-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-4 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full font-semibold hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-3xl border-2 border-transparent p-8 md:p-10 text-white shadow-gradient hover:shadow-gradient-hover transition-all duration-300 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-purple-600 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg z-10">
              POPULAR
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Pro</h2>
              <div className="mb-6">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-white/90 text-lg">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {proFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/95 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-4 bg-white text-neutral-900 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* One-Time Report */}
        <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-3xl border border-neutral-200/60 p-8 md:p-10 text-center shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
              One-Time City Report
            </h2>
            <p className="text-neutral-600 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
              Need a comprehensive analysis for a specific city? Get a detailed
              report without a subscription.
            </p>
            <div className="mb-8">
              <span className="text-5xl font-bold text-neutral-900">$99</span>
              <span className="text-neutral-600 text-lg"> one-time</span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Request Report
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can I cancel anytime?",
                answer: "Yes, you can cancel your subscription at any time. No questions asked.",
              },
              {
                question: "What cities are available?",
                answer: "We're currently focused on Bentonville, AR. More cities coming soon. Join early access to request your city.",
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee on all paid plans.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl border border-neutral-200/60 p-6 md:p-8 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

