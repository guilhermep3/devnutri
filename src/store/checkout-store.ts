import { create } from "zustand";

type Address = {
  street: string;
  number: string;
  complement?: string;
  district: string;
  city: string;
  state: string;
};

type CheckoutStore = {
  name: string;
  address: Address;
  setName: (newName: string) => void;
  setAddress: (address: Address) => void;
};

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  name: '',
  address: {
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: ''
  },
  setName: (name) => set(() => ({ name })),
  setAddress: (address) => set(() => ({ address }))
}));
