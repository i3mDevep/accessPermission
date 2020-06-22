import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import { Card, Button } from 'react-bootstrap';

const PointAttentionCard = ({ namesubcompany, city, cellphone }) => {

  return (
    <Card
      style={{ width: '18rem' }}
      className='m-2'
    >
      <Card.Header>{namesubcompany}</Card.Header>
      <Card.Body>
        <Card.Title>
          {city}
        </Card.Title>
        <Card.Text>
          {cellphone}
        </Card.Text>
      </Card.Body>
      <Button style={{ padding: '3px' }}><IoIosAdd size='30' /></Button>
    </Card>
  );

};

export default PointAttentionCard;
