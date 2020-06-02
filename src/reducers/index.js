import { actions } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setUsers:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
