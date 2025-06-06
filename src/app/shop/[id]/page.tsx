"use client"

import { Button } from "@/components/ui/button";
import { lunchboxType } from "@/types/lunchbox";
import { buttonStyle, containerStyle } from "@/utlis/styles";
import { ArrowLeft, Minus, Plus, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const Page = () => {
  const [lunchbox, setLunchbox] = useState<lunchboxType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const params = useParams()
  const rawId = params.id;
  const id = Array.isArray(rawId) ? Number(rawId[0]) : Number(rawId);

  useEffect(() => {
    async function fetchLunchbox() {
      const res = await fetch('/lunchboxData.json');
      const data: lunchboxType[] = await res.json();

      const selected = data.find((item) => item.id === id);
      setLunchbox(selected || null);
    }

    fetchLunchbox();
  }, [id]);

  function handleUpdateQuantity(update: number){
    setQuantity((prev) => {
      const newQuantity = prev + update;
      return newQuantity > 0 ? newQuantity : 1;
    })
  }

  return (
    <main className="mt-2 md:mt-10">
      <div className={containerStyle + ' flex flex-col md:flex-row rounded-3xl overflow-hidden max-w-5xl'}>
        <div className="flex-1 flex justify-center items-center bg-white rounded-t-3xl">
          <div className="relative w-full h-full max-w-72 md:max-w-lg p-4 md:p-12">
            <Suspense fallback={<div className="animate-ping w-72 h-72 md:w-80 md:h-80 block bg-zinc-400"></div>}>
              <Image src={`/lunchbox/${lunchbox?.image}`} alt={lunchbox?.name!}
                width={400} height={400}
                style={{ width: 'inherit', height: 'inherit' }}
              />
            </Suspense>
            <Link href={'/shop'} className="absolute hidden md:block top-4 left-4 p-2 rounded-lg bg-zinc-300 hover:bg-zinc-400 transition cursor-pointer">
              <ArrowLeft className="w-8 h-8" />
            </Link>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 bg-white rounded-b-3xl px-4 py-8">
          <div className="flex items-center">
            <h1 className="text-xl md:text-3xl font-bold w-full">{lunchbox?.name}</h1>
            <div className="flex items-center gap-1">
              <Star className="size-4 md:size-6 fill-yellow-500 stroke-yellow-600" />
              <p className="md:text-lg font-semibold">5.0</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base md:text-lg">Ingredientes:</p>
            <ul className="flex flex-wrap gap-2">
              {lunchbox?.ingredients.map((i) => (
                <li className="text-xs md:text-sm px-2 py-1 bg-zinc-200 rounded-sm">{i}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm md:text-base">{lunchbox?.recommendation}</p>
          </div>
          <div className="flex justify-between mt-auto">
            <div className="flex items-end">
              <p className="text-lg font-bold">R$ <span className="text-xl md:text-2xl">{lunchbox?.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></p>
            </div>
            <div className="flex items-center">
              <Button className="text-black bg-zinc-300 hover:bg-zinc-400 cursor-pointer"
                onClick={() => handleUpdateQuantity(-1)}
              >
                <Minus />
              </Button>
              <p className="text-xl mx-2 font-bold">
                {quantity}
              </p>
              <Button className="text-black bg-zinc-300 hover:bg-zinc-400 cursor-pointer"
                onClick={() => handleUpdateQuantity(1)}
              >
                <Plus />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href={'/shop'} className="block md:hidden p-2 rounded-lg bg-zinc-300 hover:bg-zinc-400 transition cursor-pointer">
              <ArrowLeft className="w-8 h-8" />
            </Link>
            <Button className={buttonStyle + ' rounded-lg flex-1'}>Comprar</Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page;