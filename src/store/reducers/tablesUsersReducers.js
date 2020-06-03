const initUsers = [{ id: '1', name: 'anomimus', identification: 'xxxx', gender: 'n/a', age: '0', action: 'n/a' }];

const tablesUsersReducer = (state = initUsers, action) => {
  switch (action.type) {
    case 'SET_USER':
      console.log('set user', action.user);
  }
  return state;
};

export default tablesUsersReducer;
