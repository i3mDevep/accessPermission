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
import { BsColumnsGap, BsPeopleCircle, BsCompass } from 'react-icons/bs';
import logo from '../../assets/img/brand/ardobot_logo.png';
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
                  </Row>
                </div>
                <Nav className='ml-auto' navbar>
                  <NavItem>
                    <NavLink to='/dashboard' tag={Link}>
                      <span className='nav-link-inner--text icon'>
                        {' '}
                        <BsColumnsGap />
                        {' '}
                        Dashboard
                        {' '}
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className='nav-link-icon'
                      to='/register'
                      tag={Link}
                    >
                      <i className='ni ni-circle-08' />
                      <span className='nav-link-inner--text icon '>
                        {' '}
                        <BsPeopleCircle />
                        {' '}
                        Registro
                        {' '}
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className='nav-link-icon'
                      to='/'
                      tag={Link}
                    >
                      <i className='ni ni-key-25' />
                      <span className='nav-link-inner--text icon'>
                        {' '}
                        <BsCompass />
                        {' '}
                        Login
                        {' '}
                      </span>
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
