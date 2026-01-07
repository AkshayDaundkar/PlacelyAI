import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import DifferenceSection from "@/components/home/DifferenceSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ExampleInsight from "@/components/home/ExampleInsight";
import WhoIsItFor from "@/components/home/WhoIsItFor";
import CTASection from "@/components/home/CTASection";

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

