import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import Context from './containers/Context';
import reducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  users: [],
};
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Context.Provider>
      <App />
    </Context.Provider>
  </Provider>
  , document.getElementById('app'),
);
