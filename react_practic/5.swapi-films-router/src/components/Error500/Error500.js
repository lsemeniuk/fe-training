import React, { PureComponent } from 'react';
import './Error500.scss';
import deathStar from './death-star.png';

class Error500 extends PureComponent {
  render() {
    console.log(deathStar);
    
    return (
      <div className='error-500'>
        <div><img src={deathStar} alt='death-star'></img></div>
        <h3>An error has occurred</h3>
        <h4>But we already sent droids to fix it</h4>
      </div>
    )
  }
}

export default Error500