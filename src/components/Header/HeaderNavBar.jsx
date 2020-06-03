import React from 'react';
import { Link } from 'react-router-dom';
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';
import logo from '../../assets/img/brand/logoardobot.png';
import './HeaderNavBar.scss';

// reactstrap components

class HeaderNavBar extends React.Component {
  render() {
    return (
      <div className='Navbar'>
        <div className='container-fluid'>
          <Navbar
            className=''
            expand='md'
          >
            <Container className='px-4'>
              <NavbarBrand to='/' tag={Link}>
                <img alt='...' src={logo} />
              </NavbarBrand>
              <button className='navbar-toggler' id='navbar-collapse-main'>
                <span className='navbar-toggler-icon' />
              </button>
              <UncontrolledCollapse navbar toggler='#navbar-collapse-main'>
                <div className='navbar-collapse-header d-md-none'>
                  <Row>
                    <Col className='collapse-brand' xs='6'>
                      <Link to='/'>
                        <img alt='...' src={logo} />
                      </Link>
                    </Col>
                    <Col className='collapse-close' xs='6'>
                      <button
                        className='navbar-toggler'
                        id='navbar-collapse-main'
                      >
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className='ml-auto' navbar>
                  <NavItem>
                    <NavLink className='nav-link-icon' to='/' tag={Link}>
                      <i className='ni ni-planet' />
                      <span className='nav-link-inner--text'>Dashboard</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className='nav-link-icon'
                      to='/register'
                      tag={Link}
                    >
                      <i className='ni ni-circle-08' />
                      <span className='nav-link-inner--text'>Registro</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className='nav-link-icon'
                      to='/'
                      tag={Link}
                    >
                      <i className='ni ni-key-25' />
                      <span className='nav-link-inner--text'>Login</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className='nav-link-icon'
                      to='/admin/user-profile'
                      tag={Link}
                    >
                      <i className='ni ni-single-02' />
                      <span className='nav-link-inner--text'>Profile</span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default HeaderNavBar;
