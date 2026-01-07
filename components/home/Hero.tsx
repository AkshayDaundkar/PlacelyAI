import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Small oval bubble */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 bg-white/80 backdrop-blur-sm border border-neutral-200/60 rounded-full mb-6 shadow-soft whitespace-nowrap overflow-hidden">
            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] sm:text-xs font-semibold rounded-full uppercase tracking-wide flex-shrink-0">
              NEW
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-neutral-700 whitespace-nowrap">
              Helping you understand places, not just prices.
            </span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-600 flex-shrink-0" />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-neutral-900 mb-6 text-balance leading-tight tracking-tight">
            Make confident real-estate decisions before you invest.
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-10 text-balance max-w-3xl mx-auto font-normal leading-relaxed">
            Placely provides unbiased, area-level intelligence to help you
            understand where to buy and why.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/bentonville"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-purple-pink text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-card"
            >
              Explore Bentonville
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-700 border border-neutral-300 rounded-full text-lg font-medium hover:bg-neutral-50 transition-colors shadow-soft"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

