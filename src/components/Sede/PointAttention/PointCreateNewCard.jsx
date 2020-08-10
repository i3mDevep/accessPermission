import React from 'react';
import { MdCreateNewFolder } from 'react-icons/md';
import { CustomeCardCreate } from './style';

const PointCreateNewCard = ({ onClick }) => {

  return (
    <CustomeCardCreate>
      <div style={{ display: 'inline-block' }}>
        <h2>Crear Nueva Sede o punto de venta</h2>
        <MdCreateNewFolder onClick={onClick} size='40' />
      </div>
    </CustomeCardCreate>
  );

};

export default PointCreateNewCard;
