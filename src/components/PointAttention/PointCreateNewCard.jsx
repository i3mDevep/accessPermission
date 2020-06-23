import React from 'react';
import { IoIosCreate } from 'react-icons/io';
import { CustomeCardCreate } from './style';

const PointCreateNewCard = ({ onClick }) => {

  return (
    <CustomeCardCreate>
      <div style={{display:'inline-block'}}>
        <h2>Crear Nueva Sede</h2>
        <IoIosCreate onClick={onClick} size='40' />
      </div>
    </CustomeCardCreate>
  );

};

export default PointCreateNewCard;
