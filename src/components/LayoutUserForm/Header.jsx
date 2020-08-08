import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { makeStyles, ThemeProvider, withStyles, createMuiTheme } from '@material-ui/core/styles';
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

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

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
                <StyledButton className={classes.marginButton} variant='contained'>
                  Iniciar sesión
                </StyledButton>
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
