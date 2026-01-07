import { Shield, Database, AlertCircle } from "lucide-react";

export default function MethodologyPage() {
  return (
    <div className="pt-20 pb-24 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 text-balance">
            Our Methodology
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Built on principles of transparency, data-backed analysis, and
            long-term thinking.
          </p>
        </div>

        {/* Principles */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Core Principles
          </h2>
          <div className="space-y-6">
            {[
              {
                icon: Database,
                title: "Data-backed, not opinion-based",
                description:
                  "Every insight is grounded in verifiable data from public sources, historical records, and aggregated market signals.",
              },
              {
                icon: Shield,
                title: "Long-term signals > short-term noise",
                description:
                  "We focus on infrastructure, employment, and development patterns that drive value over years, not months.",
              },
              {
                icon: AlertCircle,
                title: "Transparency over accuracy claims",
                description:
                  "We explain our methodology, acknowledge limitations, and help you understand the reasoning behind every score.",
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-neutral-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <principle.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-neutral-600">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Sources */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Data Sources
          </h2>
          <div className="bg-white rounded-xl border border-neutral-200 p-8">
            <p className="text-neutral-700 mb-4">
              We aggregate insights from multiple public and verified sources:
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li>• Public datasets (census, employment, infrastructure)</li>
              <li>• Historical development records</li>
              <li>• Aggregated market signals</li>
              <li>• Government planning documents</li>
              <li>• Economic development reports</li>
            </ul>
            <p className="mt-6 text-sm text-neutral-500">
              We do not use proprietary or confidential data. Our methodology is
              transparent and reproducible.
            </p>
          </div>
        </section>

        {/* Limitations */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Limitations & Risks
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
            <p className="text-neutral-700 mb-4 font-medium">
              We believe in honest communication about what we can and cannot
              predict:
            </p>
            <ul className="space-y-3 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">•</span>
                <span>
                  <strong>Market uncertainty:</strong> Real estate markets are
                  influenced by unpredictable factors including economic shifts,
                  natural disasters, and global events.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">•</span>
                <span>
                  <strong>Policy changes:</strong> Government policies, zoning
                  changes, and tax reforms can significantly impact property
                  values.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">•</span>
                <span>
                  <strong>Macro-economic risks:</strong> Interest rates,
                  inflation, and broader economic conditions affect all real
                  estate markets.
                </span>
              </li>
            </ul>
            <p className="mt-6 text-neutral-700">
              Placely provides insights based on historical patterns and current
              signals, but cannot guarantee future outcomes. Always consult with
              financial and legal advisors before making investment decisions.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/cities/bentonville"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors"
          >
            See Methodology in Action
          </a>
        </div>
      </div>
    </div>
  );
}

