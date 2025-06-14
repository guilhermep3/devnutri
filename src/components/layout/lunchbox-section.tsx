"use client"
import { LunchboxItem } from "@/components/lunchbox";
import { lunchboxType } from "@/types/lunchbox";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { buttonStyle, containerStyle, sectionDescStyle, sectionTitleStyle } from "@/utlis/styles";
import { useRouter } from "next/navigation";
import { Leaf } from "../leaf";

export const LunchboxSection = () => {
  const [lunchboxes, setLunchboxes] = useState<lunchboxType[] | null>(null);
  const router = useRouter();

  function handleGoShop() {
    router.push('/shop')
  }

  useEffect(() => {
    const fetchLunchboxes = async () => {
      const res = await fetch('/lunchboxData.json');
      const data = await res.json();
      setLunchboxes(data);
    };

    fetchLunchboxes();
  }, []);

  return (
    <section id="lunchboxes" className="relative">
      <Leaf bottom={20} left={20} />
      <div className={containerStyle + ' flex flex-col justify-center items-center space-y-10'}>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 data-aos="fade-down" className={sectionTitleStyle}>Nossas marmitas mais vendidas</h1>
          <p data-aos="zoom-in" className={sectionDescStyle}>
            Cuide da sua alimentação de forma prática e inteligente, elevando sua produtividade no dia a dia.
            Com nossas marmitas saudáveis, saborosas e preparadas com carinho
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {lunchboxes && lunchboxes!.slice(0, 3).map(item => (
            <LunchboxItem key={item.id} item={item} />
          ))}
        </div>
        <Button onClick={handleGoShop}
          className={buttonStyle + ' mx-auto  text-white'}
          data-aos="zoom-in"
        >
          Comprar
        </Button>
      </div>
    </section>
  )
}