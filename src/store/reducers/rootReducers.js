import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import tablesUsersReducer from './tablesUsersReducers';
import authReducer from './authReducers';
import addUserReducer from './addUserReducers';
import notificationRecucers from './notificationRecucers';

const rootReducers = combineReducers({
  auth: authReducer,
  tablesUsers: tablesUsersReducer,
  addUser: addUserReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  notifications: notificationRecucers,
});

export default rootReducers;
