import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cart-store"
import { lunchboxType } from "@/types/lunchbox"
import { ArrowLeft, Minus, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

type props = {
  lunchbox: lunchboxType;
  quantity: number;
  setQuantity: (newValue: number) => void;
}
export const ShopIdPrice = ({ lunchbox, quantity, setQuantity }: props) => {
  const { } = useCartStore();

  function handleUpdateQuantity(update: number) {
    const newQuantity = quantity + update;
    setQuantity(newQuantity > 0 ? newQuantity : 1);
  };

  return (
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
  )
}