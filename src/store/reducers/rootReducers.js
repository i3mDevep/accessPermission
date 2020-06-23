import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import tablesUsersReducer from './tablesUsersReducers';
import authReducer from './authReducers';
import addWorkerReducer from './addWorkerReducer';
import deleteSubcompanyReducer from './deleteSubcompanyReducer';
import notifications from './notificationRecucers';

const rootReducers = combineReducers({
  auth: authReducer,
  tablesUsers: tablesUsersReducer,
  resultAddWorker: addWorkerReducer,
  resultDelete: deleteSubcompanyReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  notifications,
});

export default rootReducers;
