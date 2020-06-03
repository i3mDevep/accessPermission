import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import App from './containers/App';
import Context from './containers/Context';
import rootReducers from './store/reducers/rootReducers';

const store = createStore(rootReducers, applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })));

ReactDOM.render(
  <Provider store={store}>
    <Context.Provider>
      <App />
    </Context.Provider>
  </Provider>
  , document.getElementById('app'),
);
