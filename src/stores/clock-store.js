import { create } from "zustand";

export const useClockStore = create((set) => ({
  time: {
    hourDegree: 0,
    minuteDegree: 0,
    secondDegree: 0,
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
