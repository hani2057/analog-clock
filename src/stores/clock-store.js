import { create } from "zustand";

export const useClockStore = create((set) => ({
  time: {
    hourDegree: 0,
    minuteDegree: 0,
    secondDegree: 0,
  },
  setHourDegree: (newDegree) => {
    set((state) => ({
      time: {
        ...state.time,
        hourDegree: newDegree,
      },
    }));
  },
  setMinuteDegree: (newDegree) => {
    set((state) => ({
      time: {
        ...state.time,
        minuteDegree: newDegree,
      },
    }));
  },
  setSecondDegree: (newDegree) => {
    set((state) => ({
      time: {
        ...state.time,
        secondDegree: newDegree,
      },
    }));
  },
  setTimeDegrees: ({ newHourDegree, newMinuteDegree, newSecondDegree }) => {
    set(() => ({
      time: {
        hourDegree: newHourDegree,
        minuteDegree: newMinuteDegree,
        secondDegree: newSecondDegree,
      },
    }));
  },
}));
