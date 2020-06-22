import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import { Card, Button, Col } from 'react-bootstrap';
import { BsFillInboxFill, BsPencilSquare } from 'react-icons/bs';

const PointAttentionCard = ({ email, namesubcompany, city, cellphone, address, nameperson }) => {

  return (
    <Col lg='3' >
      <Card
        style={{ width: '20rem' }}
        className='m-2'
      >
        <Card.Header>
          <BsFillInboxFill size='10%' />
          {'   '}
          {namesubcompany}
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {email}
          </Card.Title>
          <Card.Title>
            {cellphone}
          </Card.Title>
          <Card.Title>
            {address}
          </Card.Title>
          <Card.Title>
            {city}
          </Card.Title>
          <Card.Text>
            {nameperson}
          </Card.Text>
        </Card.Body>
        <Button style={{ width: '5%' }}><IoIosAdd size='10%' /></Button>
        <Button style={{ width: '5%'  }}><BsPencilSquare size='10%' /></Button>
      </Card>
    </Col>
  );

};

export default PointAttentionCard;
