import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-20 pb-24 bg-dotted min-h-screen relative">
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 pointer-events-none z-0"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 text-balance leading-tight tracking-tight">
            About PlacelyAI
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Built because real estate decisions shouldn't be based on guesswork.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            Our Mission
          </h2>
          <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-3xl border border-neutral-200/60 shadow-soft p-8 md:p-10 hover:shadow-elevated transition-all duration-300 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 prose prose-lg max-w-none">
              <p className="text-neutral-700 text-lg leading-relaxed mb-4">
                We built Placely because we've seen how opaque and biased
                real-estate decisions can be — and how costly mistakes are.
              </p>
              <p className="text-neutral-700 text-lg leading-relaxed mb-4">
                Traditional real estate platforms show you listings and prices, but
                they don't help you understand <em>why</em> an area is growing,
                what risks exist, or whether it's a smart long-term investment.
                Brokers are incentivized to sell, not to help you make the best
                decision.
              </p>
              <p className="text-neutral-700 text-lg leading-relaxed">
                Placely is different. We're a decision-intelligence product, not a
                marketplace. We analyze infrastructure, employment, development,
                and market signals to give you unbiased, explainable insights about
                where to invest — and why.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            Our Philosophy
          </h2>
          <div className="relative bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-rose-50/30 rounded-3xl border border-purple-200/60 shadow-soft p-8 md:p-10 hover:shadow-elevated transition-all duration-300 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 space-y-4">
              <p className="text-neutral-700 text-lg leading-relaxed">
                <strong>Placely is NOT a real-estate marketplace.</strong>
              </p>
              <p className="text-neutral-700 text-lg leading-relaxed">
                <strong>Placely is NOT a broker.</strong>
              </p>
              <p className="text-neutral-700 text-lg leading-relaxed">
                <strong>
                  Placely is a decision-intelligence product built on trust,
                  neutrality, explainability, and long-term thinking.
                </strong>
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            What We Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Trust",
                description:
                  "We build trust through transparency, honest limitations, and data-backed insights.",
                gradient: "from-blue-500 to-indigo-500",
                iconBg: "bg-blue-500/10",
              },
              {
                title: "Neutrality",
                description:
                  "We have no financial incentive to sell you a property. We sell clarity, not commissions.",
                gradient: "from-purple-500 to-pink-500",
                iconBg: "bg-purple-500/10",
              },
              {
                title: "Explainability",
                description:
                  "Every score, every insight comes with a clear explanation of why and how.",
                gradient: "from-amber-500 to-orange-500",
                iconBg: "bg-amber-500/10",
              },
              {
                title: "Long-term Thinking",
                description:
                  "We focus on signals that matter over years, not months — infrastructure, employment, and sustainable growth.",
                gradient: "from-emerald-500 to-teal-500",
                iconBg: "bg-emerald-500/10",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="relative p-6 md:p-8 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 rounded-2xl border border-neutral-200/60 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`w-12 h-12 ${value.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-6 h-6 bg-gradient-to-br ${value.gradient} rounded-lg`}></div>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl shadow-gradient p-12 md:p-16 text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <div className="relative z-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Us on This Journey
            </h2>
            <p className="text-white/95 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              We're building Placely to shape the future of real estate
              decision-making. If you believe in making data-driven, unbiased
              decisions, we'd love to have you along.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Early Access
              </Link>
              <Link
                href="/cities/bentonville"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:border-white/50"
              >
                Explore the Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

