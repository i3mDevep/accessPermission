import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Context from './containers/Context';

ReactDOM.render(
  <Context.Provider>
    <App />
  </Context.Provider>, document.getElementById('app'),
);
