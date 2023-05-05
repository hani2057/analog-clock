import React, { useEffect } from "react";

import { useClockStore } from "../../stores/clock-store";
import { useTooltipStore } from "../../stores/tooltip-store";
import {
  ClockBody,
  ClockWrapper,
  HourHand,
  MinuteHand,
  SecondHand,
} from "./style";

const Clock = () => {
  // 시계 관련 상태
  const { hourDegree, minuteDegree, secondDegree } = useClockStore().time;
  const { setTimeDegrees } = useClockStore();

  // 툴팁 관련 상태
  const { setShowTooltip, setTooltipPosition } = useTooltipStore();

  // 최초 렌더링시 현재 시각을 반영
  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const newSecondDegree = second * (360 / 60);
    const newMinuteDegree = minute * (360 / 60) + second * (6 / 60);
    const newHourDegree =
      (hour % 12) * (360 / 24) + minute * (30 / 360) + second * (30 / 3600);

    setTimeDegrees({ newHourDegree, newMinuteDegree, newSecondDegree });
  }, []);

  // 매초마다 각도를 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      const secondIncrement = 360 / 60;
      const minuteIncrement = 360 / 60 / 60;
      const hourIncrement = 360 / 60 / 60 / 12;

      setTimeDegrees({
        newHourDegree: hourDegree + hourIncrement,
        newMinuteDegree: minuteDegree + minuteIncrement,
        newSecondDegree: secondDegree + secondIncrement,
      });
    }, 1000);

    return () => clearInterval(timer);
  });

  const moveTooltip = (e) =>
    setTooltipPosition({ left: e.clientX, top: e.clientY });

  return (
    <ClockWrapper>
      <ClockBody
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onMouseMove={(e) => moveTooltip(e)}
      >
        <HourHand degree={hourDegree} />
        <MinuteHand degree={minuteDegree} />
        <SecondHand degree={secondDegree} />
      </ClockBody>
    </ClockWrapper>
  );
};

export default Clock;
