import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from  './View/Dashboard'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Dashboard></Dashboard>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();