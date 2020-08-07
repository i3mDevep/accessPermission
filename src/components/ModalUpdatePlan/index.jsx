import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: '20px',
    '&:focus': {
      borderColor: '#80bdff',
      outline: 'none',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  imageNoAllow: {
    width: '300px',
    objectFit: 'cover',
  },
}));

const styles = {
  dialog: {
    backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2FIMAGEN_6Artboard%204.png?alt=media&token=67b3b01c-3c98-4e9a-ae44-26d716f6ad3a)',
  },
};

const DialogWithBackgroundImage = withStyles(styles)(({ classes, handleClose, open }) => (
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby='responsive-dialog-title'
    classes={{ paper: classes.dialog }}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
    //className={classes.modal}
  >
    <DialogTitle id='customized-dialog-title'>Wow such background</DialogTitle>
    <DialogContent style={{ height: 750, width: 500 }}>
      The rest of the dialog content
    </DialogContent>
  </Dialog>
));

export default function TransitionsModal({ handleClose, open }) {
  const classes = useStyles();

  return (
    <div>
      <DialogWithBackgroundImage handleClose={handleClose} open={open} />
      {/*
      <Dialog
        disableAutoFocus={true}
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        //className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <img className={classes.imageNoAllow} alt='updateplan' src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2FIMAGEN_6Artboard%204.png?alt=media&token=67b3b01c-3c98-4e9a-ae44-26d716f6ad3a' />
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction='column' spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant='h4'>
                      Actualiza tu plan!
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='body2' style={{ cursor: 'pointer' }}>
                      Actualizar
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Dialog> */}
    </div>
  );
}
