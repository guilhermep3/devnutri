"use client"
import { AllLunchboxes } from "@/components/layout/shop/all-lunchboxes";
import { PromotionLunchboxes } from "@/components/layout/shop/promotions-lunchboxes";
import { lunchboxType } from "@/types/lunchbox";
import { containerStyle } from "@/utlis/styles";
import { useEffect, useState } from "react";

const Page = () => {
  const [lunchboxes, setLunchboxes] = useState<lunchboxType[] | null>(null);

  useEffect(() => {
    const fetchLunchboxes = async () => {
      const res = await fetch('/lunchboxData.json');
      const data = await res.json();
      setLunchboxes(data);
    };

    fetchLunchboxes();
  }, []);

  return (
    <main>
      <div className="relative w-full h-80 md:h-96 flex justify-end items-center flex-col gap-2 pb-10 md:pb-16 text-center px-4 bg-[url('/shop1.jpg')] bg-center bg-cover">
        <div className="absolute inset-0 bg-black/60 block z-10"></div>
        <h1 className=" text-2xl md:text-3xl font-bold text-white z-20">
          Marmitas DevNutri <br />com<br /> <span className="text-3xl md:text-6xl font-extrabold">50% OFF</span>
        </h1>
        <h2 className="text-base md:text-lg text-white z-20 mt-2">
          Aproveite nossas ofertas para se alimentar de um jeito melhor
        </h2>
      </div>
      <div>
        <div className={containerStyle + ' flex flex-col gap-10'}>
          <PromotionLunchboxes lunchboxes={lunchboxes!} />
          <AllLunchboxes lunchboxes={lunchboxes!} />
        </div>
      </div>
    </main>
  )
}

export default Page;