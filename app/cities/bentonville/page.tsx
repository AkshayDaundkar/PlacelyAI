import { MapPin, TrendingUp, AlertTriangle, BarChart3, Building2 } from "lucide-react";
import Link from "next/link";

export default function BentonvillePage() {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 text-balance">
            Bentonville Intelligence
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Deep insights into Bentonville's neighborhoods, growth patterns, and
            investment potential.
          </p>
        </div>

        {/* City Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-200 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Why Bentonville?
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p className="mb-4">
                Bentonville, Arkansas, has emerged as one of the most dynamic
                real estate markets in the region, driven primarily by its role
                as the headquarters of Walmart and a growing tech ecosystem.
                The city has experienced significant population growth, with
                major infrastructure investments and residential development
                following employment expansion.
              </p>
              <p>
                Our analysis focuses on understanding which neighborhoods are
                positioned for sustainable long-term growth based on
                infrastructure development, employment concentration, housing
                supply dynamics, and livability factors.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Map Placeholder */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Explore Areas
          </h2>
          <div className="bg-neutral-100 rounded-2xl border border-neutral-200 p-12 text-center">
            <MapPin className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
            <p className="text-neutral-600 mb-4">
              Interactive area map coming soon
            </p>
            <p className="text-sm text-neutral-500">
              Click on neighborhoods to see detailed intelligence
            </p>
          </div>
        </section>

        {/* Sample Area Detail */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Sample Area Analysis
          </h2>
          <div className="bg-white rounded-2xl border-2 border-neutral-200 shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-primary-600" />
              <h3 className="text-2xl font-bold text-neutral-900">
                North Bentonville
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-neutral-600">
                    Growth Score
                  </span>
                </div>
                <div className="text-4xl font-bold text-green-600">82/100</div>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-neutral-600">
                    Infra Momentum
                  </span>
                </div>
                <div className="text-4xl font-bold text-blue-600">High</div>
              </div>
              <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-neutral-600">
                    Rental Demand
                  </span>
                </div>
                <div className="text-4xl font-bold text-purple-600">Strong</div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                  Why this area scores well:
                </h4>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      Employment growth (2016–2023) with major employer hubs
                      nearby
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      Residential expansion near employer hubs indicates
                      sustained demand
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      Low oversupply risk relative to projected population
                      growth
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                      Risk Indicators:
                    </h4>
                    <p className="text-neutral-700">
                      Higher price volatility if major employer hiring slows or
                      relocates. Monitor employment trends quarterly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                  Historical Timeline:
                </h4>
                <div className="space-y-2 text-sm text-neutral-600">
                  <p>• 2016-2018: Initial infrastructure expansion</p>
                  <p>• 2019-2021: Major residential development phase</p>
                  <p>• 2022-2023: Employment concentration increases</p>
                  <p>• 2024: Continued growth with stable fundamentals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-primary-50 rounded-xl border border-primary-200 p-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Get Full Access
          </h2>
          <p className="text-neutral-700 mb-8 max-w-2xl mx-auto">
            Unlock detailed intelligence for all areas, risk analysis, and
            downloadable reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors"
            >
              View Pricing
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg text-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Request Early Access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

