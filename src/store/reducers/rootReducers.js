import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import tablesUsersReducer from './tablesUsersReducers';

const rootReducers = combineReducers({
  tablesUsers: tablesUsersReducer,
  firestore: firestoreReducer,
});

export default rootReducers;
