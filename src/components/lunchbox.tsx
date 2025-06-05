import { lunchboxType } from "@/types/lunchbox";
import { Plus, Star } from "lucide-react";
import Image from "next/image";

type props = {
   item: lunchboxType;
}

export const LunchboxItem = ({ item }: props) => {

   return (
      <div key={item.id} className="group flex flex-col justify-center items-center bg-white p-4 rounded-xl cursor-pointer shadow-lg shadow-zinc-400 border hover:border-zinc-400 transition">
         <div className="relative w-28 md:w-40 h-28 md:h-40 overflow-visible">
            <Image src={`/lunchbox/${item.image}`} alt={item.name}
               className="absolute"
               style={{ width: 'inherit', height: 'inherit' }}
               width={140} height={140}
            />
            <img src="/leaf/leaf-clean-1.png" alt="leaf clean" className="absolute bottom-0 left-0 w-3/5 -z-10 opacity-70 transition duration-300" />
            <img src="/leaf/leaf-clean-1.png" alt="leaf clean" className="absolute bottom-0 right-0 w-3/5 -z-10 opacity-70 transition duration-300" />
         </div>
         <p className="text-lg md:text-xl font-bold text-center my-2">{item.name}</p>
         <p className="flex gap-1">
            <Star className="size-5 fill-yellow-500 stroke-yellow-700" />
            <Star className="size-5 fill-yellow-500 stroke-yellow-700" />
            <Star className="size-5 fill-yellow-500 stroke-yellow-700" />
            <Star className="size-5 fill-yellow-500 stroke-yellow-700" />
            <Star className="size-5 fill-yellow-500 stroke-yellow-700" />
         </p>
         <div className="flex justify-between items-center w-full mt-4">
            <p className="text-lg font-bold">
               R$
               <span className="text-xl"> {item.price.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </p>
            <div className="p-2 bg-[var(--primary-color)] rounded-full text-white shadow-md group-hover:bg-[var(--secondary-color)] transition">
               <Plus className="w-5 h-5" />
            </div>
         </div>
      </div>
   )
}