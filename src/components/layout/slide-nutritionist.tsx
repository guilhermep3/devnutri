"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Suspense, useEffect, useState } from "react";
import { Nutritionist } from "../nutritionist";
import { nutritionistType } from "@/types/nutritionist";

export const NutritionistSlide = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [nutritionists, setNutritionists] = useState<nutritionistType[] | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkMobileWidth() {
      window.innerWidth < 900 ? setSlidesPerView(1) : setSlidesPerView(3)
      setIsMobile(window.innerWidth > 768)
    }
    checkMobileWidth();
    window.addEventListener('resize', checkMobileWidth)
    return () => {
      window.removeEventListener('resize', checkMobileWidth)
    }
  }, []);

  useEffect(() => {
    async function fetchNutritionists() {
      const res = await fetch('/nutritionistsData.json');
      const data = await res.json();
      setNutritionists(data);
    };

    fetchNutritionists();
  }, []);

  useEffect(() => {
    console.log("nutritionists " + nutritionists)
  }, [nutritionists])

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
      navigation={isMobile}
      spaceBetween={10}
      className="w-full h-auto"
    >
      {nutritionists === null ? (
        <div>Carregando...</div>
      ) : nutritionists && nutritionists.map((item) => (
        <SwiperSlide key={item.id} className="flex justify-center items-center">
          <Suspense fallback={<div className="animate-pulse">Carregando nutri...</div>}>
            <Nutritionist item={item} />
          </Suspense>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}