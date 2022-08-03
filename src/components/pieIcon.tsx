import React from 'react'

interface PieIconProps {
  color?: string,
  width?: string,
  height?: string,
  style?: React.CSSProperties
}
function PieIcon({ color = 'white', style }: PieIconProps) {
  return (
    <div className="PieIcon" style={{ "--PieIcon-bg-color": color, ...style } as React.CSSProperties}>
      <div className="pie-circle rotate">
        {
          Array(20).fill(0).map((item, idx) =>
            <span className="ex-line"></span>
          )
        }
      </div>
      <div className="pie-circle one">
      </div>
      <div className="pie-circle two">
      </div>
    </div>
  )
}

export default PieIcon