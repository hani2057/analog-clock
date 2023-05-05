import React from "react";

const Tooltip = ({ position: { left, top } }) => {
  return (
    <div style={{ position: "absolute", left: left, top: top }}>Tooltip</div>
  );
};

export default Tooltip;
