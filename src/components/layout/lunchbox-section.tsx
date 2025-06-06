"use client"
import { LunchboxItem } from "@/components/lunchbox";
import { lunchboxType } from "@/types/lunchbox";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { buttonStyle, containerStyle, sectionDescStyle, sectionTitleStyle } from "@/utlis/styles";
import { useRouter } from "next/navigation";

export const LunchboxSection = () => {
  const [lunchboxes, setLunchboxes] = useState<lunchboxType[] | null>(null);
  const router = useRouter();

  function handleGoShop(){
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
    <section id="lunchboxes">
      <div className={containerStyle+' flex flex-col justify-center items-center space-y-10'}>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className={sectionTitleStyle}>Nossas marmitas mais vendidas</h1>
          <p className={sectionDescStyle}>
            Cuide da sua alimentação de forma prática e inteligente, elevando sua produtividade no dia a dia.
            Com nossas marmitas saudáveis, saborosas e preparadas com carinho
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {lunchboxes && lunchboxes!.slice(0, 3).map(item => (
            <LunchboxItem key={item.id} item={item} />
          ))}
        </div>
        <Button onClick={handleGoShop} className={buttonStyle+' mx-auto  text-white'}>
          Comprar
        </Button>
      </div>
    </section>
  )
}