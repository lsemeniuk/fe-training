import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 50,
    step: 5
  }

  decrementCount = () => {
    const {count, step} = this.state
    this.setState({count: Math.max(count - step, 0)})
  }

  incrementCount = () => {
    const {count, step} = this.state
    this.setState({count: Math.min(count + step, 100)})
  }
  
  decrementStep = () => {
    this.setState({step: Math.max(this.state.step - 1, 0)})
  }

  incrementStep = () => {
    this.setState({step: Math.min(this.state.step + 1, 10)})
  }

  render() {
    const {count, step} = this.state

    return (
      <div>
        <div>
          <button onClick={this.decrementCount}>-</button>
          <span>{count}</span>
          <button onClick={this.incrementCount}>+</button>
        </div>
        <div>
          <button onClick={this.decrementStep}>-</button>
          <span>{step}</span>
          <button onClick={this.incrementStep}>+</button>
        </div>
      </div>
    )
  }
}
