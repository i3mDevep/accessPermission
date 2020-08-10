import React from 'react';
import firebase from 'firebase/app';
import clsx from 'clsx';
import { connect } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import { makeStyles, useTheme, createMuiTheme } from '@material-ui/core/styles';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
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
import Fingerprint from '@material-ui/icons/Fingerprint';
import MailIcon from '@material-ui/icons/Mail';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import GetAppIcon from '@material-ui/icons/GetApp';
import { NavLink } from 'react-router-dom';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import DescriptionIcon from '@material-ui/icons/Description';
import { CustomNavLink } from './style';

const drawerWidth = 240;

const icons = [
  <HomeIcon alt='nophoto' style={{ color: '#ffffff' }} />,
  <Fingerprint style={{ color: '#ffffff' }} />,
  <PeopleAltIcon style={{ color: '#ffffff' }} />,
  <MailIcon style={{ color: '#ffffff' }} />,
  <DescriptionIcon style={{ color: '#ffffff' }} />,
  <SettingsApplicationsIcon style={{ color: '#ffffff' }} />,
  <ExitToAppIcon style={{ color: '#ffffff' }} />,
];

const items = ['Home', 'Control Empleados', 'Control Clientes ', 'Notificaciones'];
const links = ['/home', '/control', '/clientpoint', '/notificationpoint'];

const theme = createMuiTheme({
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
    zIndex: 50,
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
    overflow: 'hidden',
    padding: theme.spacing(3),
    '@media (max-width: 508px)': {
      padding: '24px 0',
      width: '90% !important',
    },
  },
  itemList: {
    '&[aria-current]': {
      backgroundColor: '#21bf73',
    },
  },
}));

function FooterPointAttention({ children, onClick, isAuth }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseSession = () => {
    setAnchorEl(null);
    firebase.auth().signOut();
  };

  return (
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
            { isAuth.displayName }
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
              <MenuItem onClick={handleClose}>{isAuth.displayName}</MenuItem>
              <MenuItem>
                <Link variant='caption' href='https://play.google.com/store/apps/details?id=com.ardobot.ardocontrol'>
                  <GetAppIcon />
                  {' '}
                  Descargar App
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseSession}>
                <ExitToAppIcon />
                {' '}
                Cerrar sesión
              </MenuItem>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <a>hola </a>
        <List>
          {items.map((text, index) => (
            <ListItem
              button
              className={classes.itemList}
              to={links[index]}
              component={CustomNavLink}
              key={text}
            >
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Salir'].map((text, index) => (
            <ListItem
              button
              to={links[6]}
              className={classes.itemList}
              onClick={() => firebase.auth().signOut()}
              key={text}
            >
              <ListItemIcon>{index % 6 === 0 ? icons[6] : icons[7]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        { children }
      </main>
    </div>
  );
}

const mapStateProps = (state) => {
  console.log(state);
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateProps, null)(FooterPointAttention);

