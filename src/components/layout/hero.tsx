import { buttonStyle, containerStyle } from "@/utlis/styles"
import { Button } from "../ui/button"
import { HeroImage } from "./hero-image"

export const Hero = () => {

  return (
    <section id="hero" className="relative w-full h-screen bg-[url('/hero-bg.jpg')] bg-cover bg-left sm:bg-center">
      <div className={containerStyle + ' flex justify-center items-center flex-col md:flex-row md:gap-4 z-10 pb-10 sm:pb-20'}>
        <div className="flex-1 flex flex-col gap-4 justify-end items-center md:items-start text-center md:text-start">
          <h1 data-aos="fade-down" className="text-4xl sm:text-5xl lg:text-7xl font-extrabold">Coma Bem, Viva Melhor.</h1>
          <p data-aos="fade-down" className="text-lg sm:text-xl font-semibold">Cuide de você e viva melhor, compre nossas marmitas fitness e agende uma consulta com nossos nutricionistas.</p>
          <Button data-aos="fade-up" className={buttonStyle}>Comprar</Button>
        </div>
        <div data-aos="zoom-in" className="sm:flex-1 flex flex-col justify-center items-center">
          <HeroImage />
        </div>
      </div>
    </section>
  )
}