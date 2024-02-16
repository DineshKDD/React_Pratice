import React, { PureComponent } from 'react'

class PUREcomponet extends PureComponent {
  render() {
    console.log('purecomponent')
    return (
      <div>
        PureComponent {this.props.name}
      </div>
    )
  }
}

export default PUREcomponet
