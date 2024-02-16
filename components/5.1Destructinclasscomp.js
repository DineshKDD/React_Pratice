import React, { Component } from 'react'

 class Destructinclasscomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    const {name, heroName} = this.props
    return (
      <div>
        {name} , and {heroName}
      </div>
    )
  }
}
export default Destructinclasscomp