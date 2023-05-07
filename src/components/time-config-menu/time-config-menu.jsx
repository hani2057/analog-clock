import React from "react";

import { useClockStore } from "../../stores/clock-store";
import { TimeConfigMenuWrapper } from "./style";

const TimeConfigMenu = () => {
  const { setDisplayType } = useClockStore();

  return (
    <TimeConfigMenuWrapper>
      <p>표시 형식</p>
      <input
        type="radio"
        name="hour-format"
        value="military"
        id="military"
        defaultChecked
        onChange={(e) => setDisplayType(e.target.value)}
      />
      <label htmlFor="military">24 Hours</label>
      <input
        type="radio"
        name="hour-format"
        value="standard"
        id="standard"
        onChange={(e) => setDisplayType(e.target.value)}
      />
      <label htmlFor="standard">12 Hours</label>
    </TimeConfigMenuWrapper>
  );
};

export default TimeConfigMenu;
