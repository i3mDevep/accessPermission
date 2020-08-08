import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import logo from '../../assets/img/brand/ardobot_access.png';
import './Header.scss';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Poppins',
    ].join(','),
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const HeaderNavBar = () => {

  const classes = useStyles();
  return (
    <header className='container'>
      <ThemeProvider theme={theme}>
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
              <NavLink exact activeClassName='current' to='/login' className='mr-3'>
                {' '}
                <Button className={classes.root} variant='contained'>
                  Iniciar sesión
                </Button>
              </NavLink>
              <NavLink exact activeClassName='current' to='/register' className='mr-3'>
                {' '}
                <Button className={classes.root}>Registrarse</Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </ThemeProvider>
    </header>
  );
};

export default HeaderNavBar;
