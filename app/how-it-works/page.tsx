import { Check, X, Brain, BarChart3, MapPin, TrendingUp } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 text-balance">
            How Placely Works
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Transparent, data-driven intelligence designed to reduce skepticism
            and build trust.
          </p>
        </div>

        {/* What Placely Analyzes */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            What Placely Analyzes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: MapPin,
                title: "Infrastructure development",
                description:
                  "Roads, public transit, utilities, and planned developments that shape long-term value.",
              },
              {
                icon: TrendingUp,
                title: "Housing supply growth",
                description:
                  "New construction rates, inventory levels, and oversupply risks.",
              },
              {
                icon: BarChart3,
                title: "Rental demand",
                description:
                  "Rental market dynamics, vacancy rates, and rental yield trends.",
              },
              {
                icon: Brain,
                title: "Employment concentration",
                description:
                  "Major employers, job growth patterns, and economic diversification.",
              },
              {
                icon: MapPin,
                title: "Accessibility & livability",
                description:
                  "Schools, amenities, walkability, and quality of life indicators.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-neutral-50 rounded-xl border border-neutral-200"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What Placely Does NOT Do */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            What Placely Does NOT Do
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-8">
            <div className="space-y-4">
              {[
                "No property listings",
                "No commissions",
                "No guarantees",
                "No broker incentives",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-neutral-700">
              Placely is a decision-intelligence product. We provide clarity,
              not sales.
            </p>
          </div>
        </section>

        {/* How AI Is Used */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            How AI Is Used
          </h2>
          <div className="bg-primary-50 border border-primary-200 rounded-xl p-8">
            <p className="text-lg text-neutral-700 mb-4">
              AI helps us identify long-term patterns across neighborhoods and
              explain them clearly.
            </p>
            <p className="text-neutral-600">
              We do not predict exact prices or guarantee returns. Instead, we
              analyze historical trends, infrastructure signals, and market
              fundamentals to provide explainable insights about area-level
              growth potential and risks.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/cities/bentonville"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Explore City Intelligence
          </a>
        </div>
      </div>
    </div>
  );
}

