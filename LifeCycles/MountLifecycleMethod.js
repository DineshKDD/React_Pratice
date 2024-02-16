import React, { Component } from 'react'
import UpdatingLifecycleMethod from './UpdatingLifecycleMethod'

 class MountLifecycleMethod extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Dinesh'
      }
      console.log('A constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('A getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('A componentDidMount')
    }

    changeState(){
        this.setState({
            name: 'Dinesh'
        })
    }
    

  render() {
    console.log('A render')
    return (
      <React.Fragment>
        <div>LifeCycle A</div>
        <button onClick={this.changeState.bind(this)}>click</button>
        <UpdatingLifecycleMethod></UpdatingLifecycleMethod>
      </React.Fragment>
    )
  }
}
export default MountLifecycleMethod