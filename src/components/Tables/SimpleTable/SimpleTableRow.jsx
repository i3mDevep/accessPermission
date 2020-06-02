import React from 'react';

const SimpleTableRow = ({ name, identification, gender, action, age }) => {
  return (
    <tbody>
      <tr>
        <td>Dakota Rice</td>
        <td>Niger</td>
        <td>Oud-Turnhout</td>
        <td>Oud-Turnhout</td>
        <td className='text-center'>$36,738</td>
      </tr>
      <tr>
        <td>Minerva Hooper</td>
        <td>Curaçao</td>
        <td>Sinaai-Waas</td>
        <td>Oud-Turnhout</td>
        <td className='text-center'>$23,789</td>
      </tr>
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

export default SimpleTableRow;
