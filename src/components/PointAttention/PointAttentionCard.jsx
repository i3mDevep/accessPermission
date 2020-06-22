import React from 'react';
import { BsFillInboxFill, BsPencilSquare, BsFileSpreadsheet } from 'react-icons/bs';
import moment from 'moment';
import { CustomeCard } from './style';

const PointAttentionCard = ({ email, namesubcompany, city, cellphone, address, nameperson, time }) => {

  return (
    <CustomeCard>
      <h2>{namesubcompany}</h2>
      <p>
        <BsFileSpreadsheet />
        {moment(time.toDate()).format('l')}
      </p>
    </CustomeCard>
  );

};

export default PointAttentionCard;
