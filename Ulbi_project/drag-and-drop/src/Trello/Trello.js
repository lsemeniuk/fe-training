import React, { useState } from 'react';
import './trello.css';

const Trello = () => {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: 'Зробити',
      items: [
        { id: 1, title: 'Піти в магазин' },
        { id: 2, title: 'Викинути сміття' },
        { id: 3, title: 'Поїсти' },
      ],
    },
    {
      id: 2,
      title: 'Перевірити',
      items: [
        { id: 4, title: 'Code review' },
        { id: 5, title: 'Задача на факторіал' },
        { id: 6, title: 'Codewars' },
      ],
    },
    {
      id: 3,
      title: 'Зроблено',
      items: [
        { id: 7, title: 'Зняти вілео' },
        { id: 8, title: 'Змонтувати' },
        { id: 9, title: 'Опублікувати відео' },
      ],
    },
  ]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  function dragStartHandler(e, board, item) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }

  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className === 'item') {
      e.target.style.boxShadow = '0 4px 3px gray';
    }
  }

  function dragEndHandler(e) {
    e.target.style.boxShadow = 'none';
  }

  function dragLeaveHandler(e) {
    e.target.style.boxShadow = 'none';
  }

  function dropHandler(e, board, item) {
    e.preventDefault();

    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);

    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);

    e.target.style.boxShadow = 'none';

    setBoards(
      boards.map(b => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  }

  function dropCardHandler(e, board) {
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);

    setBoards(
      boards.map(b => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  }

  return (
    <div className='trello'>
      {boards.map(board => (
        <div
          onDragOver={e => dragOverHandler(e)}
          onDrop={e => dropCardHandler(e, board)}
          key={board.id}
          className='board'
        >
          <div className='board__title'>{board.title}</div>
          {board.items.map(item => (
            <div
              onDragStart={e => dragStartHandler(e, board, item)}
              onDragLeave={e => dragLeaveHandler(e)}
              onDragEnd={e => dragEndHandler(e)}
              onDragOver={e => dragOverHandler(e)}
              onDrop={e => dropHandler(e, board, item)}
              draggable
              className='item'
              key={item.id}
            >
              {item.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Trello;
