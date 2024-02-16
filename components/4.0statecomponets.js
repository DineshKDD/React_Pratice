import React, { Component } from 'react'

 class statecomponets extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'welcome'
      }
    }

    messageHandler(){
        this.setState({
            message: 'subscribed'
        })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.messageHandler()}>Subscribe</button>
      </div>
    )
  }
}
export default statecomponets