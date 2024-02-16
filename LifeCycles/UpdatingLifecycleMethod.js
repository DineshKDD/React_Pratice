import React, { Component } from 'react'

 class UpdatingLifecycleMethod extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Dinesh'
      }
      console.log('B constructor')
    }
 
    static getDerivedStaticFormProps(){
        console.log('B getDerivedStaticFormProps')
        return null
    }

    componentDidUpdate(){
        console.log('B componentDidUpdate')
        
    }

    shouldComponentUpdate(){
        console.log("B shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log(' B getSnapshotBeforeUpdate')
        return null
    }

    
  render() {
    console.log('B render')
    return (
      <div>
        LifeCycle B
      </div>
    )
  }
}
export default UpdatingLifecycleMethod