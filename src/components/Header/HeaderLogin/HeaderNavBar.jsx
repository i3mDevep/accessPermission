import React from 'react';
import { Link } from 'react-router-dom';

import { BsColumnsGap, BsPeopleCircle, BsCompass } from 'react-icons/bs';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../../assets/img/brand/ardobot_logo.png';
import './HeaderNavBar.scss';

// reactstrap components
const navbar = {color: '#ffffff'};

class HeaderNavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar className='Navbar' varian='#ffffff' expand='lg'>
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
            <Nav className='md-auto'>
              <Nav.Link href='/dashboard' tag={Link}>Dashboard</Nav.Link>
              <Nav.Link href='/' tag={Link}>Login</Nav.Link>
              <Nav.Link href='/register' tag={Link}>Registro</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>

    );
  }
}

export default HeaderNavBar;
