"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  '/lunchbox/lunchbox-1.png',
  '/lunchbox/lunchbox-2.png',
  '/lunchbox/lunchbox-3.png',
  '/lunchbox/lunchbox-4.png',
  '/lunchbox/lunchbox-5.png',
];

export const HeroImage = () => {
  const [translateDiv, setTranslateDiv] = useState(140);
  const [currentImage, setCurrentImage] = useState('/salad-plate.png');
  const [secondaryImages, setSecondaryImages] = useState(
    heroImages.filter(img => img !== currentImage)
  );

  const updateTranslate = () => {
    const width = window.innerWidth;
    if (width > 1024) {
      setTranslateDiv(180);
    } else if (width > 768) {
      setTranslateDiv(150);
    } else if (width > 640) {
      setTranslateDiv(120);
    } else {
      setTranslateDiv(90);
    }
  };

  useEffect(() => {
    updateTranslate();
    window.addEventListener("resize", updateTranslate);
    return () => window.removeEventListener("resize", updateTranslate);
  }, []);

  function updateImage(imgClicked: string) {
    const newSecondaries = secondaryImages.map((img) => 
      img === imgClicked ? currentImage : img
    )
    setSecondaryImages(newSecondaries);
    setCurrentImage(imgClicked);
  };

  return (
    <div className="relative w-64 h-64 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] flex justify-center items-center">
      <img
        src={`${currentImage}`}
        alt="salad-plate"
        className="object-contain w-3/4 h-3/4 z-20 rounded-full"
      />
      {secondaryImages.map((img, i) => {
        const angle = (360 / 8) * i;
        return (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
            style={{
              transform: `rotate(${angle}deg) translate(${translateDiv}px) rotate(-${angle}deg)`,
            }}
            onClick={() => updateImage(img)}
          >
            <Image
              src={img}
              alt={`lunchbox-${i + 1}`}
              width={60}
              height={60}
              className="w-14 sm:w-16 animate-[spin_16s_linear_infinite]"
            />
          </div>
        );
      })}
    </div>
  );
};
