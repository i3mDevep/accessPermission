const intitState = { error: false, msg: '', loading: false };

const addClientReducer = (state = intitState, action) => {
  switch (action.type) {
    case 'REQUEST_CLIENT':
      return {
        ...state,
        loading: true,
      };
    case 'CREATE_CLIENT_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        msg: 'client_create',
      };
    case 'CREATE_CLIENT_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
        msg: action.err.message,
      };
    default:
      return state;
  }
};

export default addClientReducer;
