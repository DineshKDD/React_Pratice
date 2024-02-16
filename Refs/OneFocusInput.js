import React, { Component } from 'react'
import RefsclassComponents from './OneRefsclassComponents'

 class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.componentRef = React.createRef()
 
    }

    clickHanlder (){
        this.componentRef.current.focusInput()
    }
    
  render() {
    return (
      <div>
      <button onClick={()=> this.clickHanlder()}>FocusInput</button>
         <RefsclassComponents ref={this.componentRef}></RefsclassComponents>
      </div>
    )
  }
}
export default FocusInput