import React from 'react'

function Cssstyles(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
       <h1 className={`${className} font-size `}>Css style sheets</h1>
    </div>
  )
}

export default Cssstyles
