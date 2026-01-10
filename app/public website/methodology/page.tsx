import { Shield, Database, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function MethodologyPage() {
  return (
    <div className="pt-20 pb-24 bg-dotted min-h-screen relative">
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 pointer-events-none z-0"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 text-balance leading-tight tracking-tight">
            Our Methodology
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Built on principles of transparency, data-backed analysis, and
            long-term thinking.
          </p>
        </div>

        {/* Principles */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            Core Principles
          </h2>
          <div className="space-y-6">
            {[
              {
                icon: Database,
                title: "Data-backed, not opinion-based",
                description:
                  "Every insight is grounded in verifiable data from public sources, historical records, and aggregated market signals.",
                gradient: "from-blue-500 to-indigo-500",
                iconBg: "bg-blue-500/10",
                iconColor: "text-blue-600",
              },
              {
                icon: Shield,
                title: "Long-term signals > short-term noise",
                description:
                  "We focus on infrastructure, employment, and development patterns that drive value over years, not months.",
                gradient: "from-purple-500 to-pink-500",
                iconBg: "bg-purple-500/10",
                iconColor: "text-purple-600",
              },
              {
                icon: AlertCircle,
                title: "Transparency over accuracy claims",
                description:
                  "We explain our methodology, acknowledge limitations, and help you understand the reasoning behind every score.",
                gradient: "from-amber-500 to-orange-500",
                iconBg: "bg-amber-500/10",
                iconColor: "text-amber-600",
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="relative p-8 bg-white rounded-3xl border border-neutral-200/60 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative z-10 flex items-start gap-4">
                  <div className={`w-14 h-14 ${principle.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <principle.icon className={`w-7 h-7 ${principle.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Sources */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            Data Sources
          </h2>
          <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-3xl border border-neutral-200/60 shadow-soft p-8 md:p-10 hover:shadow-elevated transition-all duration-300 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <p className="text-neutral-700 mb-6 text-lg leading-relaxed">
                We aggregate insights from multiple public and verified sources:
              </p>
              <ul className="space-y-3 text-neutral-600 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">Public datasets (census, employment, infrastructure)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">Historical development records</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">Aggregated market signals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">Government planning documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">Economic development reports</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-neutral-200/60">
                <p className="text-sm text-neutral-500 leading-relaxed">
                  We do not use proprietary or confidential data. Our methodology is
                  transparent and reproducible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Limitations */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            Limitations & Risks
          </h2>
          <div className="relative bg-gradient-to-br from-amber-50 via-orange-50/50 to-yellow-50/30 border border-amber-200/60 rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-neutral-700 text-lg leading-relaxed font-medium">
                  We believe in honest communication about what we can and cannot
                  predict:
                </p>
              </div>
              <ul className="space-y-4 text-neutral-700 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">
                    <strong>Market uncertainty:</strong> Real estate markets are
                    influenced by unpredictable factors including economic shifts,
                    natural disasters, and global events.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">
                    <strong>Policy changes:</strong> Government policies, zoning
                    changes, and tax reforms can significantly impact property
                    values.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">
                    <strong>Macro-economic risks:</strong> Interest rates,
                    inflation, and broader economic conditions affect all real
                    estate markets.
                  </span>
                </li>
              </ul>
              <div className="pt-6 border-t border-amber-200/60">
                <p className="text-neutral-700 leading-relaxed">
                  Placely provides insights based on historical patterns and current
                  signals, but cannot guarantee future outcomes. Always consult with
                  financial and legal advisors before making investment decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/cities/bentonville"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            See Methodology in Action
          </Link>
        </div>
      </div>
    </div>
  );
}

