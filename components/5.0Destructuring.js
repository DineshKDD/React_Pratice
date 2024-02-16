import React from 'react'

// const Destructuring=({name, heroName})=> {
//   return (
//     <div>
//       {name}, and {heroName}
//     </div>
//   )
// }

const Destructuring = (props)=>{
    const {name, heroName} = props

    return(
        <div>
            {name} and {heroName} 
        </div>
    )
}

export default Destructuring
