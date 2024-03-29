import React, { Component } from 'react'

 class CounterHanlder extends Component {
     constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    increment = () => {
        this.setState( prevState =>{
            return {count: prevState.count + 1}
        })
    }
  render() {
    return (
      <div>
        {this.props.children(this.state.count, this.increment)}
      </div>
    )
  }
}

export default CounterHanlder
