import React, { Component } from 'react'
// possible use case ref to focus input field when we enter page automatically
// another case to fetch the input value.
export default class Refsdemo extends Component {
    constructor(props) {
      super(props)
      this.ref = React.createRef()
      this.cdRef = null
      this.setcdRef = element => this.cdRef = element
    }

    componentDidMount(){
        // first approach
        // this.ref.current.focus()

        if(this.cdRef){
            this.cdRef.focus()
        }
    }

  clickHandler(){
    console.log(this.ref.current.value)
    
  }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.setcdRef}></input>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
      </div>
    )
  }
}
