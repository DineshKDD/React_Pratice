import React, { Component } from 'react'
 class RefsclassComponents extends Component {
    constructor(props) {
      super(props)
      this.inputRef =  React.createRef()
    }
   
    // call using parent class using refs
    focusInput(){
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}></input>

        {/* normal calling the foucsInput() within the child by onclick 
        event to focus the input field  */}
        
        {/* <button onClick={()=> this.focusInput()}>RefsclassComponents</button> */}
      </div>
    )
  }
}

export default RefsclassComponents