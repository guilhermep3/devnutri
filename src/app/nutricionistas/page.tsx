import { NutritionistsList } from "@/components/layout/nutritionists/nutritionists-list";
import { containerStyle } from "@/utlis/styles";

const Page = () => {

  return (
    <main>
      <div className="relative w-full h-80 md:h-96 flex justify-end items-center flex-col gap-2 pb-10 md:pb-16 text-center px-4 bg-[url('/nutricionista-bg.jpg')] bg-center bg-cover">
        <div className="absolute inset-0 bg-black/60 block z-10"></div>
        <h1 className=" text-2xl md:text-3xl font-bold text-white z-20">
          Nossos<br /> <span className="text-3xl md:text-6xl font-extrabold">Nutricionistas</span>
        </h1>
        <h2 className="text-base md:text-lg text-white z-20 mt-2">
          Marque uma consulta com um dos nossos profissionais
        </h2>
      </div>
      <section>
        <div className={containerStyle}>
          <h1 className={'text-xl md:text-2xl font-bold text-center'}>Todos nossos nutricionistas</h1>
          <NutritionistsList/>
        </div>
      </section>
    </main>
  )
}

export default Page;