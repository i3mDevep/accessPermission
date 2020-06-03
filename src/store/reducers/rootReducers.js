import { combineReducers } from 'redux';
import tablesUsersReducer from './tablesUsersReducers';

const rootReducers = combineReducers({
  tablesUsers: tablesUsersReducer,
});

export default rootReducers;
