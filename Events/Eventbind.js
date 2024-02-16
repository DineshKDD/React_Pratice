import React, { Component } from 'react'

export default class Eventbind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

    //   this.eventHandler = this.eventHandler.bind(this)
    }

    // eventHandler(){
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    // }

    eventHandler = ()=>{
        this.setState({
            message:'Goodbye'
        })
    }
   
    
  render() {
    return (
      <div>
        {/* <button onClick={this.eventHandler.bind(this)}></button> */}
        {/* <button onClick={()=>{this.eventHandler()}}></button> */}
        <button onClick={this.eventHandler}></button>
      </div>
    )
  }
}
