import React, { Component } from 'react'
// import Regularcomponent from './Regularcomponent';
// import PUREcomponet from './Purecomponent';
import Memocomponet from './Memocomponet';

export class Parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Parent Component'
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Parent Component'
            })
        }, 2000);
    }
    
  render() {
    console.log('*************parent component')
    return (
      <div>
      {/* <Regularcomponent name={this.state.name}></Regularcomponent> */}
        ParentComponent
      {/* <PUREcomponet name={this.state.name}></PUREcomponet> */}
      <Memocomponet name={this.state.name}></Memocomponet>
      </div>
    )
  }
}

export default Parentcomponent
