import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 text-balance">
            Don't rely on guesswork for a life-changing decision.
          </h2>
          <p className="text-xl text-neutral-600 mb-10">
            Get the clarity you need to make confident real estate decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/bentonville"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-purple-pink text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-card"
            >
              Explore the City
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-700 border border-neutral-300 rounded-full text-lg font-medium hover:bg-neutral-50 transition-colors shadow-soft"
            >
              Join Early Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

