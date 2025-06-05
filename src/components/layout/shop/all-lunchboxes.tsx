"use client"
import { useState, useEffect } from "react";
import { HeaderShop } from "./header"
import { lunchboxType } from "@/types/lunchbox";
import { LunchboxItem } from "@/components/lunchbox";


export const AllLunchboxes = () => {
  const [lunchboxes, setLunchboxes] = useState<lunchboxType[] | null>(null);
  const [active, setActive] = useState('Todos');

  useEffect(() => {
    const fetchLunchboxes = async () => {
      const res = await fetch('/lunchboxData.json');
      const data = await res.json();
      setLunchboxes(data);
    };

    fetchLunchboxes();
  }, []);

  const filteredLunchboxes = lunchboxes?.filter((item) => {
    if(active === 'Todos') return true;
    return item.type === active;
  });

  return (
    <div className="flex flex-col gap-6">
      <HeaderShop active={active} setActive={setActive} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
        {filteredLunchboxes?.map((item) => (
          <LunchboxItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}