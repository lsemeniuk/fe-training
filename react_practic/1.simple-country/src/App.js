import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 100,
    step: 10
  }

  incrementCount = () => {
    const { count, step } = this.state;
    this.setState({count: Math.max(count - step, 0)})
  }
  decrementCount = () => {
    const { count, step } = this.state;
    this.setState({count: Math.min(count + step, 3000)})
  }
  incrementStep = () => {
    this.setState({step: Math.max(this.state.step - 5, 5)})
  }
  decrementStep = () => {
    this.setState({step: Math.min(this.state.step + 5, 20)})
  }
  render() {
    const { count, step } = this.state;
    return (
      <div>
        <div>
          <button onClick={this.incrementCount}>-</button>
          <span>{count}</span>
          <button onClick={this.decrementCount}>+</button>
        </div>
        <div>
          <button onClick={this.incrementStep}>-</button>
          <span>{step}</span>
          <button onClick={this.decrementStep}>+</button>
        </div>
      </div>
    )
  }
}
