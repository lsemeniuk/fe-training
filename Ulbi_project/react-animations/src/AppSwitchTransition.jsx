import { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './AppSwitchTransition.css';

function AppSwitchTransition() {
  const [mode, setMode] = useState('out-in');
  const [toggle, setToggle] = useState(false);

  function changeHandler(e) {
    setMode(e.target.value);
  }

  return (
    <div className='App'>
      <div>
        <label htmlFor='out-in'>out-in</label>
        <input onChange={e => changeHandler(e)} id='out-in' value='out-in' name='radio' type='radio' />
        <label htmlFor='in-out'>in-out</label>
        <input onChange={e => changeHandler(e)} id='in-out' value='in-out' name='radio' type='radio' />
      </div>
      <SwitchTransition mode={mode}>
        <CSSTransition key={toggle} timeout={500} classNames='fade'>
          <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hello world' : 'Goodbye world'}</button>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default AppSwitchTransition;
