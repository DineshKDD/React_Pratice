import React, { Component } from 'react'

 class UserGreet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         islooged: false
      }
    }
    
  render() {
   if(this.state.islooged){
    return <h1>Welcome Dinesh</h1>
   }
   else{
    return <h1>Welcome Guest</h1>
   }
}

     
}
export default UserGreet