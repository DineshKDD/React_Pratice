import React from 'react'

function Childcomponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler('child')}>Greet</button>
    </div>
  )
}

export default Childcomponent
