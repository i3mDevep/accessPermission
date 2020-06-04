import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import App from './containers/App';
import Context from './containers/Context';
import rootReducers from './store/reducers/rootReducers';
import myfirebaseConfig from './credentials/firebase';

const store = createStore(rootReducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(myfirebaseConfig),
    reactReduxFirebase(),
  ));

ReactDOM.render(
  <Provider store={store}>
    <Context.Provider>
      <App />
    </Context.Provider>
  </Provider>
  , document.getElementById('app'),
);
