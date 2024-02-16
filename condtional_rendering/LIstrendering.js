import React from 'react'
import Person from './Person'

function LIstrendering() {

  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age:25,
      skill:'Angular'
    },
    {
      id: 2,
      name: 'Diana',
      age:31,
      skill:'React'
    },
    {
      id: 3,
      name: 'Clark',
      age:30,
      skill:'vuejs'
    }
    
  ]

  const personLIst = persons.map( person => <Person key={person.name} person={person}></Person> )

    const items =['Bruce', 'Diana', 'Clark']
    const itemlist = items.map((item, index)=> <h2 key={index}>{item}</h2>)
  return (
    <div>
     {itemlist}
      {personLIst}
    </div>
  )
}

export default LIstrendering
