import { create } from "zustand";

type scheduleStore = {
  schedule: Date | null;
  setSchedule: (newDate: Date) => void;
}

export const useScheduleStore = create<scheduleStore>((set) => ({
  schedule: null,
  setSchedule: (newDate) => set({ schedule: newDate })
}));