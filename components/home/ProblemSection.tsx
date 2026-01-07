import { AlertCircle, TrendingDown, FileQuestion } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Brokers are incentivized to sell",
      description:
        "Traditional real estate advice often comes with hidden agendas and commission structures.",
    },
    {
      icon: TrendingDown,
      title: "Listings show prices, not risks",
      description:
        "Property listings tell you what something costs, not whether it's a smart investment.",
    },
    {
      icon: FileQuestion,
      title: "No one explains why an area grows",
      description:
        "You're left guessing about what drives long-term value in a neighborhood.",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-3xl lg:text-6xl font-bold text-neutral-900 mb-6 text-balance leading-tight tracking-tight">
            Buying property is one of the biggest financial decisions you'll
            ever make.
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 text-balance max-w-3xl mx-auto font-normal leading-relaxed">
            Yet most advice is biased, anecdotal, or backward-looking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-3xl border border-neutral-200/60 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 shadow-soft group"
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:shadow-card transition-shadow">
                <problem.icon className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

