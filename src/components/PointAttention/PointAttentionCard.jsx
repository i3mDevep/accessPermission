import React from 'react';
import { BsInfoCircleFill, BsEnvelope, BsMicFill, BsPersonFill, BsServer } from 'react-icons/bs';
import moment from 'moment';
import { Card, Container, CardDeck, Button, Row, Col } from 'react-bootstrap';
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
    </CustomeCard>
  );

};

export default PointAttentionCard;
