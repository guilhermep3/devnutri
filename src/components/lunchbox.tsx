import { lunchboxType } from "@/types/lunchbox";
import { Plus, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type props = {
  item: lunchboxType;
}

export const LunchboxItem = ({ item }: props) => {

  const percentageDiscount = item.promotion && (item.price - item.promotion) / item.price * 100;

  return (
    <Link href={`/shop/${item.id}`}
      key={item.id}
      className="relative group flex flex-col justify-center items-center bg-white p-4 rounded-xl cursor-pointer shadow-lg shadow-zinc-400 border hover:border-zinc-400 transition"
    >
      {item.promotion &&
        <div className="absolute top-2 md:top-4 left-2 md:left-4 z-20 bg-red-600 font-semibold text-sm text-white px-2 py-1 rounded-md">
          {percentageDiscount!.toFixed(2)}%
        </div>
      }
      <div className="group relative w-28 md:w-40 h-28 md:h-40 overflow-visible">
        <Image src={`/lunchbox/${item.image}`} alt={item.name}
          className="absolute z-10"
          width={140} height={140}
          style={{ width: 'inherit', height: 'inherit' }}
        />
        <img src="/leaf-clean-1.png" alt="leaf clean"
          className="absolute bottom-0 left-0 w-3/5 -z-0 opacity-0 transition duration-500 group-hover:rotate-[-20deg] group-hover:-left-1/5 group-hover:opacity-75"
        />
        <img src="/leaf-clean-1.png" alt="leaf clean"
          className="absolute bottom-0 right-0 w-3/5 -z-0 opacity-0 transition duration-500 scale-x-[-1] group-hover:rotate-[20deg] group-hover:-right-1/5 group-hover:opacity-75"
        />
      </div>
      <p className="text-lg md:text-xl font-bold text-center my-2">{item.name}</p>
      <p className="flex mb-3">
        {Array.from({length: 5}).map((_, index) => (
          <Star key={index} className="size-4 md:size-5 fill-yellow-500 stroke-yellow-700" />
        ))}
      </p>
      <div className="flex justify-between items-center w-full mt-auto">
        {item.promotion ? (
          <div className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-1">
            <p className="text-lg font-bold">
              R$
              <span className="text-xl"> {item.promotion.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </p>
            <p className="text-xs font-bold line-through text-zinc-700">
              R$ <span className="text-sm"> {item.price.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </p>
          </div>
        ) : (
          <p className="text-lg font-bold">
            R$
            <span className="text-xl"> {item.price.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </p>
        )}
        <div className="p-2 bg-[var(--primary-color)] rounded-full text-white shadow-md group-hover:bg-[var(--secondary-color)] transition">
          <Plus className="w-5 h-5" />
        </div>
      </div>
    </Link>
  )
}