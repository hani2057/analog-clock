import { create } from "zustand";

export const useTooltipStore = create((set) => ({
  tooltipState: {
    showTooltip: false,
    left: "",
    top: "",
  },
  setShowTooltip: (newState) => {
    set((state) => ({
      tooltipState: { ...state.tooltipState, showTooltip: newState },
    }));
  },
  setTooltipPosition: ({ left, top }) => {
    set((state) => ({ tooltipState: { ...state.tooltipState, left, top } }));
  },
}));
