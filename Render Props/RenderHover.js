import React, { Component } from 'react'

export default class RenderHover extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: 0
    //   }
    // }

    // hoverHanlder(){
    //     this.setState(prevState =>{
    //         return {count: prevState.count + 1}
    //     })
    // }
    
  render() {
    const {count, increment} = this.props
    return (
      <div >
        <h1 onMouseOver={increment}>Hover{count} times</h1>
      </div>
    )
  }
}
