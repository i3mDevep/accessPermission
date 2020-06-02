import React from 'react';
import { Table } from 'reactstrap';

const SimpleTableHead = ({ children, title1, title2, title3, title4, title5, name, identification, gender, action, age }) => {
  return (
    <Table striped responsive='sm'>
      <thead className='text-primary'>
        <tr>
          <th>{title1}</th>
          <th>{title2}</th>
          <th>{title3}</th>
          <th>{title4}</th>
          <th className='text-center'>{title5}</th>
        </tr>
      </thead>
      {children}
    </Table>
  );
};

export default SimpleTableHead;
