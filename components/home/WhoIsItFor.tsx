import { Home, TrendingUp, Map, Eye } from "lucide-react";

export default function WhoIsItFor() {
  const audiences = [
    {
      icon: Home,
      title: "First-time home buyers",
      description:
        "Navigate your first purchase with confidence and clarity.",
    },
    {
      icon: TrendingUp,
      title: "Long-term investors",
      description:
        "Identify areas with strong fundamentals for sustainable returns.",
    },
    {
      icon: Map,
      title: "People relocating",
      description:
        "Understand new markets before you make the move.",
    },
    {
      icon: Eye,
      title: "Anyone wanting a second opinion",
      description:
        "Validate your instincts with data-driven insights.",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 text-balance">
            Who Placely Is For
          </h2>
          <p className="text-xl text-neutral-600">
            Built for anyone making a real estate decision that matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-3xl border border-neutral-200/60 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 shadow-soft group"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:shadow-card transition-shadow">
                <audience.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

