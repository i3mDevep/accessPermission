import React from 'react';
import { connect } from 'react-redux';

const TimesTableRow = ({ users = [] }) => {
  return (
    <tbody>
      {
        users.map((user) => (
          <tr key={user.id}>
            <td>{user.identification}</td>
            <td>{user.time.toDate().toISOString()}</td>
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
export default connect(null, null)(TimesTableRow);
