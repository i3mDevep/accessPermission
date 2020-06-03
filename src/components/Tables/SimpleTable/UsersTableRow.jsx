import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCurrentUsers } from '../../../store/actions/tablesUsersActions';

const UsersTableRow = ({ users = [], setCurrentUsers }) => {
  useEffect(() => {
    setCurrentUsers({ supername: 'michael' });
  });
  return (
    <tbody>
      {
        users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.identification}</td>
            <td>{user.gender}</td>
            <td>{user.age}</td>
            <td className='text-center'>{user.action}</td>
          </tr>
        ))
      }
    </tbody>
  );
};
const mapStateProps = (state) => {
  return {
    users: state.tablesUsers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUsers: (user) => dispatch(setCurrentUsers(user)),
  };
};
export default connect(mapStateProps, mapDispatchToProps)(UsersTableRow);
