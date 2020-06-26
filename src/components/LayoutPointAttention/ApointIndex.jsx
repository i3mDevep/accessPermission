import React from 'react';

import { connect } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import LayoutPointAttention from './LayoutPointAttention/LayoutPointAttention';
import WorkSpacePointAttention from './WorkSepacePointAttention/WorkSpacePointAttention';
import './style.scss';

const drawerWidth = 240;
const ApointIndex = () => {

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

  return (
    <LayoutPointAttention
      useStyles={useStyles}
    >
      <WorkSpacePointAttention />
    </LayoutPointAttention>
  );

};

const mapStateToProps = (state) => ({
});

export default connect(
  mapStateToProps,
  {},
)(ApointIndex);
