import React, { PureComponent } from 'react'

export default class Button extends PureComponent {
  render() {
    const { title, onClick } = this.props
    return (
      <button onClick={onClick}>{title}</button>
    )
  }
}
