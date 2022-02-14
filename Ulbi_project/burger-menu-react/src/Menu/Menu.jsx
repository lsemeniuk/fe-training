import React from 'react';
import './Menu.css';

const Menu = ({ active, setActive, header, items }) => {
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
      <div className='blur' />
      <div className='menu__content' onClick={e => e.stopPropagation()}>
        <div className='menu__header'>{header}</div>
        <ul>
          {items.map(item => (
            <li>
              <a href={item.href}>{item.value}</a>
              <i className='material-icons'>{item.icon}</i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
