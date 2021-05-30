import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from  './View/Dashboard'
import * as serviceWorker from './serviceWorker';

import ShoppingList from './Learn/ShoppingList'
import Board from './Learn/Board'
import Square from './Learn/Square'
import Game from './Learn/Game'

ReactDOM.render(
  <React.StrictMode>
    <Dashboard></Dashboard>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();