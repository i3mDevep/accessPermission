import React from 'react';
import { Table } from 'reactstrap';

const SimpleTableHead = ({ children, titles = [], id = 'anonimus' }) => {
  return (
    <Table striped responsive='sm'>
      <thead className='text-primary'>
        <tr>
          {
            // eslint-disable-next-line react/no-array-index-key
            titles.map((item, index) => <th key={`${id} ${index}`}>{item}</th>)
          }
        </tr>
      </thead>
      {children}
    </Table>
  );
};

export default SimpleTableHead;
