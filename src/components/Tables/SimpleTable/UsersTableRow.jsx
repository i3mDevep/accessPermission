import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

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
            <td className='text-center'>{user.action}</td>
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
export default compose(
  connect(mapStateProps, null),
  firestoreConnect((props) => {
    return [
      { collection: 'business_collection',
        doc: props.isAuth.email,
        subcollections: [
          {
            collection: 'users',
          },
        ],
        storeAs: 'users',
      },
    ];
  }),
)(UsersTableRow);
