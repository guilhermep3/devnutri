import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { cart } from "@/types/cart";
import { lunchboxType } from "@/types/lunchbox";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

type props = {
  cart: cart;
}
export const ShopIdItem = ({ cart }: props) => {
  const lunchbox: lunchboxType = cart.lunchbox;
  const quantity = cart.quantity;
  const { updateCart } = useCartStore();

  function handleUpdateQuantity(update: number) {
    updateCart(cart.lunchbox, update)
  };

  return (
    <div className="flex items-end gap-2 mb-4">
      <div className="w-14 h-14">
        <Image src={`/lunchbox/${lunchbox.image}`} alt={lunchbox.name}
          width={64} height={64} style={{ width: 'inherit', height: 'inherit' }}
          className="max-w-fit"
        />
      </div>
      <div className="flex items-end gap-2 w-full">
        <div className="flex flex-col ">
          <p className="text-base font-bold">{lunchbox.name}</p>
          <p>
            R$<span>{lunchbox.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              <span className="text-xs ml-1">x{cart.quantity}</span></span>
          </p>
        </div>
        <div className="flex items-center ml-auto">
          <Button className="w-6 h-6 text-black bg-zinc-300 hover:bg-zinc-400 cursor-pointer"
            onClick={() => handleUpdateQuantity(-1)}
          >
            <Minus />
          </Button>
          <p className="text-lg mx-2 font-semibold">
            {quantity}
          </p>
          <Button className="w-6 h-6 text-black bg-zinc-300 hover:bg-zinc-400 cursor-pointer"
            onClick={() => handleUpdateQuantity(1)}
          >
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  )
}