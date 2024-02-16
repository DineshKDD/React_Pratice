import React, { Component } from 'react'
import UpdatedComponet from './Withcounter'
 class HoverCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      counter: 0
    //   }
    // }
    
    // incrementCount(){
    //     this.setState(prevState =>{
    //         return {counter: prevState.counter + 1}
    //     })
    // }
    
  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
          <h2 onMouseOver={incrementCount}> Hover {count} Times</h2>
      </div>
    )
  }
}
export default UpdatedComponet(HoverCounter) 