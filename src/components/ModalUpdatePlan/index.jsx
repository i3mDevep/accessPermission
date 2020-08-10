import React from 'react';
import PropTypes from 'prop-types';
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
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import Link from '@material-ui/core/Link';

const benefits = ['Descarga de informes', 'Cree mas de una sede', 'Sin limines de datos', 'Captura de imagenes', 'Soporte técnico', 'No hay limite de empleados registrados'];

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
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  heroContent: {
    position: 'relative',
  },
}));

const StyledButton = withStyles({
  root: {
    background: '# 004876 ',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby='simple-dialog-title' open={open}>
      <DialogTitle className='text-center' id='simple-dialog-title'>Actualiza tu plan a Pro!</DialogTitle>
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
            <Link variant='subtitle1' href='https://api.whatsapp.com/send?phone=573116183653&text=&source=&data=&app_absent='>
              <StyledButton variant='contained' color='primary'>
                Contacto
              </StyledButton>
            </Link>
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

