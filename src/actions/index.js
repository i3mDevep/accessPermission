export const actions = {
  setUsers: 'SET_USERS',
};
export const setUsers = (payload) => ({
  type: actions.setUsers,
  payload,
});
