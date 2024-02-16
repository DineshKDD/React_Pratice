import React, { Component } from 'react'

 class ShortcircuitOperator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         islogged: false
      }
    }
    
  render() {
  return this.state.islogged && <div>Welcome Dinesh</div>
  }
}
export default ShortcircuitOperator