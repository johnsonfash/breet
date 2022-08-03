import React from 'react'

function Glass({ children }: { children: React.ReactNode }) {
  return (
    <div className='glass'>
      <div className="menu">
        <span className="close"></span>
        <span className="minimize"></span>
        <span className="expand"></span>
      </div>
      <div className="glass-children">
        {children}
      </div>
    </div>
  )
}

export default Glass