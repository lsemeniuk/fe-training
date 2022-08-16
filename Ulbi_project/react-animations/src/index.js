import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppSwitchTransition from './AppSwitchTransition';
import AppTransitionGroup from './AppTransitionGroup';

ReactDOM.render(
  <>
    <App />
    <AppSwitchTransition />
    <AppTransitionGroup />
  </>,
  document.getElementById('root')
);
