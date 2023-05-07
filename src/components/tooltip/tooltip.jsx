import React from "react";

import { useTooltipStore } from "../../stores/tooltip-store";
import { useClockStore } from "../../stores/clock-store";
import { TooltipWrapper } from "./style";

const Tooltip = () => {
  const { left, top } = useTooltipStore().tooltipState;
  const { hour, minute, second, displayType } = useClockStore().time;

  const isAM = Boolean(hour < 12);

  return (
    <TooltipWrapper left={left} top={top}>
      {displayType === "military" || <p>{isAM ? "오전" : "오후"}</p>}
      <p>{`${
        displayType === "military" || isAM ? hour : hour - 12
      } : ${minute} : ${second}`}</p>
    </TooltipWrapper>
  );
};

export default Tooltip;
