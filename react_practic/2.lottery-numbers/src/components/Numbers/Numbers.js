import React, { PureComponent } from 'react'
import Button from '../Button/Button';

export default class Numbers extends PureComponent {
  render() {
    const { numbers, deleteNumber } = this.props;

    const numberList = numbers.map((n, i) => (
      <div className='number__item' key={i}>{n}<Button title='X' onClick={() => deleteNumber(n)} /></div>
    ))
    return (
      <div>
        {numberList}
      </div>
    )
  }
}
