import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import tablesUsersReducer from './tablesUsersReducers';
import authReducer from './authReducers';
import addWorkerReducer from './addWorkerReducer';
import notifications from './notificationRecucers';

const rootReducers = combineReducers({
  auth: authReducer,
  tablesUsers: tablesUsersReducer,
  resultAddWorker: addWorkerReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  notifications,
});

export default rootReducers;
