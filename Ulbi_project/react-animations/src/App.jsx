import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

function App() {
  const [loaderVisible, setLoaderVisible] = useState(false);

  return (
    <div className='App'>
      <button onClick={() => setLoaderVisible(!loaderVisible)}>{loaderVisible ? 'hide' : 'show'}</button>
      <div className='wrap'>
        {/* <Transition
          in={loaderVisible}
          timeout={500}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
          {state => <div className={`circle ${state}`} />}
        </Transition> */}
        <CSSTransition
          in={loaderVisible}
          timeout={500}
          classNames={{
            enterActive: 'circle-show',
            enterDone: 'circle-rotate',
            exitActive: 'circle-hide',
          }}
          mountOnEnter
          unmountOnExit
        >
          <div className='circle'></div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default App;
