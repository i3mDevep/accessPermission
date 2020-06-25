const intitState = { error: false, msg: '', loading: false };

const deleteWorker = (state = intitState, action) => {
  switch (action.type) {
    case 'REQUEST_WORKER_DELETE':
      return {
        ...state,
        loading: true,
      };
    case 'DELETE_WORKER_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        msg: 'worker deleted!',
      };
    case 'DELETE_WORKER_ERROR':
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

export default deleteWorker;
