import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <div
    className='footer-copyright text-center mt-auto py-3'
    style={{ backgroundColor: 'rgba(0,0,0,.4)', color: 'white', fontSize: '13px', position: 'absolute', bottom: '0' }}
  >
    <Container fluid>
      &copy;
      {' '}
      {new Date().getFullYear()}
      {' '}
      Desing by Ardobot
    </Container>
  </div>
);
export default Footer;
