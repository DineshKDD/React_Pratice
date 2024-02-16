import React from 'react'

function FunctionalEvents() {

    function clickHandler(){
        console.log('clicked')
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionalEvents
