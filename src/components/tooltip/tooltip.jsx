import React from "react";

import { TooltipWrapper } from "./style";
import { useTooltipStore } from "../../stores/tooltip-store";

const Tooltip = () => {
  const { left, top } = useTooltipStore().tooltipState;

  const date = new Date();
  const isAM = Boolean(date.getHours() < 12);

  return (
    <TooltipWrapper left={left} top={top}>
      <p>{isAM ? "오전" : "오후"}</p>
      <p>{`${date.getHours()} : ${date.getMinutes()}`}</p>
    </TooltipWrapper>
  );
};

export default Tooltip;
