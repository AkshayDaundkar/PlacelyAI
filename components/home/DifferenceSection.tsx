import { MapPin, TrendingUp, Lightbulb, Shield } from "lucide-react";

export default function DifferenceSection() {
  const differences = [
    {
      icon: MapPin,
      title: "Area-first intelligence",
      description:
        "We analyze neighborhoods, not just individual properties.",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Infrastructure-led signals",
      description:
        "Roads, jobs, schools, and development drive long-term value.",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
    },
    {
      icon: Lightbulb,
      title: "Explainable insights",
      description: "Every score comes with a clear 'why'.",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-600",
    },
    {
      icon: Shield,
      title: "No commissions. No listings.",
      description:
        "Placely doesn't sell property — we sell clarity.",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <section className="py-32 bg-dotted relative overflow-hidden [&_*]:no-underline [&_*]:hover:no-underline" style={{ textDecoration: 'none' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 text-balance leading-tight tracking-tight">
            The Placely Difference
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 font-normal leading-relaxed">
            Decision-intelligence built for long-term thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differences.map((diff, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${diff.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`}></div>
              
              <div className="relative h-full p-8 bg-white rounded-3xl border border-neutral-200/60 hover:border-transparent transition-all duration-300 shadow-soft hover:shadow-elevated hover:-translate-y-1">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 ${diff.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                  <diff.icon className={`w-8 h-8 ${diff.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-4 leading-tight no-underline hover:no-underline" style={{ textDecoration: 'none' }}>
                  {diff.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-[15px] no-underline hover:no-underline" style={{ textDecoration: 'none' }}>
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

