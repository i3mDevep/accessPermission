import React from 'react';
import { connect } from 'react-redux';

const SimpleTableRow = ({ users = DEFAULT_DATA }) => {
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
    users: state.users,
  };
};
export default connect(mapStateProps, null)(SimpleTableRow);
