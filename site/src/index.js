import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BarApp from './BarApp'
import {
  loaders,
  loadersBar
 } from './Data.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {loaders.map(function (loader, index) {
      console.info(index)
      const loaderBar = loadersBar[index]
      return (
        <div key={index}>
          <BarApp loader={loaderBar}></BarApp>
          <App loader={loader} ></App>
        </div>
      )
    })}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
