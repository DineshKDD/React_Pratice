import React from 'react'

function Inline() {

    const heading = {
        fontsize: '72px',
        color:'red',       
    }
  return (
    <div>
        <h1 className={`${heading.color} , ${heading.fontsize}`}>Inline styles</h1>
    </div>
  )
}

export default Inline
