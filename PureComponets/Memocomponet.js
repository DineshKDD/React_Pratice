import React from 'react'

function Memocomponet({name}) {
    console.log('Rendering Memocomponent')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(Memocomponet) 
