import React from 'react';
import { NavLink } from 'react-router-dom';

import { BsTerminal, BsPeopleCircle, BsCompass } from 'react-icons/bs';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/img/brand/ardobot_logo.png';
import './Header.scss';

class HeaderNavBar extends React.Component {
  render() {
    return (
      <header className='container'>
        <Navbar className='Navbar' variant='dark' expand='lg'>
          <Navbar.Brand href='dashboard'>
            <img
              alt=''
              src={logo}
              className='logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <NavLink to='/dashboard' className='mr-3'>
                <BsTerminal />
                Dashboard
              </NavLink>
              <NavLink to='/' className='mr-3'>
                <BsPeopleCircle />
                Login
              </NavLink>
              <NavLink to='/register'>
                <BsCompass />
                Registro
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default HeaderNavBar;
