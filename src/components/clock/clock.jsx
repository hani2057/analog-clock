import React from "react";
import {
  ClockBody,
  ClockWrapper,
  HourHand,
  MinuteHand,
  SecondHand,
} from "./style";

const Clock = () => {
  return (
    <ClockWrapper>
      <ClockBody>
        <HourHand />
        <MinuteHand />
        <SecondHand />
      </ClockBody>
    </ClockWrapper>
  );
};

export default Clock;
