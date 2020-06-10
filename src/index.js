import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";

import { HashRouter } from 'react-router-dom';

const history = createBrowserHistory();

ReactDOM.render(
  <HashRouter history={history}>
    <App />    
  </HashRouter>,

  document.getElementById('root')
);

serviceWorker.unregister();
