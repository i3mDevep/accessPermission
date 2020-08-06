import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import { PayPalButton } from 'react-paypal-button-v2';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction='down' ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  root: {
    //display: 'block',
    // flexGrow: 1,
    padding: theme.spacing(10),
    overflow: 'hidden',
  },
  content: {
    //flexGrow: 1,
    display: 'flex',
    //padding: theme.spacing(50),
  },
  typography: {
    fontFamily: [
      'poppins',
    ].join(','),
  },
  textField: {
    width: '25ch',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    //textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

}));

const styles = (theme) => ({

  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      light: '#ffffff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
  root: {
    color: '#ffffff',
    backgroundColor: theme.palette.info.dark,
    //display: 'flex',
    //flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  media: {
    height: 140,
  },

});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle
      disableTypography
      className={classes.root}
    >
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const ModalDonate = ({ open, onClose, amount }) => {

  const classes = useStyles();

  const handleChange = (event) => {
    setData(event.target.value);
  };

  //const amount = data;

  return (
    <>
      <Dialog
        fullWidth={true}
        maxWidth='xs'
        TransitionComponent={Transition}
        onClose={onClose}
        aria-labelledby='max-width-dialog-title'
        open={open}
      >
        <DialogTitle ClassName='text-center' id='customized-dialog-title' onClose={onClose}>
          <BeachAccessIcon />
          {' '}
          Gracias
        </DialogTitle>
        <br />
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt='complex' src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fvectorstock_2382722.png?alt=media&token=c24e0fa5-ee3c-4389-b912-97b85c240776' />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction='column' spacing={2}>
                <Grid item xs>
                  <Typography component='div' gutterBottom variant='subtitle1'>
                    Tu contribución es importante
                  </Typography>
                  <Typography component='div' variant='body2' gutterBottom>
                    Con tu contribución sifragramos costos de servidor y permitimos al equipo de desarrollo incluir nuevas funcionalidades para ti.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component='div' variant='body2' style={{ cursor: 'pointer' }}>
                    <Form className='text-center' style={{ padding: '5px' }}>
                      <FormControl variant='filled'>
                        <InputLabel htmlFor='outlined-adornment-amount'> Monto </InputLabel>
                        <Input
                          className='text-center'
                          id='outlined-adornment-amount'
                          value={amount}
                          onChange={handleChange}
                          startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                        />
                      </FormControl>
                    </Form>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item />
            </Grid>
          </Grid>
          <PayPalButton
            amount={amount}
            options={{
              clientId: 'AaEEUAMgJ53c-JO7IRu22io-Cs40k_Pei7-2e6whSCnRdEUg7UZn7O8Zy3RSFyyrCHKnrSX3J5juWQ_g',
            }}
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              alert(`Transaction completed by ${details.payer.name.given_name}`);

              // OPTIONAL: Call your server to save the transaction
              return fetch('/paypal-transaction-complete', {
                method: 'post',
                body: JSON.stringify({
                  orderID: data.orderID,
                }),
              });
            }}
          />
        </Paper>
      </Dialog>
    </>
  );
};

export default ModalDonate;
