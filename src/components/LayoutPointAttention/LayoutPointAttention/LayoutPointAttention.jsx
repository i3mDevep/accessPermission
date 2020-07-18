import React from 'react';
import firebase from 'firebase/app';
import clsx from 'clsx';
import Badge from '@material-ui/core/Badge';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
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
import Fingerprint from '@material-ui/icons/Fingerprint';
import FaceIcon from '@material-ui/icons/Face';
import MailIcon from '@material-ui/icons/Mail';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import { NavLink } from 'react-router-dom';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import DescriptionIcon from '@material-ui/icons/Description';

const drawerWidth = 240;

const icons = [<HomeIcon />, <Fingerprint />, <PeopleAltIcon />, <FaceIcon />, <MailIcon />, <DescriptionIcon />, <SettingsApplicationsIcon />, <ExitToAppIcon />];
const items = ['Home', 'Control Empleados', 'Control Clientes ',  'Notificaciones', 'Informes'];
const links = ['/home', '/control', '/clientpoint', '/notificationpoint', '/infor'];

const useStyles = makeStyles((theme) => ({

  typography: {
    fontFamily: [
      'poppins',
    ].join(','),
  },

  root: {
    display: 'flex',
    //color: 'red', // Color text container
  },
  appBar: {
    //color: 'red', color text
    background: '#004876',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    background: '#004876',
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    background: '#004876',
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
    //color: '#ffff',
    //icon: '#ffff',
    // background: '#004876',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function FooterPointAttention({ children, onClick }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
          <div style={{ marginRight: 'auto' }}>
            <Typography edge='start' style={{ marginRight: 'auto' }} variant='h6' noWrap />
          </div>
          <IconButton aria-label='show 17 new notifications' color='inherit'>
            <Badge badgeContent={17} color='secondary'>
              <NotificationImportantIcon />
            </Badge>
          </IconButton>
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
          .  Aplicacion
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {items.map((text, index) => (
            <ListItem
              button
              disableTouchRipple
              to={links[index]}
              component={NavLink}
              key={text}
            >
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Ayuda', 'Salir'].map((text, index) => (
            <ListItem
              button
              to={links[6]}
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

export default FooterPointAttention;
