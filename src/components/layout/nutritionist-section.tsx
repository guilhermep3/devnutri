import { buttonStyle, containerStyle, sectionDescStyle, sectionTitleStyle } from "@/utlis/styles"
import { NutritionistSlide } from "./slide-nutritionist"
import { Button } from "../ui/button"

export const NutritionistSection = () => {

  return (
    <section id="nutritionist">
      <div className={containerStyle + ' flex flex-col justify-center items-center gap-10'}>
        <div className="text-center">
          <h1 className={sectionTitleStyle}>Nossos nutricionistas</h1>
          <p className={sectionDescStyle}>Nosso time é experiênte e atencioso, marque uma consulta online ou presencial para ajudarmos na sua saúde.</p>
        </div>
        <div className="flex w-full">
          <NutritionistSlide/>
        </div>
        <Button className={buttonStyle}>Agendar Consulta</Button>
      </div>
    </section>
  )
}