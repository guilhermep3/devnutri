import { About } from "@/components/layout/about";
import { Hero } from "@/components/layout/hero";
import { LunchboxSection } from "@/components/layout/lunchbox-section";
import { NutritionistSection } from "@/components/layout/nutritionist-section";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <About/>
      <LunchboxSection/>
      <NutritionistSection/>
    </div>
  );
}
