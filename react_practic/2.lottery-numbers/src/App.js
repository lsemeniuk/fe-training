import React, { Component } from 'react'
import Button from './components/Button/Button'
import Numbers from './components/Numbers/Numbers'
import './App.css'

const LIMIT = 20;

export default class App extends Component {
  state = {
    numbers: [],
  }

  generateNumber = () => {
    const { numbers } = this.state;
    let random;

    if (numbers.length >= LIMIT) {
      return
    }

    do {
      random = Math.ceil(Math.random() * LIMIT)
      console.log('Generate number', random);
    } while (numbers.includes(random))

    this.setState({numbers: [...numbers, random]})
  }

  deleteNumber = (n) => {
    const { numbers } = this.state;
    this.setState({numbers: numbers.filter(i => i !== n)})
  }

  render() {
    const { numbers } = this.state;
    return (
      <div>
        <Button title='Generate' onClick={this.generateNumber} />
        <Numbers numbers={numbers} deleteNumber={this.deleteNumber} />
      </div>
    )
  }
}
