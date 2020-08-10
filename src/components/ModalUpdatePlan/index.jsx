import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { blue } from '@material-ui/core/colors';
import PersonIcon from '@material-ui/icons/Person';

const benefits = ['descarga de informes', 'datos en tiempo real', 'mas de 100 usuarios al mes', 'graficas en tiempo real', 'soporte tecnico'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  heroContent: {
    position: 'relative',
  },
});

export default function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby='simple-dialog-title' open={open}>
      <DialogTitle id='simple-dialog-title'>Actualiza tu plan a Pro!</DialogTitle>
      <Grid container alignItems='flex-start' className={classes.heroContent}>
        <Grid item xs={12} sm={7} md={6}>
          <img alt='noallow' className='w-100' src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2FIMAGEN_6Artboard%204.png?alt=media&token=67b3b01c-3c98-4e9a-ae44-26d716f6ad3a' />
        </Grid>
        <Grid item xs={12} sm={5} md={6}>
          <List>
            {benefits.map((benefit) => (
              <ListItem button onClick={() => handleListItemClick(benefit)} key={benefit}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={benefit} />
              </ListItem>
            ))}
          </List>
          <div style={{ textAlign: 'center', width: '100%', padding: '30px' }}>
            <Button variant='contained' color='primary'>
              Actualizar
            </Button>
          </div>
        </Grid>
      </Grid>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

