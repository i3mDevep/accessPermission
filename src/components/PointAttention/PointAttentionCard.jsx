import React from 'react';
import { BsInfoCircleFill, BsEnvelope, BsPencilSquare, BsFillTrashFill, BsMicFill, BsPersonFill, BsServer } from 'react-icons/bs';
import moment from 'moment';
import { Card, Container, CardDeck, Button } from 'react-bootstrap';
import { CustomeCard } from './style';

const PointAttentionCard = ({ email, namesubcompany, city, cellphone, address, nameperson, time }) => {

  return (
    <CustomeCard>
      <CustomeCard.Header>
        {namesubcompany}
      </CustomeCard.Header>
      <ul>
        <li>
          <BsEnvelope />
          {email}
        </li>
        <li>
          <BsInfoCircleFill />
          {city}
        </li>
        <li>
          <BsMicFill />
          {cellphone}
        </li>
        <li>
          <BsServer />
          {address}
        </li>
        <li>
          <BsPersonFill />
          {nameperson}
        </li>
      </ul>
      <footer className='text-muted'>
        <Button variant="outline-danger">
          <BsFillTrashFill size='20' />
        </Button>{' '}
        <Button variant="outline-info">
          <BsPencilSquare size='20' />
        </Button>
      </footer>
    </CustomeCard>

  );

};

export default PointAttentionCard;
