const intitState = { error: false, msg: '' };

const addWorkerReducer = (state = intitState, action) => {
  switch (action.type) {
    case 'CREATE_WORKER_SUCCESS':
      console.log('CREATE_WORKER_SUCCESS');
      return {
        ...state,
        error: false,
        msg: 'worker_created',
      };
    case 'CREATE_WORKER_ERROR':
      console.log('CREATE_WORKER_ERROR');
      console.log(action);
      return {
        ...state,
        error: true,
        msg: action.err.message,
      };
    default:
      return state;
  }
};

export default addWorkerReducer;
