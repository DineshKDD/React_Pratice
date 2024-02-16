import React, { Component } from 'react'
import UpdatedComponet from './Withcounter'
 class ClickCounter extends Component {
  //   constructor(props) {
  //     super(props)
    
  //     this.state = {
  //        count: 0
  //     }
  //   }

  //  increment(){
  //   this.setState( prevState =>{
  //       return {count: prevState.count + 1}
  //   })
  //  }
    
  render() {
  const {count, incrementCount} = this.props
    return (
      <div>
        <button onClick={incrementCount}> {this.props.name} click {count} times</button>
      </div>
    )
  }
}
export default UpdatedComponet(ClickCounter)