import React from 'react';

import { Nav, Container, Row, Col, NavItem, NavLink } from 'react-bootstrap';
import './Footer.scss';

class Footer extends React.Component { 
  render() {
    return (
      <footer className='p-2 footer_home'>
        <Container>
          <Row className='align-items-center justify-content-xl-between '>
            <Col xl='6'>
              <div className='copyright text-center text-xl-left footer_color '>
                © 2014
                <a
                  className='font-weight-bold ml-1 footer_color'
                  href='https://www.ardobot.co'
                  target='_blank'
                >
                  Ardobot Robótica SAS
                </a>
              </div>
            </Col>
            <Col xl='6'>
              <Nav className='nav-footer justify-content-center justify-content-xl-end '>
                <NavItem>
                  <NavLink
                    className='footer_color'
                    href='https://www.ardobot.co'
                    target='_blank'
                  >
                    Términos y Condiciones
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='footer_color'
                    href='https://www.ardobot.co'
                    target='_blank'
                  >
                    Contacto
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
