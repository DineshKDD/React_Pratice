import React, { Component } from 'react'

 class TernaryOperator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogged: false
      }
    }
    
  render() {

    return this.state.isLogged ?
    <div>Welcome Dinesh</div> :
    <div>Welcome guest</div>
  
  }
}
export default TernaryOperator