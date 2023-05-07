import { create } from "zustand";

export const useClockStore = create((set) => ({
  time: {
    hour: 0,
    minute: 0,
    second: 0,
    displayType: "military",
  },
  setTime: ({ hour, minute, second }) =>
    set(({ time }) => ({ time: { ...time, hour, minute, second } })),
  setDisplayType: (type) =>
    set(({ time }) => ({ time: { ...time, displayType: type } })),
}));
