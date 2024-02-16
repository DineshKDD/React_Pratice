import React, { Component } from 'react'

 class Classevent extends Component {

    clickHandler(){
        console.log('cliked')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}
export default  Classevent