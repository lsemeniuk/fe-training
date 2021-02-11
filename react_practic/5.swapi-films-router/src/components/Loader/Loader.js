import React from 'react'
import './Loader.scss'

const Loader = () => {
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

export default Loader