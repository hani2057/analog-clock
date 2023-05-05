import React, { useEffect, useState } from "react";

import { useClockStore } from "../../stores/clock-store";
import { useTooltipStore } from "../../stores/tooltip-store";
import {
  ClockBody,
  ClockWrapper,
  HourHand,
  MinuteHand,
  SecondHand,
  HourMarkerWrapper,
  HourMarkerDiv,
  HourMarker,
} from "./style";

const Clock = () => {
  // 툴팁 관련 상태
  const { setShowTooltip, setTooltipPosition } = useTooltipStore();

  // 시계 관련 상태
  const { setTime } = useClockStore();
  const [timeDegrees, setTimeDegrees] = useState({
    hourDegree: 0,
    minuteDegree: 0,
    secondDegree: 0,
  });

  useEffect(() => {
    // 최초 렌더링시 현재 시각을 반영
    setTimeAndDegrees();

    // 매초마다 시각을 업데이트
    const updateTime = setInterval(() => setTimeAndDegrees(), 1000);
    return () => clearInterval(updateTime);
  }, []);

  // 시각과 각도를 현재 시각으로 지정
  const setTimeAndDegrees = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    setTime({ hour, minute, second });
    setTimeDegrees(timeToDegree(hour, minute, second));
  };

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
        {/* 시계 숫자 */}
        <HourMarkerWrapper>
          {Array.from({ length: 6 }, (_, i) => i + 1).map((num) => (
            <HourMarkerDiv degree={30 * (num - 3)} key={num}>
              <HourMarker degree={30 * (3 - num)}>{6 + num}</HourMarker>
              <HourMarker degree={30 * (3 - num)}>{0 + num}</HourMarker>
            </HourMarkerDiv>
          ))}
        </HourMarkerWrapper>

        {/* 시계 바늘 */}
        <HourHand degree={timeDegrees.hourDegree} />
        <MinuteHand degree={timeDegrees.minuteDegree} />
        <SecondHand degree={timeDegrees.secondDegree} />
      </ClockBody>
    </ClockWrapper>
  );
};

export default Clock;
