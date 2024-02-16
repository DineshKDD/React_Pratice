import React from 'react'

function Demo({heroName}) {
     if(heroName === 'Joker'){
        throw new Error('Not a hero')
    }
  return (
    <div>
   
      {heroName}
    </div>
  )
}

export default Demo
