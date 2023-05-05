import React, { useEffect } from "react";

import { useTooltipStore } from "../../stores/tooltip-store";
import { useClockStore } from "../../stores/clock-store";
import { TooltipWrapper } from "./style";

const Tooltip = () => {
  const { left, top } = useTooltipStore().tooltipState;
  const {
    time: { hour, minute, second },
    setTime,
  } = useClockStore();

  // 최초 렌더링시 현재 시각을 반영
  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    setTime({ hour, minute, second });
  }, []);

  // 매초마다 시각을 업데이트
  useEffect(() => {
    const updateTime = setInterval(() => {
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();

      setTime({ hour, minute, second });
    });

    return () => clearInterval(updateTime);
  }, []);

  const isAM = Boolean(hour < 12);

  return (
    <TooltipWrapper left={left} top={top}>
      <p>{isAM ? "오전" : "오후"}</p>
      <p>{`${isAM ? hour : hour - 12} : ${minute} : ${second}`}</p>
    </TooltipWrapper>
  );
};

export default Tooltip;
