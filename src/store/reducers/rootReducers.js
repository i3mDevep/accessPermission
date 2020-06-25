import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import tablesUsersReducer from './tablesUsersReducers';
import authReducer from './authReducers';
import addWorkerReducer from './addWorkerReducer';
import deleteSubCompanyReducer from './deleteSubcompanyReducer';
import deleteWorkerReducer from './deleteWorkerReducer';
import notifications from './notificationRecucers';

const rootReducers = combineReducers({
  auth: authReducer,
  tablesUsers: tablesUsersReducer,
  resultAddWorker: addWorkerReducer,
  resultWorkerDelete: deleteWorkerReducer,
  resultDelete: deleteSubCompanyReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  notifications,
});

export default rootReducers;
