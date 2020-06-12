import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'firebase/app';
import App from './containers/App';
import rootReducers from './store/reducers/rootReducers';
import myfirebaseConfig from './credentials/firebase';

firebase.initializeApp(myfirebaseConfig);

const store = createStore(rootReducers,
  compose(
    applyMiddleware(thunk.withExtraArgument(getFirestore)),
  ));
const rrfConfig = {
  userProfile: '',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
  , document.getElementById('app'),
);
