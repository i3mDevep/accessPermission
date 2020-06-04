// eslint-disable-next-line import/prefer-default-export
export const signIn = (info) => {
  console.log(info);
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: 'INFO_AUTH', info });
  };
};

