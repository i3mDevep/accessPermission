import React from 'react';
import firebase from 'firebase/app';
import { FaUserAstronaut, FaChild, FaCog, FaTemperatureHigh, FaDatabase } from 'react-icons/fa';
import { RiQrCodeLine } from 'react-icons/ri';
import { MdFiberNew } from 'react-icons/md';
import clsx from 'clsx';
import { makeStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/ardobot_logo.png';

const drawerWidth = 240;

const myicons = [
  <FaUserAstronaut color='white' size='20' />,
  <FaChild color='white' size='20' />,
  <FaCog color='white' size='20' />,
  <FaTemperatureHigh color='white' size='20' />,
  <FaDatabase color='white' size='20' />, <RiQrCodeLine color='white' size='20' />,
  <MdFiberNew color='white' size='20' />];

const messages = ['Dashboard', 'Empleados', 'Clientes', 'Informes', 'Alertas', 'Generador QR', 'Sedes'];
const links = ['/dashboard', '/worker', '', '', '', '/generateqr', '/sedes'];

const themer = createMuiTheme({
  typography: {
    fontFamily: [
      'Poppins',
    ].join(','),
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  selected: {
    backgroundColor: 'red',
  },
  appBar: {
    zIndex: 100,
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2020/04/22/12/12/background-5077810_960_720.png)',
    backgroundPosition: 'left',
    backgroundSize: 'cover',
    color: 'white',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2020/04/22/12/12/background-5077810_960_720.png)',
    backgroundPosition: 'left',
    backgroundSize: 'cover',
    color: 'white',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    zIndex: 0,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2020/04/22/12/12/background-5077810_960_720.png)',
    backgroundPosition: 'left',
    backgroundSize: 'cover',
    color: 'white',
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    '@media (max-width: 508px)': {
      padding: '24px 0',
      width: '90% !important',
    },
  },
}));

export default function ToolboxCustome({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseSession = () => {
    setAnchorEl(null);
    firebase.auth().signOut();
  };
  return (
    <ThemeProvider theme={themer}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h5' noWrap>
              { window.location.pathname.slice(1).toUpperCase() }
            </Typography>
            <div style={{ marginLeft: 'auto' }}>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle style={{ fontSize: '2.8rem' }} />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open2}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleCloseSession}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant='permanent'
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <img alt='logo' src={logo} style={{ width: '80%' }} />
            <IconButton onClick={handleDrawerClose} style={{ color: 'white' }}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            { messages.map((text, index) => (
              <ListItem
                button
                key={text}
                component={NavLink}
                to={`${links[index]}`}
              >
                <ListItemIcon>{ myicons[index] }</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content} style={{ width: '-webkit-fill-available' }}>
          <div className={classes.toolbar} />
          { children }
        </main>
      </div>
    </ThemeProvider>
  );
}
