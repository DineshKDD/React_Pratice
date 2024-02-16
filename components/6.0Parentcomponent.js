import React, { Component } from 'react'
import Childcomponent from './6.0Childcomponent'

 class Parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
    }
  
    greetHandler(childName){
        alert(`${this.state.parentName} and ${childName}`)
    }

    
  render() {
    return (
      <div>
        {this.state.parentName}
        <Childcomponent greetHandler= {this.greetHandler.bind(this)}></Childcomponent>
      </div>
    )
  }
}
export default Parentcomponent