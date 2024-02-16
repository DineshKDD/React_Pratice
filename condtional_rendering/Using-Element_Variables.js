import React, { Component } from 'react'

class Element_Variables extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         islogged: false
      }
    }
    
  render() {
    let messge 
     if(this.state.islooged){
        messge = <h1>Welcome Dinesh</h1>
     }
     else{
        messge = <h1>Welcome Guest</h1>
     }

     return <div>{messge}</div>
  }
   
  
}
export default  Element_Variables