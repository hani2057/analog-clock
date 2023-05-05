import React, { useEffect, useState } from "react";

import { useTooltipStore } from "../../stores/tooltip-store";
import {
  ClockBody,
  ClockWrapper,
  HourHand,
  MinuteHand,
  SecondHand,
} from "./style";

const Clock = () => {
  // 툴팁 관련 상태
  const { setShowTooltip, setTooltipPosition } = useTooltipStore();

  // 시계 관련 상태
  const [timeDegrees, setTimeDegrees] = useState({
    hourDegree: 0,
    minuteDegree: 0,
    secondDegree: 0,
  });

  // 최초 렌더링시 현재 시각을 반영
  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const timeDegrees = timeToDegree(hour, minute, second);
    setTimeDegrees(timeDegrees);
  }, []);

  // 시각을 각도로 변환
  const timeToDegree = (hour, minute, second) => {
    const secondDegree = second * (360 / 60);
    const minuteDegree = minute * (360 / 60) + second * (6 / 60);
    const hourDegree = (hour % 12) * (360 / 12) + minute * (30 / 60);

    return { hourDegree, minuteDegree, secondDegree };
  };

  // 툴팁 위치를 마우스 위치로 지정
  const moveTooltip = (e) =>
    setTooltipPosition({ left: e.clientX + 20, top: e.clientY - 70 });

  return (
    <ClockWrapper>
      <ClockBody
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onMouseMove={(e) => moveTooltip(e)}
      >
        <HourHand degree={timeDegrees.hourDegree} />
        <MinuteHand degree={timeDegrees.minuteDegree} />
        <SecondHand degree={timeDegrees.secondDegree} />
      </ClockBody>
    </ClockWrapper>
  );
};

export default Clock;
