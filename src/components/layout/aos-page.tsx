"use client"
import AOS from "aos";
import React, { useEffect } from "react";
import 'aos/dist/aos.css';

export const AosPage = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      { children }
    </>
  )
}