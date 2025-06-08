"use client"
import { Nutritionist } from "@/components/nutritionist";
import { nutritionistType } from "@/types/nutritionist";
import { useEffect, useState } from "react"
import { ScheduleDialog } from "../../schedule/schedule-dialog";

export const NutritionistsList = () => {
  const [nutritionists, setNutritionists] = useState<nutritionistType[] | null>(null);
  const [nutriDialog, setNutriDialog] = useState<nutritionistType | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchNutritionists = async () => {
      const res = await fetch('/nutritionistsData.json');
      const data = await res.json();

      setNutritionists(data);
    };

    fetchNutritionists();
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {nutritionists?.map((i) => (
        <Nutritionist key={i.id}
          item={i} setNutriDialog={setNutriDialog}
          setIsOpen={setIsOpen}
          showBtn
        />
      ))}
      <ScheduleDialog
        nutritionist={nutriDialog!}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}