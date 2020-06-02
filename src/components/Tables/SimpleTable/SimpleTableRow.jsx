import React from 'react';
import { connect } from 'react-redux';

const DEFAULT_DATA = [
  { name: 'Dakota Rice', identification: 'Niger', gender: 'Oud-Turnhout', age: 12, action: 'In' },
  { name: 'Dakota Rice', identification: 'Niger', gender: 'Oud-Turnhout', age: 12, action: 'In' },
  { name: 'Dakota Rice', identification: 'Niger', gender: 'Oud-Turnhout', age: 12, action: 'In' },
];

const SimpleTableRow = ({ name, identification, gender, action, age, users = DEFAULT_DATA }) => {
  return (
    <tbody>
      {
        users.map((user, index) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.identification}</td>
            <td>{user.gender}</td>
            <td>{user.age}</td>
            <td className='text-center'>{user.action}</td>
          </tr>
        ))
      }
      <tr>
        <td>{name}</td>
        <td>{identification}</td>
        <td>{gender}</td>
        <td>{age}</td>
        <td className='text-center'>{action}</td>
      </tr>
    </tbody>
  );
};
const mapStateProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateProps, null)(SimpleTableRow);
