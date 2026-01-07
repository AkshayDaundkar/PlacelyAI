"use client";

import { Search, BarChart3, Brain, CheckCircle, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function HowItWorksSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Use Intersection Observer to trigger animation when section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animate steps sequentially
            [0, 1, 2, 3].forEach((index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 400);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Select a city & budget",
      description: "Choose your target location and investment range.",
      gradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-600",
      arrowGradient: "from-purple-400 to-pink-400",
    },
    {
      number: "02",
      icon: BarChart3,
      title: "Placely analyzes signals",
      description:
        "We analyze historical & current area signals across infrastructure, employment, and development.",
      gradient: "from-blue-500 to-indigo-500",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
      arrowGradient: "from-blue-400 to-indigo-400",
    },
    {
      number: "03",
      icon: Brain,
      title: "AI explains growth & risk",
      description:
        "Get clear explanations of growth potential, risks, and trade-offs for each area.",
      gradient: "from-amber-500 to-orange-500",
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-600",
      arrowGradient: "from-amber-400 to-orange-400",
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "You decide with confidence",
      description:
        "Make informed decisions backed by data, not guesswork.",
      gradient: "from-emerald-500 to-teal-500",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
      arrowGradient: "from-emerald-400 to-teal-400",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-dotted relative overflow-hidden [&_*]:no-underline [&_*]:hover:no-underline" style={{ textDecoration: 'none' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 text-balance leading-tight tracking-tight">
            How Placely Works
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 font-normal leading-relaxed">
            Simple, transparent, and designed for clarity.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map((step, index) => {
              const isVisible = visibleSteps.includes(index);
              const showArrow = index < steps.length - 1 && visibleSteps.includes(index);
              const arrowDelay = (index + 1) * 400 + 200; // Arrow appears after card with slight delay
              
              return (
                <div key={index} className="relative group">
                  {/* Arrow connector for desktop - positioned between step badges */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-0 left-full z-30 pointer-events-none" style={{ 
                      transform: 'translateX(-50%)',
                      width: '3rem',
                      height: '4rem'
                    }}>
                      <div 
                        className={`relative w-full h-full flex items-center justify-center transition-all duration-700 ${showArrow ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-4 scale-75'}`}
                        style={{ transitionDelay: showArrow ? `${arrowDelay}ms` : '0ms' }}
                      >
                        {/* Glowing arrow with different style */}
                        <div className="relative">
                          {/* Outer glow */}
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.arrowGradient} opacity-40 blur-md animate-pulse`}></div>
                          {/* Main arrow circle */}
                          <div className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${step.arrowGradient} flex items-center justify-center shadow-xl border-2 border-white/80 backdrop-blur-sm`}>
                            <ArrowRight className="w-5 h-5 text-white drop-shadow-lg" />
                          </div>
                          {/* Inner shine */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div 
                    className={`relative h-full transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
                    style={{ transitionDelay: isVisible ? `${index * 400}ms` : '0ms' }}
                  >
                    {/* Step number badge */}
                    <div className="flex justify-center mb-6">
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}>
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                        <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    
                    {/* Card */}
                    <div className="p-8 bg-white rounded-3xl border border-neutral-200/60 h-full hover:border-transparent transition-all duration-300 shadow-soft hover:shadow-elevated hover:-translate-y-1 relative overflow-hidden">
                      {/* Gradient border effect on hover */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-br ${step.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10`}></div>
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`w-14 h-14 ${step.iconBg} rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
                          <step.icon className={`w-7 h-7 ${step.iconColor} transition-transform duration-300`} />
                        </div>
                        
                        <h3 className="text-xl font-semibold text-neutral-900 mb-4 leading-tight no-underline hover:no-underline" style={{ textDecoration: 'none' }}>
                          {step.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed text-[15px] no-underline hover:no-underline" style={{ textDecoration: 'none' }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

