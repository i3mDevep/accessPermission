const intitState = { error: false, msg: '', loading: false };
console.log('suceed')

const addWorkerReducer = (state = intitState, action) => {
  switch (action.type) {
    case 'REQUEST_WORKER':
      return {
        ...state,
        loading: true,
      };
    case 'CREATE_WORKER_SUCCESS':
      console.log('suceed')
      return {
        ...state,
        loading: false,
        error: false,
        msg: 'worker_created',
      };
    case 'CREATE_WORKER_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
        msg: action.err.message,
      };
    default:
      console.log('default')
      return state;
  }
};

export default addWorkerReducer;
