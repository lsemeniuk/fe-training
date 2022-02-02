import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './AppTransitionGroup.css';

function AppTransitionGroup() {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([
    { id: 1, text: 'Зняти відео' },
    { id: 2, text: 'про реакт' },
    { id: 3, text: 'transition' },
  ]);

  function addTodo() {
    setTodoList([...todoList, { id: Date.now(), text }]);
  }

  return (
    <div className='App'>
      <div>
        <input onChange={e => setText(e.target.value)} value={text} type='text' />
        <button onClick={() => addTodo()}>Додати</button>
      </div>
      <TransitionGroup conponent='ul'>
        {todoList.map(({ id, text }) => (
          <CSSTransition key={id} timeout={500} classNames='todo'>
            <li className='todo' onClick={() => setTodoList([...todoList.filter(e => e.id !== id)])}>
              {id} {text}
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default AppTransitionGroup;
