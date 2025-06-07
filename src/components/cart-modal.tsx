"use client"
import { useCartStore } from "@/store/cart-store";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { ShopIdItem } from "./layout/shop/id/shop-id-item";
import { Button } from "./ui/button";
import { buttonStyle } from "@/utlis/styles";

export const CartModal = () => {
  const { cart, isModalOpen, setIsModalOpen } = useCartStore();

  function handleOverlayClick() {
    setIsModalOpen(false);
  };

  function handleModalClicked(e: React.MouseEvent) {
    e.stopPropagation();
  }
  let subtotal = 0;
  for (let i of cart) {
    subtotal += i.lunchbox.price * i.quantity;
  }

  return (
    <div className={`fixed inset-0 bg-black/50 z-40 transtion duration-300
        ${isModalOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`fixed p-4 md:p-8 bg-zinc-100 bottom-0 right-0 w-full md:h-full md:w-[400px] h-3/4
        flex flex-col transition duration-300
        ${isModalOpen ? '' : 'translate-y-full md:translate-y-0 md:translate-x-full'}
      `}
        onClick={handleModalClicked}
      >
        <div className={"flex items-center gap-4"}>
          <Image src={'/logo.png'} alt="logo DevNutri"
            width={44} height={44}
          />
          <p className="text-lg font-bold">Carrinho DevNutri</p>
        </div>
        <Separator orientation="horizontal" className="my-4" />
        <div className="flex flex-col">
          {cart && cart.map((i, index) => (
            <ShopIdItem key={index} cart={i} />
          ))}
        </div>
        <Separator orientation="horizontal" className="my-4" />
        <div className="flex gap-4 text-lg font-bold">
          <p>Total:</p>
          <p>R${subtotal.toFixed(2)}</p>
        </div>
        <Separator orientation="horizontal" className="my-4" />
        <div>
          <Button className={`${buttonStyle}
            ${cart.length > 0 ? 'opacity-100 pointer-events-auto' : 'opacity-50 cursor-not-allowed hover:bg-[var(--primary-color)]'} w-full`}
          >
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  )
}