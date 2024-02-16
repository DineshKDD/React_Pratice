import React, { Component } from 'react'

 class SetState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    countHandler(){
    //     this.setState({
    //         count: this.state.count + 1
        
    //     }, ()=>{console.log(this.state.count)})

    //     console.log(this.state.count)
    // }

    this.setState((preState)=> ({
        count : preState.count + 1
    }))
}

    increamentFive(){
        this.countHandler()
        this.countHandler()
        this.countHandler()
        this.countHandler()
        this.countHandler()
    }
  render() {
    return (
      <div>
         <h1>{this.state.count}</h1>
         <button onClick={this.countHandler()}>Increment</button>
         <button onClick={this.increamentFive()}>Increment</button>
      </div>
    )
  }
}
export default SetState