import React from 'react';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate';
import { Row, Col } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Background } from './style';
import HeaderNavBar from '../LayoutUserForm/Header';
import './userhome.scss';

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
}));

const UserHome = () => {
  const classes = useStyles();

  return (
    <>
      <Background>
        <HeaderNavBar />
      </Background>
      <body>
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
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
          <video width='320' height='540' style={{ outline: 'none' }} controls>
            <source src='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fvideos%2FcontrolAppMovil.mp4?alt=media&token=e5f0ba0b-ac13-4212-9724-dd354dcf21c3' type='video/mp4' />
            <p>This browser does not support the video element.</p>
          </video>
        </Container>
        {/* <Row>
          <Col style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', padding: '50px' }}>
            <Grid item container xs={3} alignItems='flex-end' direction='column'>
              <Grid item>
                <CircleImage title='Escaner de cedula' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Ftemperatura.png?alt=media&token=e622475c-6ceb-4937-93a2-a0f0c911e127' />
              </Grid>
              <Grid item>
                <CircleImage title='Escaner de cedula' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fcontrol%20de%20fechas.png?alt=media&token=3c94d7a5-6ced-47d5-86f4-6f87a2eead81' />
              </Grid>
              <Grid item>
                <CircleImage title='Escaner de cedula' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fcuestionarios.png?alt=media&token=0201c4f5-5306-401e-989f-e16b523c1485' />
              </Grid>
              <Grid item>
                <CircleImage title='Escaner de cedula' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fdescarga.png?alt=media&token=28f16383-851e-45ea-9e4f-86c827fd62ba' />
              </Grid>
            </Grid>
            <Grid item container xs={3} md={10} alignItems='flex-center' direction='row'>
              <Grid item>
                <Typography variant='caption' align='center' paragraph>
                  *Aplican Terminos y Condiciones
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='caption' align='center' paragraph>
                  *Aplican Terminos y Condiciones
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='caption' align='center' paragraph>
                  *Aplican Terminos y Condiciones
                </Typography>
              </Grid>
            </Grid>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', padding: '50px' }}>
            <Grid item xs={6} alignItems='flex-end' direction='row'>
              <Grid item>
                <CircleImage title='Escaner de cedula' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Freloj.png?alt=media&token=a583adfa-3416-466f-9d64-f3f0e37ecc69' />
              </Grid>
              <Grid item>
                <CircleImage title='Escaner de cedula' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Finformes.png?alt=media&token=5502e0a4-a3ad-4696-9d5f-56427fd7be89' />
              </Grid>
              <Grid item>
                <CircleImage title='Escaner de cedula' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Fregistro.png?alt=media&token=a23f76b2-c093-4a0b-ae5c-4429c24829d8' />
              </Grid>
              <Grid item>
                <CircleImage title='Escaner de cedula' URL='https://firebasestorage.googleapis.com/v0/b/coronavirus-control.appspot.com/o/recourses%2Flocalizacion.png?alt=media&token=1553e202-5134-45fe-be3d-04ddc368443b' />
              </Grid>
            </Grid>
          </Col>

        </Row> */}
        {/* <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random'
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>
                      View
                    </Button>
                    <Button size='small' color='primary'>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container> */}
      </body>
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
      {/* End footer */}
    </>
  );
};

const CircleImage = ({ URL, title }) => {
  return (
    <Tooltip title={title} placement='left-end'>
      <Button style={{ borderRadius: '100%' }}>
        <img style={{ width: '100px' }} alt='imagecircle' src={URL} />
      </Button>
    </Tooltip>
  );
};
export default UserHome;
