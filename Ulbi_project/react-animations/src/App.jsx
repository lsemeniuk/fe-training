import { useState } from 'react';
import './App.css';

function App() {
  const [loaderVisible, setLoaderVisible] = useState(false);

  return (
    <div className='App'>
      <button onClick={() => setLoaderVisible(!loaderVisible)}>{loaderVisible ? 'hide' : 'show'}</button>
      <div className='wrap'>{loaderVisible && <div className='circle' />}</div>
    </div>
  );
}

export default App;
