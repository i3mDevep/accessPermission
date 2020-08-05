import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import { Row, Col } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Background } from './style';
import HeaderNavBar from '../LayoutUserForm/Header';
import Footer from '../LayoutUserForm/Footer';
import './userhome.scss';
import '../LayoutUserForm/Footer.scss';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent1: {
    backgroundColor: 'white',
    padding: theme.spacing(0, 0, 0, 0),
  },
  heroContent: {
    backgroundColor: '#1b6ca8',
    padding: theme.spacing(5, 0, 10, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#004876',
    padding: theme.spacing(6),
  },
  img: {
    padding: theme.spacing(2, 0, 0, 0),
    //textAlign: 'center',
  },
  text: {
    margin: theme.spacing(2),
    padding: theme.spacing(5, 0, 0, 0),
    textAlign: 'center',
    variant: 'h4',
    direction: 'column',
    fontSize: '0.8rem',
    color: theme.palette.text.primary,
  },
}));

const UserHome = () => {
  const classes = useStyles();

  return (
    <>
      <Background>
        <HeaderNavBar />
      </Background>
      <div>
        {/* Hero unit */}
        <Row className={classes.heroContent}>
          <Col sm='12' md='6'>
            <img className='w-75' style={{ maxWidth: '500px', position: 'absolute' }} alt='port' src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2F5.png?alt=media&token=520496b5-3dfc-43f7-972c-41b1015de39d' />
          </Col>
          <Col sm='12' md='6'>
            <Container className='p-5 container_user_home'>
              <h1 className='text-center p-2' style={{ fontSize: '1.8rem' }}>
                ¿En que consiste?
              </h1>
              <Typography variant='h5' style={{ fontSize: '1.2rem' }} align='center' paragraph>
                Somos una plataforma tecnológica, de uso gratuito  que  te permite
                cumplir con el control de bioseguridad para tu negocio, reportes en
                Tiempo Real, y registro de temperatura de tus clientes y trabajadores
              </Typography>
              <Typography variant='caption' align='center' paragraph>
                *Aplican Terminos y Condiciones
              </Typography>
            </Container>
          </Col>
        </Row>
        <Row className={classes.heroContent1}>
          <Col md='3' />
          <Col sm='12' md='4' style={{ fontSize: '1.8rem', margin: 'auto' }}>
            <Container style={{ padding: '50px' }}>
              <h1 className='text-center p-2' style={{ fontSize: '1.8rem' }}>
                ¿Que queremos?
              </h1>
              <Typography variant='h4' style={{ fontSize: '1.2rem' }} align='center' paragraph>
                Apoyarnos los unos a los otros,
                por eso aportamos nuestros conocimientos
                en la tecnologia para brindarte la mayor
                ayuda posible en esta esta situacion de
                pandemia.
              </Typography>
            </Container>
          </Col>
          <Col align='left' sm='10' md='4'>
            <img className='w-100' alt='port' style={{ maxWidth: '500px' }} src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fhome3.jpg?alt=media&token=59a4c115-47ac-4764-bb70-56e41c99c930' />
          </Col>
        </Row>
        <Grid item xs={12}>
          <h1 className='text-center p-2' style={{ fontSize: '1.8rem', padding: '5' }}> Servicios </h1>
        </Grid>
        <Container style={{ overflow: 'hidden', display: 'flex' }}>
          <Row>
            <Col sm={12} md={4}>
              <Grid container alignItems='flex-start' direction='column' spacing={1}>
                <Grid container>
                  <Grid xs={3} className={classes.img} item>
                    <CircleImage title='Registro de Temperatúra' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Ftemperatura.png?alt=media&token=e622475c-6ceb-4937-93a2-a0f0c911e127' />
                  </Grid>
                  <Grid xs={8} item>
                    <Typography className={classes.text} paragraph>
                      Registro de Temeperatúra de Clientes y Empleados.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs={8} item>
                    <Typography className={classes.text} paragraph>
                      Registro de los datos generales de clientes y empleados
                    </Typography>
                  </Grid>
                  <Grid xs={3} className={classes.img} item>
                    <CircleImage title='Registro de clientes, datos etc.' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fregistro.png?alt=media&token=a23f76b2-c093-4a0b-ae5c-4429c24829d8' />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs={3} className={classes.img} item>
                    <CircleImage title='Cuestionarios' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fcuestionarios.png?alt=media&token=0201c4f5-5306-401e-989f-e16b523c1485' />
                  </Grid>
                  <Grid xs={8} item>
                    <Typography className={classes.text} paragraph>
                      Gestión de cuestionarios: Para la evaluación general del estado de salud,
                      cuyas preguntas y contenido se pueden personalizar.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs={8} item>
                    <Typography className={classes.text} paragraph>
                      Localización de clientes y empleados: A través de la lectura de código
                      QR o documentos de identidad, usted podrá estar enterado donde se encuentra
                      el personal de su interés.
                    </Typography>
                  </Grid>
                  <Grid xs={3} className={classes.img} item>
                    <CircleImage title='Registro de clientes, datos etc.' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Flocalizacion.png?alt=media&token=1553e202-5134-45fe-be3d-04ddc368443b  ' />
                  </Grid>
                </Grid>
              </Grid>
            </Col>
            <Col sm={12} md={4}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                  <video muted width='320' height='540' style={{ outline: 'none', margin: 'auto' }} autoPlay>
                    <source src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fvideos%2FcontrolAppMovil.mp4?alt=media&token=e5f0ba0b-ac13-4212-9724-dd354dcf21c3' type='video/mp4' />
                    <p>This browser does not support the video element.</p>
                  </video>
                </Grid>
              </Grid>
            </Col>
            <Col sm={12} md={4}>
              <Grid container alignItems='flex-start' direction='column' spacing={1}>
                <Grid container>
                  <Grid xs={3} className={classes.img} item>
                    <CircleImage title='Registro de Temperatúra' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Freloj.png?alt=media&token=a583adfa-3416-466f-9d64-f3f0e37ecc69' />
                  </Grid>
                  <Grid xs={8} item>
                    <Typography className={classes.text} paragraph>
                      Control en Tiempo Real: Nuestro sistema está basado en bases de datos en tiempo real.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs={8} item>
                    <Typography className={classes.text} paragraph>
                      Gestión alarmas internas: En los casos en los que una persona no cumpla con las
                      condiciones necesarias.
                    </Typography>
                  </Grid>
                  <Grid xs={3} className={classes.img} item>
                    <CircleImage title='Alarmas.' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Falarma.png?alt=media&token=3beb929b-96c6-4259-9c5e-bebbc79b099b' />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs={3} className={classes.img} item>
                    <CircleImage title='Descarga Nuesta App' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fdescarga.png?alt=media&token=28f16383-851e-45ea-9e4f-86c827fd62ba' />
                  </Grid>
                  <Grid xs={8} item>
                    <Typography className={classes.text} paragraph>
                      Nuesta App es de uso gratuito, compatible con dispositivos Android.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs={8} item>
                    <Typography className={classes.text} paragraph>
                      Nómina: Mediante la lectura de códigos QR
                      y/o documento de identidad, usted podrá saber cuál es la hora de entrada y salida
                      de sus empleados, o las horas pico de mayor afluencia de sus clientes.
                    </Typography>
                  </Grid>
                  <Grid xs={3} className={classes.img} item>
                    <CircleImage title='Nómina.' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fcontrol%20de%20fechas.png?alt=media&token=8effece5-f9ef-430b-9215-877b2e8f035e' />
                  </Grid>
                </Grid>
              </Grid>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Footer */}
      <footer className={classes.footer}>
        <Row>
          <Col sm='12' md='4' style={{ textAlign: 'center', padding: '20px' }}>
            <h4 style={{ fontSize: '1.4rem', color: 'white' }}>Powered by</h4>
            <br />
            <FaReact size={100} color='white' />
            <br />
          </Col>
          <Col sm='12' md='4' style={{ textAlign: 'center', padding: '20px' }}>
            <h4 style={{ fontSize: '1.4rem', color: 'white' }}>Developed with</h4>
            <br />
            <img alt='logo' src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fardobot_logo.png?alt=media&token=6249da59-eaa5-4ea6-a655-9c4932d11b7c' />
            <br />
          </Col>
          <Col sm='12' md='4' style={{ textAlign: 'center', padding: '20px' }}>
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

const CircleImage = ({ URL, title }) => {
  return (
    <Tooltip title={title} placement='left-end'>
      <Button style={{ borderRadius: '100%', maxWidth: '10%' }}>
        <img style={{ width: '100px' }} alt='imagecircle' src={URL} />
      </Button>
    </Tooltip>
  );
};
export default UserHome;
