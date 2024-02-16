import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './userContext'

export class ComponentB extends Component {
  render() {
    return (
        <div>
            Welcome to {this.context}
     <ComponentC></ComponentC>

        </div>
    )
  }
}

ComponentB.contextType = UserContext
export default ComponentB
