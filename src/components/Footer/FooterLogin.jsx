import React from 'react';

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';

class FooterLogin extends React.Component {
  render() {
    return (
      <>
        <footer className='py-5'>
          <Container>
            <Row className='align-items-center justify-content-xl-between'>
              <Col xl='6'>
                <div className='copyright text-center text-xl-left text-muted'>
                  © 2014
                  {' '}
                  <a
                    className='font-weight-bold ml-1'
                    href='https://www.ardobot.co'
                    target='_blank'
                  >
                    Ardobot Robótica SAS
                  </a>
                </div>
              </Col>
              <Col xl='6'>
                <Nav className='nav-footer justify-content-center justify-content-xl-end'>
                  <NavItem>
                    <NavLink
                      href='https://www.ardobot.co'
                      target='_blank'
                    >
                      Ardobot Robótica SAS
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href='https://www.ardobot.co'
                      target='_blank'
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href='https://www.ardobot.co'
                      target='_blank'
                    >
                      Blog
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
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
