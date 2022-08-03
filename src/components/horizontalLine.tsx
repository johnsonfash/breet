import React from 'react'

interface HorizontalLineProps {
  backgroundColor?: string,
  height?: string
}

function HorizontalLine({ height, backgroundColor }: HorizontalLineProps) {
  return (
    <span className='horizontal-line' style={{ height, backgroundColor }}></span>
  )
}

export default HorizontalLine