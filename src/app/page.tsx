import { About } from "@/components/layout/about";
import { AosPage } from "@/components/layout/aos-page";
import { Hero } from "@/components/layout/hero";
import { LunchboxSection } from "@/components/layout/lunchbox-section";
import { NutritionistSection } from "@/components/layout/nutritionist-section";

export default function Home() {
  return (
    <main>
      <AosPage>
        <Hero/>
        <About/>
        <LunchboxSection/>
        <NutritionistSection/>
      </AosPage>
    </main>
  );
}
