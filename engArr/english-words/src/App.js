import './App.css';
import { words } from './uaWords3000';
import Trainer from './Components/Trainer/Trainer';

function App() {
  let pagesQuant = Math.ceil(words.length / 50);
  let items = [];
  for (let page = 1; page <= pagesQuant; page++) {
    let wordsCount = (page - 1) * 50;
    let engWords = [];
    let uaWords = [];
    words.forEach((e, i) => {
      if (wordsCount <= i && wordsCount + 49 >= i) {
        let engNode = (
          <div className='itemEng' key={e.eng}>
            {e.eng}
          </div>
        );
        let uaWord = e.ua;
        if (uaWord.length >= 70) {
          uaWord = uaWord.slice(0, 70);
        }
        let uaNode = (
          <div className='itemUA' key={e.eng + i}>
            {uaWord}
          </div>
        );
        engWords.push(engNode);
        uaWords.push(uaNode);
      }
    });
    items.push(<div className='itemsContainer'>{engWords}</div>, <div className='itemsContainerUA'>{uaWords}</div>);
  }

  return (
    <div className='container'>
      <div className='list'>{items}</div>
    </div>
  );
}

export default App;
