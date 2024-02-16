import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topic: 'react',
      }
    }

    usernameHandler= (event)=>{
           this.setState({
             username: event.target.value
           })
    }

    commentsHandler =(event)=>{
        this.setState({
         comments: event.target.value
        })
    }

    topicHandler =(event)=>{
        this.setState({
          topic: event.target.value
        })
    }

    submitHandler = event =>{
        alert(`${this.state.username} and ${this.state.comments} , ${this.state.topic}`)
        event.preventDefault()
    }
    
  render() {
    return (
      <Form onSubmit={this.submitHandler}>
      <div>
      <label>Username</label>
        <input value={this.state.username} type='text' onChange={this.usernameHandler}></input>
        </div>

        <div>
            <label>Comments</label>
            <textarea type='text' value={this.state.comments} onChange={this.commentsHandler}></textarea>
        </div>

        <div>
            <select value={this.state.topic} onChange={this.topicHandler}>
                <option value='react'>react</option>
                <option value='angualr'>angualr</option>
                <option value='vuejs'>vuejs</option>
            </select>

        </div>

        <button  type='submit'>Submit</button>
      </Form>
    )
  }
}
export default Form