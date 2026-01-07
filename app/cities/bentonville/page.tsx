import { MapPin, TrendingUp, AlertTriangle, BarChart3, Building2 } from "lucide-react";
import Link from "next/link";

export default function BentonvillePage() {
  return (
    <div className="pt-20 pb-24 bg-dotted min-h-screen relative">
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 pointer-events-none z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 text-balance leading-tight tracking-tight">
            Bentonville Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Deep insights into Bentonville's neighborhoods, growth patterns, and
            investment potential.
          </p>
        </div>

        {/* City Overview */}
        <section className="mb-20">
          <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-3xl border border-neutral-200/60 shadow-soft p-8 md:p-12 hover:shadow-elevated transition-all duration-300 overflow-hidden group">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Why Bentonville?
              </h2>
            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
              <p className="mb-4 text-lg">
                Bentonville, Arkansas, has emerged as one of the most dynamic
                real estate markets in the region, driven primarily by its role
                as the headquarters of Walmart and a growing tech ecosystem.
                The city has experienced significant population growth, with
                major infrastructure investments and residential development
                following employment expansion.
              </p>
              <p className="text-lg">
                Our analysis focuses on understanding which neighborhoods are
                positioned for sustainable long-term growth based on
                infrastructure development, employment concentration, housing
                supply dynamics, and livability factors.
              </p>
            </div>
            </div>
          </div>
        </section>

        {/* Interactive Map with Insights */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            Explore Areas
          </h2>
          <div className="bg-gradient-to-br from-white to-blue-50/20 rounded-3xl border border-neutral-200/60 shadow-soft overflow-hidden hover:shadow-elevated transition-all duration-300 relative group">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            {/* Google Maps Embed */}
            <div className="relative w-full h-[500px] md:h-[600px] z-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20305.123456789!2d-94.2088!3d36.3729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c91e3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sBentonville%2C%20AR!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Bentonville, Arkansas Map"
              />
              
              {/* Insights Overlay */}
              <div className="absolute top-4 right-4 left-4 md:left-auto md:max-w-md z-20">
                <div className="bg-white/98 backdrop-blur-md rounded-2xl border border-neutral-200/80 shadow-elevated p-6 relative overflow-hidden group/insight">
                  {/* Subtle gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover/insight:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    Key Insights
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-semibold text-neutral-900">North Bentonville</p>
                        <p className="text-xs text-neutral-600">Highest growth potential (82/100)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-semibold text-neutral-900">Downtown Core</p>
                        <p className="text-xs text-neutral-600">Strong infrastructure momentum</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-semibold text-neutral-900">West Bentonville</p>
                        <p className="text-xs text-neutral-600">Emerging residential expansion</p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-neutral-200/60">
                      <p className="text-xs text-neutral-500">
                        Click on areas to see detailed analysis and growth scores
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Area Detail */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            Sample Area Analysis
          </h2>
          <div className="relative bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20 rounded-3xl border border-neutral-200/60 shadow-soft p-8 md:p-12 hover:shadow-elevated transition-all duration-300 overflow-hidden group">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
                North Bentonville
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 bg-gradient-to-br from-green-50/90 to-emerald-50/90 backdrop-blur-sm rounded-2xl border border-green-200/60 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-sm font-semibold text-neutral-700">
                    Growth Score
                  </span>
                </div>
                <div className="text-4xl font-bold">
                  <span className="text-green-600">82</span>
                  <span className="text-neutral-400">/100</span>
                </div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50/90 to-indigo-50/90 backdrop-blur-sm rounded-2xl border border-blue-200/60 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-sm font-semibold text-neutral-700">
                    Infra Momentum
                  </span>
                </div>
                <div className="text-4xl font-bold text-blue-600">High</div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50/90 to-pink-50/90 backdrop-blur-sm rounded-2xl border border-purple-200/60 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-sm font-semibold text-neutral-700">
                    Rental Demand
                  </span>
                </div>
                <div className="text-4xl font-bold text-purple-600">Strong</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-neutral-900 mb-4">
                  Why this area scores well:
                </h4>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <span className="text-base leading-relaxed">
                      Employment growth (2016–2023) with major employer hubs
                      nearby
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <span className="text-base leading-relaxed">
                      Residential expansion near employer hubs indicates
                      sustained demand
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <span className="text-base leading-relaxed">
                      Low oversupply risk relative to projected population
                      growth
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-neutral-200/60">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                      Risk Indicators:
                    </h4>
                    <p className="text-neutral-700 leading-relaxed">
                      Higher price volatility if major employer hiring slows or
                      relocates. Monitor employment trends quarterly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200/60">
                <h4 className="text-xl font-semibold text-neutral-900 mb-4">
                  Historical Timeline:
                </h4>
                <div className="space-y-3 text-base text-neutral-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p>2016-2018: Initial infrastructure expansion</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p>2019-2021: Major residential development phase</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p>2022-2023: Employment concentration increases</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p>2024: Continued growth with stable fundamentals</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl shadow-gradient p-12 md:p-16 text-white relative overflow-hidden group">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <div className="relative z-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Full Access
            </h2>
            <p className="text-white/95 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Unlock detailed intelligence for all areas, risk analysis, and
              downloadable reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                View Pricing
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:border-white/50"
              >
                Request Early Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

