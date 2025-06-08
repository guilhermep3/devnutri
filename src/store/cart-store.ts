"use client"
import { cart } from "@/types/cart";
import { lunchboxType } from "@/types/lunchbox";
import { create } from "zustand";

type cartStore = {
  cart: cart[];
  updateCart: (lunchbox: lunchboxType, quantity: number) => void;
  isModalOpen: boolean;
  setIsModalOpen: (newValue: boolean) => void;
}

export const useCartStore = create<cartStore>((set) => ({
  cart: [],
  isModalOpen: false,
  updateCart: (lunchbox: lunchboxType, quantity: number) => set((state) => {
    let newCart = state.cart;
    let lunchboxIndex = newCart.findIndex((i) => i.lunchbox.id === lunchbox.id);

    if (lunchboxIndex < 0) {
      newCart.push({ lunchbox, quantity: 0 });
      lunchboxIndex = newCart.findIndex((i) => i.lunchbox.id === lunchbox.id);
    }

    newCart[lunchboxIndex].quantity += quantity;

    if (newCart[lunchboxIndex].quantity <= 0) {
      newCart = newCart.filter((i) => i.lunchbox.id !== lunchbox.id)
    }

    console.log("newCart: ", newCart)
    return { cart: newCart };
  }),
  setIsModalOpen: (newValue: boolean) => set({ isModalOpen: newValue })
}))