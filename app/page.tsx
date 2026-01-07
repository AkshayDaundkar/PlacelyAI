import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";

// Lazy load below-the-fold components
const DifferenceSection = dynamic(() => import("@/components/home/DifferenceSection"), {
  loading: () => <div className="py-32" />,
});
const HowItWorksSection = dynamic(() => import("@/components/home/HowItWorksSection"), {
  loading: () => <div className="py-32" />,
});
const ExampleInsight = dynamic(() => import("@/components/home/ExampleInsight"), {
  loading: () => <div className="py-24" />,
});
const WhoIsItFor = dynamic(() => import("@/components/home/WhoIsItFor"), {
  loading: () => <div className="py-24" />,
});
const CTASection = dynamic(() => import("@/components/home/CTASection"), {
  loading: () => <div className="py-24" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <DifferenceSection />
      <HowItWorksSection />
      <ExampleInsight />
      <WhoIsItFor />
      <CTASection />
    </>
  );
}

