"use client"
import { CartModal } from "@/components/cart-modal";
import { ShopIdTop } from "@/components/layout/shop/id/shop-id-top";
import { ShopIdPrice } from "@/components/layout/shop/id/sjop-id-price";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { lunchboxType } from "@/types/lunchbox";
import { buttonStyle, containerStyle } from "@/utlis/styles";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [lunchbox, setLunchbox] = useState<lunchboxType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const params = useParams()
  const rawId = params.id;
  const id = Array.isArray(rawId) ? Number(rawId[0]) : Number(rawId);
  const { isModalOpen, updateCart } = useCartStore();

  useEffect(() => {
    async function fetchLunchbox() {
      const res = await fetch('/lunchboxData.json');
      const data: lunchboxType[] = await res.json();

      const selected = data.find((item) => item.id === id);
      setLunchbox(selected || null);
    }

    fetchLunchbox();
  }, [id]);

  function handleAddLunchbox() {
    if (lunchbox) {
      updateCart(lunchbox, quantity);
    }
  };

  return (
    <main className="mt-2 md:mt-10">
      <div className={containerStyle + ' flex flex-col md:flex-row rounded-3xl overflow-hidden max-w-5xl'}>
        <ShopIdTop lunchbox={lunchbox!}/>
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
          <ShopIdPrice lunchbox={lunchbox!} quantity={quantity} setQuantity={setQuantity} />
          <div className="flex items-center gap-2">
            <Link href={'/shop'} className="block md:hidden p-2 rounded-lg bg-zinc-300 hover:bg-zinc-400 transition cursor-pointer">
              <ArrowLeft className="w-8 h-8" />
            </Link>
            <Button className={buttonStyle + ' rounded-lg flex-1'}
              onClick={handleAddLunchbox}
            >Comprar</Button>
          </div>
        </div>
      </div>
      <CartModal/>
    </main>
  )
}

export default Page;