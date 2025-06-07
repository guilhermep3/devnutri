import { useCartStore } from "@/store/cart-store";

export const CartModal = () => {
  const { isModalOpen, setIsModalOpen } = useCartStore();

  return (
    <div className={`fixed p-10 bg-yellow-500 bottom-0 ${isModalOpen ? '' : 'translate-y-full'} transition duration-300`}>
      
    </div>
  )
}