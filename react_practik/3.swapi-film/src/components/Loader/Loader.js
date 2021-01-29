import React, { PureComponent } from 'react'
import './Loader.scss'

export default class Loader extends PureComponent {

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', margin: '.5rem'}}>
        <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
        </div>
    )
  }
}
