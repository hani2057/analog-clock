import { create } from "zustand";

export const useClockStore = create((set) => ({
  time: {
    hour: 0,
    minute: 0,
    second: 0,
  },
  setTime: ({ hour, minute, second }) =>
    set(() => ({ time: { hour, minute, second } })),
}));
