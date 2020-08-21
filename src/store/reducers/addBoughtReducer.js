const intitState = { error: false, msg: '', loading: false };

const addBoughtReducer = (state = intitState, action) => {
  switch (action.type) {
    case 'REQUEST_CLIENTACTION':
      return {
        ...state,
        loading: true,
      };
    case 'CREATE_CLIENTACTION_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        msg: 'client_create',
      };
    case 'CREATE_CLIENTACTION_ERROR':
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

export default addBoughtReducer;
