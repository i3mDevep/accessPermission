import React from 'react';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import { Row, Col } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import HeaderNavBar from '../LayoutUserForm/Header';
import { Background } from './style';
import Footer from '../LayoutUserForm/Footer';
import MainFeaturedPost from './MainFeaturedPost';
import UserHomeCards from './userHomeCards';

import './userhome.scss';
import '../LayoutUserForm/Footer.scss';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Poppins',
    ].join(','),
  },
});

const useStyles = makeStyles((theme) => ({
  textInput: {
    '& > *': {
      margin: theme.spacing(1),
      width: '21rem',
      size: 'large',
      height: '3.4rem',
      backgroundColor: 'white',
      borderRadius: '0.3rem',
    },
  },
  marginButton: {
    margin: theme.spacing(1),
    size: 'large',
    width: '17rem',
    height: '3.4rem',
    backgroundColor: '#F7BE00',
  },
  heroContentButton: {
    padding: theme.spacing(0, 1, 2, 20),
    backgroundColor: '#1b6ca8',
    '@media (max-width: 540px)': {
      padding: theme.spacing(0, 1, 1, 1),
      //width: '90% !important',
      fontSize: '2.5rem !important',
    },
  },
  heroImg1: {
    padding: theme.spacing(0, 10, 0, 10),
    maxWidth: 650,
    '@media (max-width: 540px)': {
      padding: theme.spacing(0, 1, 1, 1),
      //width: '90% !important',
      fontSize: '2.5rem !important',
    },
  },
  textContent: {
    fontSize: '3rem',
    padding: theme.spacing(0, 0, 0, 0),
    '@media (max-width: 600px)': {
      padding: theme.spacing(0, 1, 1, 1),
      //width: '90% !important',
      fontSize: '2rem !important',
    },
  },
  heroContent: {
    padding: theme.spacing(3, 1, 1, 20),
    backgroundColor: '#1b6ca8',
    '@media (max-width: 600px)': {
      padding: theme.spacing(0, 1, 1, 1),
      //width: '90% !important',
      fontSize: '2rem !important',
    },
  },

  heroContent2: {
    padding: theme.spacing(7, 1, 1, 20),
    backgroundColor: 'white',
    '@media (max-width: 540px)': {
      padding: theme.spacing(0, 1, 1, 1),
      flexDirection: 'column-reverse',
      //width: '90% !important',
      fontSize: '2.5rem !important',
    },
  },
  heroContent3: {
    padding: theme.spacing(7, 1, 1, 20),
    backgroundColor: 'white',
    '@media (max-width: 540px)': {
      padding: theme.spacing(0, 1, 1, 1),

      //width: '90% !important',
      fontSize: '2.5rem !important',
    },
  },
  footer: {
    backgroundColor: '#004876',
    padding: theme.spacing(6),
  },
  title: {
    fontSize: 14,
  },
}));

const mainFeaturedPost = {
  title: 'A tu Manera',
  description:
    'Al usar nuestra plataforma de modo oportuno puede aprovechar al máximo las virtudes de su equipo de trabajo.',
  image: 'https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2FIMAGEN_5Artboard%203.png?alt=media&token=b96a7fe5-f7d6-4977-ac64-60bb9f4b4814',
  imgText: 'A tu manera',
  linkText: 'Ver planes y precios',
};

const UserHome = () => {
  const classes = useStyles();

  return (
    <>
      <Background>
        <HeaderNavBar />
      </Background>
      <div style={{ overflow: 'hidden' }}>
        <ThemeProvider theme={theme}>
          {/* Hero 1 */}
          <Grid container alignItems='flex-start' className={classes.heroContent}>
            <Grid item sm={12} md={5}>
              <Container>
                <Typography variant='h1' className={classes.textContent} style={{ color: '#ffffff' }} align='left' paragraph>
                  Nuestro sistema reduce el tiempo de entrada y salida de clientes y empleados.
                </Typography>
                <Typography variant='h5' style={{ fontSize: '1.5625rem', color: 'white' }} align='left' paragraph>
                  Cumple con los parámetros de bioseguridad requeridos y obtén informes de empleados y clientes.
                </Typography>
              </Container>
            </Grid>
            <Grid item className={classes.heroImg1} sm={12} md={6}>
              <img className='w-100' alt='port' src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2FImage_1%20copy.png?alt=media&token=62cb5ee0-6897-43e4-94ce-5b87a0196b6a' />
              {/*<img className='w-75' style={{ maxWidth: '500px', position: 'absolute' }} alt='port' src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2F5.png?alt=media&token=520496b5-3dfc-43f7-972c-41b1015de39d' /> */}
            </Grid>
          </Grid>
          <Grid container className={classes.heroContentButton}>
            <Grid item xs={3}>
              <form className={classes.textInput} noValidate autoComplete='off'>
                <TextField placeholder='Correo Electrónico' id='outlined-basic' variant='outlined' />
              </form>
            </Grid>
            <Grid item md={5} xs={10}>
              <NavLink to='/register'>
                <Button className={classes.marginButton} type='button' variant='contained' color='primary'>
                  Registrese. !Es grátis¡
                </Button>
              </NavLink>
            </Grid>
          </Grid>

          {/* Hero 2 */}
          <Grid container className={classes.heroContent2}>
            <Grid item sm={12} md={5}>
              <Container>
                <br />
                <Typography variant='h3' style={{ fontSize: '2.1875rem', color: '#172B4D' }} align='left' paragraph>
                  ¡Cuestión de segundos!
                </Typography>
                <Typography variant='h5' style={{ fontSize: '1.5625rem', color: '#172B4D' }} align='left' paragraph>
                  Nuestra base de datos te permite observar de manera detallada y en tiempo real el ingreso y la salida de clientes
                  y empleados.
                </Typography>
              </Container>
              <Grid item md={5} xs={10}>
                <NavLink to='/register'>
                  <Button className={classes.marginButton} type='button' variant='contained' color='primary'>
                    Empieza ahora
                  </Button>
                </NavLink>
              </Grid>
            </Grid>
            <Grid item className={classes.heroImg1} sm={12} md={6}>
              <img className='w-100' alt='port' style={{ maxWidth: '400%' }} src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2FIMAGEN_2Artboard%202.png?alt=media&token=3ddeb9cc-c765-4c38-857f-80034e5aac8c' />
              {/*<img className='w-75' style={{ maxWidth: '500px', position: 'absolute' }} alt='port' src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2F5.png?alt=media&token=520496b5-3dfc-43f7-972c-41b1015de39d' /> */}
            </Grid>
          </Grid>

          {/* Hero 3 */}
          <Grid container alignItems='flex-start' style={{ backgroundColor: '#fbfbfd' }} className={classes.heroContent3}>
            <Grid item className={classes.heroImg1} sm={12} md={6}>
              <img className='w-100' alt='port' style={{ maxWidth: '400%' }} src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2FIMAGEN_3Artboard%202.png?alt=media&token=ab8038c5-24a0-4c7b-aed6-e73de6105c10' />
              {/*<img className='w-75' style={{ maxWidth: '500px', position: 'absolute' }} alt='port' src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2F5.png?alt=media&token=520496b5-3dfc-43f7-972c-41b1015de39d' /> */}
            </Grid>
            <Grid item sm={12} md={5}>
              <Container>
                <br />
                <Typography variant='h3' style={{ fontSize: '2.1875rem', color: '#172B4D' }} align='left' paragraph>
                  Todo en un solo sítio
                </Typography>
                <Typography variant='h5' style={{ fontSize: '1.3rem', color: '#172B4D' }} align='left' paragraph>
                  Sin importar el número de empleados o puntos de venta que tengas, toda la información la
                  puedes gestionar desde un sólo punto.
                </Typography>
              </Container>
            </Grid>
          </Grid>

          {/* Hero 4 */}
          <Grid container alignItems='flex-start' className={classes.heroContent2}>
            <Grid item sm={12} md={5}>
              <Container>
                <br />
                <Typography variant='h3' style={{ fontSize: '1.8rem', color: '#172B4D' }} align='left' paragraph>
                  Descargue y genere informes a partir de la información recolectada.
                </Typography>
                <Typography variant='h5' style={{ fontSize: '1.3rem', color: '#172B4D' }} align='left' paragraph>
                  Impulse la productividad de su empresa
                </Typography>
                <Typography component='div' style={{ fontSize: '1rem', color: '#172B4D' }} align='left' paragraph>
                  <ul>
                    <li>Número de personas que ingresan a un punto de venta</li>
                    <li>Control de ingreso y salida de empleados</li>
                    <li>Gestión de sedes o puntos de venta</li>
                    <li>Información de clientes, edad y sexo</li>
                    <li>Horas de mayor afluencía</li>
                  </ul>
                </Typography>
              </Container>
            </Grid>
            <Grid item className={classes.heroImg1} sm={12} md={6}>
              <img className='w-100' alt='port' style={{ maxWidth: '400%' }} src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2FIMAGEN_4Artboard%202.png?alt=media&token=87119e8c-c2d0-4578-96be-a5e7485e1b37' />
              {/*<img className='w-75' style={{ maxWidth: '500px', position: 'absolute' }} alt='port' src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2F5.png?alt=media&token=520496b5-3dfc-43f7-972c-41b1015de39d' /> */}
            </Grid>
          </Grid>

          {/*Banner Home */}
          <MainFeaturedPost post={mainFeaturedPost} />

          {/* Hero Video */}
          <Grid container alignItems='flex-start' style={{ backgroundColor: '#fbfbfd' }} className={classes.heroContent2}>
            <Grid item className={classes.heroImg1} sm={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                  <video muted width='320' height='540' style={{ outline: 'none', margin: 'auto' }} autoPlay>
                    <source src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fvideos%2FcontrolAppMovil.mp4?alt=media&token=e5f0ba0b-ac13-4212-9724-dd354dcf21c3' type='video/mp4' />
                    <p>This browser does not support the video element.</p>
                  </video>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} md={5}>
              <Container>
                <br />
                <Typography variant='h3' style={{ fontSize: '2.1875rem', color: '#172B4D' }} align='center' paragraph>
                  Descubra como funciona
                </Typography>
                <Typography variant='h6' align='center' color='textSecondary' paragraph>
                  Somos una plataforma de código abierto, podemos ofrecerle nuevas funcionalidades según sus requerimientos.
                </Typography>
                <Typography variant='h5' style={{ fontSize: '1.3rem', color: '#172B4D' }} align='center' paragraph>
                  Descargue nuestra App
                </Typography>
                <br />
                <Grid align='center' item xs={12}>
                  <Link variant='subtitle1' href='https://play.google.com/store/apps/details?id=com.ardobot.ardocontrol'>
                    <img alt='logo' className='text-center' style={{ maxWidth: '50%' }} src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fplaystore.png?alt=media&token=a18e5539-3913-4df6-9fe8-c6e74d10ea6f' />
                  </Link>
                </Grid>
              </Container>
            </Grid>
          </Grid>
          <UserHomeCards />
        </ThemeProvider>
      </div>
      {/* Footer */}
      <footer className={classes.footer}>
        <Row>
          <Col sm={12} md={4} style={{ textAlign: 'center', padding: '20px' }}>
            <h4 style={{ fontSize: '1.4rem', color: 'white' }}>Powered by</h4>
            <br />
            <FaReact size={100} color='white' />
            <br />
          </Col>
          <Col sm={12} md={4} style={{ textAlign: 'center', padding: '20px' }}>
            <h4 style={{ fontSize: '1.4rem', color: 'white' }}>Developed with</h4>
            <br />
            <img alt='logo' src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fardobot_logo.png?alt=media&token=6249da59-eaa5-4ea6-a655-9c4932d11b7c' />
            <br />
          </Col>
          <Col sm={12} md={4} style={{ textAlign: 'center', padding: '20px' }}>
            <h4 style={{ fontSize: '1.4rem', color: 'white' }}>Support in</h4>
            <br />
            <img style={{ height: '100px' }} alt='firebase' src='https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png?hl=es-419' />
            <br />
          </Col>
        </Row>
      </footer>

      <Footer />
      {/* End footer */}
    </>
  );
};

export default UserHome;
