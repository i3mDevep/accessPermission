import React from 'react';
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';
import './FooterLogin.scss';

class FooterLogin extends React.Component {
  render() {
    return (
      <>
        <footer className='py-5 footer_home'>
          <Container>
            <Row className='align-items-center justify-content-xl-between'>
              <Col xl='6'>
                <div className='copyright text-center text-xl-left footer_color '>
                  © 2014
                  {' '}
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
                      Ardobot Robótica SAS
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className='footer_color'
                      href='https://www.ardobot.co'
                      target='_blank'
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className='footer_color'
                      href='https://www.ardobot.co'
                      target='_blank'
                    >
                      MIT License
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default FooterLogin;