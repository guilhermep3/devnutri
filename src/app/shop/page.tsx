import { AllLunchboxes } from "@/components/layout/shop/all-lunchboxes";
import { containerStyle } from "@/utlis/styles";

const Page = () => {

  return (
    <main>
      <div className="relative w-full h-80 md:h-96 flex justify-end items-center flex-col gap-2 pb-10 md:pb-20 text-center px-4 bg-[url('/shop1.jpg')] bg-center bg-cover">
        <div className="absolute inset-0 bg-black/60 block z-10"></div>
        <h1 className="hidden md:block text-2xl md:text-3xl font-bold text-white z-20">
          Marmitas DevNutri com<br/> <span className="text-3xl md:text-6xl font-extrabold">50% OFF</span>
        </h1>
        <h1 className="block md:hidden text-2xl md:text-3xl font-bold text-white z-20">
          Marmitas DevNutri <br/>com<br/> <span className="text-3xl md:text-6xl font-extrabold">50% OFF</span>
        </h1>
        <h2 className="text-base md:text-lg text-white z-20">
          Aproveite nossas ofertas para se alimentar de um jeito melhor
        </h2>
      </div>
      <div>
        <div className={containerStyle}>
          <AllLunchboxes/>
        </div>
      </div>
    </main>
  )
}

export default Page;