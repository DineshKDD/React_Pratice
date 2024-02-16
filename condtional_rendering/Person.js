import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>{person.name} and {person.age} yearls old , 
  i know {person.skill}</h2>
    </div>
  )
}

export default Person
