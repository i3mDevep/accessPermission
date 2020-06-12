const intitState = { error: false, msg: '' };
const addUserReducer = (state = intitState, action) => {
  switch (action.type) {
    case 'ADD_USER_SUCCESS':
      return state;
    case 'ADD_USER_ERROR':
      return state;
    default:
      return state;
  }
};

export default addUserReducer;
