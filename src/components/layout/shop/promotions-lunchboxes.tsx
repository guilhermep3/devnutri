"use client"
import { LunchboxItem } from "@/components/lunchbox";
import { lunchboxType } from "@/types/lunchbox";

type props = {
  lunchboxes: lunchboxType[];
}
export const PromotionLunchboxes = ({ lunchboxes }: props) => {

  const filteredLunchboxes = (lunchboxes ?? []).filter(lunch => lunch.promotion !== null);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-center md:justify-start items-center gap-2 text-center">
        <span className="w-4 h-4 rounded-full bg-black block"></span>
        <p className="text-xl font-bold">Marmitas nas promoções</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
        {filteredLunchboxes?.map((item) => (
          <LunchboxItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}