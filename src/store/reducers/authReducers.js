const initState = {
  isAuth: { loggedIn: false, update: true, uid: '' },
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INFO_AUTH':
      return {
        ...state,
        isAuth: action.info,
      };
    default:
      return state;
  }
};

export default authReducer;
