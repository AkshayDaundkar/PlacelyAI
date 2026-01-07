import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 text-balance">
            About PlacelyAI
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Built because real estate decisions shouldn't be based on guesswork.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            Our Mission
          </h2>
          <div className="prose prose-lg max-w-none">
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
        </section>

        {/* Philosophy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            Our Philosophy
          </h2>
          <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-8">
            <p className="text-neutral-700 text-lg leading-relaxed mb-4">
              <strong>Placely is NOT a real-estate marketplace.</strong>
            </p>
            <p className="text-neutral-700 text-lg leading-relaxed mb-4">
              <strong>Placely is NOT a broker.</strong>
            </p>
            <p className="text-neutral-700 text-lg leading-relaxed">
              <strong>
                Placely is a decision-intelligence product built on trust,
                neutrality, explainability, and long-term thinking.
              </strong>
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            What We Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Trust",
                description:
                  "We build trust through transparency, honest limitations, and data-backed insights.",
              },
              {
                title: "Neutrality",
                description:
                  "We have no financial incentive to sell you a property. We sell clarity, not commissions.",
              },
              {
                title: "Explainability",
                description:
                  "Every score, every insight comes with a clear explanation of why and how.",
              },
              {
                title: "Long-term Thinking",
                description:
                  "We focus on signals that matter over years, not months — infrastructure, employment, and sustainable growth.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-neutral-200"
              >
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-primary-50 rounded-xl border border-primary-200 p-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-neutral-700 mb-8 max-w-2xl mx-auto">
            We're building Placely to shape the future of real estate
            decision-making. If you believe in making data-driven, unbiased
            decisions, we'd love to have you along.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Get Early Access
            </Link>
            <Link
              href="/cities/bentonville"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg text-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Explore the Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

