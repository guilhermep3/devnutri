"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  className?: string;
};

export const Leaf = ({ top, left, right, bottom, className }: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const leftResponsive = left !== undefined ? (isMobile ? left * 2 : left) : null;
  const rightResponsive = right !== undefined ? (isMobile ? right * 2 : right) : null;

  return (
    <div
      className={`absolute w-48 min-h-64 -z-10 opacity-30 ${className}`}
      style={{
        top,
        left: leftResponsive ? `-${leftResponsive}px` : left,
        right: rightResponsive ? `-${rightResponsive}px` : right,
        bottom,
      }}
    >
      <Image src="/leaf.png" alt="leaf" fill />
    </div>
  );
};
