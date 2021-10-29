import './App.css';
import { words } from './5000Words';
import { useEffect, useState } from 'react';

function App() {
  let numWordStor = localStorage.getItem('numWord');

  if (!numWordStor) {
    numWordStor = 0;
    localStorage.setItem('numWord', numWordStor);
  }

  const [open, setOpen] = useState(false);
  const [numWord, setNumWord] = useState(+numWordStor);

  useEffect(() => {}, [numWord]);

  const prev = () => {
    if (numWord <= 0) {
      return;
    }
    setNumWord(numWord - 1);
    setOpen(false);
    localStorage.setItem('numWord', numWord - 1);
  };

  const next = () => {
    if (numWord >= words.length) {
      return;
    }
    setNumWord(numWord + 1);
    setOpen(false);
    localStorage.setItem('numWord', numWord + 1);
  };

  let wordNode;
  if (!open) {
    wordNode = (
      <div className='wordEng'>
        <div className='wordString'>{words[numWordStor].ru}</div>
      </div>
    );
  } else {
    let word = words[numWordStor];
    wordNode = (
      <div className='wordRu'>
        <img src={word.img} width={250}></img>
        <div className='wordString'>{word.eng}</div>
        <div>{word.example}</div>
      </div>
    );
  }

  return (
    <div className='App'>
      <div className='wordContainer'>
        <button className='pre toggle' onClick={prev}>
          pre
        </button>
        {wordNode}
        <button className='next toggle' onClick={next}>
          next
        </button>
      </div>
      <button className='open' onClick={() => setOpen(!open)}>
        open
      </button>
    </div>
  );
}

export default App;
