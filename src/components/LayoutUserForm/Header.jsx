import React from 'react';
import { NavLink } from 'react-router-dom';

import { BsPeopleCircle, BsCloudDownload } from 'react-icons/bs';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/img/brand/ardobot_access.png';
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
              <NavLink exact activeClassName='current' to='/' className='mr-3'>
                {' '}
                Nosotros
              </NavLink>
              <NavLink exact activeClassName='current' to='/login' className='mr-3'>
                {' '}
                <BsPeopleCircle />
                Login
              </NavLink>
              <NavLink exact activeClassName='current' className='mr-3' to='/prices'>
                {' '}
                <RiMoneyDollarCircleLine />
                Precios
              </NavLink>
              <a className='mr-3' target='_blank' rel='noreferrer' href='https://play.google.com/store/apps/details?id=com.ardobot.ardocontrol'>
                {' '}
                <BsCloudDownload />
                Download App
              </a>
              <NavLink exact activeClassName='current' className='mr-3' to='/donaciones'>
                {' '}
                Donar
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default HeaderNavBar;
