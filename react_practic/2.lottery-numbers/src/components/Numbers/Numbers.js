import React, { Component } from 'react'
import Button from '../Button/Button'

export default class Numbers extends Component {
  render() {
    const {numbers, deleteNumbers} = this.props;

    const numbersList = numbers.map((n, i) => (
      <div key={i}>{n} <Button title='X' onClick={() => deleteNumbers(n)}/></div>
    ))

    return (
      <div>
        {numbersList}
      </div>
    )
  }
}
