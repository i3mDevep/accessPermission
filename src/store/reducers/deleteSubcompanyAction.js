const intitState = { error: false, msg: '' };

const deleteSubcompany = (state = intitState, action) => {
  switch (action.type) {
    case 'DELETE':
      console.log('DELETE');
      return {
        ...state,
        error: false,
        msg: 'worker_created',
      };
    case 'DELETE_WORKER_ERROR':
      console.log('DELETE_WORKER_ERROR');
      return {
        ...state,
        error: true,
        msg: action.err,
      };
    default:
      return state;
  }
};

export default deleteSubcompany;
