import React, { Component } from 'react'

export default class RenderCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count : 0
    //   }
    // }

    // clickHandler(){
    //     this.setState( prevState =>{
    //         return {count: prevState.count + 1}
    //     })
    // }
    
  render() {
    const {count, increment} = this.props
    return (
      <button onClick={increment}>{count} Clicked times</button>
    )
  }
}
