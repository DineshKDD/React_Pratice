import React, { Component } from 'react'

class Regularcomponent extends Component {
    
    
    render(){
        console.log("regularcomponent")
         return (
    <div>
     Regularcomponent {this.props.name}
    </div>
  )
    }
 
}

export default Regularcomponent
