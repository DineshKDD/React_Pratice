import React, { Component } from 'react'
import ForwardRefInput from './TwoForwardRefInput'

 class ParentForwardRefInput extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      
    }

    clickHanlder(){
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <ForwardRefInput ref={this.inputRef}></ForwardRefInput>
        <button onClick={this.clickHanlder.bind(this)}>FocusInput</button>
      </div>
    )
  }
}

export default ParentForwardRefInput
