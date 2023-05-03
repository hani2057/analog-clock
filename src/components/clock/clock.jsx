import React, { useEffect } from "react";

import { useClockStore } from "../../stores/clock-store";
import {
  ClockBody,
  ClockWrapper,
  HourHand,
  MinuteHand,
  SecondHand,
} from "./style";

const Clock = () => {
  const { hourDegree, minuteDegree, secondDegree } = useClockStore().time;
  const { setTimeDegrees } = useClockStore();

  // 최초 렌더링시 현재 시각을 반영
  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const newSecondDegree = second * (360 / 60);
    const newMinuteDegree = minute * (360 / 60) + second * (6 / 60);
    const newHourDegree =
      hour * (360 / 24) + minute * (30 / 360) + second * (30 / 3600);

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

  // console.log("h", hourDegree);
  // console.log("m", minuteDegree);
  // console.log("s", secondDegree);

  return (
    <ClockWrapper>
      <ClockBody>
        <HourHand degree={hourDegree} />
        <MinuteHand degree={minuteDegree} />
        <SecondHand degree={secondDegree} />
      </ClockBody>
    </ClockWrapper>
  );
};

export default Clock;
