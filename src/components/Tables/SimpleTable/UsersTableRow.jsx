import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const UsersTableRow = ({ users = [] }) => {
  return (
    <tbody>
      {
        users && users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.identification}</td>
            <td>{user.gender}</td>
            <td>{user.age}</td>
            <td>{moment(user.time.toDate().toISOString()).format('MMMM Do YYYY, h:mm:ss a')}</td>
            <td>{user.sede}</td>
            <td>{user.telphone}</td>
            <td>{user.address}</td>
          </tr>
        ))
      }
    </tbody>
  );
};
const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    users: state.firestore.ordered.users,
  };
};
export default
connect(mapStateProps, null)(UsersTableRow);
