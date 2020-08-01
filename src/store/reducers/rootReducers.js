import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import tablesUsersReducer from './tablesUsersReducers';
import authReducer from './authReducers';
import addWorkerReducer from './addWorkerReducer';
import editWorkerReducer from './editWorkerReducer';
import deleteSubCompanyReducer from './deleteSubcompanyReducer';
import deleteWorkerReducer from './deleteWorkerReducer';
import notifications from './notificationRecucers';
import addTrakingReducer from './addTrakingReducer';
import addClientReducer from './addClientReducer';

const rootReducers = combineReducers({
  auth: authReducer,
  tablesUsers: tablesUsersReducer,
  resultAddWorker: addWorkerReducer,
  resultAddTraking: addTrakingReducer,
  resultEditWorker: editWorkerReducer,
  resultWorkerDelete: deleteWorkerReducer,
  resultDelete: deleteSubCompanyReducer,
  resultAddClient: addClientReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  notifications,
});

export default rootReducers;
