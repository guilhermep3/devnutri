"use client"
import { buttonStyle, containerStyle, sectionDescStyle, sectionTitleStyle } from "@/utlis/styles"
import { NutritionistSlide } from "./slide-nutritionist"
import { Button } from "../ui/button"
import { Leaf } from "../leaf"
import { useRouter } from "next/navigation"

export const NutritionistSection = () => {
  const router = useRouter();

  function goNutriPage() {
    router.push('/nutricionistas')
  }

  return (
    <section id="nutritionist" className="relative">
      <Leaf top={20} right={20} className="rotate-180" />
      <div className={containerStyle + ' flex flex-col justify-center items-center gap-10'}>
        <div className="text-center">
          <h1 data-aos="fade-down" className={sectionTitleStyle}>Nossos nutricionistas</h1>
          <p data-aos="zoom-in" className={sectionDescStyle}>Nosso time é experiênte e atencioso, marque uma consulta online ou presencial para ajudarmos na sua saúde.</p>
        </div>
        <div className="flex w-full">
          <NutritionistSlide />
        </div>
        <Button onClick={goNutriPage}
          className={buttonStyle}
          data-aos="zoom-in"
        >Agendar Consulta</Button>
      </div>
    </section>
  )
}