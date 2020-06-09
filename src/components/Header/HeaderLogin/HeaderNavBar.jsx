import React from 'react';
import { Link } from 'react-router-dom';

import { BsTerminal, BsPeopleCircle, BsCompass } from 'react-icons/bs';
import { Navbar, Nav, Container, Row, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../../assets/img/brand/ardobot_logo.png';
import './HeaderNavBar.scss';

// reactstrap components
const navbar = { color: '#ffffff' };

class HeaderNavBar extends React.Component {
  render() {
    return (
      <>
        <div style={{ backgroundColor: '#004876' }}>
          <div className='container'>
            <Navbar className='Navbar' variant='dark' expand='lg'>
              <Navbar.Brand href='dashboard'>
                <img
                  alt=''
                  src={logo}
                  className='d-inline-block align-top'
                />
                {' '}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                  <Nav.Link href='/dashboard' tag={Link}>
                    <BsTerminal />
                    {' '}
                    Dashboard
                    {' '}
                  </Nav.Link>
                  <Nav.Link href='/' tag={Link}>
                    <BsPeopleCircle />
                    {' '}
                    Login
                    {' '}
                  </Nav.Link>
                  <Nav.Link href='/register' tag={Link}>
                    <BsCompass />
                    {' '}
                    Registro
                    {' '}
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </>

    );
  }
}

export default HeaderNavBar;
