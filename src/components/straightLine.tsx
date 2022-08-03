import React from 'react'

interface StraightLineProps {
  width?: string,
  backgroundColor?: string,
  marginBottom?: string,
  height?: string
}

function StraightLine({ width, height, backgroundColor, marginBottom }: StraightLineProps) {
  return (
    <span className="straight-line" style={{ width, height, backgroundColor, marginBottom }}>
    </span>
  )
}

export default StraightLine