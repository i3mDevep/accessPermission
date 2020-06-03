// eslint-disable-next-line import/prefer-default-export
export const setCurrentUsers = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: 'SET_USER', user });
  };
};
