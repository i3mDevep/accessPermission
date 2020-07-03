const intitState = { error: false, msg: '', loading: false };

const editWorkerReducer = (state = intitState, action) => {
  switch (action.type) {
    case 'UPDATE_REQUEST_WORKER':
      return {
        ...state,
        loading: true,
      };
    case 'UPDATE_WORKER_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        msg: 'worker_update',
      };
    case 'UPDATE_WORKER_ERROR':
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

export default editWorkerReducer;
