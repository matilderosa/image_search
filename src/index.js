import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './components/App/App';
import Root from './Root';
import history from './history';

ReactDOM.render(
  <Root>
    <Router history={history}>
      <App />
    </Router>
  </Root>,
  document.querySelector('#root')
);