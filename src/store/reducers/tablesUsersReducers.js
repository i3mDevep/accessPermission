const initUsers = [{ id: '1', name: 'anomimus', identification: 'xxxx', gender: 'n/a', age: '0', action: 'n/a' }];

const tablesUsersReducer = (state = initUsers, action) => {
  switch (action.type) {
    case 'SET_USER':
      return state;
    default:
      return state;
  }
};

export default tablesUsersReducer;
