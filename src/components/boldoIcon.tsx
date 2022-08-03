import React from "react";

interface BoldoIconProps {
  color?: string,
  style?: React.CSSProperties
}
function BoldoIcon({ color = 'var(--green)', style }: BoldoIconProps) {
  return <span className="boldoIcon" style={{ "--boldoIcon-bg-color": color, ...style } as React.CSSProperties}>
    <span className="head"></span>
    <span className="tail"></span>
  </span >;
}

export default BoldoIcon;
