const intitState = { error: false, msg: '', loading: false };

const deleteSubCompany = (state = intitState, action) => {
  switch (action.type) {
    case 'REQUEST_SUBCOMPANY_DELETE':
      return {
        ...state,
        loading: true,
      };
    case 'DELETE_SUBCOMPANY_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        msg: 'subcompany deleted!',
      };
    case 'DELETE_SUBCOMPANY_ERROR':
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

export default deleteSubCompany;
