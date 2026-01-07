import { TrendingUp, AlertTriangle, MapPin } from "lucide-react";
import Image from "next/image";

export default function ExampleInsight() {
  return (
    <section className="py-24 [&_*]:no-underline [&_*]:hover:no-underline" style={{ textDecoration: 'none' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 text-balance">
            See Placely in Action
          </h2>
          <p className="text-xl text-neutral-600">
            Real insights, real clarity, real decisions.
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="relative">
            {/* Image on the right - 95% visible */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[45%] z-0">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
                <Image
                  src="/assets/bentonville.jpg"
                  alt="Bentonville area map showing growth potential"
                  fill
                  className="object-cover"
                  sizes="45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden mb-8 max-w-md mx-auto">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
                <Image
                  src="/assets/bentonville.jpg"
                  alt="Bentonville area map showing growth potential"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Card on the left - overlapping image by 5% */}
            <div className="relative z-10 max-w-4xl mx-auto lg:mr-[42.75%]">
              <div className="bg-gradient-blue-purple rounded-3xl shadow-gradient hover:shadow-gradient-hover transition-shadow duration-300 p-8 md:p-12 text-white relative overflow-hidden group" style={{ textDecoration: 'none' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10" style={{ textDecoration: 'none' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white" style={{ textDecoration: 'none' }}>
                      Area: North Bentonville NWA
                    </h3>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-white" />
                        <span className="text-sm font-medium text-white/90" style={{ textDecoration: 'none' }}>
                          Growth Score
                        </span>
                      </div>
                      <div className="text-4xl font-bold" style={{ textDecoration: 'none' }}>
                        <span className="text-green-400">82</span>
                        <span className="text-white">/100</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3" style={{ textDecoration: 'none' }}>
                        Why this area scores well:
                      </h4>
                      <ul className="space-y-2 text-white/90">
                        <li className="flex items-start gap-2" style={{ textDecoration: 'none' }}>
                          <span className="text-white mt-1">✓</span>
                          <span style={{ textDecoration: 'none' }}>
                            Strong employment growth (2016–2023) with major employer
                            hubs nearby
                          </span>
                        </li>
                        <li className="flex items-start gap-2" style={{ textDecoration: 'none' }}>
                          <span className="text-white mt-1">✓</span>
                          <span style={{ textDecoration: 'none' }}>
                            Residential expansion near employer hubs indicates
                            sustained demand
                          </span>
                        </li>
                        <li className="flex items-start gap-2" style={{ textDecoration: 'none' }}>
                          <span className="text-white mt-1">✓</span>
                          <span style={{ textDecoration: 'none' }}>
                            Low oversupply risk relative to projected population
                            growth
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-white/20">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-white mt-0.5" />
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2" style={{ textDecoration: 'none' }}>
                            Risk to Consider:
                          </h4>
                          <p className="text-white/90" style={{ textDecoration: 'none' }}>
                            Higher price volatility if major employer hiring slows or
                            relocates. Monitor employment trends quarterly.
                          </p>
                          <p className="text-white/90" style={{ textDecoration: 'none' }}>
                          Lower liquidity compared to central neighborhoods; properties may take longer to sell during down cycles.
                          </p>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

