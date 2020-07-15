const intitState = { error: false, msg: '', loading: false };

const addWorkerReducer = (state = intitState, action) => {
  switch (action.type) {
    case 'REQUEST_TRAKING':
      return {
        ...state,
        loading: true,
      };
    case 'CREATE_TRAKING_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        msg: 'worker_created',
      };
    case 'CREATE_TRAKING_ERROR':
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

export default addWorkerReducer;
