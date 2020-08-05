import React, { useEffect, useState } from 'react';
import { Form, Row, Col, ListGroup, Alert } from 'react-bootstrap';

import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { PayPalButton } from 'react-paypal-button-v2';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmojiEmotionsTwoToneIcon from '@material-ui/icons/EmojiEmotionsTwoTone';
import SentimentVerySatisfiedTwoToneIcon from '@material-ui/icons/SentimentVerySatisfiedTwoTone';
import SentimentSatisfiedTwoToneIcon from '@material-ui/icons/SentimentSatisfiedTwoTone';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import AppsIcon from '@material-ui/icons/Apps';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ModalDonate from './ModalDonate';

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
    padding: theme.spacing(2, 20, 2, 20),
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

/////////////////////////////////////////// Funcion ////////////////////////////////////////////////////////

const CommingSoon = ({ data }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [amount, setAmount] = useState(' ');
  const [values, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = (amount) => {
    console.log(amount);
    setOpen(true);
    setAmount(amount);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ModalDonate
        open={open}
        onClose={handleClose}
        amount={amount}
        onChange={handleChangeTab}
      />

      {/*}
      <Dialog
        fullWidth={true}
        maxWidth='xs'
        TransitionComponent={Transition}
        onClose={handleClose}
        //aria-labelledby='max-width-dialog-title'
        open={open}
      >
        <DialogTitle ClassName='text-center' id='customized-dialog-title' onClose={handleClose}>
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
                  <Typography component={'div'} gutterBottom variant='subtitle1'>
                    Tu contribución es importante
                  </Typography>
                  <Typography component={'div'} variant='body2' gutterBottom>
                    Con tu contribución sifragramos costos de servidor y permitimos al equipo de desarrollo incluir nuevas funcionalidades para ti.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component={'div'} variant='body2' style={{ cursor: 'pointer' }}>
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
      {/* MODAL */}
      <div className={classes.root}>
        <CssBaseline />
        <h3 className='text-center'>Eres importante para nosotros</h3>
        <br />
        <Grid item xs={12}>
          <Paper square={false}>
            <Tabs
              value={values}
              onChange={handleChangeTab}
              variant='fullWidth'
              indicatorColor='primary'
              textColor='primary'
              aria-label='icon tabs example'
            >
              <Tab icon={<SentimentSatisfiedTwoToneIcon />} onClick={(e) => handleClickOpen(5)} label=' 5 USD' />
              <Tab icon={<EmojiEmotionsTwoToneIcon />} onClick={(e) => handleClickOpen(10)} label='10 USD' />
              <Tab icon={<SentimentVerySatisfiedTwoToneIcon />} onClick={(e) => handleClickOpen(15)} label='15 USD' />
              <Tab icon={<FavoriteIcon />} onClick={(e) => handleClickOpen(30)} label='30 USD' />
              <Tab icon={<AttachMoneyIcon />} onClick={(e) => handleClickOpen()} label='Monto Libre' />
            </Tabs>
          </Paper>
        </Grid>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={6}>
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
                      <Typography gutterBottom variant='subtitle1'>
                        Lo Justo
                      </Typography>
                      <Typography variant='body2' gutterBottom>
                        Ofrecemos un servicio gratuito  para un gran número de empresas que lo necesitan.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='body2' style={{ cursor: 'pointer' }}>
                        <FavoriteIcon />
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant='subtitle1'>Free</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction='column' spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant='h5' component='h2'>
                        <LoyaltyIcon />
                        Es momento de apoyarnos los unos a los otros!
                      </Typography>
                      <Typography variant='body2' gutterBottom>
                        Sabemos qué, para pequeños y grandes comerciantes el
                        ingreso de Clientes y Empleados cumpliendo con las medidas
                        de bioseguridad existentes representa un tiempo valioso en la
                        ejecución de las actividades de nuestros negocios.
                        Por eso, ponemos a tu disposición una plataforma de control ágil con
                        la que podrás disminuir el tiempo de ingreso de personal.
                      </Typography>
                    </Grid>

                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt='complex' src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fdatabase.jpg?alt=media&token=69a9b9ac-6909-4f1c-8eaa-939699ade4ea' />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction='column' spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant='subtitle1'>
                        Lo nuestro
                      </Typography>
                      <Typography variant='body2' gutterBottom>
                        Nuestro servicio pago esta estimado en base al costo que nos representa el servicio.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='body2' style={{ cursor: 'pointer' }}>
                        <LoyaltyIcon />
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant='subtitle1'>Free</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt='complex' src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fvectorfree.jpg?alt=media&token=9a5fde17-a2df-45d6-a73f-07382cef08bb' />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction='column' spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant='subtitle1'>
                        Te gusta lo que hacemos ?
                      </Typography>
                      <Typography variant='body2' gutterBottom>
                        Ayúdanos para que siga siendo gratuito para todas aquellas pequeñas empresas que lo necesitan.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='body2' style={{ cursor: 'pointer' }}>
                        <AppsIcon />
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant='subtitle1'> </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default CommingSoon;

