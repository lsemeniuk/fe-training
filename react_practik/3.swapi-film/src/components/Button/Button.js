import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    const {title, onClick} = this.props;

    return (
      <button onClick={onClick}>{title}</button>
    )
  }
}
